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
      "bg-[#C8FF00] text-[#070809] font-medium tracking-tight hover:bg-[#d8ff33] hover:shadow-[0_0_24px_rgba(200,255,0,0.35)] border border-[#C8FF00]",
    secondary:
      "bg-transparent text-[#F4F4EF] border border-[rgba(255,255,255,0.14)] hover:border-[#C8FF00] hover:text-[#C8FF00] hover:bg-[rgba(200,255,0,0.04)]",
    ghost:
      "bg-transparent text-[#8B8D90] hover:text-[#F4F4EF] hover:bg-[rgba(255,255,255,0.04)] border border-transparent",
    surprise:
      "bg-[#FF5B1F] text-white font-medium hover:bg-[#ff723b] hover:shadow-[0_0_20px_rgba(255,91,31,0.4)] border border-[#FF5B1F]",
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
        "relative inline-flex items-center justify-center rounded-full transition-colors duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070809] disabled:opacity-40 disabled:cursor-not-allowed",
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
