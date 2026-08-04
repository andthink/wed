import React from "react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";
import { SectionHeading } from "./SectionHeading";

export const DressCode: React.FC = () => {
  return (
    <section id="dress-code" className="py-24 md:py-36 px-6 bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={weddingData.dressCodeLabel}
          title={weddingData.dressCodeHeading}
        />

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center my-8">
          {/* Left Text Column */}
          <div className="space-y-8">
            <div className="p-8 bg-[#FFFEFC] border border-[#E8E0D4] space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C8B79C] block">
                PER LEI
              </span>
              <p className="font-serif text-xl text-[#292724] font-light">
                {weddingData.dressCodeHers}
              </p>
              <p className="text-xs text-[#8F8578] font-light">
                Toni pastello, abiti lunghi o midi, tessuti leggeri adatti ad una giornata estiva.
              </p>
            </div>

            <div className="p-8 bg-[#FFFEFC] border border-[#E8E0D4] space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C8B79C] block">
                PER LUI
              </span>
              <p className="font-serif text-xl text-[#292724] font-light">
                {weddingData.dressCodeHis}
              </p>
              <p className="text-xs text-[#8F8578] font-light">
                Completo elegante in lino o fresco lana, giacca e cravatta / papillon opzionale.
              </p>
            </div>

            <blockquote className="font-serif italic text-lg text-[#8F8578] font-light border-l-2 border-[#C8B79C] pl-6 py-2">
              &ldquo;{weddingData.dressCodeNote}&rdquo;
            </blockquote>
          </div>

          {/* Right Visual Inspiration Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-[#E8E0D4]">
              <Image
                src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=85"
                alt="Aesthetic detail"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-[#E8E0D4] mt-8">
              <Image
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85"
                alt="Aesthetic style"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
