"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionBadge, Crosshair } from "@/components/ui/crosshair";
import { Button } from "@/components/ui/button";
import { templatesData } from "@/data/templates";
import { useStartFlow } from "@/context/start-flow-context";

export function TemplatesPreview() {
  const { openStartFlow } = useStartFlow();

  return (
    <section id="templates" className="relative py-24 sm:py-32 px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.08)]">
      <div className="absolute top-8 left-6 sm:left-12">
        <Crosshair />
      </div>
      <div className="absolute top-8 right-6 sm:right-12">
        <Crosshair />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionBadge number="04" label="TEMPLATES" className="mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F4EF] font-normal tracking-tight">
              Ready-made collections. Ready to <em className="italic text-[#C8FF00]">deploy.</em>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8B8D90] max-w-xs uppercase tracking-wider">
            Pick a foundation. We personalize it with your timber, fabrics, and pricing in 5–7 days.
          </p>
        </div>

        {/* 4 CSS-Crafted Template Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templatesData.map((template) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-[rgba(255,255,255,0.1)] bg-[#0E0F11] overflow-hidden flex flex-col justify-between group hover:border-[#C8FF00]/40 transition-all duration-300 shadow-xl"
            >
              {/* Card Header & Architectural Visual Viewport */}
              <div>
                <div className="p-6 pb-4 flex items-center justify-between border-b border-[rgba(255,255,255,0.06)]">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B8D90]">
                      SERIES / {template.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F4EF] group-hover:text-[#C8FF00] transition-colors">
                      {template.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#C8FF00] bg-[#C8FF00]/10 border border-[#C8FF00]/25 px-3 py-1 rounded-full">
                    READY IN 5 DAYS
                  </span>
                </div>

                {/* CSS Visual Architectural Canvas */}
                <div className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-[#15171A] via-[#0D0E10] to-[#070809] p-6 flex flex-col justify-between overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
                  {/* Subtle Grid Lines inside graphic */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />

                  {/* Geometric Furniture Outline Representation */}
                  <div className="relative z-10 flex items-center justify-center h-full">
                    {template.category === "Modern" && (
                      <div className="flex items-end gap-3 opacity-90">
                        <div className="w-16 h-20 rounded-t-2xl border-2 border-[#C8FF00]/80 bg-[#C8FF00]/5 flex items-center justify-center font-mono text-[10px] text-[#C8FF00]">
                          1-SEAT
                        </div>
                        <div className="w-28 h-24 rounded-t-2xl border-2 border-[#C8FF00] bg-[#C8FF00]/10 flex items-center justify-center font-mono text-[11px] text-[#C8FF00] font-semibold">
                          3-SEATER SOFA
                        </div>
                        <div className="w-14 h-12 rounded-t-xl border-2 border-[#C8FF00]/50 bg-[#C8FF00]/5 flex items-center justify-center font-mono text-[9px] text-[#C8FF00]">
                          OTTOMAN
                        </div>
                      </div>
                    )}

                    {template.category === "Classic" && (
                      <div className="flex flex-col items-center gap-2 opacity-90">
                        <div className="w-36 h-12 rounded-lg border-2 border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center font-mono text-xs text-[#D4AF37] font-semibold">
                          HERITAGE DINING TABLE
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-12 rounded-t border border-[#D4AF37]/60" />
                          <div className="w-8 h-12 rounded-t border border-[#D4AF37]/60" />
                          <div className="w-8 h-12 rounded-t border border-[#D4AF37]/60" />
                        </div>
                      </div>
                    )}

                    {template.category === "Minimal" && (
                      <div className="flex items-center gap-4 opacity-90">
                        <div className="w-20 h-28 rounded border-2 border-white/80 bg-white/5 flex flex-col justify-between p-2">
                          <div className="w-4 h-1 bg-white/60" />
                          <div className="font-mono text-[9px] text-white">CHAIR 01</div>
                        </div>
                        <div className="w-32 h-20 rounded border-2 border-white/60 bg-white/5 flex flex-col justify-between p-2">
                          <div className="w-6 h-1 bg-white/60" />
                          <div className="font-mono text-[9px] text-white">LOW CREDENZA</div>
                        </div>
                      </div>
                    )}

                    {template.category === "Luxury" && (
                      <div className="flex flex-col items-center gap-3 opacity-90">
                        <div className="w-40 h-24 rounded-2xl border-2 border-[#E2C391] bg-gradient-to-br from-[#E2C391]/20 to-transparent flex flex-col justify-between p-3 shadow-inner">
                          <span className="font-mono text-[9px] text-[#E2C391] uppercase tracking-widest">
                            VIP COLLECTION
                          </span>
                          <span className="font-serif text-sm text-[#F4F4EF] text-right">
                            Master Bed Suite
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom spec bar */}
                  <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-[#8B8D90] bg-[#070809]/80 px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.06)]">
                    <span>Palette: {template.woodTone}</span>
                    <span className="text-[#C8FF00]">Instant Enquiry Hook</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-sm font-medium text-[#F4F4EF] mb-2">{template.tagline}</p>
                  <p className="text-xs text-[#8B8D90] leading-relaxed mb-4">
                    {template.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                    {template.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#8B8D90]">
                        <Check className="h-3.5 w-3.5 text-[#C8FF00] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <Button
                  size="md"
                  variant="primary"
                  onClick={() =>
                    openStartFlow({
                      plan: "template",
                      template: template.name,
                    })
                  }
                  className="w-full text-xs font-mono uppercase tracking-wider font-semibold"
                >
                  Choose this template <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

