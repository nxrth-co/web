"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";
import { Button } from "./button";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "AI Concierge", href: "#ai-assistant" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function PillNav() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyBottom, setShowStickyBottom] = useState(false);

  // Track active section and scroll offset
  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky bottom button once hero scrolled out (> 600px)
      if (window.scrollY > 600) {
        setShowStickyBottom(true);
      } else {
        setShowStickyBottom(false);
      }

      // Check current section
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
          className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 rounded-full border border-[rgba(255,255,255,0.12)] bg-[#0E0F11]/85 px-4 sm:px-6 py-2.5 backdrop-blur-xl shadow-[0_16px_36px_rgba(0,0,0,0.6)]"
        >
          {/* Logo Left */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00] rounded-full"
            aria-label="NXRTH Home"
          >
            <div className="relative h-6 w-24 sm:h-7 sm:w-28 flex items-center">
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
          <div className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#8B8D90]">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-full transition-colors ${
                    isActive
                      ? "text-[#C8FF00] bg-[rgba(200,255,0,0.08)]"
                      : "hover:text-[#F4F4EF] hover:bg-[rgba(255,255,255,0.04)]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="primary"
              onClick={() => openChatbotWidget({ prompt: "🚀 Start website launch" })}
              className="hidden sm:inline-flex text-xs font-mono tracking-wider uppercase font-semibold cursor-pointer"
            >
              Start a project
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-[#F4F4EF] hover:text-[#C8FF00] focus:outline-none"
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
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#070809]/95 flex flex-col justify-between p-6 sm:p-10 md:hidden"
          >
            <div className="flex items-center justify-between pt-3">
              <div className="relative h-7 w-28">
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
                className="h-10 w-10 flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.15)] text-[#F4F4EF]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 my-auto">
              {NAV_LINKS.map((link, idx) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-3xl text-[#F4F4EF] group-hover:text-[#C8FF00] transition-colors">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-[#8B8D90]">
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pb-6">
              <Button
                size="lg"
                variant="primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openChatbotWidget({ prompt: "🚀 Start website launch" });
                }}
                className="w-full text-sm font-mono tracking-wider uppercase font-semibold cursor-pointer"
              >
                Start a project
              </Button>
              <p className="font-mono text-[10px] text-center text-[#8B8D90] uppercase tracking-widest">
                Web + AI for Furniture Showrooms
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slim Sticky Mobile Bottom Pill */}
      <AnimatePresence>
        {showStickyBottom && !mobileMenuOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-5 inset-x-0 z-30 flex justify-center px-4 md:hidden pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-sm rounded-full bg-[#0E0F11]/90 p-1.5 border border-[rgba(255,255,255,0.12)] backdrop-blur-xl shadow-[0_12px_28px_rgba(0,0,0,0.7)] flex items-center justify-between">
              <div className="flex items-center gap-2 pl-3">
                <div className="relative h-5 w-5">
                  <Image
                    src="/brand/nxrth-mark-lime.png"
                    alt="NXRTH Mark"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#F4F4EF]">
                  NXRTH Studio
                </span>
              </div>
              <Button
                size="sm"
                variant="primary"
                onClick={() => openChatbotWidget({ prompt: "🚀 Start website launch" })}
                className="text-xs font-mono font-semibold uppercase tracking-wider px-4 py-2 cursor-pointer"
              >
                Start a project <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

