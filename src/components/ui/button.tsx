"use client";

import React, { useRef, useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "surprise";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  magnetic = true,
  onClick,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.18, y: middleY * 0.18 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-[#2B1E16] text-[#FAF7F2] font-medium tracking-tight hover:bg-[#432F23] hover:shadow-[0_8px_24px_rgba(43,30,22,0.25)] border border-[#2B1E16]",
    secondary:
      "bg-white/80 backdrop-blur-md text-[#201815] border border-[rgba(140,83,43,0.22)] hover:border-[#8C532B] hover:text-[#8C532B] hover:bg-[#8C532B]/8 shadow-[0_2px_8px_rgba(78,52,34,0.04)]",
    ghost:
      "bg-transparent text-[#6E645D] hover:text-[#201815] hover:bg-[rgba(140,83,43,0.06)] border border-transparent",
    surprise:
      "bg-[#C05A32] text-white font-medium hover:bg-[#a84c26] hover:shadow-[0_8px_24px_rgba(192,90,50,0.3)] border border-[#C05A32]",
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.1 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full transition-colors duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C532B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] disabled:opacity-40 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
