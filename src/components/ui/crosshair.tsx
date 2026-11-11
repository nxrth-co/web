import React from "react";
import { cn } from "@/lib/utils";

export function Crosshair({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] leading-none text-[#8B8D90]/50 select-none pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      +
    </span>
  );
}

export function SectionBadge({
  number,
  label,
  className,
}: {
  number?: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#0E0F11]/80 px-3 py-1 font-mono text-[10px] sm:text-[11px] tracking-widest text-[#8B8D90] uppercase backdrop-blur-md",
        className
      )}
    >
      {number && <span className="text-[#C8FF00]">({number})</span>}
      <span className="text-[#F4F4EF]/90">{label}</span>
    </div>
  );
}

