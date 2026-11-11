"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Choose",
    desc: "Pick a template, or ask for custom.",
  },
  {
    num: "02",
    title: "Share",
    desc: "Send photos and prices on WhatsApp.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "Your site goes live in 5 to 7 days.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative min-h-[75svh] flex flex-col justify-center py-24 sm:py-36 px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Left-Aligned Header */}
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] text-[#F4F4EF] font-normal tracking-tight">
            Live in about a <em className="italic text-[#C8FF00] font-normal not-italic">week.</em>
          </h2>
        </div>

        {/* Three Steps in a row without boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col"
            >
              <span className="font-mono text-4xl sm:text-5xl font-bold text-[#C8FF00] block mb-4">
                {s.num}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F4EF] mb-2">{s.title}</h3>
              <p className="text-[17px] sm:text-[18px] text-[#A6A8AA] font-normal leading-[1.6]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

