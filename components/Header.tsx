"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

import { weddingData } from "@/data/wedding";

const NAV_LINKS = [
  { href: "#story", label: "La nostra storia" },
  { href: "#wedding", label: "Il matrimonio" },
  { href: "#schedule", label: "Programma" },
  { href: "#location", label: "Location" },
  { href: "#rsvp", label: "RSVP" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#E8E0D4] py-3.5 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className={`font-serif text-2xl tracking-widest transition-colors duration-300 ${
              isScrolled ? "text-[#292724]" : "text-white drop-shadow-sm"
            }`}
          >
            F & A
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${
                    isScrolled
                      ? isActive
                        ? "text-[#292724] font-semibold"
                        : "text-[#8F8578] hover:text-[#292724]"
                      : isActive
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1px] transition-all ${
                        isScrolled ? "bg-[#C8B79C]" : "bg-white"
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Date Badge (Desktop) */}
          <div className="hidden md:block">
            <span
              className={`text-xs uppercase tracking-[0.25em] font-serif transition-colors duration-300 ${
                isScrolled ? "text-[#8F8578]" : "text-white/90"
              }`}
            >
              {weddingData.dateShort}
            </span>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Apri menu"
            className={`md:hidden p-2 transition-colors focus:outline-none ${
              isScrolled ? "text-[#292724]" : "text-white"
            }`}
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        navLinks={NAV_LINKS}
      />
    </>
  );
};
