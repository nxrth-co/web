"use client";

import React from "react";
import { motion } from "framer-motion";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

const OPTIONS = [
  "Showroom website",
  "Custom website",
  "AI showroom assistant",
  "Monitoring & maintenance",
  "Not sure yet",
];

export function FinalCTA() {
  const handlePillClick = (label: string) => {
    openChatbotWidget({
      prompt: `I want to launch my project: ${label}`,
    });
  };

  return (
    <section className="relative min-h-[90svh] flex flex-col justify-center items-center py-24 sm:py-36 px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.06)] overflow-hidden text-center">
      {/* Background Soft Glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[250px] sm:w-[600px] sm:h-[350px] md:w-[900px] md:h-[450px] rounded-full bg-radial from-[#C8FF00]/10 via-[#C8FF00]/2 to-transparent blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[clamp(40px,5.5vw,76px)] text-[#F4F4EF] font-normal leading-[1.08] tracking-tight mb-4"
        >
          Ready to put your showroom on the <em className="italic text-[#C8FF00] font-normal not-italic">map?</em>
        </motion.h2>

        <p className="text-[18px] sm:text-[20px] text-[#A6A8AA] font-normal max-w-[640px] mx-auto mb-12 leading-[1.6]">
          Answer a few quick questions. We&apos;ll message you on WhatsApp.
        </p>

        {/* Clean Panel with First Question Only */}
        <div className="rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[#0E0F11] p-6 sm:p-10 max-w-xl mx-auto text-left shadow-2xl">
          <h3 className="font-serif text-2xl text-[#F4F4EF] mb-6">
            What do you need help with?
          </h3>

          <div className="flex flex-col gap-3">
            {OPTIONS.map((label, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePillClick(label)}
                className="w-full min-h-[50px] px-5 py-3.5 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#15171A] hover:bg-[#C8FF00] hover:border-[#C8FF00] text-left transition-all duration-200 cursor-pointer active:scale-[0.99] group"
              >
                <span className="text-[17px] font-medium text-[#F4F4EF] group-hover:text-[#070809] transition-colors">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
