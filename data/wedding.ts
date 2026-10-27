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

export const weddingData = {
  coupleBranding: "Francesca & Andrea",
  coupleProse: "Francesca e Andrea",
  dateFormatted: "20 maggio 2027",
  dateShort: "20.05.27",
  dateNumbers: "20·05·2027",
  locationName: "Villa Toscanini",
  locationRegion: "Ripalta Guerina (CR)",
  locationWebsite: "https://villatoscanini.com/",
  address: "Via XXV Aprile, 33 – 26010 Ripalta Guerina (CR), Italia",
  mapsUrl: "https://maps.google.com/?q=Villa+Toscanini+Via+XXV+Aprile+33+Ripalta+Guerina",
  
  heroLabel: "STIAMO PER SPOSARCI",
  heroSubtitle: "Ripalta Guerina (CR)",
  heroCta: "Scopri la nostra storia",
  heroScrollText: "Scorri per continuare",
  
  invitationLabel: "L'INVITO",
  invitationHeading: "Saremo felici di condividere con voi questo giorno speciale",
  invitationQuote: "Insieme alle nostre famiglie, siamo felici di invitarvi a celebrare con noi l'inizio di un nuovo capitolo della nostra vita.",

  storyLabel: "LA NOSTRA STORIA",
  storyHeading: "Tutto è iniziato da un incontro",
  storyText: "Ci siamo incontrati quasi per caso, senza sapere che quel momento avrebbe cambiato le nostre vite. Da allora abbiamo condiviso viaggi, risate, progetti e piccoli momenti che sono diventati grandi ricordi.",
  
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
  ceremony: {
    title: "LA CERIMONIA",
    time: "Ore 17:30",
    venue: "Villa Toscanini",
    location: "Ripalta Guerina (CR)"
  },
  reception: {
    title: "IL RICEVIMENTO",
    time: "Ore 18:30",
    venue: "Villa Toscanini",
    location: "Ripalta Guerina (CR)"
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
  dressCodeHers: "Abiti eleganti, completi sartoriali o tute raffinate.",
  dressCodeHis: "Completo elegante o abito da cerimonia.",
  dressCodeNote: "Vi invitiamo a scegliere un abbigliamento elegante e adatto a una splendida giornata di maggio in villa.",

  registryLabel: "UN PENSIERO PER NOI",
  registryHeading: "La vostra presenza è il regalo più bello",
  registryText: "Avervi accanto in questo giorno sarà per noi il regalo più importante. Se desiderate comunque farci un pensiero, abbiamo preparato una piccola lista.",
  registryIban: "IT99 A 0123 4567 8901 2345 6789 012",
  registryBeneficiary: "Francesca & Andrea",
  registryBank: "Banca Intesa Sanpaolo",

  finalMessageText: "Non vediamo l'ora di festeggiare insieme a voi.",
  footerQuote: "Con amore, Francesca & Andrea"
};
