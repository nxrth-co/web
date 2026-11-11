# NXRTH — Websites & AI for Furniture Showrooms

NXRTH is a dark, minimal, futuristic single-page sales machine built for furniture showrooms, workshops, and manufacturers.

## Tech Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS with design tokens (`--bg`, `--surface`, `--accent`, `--surprise`)
- **Animation:** Framer Motion + Lenis Smooth Scroll
- **Typography:** Instrument Serif (Headlines), Plus Jakarta Sans (Body), JetBrains Mono (Labels)
- **Validation:** Zod client & server validation
- **Lead API:** `POST /api/lead` with rate limiting, honeypot protection & WhatsApp / Resend / Webhook notification hooks.

---

## Getting Started

### 1. Installation
Install project dependencies using `pnpm`:
```bash
pnpm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and add your keys:
```bash
cp .env.example .env.local
```
Key configuration items:
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Your business WhatsApp number without `+` (e.g. `919876543210`).
- `LEAD_WEBHOOK_URL`: Optional Zapier / Slack / Make webhook endpoint.
- `RESEND_API_KEY` & `ADMIN_NOTIFICATION_EMAIL`: Optional email notification keys.
- `WHATSAPP_CLOUD_API_TOKEN`: Optional Meta WhatsApp Cloud API credentials.

### 3. Local Development
Run the development server on `http://localhost:3000`:
```bash
pnpm dev
```

### 4. Production Build
Verify TypeScript and build the static and server assets:
```bash
pnpm build
pnpm start
```

---

## Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Under **Project Settings > Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `91...`
4. Click **Deploy**. Vercel will automatically compile the Next.js App Router application with Turbopack.

---

## Documentation
- [System Architecture & Feature Breakdown](docs/nxrth-sales-page-architecture.md)
- [Feature Log](READMEs/FEATURES.md)
- [Creative Devlog](.dev/devlogs/2026-11-11-nxrth-initial-build.md)

