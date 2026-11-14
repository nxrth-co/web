# Luxury Wooden & White Decor Theme Architecture

## Overview
As part of NXRTH's core USP—crafting digital showrooms and bespoke web architecture for luxury furniture manufacturers and ateliers—the site was transformed from a dark brutalist lime theme into a warm, cozy, architectural white and rich timber aesthetic with frosted glass and wooden components.

---

## 1. Visual & Color System Architecture

### Architectural White & Limestone Canvas
- **Background (`--bg` / `#FAF7F2`):** Soft, warm travertine and alabaster linen white that eliminates harsh glare while providing organic, gallery-like prestige.
- **Surface (`--surface` / `#FFFFFF`):** Luminous white cards paired with delicate warm timber drop shadows.
- **Surface Raised (`--surface-raised` / `#F4EFEB`):** Soft blonde oak / oat tint for nested components, mockups, and secondary surfaces.

### Natural Timber & Cognac Teak Accents
- **Primary Timber (`--accent` / `#8C532B`):** Warm burnished teak and cognac leather tone used for badges, active states, key emphasis typography, and subtle borders.
- **Espresso Walnut (`--accent-dark` / `#2B1E16`):** Deep solid walnut tone applied to high-contrast primary CTA buttons, headings, and the concierge header.
- **Honey Oak & Polished Brass (`--accent-gold` / `#C68B59`):** Accent glow, metric sparks, and secondary highlight elements.
- **Terracotta Accent (`--surprise` / `#C05A32`):** Warm burnt sienna accent for unread indicators and alert badges.

### Typographic Contrast
- **Headings & Bold Text (`--text` / `#201815`):** Deep espresso charcoal rendered in serif (`Instrument Serif`), evocative of heritage catalog titling.
- **Body & Secondary Copy (`--muted` / `#6E645D`):** Warm cashmere stone gray rendered in sans-serif (`Plus Jakarta Sans`), delivering high readability with gentle contrast.
- **Code & Metadata (`--font-mono` / `#8C7E74`):** Warm stone monospaced styling (`JetBrains Mono`).

---

## 2. Component Enhancements

### 1. Pill Navigation (`PillNav`)
- **Container:** High-translucency frosted glass (`bg-white/85 backdrop-blur-xl border border-[rgba(140,83,43,0.18)] shadow-[0_12px_36px_rgba(78,52,34,0.08)]`).
- **Brand Wordmark:** Inverted and toned with CSS filters (`filter: invert(1) brightness(0.18) sepia(0.25)`) to render the transparent white asset in solid espresso walnut.
- **Nav Links:** Cashmere stone text with warm teak hover states and active pill highlighting (`text-[#8C532B] bg-[#8C532B]/10`).
- **Mobile Menu:** Full-screen frosted cream overlay with teak borders.

### 2. Volumetric Sunbeams & Hero Mockup (`Hero`)
- **Light Rays:** WebGL volumetric light rays shifted from electric lime to warm golden sunlight (`#D4A373`) simulating skylight rays streaming across polished furniture.
- **Showcase Mockup:** Re-engineered as a luxury furniture vitrine with blonde oak browser bar (`#F4EFEB`), brass dot hardware, Burma teak dining set catalog card, and frosted glass floating concierge bubble.

### 3. Magnetic Buttons (`Button`)
- **Primary:** Deep espresso walnut (`bg-[#2B1E16] text-[#FAF7F2] border-[#2B1E16] hover:bg-[#432F23]`) with warm drop shadow.
- **Secondary:** Frosted glass with subtle timber borders (`bg-white/80 backdrop-blur-md text-[#201815] border-[rgba(140,83,43,0.22)] hover:bg-[#8C532B]/8`).
- **Surprise:** Rich terracotta leather tone (`#C05A32`).

### 4. Interactive Showroom Concierge (`ChatbotWidget`)
- **Header:** Rich solid espresso walnut (`#2B1E16`) with amber live indicator (`#C68B59`) and white NXRTH mark.
- **Message Canvas:** Warm travertine linen (`#FAF7F2`) with frosted white user chat cards and solid espresso bot replies.
- **Pills & Inputs:** Frosted glass pills with warm oak outlines and smooth active states.
- **Launcher:** Solid walnut floating icon with warm terracotta unread badge.

### 5. Ridgeline Terrain Footer (`Footer` & `RidgelineDitherFooter`)
- **Theme Preset:** Configured to `preset="sepia"` with warm travertine paper (`#FAF7F2`), espresso ink (`#201815`), and a custom 7-stage timber dither gradient (`#FAF7F2` through `#2B1E16`).
- **Brand Masking:** Giant NXRTH wordmark positioned over the sepia mountain mist with a soft vertical fade.

---

## 3. Technical Verification
- Built with Next.js Turbopack compiler (`pnpm run build`).
- Zero compilation errors, clean static generation for all 13 routes.
- Fully accessible focus rings styled with warm teak (`focus-visible:ring-[#8C532B]`).
