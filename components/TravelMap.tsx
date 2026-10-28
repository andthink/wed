"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Map as MapIcon, Undo2 } from "lucide-react";
import { weddingData } from "@/data/wedding";

export const TravelMap: React.FC = () => {
  const [showMap, setShowMap] = useState(false);
  // Remount the iframe once the box reaches its taller mobile size so Google computes the right zoom
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div
        className={`group relative w-full overflow-hidden md:aspect-[1861/576] ${
          showMap ? "aspect-[4/3]" : "aspect-[1861/576]"
        }`}
      >
        <iframe
          key={opened ? "opened" : "idle"}
          src={weddingData.travelMapUrl}
          title={weddingData.travelMapTitle}
          loading="lazy"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />

        {/* Illustration sits above the iframe; hover (only on hover-capable devices) or tap reveals the map */}
        <button
          type="button"
          onClick={() => {
            setShowMap(true);
            setOpened(true);
          }}
          aria-label={weddingData.travelMapOpen}
          aria-hidden={showMap}
          tabIndex={showMap ? -1 : 0}
          className={`absolute inset-0 block w-full h-full cursor-pointer transition-opacity duration-500 group-hover:opacity-0 group-hover:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8B79C] ${
            showMap ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Image
            src={weddingData.travelMapImage}
            alt={weddingData.travelMapImageAlt}
            fill
            sizes="(max-width: 1200px) 100vw, 1120px"
            className="object-cover"
          />
          <span className="absolute bottom-1.5 right-1.5 sm:bottom-3 sm:right-3 inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-[#FFFEFC]/90 border border-[#E8E0D4] px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs text-[#292724] shadow-xs">
            <MapIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[1.5]" />
            <span className="[@media(hover:hover)]:hidden">{weddingData.travelMapHintTouch}</span>
            <span className="hidden [@media(hover:hover)]:inline">{weddingData.travelMapHintHover}</span>
          </span>
        </button>
      </div>

      {showMap && (
        <button
          type="button"
          onClick={() => setShowMap(false)}
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFFEFC] border border-[#E8E0D4] px-3 py-1.5 text-xs text-[#292724] shadow-xs hover:border-[#C8B79C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8B79C]"
        >
          <Undo2 className="w-3.5 h-3.5 stroke-[1.5]" />
          {weddingData.travelMapBack}
        </button>
      )}
    </>
  );
};
