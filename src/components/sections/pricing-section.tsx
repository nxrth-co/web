"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowUpRight, HelpCircle } from "lucide-react";
import { SectionBadge, Crosshair } from "@/components/ui/crosshair";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { pricingPlans, monthlyCareIncludes, faqItems, processSteps } from "@/data/pricing";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.08)] overflow-hidden">
      <div className="hidden sm:block absolute top-8 left-6 sm:left-12">
        <Crosshair />
      </div>
      <div className="hidden sm:block absolute top-8 right-6 sm:right-12">
        <Crosshair />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Slim 4-Step Process Strip just above pricing */}
        <div className="mb-16 sm:mb-24 pt-2 sm:pt-4 pb-8 sm:pb-12 border-b border-[rgba(255,255,255,0.08)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] block mb-1">
                OUR METHODOLOGY
              </span>
              <h3 className="font-serif text-xl sm:text-3xl text-[#F4F4EF]">
                How we take your showroom digital in days.
              </h3>
            </div>
            <span className="font-mono text-[11px] sm:text-xs text-[#8B8D90]">4 CLEAR STEPS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-4 sm:p-5 rounded-2xl bg-[#0E0F11] border border-[rgba(255,255,255,0.06)] relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs sm:text-sm text-[#C8FF00] block mb-2 sm:mb-3 font-semibold">
                    ({step.step})
                  </span>
                  <h4 className="text-base sm:text-lg font-serif text-[#F4F4EF] mb-1.5 sm:mb-2">{step.title}</h4>
                  <p className="text-xs text-[#8B8D90] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <SectionBadge number="05" label="HONEST PRICING" className="mb-4" />
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#F4F4EF] font-normal tracking-tight px-2">
            Transparent investment. No surprise <em className="italic text-[#C8FF00]">invoices.</em>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#8B8D90] font-light px-2">
            A one-time launch fee, followed by a dedicated monthly care plan that keeps your website lightning-fast, secure, and updated with your newest pieces.
          </p>
        </div>

        {/* Two Plan Cards in Full */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl border p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isFeatured
                  ? "bg-[#0E0F11] border-[#C8FF00]/50 shadow-[0_0_36px_rgba(200,255,0,0.12)]"
                  : "bg-[#0E0F11] border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)]"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/30">
                  {plan.badge}
                </div>
              )}

              <div>
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#8B8D90] block mb-2">
                  {plan.name}
                </span>

                <div className="mt-3 sm:mt-4 mb-2">
                  <div className="font-serif text-2xl sm:text-4xl text-[#F4F4EF] font-normal">
                    {plan.priceHeadline}
                  </div>
                  <div className="font-mono text-[11px] sm:text-xs text-[#8B8D90] mt-1">{plan.priceSubline}</div>
                </div>

                {/* Monthly Care Highlight */}
                <div className="my-4 sm:my-5 p-3 sm:p-3.5 rounded-xl bg-[#15171A] border border-[rgba(255,255,255,0.06)]">
                  <div className="font-mono text-xs font-semibold text-[#C8FF00]">
                    {plan.monthlyFee}
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] text-[#8B8D90] mt-0.5">
                    {plan.monthlyNote}
                  </div>
                </div>

                <p className="text-sm text-[#8B8D90] leading-relaxed mb-6">{plan.description}</p>

                {/* Feature List */}
                <div className="space-y-3 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B8D90] block mb-1">
                    Deliverables:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F4F4EF]/90">
                      <Check className="h-4 w-4 text-[#C8FF00] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action */}
              <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                <Button
                  size="lg"
                  variant={plan.isFeatured ? "primary" : "secondary"}
                  onClick={() => {
                    if (plan.id === "template") {
                      openChatbotWidget({ prompt: "I want to launch with the Template Website plan (₹15,000)" });
                    } else {
                      openChatbotWidget({ prompt: "I want to request a quote for a Custom Showroom Website" });
                    }
                  }}
                  className="w-full text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer"
                >
                  {plan.ctaText} <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Notice on Monthly Care */}
        <div className="p-6 rounded-2xl bg-[#15171A]/70 border border-[rgba(255,255,255,0.08)] mb-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-[#C8FF00] shrink-0" />
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#F4F4EF] font-semibold block">
                Honest Billing Philosophy
              </span>
              <p className="text-xs text-[#8B8D90] max-w-2xl leading-relaxed">
                We don&apos;t abandon your site after launch. The one-time fee covers custom engineering and asset setup. The monthly fee covers continuous supervision, updates, security, and edge hosting so your showroom never breaks.
              </p>
            </div>
          </div>
        </div>

        {/* What Monthly Care Includes */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] block mb-2">
              PEACE OF MIND
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#F4F4EF]">
              What&apos;s included in monthly care
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyCareIncludes.map((care, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-2xl bg-[#0E0F11] border border-[rgba(255,255,255,0.06)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#C8FF00] block mb-2">0{cIdx + 1}</span>
                  <h4 className="font-mono text-sm font-medium text-[#F4F4EF] mb-2">{care.title}</h4>
                  <p className="text-xs text-[#8B8D90] leading-relaxed">{care.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div id="faq" className="max-w-4xl mx-auto pt-8">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[rgba(255,255,255,0.08)]">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-[#C8FF00]" />
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F4EF]">
                Frequently asked questions
              </h3>
            </div>
            <span className="font-mono text-xs text-[#8B8D90]">5 ANSWERS</span>
          </div>

          <Accordion items={faqItems} />
        </div>

        {/* Primary CTA Repeated after Pricing as required */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="primary"
            onClick={() => openChatbotWidget({ prompt: "🚀 Start website launch" })}
            className="text-sm font-mono uppercase tracking-wider font-semibold px-8 cursor-pointer"
          >
            Start your project today <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

