export interface AccommodationItem {
  id: string;
  name: string;
  location: string;
  stars: number;
  distance: string;
  description: string;
  image: string;
  websiteUrl: string;
}

export const accommodationData = {
  label: "DOVE SOGGIORNARE",
  heading: "Un posto dove sentirsi a casa",
  hotels: [
    {
      id: "relais-ponte-rialto",
      name: "Relais Ponte di Rialto",
      location: "Crema (CR)",
      stars: 4,
      distance: "A 10 minuti da Villa Toscanini",
      description: "Una splendida ed elegante dimora storica nel centro di Crema, dotata di tutti i comfort.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
      websiteUrl: "https://example.com/relais-ponte-rialto"
    },
    {
      id: "san-martin-hotel",
      name: "Grand Hotel San Martin",
      location: "Crema (CR)",
      stars: 4,
      distance: "A 12 minuti da Villa Toscanini",
      description: "Hotel moderno e raffinato nei pressi di Crema, ideale per un soggiorno di totale relax.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      websiteUrl: "https://example.com/san-martin-hotel"
    },
    {
      id: "casa-dei-tigli",
      name: "Boutique Hotel Casa dei Tigli",
      location: "Ripalta Guerina (CR)",
      stars: 3,
      distance: "A 5 minuti da Villa Toscanini",
      description: "Accogliente dimora di charme immersa nella natura, a brevissima distanza dalla location.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85",
      websiteUrl: "https://example.com/casa-dei-tigli"
    }
  ] as AccommodationItem[]
};
