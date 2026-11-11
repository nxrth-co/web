"use client";

import React from "react";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "Visibility",
  "Speed",
  "AI Chatbots",
  "Local SEO",
  "Digital Catalogue",
  "WhatsApp Enquiries",
  "Uptime Supervision",
  "High Conversion",
];

export function Marquee() {
  return (
    <section className="relative w-full border-y border-[rgba(255,255,255,0.08)] bg-[#0A0B0D] py-4 sm:py-5 overflow-hidden select-none">
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex items-center gap-8 sm:gap-12 whitespace-nowrap font-mono text-xs sm:text-sm uppercase tracking-widest text-[#F4F4EF]/85"
        >
          {/* Double array for seamless infinite marquee loop */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-12">
              <span className="hover:text-[#C8FF00] transition-colors">{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00]" aria-hidden="true" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

