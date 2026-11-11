# NXRTH Live AI Concierge Widget

## 1. Overview
The NXRTH Live AI Concierge is a floating, interactive chatbot widget positioned in the bottom-right corner of the website. It is powered directly by **Groq Cloud API** (`GROQ_API_KEY`) via a secure server route (`POST /api/chat`) and tailored specifically to answer furniture showroom inquiries, pricing, dimensions, timber polishes, and custom architectural quote requests.

## 2. Architecture & Security
- **Server Route:** `src/app/api/chat/route.ts`
  - Validates conversation payloads with Zod.
  - Keeps conversation context concise (last 8 messages) for low latency.
  - Connects to Groq Cloud API using ultra-fast models (`qwen/qwen3.8-27b`, with fallback models).
  - Injects a system prompt establishing the persona as the *NXRTH AI Showroom Concierge*.
  - Enforces zero-trust credential hygiene: `GROQ_API_KEY` is loaded exclusively on the server and is never sent to the client.
- **Client Component:** `src/components/ui/chatbot-widget.tsx`
  - Fixed position: `bottom-6 right-6` on desktop, `bottom-20 right-4` on mobile (positioned above the sticky mobile CTA).
  - Dark luxury theme: Midnight black (`#070809`), surface card (`#0E0F11`), hairline borders, electric lime (`#C8FF00`) accents, and pulsing hot orange (`#FF5B1F`) "AI Online" status dot.
  - Interactive quick-chips for instant common showroom queries.
  - Direct hook into the 6-step project flow (`openStartFlow()`) whenever a user is ready for a quote.

