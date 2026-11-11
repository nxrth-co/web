"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";
import RidgelineDitherFooter from "./ridgeline-dither-footer";

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919327051284";

  return (
    <footer className="relative bg-[#070809] border-t border-[rgba(255,255,255,0.06)] pt-20 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-[rgba(255,255,255,0.06)]">
          {/* Left: small logo & tagline */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative h-6 w-24">
                <Image
                  src="/brand/nxrth-logo.png"
                  alt="NXRTH"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-[17px] text-[#A6A8AA] font-normal leading-relaxed">
              Websites &amp; AI for furniture shops.
            </p>
          </div>

          {/* Right: WhatsApp & ONE email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 font-mono text-xs">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8FF00] hover:underline flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>+91 93270 51284</span>
            </a>

            <a
              href="mailto:hey@nxrth.co"
              className="text-[#F4F4EF] hover:text-[#C8FF00] transition-colors flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>hey@nxrth.co</span>
            </a>
          </div>
        </div>

        {/* Giant Logo with Pixel-Terrain Art contained in band behind wordmark at ~35% opacity */}
        <div className="relative my-12 py-10 flex items-center justify-center overflow-hidden rounded-2xl">
          {/* Dither Terrain Band behind */}
          <div className="absolute inset-0 opacity-35 pointer-events-none overflow-hidden">
            <RidgelineDitherFooter
              asBackground
              preset="nxrth"
              seed={19}
              ridges={5}
              pixel={2}
              mist={0.8}
              drift={0.6}
              interactive={false}
              altimeter={false}
              className="w-full h-full"
            />
            {/* Dark gradient mask so no text ever sits on harsh pixels */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-transparent to-[#070809]" />
          </div>

          {/* Giant Wordmark */}
          <div className="relative z-10 w-full max-w-3xl h-20 sm:h-32 md:h-40">
            <Image
              src="/brand/nxrth-logo.png"
              alt="NXRTH"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Small Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[rgba(255,255,255,0.06)] font-mono text-xs text-[#A6A8AA]">
          <div>NXRTH, read as &ldquo;North&rdquo;</div>
          <div>&copy; 2026 NXRTH</div>
        </div>
      </div>
    </footer>
  );
}
