"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/data/gallery";
import { weddingData } from "@/data/wedding";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={weddingData.a11y.lightbox}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#292724]/95 backdrop-blur-md animate-fade-in p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Top Controls */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 text-white">
        <span className="text-xs uppercase tracking-[0.25em] font-serif text-white/80">
          {currentIndex + 1} / {images.length}
        </span>

        <button
          onClick={onClose}
          aria-label={weddingData.a11y.closeLightbox}
          className="p-2 text-white/80 hover:text-white transition-colors focus:outline-none cursor-pointer"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Navigation Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + images.length) % images.length);
        }}
        aria-label={weddingData.a11y.previousImage}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full focus:outline-none cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[500px]">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Caption */}
        {currentImage.caption && (
          <div className="mt-4 text-center">
            <p className="font-serif italic text-base sm:text-lg text-white/90 font-light">
              {currentImage.caption}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % images.length);
        }}
        aria-label={weddingData.a11y.nextImage}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full focus:outline-none cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[1.5]" />
      </button>
    </div>
  );
};
