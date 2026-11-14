# AI LLM Model Migration: openai/gpt-oss-20b

## Overview
Migrated the default large language model powering the NXRTH 24/7 Showroom Concierge assistant from Meta's Llama (`llama-3.3-70b-versatile`) to `openai/gpt-oss-20b` across both backend inference paths.

---

## 1. Architecture & Execution Paths

The application provides dual-redundant routing for chat completion requests:
1. **Next.js App Router API Route (`/api/chat`):**
   - File: `src/app/api/chat/route.ts`
   - Executes in Node.js / edge runtime environments.
   - Dynamically resolves `process.env.GROQ_CHAT_MODEL` with fallback to `"openai/gpt-oss-20b"`.
2. **Cloudflare Pages Native Edge Worker (`functions/api/chat.ts`):**
   - File: `functions/api/chat.ts`
   - Executes globally on Cloudflare's Edge network with zero cold start.
   - Dynamically resolves `context.env.GROQ_CHAT_MODEL` with fallback to `"openai/gpt-oss-20b"`.

---

## 2. Model Configuration Details
- **Endpoint:** `https://api.groq.com/openai/v1/chat/completions`
- **Model Identifier:** `openai/gpt-oss-20b`
- **Temperature:** `0.3` (deterministic, highly factual answers grounded in showroom catalog specifications).
- **Max Tokens:** `220` (concise responses capped at 2–3 sentences to facilitate fast mobile reading and direct WhatsApp conversion).
- **Fallback Response:** If upstream rate limits or network degradation occur, both routes return an immediate friendly fallback message redirecting the visitor to WhatsApp without crashing the client interface.

---

## 3. Environment Variables
- `GROQ_API_KEY`: Groq Cloud API authentication key.
- `GROQ_CHAT_MODEL`: Optional model override (defaults to `openai/gpt-oss-20b`). Documented in `.env.example`.
