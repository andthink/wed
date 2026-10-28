import React from "react";
import { weddingData } from "@/data/wedding";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F3] text-[#292724] py-16 px-6 border-t border-[#E8E0D4]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Monogram Logo */}
        <span className="font-serif text-3xl tracking-widest text-[#292724]">
          {weddingData.monogram}
        </span>

        {/* Couple & Details */}
        <div className="space-y-1">
          <h3 className="font-serif text-xl font-light text-[#292724]">
            {weddingData.coupleBranding}
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8F8578]">
            {weddingData.dateFormatted} • {weddingData.locationRegion}
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.2em] text-[#8F8578]">
          <a href="#rsvp" className="hover:text-[#292724] transition-colors">
            {weddingData.nav.rsvp}
          </a>
          <a href="#location" className="hover:text-[#292724] transition-colors">
            {weddingData.nav.location}
          </a>
          <a href="#story" className="hover:text-[#292724] transition-colors">
            {weddingData.nav.story}
          </a>
          <a
            href={weddingData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#292724] transition-colors"
          >
            {weddingData.nav.instagram}
          </a>
        </nav>

        <div className="w-16 h-[1px] bg-[#E8E0D4]" />

        {/* Signature */}
        <p className="font-serif italic text-base text-[#8F8578] font-light">
          {weddingData.footerQuote}
        </p>
      </div>
    </footer>
  );
};
