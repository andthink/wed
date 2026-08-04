import React from "react";
import { weddingData } from "@/data/wedding";
import { SectionHeading } from "./SectionHeading";

export const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 md:py-36 px-6 bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label={weddingData.scheduleLabel}
          title={weddingData.scheduleHeading}
        />

        {/* Schedule Vertical Timeline */}
        <div className="relative my-12 max-w-2xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#E8E0D4] -translate-x-1/2" />

          <div className="space-y-12">
            {weddingData.schedule.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Timeline Circle */}
                  <div className="absolute left-6 md:left-1/2 top-1.5 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FAF8F3] border-2 border-[#C8B79C] z-10" />

                  {/* Desktop Layout Alternating */}
                  <div
                    className={`pl-14 md:pl-0 w-full md:w-1/2 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <span className="font-serif text-2xl md:text-3xl font-light text-[#C8B79C] tracking-wide block mb-1">
                      {item.time}
                    </span>
                    <h3 className="font-serif text-xl text-[#292724] font-medium">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-xs text-[#8F8578] uppercase tracking-wider font-light mt-1">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
