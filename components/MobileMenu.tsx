"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

import { weddingData } from "@/data/wedding";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  navLinks: { href: string; label: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  navLinks,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Menu di navigazione mobile"
      className="fixed inset-0 z-50 flex flex-col bg-[#FAF8F3] text-[#292724] animate-fade-in transition-all duration-300"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E0D4]">
        <span className="font-serif text-xl tracking-widest text-[#292724]">
          F & A
        </span>
        <button
          onClick={onClose}
          aria-label="Chiudi menu"
          className="p-2 text-[#292724] hover:text-[#C8B79C] transition-colors focus:outline-none"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Menu Links */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 space-y-8">
        {navLinks.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`font-serif text-2xl sm:text-3xl tracking-wide transition-all duration-300 ${
                isActive
                  ? "text-[#C8B79C] font-normal"
                  : "text-[#292724] hover:text-[#C8B79C]"
              }`}
            >
              {link.label}
            </a>
          );
        })}

        <div className="pt-8 flex flex-col items-center border-t border-[#E8E0D4]/60 w-48 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8F8578]">
            {weddingData.dateFormatted}
          </span>
          <span className="font-serif text-sm italic text-[#8F8578] mt-1">
            {weddingData.locationName}
          </span>
        </div>
      </div>

      {/* Footer Branding inside menu */}
      <div className="py-6 text-center text-xs tracking-widest text-[#8F8578] border-t border-[#E8E0D4]/40">
        FRANCESCA & ANDREA
      </div>
    </div>
  );
};
