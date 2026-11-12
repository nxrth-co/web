"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative min-h-[90svh] flex flex-col justify-center py-24 sm:py-36 px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.06)]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Left-Aligned Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] block mb-3">
            PRICING
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] text-[#F4F4EF] font-normal tracking-tight">
            Simple <em className="italic text-[#C8FF00] font-normal not-italic">pricing.</em>
          </h2>
          <p className="mt-4 text-[18px] text-[#A6A8AA] font-normal max-w-[640px] leading-[1.6]">
            Pay once to build. Pay monthly to keep it fast, safe and updated.
          </p>
        </div>

        {/* Two Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Template (Highlighted) */}
          <div className="rounded-3xl border-2 border-[#C8FF00] bg-[#0E0F11] p-8 sm:p-10 flex flex-col justify-between shadow-[0_0_40px_rgba(200,255,0,0.12)]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] block mb-3 font-semibold">
                TEMPLATE PLAN
              </span>

              <div className="mb-6">
                <div className="font-serif text-3xl sm:text-4xl text-[#F4F4EF]">
                  ₹15,000 – ₹20,000
                </div>
                <div className="font-mono text-xs text-[#A6A8AA] mt-1">one-time build</div>
                <div className="font-mono text-sm text-[#C8FF00] mt-3 font-medium">
                  + ₹4,000 – ₹5,000 / month care
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-[rgba(255,255,255,0.08)] mb-8">
                <div className="flex items-center gap-3 text-[17px] text-[#F4F4EF]">
                  <Check className="h-4 w-4 text-[#C8FF00] shrink-0" />
                  <span>Pick a ready-made template</span>
                </div>
                <div className="flex items-center gap-3 text-[17px] text-[#F4F4EF]">
                  <Check className="h-4 w-4 text-[#C8FF00] shrink-0" />
                  <span>Your products, logo and WhatsApp button</span>
                </div>
                <div className="flex items-center gap-3 text-[17px] text-[#F4F4EF]">
                  <Check className="h-4 w-4 text-[#C8FF00] shrink-0" />
                  <span>Add an AI assistant anytime</span>
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
              className="w-full text-xs font-mono uppercase tracking-wider font-semibold py-3.5 cursor-pointer"
            >
              Choose Template
            </Button>
          </div>

          {/* Card 2: Custom */}
          <div className="rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[#0E0F11] p-8 sm:p-10 flex flex-col justify-between hover:border-[rgba(255,255,255,0.22)] transition-colors">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#A6A8AA] block mb-3 font-semibold">
                CUSTOM PLAN
              </span>

              <div className="mb-6">
                <div className="font-serif text-3xl sm:text-4xl text-[#F4F4EF]">
                  Custom quote
                </div>
                <div className="font-mono text-xs text-[#A6A8AA] mt-1">tailored for your brand</div>
                <div className="font-mono text-sm text-[#A6A8AA] mt-3 font-medium">
                  + monthly care
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-[rgba(255,255,255,0.08)] mb-8">
                <div className="flex items-center gap-3 text-[17px] text-[#F4F4EF]">
                  <Check className="h-4 w-4 text-[#C8FF00] shrink-0" />
                  <span>Designed from scratch for your brand</span>
                </div>
                <div className="flex items-center gap-3 text-[17px] text-[#F4F4EF]">
                  <Check className="h-4 w-4 text-[#C8FF00] shrink-0" />
                  <span>AI assistant trained on your catalogue</span>
                </div>
                <div className="flex items-center gap-3 text-[17px] text-[#F4F4EF]">
                  <Check className="h-4 w-4 text-[#C8FF00] shrink-0" />
                  <span>Priority support and updates</span>
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
        <p className="text-center font-mono text-xs sm:text-[13px] text-[#A6A8AA] max-w-2xl mx-auto leading-relaxed">
          Monthly care covers hosting, security, backups and updates. Send changes on WhatsApp and we publish within 24 hours.
        </p>
      </div>
    </section>
  );
}
