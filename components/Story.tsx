import React from "react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";
import { SectionHeading } from "./SectionHeading";

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 md:py-36 px-6 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label={weddingData.storyLabel}
          title={weddingData.storyHeading}
        />

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-lg border border-[#E8E0D4]">
              <Image
                src="/images/moher.png"
                alt={weddingData.images.story}
                fill
                sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1327px) calc(41.667vw - 57.333px), 496px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Aesthetic decorative frame offset */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-full h-full border border-[#C8B79C]/40 -z-10 rounded-sm" />
          </div>

          {/* Right Column: Story Text + Timeline */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            {/* Story Prose */}
            <div className="prose prose-lg text-[#292724] font-light leading-relaxed">
              <p className="font-serif italic text-xl sm:text-2xl text-[#8F8578] mb-6">
                &ldquo;{weddingData.storyText}&rdquo;
              </p>
              <p className="text-base text-[#292724]/80">
                {weddingData.storyTextSecondary}
              </p>
            </div>

            {/* Timeline */}
            <div className="pt-8 border-t border-[#E8E0D4]">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#8F8578] font-medium mb-8">
                {weddingData.storyTimelineLabel}
              </h3>

              <div className="relative pl-6 space-y-8 border-l border-[#C8B79C]/40">
                {weddingData.timeline.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#FAF8F3] border-2 border-[#C8B79C] group-hover:bg-[#C8B79C] transition-colors duration-300" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="font-serif text-2xl font-light text-[#C8B79C] tracking-wide">
                        {item.year}
                      </span>
                      <h4 className="font-serif text-lg text-[#292724] font-medium">
                        {item.title}
                      </h4>
                    </div>
                    <p className="mt-1 text-sm text-[#8F8578] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
