"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

const OPTIONS = [
  "Showroom website",
  "Custom bespoke website",
  "AI showroom assistant",
  "Monitoring & white-glove care",
  "Not sure yet",
];

export function FinalCTA() {
  const handlePillClick = (label: string) => {
    openChatbotWidget({
      prompt: `I want to launch my project: ${label}`,
    });
  };

  return (
    <section className="relative min-h-[90svh] flex flex-col justify-center items-center py-24 sm:py-36 px-6 bg-[#FAF7F2] border-b border-[rgba(140,83,43,0.12)] overflow-hidden text-center">
      {/* Background Soft Warm Amber Glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[250px] sm:w-[600px] sm:h-[350px] md:w-[900px] md:h-[450px] rounded-full bg-radial from-[#C68B59]/15 via-[#E8C99B]/5 to-transparent blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(140,83,43,0.2)] bg-white/80 px-4 py-1.5 backdrop-blur-md shadow-xs"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C532B] font-semibold">
            START YOUR SHOWROOM LAUNCH
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[clamp(40px,5.5vw,76px)] text-[#201815] font-normal leading-[1.08] tracking-tight mb-4"
        >
          Ready to put your showroom on the <em className="italic text-[#8C532B] font-normal not-italic">map?</em>
        </motion.h2>

        <p className="text-[18px] sm:text-[20px] text-[#6E645D] font-normal max-w-[640px] mx-auto mb-12 leading-[1.6]">
          Answer a few quick questions. We&apos;ll prepare your preview and reach out on WhatsApp.
        </p>

        {/* Clean Glass & Wood Selection Panel */}
        <div className="rounded-3xl border border-[rgba(140,83,43,0.18)] bg-white/90 backdrop-blur-xl p-6 sm:p-10 max-w-xl mx-auto text-left shadow-[0_16px_50px_rgba(78,52,34,0.08)]">
          <h3 className="font-serif text-2xl text-[#201815] mb-6">
            What do you need help with?
          </h3>

          <div className="flex flex-col gap-3">
            {OPTIONS.map((label, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePillClick(label)}
                className="w-full min-h-[50px] px-5 py-3.5 rounded-2xl border border-[rgba(140,83,43,0.14)] bg-[#FAF7F2] hover:bg-[#2B1E16] hover:border-[#2B1E16] text-left transition-all duration-200 cursor-pointer active:scale-[0.99] group flex items-center justify-between shadow-2xs"
              >
                <span className="text-[16px] font-medium text-[#201815] group-hover:text-[#FAF7F2] transition-colors">
                  {label}
                </span>
                <ArrowRight className="h-4 w-4 text-[#8C532B] group-hover:text-[#FAF7F2] group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
