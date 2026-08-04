"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/faq";
import { SectionHeading } from "./SectionHeading";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-36 px-6 bg-[#FFFEFC]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label={faqData.label}
          title={faqData.heading}
        />

        {/* Animated Single-Open Accordion List */}
        <div className="space-y-4 my-8">
          {faqData.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`border transition-colors duration-300 rounded-sm ${
                  isOpen
                    ? "border-[#C8B79C] bg-[#FAF8F3]"
                    : "border-[#E8E0D4] bg-[#FFFEFC] hover:border-[#C8B79C]/60"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-lg md:text-xl text-[#292724] font-medium tracking-wide">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C8B79C] shrink-0 transition-transform duration-300 stroke-[1.5] ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 text-sm md:text-base text-[#8F8578] font-light leading-relaxed border-t border-[#E8E0D4]/40 animate-fade-in"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
