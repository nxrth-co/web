"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "What does the monthly care fee cover?",
    a: "Hosting, security, daily backups and ongoing updates. Send new product photos or price adjustments on WhatsApp and we update them within 24 hours.",
  },
  {
    q: "Can I cancel the monthly care plan?",
    a: "Yes, anytime with 30 days notice. You own your domain, content and codebase outright with zero lock-in.",
  },
  {
    q: "Can I add the AI assistant later?",
    a: "Yes. You can launch your storefront first and add the 24/7 AI showroom assistant whenever you are ready.",
  },
  {
    q: "Who owns my domain and content?",
    a: "You retain 100% legal ownership of your domain, photographs, branding and product catalogue forever.",
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative min-h-[80svh] flex flex-col justify-center py-24 sm:py-36 px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.06)]"
    >
      <div className="max-w-[720px] mx-auto w-full">
        {/* Left-Aligned Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] block mb-3">
            FAQ
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] text-[#F4F4EF] font-normal tracking-tight">
            Good to <em className="italic text-[#C8FF00] font-normal not-italic">know.</em>
          </h2>
        </div>

        {/* 4 Clean Collapsed Questions directly on background */}
        <div className="divide-y divide-[rgba(255,255,255,0.08)] border-y border-[rgba(255,255,255,0.08)]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                >
                  <span className="text-[18px] sm:text-[19px] font-serif text-[#F4F4EF] group-hover:text-[#C8FF00] transition-colors">
                    {item.q}
                  </span>
                  <div className="h-7 w-7 rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#A6A8AA] group-hover:text-[#C8FF00] group-hover:border-[#C8FF00]/40 transition-colors shrink-0">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-[17px] text-[#A6A8AA] leading-[1.6] font-normal pr-8">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

