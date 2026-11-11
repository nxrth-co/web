import { NextResponse } from "next/server";

export const dynamic = "force-static";

const LLMS_FULL_TEXT = `# NXRTH — Full Architecture & Service Specification

## 1. Agency Overview
- Brand: NXRTH
- Phonetic pronunciation: "North"
- Industry: Furniture Web Development & AI Engineering
- Target Audience: Furniture showroom owners, solid wood manufacturers, artisanal workshops, and interior decor dealers in India (Mumbai, Surat, Ahmedabad, Delhi NCR, Bengaluru, Hyderabad, Pune, Kolkata) and internationally (Dubai/UAE, London/UK, USA, Australia).
- Core Philosophy: Minimal, futuristic, precise, premium. We replace slow, cluttered catalogs with lightning-fast editorial digital storefronts that drive high-ticket footfall and WhatsApp enquiries.

## 2. Offerings & Deliverables
### Template Website
- Build Price: ₹15,000 to ₹20,000 one-time build.
- Monthly Care: ₹4,000 to ₹5,000 per month.
- Turnaround: 5 to 7 days.
- What's included:
  - Turnkey furniture showroom digital storefront.
  - Customization with client photos, catalog collections, branding, and contact details.
  - Mobile, tablet, and desktop responsive optimization.
  - WhatsApp conversion button routing inquiries straight to the owner.
  - Local Google Maps SEO optimization.
  - 12 months ongoing monitoring, maintenance, uptime guarantee, and hands-free catalogue changes via WhatsApp.

### Custom Website
- Pricing: Quote-based.
- Turnaround: 2 to 3 weeks.
- What's included:
  - Completely custom architecture and editorial layouts.
  - Advanced catalog filtering by timber species, fabric grade, and room dimensions.
  - 24/7 AI showroom assistant integration.
  - Tailored monthly care plan.

### AI Showroom Concierge
- 24/7 conversational assistant running directly on client websites.
- Understands wood types (Teak, Sheesham, Acacia, Oak, Walnut), fabric durability, room sizing, delivery lead times, and trade inquiries.
- Pre-qualifies customer inquiries and forwards them to WhatsApp.

## 3. Technology Stack & Design System
- Framework: Next.js 16 (App Router), React 19, TypeScript.
- Styling: Tailwind CSS v4 with custom design tokens.
- Animations: Framer Motion and Lenis smooth scrolling.
- Backgrounds: WebGL2 light rays (React Bits) and 8x8 Bayer ordered-dither 2D canvas procedural mountain ridges.
- Color Palette:
  - Midnight Black: #070809
  - Surface Noir: #0E0F11
  - Surface Raised: #15171A
  - Electric Lime Accent: #C8FF00
  - Text Light: #F4F4EF
  - Text Muted: #8B8D90
  - Hot Orange Signal: #FF5B1F
- Typography:
  - Display Serif: Instrument Serif
  - UI Sans: Plus Jakarta Sans / Geist Sans
  - Technical Monospace: JetBrains Mono / Geist Mono

## 4. FAQs
- Q: Why is there a monthly care fee?
  A: A furniture website is a live business asset. Monthly care covers super-fast hosting, regular security patches, continuous backups, and hands-free product updates via WhatsApp so your site never goes stale.
- Q: Can I cancel the monthly care plan?
  A: Yes, with 30 days notice. You own your domain, design, and content outright.
- Q: Can I add the AI chatbot later?
  A: Yes, the AI showroom assistant can be integrated at any point.
- Q: How fast is delivery?
  A: Template sites launch in 5–7 business days; custom builds launch in 2–3 weeks.

## 5. Contact Channels
- WhatsApp: +91 93270 51284 (https://wa.me/919327051284)
- Email (General): hey@nxrth.co
- Email (Customer Support): answers@nxrth.co
- Email (Billing): billing@nxrth.co
- Email (Legal): legal@nxrth.co
- Website: https://nxrth.co
`;

export async function GET() {
  return new NextResponse(LLMS_FULL_TEXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
