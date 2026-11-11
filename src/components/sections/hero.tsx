"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";
import LightRays from "@/components/ui/light-rays";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex flex-col justify-between pt-36 sm:pt-40 pb-16 overflow-hidden bg-[#070809]">
      {/* Background Volumetric Rays */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60">
        <LightRays
          raysOrigin="top-center"
          raysColor="#C8FF00"
          raysSpeed={0.7}
          lightSpread={0.55}
          rayLength={3}
          glow={0.5}
          haze={0.25}
          followMouse
          mouseInfluence={0.1}
          cursorShadow
          clickPulse
          opacity={0.65}
        />
      </div>

      {/* Background radial lime glow base */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] sm:w-[1000px] sm:h-[550px] rounded-full bg-radial from-[#C8FF00]/10 via-[#C8FF00]/2 to-transparent blur-3xl opacity-60 select-none"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(44px,6.5vw,96px)] font-normal leading-[1.04] tracking-tight text-[#F4F4EF] max-w-3xl"
        >
          Websites that move <em className="italic text-[#C8FF00] font-normal not-italic">furniture.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-[18px] text-[#A6A8AA] max-w-[640px] leading-[1.6] font-normal"
        >
          Fast, beautiful websites for furniture shops, with an AI assistant that answers your customers.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={() => openChatbotWidget({ prompt: "🚀 Start website launch" })}
            className="w-full sm:w-auto text-xs font-mono uppercase tracking-wider font-semibold py-3.5 px-8 cursor-pointer"
          >
            Start a project
          </Button>

          <a href="#pricing" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-xs font-mono uppercase tracking-wider py-3.5 px-8"
            >
              See pricing
            </Button>
          </a>
        </motion.div>
      </div>

      {/* ONE Large CSS Browser-Frame Mockup rising from bottom edge */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto px-6 mt-16 w-full"
      >
        <div className="relative rounded-t-3xl border border-b-0 border-[rgba(255,255,255,0.14)] bg-[#0E0F11] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Browser Top Bar */}
          <div className="h-10 px-4 bg-[#15171A] border-b border-[rgba(255,255,255,0.08)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <div className="font-mono text-[11px] text-[#A6A8AA] bg-[#070809] px-4 py-1 rounded-md border border-[rgba(255,255,255,0.06)]">
              yourfurniture.com
            </div>
            <div className="w-10" />
          </div>

          {/* Storefront Preview Interior */}
          <div className="p-6 sm:p-10 bg-gradient-to-b from-[#0E0F11] to-[#070809]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[rgba(255,255,255,0.06)]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#C8FF00] block mb-1">
                  SOLID TEAK COLLECTION
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-[#F4F4EF]">
                  Kyoto 6-Seater Dining Set
                </h3>
              </div>
              <div className="font-mono text-xl sm:text-2xl text-[#C8FF00] font-semibold">
                ₹38,500
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="h-32 sm:h-40 rounded-xl bg-[#15171A] border border-[rgba(255,255,255,0.06)] p-4 flex flex-col justify-end">
                <span className="font-serif text-sm text-[#F4F4EF]">Burma Teak Table</span>
                <span className="font-mono text-[11px] text-[#A6A8AA]">Natural Matte Polish</span>
              </div>
              <div className="h-32 sm:h-40 rounded-xl bg-[#15171A] border border-[rgba(255,255,255,0.06)] p-4 flex flex-col justify-end">
                <span className="font-serif text-sm text-[#F4F4EF]">Artisan Joinery</span>
                <span className="font-mono text-[11px] text-[#A6A8AA]">Mortise &amp; Tenon</span>
              </div>
              <div className="h-32 sm:h-40 rounded-xl bg-[#15171A] border border-[rgba(255,255,255,0.06)] p-4 flex flex-col justify-end">
                <span className="font-serif text-sm text-[#F4F4EF]">Matching Chairs (×6)</span>
                <span className="font-mono text-[11px] text-[#A6A8AA]">Linen Cushion Swatch</span>
              </div>
            </div>
          </div>

          {/* Overlapping Floating Chat Bubble */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 max-w-xs sm:max-w-sm rounded-2xl bg-[#0E0F11]/95 border border-[rgba(255,255,255,0.16)] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl space-y-2.5">
            <div className="bg-[#15171A] p-2.5 rounded-xl border border-[rgba(255,255,255,0.06)] text-xs text-[#A6A8AA]">
              &ldquo;Do you deliver to Mumbai?&rdquo;
            </div>
            <div className="bg-[#C8FF00]/10 p-2.5 rounded-xl border border-[#C8FF00]/25 text-xs text-[#F4F4EF]">
              <span className="text-[#C8FF00] font-mono text-[10px] uppercase font-semibold block mb-0.5">
                AI ASSISTANT
              </span>
              &ldquo;Yes, in 3 to 5 days.&rdquo;
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
