"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Curate & Choose",
    desc: "Pick an artisanal digital template, or commission a fully bespoke showroom build.",
  },
  {
    num: "02",
    title: "Share & Swatch",
    desc: "Send your high-res timber photos, dimensions and pricing directly over WhatsApp.",
  },
  {
    num: "03",
    title: "Launch & Welcome",
    desc: "Your digital showroom goes live in 5 to 7 days, welcoming high-ticket buyers.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative min-h-[75svh] flex flex-col justify-center py-24 sm:py-36 px-6 bg-[#FAF7F2] border-b border-[rgba(140,83,43,0.12)]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Left-Aligned Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C532B] block mb-3 font-semibold">
            THE PROCESS
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] text-[#201815] font-normal tracking-tight">
            Live in about a <em className="italic text-[#8C532B] font-normal not-italic">week.</em>
          </h2>
          <p className="mt-3 text-[17px] text-[#6E645D] font-normal max-w-xl">
            From raw workshop images to a tactile, search-optimized luxury storefront.
          </p>
        </div>

        {/* Three Steps in Glass & Wood Podiums */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col p-8 rounded-3xl bg-white/80 border border-[rgba(140,83,43,0.14)] backdrop-blur-md shadow-[0_8px_25px_rgba(78,52,34,0.04)] hover:border-[#8C532B]/35 hover:shadow-[0_14px_35px_rgba(78,52,34,0.08)] transition-all"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-4xl sm:text-5xl font-bold text-[#8C532B]">
                  {s.num}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#C68B59]" />
              </div>
              <h3 className="font-serif text-2xl text-[#201815] mb-2">{s.title}</h3>
              <p className="text-[16px] text-[#6E645D] font-normal leading-[1.6]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
