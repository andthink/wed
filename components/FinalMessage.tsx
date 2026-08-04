import React from "react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";

export const FinalMessage: React.FC = () => {
  return (
    <section className="relative w-full py-32 md:py-44 flex items-center justify-center overflow-hidden">
      {/* Full-width Background Photograph */}
      <Image
        src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=90"
        alt="Lago di Como al tramonto"
        fill
        className="object-cover object-center"
      />

      {/* Warm Overlay */}
      <div className="absolute inset-0 bg-[#292724]/50 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-wide leading-tight mb-8 drop-shadow-sm">
          {weddingData.finalMessageText}
        </h2>

        <div className="flex flex-col items-center my-4">
          <span className="font-serif text-2xl sm:text-3xl text-[#C8B79C] tracking-widest font-light">
            {weddingData.coupleBranding}
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-white/90 font-light mt-2">
            {weddingData.dateNumbers}
          </span>
        </div>

        <div className="mt-10">
          <a
            href="#rsvp"
            className="inline-flex items-center px-8 py-4 border border-white/60 bg-white text-[#292724] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C8B79C] hover:text-white hover:border-[#C8B79C] transition-all duration-300 shadow-md"
          >
            Conferma la presenza
          </a>
        </div>
      </div>
    </section>
  );
};
