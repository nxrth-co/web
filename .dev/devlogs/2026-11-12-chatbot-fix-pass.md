# Devlog: Clean, Calm & Conversion-Friendly Chat Widget Fix Pass
**Date:** 2026-11-12  
**Author:** Antigravity Engineering  
**Mood:** 💬 Seamless, calm, and conversion-focused!

---

### What Was Accomplished 🛠️
We updated the chat widget and API handlers to be ultra-clean, hospitable, and strictly conversion-friendly:

1. **How Replies Are Produced**:
   - Replies are **LLM-powered via Groq Cloud API** (`llama-3.3-70b-versatile` running at sub-200ms latency) through both Next.js App Router (`/api/chat`) and Cloudflare Pages Edge worker (`functions/api/chat.ts`).
   - If the API fails or is unavailable, it gracefully defaults to pre-scripted fallback responses.

2. **Renaming & Visual Cleanup**:
   - Renamed "AI Concierge" to **"NXRTH Assistant"** across the widget title, status, navigation, and aria labels.
   - Header is exactly 72px with 36px mark, title, and a lime pulsing dot with status "Online".
   - Greeting is a single bubble: *"Namaste! Ask me about websites, pricing or getting started."*
   - Removed all timestamps ("Just now") and all emojis from the widget.
   - Reply style strictly adheres to: max 3 short sentences, plain language, no jargon, no questionnaires in chat.

3. **Suggested Questions (Stacked Pills)**:
   - 4 full-width stacked pills directly under the greeting (no horizontal scrolling):
     1. *"What's included in the ₹15,000 template?"*
     2. *"How much is monthly care?"*
     3. *"Can I add an AI assistant?"*
     4. *"I'd like to start a project"* (lime outline, smooth-scrolls to the Start Flow)
   - After the first message, these initial pills hide. Under each bot answer, at most 2 relevant follow-up pills appear.

4. **Launcher & The Lone Orange Dot**:
   - Floating launcher is a 56px circle in solid lime with a dark chat icon, anchored at `bottom-24 sm:bottom-6 right-5 sm:right-6` so it never collides with mobile pills.
   - Orange (`#FF5B1F`) now appears on the **entire site in exactly ONE place only**: an 8px dot on the launcher until the chat is opened for the first time. All other orange dots across the site were removed.
   - When the panel is open, the floating launcher is completely hidden (no duplicate close controls).

5. **Accessibility & Interactions**:
   - `role="dialog"` with `aria-label="Chat with NXRTH Assistant"`, message log has `role="log"` with `aria-live="polite"`.
   - Focus management: opening focuses the input, closing returns focus to the launcher. Esc key closes.
   - Conversations persist in `sessionStorage`; "New chat" button clears with no prompt.
   - Full `prefers-reduced-motion` compliance.

Verified with `pnpm build`: 0 errors. No git commit or push performed.

