# Devlog: Wiring Groq-Powered AI Into the Bottom Right Corner
**Date:** November 11, 2026  
**Author:** Lead AI Systems & Frontend Engineer  
**Mood:** Hyperspeed inference, dark-mode bliss, 0.02s token responses.

---

### What just got shipped?
We just hooked up a live, floating **NXRTH AI Concierge** widget directly into the bottom-right corner of the sales page, and wired it up to the `GROQ_API_KEY` from `.env`.

This isn't just a static mock widget—it's a live conversational brain with sub-second response times, styled in our trademark midnight black (`#070809`), electric lime (`#C8FF00`), and a pulsing hot orange (`#FF5B1F`) "AI Online" status dot.

### The Backend Route (`/api/chat`)
- Built an edge-compatible route handler at `src/app/api/chat/route.ts`.
- Validates the incoming message array with Zod and trims conversation history to the last 8 turns.
- Injects our high-converting system prompt: the AI knows NXRTH's pricing (₹15,000–₹20,000 template site + ₹4,000–₹5,000/mo care; custom architectural quotes), our 4 furniture templates, wood species (Teak, Sheesham, Walnut), and delivery logistics.
- Zero-trust security: the Groq API key never leaks to client bundles.

### The Front-of-House Experience (`ChatbotWidget`)
- Floating circular trigger button with a subtle lime border glow and the NXRTH mark.
- Sits at `bottom-6 right-6` on desktop, and cleanly at `bottom-20 right-4` on mobile so it floats right above the sticky bottom CTA pill without blocking anything.
- Quick prompt chips for common showroom buyer questions.
- Built-in bridge: when a user expresses intent to buy or start a project, an interactive button renders inside the chat bubble to launch the 6-step Start Flow in one tap!

Tested in Playwright at 1440px and 390px mobile widths. Groq delivered crisp, contextual responses in under 200ms. Ready to convert visitors! 🚀

