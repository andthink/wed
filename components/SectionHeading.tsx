import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  centered = true,
  className = "",
  light = false,
}) => {
  return (
    <div
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      } mb-12 md:mb-16 ${className}`}
    >
      {label && (
        <span
          className={`text-xs md:text-sm uppercase tracking-[0.25em] font-medium mb-3 ${
            light ? "text-[#C8B79C]" : "text-[#8F8578]"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-tight ${
          light ? "text-white" : "text-[#292724]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base md:text-lg font-light leading-relaxed ${
            light ? "text-[#E8E0D4]" : "text-[#8F8578]"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 w-12 h-[1px] ${
          light ? "bg-[#C8B79C]/40" : "bg-[#C8B79C]"
        }`}
      />
    </div>
  );
};
