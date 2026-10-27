import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Francesca & Andrea — 20 maggio 2027",
  description:
    "Francesca e Andrea vi invitano a celebrare con loro il giorno del loro matrimonio a Villa Toscanini, Ripalta Guerina.",
  openGraph: {
    title: "Francesca & Andrea — Matrimonio a Villa Toscanini",
    description:
      "Francesca e Andrea vi invitano a celebrare con loro il giorno del loro matrimonio a Villa Toscanini (Ripalta Guerina) il 16 maggio 2027.",
    locale: "it_IT",
    type: "website",
    siteName: "Francesca & Andrea Wedding",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF8F3] text-[#292724] font-sans antialiased selection:bg-[#C8B79C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
