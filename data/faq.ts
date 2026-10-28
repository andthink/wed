export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData = {
  label: "INFORMAZIONI UTILI",
  heading: "Prima di partire",
  items: [
    {
      id: "faq-1",
      question: "A che ora è consigliato arrivare?",
      answer: "Vi consigliamo di arrivare circa 30 minuti prima dell'inizio della cerimonia (ore 17:00) per accomodarvi con calma nei giardini di Villa Toscanini e godervi l'aperitivo di benvenuto."
    },
    {
      id: "faq-2",
      question: "Come dovrei vestirmi?",
      answer: "L'abbigliamento richiesto è elegante, con un tocco primaverile. Consigliamo scarpe comode per i camminamenti nei giardini e nel parco della villa."
    },
    {
      id: "faq-3",
      question: "È disponibile un parcheggio?",
      answer: "Sì, un ampio parcheggio privato e custodito sarà disponibile direttamente all'interno di Villa Toscanini a Ripalta Guerina."
    },
    {
      id: "faq-4",
      question: "Sarà disponibile una navetta?",
      answer: "Sì, un servizio navetta collegherà le strutture ricettive convenzionate a Crema e dintorni (Relais Ponte di Rialto, Grand Hotel San Martin, Boutique Hotel Casa dei Tigli) con Villa Toscanini sia per l'andata che per il rientro."
    },
    {
      id: "faq-5",
      question: "Posso portare un accompagnatore?",
      answer: "Le informazioni relative ai posti riservati e agli accompagnatori sono indicate direttamente nel vostro invito personale."
    },
    {
      id: "faq-6",
      question: "I bambini sono invitati?",
      answer: "Assolutamente sì, i bambini sono i benvenuti! Saremo felici di averli con noi e sarà previsto un servizio dedicato con menù speciale e animazione durante la giornata."
    },
    {
      id: "faq-7",
      question: "È possibile scattare fotografie durante la cerimonia?",
      answer: "Vi chiediamo gentilmente di vivere appieno il momento della cerimonia senza schermi, seguendo le indicazioni dei nostri fotografi ufficiali. Durante il ricevimento sarete liberi di scattare e condividere tutti i ricordi che volete!"
    }
  ] as FAQItem[]
};
