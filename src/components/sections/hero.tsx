"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";
import LightRays from "@/components/ui/light-rays";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex flex-col justify-between pt-36 sm:pt-40 pb-16 overflow-hidden bg-[#FAF7F2]">
      {/* Background Volumetric Warm Golden Sunlight Rays */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50">
        <LightRays
          raysOrigin="top-center"
          raysColor="#D4A373"
          raysSpeed={0.5}
          lightSpread={0.65}
          rayLength={3}
          glow={0.6}
          haze={0.35}
          followMouse
          mouseInfluence={0.08}
          cursorShadow
          clickPulse
          opacity={0.55}
        />
      </div>

      {/* Background soft warm amber & travertine glow */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] sm:w-[1000px] sm:h-[550px] rounded-full bg-radial from-[#C68B59]/15 via-[#E8C99B]/5 to-transparent blur-3xl opacity-70 select-none"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Subtle Luxury Wood Chip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(140,83,43,0.22)] bg-white/70 px-4 py-1.5 backdrop-blur-md shadow-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#8C532B]" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#8C532B] font-medium">
            Fine Timber &amp; Showroom Digital Architecture
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(44px,6.5vw,96px)] font-normal leading-[1.04] tracking-tight text-[#201815] max-w-3xl"
        >
          Websites that move <em className="italic text-[#8C532B] font-normal not-italic">furniture.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-[18px] text-[#6E645D] max-w-[640px] leading-[1.6] font-normal"
        >
          Fast, editorial digital storefronts for furniture makers and ateliers, with an AI concierge that welcomes your patrons 24/7.
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
            className="w-full sm:w-auto text-xs font-mono uppercase tracking-wider font-semibold py-3.5 px-8 cursor-pointer shadow-md"
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

      {/* ONE Large Glassy & Wooden Architectural Frame Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto px-6 mt-16 w-full"
      >
        <div className="relative rounded-t-3xl border border-b-0 border-[rgba(140,83,43,0.18)] bg-white/90 shadow-[0_-20px_50px_rgba(78,52,34,0.08)] backdrop-blur-2xl overflow-hidden">
          {/* Browser Top Bar with Warm Oak Detailing */}
          <div className="h-10 px-4 bg-[#F4EFEB] border-b border-[rgba(140,83,43,0.12)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8C532B]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#C68B59]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8C532B]/20" />
            </div>
            <div className="font-mono text-[11px] text-[#6E645D] bg-white px-4 py-1 rounded-md border border-[rgba(140,83,43,0.12)] shadow-xs">
              yourfurniture.com
            </div>
            <div className="w-10" />
          </div>

          {/* Storefront Preview Interior */}
          <div className="p-6 sm:p-10 bg-gradient-to-b from-white via-[#FAF7F2] to-[#F5EFEB]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[rgba(140,83,43,0.12)]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#8C532B] font-semibold bg-[#8C532B]/10 px-2.5 py-1 rounded-md border border-[#8C532B]/20 inline-block mb-2">
                  SOLID TEAK COLLECTION
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-[#201815]">
                  Kyoto 6-Seater Dining Set
                </h3>
              </div>
              <div className="font-mono text-xl sm:text-2xl text-[#8C532B] font-semibold">
                ₹38,500
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="h-32 sm:h-40 rounded-xl bg-white/90 border border-[rgba(140,83,43,0.14)] p-4 flex flex-col justify-end shadow-xs hover:border-[#8C532B]/40 transition-colors">
                <span className="font-serif text-sm text-[#201815] font-medium">Burma Teak Table</span>
                <span className="font-mono text-[11px] text-[#6E645D]">Natural Matte Polish</span>
              </div>
              <div className="h-32 sm:h-40 rounded-xl bg-white/90 border border-[rgba(140,83,43,0.14)] p-4 flex flex-col justify-end shadow-xs hover:border-[#8C532B]/40 transition-colors">
                <span className="font-serif text-sm text-[#201815] font-medium">Artisan Joinery</span>
                <span className="font-mono text-[11px] text-[#6E645D]">Mortise &amp; Tenon</span>
              </div>
              <div className="h-32 sm:h-40 rounded-xl bg-white/90 border border-[rgba(140,83,43,0.14)] p-4 flex flex-col justify-end shadow-xs hover:border-[#8C532B]/40 transition-colors">
                <span className="font-serif text-sm text-[#201815] font-medium">Matching Chairs (×6)</span>
                <span className="font-mono text-[11px] text-[#6E645D]">Linen Cushion Swatch</span>
              </div>
            </div>
          </div>

          {/* Overlapping Floating Chat Bubble with Luxury Frosted Glass */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 max-w-xs sm:max-w-sm rounded-2xl bg-white/95 border border-[rgba(140,83,43,0.22)] p-4 shadow-[0_16px_36px_rgba(78,52,34,0.12)] backdrop-blur-xl space-y-2.5">
            <div className="bg-[#F4EFEB] p-2.5 rounded-xl border border-[rgba(140,83,43,0.1)] text-xs text-[#5C524B]">
              &ldquo;Do you deliver to Mumbai?&rdquo;
            </div>
            <div className="bg-[#8C532B]/10 p-2.5 rounded-xl border border-[#8C532B]/25 text-xs text-[#201815]">
              <span className="text-[#8C532B] font-mono text-[10px] uppercase font-semibold block mb-0.5">
                AI CONCIERGE
              </span>
              &ldquo;Yes, in 3 to 5 days with white-glove setup.&rdquo;
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
