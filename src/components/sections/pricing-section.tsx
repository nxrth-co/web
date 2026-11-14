"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative min-h-[90svh] flex flex-col justify-center py-24 sm:py-36 px-6 bg-[#FAF7F2] border-b border-[rgba(140,83,43,0.12)]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Left-Aligned Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C532B] block mb-3 font-semibold">
            INVESTMENT &amp; CARE
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] text-[#201815] font-normal tracking-tight">
            Simple, honest <em className="italic text-[#8C532B] font-normal not-italic">pricing.</em>
          </h2>
          <p className="mt-4 text-[18px] text-[#6E645D] font-normal max-w-[640px] leading-[1.6]">
            One-time build for your digital showroom. Modest monthly care to keep it fast, protected and updated with your newest collections.
          </p>
        </div>

        {/* Two Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Template (Highlighted in Rich Teak) */}
          <div className="rounded-3xl border-2 border-[#8C532B] bg-white/90 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_16px_50px_rgba(140,83,43,0.12)] relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#8C532B] font-semibold">
                  ATELIER TEMPLATE
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#FAF7F2] bg-[#8C532B] px-2.5 py-0.5 rounded-full font-medium">
                  POPULAR
                </span>
              </div>

              <div className="mb-6">
                <div className="font-serif text-3xl sm:text-4xl text-[#201815]">
                  ₹15,000 – ₹20,000
                </div>
                <div className="font-mono text-xs text-[#8C7E74] mt-1">one-time build</div>
                <div className="font-mono text-sm text-[#8C532B] mt-3 font-semibold">
                  + ₹4,000 – ₹5,000 / month white-glove care
                </div>
              </div>

              <div className="space-y-3.5 pt-6 border-t border-[rgba(140,83,43,0.12)] mb-8">
                <div className="flex items-center gap-3 text-[16px] text-[#201815]">
                  <Check className="h-4 w-4 text-[#8C532B] shrink-0" />
                  <span>Curated furniture layout crafted for teak &amp; luxury decor</span>
                </div>
                <div className="flex items-center gap-3 text-[16px] text-[#201815]">
                  <Check className="h-4 w-4 text-[#8C532B] shrink-0" />
                  <span>High-res wood grain swatches, catalog &amp; WhatsApp concierge</span>
                </div>
                <div className="flex items-center gap-3 text-[16px] text-[#201815]">
                  <Check className="h-4 w-4 text-[#8C532B] shrink-0" />
                  <span>Add our 24/7 AI showroom assistant anytime</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              variant="primary"
              onClick={() =>
                openChatbotWidget({
                  prompt: "I want to get started with the Template Plan (₹15,000 – ₹20,000)",
                })
              }
              className="w-full text-xs font-mono uppercase tracking-wider font-semibold py-3.5 cursor-pointer shadow-md"
            >
              Choose Template
            </Button>
          </div>

          {/* Card 2: Custom */}
          <div className="rounded-3xl border border-[rgba(140,83,43,0.18)] bg-white/80 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#8C532B]/50 hover:shadow-[0_16px_40px_rgba(78,52,34,0.08)] transition-all">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#6E645D] block mb-3 font-semibold">
                BESPOKE ARCHITECTURE
              </span>

              <div className="mb-6">
                <div className="font-serif text-3xl sm:text-4xl text-[#201815]">
                  Custom quote
                </div>
                <div className="font-mono text-xs text-[#8C7E74] mt-1">tailored for your brand &amp; factory</div>
                <div className="font-mono text-sm text-[#6E645D] mt-3 font-medium">
                  + monthly white-glove care
                </div>
              </div>

              <div className="space-y-3.5 pt-6 border-t border-[rgba(140,83,43,0.12)] mb-8">
                <div className="flex items-center gap-3 text-[16px] text-[#201815]">
                  <Check className="h-4 w-4 text-[#C68B59] shrink-0" />
                  <span>Custom designed from sketch to match your showroom aesthetics</span>
                </div>
                <div className="flex items-center gap-3 text-[16px] text-[#201815]">
                  <Check className="h-4 w-4 text-[#C68B59] shrink-0" />
                  <span>AI assistant deeply trained on entire inventory &amp; wood specs</span>
                </div>
                <div className="flex items-center gap-3 text-[16px] text-[#201815]">
                  <Check className="h-4 w-4 text-[#C68B59] shrink-0" />
                  <span>Dedicated concierge, same-day catalogue additions &amp; SEO</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                openChatbotWidget({
                  prompt: "I want to request a quote for a Custom Showroom Website",
                })
              }
              className="w-full text-xs font-mono uppercase tracking-wider font-semibold py-3.5 cursor-pointer"
            >
              Request a quote
            </Button>
          </div>
        </div>

        {/* Centered Muted Explainer Line */}
        <p className="text-center font-mono text-xs sm:text-[13px] text-[#6E645D] max-w-2xl mx-auto leading-relaxed">
          Monthly care covers ultra-fast cloud hosting, SSL security, daily backups and inventory updates. Send timber updates on WhatsApp and we publish within 24 hours.
        </p>
      </div>
    </section>
  );
}
