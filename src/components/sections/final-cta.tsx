"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";
import { SectionBadge, Crosshair } from "@/components/ui/crosshair";
import { Button } from "@/components/ui/button";
import { step1Options } from "@/data/start-flow";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

export function FinalCTA() {
  const handlePillClick = (label: string) => {
    openChatbotWidget({
      prompt: `I want to launch my project: ${label}`,
    });
  };

  return (
    <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.08)] overflow-hidden">
      {/* Background Soft Glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[250px] sm:w-[600px] sm:h-[350px] md:w-[900px] md:h-[450px] rounded-full bg-radial from-[#C8FF00]/10 via-[#C8FF00]/2 to-transparent blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div className="hidden sm:block absolute top-8 left-6 sm:left-12">
        <Crosshair />
      </div>
      <div className="hidden sm:block absolute top-8 right-6 sm:right-12">
        <Crosshair />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <SectionBadge number="06" label="LAUNCH VIA AI" />
        </div>

        {/* Giant Serif Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl sm:text-4xl md:text-6xl text-[#F4F4EF] font-normal leading-[1.12] tracking-tight mb-4 sm:mb-6 px-2"
        >
          Ready to put your showroom on the <em className="italic text-[#C8FF00]">map?</em>
        </motion.h2>

        <p className="text-sm sm:text-lg md:text-xl text-[#8B8D90] font-light max-w-xl mx-auto mb-8 sm:mb-12 px-2 leading-relaxed">
          Chat directly with our AI Concierge. Tell us about your showroom, pick your plan, and dispatch your launch specs to our founders on WhatsApp:
        </p>

        {/* Interactive Service Selector Pills */}
        <div className="bg-[#0E0F11] border border-[rgba(255,255,255,0.12)] rounded-3xl p-4 sm:p-8 max-w-2xl mx-auto shadow-2xl text-left">
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[rgba(255,255,255,0.06)] mb-4 sm:mb-6">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#F4F4EF]">
              Select What You Need
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#C8FF00] bg-[#C8FF00]/10 border border-[#C8FF00]/25 px-2.5 py-0.5 rounded-full">
              LAUNCHES AI CHAT
            </span>
          </div>

          <h3 className="font-serif text-lg sm:text-2xl text-[#F4F4EF] mb-3 sm:mb-4">
            What do you need help with?
          </h3>

          <div className="flex flex-col gap-2 sm:gap-2.5">
            {step1Options.map((opt, idx) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handlePillClick(opt.label)}
                className="group w-full min-h-[48px] px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#15171A] hover:bg-[#C8FF00] hover:border-[#C8FF00] text-left flex items-center justify-between transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="font-mono text-xs text-[#8B8D90] group-hover:text-[#070809]">
                    0{idx + 1}
                  </span>
                  <div>
                    <span className="text-xs sm:text-base font-medium text-[#F4F4EF] group-hover:text-[#070809] transition-colors">
                      {opt.label}
                    </span>
                    {opt.desc && (
                      <span className="block text-[11px] sm:text-xs text-[#8B8D90] group-hover:text-[#070809]/80 transition-colors line-clamp-1 sm:line-clamp-none">
                        {opt.desc}
                      </span>
                    )}
                  </div>
                </div>

                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border border-[rgba(255,255,255,0.15)] group-hover:border-[#070809] flex items-center justify-center text-[#8B8D90] group-hover:text-[#070809] transition-colors shrink-0">
                  <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Primary Launch Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="primary"
            onClick={() => openChatbotWidget({ prompt: "🚀 Start website launch" })}
            className="text-sm font-mono uppercase tracking-wider font-semibold px-8 cursor-pointer"
          >
            Launch Project with AI Concierge &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
