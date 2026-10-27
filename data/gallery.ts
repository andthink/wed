export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "lake" | "portrait" | "architecture" | "detail" | "travel";
  aspectRatio: "square" | "tall" | "wide";
}

export const galleryData = {
  label: "ALCUNI MOMENTI",
  heading: "Insieme, un momento alla volta",
  images: [
    {
      id: "gallery-1",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      alt: "Scorcio della natura e del parco al tramonto",
      caption: "L'atmosfera incantata di Villa Toscanini",
      category: "lake",
      aspectRatio: "wide"
    },
    {
      id: "gallery-2",
      src: "/images/moher.png",
      alt: "Una passeggiata a picco sull'oceano",
      caption: "Una passeggiata a picco sull'oceano",
      category: "portrait",
      aspectRatio: "tall"
    },
    {
      id: "gallery-3",
      src: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85",
      alt: "Dettaglio floreale e composizione botanica",
      caption: "Dettagli delicati e toni primaverili",
      category: "detail",
      aspectRatio: "square"
    },
    {
      id: "gallery-4",
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
      alt: "Architettura storica di Villa Toscanini",
      caption: "L'eleganza senza tempo della villa",
      category: "architecture",
      aspectRatio: "tall"
    },
    {
      id: "gallery-5",
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
      alt: "Passeggiata romantica nel viale alberato",
      caption: "Passeggiando tra i viali secolari",
      category: "portrait",
      aspectRatio: "wide"
    },
    {
      id: "gallery-6",
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85",
      alt: "Brindisi con calici di champagne al tramonto",
      caption: "Celebrare i momenti speciali insieme",
      category: "detail",
      aspectRatio: "square"
    },
    {
      id: "gallery-7",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
      alt: "Dettaglio architettonico e natura",
      caption: "Scorci suggestivi a Ripalta Guerina",
      category: "travel",
      aspectRatio: "tall"
    },
    {
      id: "gallery-8",
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
      alt: "Tavolo allestito con stile sartoriale",
      caption: "L'arte dell'accoglienza e della raffinatezza",
      category: "detail",
      aspectRatio: "wide"
    },
    {
      id: "gallery-9",
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
      alt: "Coppia con vista sul giardino",
      caption: "Sguardi verso il futuro",
      category: "portrait",
      aspectRatio: "square"
    },
    {
      id: "gallery-10",
      src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85",
      alt: "Giardino illuminato al crepuscolo",
      caption: "La magica atmosfera della sera in villa",
      category: "architecture",
      aspectRatio: "wide"
    }
  ] as GalleryImage[]
};
