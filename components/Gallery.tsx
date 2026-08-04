"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/gallery";
import { SectionHeading } from "./SectionHeading";
import { Lightbox } from "./Lightbox";

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-36 px-6 bg-[#FFFEFC]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label={galleryData.label}
          title={galleryData.heading}
        />

        {/* Editorial Asymmetric Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 my-8">
          {galleryData.images.map((image, index) => {
            // Asymmetric layout span helpers
            const isWide = image.aspectRatio === "wide";
            const isTall = image.aspectRatio === "tall";

            const spanClass = isWide
              ? "col-span-2 row-span-1"
              : isTall
              ? "col-span-1 row-span-2"
              : "col-span-1 row-span-1";

            return (
              <div
                key={image.id}
                onClick={() => setLightboxIndex(index)}
                className={`relative aspect-square overflow-hidden bg-[#FAF8F3] border border-[#E8E0D4] group cursor-pointer rounded-sm ${spanClass}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Hover Caption Overlay */}
                <div className="absolute inset-0 bg-[#292724]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-serif italic text-sm text-white font-light drop-shadow-sm">
                    {image.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={galleryData.images}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
};
