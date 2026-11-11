"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, Mail, ShieldAlert, CreditCard, LifeBuoy } from "lucide-react";
import { Crosshair } from "./crosshair";
import { openChatbotWidget } from "./chatbot-widget";
import RidgelineDitherFooter from "./ridgeline-dither-footer";

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919327051284";

  return (
    <RidgelineDitherFooter
      asBackground
      preset="nxrth"
      seed={19}
      ridges={6}
      pixel={2}
      mist={0.7}
      drift={0.9}
      interactive={true}
      altimeter={true}
      className="border-t border-[rgba(255,255,255,0.08)] pt-20 pb-12"
    >
      {/* Corner crosshairs */}
      <div className="absolute top-4 left-6 pointer-events-none z-20">
        <Crosshair />
      </div>
      <div className="absolute top-4 right-6 pointer-events-none z-20">
        <Crosshair />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[rgba(255,255,255,0.08)]">
          {/* Brand Philosophy */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-6 w-6">
                  <Image
                    src="/brand/nxrth-mark-lime.png"
                    alt="NXRTH mark"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00]">
                  NXRTH · EST. 2026
                </span>
              </div>
              <p className="text-xl sm:text-2xl text-[#F4F4EF] font-light max-w-sm leading-relaxed">
                Websites &amp; AI that move furniture.
              </p>
            </div>

            <p className="mt-6 font-mono text-xs text-[#8B8D90] max-w-sm">
              <span className="text-[#F4F4EF]">NXRTH</span>, pronounced &ldquo;North&rdquo;—a guiding direction for furniture brands.
            </p>
          </div>

          {/* Dedicated Communications Grid */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8B8D90] mb-1">
              Direct Contact &amp; Channels
            </span>

            <div className="flex flex-col gap-2.5 font-mono text-xs">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi%20NXRTH,%20I'd%20like%20to%20discuss%20a%20website%20for%20my%20furniture%20showroom.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F4F4EF] hover:text-[#C8FF00] transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#C8FF00]" />
                WhatsApp: +91 93270 51284
                <ArrowUpRight className="h-3 w-3 text-[#8B8D90]" />
              </a>

              <a
                href="mailto:hey@nxrth.co"
                className="flex items-center gap-2 text-[#8B8D90] hover:text-[#F4F4EF] transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#C8FF00]" />
                Contact: <span className="text-[#F4F4EF]">hey@nxrth.co</span>
              </a>

              <a
                href="mailto:answers@nxrth.co"
                className="flex items-center gap-2 text-[#8B8D90] hover:text-[#F4F4EF] transition-colors"
              >
                <LifeBuoy className="h-3.5 w-3.5" />
                Support: <span className="text-[#F4F4EF]">answers@nxrth.co</span>
              </a>

              <a
                href="mailto:billing@nxrth.co"
                className="flex items-center gap-2 text-[#8B8D90] hover:text-[#F4F4EF] transition-colors"
              >
                <CreditCard className="h-3.5 w-3.5" />
                Billing: <span className="text-[#F4F4EF]">billing@nxrth.co</span>
              </a>

              <a
                href="mailto:legal@nxrth.co"
                className="flex items-center gap-2 text-[#8B8D90] hover:text-[#F4F4EF] transition-colors"
              >
                <ShieldAlert className="h-3.5 w-3.5" />
                Legal: <span className="text-[#F4F4EF]">legal@nxrth.co</span>
              </a>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8B8D90] mb-1">
              Index
            </span>
            <div className="flex flex-col gap-2 font-mono text-xs text-[#8B8D90]">
              <a href="#services" className="hover:text-[#F4F4EF] transition-colors">
                (01) Services
              </a>
              <a href="#ai-assistant" className="hover:text-[#F4F4EF] transition-colors">
                (02) AI Concierge
              </a>
              <a href="#pricing" className="hover:text-[#F4F4EF] transition-colors">
                (03) Plans &amp; Care
              </a>
              <a href="#faq" className="hover:text-[#F4F4EF] transition-colors">
                (04) Frequently Asked Questions
              </a>
              <button
                type="button"
                onClick={() => openChatbotWidget({ prompt: "🚀 Start website launch" })}
                className="text-left text-[#C8FF00] hover:underline pt-2 cursor-pointer flex items-center gap-1"
              >
                <span>Launch Project via AI</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Giant Scaled NXRTH Wordmark over Dither Horizon */}
        <div className="relative pt-12 pb-8 flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
          <div className="relative w-full max-w-4xl h-20 sm:h-32 md:h-44">
            <Image
              src="/brand/nxrth-logo.png"
              alt="NXRTH Wordmark"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[rgba(255,255,255,0.05)] font-mono text-[11px] text-[#8B8D90]">
          <div>&copy; 2026 NXRTH. Built for high-growth furniture brands.</div>
          <div className="flex items-center gap-6">
            <span>Mumbai · Surat · Global</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </RidgelineDitherFooter>
  );
}
