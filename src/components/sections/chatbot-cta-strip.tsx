"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, ArrowUpRight, Sparkles } from "lucide-react";
import { SectionBadge, Crosshair } from "@/components/ui/crosshair";
import { Button } from "@/components/ui/button";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

export function ChatbotCtaStrip() {
  return (
    <section
      id="ai-assistant"
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.08)] overflow-hidden"
    >
      <div className="hidden sm:block absolute top-6 left-6 sm:left-12">
        <Crosshair />
      </div>
      <div className="hidden sm:block absolute top-6 right-6 sm:right-12">
        <Crosshair />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-[rgba(255,255,255,0.1)] bg-[#0E0F11] p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl">
          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-radial from-[#C8FF00]/10 via-transparent to-transparent blur-2xl"
            aria-hidden="true"
          />

          <div className="space-y-3 sm:space-y-4 max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#FF5B1F] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00]">
                24/7 AI SALES CONCIERGE
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F4EF] leading-tight">
              Talk directly with our <em className="italic text-[#C8FF00]">AI assistant.</em>
            </h2>

            <p className="text-xs sm:text-base text-[#8B8D90] font-light leading-relaxed">
              Trained on timber grades, dimensions, delivery zones, and trade pricing. Test live showroom responses instantly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Button
              size="lg"
              variant="primary"
              onClick={() => openChatbotWidget()}
              className="w-full sm:w-auto text-xs font-mono uppercase tracking-wider font-semibold py-3 px-6 sm:px-7 cursor-pointer"
            >
              <MessageSquare className="mr-2 h-4 w-4" /> Open AI Chatbot <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

