import React from "react";
import { weddingData } from "@/data/wedding";
import { DecorativeDivider } from "./DecorativeDivider";

export const Invitation: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FFFEFC]">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Small Label */}
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#8F8578] mb-4">
          {weddingData.invitationLabel}
        </span>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#292724] tracking-wide leading-tight mb-8">
          {weddingData.invitationHeading}
        </h2>

        <DecorativeDivider />

        {/* Quote Block */}
        <blockquote className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#8F8578] max-w-2xl leading-relaxed my-6 font-light">
          &ldquo;{weddingData.invitationQuote}&rdquo;
        </blockquote>

        {/* Date & Location Emblem */}
        <div className="mt-8 pt-8 border-t border-[#E8E0D4] w-48 flex flex-col items-center space-y-2">
          <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] text-[#292724]">
            {weddingData.dateNumbers}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8F8578] font-medium">
            {weddingData.locationRegion}
          </span>
        </div>
      </div>
    </section>
  );
};
