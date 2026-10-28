"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { weddingData } from "@/data/wedding";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90"
        alt={weddingData.images.hero}
        fill
        priority
        className="object-cover object-center scale-105 transition-transform duration-1000"
      />

      {/* Subtle Warm Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#292724]/40 via-[#292724]/20 to-[#292724]/50" />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center h-full pt-16">
        {/* Small Label */}
        <span className="text-xs sm:text-sm uppercase tracking-[0.35em] text-white/90 font-medium mb-6 animate-fade-in">
          {weddingData.heroLabel}
        </span>

        {/* Main Names Typography */}
        <div className="flex flex-col items-center font-serif font-light tracking-wide leading-tight my-2">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-light drop-shadow-sm">
            {weddingData.brideName}
          </h1>
          <span className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-[#C8B79C] my-1 md:my-2">
            &amp;
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-light drop-shadow-sm">
            {weddingData.groomName}
          </h1>
        </div>

        {/* Date & Location */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-light text-white/90 tracking-widest uppercase">
          <span>{weddingData.dateFormatted}</span>
          <span className="hidden sm:inline text-[#C8B79C]">•</span>
          <span className="font-serif italic capitalize text-base sm:text-lg text-white">
            {weddingData.heroSubtitle}
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-12">
          <a
            href="#story"
            className="inline-flex items-center px-8 py-3.5 border border-white/40 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-white hover:text-[#292724] transition-all duration-300 shadow-sm"
          >
            {weddingData.heroCta}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80 animate-pulse-subtle">
        <span className="text-[10px] uppercase tracking-[0.3em] font-light mb-1">
          {weddingData.heroScrollText}
        </span>
        <ChevronDown className="w-4 h-4 animate-float stroke-[1.5]" />
      </div>
    </section>
  );
};
