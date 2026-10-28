"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";
import background from "@/public/images/intro/background.jpeg";
import envelopeBody from "@/public/images/intro/envelope_body.jpeg";
import flap from "@/public/images/intro/flap.webp";
import seal from "@/public/images/intro/seal.webp";

type Phase = "closed" | "opening" | "extracting" | "expanding" | "leaving" | "done";

// Durations (ms) of each phase; keep in sync with the transitions in globals.css.
const OPENING_MS = 950;
const EXTRACTING_MS = 1100;
const EXPANDING_MS = 900;
const LEAVING_MS = 700;

export const EnvelopeIntro: React.FC = () => {
  const [phase, setPhase] = useState<Phase>("closed");
  const [cardTransform, setCardTransform] = useState<string>();
  const cardRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const schedule = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  const clearTimers = () => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  };

  const leave = useCallback(() => {
    clearTimers();
    setPhase("leaving");
    schedule(() => setPhase("done"), LEAVING_MS);
  }, []);

  const expandCard = () => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const scale = Math.max(window.innerWidth / rect.width, window.innerHeight / rect.height) * 1.05;
      const dx = window.innerWidth / 2 - (rect.left + rect.width / 2);
      const dy = window.innerHeight / 2 - (rect.top + rect.height / 2);
      setCardTransform(`translate(${dx}px, ${dy}px) scale(${scale})`);
    }
    setPhase("expanding");
    schedule(leave, EXPANDING_MS);
  };

  const open = () => {
    if (phase !== "closed") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      leave();
      return;
    }
    setPhase("opening");
    schedule(() => setPhase("extracting"), OPENING_MS);
    schedule(expandCard, OPENING_MS + EXTRACTING_MS);
  };

  useEffect(() => {
    if (phase === "done") return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") leave();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      root.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [phase, leave]);

  useEffect(() => clearTimers, []);

  if (phase === "done") return null;

  return (
    <div
      className="intro fixed inset-0 z-[100] overflow-hidden bg-[#FAF8F3]"
      data-phase={phase}
      role="dialog"
      aria-modal="true"
      aria-label={weddingData.a11y.invitationDialog}
    >
      {/* Background */}
      <div className="intro__bg absolute inset-0">
        <div className="intro__bg-drift absolute inset-0">
          <Image
            src={background}
            alt=""
            fill
            priority
            placeholder="blur"
            sizes="(orientation: portrait) 180vh, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Envelope */}
      <div className="absolute inset-0 flex items-center justify-center pt-[16vh]">
        <div className="intro__stage relative">
          <div className="intro__back absolute inset-0">
            <Image
              src={envelopeBody}
              alt=""
              fill
              priority
              sizes="(max-width: 728px) 88vw, 640px"
              className="object-fill"
            />
          </div>
          {/* Invitation card (behind the envelope body until it rises) */}
          <div className="intro__card-rise absolute">
            <div
              ref={cardRef}
              className="intro__card h-full w-full bg-[#FFFEFC] shadow-[0_8px_30px_rgba(41,39,36,0.18)] p-[3%]"
              style={cardTransform ? { transform: cardTransform } : undefined}
            >
              <div className="intro__card-content h-full w-full border border-[#C8B79C]/60 flex flex-col items-center justify-start pt-[6%] text-center">
                <span className="intro__card-small uppercase tracking-[0.3em] text-[#8F8578]">
                  {weddingData.heroLabel}
                </span>
                <span className="intro__card-names font-serif font-light text-[#292724] leading-tight mt-[2%]">
                  {weddingData.brideName} <span className="italic text-[#C8B79C]">&amp;</span> {weddingData.groomName}
                </span>
                <span className="intro__card-small uppercase tracking-[0.25em] text-[#292724] mt-[2%]">
                  {weddingData.dateFormatted}
                </span>
                <span className="intro__card-small font-serif italic text-[#8F8578] mt-[1%]">
                  {weddingData.locationName} · {weddingData.locationRegion}
                </span>
              </div>
            </div>
          </div>

          {/* Envelope body */}
          <div className="intro__body absolute inset-0 z-20 drop-shadow-[0_18px_30px_rgba(41,39,36,0.35)]">
            <Image
              src={envelopeBody}
              alt=""
              fill
              priority
              sizes="(max-width: 728px) 88vw, 640px"
              className="object-fill"
            />
          </div>

          {/* Top flap */}
          <div className="intro__flap absolute inset-x-0 top-0">
            <Image
              src={flap}
              alt=""
              fill
              priority
              sizes="(max-width: 728px) 88vw, 640px"
              className="object-fill"
            />
          </div>

          {/* Wax seal */}
          <button
            type="button"
            onClick={open}
            disabled={phase !== "closed"}
            aria-label={weddingData.a11y.openInvitation}
            className="intro__seal absolute z-40 aspect-square rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8B79C]"
          >
            <Image src={seal} alt="" fill priority sizes="120px" className="object-contain drop-shadow-md" />
          </button>
          <button
            type="button"
            onClick={open}
            disabled={phase !== "closed"}
            tabIndex={-1}
            aria-hidden="true"
            className="intro__label absolute z-40 font-serif italic text-[#5E564C] whitespace-nowrap cursor-pointer hover:text-[#292724]"
          >
            {weddingData.envelopeOpen}
          </button>
        </div>
      </div>

      {/* Skip */}
      <button
        type="button"
        onClick={leave}
        className="intro__skip absolute bottom-6 right-6 z-50 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/90 bg-[#292724]/30 backdrop-blur-sm border border-white/30 hover:bg-[#292724]/50 cursor-pointer"
      >
        {weddingData.envelopeSkip}
      </button>
    </div>
  );
};
