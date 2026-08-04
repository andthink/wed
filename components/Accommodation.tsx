import React from "react";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import { accommodationData } from "@/data/accommodation";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

export const Accommodation: React.FC = () => {
  return (
    <section id="accommodation" className="py-24 md:py-36 px-6 bg-[#FFFEFC]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label={accommodationData.label}
          title={accommodationData.heading}
        />

        {/* 3 Large Accommodation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 my-8">
          {accommodationData.hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-[#FAF8F3] border border-[#E8E0D4] flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:shadow-md hover:border-[#C8B79C]"
            >
              <div>
                {/* Hotel Large Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1 text-xs font-serif italic text-[#292724] border border-[#E8E0D4]">
                    {hotel.distance}
                  </div>
                </div>

                {/* Hotel Info Content */}
                <div className="p-8">
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1 mb-2 text-[#C8B79C]">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl text-[#292724] font-light tracking-wide mb-1">
                    {hotel.name}
                  </h3>

                  <div className="flex items-center text-xs text-[#8F8578] uppercase tracking-wider mb-4">
                    <MapPin className="w-3.5 h-3.5 mr-1 stroke-[1.5]" />
                    {hotel.location}
                  </div>

                  <p className="text-sm text-[#8F8578] font-light leading-relaxed mb-6">
                    {hotel.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-8 pb-8 pt-0">
                <Button
                  asAnchor
                  href={hotel.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Scopri l'hotel
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
