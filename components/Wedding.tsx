import React from "react";
import { weddingData } from "@/data/wedding";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

export const Wedding: React.FC = () => {
  return (
    <section id="wedding" className="py-24 md:py-36 px-6 bg-[#FFFEFC]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label={weddingData.weddingLabel}
          title={weddingData.weddingHeading}
        />

        {/* Info Blocks with Pure Typography and Whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 my-12">
          {/* Cerimonia */}
          <div className="flex flex-col items-center text-center p-8 sm:p-12 border border-[#E8E0D4] bg-[#FAF8F3]/60 transition-all duration-300 hover:border-[#C8B79C]/60">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C8B79C] mb-3">
              {weddingData.ceremony.title}
            </span>
            <span className="font-serif text-3xl sm:text-4xl text-[#292724] font-light mb-4">
              {weddingData.ceremony.time}
            </span>
            <p className="font-serif text-xl text-[#292724] mb-1">
              {weddingData.ceremony.venue}
            </p>
            <p className="text-sm text-[#8F8578] uppercase tracking-widest">
              {weddingData.ceremony.location}
            </p>
          </div>

          {/* Ricevimento */}
          <div className="flex flex-col items-center text-center p-8 sm:p-12 border border-[#E8E0D4] bg-[#FAF8F3]/60 transition-all duration-300 hover:border-[#C8B79C]/60">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C8B79C] mb-3">
              {weddingData.reception.title}
            </span>
            <span className="font-serif text-3xl sm:text-4xl text-[#292724] font-light mb-4">
              {weddingData.reception.time}
            </span>
            <p className="font-serif text-xl text-[#292724] mb-1">
              {weddingData.reception.venue}
            </p>
            <p className="text-sm text-[#8F8578] uppercase tracking-widest">
              {weddingData.reception.location}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <Button asAnchor href="#location" variant="outline" size="lg">
            Scopri la location
          </Button>
        </div>
      </div>
    </section>
  );
};
