const RSVP_HEADERS = [
  "Submission ID",
  "Timestamp",
  "Nome",
  "Email",
  "Partecipa",
  "Numero invitati",
  "Esigenze alimentari",
  "Allergie",
  "Canzone",
  "Messaggio",
  "Stato notifica email",
];

function authorizeRsvp() {
  const properties = PropertiesService.getScriptProperties();
  const spreadsheetId = properties.getProperty("RSVP_SPREADSHEET_ID");
  if (!spreadsheetId) {
    throw new Error("Set RSVP_SPREADSHEET_ID in Script Properties first.");
  }

  SpreadsheetApp.openById(spreadsheetId).getSheets();
  MailApp.getRemainingDailyQuota();
}

function doPost(event) {
  const properties = PropertiesService.getScriptProperties();
  const expectedSecret = properties.getProperty("RSVP_SHARED_SECRET");

  try {
    if (!expectedSecret || !event || !event.postData || !event.postData.contents) {
      return jsonResponse({ ok: false, error: "Configurazione o richiesta non valida." });
    }

    const payload = JSON.parse(event.postData.contents);
    if (payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Richiesta non autorizzata." });
    }

    const rsvp = validateRsvp(payload);
    const spreadsheetId = properties.getProperty("RSVP_SPREADSHEET_ID");
    const notificationEmail = properties.getProperty("RSVP_NOTIFICATION_EMAIL");
    if (!spreadsheetId || !notificationEmail) {
      throw new Error("Missing RSVP spreadsheet or notification email configuration.");
    }

    const lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) {
      throw new Error("Could not acquire the RSVP submission lock.");
    }

    try {
      const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      const sheet = getRsvpSheet(spreadsheet);
      const existingRow = findSubmissionRow(sheet, rsvp.submissionId);
      const row = existingRow || appendSubmission(sheet, rsvp);
      const notificationStatus = String(sheet.getRange(row, 11).getValue());

      if (notificationStatus === "SENT") {
        return jsonResponse({ ok: true, saved: true, notificationSent: true });
      }

      try {
        MailApp.sendEmail({
          to: notificationEmail,
          subject: "Nuova risposta RSVP",
          body: formatNotification(rsvp),
        });
        sheet.getRange(row, 11).setValue("SENT");
        return jsonResponse({ ok: true, saved: true, notificationSent: true });
      } catch (error) {
        console.error("RSVP was saved, but its email notification failed.", error);
        sheet.getRange(row, 11).setValue("FAILED");
        return jsonResponse({ ok: true, saved: true, notificationSent: false });
      }
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    console.error("Could not process RSVP submission.", error);
    return jsonResponse({ ok: false, error: "Impossibile elaborare la risposta." });
  }
}

function validateRsvp(payload) {
  const submissionId = requiredText(payload.submissionId, 36);
  const name = requiredText(payload.name, 200);
  const email = requiredText(payload.email, 254);
  const attending = payload.attending;

  if (
    !/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i.test(
      submissionId
    )
  ) {
    throw new Error("Invalid RSVP submission ID.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Invalid RSVP email address.");
  }

  if (attending !== "yes" && attending !== "no") {
    throw new Error("Invalid RSVP attendance response.");
  }

  const guestCount = attending === "yes" ? Number(payload.guestCount) : 0;
  if (
    attending === "yes" &&
    (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 4)
  ) {
    throw new Error("Invalid RSVP guest count.");
  }

  return {
    submissionId: submissionId,
    name: name,
    email: email,
    attending: attending,
    guestCount: guestCount,
    dietary: optionalText(payload.dietary, 1000),
    allergies: optionalText(payload.allergies, 1000),
    favoriteSong: optionalText(payload.favoriteSong, 200),
    message: optionalText(payload.message, 2000),
  };
}

function requiredText(value, maxLength) {
  const text = optionalText(value, maxLength);
  if (!text) {
    throw new Error("A required RSVP field is missing.");
  }
  return text;
}

function optionalText(value, maxLength) {
  if (typeof value !== "string") {
    throw new Error("An RSVP field has an invalid type.");
  }
  const text = value.trim();
  if (text.length > maxLength) {
    throw new Error("An RSVP field is too long.");
  }
  return text;
}

function getRsvpSheet(spreadsheet) {
  const sheet = spreadsheet.getSheetByName("RSVP") || spreadsheet.insertSheet("RSVP");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(RSVP_HEADERS);
  }
  return sheet;
}

function findSubmissionRow(sheet, submissionId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return 0;
  }

  const match = sheet
    .getRange(2, 1, lastRow - 1, 1)
    .createTextFinder(submissionId)
    .matchEntireCell(true)
    .findNext();
  return match ? match.getRow() : 0;
}

function appendSubmission(sheet, rsvp) {
  sheet.appendRow([
    rsvp.submissionId,
    new Date(),
    asPlainText(rsvp.name),
    asPlainText(rsvp.email),
    rsvp.attending,
    rsvp.guestCount,
    asPlainText(rsvp.dietary),
    asPlainText(rsvp.allergies),
    asPlainText(rsvp.favoriteSong),
    asPlainText(rsvp.message),
    "PENDING",
  ]);
  return sheet.getLastRow();
}

function asPlainText(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function formatNotification(rsvp) {
  const attendance = rsvp.attending === "yes" ? "Parteciperà" : "Non parteciperà";
  return [
    "È arrivata una nuova risposta RSVP.",
    "",
    "Nome: " + rsvp.name,
    "Email: " + rsvp.email,
    "Risposta: " + attendance,
    "Numero invitati: " + rsvp.guestCount,
    "Esigenze alimentari: " + rsvp.dietary,
    "Allergie: " + rsvp.allergies,
    "Canzone: " + rsvp.favoriteSong,
    "Messaggio: " + rsvp.message,
  ].join("\n");
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON
  );
}
