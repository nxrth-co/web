# Client Portfolio & Case Studies

This document records the addition of NXRTH's flagship client case studies and live showroom projects: **Jeet Furniture** and **Best Furniture Store**.

---

## 1. Selected Client Work

### A. Jeet Furniture
- **Live URL**: [https://www.jeetfurniture.com/](https://www.jeetfurniture.com/)
- **Category**: Solid Teak & Bespoke Living
- **Location**: Surat, Gujarat
- **Scope & Architecture**:
  - Turnkey digital showroom with zero-latency image compression for high-res solid wood photography.
  - Direct 1-tap WhatsApp catalog routing for luxury living, dining, and bedroom inquiries.
  - Local Google Maps top-3 search ranking in Surat.
  - Performance: **+180% WhatsApp enquiries**.
  - Timber focus: Burma Teak · Sheesham · Natural Oak.

### B. Best Furniture Store
- **Live URL**: [https://www.bestfurniture.store/](https://www.bestfurniture.store/)
- **Category**: Modern Living & Modular Showroom
- **Location**: Mumbai, Maharashtra
- **Scope & Architecture**:
  - Editorial digital storefront with clean Scandi-inspired typography and rapid category filters.
  - 24/7 AI-qualified customer intent filtering connected to showroom sales staff.
  - Sub-second mobile load times on 4G networks.
  - Performance: **+135% showroom footfall**.
  - Timber focus: Engineered Wood · American Walnut · Matte Ash.

---

## 2. Integrated Touchpoints
- **Landing Page Section (`src/components/sections/projects-section.tsx`)**:
  - Live link buttons (`target="_blank" rel="noopener noreferrer"`).
  - "Build Similar" direct AI launch prompt.
- **Top Pill Navigation & Mobile Menu (`src/components/ui/pill-nav.tsx`)**:
  - Added "Work" navigation anchor pointing to `#work`.
- **Site Footer & Index (`src/components/ui/footer.tsx`)**:
  - Added "(02) Selected Work" in the footer index.
- **Sitemap & Search Discovery (`src/app/sitemap.ts`)**:
  - Added `https://nxrth.co#work` with high priority.
- **AI Chatbot Knowledge & Prompts (`src/app/api/chat/route.ts` & `functions/api/chat.ts`)**:
  - Trained the AI concierge on both portfolio projects so it can cite live client examples when answering inquiries.
- **AI Crawlers Context (`llms.txt` and `llms-full.txt`)**:
  - Updated with official portfolio URLs.
