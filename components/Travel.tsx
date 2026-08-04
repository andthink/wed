import React from "react";
import { Plane, Car, Bus } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { SectionHeading } from "./SectionHeading";

export const Travel: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Plane":
        return <Plane className="w-6 h-6 stroke-[1.5]" />;
      case "Car":
        return <Car className="w-6 h-6 stroke-[1.5]" />;
      case "Bus":
        return <Bus className="w-6 h-6 stroke-[1.5]" />;
      default:
        return <Plane className="w-6 h-6 stroke-[1.5]" />;
    }
  };

  return (
    <section id="travel" className="py-24 md:py-32 px-6 bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={weddingData.travelLabel}
          title={weddingData.travelHeading}
        />

        {/* 3 Editorial Travel Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          {weddingData.travel.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFEFC] p-8 border border-[#E8E0D4] flex flex-col justify-between rounded-sm shadow-xs transition-all duration-300 hover:border-[#C8B79C]"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FAF8F3] border border-[#E8E0D4] text-[#C8B79C] flex items-center justify-center mb-6">
                  {getIcon(item.icon)}
                </div>

                <h3 className="font-serif text-xl text-[#292724] font-medium tracking-wide mb-4">
                  {item.title}
                </h3>

                <div className="space-y-4">
                  {item.options.map((opt, optIdx) => (
                    <div key={optIdx} className="border-b border-[#E8E0D4]/40 pb-3 last:border-b-0">
                      <span className="font-medium text-sm text-[#292724] block">
                        {opt.name}
                      </span>
                      <span className="text-xs text-[#8F8578] font-light">
                        {opt.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {item.note && (
                <div className="mt-6 pt-4 border-t border-[#E8E0D4] text-xs text-[#8F8578] font-light italic">
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
