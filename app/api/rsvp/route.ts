interface RsvpPayload {
  submissionId: string;
  name: string;
  email: string;
  attending: "yes" | "no";
  guestCount: number;
  dietary: string;
  allergies: string;
  favoriteSong: string;
  message: string;
  company: string;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const readText = (
  value: unknown,
  maxLength: number,
  required = false,
): string | null => {
  if (typeof value !== "string") return null;

  const text = value.trim();
  if ((required && !text) || text.length > maxLength) return null;
  return text;
};

const parsePayload = (value: unknown): RsvpPayload | null => {
  if (!isRecord(value)) return null;

  const submissionId = readText(value.submissionId, 36, true);
  const name = readText(value.name, 200, true);
  const email = readText(value.email, 254, true);
  const dietary = readText(value.dietary, 1000);
  const allergies = readText(value.allergies, 1000);
  const favoriteSong = readText(value.favoriteSong, 200);
  const message = readText(value.message, 2000);
  const company = readText(value.company, 200);

  if (
    !submissionId ||
    !/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i.test(
      submissionId,
    ) ||
    !name ||
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    dietary === null ||
    allergies === null ||
    favoriteSong === null ||
    message === null ||
    company === null ||
    (value.attending !== "yes" && value.attending !== "no")
  ) {
    return null;
  }

  const guestCount =
    value.attending === "yes" &&
    typeof value.guestCount === "number" &&
    Number.isInteger(value.guestCount) &&
    value.guestCount >= 1 &&
    value.guestCount <= 4
      ? value.guestCount
      : value.attending === "no"
        ? 0
        : null;

  if (guestCount === null) return null;

  return {
    submissionId,
    name,
    email,
    attending: value.attending,
    guestCount,
    dietary,
    allergies,
    favoriteSong,
    message,
    company,
  };
};

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return Response.json({ error: "Formato della richiesta non valido." }, { status: 415 });
  }

  const rawBody = await request.text();
  if (rawBody.length > 10_000) {
    return Response.json({ error: "La richiesta è troppo grande." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "La richiesta non è valida." }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return Response.json({ error: "Controlla i dati inseriti e riprova." }, { status: 400 });
  }

  if (payload.company) {
    return Response.json({ error: "Impossibile inviare la risposta." }, { status: 400 });
  }

  const scriptUrl = process.env.APPS_SCRIPT_RSVP_URL;
  const sharedSecret = process.env.APPS_SCRIPT_RSVP_SECRET;
  if (!scriptUrl || !sharedSecret) {
    console.error("RSVP integration is missing server configuration.");
    return Response.json(
      { error: "Il servizio RSVP non è configurato." },
      { status: 503 },
    );
  }

  let endpoint: URL;
  try {
    endpoint = new URL(scriptUrl);
  } catch {
    console.error("RSVP integration URL is invalid.");
    return Response.json(
      { error: "Il servizio RSVP non è configurato correttamente." },
      { status: 503 },
    );
  }

  if (endpoint.protocol !== "https:" || endpoint.hostname !== "script.google.com") {
    console.error("RSVP integration URL must use the Apps Script HTTPS endpoint.");
    return Response.json(
      { error: "Il servizio RSVP non è configurato correttamente." },
      { status: 503 },
    );
  }

  try {
    const upstreamResponse = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, secret: sharedSecret }),
      cache: "no-store",
      signal: AbortSignal.timeout(20_000),
    });

    let result: unknown;
    try {
      result = await upstreamResponse.json();
    } catch {
      console.error("Apps Script returned a non-JSON RSVP response.");
      return Response.json(
        { error: "Non è stato possibile confermare il salvataggio. Riprova." },
        { status: 502 },
      );
    }

    if (
      !upstreamResponse.ok ||
      !isRecord(result) ||
      result.ok !== true ||
      result.saved !== true
    ) {
      console.error("Apps Script rejected or failed to save an RSVP.");
      return Response.json(
        { error: "Non è stato possibile salvare la risposta. Riprova." },
        { status: 502 },
      );
    }

    const notificationSent = result.notificationSent === true;
    return Response.json(
      { ok: true, notificationSent },
      { status: notificationSent ? 200 : 202 },
    );
  } catch (error) {
    console.error("Could not reach the Apps Script RSVP endpoint.", error);
    return Response.json(
      { error: "Il servizio non è raggiungibile. Controlla la connessione e riprova." },
      { status: 502 },
    );
  }
}
