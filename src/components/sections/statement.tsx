"use client";

import React from "react";
import { motion } from "framer-motion";

export function Statement() {
  return (
    <section className="relative min-h-[85svh] flex flex-col justify-center items-center py-24 sm:py-36 px-6 bg-[#FAF7F2] border-b border-[rgba(140,83,43,0.12)] text-center overflow-hidden">
      {/* Subtle warm travertine background ambient warmth */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-radial from-[#C68B59]/8 to-transparent blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(140,83,43,0.2)] bg-white/70 px-4 py-1.5 backdrop-blur-md shadow-xs"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C532B]">
            ATELIER &amp; SHOWROOM ELEVATION
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[clamp(40px,5.5vw,76px)] font-normal leading-[1.08] tracking-tight text-[#201815]"
        >
          Exceptional furniture craft. Yet <em className="italic text-[#8C532B] font-normal not-italic">invisible</em> online.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-[18px] sm:text-[20px] text-[#6E645D] font-normal max-w-[640px] mx-auto leading-[1.6]"
        >
          We bring the warmth and tactile prestige of your showroom to Google and WhatsApp, turning passersby into booked visits.
        </motion.p>
      </div>
    </section>
  );
}
