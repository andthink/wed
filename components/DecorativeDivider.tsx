import React from "react";

interface DecorativeDividerProps {
  monogram?: string;
  className?: string;
}

export const DecorativeDivider: React.FC<DecorativeDividerProps> = ({
  monogram = "F & A",
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center my-12 ${className}`}>
      <div className="h-[1px] w-16 sm:w-24 bg-[#E8E0D4]" />
      <span className="mx-4 font-serif text-sm italic tracking-widest text-[#8F8578]">
        {monogram}
      </span>
      <div className="h-[1px] w-16 sm:w-24 bg-[#E8E0D4]" />
    </div>
  );
};
