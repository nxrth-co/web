# NXRTH One-Page Sales Engine & Start Flow Architecture

## 1. Overview
NXRTH is a specialized web and AI studio engineered exclusively for furniture showrooms, workshops, and manufacturers. The digital platform is architected as a high-converting, single-page sales machine built with Next.js App Router, TypeScript, and Tailwind CSS.

## 2. Core Feature Specifications

### 2.1 Single-Page Editorial Sales Flow
- **Hero Section:** Minimalist dark aesthetic (`#070809`), Instrument Serif display typography with electric lime accent (`#C8FF00`), radial lime beam backdrop, floating CSS-crafted product cards peeking across the fold.
- **Marquee Strip:** Infinite hardware-accelerated ticker highlighting core value drivers: Visibility, Speed, AI Chatbots, Local SEO, Digital Catalog, and WhatsApp Enquiries.
- **Problem & Promise:** High-contrast editorial narrative addressing the showroom visibility paradox and outlining NXRTH's local and national conversion mechanisms.
- **Services Matrix:** Four hover-reactive interactive rows (`01 Template Websites`, `02 Custom Websites`, `03 AI Chatbot Integration`, `04 Monitoring & Maintenance`).
- **Interactive AI Showroom Demo:** Live mock conversational concierge trained on furniture dimensions, timber finishes (teak, walnut, oak), and city logistics with one-tap preset questions and WhatsApp handoff triggers.
- **Templates Showcase:** Four CSS-crafted architectural template models (`Aurora`, `Heritage`, `Mono`, `Sovereign`) with direct "Choose this template" triggers preselecting answers in the Start Flow.
- **Methodology & Transparent Pricing:** 4-step deployment sequence (`Choose`, `Customize`, `Launch`, `Grow`), dual plan comparison with clear separation between one-time build fees and monthly care, and an accessible 5-question FAQ accordion.
- **Inline Final CTA:** Giant headline with the interactive first question of the Start Flow embedded directly in the section.

### 2.2 The 6-Step Frictionless Start Flow
Replaces traditional contact forms with an animated, one-question-at-a-time modal flow:
1. **Scope/Needs:** Multi-select options with custom checkbox indicators.
2. **Primary Goal:** Single-select options with auto-advancement.
3. **Business Profile:** Single-select categorization with auto-advancement.
4. **Location:** City input accompanied by rapid-tap Indian furniture hub chips (Surat, Mumbai, Ahmedabad, Delhi NCR, etc.).
5. **Timeline:** Launch timeframe selection with dynamic preselected template badge display.
6. **Direct WhatsApp Contact:** Name and international telephone validation with country selector.
7. **Success Confirmation:** Real-time WhatsApp lead summary preview card, one-click `wa.me` direct launcher, clipboard copy, and reset handlers.

### 2.3 Lead API & Notification Pipeline
- **Endpoint:** `POST /api/lead`
- **Security & Integrity:** Zod schema validation, hidden honeypot bot trap, and in-memory IP rate limiting (max 5 requests / 10 minutes).
- **Notification Adapters (`src/lib/notify.ts`):** Zero-config server console logger, webhook dispatcher, Resend email adapter, and Meta WhatsApp Business Cloud API connector.

### 2.4 Brand Assets & Dark Theme Adaptation
Original assets located in `/assets/` were processed without altering geometry or proportions:
- `public/brand/nxrth-logo.png`: 1038x148 wordmark with transparent background, recolored with off-white (`#F4F4EF`) glyphs and electric lime (`#C8FF00`) on the letter 'X'.
- `public/brand/nxrth-mark.png` & `nxrth-mark-lime.png`: Extracted high-res compass/chevron icon mark from `assets/nxrth - logo (3).png`.
- Favicon & Apple Icons generated at 32x32 and 192x192.

