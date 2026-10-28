"use client";

import React, { useState } from "react";
import { Gift, Copy, Check, X } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

export const Registry: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyIban = () => {
    navigator.clipboard.writeText(weddingData.registryIban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <section id="registry" className="py-24 md:py-36 px-6 bg-[#FAF8F3]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <SectionHeading
            label={weddingData.registryLabel}
            title={weddingData.registryHeading}
            subtitle={weddingData.registryText}
          />

          <Button
            onClick={() => setModalOpen(true)}
            variant="outline"
            size="lg"
            className="mt-4"
          >
            <Gift className="w-4 h-4 mr-2 stroke-[1.5]" />
            {weddingData.registryCta}
          </Button>
        </div>
      </section>

      {/* Modal Dialog for Gift Details */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={weddingData.a11y.registryDialog}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#292724]/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-[#FFFEFC] border border-[#E8E0D4] max-w-lg w-full p-8 sm:p-10 relative rounded-sm shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              aria-label={weddingData.a11y.close}
              className="absolute top-4 right-4 p-2 text-[#8F8578] hover:text-[#292724] transition-colors"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>

            <span className="text-xs uppercase tracking-[0.25em] text-[#C8B79C] font-medium block mb-2">
              {weddingData.registryModalLabel}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#292724] font-light mb-4">
              {weddingData.registryModalHeading}
            </h3>

            <p className="text-sm text-[#8F8578] font-light leading-relaxed mb-6">
              {weddingData.registryModalText}
            </p>

            <div className="bg-[#FAF8F3] p-5 border border-[#E8E0D4] rounded-sm space-y-3 mb-6 text-left">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8F8578] block">
                  {weddingData.registryBeneficiaryLabel}
                </span>
                <span className="font-serif text-base text-[#292724] font-medium">
                  {weddingData.registryBeneficiary}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8F8578] block">
                  {weddingData.registryBankLabel}
                </span>
                <span className="text-xs text-[#292724]">
                  {weddingData.registryBank}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8F8578] block">
                  {weddingData.registryIbanLabel}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <code className="text-xs sm:text-sm font-mono text-[#292724] bg-white px-2 py-1 border border-[#E8E0D4] select-all">
                    {weddingData.registryIban}
                  </code>
                  <button
                    onClick={handleCopyIban}
                    className="ml-2 p-2 text-xs text-[#C8B79C] hover:text-[#292724] flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 font-medium">{weddingData.registryCopied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{weddingData.registryCopy}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <Button
                onClick={() => setModalOpen(false)}
                variant="primary"
                size="sm"
                className="w-full"
              >
                {weddingData.registryClose}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
