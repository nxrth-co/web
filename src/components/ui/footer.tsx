"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";
import RidgelineDitherFooter from "./ridgeline-dither-footer";

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919327051284";

  return (
    <footer className="relative bg-[#FAF7F2] border-t border-[rgba(140,83,43,0.12)] pt-20 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-[rgba(140,83,43,0.12)]">
          {/* Left: small logo & tagline */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative h-6 w-24">
                <Image
                  src="/brand/nxrth-wordmark-brown.svg"
                  alt="NXRTH"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-[17px] text-[#6E645D] font-normal leading-relaxed">
              Websites &amp; AI for furniture showrooms &amp; custom workshops.
            </p>
          </div>

          {/* Right: WhatsApp & email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 font-mono text-xs">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C532B] hover:text-[#5A3317] hover:underline flex items-center gap-2 font-medium"
            >
              <MessageCircle className="h-4 w-4" />
              <span>+91 93270 51284</span>
            </a>

            <a
              href="mailto:hey@nxrth.co"
              className="text-[#201815] hover:text-[#8C532B] transition-colors flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>hey@nxrth.co</span>
            </a>
          </div>
        </div>

        {/* Giant Logo with Sepia/Wood Pixel-Terrain Art contained in band behind wordmark */}
        <div className="relative my-12 py-10 flex items-center justify-center overflow-hidden rounded-2xl border border-[rgba(140,83,43,0.08)] bg-white/40">
          {/* Dither Terrain Band behind */}
          <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
            <RidgelineDitherFooter
              asBackground
              preset="sepia"
              seed={19}
              ridges={5}
              pixel={2}
              mist={0.8}
              drift={0.6}
              interactive={false}
              altimeter={false}
              palette={{
                paper: "#FAF7F2",
                ink: "#201815",
                muted: "#6E645D",
                line: "rgba(140, 83, 43, 0.12)",
                heart: "#8C532B",
                tones: ["#FAF7F2", "#F4EFEB", "#E8DDD0", "#C68B59", "#8C532B", "#4A2E1B", "#2B1E16"],
              }}
              className="w-full h-full"
            />
            {/* Soft gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]" />
          </div>

          {/* Giant Wordmark in Warm Espresso Walnut */}
          <div className="relative z-10 w-full max-w-3xl h-20 sm:h-32 md:h-40">
            <Image
              src="/brand/nxrth-wordmark-brown.svg"
              alt="NXRTH"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Small Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[rgba(140,83,43,0.12)] font-mono text-xs text-[#8C7E74]">
          <div>NXRTH, read as &ldquo;North&rdquo; · Luxury Furniture Storefronts</div>
          <div>&copy; 2026 NXRTH</div>
        </div>
      </div>
    </footer>
  );
}
