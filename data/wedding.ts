export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  subtitle?: string;
}

export interface TravelInfo {
  icon: string;
  title: string;
  options: {
    name: string;
    detail: string;
  }[];
  note?: string;
}

const brideName = "Francesca";
const groomName = "Andrea";
const coupleBranding = `${brideName} & ${groomName}`;
const coupleProse = `${brideName} e ${groomName}`;
const dateFormatted = "20 maggio 2027";
const locationName = "Villa Toscanini";
const locationTown = "Ripalta Guerina";
const locationWebsite = "https://villatoscanini.com/";
const rsvpCta = "Conferma la presenza";

export const weddingData = {
  brideName,
  groomName,
  coupleBranding,
  coupleProse,
  monogram: `${brideName[0]} & ${groomName[0]}`,
  dateFormatted,
  dateShort: "20.05.27",
  dateNumbers: "20·05·2027",
  locationName,
  locationRegion: `${locationTown} (CR)`,
  locationWebsite,
  locationWebsiteDisplay: new URL(locationWebsite).hostname.replace(/^www\./, ""),
  address: "Via XXV Aprile, 33 – 26010 Ripalta Guerina (CR), Italia",
  mapsUrl: "https://maps.google.com/?q=Villa+Toscanini+Via+XXV+Aprile+33+Ripalta+Guerina",
  instagramUrl: "https://instagram.com",

  meta: {
    title: `${coupleBranding} — ${dateFormatted}`,
    description: `${coupleProse} vi invitano a celebrare con loro il giorno del loro matrimonio a ${locationName}, ${locationTown}.`,
    ogTitle: `${coupleBranding} — Matrimonio a ${locationName}`,
    ogDescription: `${coupleProse} vi invitano a celebrare con loro il giorno del loro matrimonio a ${locationName} (${locationTown}) il ${dateFormatted}.`,
    siteName: `${coupleBranding} Wedding`,
  },

  nav: {
    story: "La nostra storia",
    wedding: "Il matrimonio",
    schedule: "Programma",
    location: "Location",
    rsvp: "RSVP",
    instagram: "Instagram",
  },

  a11y: {
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    mobileMenu: "Menu di navigazione mobile",
    invitationDialog: `Invito al matrimonio di ${coupleProse}`,
    openInvitation: "Apri l'invito",
    lightbox: "Galleria immagini a schermo intero",
    closeLightbox: "Chiudi lightbox",
    previousImage: "Immagine precedente",
    nextImage: "Immagine successiva",
    registryDialog: "Dettagli Lista Nozze",
    close: "Chiudi",
  },

  images: {
    hero: `Il parco di ${locationName} al tramonto`,
    story: `${coupleProse} in una passeggiata a picco sull'oceano`,
    location: `Architettura storica di ${locationName}`,
    dressCodeDetail: "Dettaglio floreale e composizione botanica",
    dressCodeStyle: "Tavolo allestito con stile sartoriale",
    finalMessage: "Passeggiata romantica nel viale alberato",
  },

  envelopeOpen: "Apri l'invito",
  envelopeSkip: "Salta",
  rsvpCta,
  
  heroLabel: "STIAMO PER SPOSARCI",
  heroSubtitle: `${locationTown} (CR)`,
  heroCta: "Scopri la nostra storia",
  heroScrollText: "Scorri per continuare",
  
  invitationLabel: "L'INVITO",
  invitationHeading: "Saremo felici di condividere con voi questo giorno speciale",
  invitationQuote: "Insieme alle nostre famiglie, siamo felici di invitarvi a celebrare con noi l'inizio di un nuovo capitolo della nostra vita.",

  storyLabel: "LA NOSTRA STORIA",
  storyHeading: "Tutto è iniziato da un incontro",
  storyText: "Ci siamo incontrati quasi per caso, senza sapere che quel momento avrebbe cambiato le nostre vite. Da allora abbiamo condiviso viaggi, risate, progetti e piccoli momenti che sono diventati grandi ricordi.",
  storyTextSecondary: "Tra passeggiate sulle sponde del lago, tramonti condivisi e sogni coltivati giorno dopo giorno, abbiamo scoperto che la felicità sta nel viaggiare insieme nella stessa direzione.",
  storyTimelineLabel: "IL NOSTRO PERCORSO",
  
  timeline: [
    {
      year: "2023",
      title: "Il nostro primo incontro",
      description: "Uno sguardo distratto in un pomeriggio di fine primavera e una conversazione durata ore."
    },
    {
      year: "2024",
      title: "La nostra prima grande avventura",
      description: "Il primo viaggio insieme e la scoperta di una complicità unica e inseparabile."
    },
    {
      year: "2026",
      title: "La proposta",
      description: "Al tramonto, con una promessa da custodire per sempre."
    },
    {
      year: "2027",
      title: "Il nostro \"sì\"",
      description: "L'inizio del nostro nuovo capitolo circondati da tutte le persone più care."
    }
  ] as TimelineEvent[],

  weddingLabel: "IL MATRIMONIO",
  weddingHeading: "Un giorno da vivere insieme",
  weddingCta: "Scopri la location",
  ceremony: {
    title: "LA CERIMONIA",
    time: "Ore 17:30",
    venue: locationName,
    location: `${locationTown} (CR)`
  },
  reception: {
    title: "IL RICEVIMENTO",
    time: "Ore 18:30",
    venue: locationName,
    location: `${locationTown} (CR)`
  },

  scheduleLabel: "IL PROGRAMMA",
  scheduleHeading: "La giornata",
  schedule: [
    { time: "15:30", title: "Arrivo degli invitati", subtitle: "Benvenuto nei giardini di Villa Toscanini" },
    { time: "16:00", title: "Cerimonia", subtitle: "Scambio delle promesse" },
    { time: "17:00", title: "Aperitivo", subtitle: "Cocktail e musica dal vivo nel parco" },
    { time: "18:30", title: "Cena", subtitle: "Banchetto nuziale nelle sale storiche" },
    { time: "21:30", title: "Taglio della torta e brindisi", subtitle: "Un momento di gioia insieme" },
    { time: "22:00", title: "Si balla", subtitle: "DJ set e open bar" },
    { time: "00:00", title: "Festa fino a tarda notte", subtitle: "Musica e festeggiamenti" }
  ] as ScheduleItem[],

  locationLabel: "LA LOCATION",
  locationDescription: "Una splendida ed elegante dimora d'epoca immersa nel verde di Ripalta Guerina, perfetta cornice per un giorno indimenticabile.",
  locationAddressLabel: "Indirizzo",
  locationWebsiteLabel: "Sito ufficiale:",
  locationMapsCta: "Apri in Google Maps",
  locationTravelCta: "Come arrivare",

  travelLabel: "COME ARRIVARE",
  travelHeading: "Tutte le informazioni per raggiungerci",
  travel: [
    {
      icon: "Plane",
      title: "IN AEREO",
      options: [
        { name: "Milano Linate (LIN)", detail: "Circa 45 minuti di auto" },
        { name: "Milano Bergamo Orio al Serio (BGY)", detail: "Circa 50 minuti di auto" },
        { name: "Milano Malpensa (MXP)", detail: "Circa 1 ora e 15 minuti di auto" }
      ]
    },
    {
      icon: "Car",
      title: "IN AUTO",
      options: [
        { name: "Autostrada A35 (BreBeMi) / A21", detail: "Uscita Crema o Lodi, proseguire verso Ripalta Guerina" }
      ],
      note: "Un ampio parcheggio privato custodito sarà riservato a tutti i nostri ospiti direttamente all'interno della villa."
    },
    {
      icon: "Bus",
      title: "TRASFERIMENTI",
      options: [
        { name: "Servizio Navetta", detail: "Disponibile tra gli hotel convenzionati e Villa Toscanini" }
      ],
      note: "Per rendere più semplice il vostro arrivo, sarà disponibile un servizio navetta dedicato sia prima della cerimonia sia a fine serata."
    }
  ] as TravelInfo[],

  dressCodeLabel: "DRESS CODE",
  dressCodeHeading: "Elegante, con un tocco primaverile",
  dressCodeHersLabel: "PER LEI",
  dressCodeHers: "Abiti eleganti, completi sartoriali o tute raffinate.",
  dressCodeHersDetail: "Toni pastello, abiti lunghi o midi, tessuti leggeri adatti ad una giornata estiva.",
  dressCodeHisLabel: "PER LUI",
  dressCodeHis: "Completo elegante o abito da cerimonia.",
  dressCodeHisDetail: "Completo elegante in lino o fresco lana, giacca e cravatta / papillon opzionale.",
  dressCodeNote: "Vi invitiamo a scegliere un abbigliamento elegante e adatto a una splendida giornata di maggio in villa.",

  registryLabel: "UN PENSIERO PER NOI",
  registryHeading: "La vostra presenza è il regalo più bello",
  registryText: "Avervi accanto in questo giorno sarà per noi il regalo più importante. Se desiderate comunque farci un pensiero, abbiamo preparato una piccola lista.",
  registryCta: "Scopri la lista nozze",
  registryModalLabel: "LISTA NOZZE",
  registryModalHeading: "Un pensiero per noi",
  registryModalText: "Il regalo più grande per noi è festeggiare insieme a voi. Se desiderate contribuire al nostro viaggio di nozze, potete utilizzare i seguenti estremi bancari:",
  registryBeneficiaryLabel: "Intestatario",
  registryBankLabel: "Banca",
  registryIbanLabel: "IBAN",
  registryCopy: "Copia",
  registryCopied: "Copiato!",
  registryClose: "Chiudi",
  registryIban: "IT99 A 0123 4567 8901 2345 6789 012",
  registryBeneficiary: coupleBranding,
  registryBank: "Banca Intesa Sanpaolo",

  accommodationCta: "Scopri l'hotel",

  rsvp: {
    label: "RSVP",
    heading: "Ci sarete?",
    subtitle: "La vostra presenza renderà questo giorno ancora più speciale.",
    successLabel: "CONFERMA RICEVUTA",
    successThanks: "Grazie",
    sendAnother: "Invia un'altra conferma",
    nameLabel: "Nome e cognome *",
    namePlaceholder: "Mario Rossi",
    emailLabel: "Email *",
    emailPlaceholder: "mario.rossi@example.com",
    attendingLabel: "Parteciperete? *",
    attendingYes: "Sì, con grande piacere",
    attendingNo: "Ci dispiace, non potremo esserci",
    guestCountLabel: "Numero di invitati (incluso te)",
    guestCountOptions: ["1 persona", "2 persone", "3 persone", "4 persone"],
    dietaryLabel: "Intolleranze o esigenze alimentari",
    dietaryPlaceholder: "Es. vegetariano, vegano, senza glutine...",
    allergiesLabel: "Allergie",
    allergiesPlaceholder: "Segnala eventuali allergie alimentari...",
    songLabel: "La vostra canzone del cuore",
    songPlaceholder: "Titolo ed artista per la playlist della festa...",
    messageLabel: "Un messaggio per gli sposi",
    messagePlaceholder: `Lascia un pensiero personale a ${coupleProse}...`,
    submitting: "Invio in corso...",
    submit: rsvpCta,
    errors: {
      name: "Inserisci il tuo nome e cognome.",
      email: "Inserisci un indirizzo email valido.",
      attending: "Indica se parteciperai.",
    },
  },

  finalMessageText: "Non vediamo l'ora di festeggiare insieme a voi.",
  footerQuote: `Con amore, ${coupleBranding}`
};
