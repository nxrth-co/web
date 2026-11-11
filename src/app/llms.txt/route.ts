import { NextResponse } from "next/server";

export const dynamic = "force-static";

const LLMS_TEXT = `# NXRTH — Websites & AI for Furniture Showrooms & Manufacturers

> High-converting digital storefronts and 24/7 AI chatbots designed exclusively for furniture brands, showrooms, workshops, and manufacturers.

## About NXRTH
- Name: NXRTH (pronounced "North", always uppercase).
- Agency Profile: Specialized web design, development, and AI engineering studio for furniture businesses.
- Operational Locations: Mumbai & Surat, India. Serving clients pan-India and globally (UAE, UK, USA, Australia, Singapore).
- Value Proposition: Converting searchers into WhatsApp showroom enquiries and footfall through ultra-fast, editorial storefronts, Google Maps local SEO, and 24/7 automated showroom assistants.

## Core Offerings & Transparent Pricing (INR ₹)
### 1. Template Website
- Build Price: ₹15,000 – ₹20,000 (one-time investment).
- Delivery Time: Live in 5–7 business days.
- Scope: High-speed responsive digital showroom customized with brand typography, product collections, high-ticket inquiry routing, and local Google SEO.
- Monthly Care Plan: ₹4,000 – ₹5,000 / month (guarantees 99.9% uptime, managed cloud hosting, automated backups, speed tuning, security supervision, and hands-free catalogue updates on WhatsApp).

### 2. Custom Website
- Build Price: Bespoke architecture with quote-based pricing.
- Delivery Time: Live in 2–3 weeks.
- Scope: Fully customized design system, custom product filters, timber/fabric calculators, multi-showroom location routing, and 24/7 AI showroom assistant integration.
- Dedicated Care Plan: Tailored monthly maintenance, performance monitoring, and security coverage.

### 3. 24/7 AI Showroom Assistant
- Custom-trained on timber species (Teak, Sheesham, Oak, Walnut), dimensions, upholstery swatches, maintenance care, and city logistics.
- Automatically qualifies customer intent and dispatches qualified buyer inquiries straight to the showroom owner's WhatsApp.

## Conversational Launch Flow
- Clients can start their project directly through our conversational AI Concierge right on the website.
- The AI gathers showroom specifications in natural language and generates an instant 1-tap WhatsApp dispatch card directly to our founders at +91 93270 51284.

## Contact & Direct Channels
- WhatsApp: +91 93270 51284 (https://wa.me/919327051284)
- General Inquiries: hey@nxrth.co
- Customer Support: answers@nxrth.co
- Billing: billing@nxrth.co
- Legal & Compliance: legal@nxrth.co
- Official Website: https://nxrth.co

## Key Links
- [Website Home](https://nxrth.co)
- [Services](https://nxrth.co/#services)
- [AI Concierge](https://nxrth.co/#ai-assistant)
- [Plans & Care](https://nxrth.co/#pricing)
- [Frequently Asked Questions](https://nxrth.co/#faq)
- [Full LLM Specification](https://nxrth.co/llms-full.txt)
`;

export async function GET() {
  return new NextResponse(LLMS_TEXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
