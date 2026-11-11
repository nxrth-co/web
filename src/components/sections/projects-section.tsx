"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { clientProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative min-h-[90svh] flex flex-col justify-center py-24 sm:py-36 px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.06)]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Left-Aligned Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] block mb-3">
            WORK
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] text-[#F4F4EF] font-normal tracking-tight">
            Real shops. <em className="italic text-[#C8FF00] font-normal not-italic">Live</em> now.
          </h2>
        </div>

        {/* 2 Clean Flagship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clientProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl border border-[rgba(255,255,255,0.1)] bg-[#0E0F11] p-6 sm:p-8 flex flex-col justify-between"
            >
              {/* Clean Browser-Frame Placeholder */}
              <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#15171A] overflow-hidden mb-6">
                <div className="h-8 px-3 bg-[#1B1D20] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                  <span className="font-mono text-[10px] text-[#A6A8AA]">
                    {project.displayUrl}
                  </span>
                  <div className="w-8" />
                </div>
                <div className="h-48 sm:h-56 bg-gradient-to-br from-[#15171A] to-[#0A0B0D] p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#C8FF00]">
                      LIVE DIGITAL STOREFRONT
                    </span>
                    <span className="font-mono text-xs text-[#A6A8AA]">{project.year}</span>
                  </div>
                  <div>
                    <div className="font-serif text-2xl text-[#F4F4EF]">{project.name}</div>
                    <div className="font-mono text-xs text-[#A6A8AA] mt-1">{project.location}</div>
                  </div>
                </div>
              </div>

              {/* Name, City & Single Visit Link */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <h3 className="font-serif text-2xl text-[#F4F4EF]">{project.name}</h3>
                  <p className="font-mono text-xs text-[#A6A8AA] mt-0.5">{project.location}</p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider font-semibold text-[#C8FF00] hover:underline inline-flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-[#C8FF00]/10 transition-colors"
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
