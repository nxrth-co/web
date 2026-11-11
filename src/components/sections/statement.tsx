"use client";

import React from "react";
import { motion } from "framer-motion";

export function Statement() {
  return (
    <section className="relative min-h-[85svh] flex flex-col justify-center items-center py-24 sm:py-36 px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.06)] text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[clamp(40px,5.5vw,76px)] font-normal leading-[1.08] tracking-tight text-[#F4F4EF]"
        >
          Exceptional furniture craft. Yet <em className="italic text-[#C8FF00] font-normal not-italic">invisible</em> online.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-[18px] sm:text-[20px] text-[#A6A8AA] font-normal max-w-[640px] mx-auto leading-[1.6]"
        >
          We put your showroom on Google and WhatsApp, so buyers find you.
        </motion.p>
      </div>
    </section>
  );
}

