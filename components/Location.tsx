import React from "react";
import Image from "next/image";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 md:py-36 px-6 bg-[#FFFEFC]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={weddingData.locationLabel}
          title={weddingData.locationName}
          subtitle={weddingData.locationDescription}
        />

        {/* Large Atmospheric Image & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Visual Image */}
          <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[460px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=85"
              alt={weddingData.images.location}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292724]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B79C]">
                {weddingData.locationRegion}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light mt-1">
                {weddingData.locationName}
              </h3>
            </div>
          </div>

          {/* Interactive Address & Maps Card */}
          <div className="lg:col-span-4 bg-[#FAF8F3] p-8 sm:p-10 border border-[#E8E0D4] flex flex-col justify-between rounded-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#E8E0D4]/50 flex items-center justify-center mb-6 text-[#292724]">
                <MapPin className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h4 className="font-serif text-xl text-[#292724] font-medium mb-2">
                {weddingData.locationAddressLabel}
              </h4>
              <p className="text-sm text-[#8F8578] font-light leading-relaxed mb-4">
                {weddingData.address}
              </p>
              
              <div className="p-4 bg-white border border-[#E8E0D4] text-xs text-[#8F8578] space-y-1 mb-6">
                <span className="font-semibold text-[#292724] block">{weddingData.locationWebsiteLabel}</span>
                <a
                  href={weddingData.locationWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8B79C] hover:underline flex items-center gap-1 font-medium text-xs truncate"
                >
                  {weddingData.locationWebsiteDisplay}
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                asAnchor
                href={weddingData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full"
              >
                <Navigation className="w-4 h-4 mr-2 stroke-[1.5]" />
                {weddingData.locationMapsCta}
              </Button>

              <Button
                asAnchor
                href="#travel"
                variant="outline"
                className="w-full"
              >
                {weddingData.locationTravelCta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
