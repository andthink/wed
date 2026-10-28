import React from "react";
import { weddingData } from "@/data/wedding";
import { SectionHeading } from "./SectionHeading";
import { TravelMap } from "./TravelMap";

export const Travel: React.FC = () => {
  return (
    <section id="travel" className="py-24 md:py-32 px-6 bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={weddingData.travelLabel}
          title={weddingData.travelHeading}
        />

        <div className="mt-8">
          <h3 className="font-serif text-2xl text-[#292724] font-medium mb-5">
            {weddingData.travelMapHeading}
          </h3>
          <div className="rounded-sm border border-[#E8E0D4] bg-[#FFFEFC] p-3 sm:p-4 shadow-xs">
            <TravelMap />
          </div>
        </div>
      </div>
    </section>
  );
};
