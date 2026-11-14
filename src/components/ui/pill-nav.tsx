"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";
import { Button } from "./button";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "AI assistant", href: "#ai-assistant" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function PillNav() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Floating Pill Nav */}
      <header className="fixed top-5 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 rounded-full border border-[rgba(140,83,43,0.18)] bg-white/85 px-4 sm:px-6 py-2.5 backdrop-blur-xl shadow-[0_12px_36px_rgba(78,52,34,0.08)]"
        >
          {/* Logo Left */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8C532B] rounded-full"
            aria-label="NXRTH Home"
          >
            <div className="relative h-6 w-24 sm:h-7 sm:w-28 flex items-center [filter:invert(1)_brightness(0.18)_sepia(0.25)]">
              <Image
                src="/brand/nxrth-logo.png"
                alt="NXRTH"
                fill
                priority
                className="object-contain transition-transform group-hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#6E645D]">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                    isActive
                      ? "text-[#8C532B] bg-[#8C532B]/10 font-semibold"
                      : "hover:text-[#201815] hover:bg-[rgba(140,83,43,0.06)]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="primary"
              onClick={() => openChatbotWidget({ prompt: "🚀 Start website launch" })}
              className="text-xs font-mono tracking-wider uppercase font-semibold cursor-pointer"
            >
              Start a project
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-[rgba(140,83,43,0.2)] bg-white/70 text-[#201815] hover:text-[#8C532B] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#FAF7F2]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 md:hidden"
          >
            <div className="flex items-center justify-between pt-3">
              <div className="relative h-7 w-28 [filter:invert(1)_brightness(0.18)_sepia(0.25)]">
                <Image
                  src="/brand/nxrth-logo.png"
                  alt="NXRTH"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-[rgba(140,83,43,0.2)] text-[#201815] hover:bg-[#8C532B]/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-8 my-auto">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-serif text-3xl text-[#201815] hover:text-[#8C532B] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="pb-6">
              <Button
                size="lg"
                variant="primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openChatbotWidget({ prompt: "🚀 Start website launch" });
                }}
                className="w-full text-xs font-mono tracking-wider uppercase font-semibold cursor-pointer"
              >
                Start a project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
