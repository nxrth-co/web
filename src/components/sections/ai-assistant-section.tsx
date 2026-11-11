"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

const QUESTIONS = [
  {
    q: "Do you deliver to Mumbai?",
    a: "Yes, we deliver across Mumbai in 3 to 5 days with doorstep delivery.",
  },
  {
    q: "Can I customize the wood polish?",
    a: "Yes. Natural Matte, Honey Teak, Smoked Oak, or Dark Walnut at no extra charge.",
  },
  {
    q: "Do you offer architect trade pricing?",
    a: "Yes, we offer special trade pricing for registered interior designers and architects.",
  },
];

export function AIAssistantSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="ai-assistant"
      className="relative min-h-[90svh] flex flex-col justify-center py-24 sm:py-36 px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.06)]"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Left-Aligned Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] block mb-3">
            AI ASSISTANT
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] text-[#F4F4EF] font-normal tracking-tight">
            Meet your showroom&apos;s <em className="italic text-[#C8FF00] font-normal not-italic">AI assistant.</em>
          </h2>
          <p className="mt-4 text-[18px] text-[#A6A8AA] font-normal max-w-[640px] leading-[1.6]">
            It answers questions about size, price and delivery, day and night.
          </p>
        </div>

        {/* Inline Scripted Chat Demo Box */}
        <div className="rounded-3xl border border-[rgba(255,255,255,0.1)] bg-[#0E0F11] p-6 sm:p-8 shadow-2xl mb-10">
          {/* Header of demo */}
          <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.06)] mb-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C8FF00] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#F4F4EF]">
                Live Showroom Assistant
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#A6A8AA]">TAP A QUESTION</span>
          </div>

          {/* 3 Tappable Question Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {QUESTIONS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`font-mono text-xs py-2 px-3.5 rounded-full border transition-all cursor-pointer ${
                  activeIdx === idx
                    ? "bg-[#C8FF00] text-[#070809] border-[#C8FF00] font-semibold"
                    : "bg-[#15171A] text-[#A6A8AA] border-[rgba(255,255,255,0.08)] hover:text-[#F4F4EF]"
                }`}
              >
                {item.q}
              </button>
            ))}
          </div>

          {/* Chat Bubble Exchanges */}
          <div className="space-y-3.5 min-h-[140px] flex flex-col justify-center bg-[#070809] p-5 rounded-2xl border border-[rgba(255,255,255,0.06)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="flex justify-end">
                  <div className="bg-[#15171A] text-[#F4F4EF] border border-[rgba(255,255,255,0.08)] text-sm rounded-2xl rounded-tr-xs py-2.5 px-4 max-w-md">
                    {QUESTIONS[activeIdx].q}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#C8FF00]/10 text-[#F4F4EF] border border-[#C8FF00]/25 text-sm rounded-2xl rounded-tl-xs py-2.5 px-4 max-w-md">
                    <span className="text-[#C8FF00] font-mono text-[10px] uppercase font-semibold block mb-0.5">
                      SHOWROOM BOT
                    </span>
                    {QUESTIONS[activeIdx].a}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Single Primary Button */}
        <div>
          <Button
            size="lg"
            variant="primary"
            onClick={() => openChatbotWidget({ prompt: "🚀 Start website launch" })}
            className="text-xs font-mono uppercase tracking-wider font-semibold py-3.5 px-8 cursor-pointer"
          >
            Start a project
          </Button>
        </div>
      </div>
    </section>
  );
}

