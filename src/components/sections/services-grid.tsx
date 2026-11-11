"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionBadge, Crosshair } from "@/components/ui/crosshair";
import { servicesData } from "@/data/services";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

export function ServicesGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.08)]">
      <div className="absolute top-8 left-6 sm:left-12">
        <Crosshair />
      </div>
      <div className="absolute top-8 right-6 sm:right-12">
        <Crosshair />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionBadge number="02" label="SERVICES" className="mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F4EF] font-normal tracking-tight">
              Four focused systems. Built for <em className="italic text-[#C8FF00]">growth.</em>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8B8D90] max-w-xs uppercase tracking-wider">
            Engineered exclusively for furniture showrooms, makers &amp; luxury workshops.
          </p>
        </div>

        {/* 4 Compact Hover-Reactive Rows */}
        <div className="border-t border-[rgba(255,255,255,0.1)]">
          {servicesData.map((svc, idx) => (
            <motion.div
              key={svc.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => openChatbotWidget({ prompt: `I want to get started with ${svc.title}` })}
              className="group relative border-b border-[rgba(255,255,255,0.08)] py-8 sm:py-10 px-4 sm:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer transition-colors duration-300 hover:bg-[#0E0F11]"
            >
              <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                <span className="font-mono text-base sm:text-xl text-[#8B8D90] group-hover:text-[#C8FF00] transition-colors">
                  {svc.num}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-serif text-[#F4F4EF] group-hover:text-[#C8FF00] transition-colors">
                      {svc.title}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[#8B8D90] group-hover:border-[#C8FF00]/40 group-hover:text-[#C8FF00]">
                      {svc.tag}
                    </span>
                  </div>
                  <p className="text-sm text-[#8B8D90] mt-2 max-w-xl leading-relaxed">
                    {svc.shortDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pl-12 lg:pl-0">
                <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#8B8D90]">
                  {svc.outcomes.slice(0, 2).map((outcome, oIdx) => (
                    <span
                      key={oIdx}
                      className="px-2.5 py-1 rounded bg-[#15171A] border border-[rgba(255,255,255,0.04)]"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>

                <div className="h-10 w-10 rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#F4F4EF] group-hover:border-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-[#070809] transition-all duration-300">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

