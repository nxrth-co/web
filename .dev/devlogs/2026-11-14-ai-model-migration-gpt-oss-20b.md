# Devlog: 2026-11-14 — Swapping Brains: Welcome `openai/gpt-oss-20b` 🤖⚡☕

Hey again! Back at the workbench with another fresh brew.

Right after getting our wooden luxury showroom aesthetic looking like a Michelin-starred furniture catalog, we turned our attention straight to the engine room: our 24/7 AI concierge.

Previously, both our Next.js App Router API route (`/api/chat`) and our Cloudflare Pages Edge worker (`functions/api/chat.ts`) had Meta's `llama-3.3-70b-versatile` hardcoded as the default model string for Groq's high-speed inference endpoint. Llama did great work, but today we swapped the brain over to **`openai/gpt-oss-20b`**!

---

### What Changed Under the Hood

1. **Dual Route Synchronization:**
   - In `src/app/api/chat/route.ts`:
     ```ts
     model: process.env.GROQ_CHAT_MODEL || "openai/gpt-oss-20b",
     ```
   - In `functions/api/chat.ts` (Cloudflare Pages edge worker):
     ```ts
     model: context.env.GROQ_CHAT_MODEL || "openai/gpt-oss-20b",
     ```
   We also made it configurable via `GROQ_CHAT_MODEL` so anyone deploying on Cloudflare Pages or Vercel can seamlessly point to whatever model they want without touching TypeScript files.

2. **Environment Template (`.env.example`):**
   Added `GROQ_CHAT_MODEL=openai/gpt-oss-20b` directly under the `# AI Inference (Groq Cloud)` block so production setups stay crystal clear.

3. **Inference Specs:**
   Kept our battle-tested settings: `temperature: 0.3` for razor-sharp factual precision about dimensions and Burma teak polishes, `max_tokens: 220` for punchy 2-to-3 sentence responses that look great in our frosted chat bubbles, and the automatic emoji stripper so answers stay clean and dignified.

### Verification Run
Ran the Turbopack build engine:
```
✓ Compiled successfully in 962ms
Finished TypeScript in 2.9s
✓ Generating static pages using 7 workers (13/13) in 824ms
```
Zero errors, clean types, and instant sub-second page generation. Our showroom concierge is locked, loaded, and running on `openai/gpt-oss-20b`! 🚀🪵
