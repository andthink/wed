import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  asAnchor = false,
  href,
  target,
  rel,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans uppercase tracking-[0.18em] text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C8B79C]/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#292724] text-[#FAF8F3] hover:bg-[#C8B79C] hover:text-white shadow-sm active:scale-[0.99]",
    secondary:
      "bg-[#C8B79C] text-white hover:bg-[#292724] active:scale-[0.99]",
    outline:
      "border border-[#292724]/30 text-[#292724] hover:border-[#292724] hover:bg-[#292724] hover:text-white",
    ghost:
      "text-[#292724] hover:text-[#C8B79C] hover:bg-[#E8E0D4]/30",
  };

  const sizeStyles = {
    sm: "px-4 py-2.5 text-[11px]",
    md: "px-6 py-3.5 text-xs",
    lg: "px-8 py-4 text-xs tracking-[0.2em]",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
