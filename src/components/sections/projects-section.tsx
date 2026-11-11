"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { SectionBadge, Crosshair } from "@/components/ui/crosshair";
import { clientProjects } from "@/data/projects";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.08)] overflow-hidden"
    >
      <div className="hidden sm:block absolute top-8 left-6 sm:left-12">
        <Crosshair />
      </div>
      <div className="hidden sm:block absolute top-8 right-6 sm:right-12">
        <Crosshair />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <SectionBadge number="03" label="SELECTED WORK" className="mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F4EF] font-normal tracking-tight">
              Live websites that move <em className="italic text-[#C8FF00]">furniture.</em>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8B8D90] max-w-sm uppercase tracking-wider">
            Real client storefronts built and scaled by NXRTH. Click through to experience live speeds.
          </p>
        </div>

        {/* 2 Flagship Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {clientProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group rounded-3xl border border-[rgba(255,255,255,0.1)] bg-[#0E0F11] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8FF00]/50 transition-all duration-300 relative shadow-2xl overflow-hidden"
            >
              {/* Subtle accent hover glow */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 rounded-full bg-radial from-[#C8FF00]/10 via-transparent to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.06)] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#C8FF00] font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="text-[#8B8D90] font-mono text-xs">/</span>
                    <span className="font-mono text-xs text-[#8B8D90] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#8B8D90]">
                    <MapPin className="h-3 w-3 text-[#FF5B1F]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Title & Live Link Button */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F4EF] group-hover:text-[#C8FF00] transition-colors">
                      {project.name}
                    </h3>
                    <p className="font-mono text-xs text-[#C8FF00] mt-1 flex items-center gap-1">
                      <span>{project.displayUrl}</span>
                    </p>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#F4F4EF] group-hover:border-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-[#070809] transition-all duration-300 shrink-0"
                    aria-label={`Visit live site ${project.name}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <p className="text-sm text-[#8B8D90] leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Performance Highlight Metric Box */}
                <div className="p-4 rounded-2xl bg-[#15171A] border border-[rgba(255,255,255,0.06)] flex items-center justify-between mb-6">
                  <div>
                    <div className="font-mono text-xs text-[#8B8D90] uppercase tracking-wider">
                      {project.metrics.label}
                    </div>
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#C8FF00]">
                      {project.metrics.value}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[10px] text-[#8B8D90] uppercase tracking-wider">
                      Timber Focus
                    </div>
                    <div className="font-mono text-xs text-[#F4F4EF]">
                      {project.timberFocus}
                    </div>
                  </div>
                </div>

                {/* Deliverables / Outcomes checklist */}
                <div className="space-y-2 mb-6">
                  {project.results.map((result, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-2.5 font-mono text-xs text-[#8B8D90]"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C8FF00] shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.04)] hover:bg-[#C8FF00] hover:text-[#070809] border border-[rgba(255,255,255,0.1)] text-[#F4F4EF] font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer group/btn"
                >
                  <span>Visit Live Storefront</span>
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() =>
                    openChatbotWidget({
                      prompt: `I love your work on ${project.name} (${project.displayUrl}). Can we build something similar for my showroom?`,
                    })
                  }
                  className="w-full sm:w-auto py-3 px-4 rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-[#C8FF00]/40 text-[#8B8D90] hover:text-[#C8FF00] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
                >
                  Build Similar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

