"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { clientProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative min-h-[90svh] flex flex-col justify-center py-24 sm:py-36 px-6 bg-[#FAF7F2] border-b border-[rgba(140,83,43,0.12)]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Left-Aligned Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C532B] block mb-3 font-semibold">
            SELECTED SHOWROOMS
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] text-[#201815] font-normal tracking-tight">
            Real shops. <em className="italic text-[#8C532B] font-normal not-italic">Live</em> now.
          </h2>
          <p className="mt-3 text-[17px] text-[#6E645D] font-normal max-w-xl">
            Custom digital ateliers designed with organic grain textures, swift catalog inquiries, and seamless WhatsApp booking.
          </p>
        </div>

        {/* 2 Clean Flagship Glass-and-Wood Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clientProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl border border-[rgba(140,83,43,0.16)] bg-white/85 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(78,52,34,0.06)] hover:border-[rgba(140,83,43,0.32)] hover:shadow-[0_18px_45px_rgba(78,52,34,0.09)] transition-all"
            >
              {/* Clean Wooden Browser-Frame Mockup */}
              <div className="rounded-2xl border border-[rgba(140,83,43,0.12)] bg-[#F4EFEB] overflow-hidden mb-6 shadow-xs">
                <div className="h-8 px-3 bg-[#EFE8DD] border-b border-[rgba(140,83,43,0.1)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#8C532B]/40" />
                    <span className="h-2 w-2 rounded-full bg-[#C68B59]/40" />
                    <span className="h-2 w-2 rounded-full bg-[#8C532B]/20" />
                  </div>
                  <span className="font-mono text-[10px] text-[#6E645D]">
                    {project.displayUrl}
                  </span>
                  <div className="w-8" />
                </div>
                <div className="h-48 sm:h-56 bg-gradient-to-br from-white via-[#FAF7F2] to-[#F5EFEB] p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#8C532B] font-semibold bg-[#8C532B]/10 px-2 py-0.5 rounded border border-[#8C532B]/20">
                      LIVE DIGITAL STOREFRONT
                    </span>
                    <span className="font-mono text-xs text-[#8C7E74]">{project.year}</span>
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl text-[#201815]">{project.name}</div>
                    <div className="font-mono text-xs text-[#6E645D] mt-1 flex items-center gap-2">
                      <span>{project.location}</span>
                      <span>·</span>
                      <span className="text-[#8C532B] font-medium">{project.timberFocus}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8C532B] bg-white/90 border border-[rgba(140,83,43,0.15)] px-3 py-1 rounded-full shadow-2xs font-semibold">
                      <Sparkles className="h-3 w-3 text-[#C68B59]" />
                      {project.metrics.label}: {project.metrics.value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Name, City & Single Visit Link */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <h3 className="font-serif text-2xl text-[#201815]">{project.name}</h3>
                  <p className="font-mono text-xs text-[#6E645D] mt-0.5">{project.category}</p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider font-semibold text-[#8C532B] hover:text-[#5A3317] inline-flex items-center gap-1.5 py-2 px-3.5 rounded-full bg-[#8C532B]/10 hover:bg-[#8C532B]/18 border border-[#8C532B]/20 transition-all cursor-pointer"
                >
                  <span>Visit site</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
