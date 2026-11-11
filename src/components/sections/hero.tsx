"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MessageSquare, TrendingUp, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Crosshair } from "@/components/ui/crosshair";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";
import LightRays from "@/components/ui/light-rays";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 overflow-hidden bg-[#070809]">
      {/* Interactive WebGL Light Rays (React Bits) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-75">
        <LightRays
          raysOrigin="top-center"
          raysColor="#C8FF00"
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={3}
          glow={0.55}
          haze={0.28}
          followMouse
          mouseInfluence={0.12}
          cursorShadow
          clickPulse
          opacity={0.7}
        />
      </div>

      {/* Background radial lime glow base */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] sm:w-[1100px] sm:h-[600px] rounded-full bg-radial from-[#C8FF00]/10 via-[#C8FF00]/2 to-transparent blur-3xl opacity-60 select-none"
        aria-hidden="true"
      />

      {/* Subtle dotted matrix grid fading out */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 select-none"
        aria-hidden="true"
      />

      {/* Decorative corner markers */}
      <div className="absolute top-28 left-6 sm:left-12">
        <Crosshair />
      </div>
      <div className="absolute top-28 right-6 sm:right-12">
        <Crosshair />
      </div>

      {/* Main Hero Header Block */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Monospace Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(255,255,255,0.12)] bg-[#0E0F11]/90 px-4 py-1.5 font-mono text-[11px] sm:text-xs tracking-widest text-[#8B8D90] uppercase mb-8 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
          <span className="text-[#F4F4EF]">WEB + AI FOR FURNITURE BRANDS</span>
          <span className="text-[#8B8D90]/50">[ 2026 ]</span>
        </motion.div>

        {/* Refined Display Serif Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.75rem,7.5vw,6.5rem)] font-normal leading-[1.03] tracking-tight text-[#F4F4EF] max-w-4xl"
        >
          Websites that move <em className="italic text-[#C8FF00] font-normal not-italic">furniture.</em>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-xl text-[#8B8D90] max-w-2xl leading-relaxed font-light"
        >
          NXRTH builds fast, beautiful, AI-powered websites for furniture shops, so more people find you and buy from you.
        </motion.p>

        {/* Two Pill CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={() => openChatbotWidget({ prompt: "🚀 Start website launch" })}
            className="w-full sm:w-auto text-sm font-mono uppercase tracking-wider font-semibold px-8 cursor-pointer"
          >
            Start a project <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>

          <a href="#pricing" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-sm font-mono tracking-wider px-8"
            >
              See plans &amp; pricing
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Floating Product UI Cards Peeking Over the Fold */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-6xl mx-auto px-6 mt-16 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: AI Chatbot Mock Widget */}
          <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#0E0F11]/90 p-5 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-[#C8FF00]/40 transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.06)] mb-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
                  <MessageSquare className="h-3.5 w-3.5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#F4F4EF]">
                  AI Showroom Concierge
                </span>
              </div>
              {/* Hot Orange Surprise Dot */}
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FF5B1F] animate-ping" />
                <span className="font-mono text-[10px] text-[#FF5B1F]">LIVE</span>
              </div>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="bg-[#15171A] p-2.5 rounded-lg border border-[rgba(255,255,255,0.04)] text-[#8B8D90]">
                <span className="text-[#F4F4EF] block font-sans text-xs mb-0.5">Customer:</span>
                &ldquo;Do you deliver teak dining tables to Mumbai?&rdquo;
              </div>
              <div className="bg-[#C8FF00]/10 p-2.5 rounded-lg border border-[#C8FF00]/20 text-[#F4F4EF]">
                <span className="text-[#C8FF00] block text-[10px] uppercase font-semibold mb-0.5">
                  NXRTH AI Bot:
                </span>
                &ldquo;Yes, 3–5 day doorstep transit with white-glove setup. Would you like our 6-seater catalog on WhatsApp?&rdquo;
              </div>
            </div>
          </div>

          {/* Card 2: Digital Catalog Peek */}
          <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#0E0F11]/90 p-5 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-[#C8FF00]/40 transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.06)] mb-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
                  <Layers className="h-3.5 w-3.5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#F4F4EF]">
                  Digital Showroom Catalog
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#C8FF00] border border-[#C8FF00]/30 px-2 py-0.5 rounded-full">
                READY-MADE
              </span>
            </div>

            {/* CSS Architectural Sofa Render */}
            <div className="h-24 w-full rounded-xl bg-gradient-to-br from-[#15171A] to-[#0A0B0D] p-3 flex flex-col justify-between border border-[rgba(255,255,255,0.05)]">
              <div className="flex justify-between items-start">
                <span className="font-serif text-sm text-[#F4F4EF]">Copenhagen Modular Sofa</span>
                <span className="font-mono text-[10px] text-[#C8FF00]">₹42,000</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[rgba(255,255,255,0.04)]">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#3d332a] border border-white/20" title="Smoked Walnut" />
                  <span className="h-3 w-3 rounded-full bg-[#8c827a] border border-white/20" title="Boucle Cream" />
                  <span className="h-3 w-3 rounded-full bg-[#1b221a] border border-white/20" title="Olive Velvet" />
                </div>
                <span className="font-mono text-[10px] text-[#8B8D90]">1-tap WhatsApp route</span>
              </div>
            </div>
          </div>

          {/* Card 3: Metrics & Enquiries Card */}
          <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#0E0F11]/90 p-5 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-[#C8FF00]/40 transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.06)] mb-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
                  <TrendingUp className="h-3.5 w-3.5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#F4F4EF]">
                  Showroom Performance
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#8B8D90]">THIS WEEK</span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-mono text-3xl font-semibold text-[#F4F4EF]">48</span>
              <span className="font-mono text-xs text-[#C8FF00]">+142% WhatsApp enquiries</span>
            </div>

            <p className="font-mono text-[11px] text-[#8B8D90] leading-relaxed">
              Google Maps local search + AI instant enquiry filters turning visitors into showroom footfall.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

