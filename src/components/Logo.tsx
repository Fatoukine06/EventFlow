import React from "react";

const sizeClasses: Record<string, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-[2.5rem]",
  xl: "text-[4rem]",
};

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

function Logo({ size = "md", className = "" }: LogoProps) {
  return (
    <a
      href="#"
      className={`font-['Playfair_Display',Georgia,serif] font-bold text-[#3E2514] tracking-[-0.02em] no-underline whitespace-nowrap shrink-0 ${sizeClasses[size]} ${className}`}
    >
      Event<span className="text-[#C49A3C]">Flow</span>
    </a>
  );
}

export default Logo;
