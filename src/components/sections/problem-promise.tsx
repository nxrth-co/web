"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge, Crosshair } from "@/components/ui/crosshair";
import { MapPin, Globe, Sparkles } from "lucide-react";

export function ProblemPromise() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.08)] overflow-hidden">
      <div className="hidden sm:block absolute top-8 left-6 sm:left-12">
        <Crosshair />
      </div>
      <div className="hidden sm:block absolute top-8 right-6 sm:right-12">
        <Crosshair />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <SectionBadge number="01" label="THE PROBLEM & PROMISE" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6"
        >
          <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl text-[#F4F4EF] font-normal leading-[1.12] tracking-tight px-2">
            Exceptional furniture craft. Yet <em className="italic text-[#C8FF00]">invisible</em> online.
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-[#8B8D90] font-light max-w-2xl mx-auto leading-relaxed px-2">
            Most showrooms lose buyers simply because their digital catalog is slow or non-existent. We put your showroom on Google Maps and route ready buyers directly to your WhatsApp.
          </p>
        </motion.div>

        {/* 3 Decluttered Outcome Pills */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 pt-8 sm:pt-10 border-t border-[rgba(255,255,255,0.06)] text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0E0F11] border border-[rgba(255,255,255,0.06)]">
            <MapPin className="h-4 w-4 text-[#C8FF00] mb-3" />
            <h3 className="font-mono text-xs uppercase text-[#F4F4EF] mb-1 font-semibold tracking-wider">
              Local Search Dominance
            </h3>
            <p className="text-xs text-[#8B8D90]">
              Google Maps top-pack rankings for showroom buyers near you.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0E0F11] border border-[rgba(255,255,255,0.06)]">
            <Globe className="h-4 w-4 text-[#C8FF00] mb-3" />
            <h3 className="font-mono text-xs uppercase text-[#F4F4EF] mb-1 font-semibold tracking-wider">
              Pan-India &amp; Global
            </h3>
            <p className="text-xs text-[#8B8D90]">
              High-speed edge catalogue for architects and outstation clients.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0E0F11] border border-[rgba(255,255,255,0.06)]">
            <Sparkles className="h-4 w-4 text-[#C8FF00] mb-3" />
            <h3 className="font-mono text-xs uppercase text-[#F4F4EF] mb-1 font-semibold tracking-wider">
              24/7 AI Lead Routing
            </h3>
            <p className="text-xs text-[#8B8D90]">
              Instant answers on wood, finish, and dimensions directly on WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
