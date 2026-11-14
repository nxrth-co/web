import React from "react";
import { cn } from "@/lib/utils";

export function Crosshair({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] leading-none text-[#8C7E74]/50 select-none pointer-events-none",
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
        "inline-flex items-center gap-2 rounded-full border border-[rgba(140,83,43,0.18)] bg-white/80 px-3 py-1 font-mono text-[10px] sm:text-[11px] tracking-widest text-[#6E645D] uppercase backdrop-blur-md shadow-2xs",
        className
      )}
    >
      {number && <span className="text-[#8C532B] font-semibold">({number})</span>}
      <span className="text-[#201815]">{label}</span>
    </div>
  );
}
