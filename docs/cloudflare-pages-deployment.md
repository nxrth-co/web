# Cloudflare Pages Deployment Guide for NXRTH

This document details the configuration, architecture, and step-by-step instructions to deploy the **NXRTH** website to **Cloudflare Pages** directly from the connected GitHub repository ([github.com/nxrth-co/web](https://github.com/nxrth-co/web.git)).

---

## 1. Architecture & Cloudflare Optimization

The NXRTH web application is powered by Next.js 16 with Turbopack and React 19. It has been specifically hardened for Cloudflare Pages edge deployment:

1. **Native Pages Functions (`/functions/api/`)**:
   - `/functions/api/chat.ts`: Serverless Edge function handling Groq AI Chat completions with CORS preflight, streaming, error-handling, and fallback responses.
   - `/functions/api/lead.ts`: Edge function handling lead intake, honeypot spam protection, validation, and optional webhook dispatch.
   - These functions run on Cloudflare's global edge network with 0ms cold starts without requiring heavy runtime adapters.

2. **Edge-Safe Dynamic Routes**:
   - `/src/app/llms.txt/route.ts` and `/src/app/llms-full.txt/route.ts` are pure in-memory string generators, removing any Node.js `fs` or server disk dependencies for edge runtime compatibility.
   - Removed conflicting `runtime = 'edge'` declarations inside App Router components to satisfy Next.js 16 cache component constraints while keeping edge speed.

3. **Node.js Environment & Compatibility**:
   - `.nvmrc` locks the build environment to Node `20.18.0`.
   - `wrangler.toml` defines `nodejs_compat` compatibility flag and project settings.
   - `package.json` specifies `"engines": { "node": ">=20.9.0" }`.

---

## 2. Step-by-Step Cloudflare Pages Deployment

Follow these exact steps in the Cloudflare Dashboard to deploy the site:

### Step 1: Log in to Cloudflare Dashboard
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com/).
2. In the left navigation sidebar, click on **Workers & Pages**.
3. Click the **Create application** button, then select the **Pages** tab.
4. Click **Connect to Git**.

### Step 2: Select Repository
1. Select your GitHub account (`nxrth-co` or personal account with access).
2. Choose repository: `web` (or `nxrth-co/web`).
3. Click **Begin setup**.

### Step 3: Configure Build & Deployment Settings
Fill out the setup form with the following settings:
- **Project name**: `nxrth-web` (or your preferred name)
- **Production branch**: `master` (or `main`)
- **Framework preset**: `Next.js` (or `None`)
- **Build command**: `pnpm build` (or `npx @cloudflare/next-on-pages` if using the Pages adapter, or standard `pnpm run build`)
- **Build output directory**: `.next` (or `.vercel/output/static` if using Cloudflare adapter)
- **Root directory**: `/` (leave empty or slash)

### Step 4: Add Environment Variables
Under the **Environment variables (advanced)** section in the setup screen, add the following variables:

| Variable Name | Value / Description | Encrypted |
|---|---|---|
| `GROQ_API_KEY` | Your Groq API key (`gsk_...`) | Yes (Encrypt) |
| `NODE_VERSION` | `20.18.0` | No |
| `NEXT_PUBLIC_SITE_URL` | `https://nxrth.co` (or your Cloudflare `.pages.dev` URL) | No |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `919327051284` | No |
| `LEAD_WEBHOOK_URL` | *(Optional)* Discord, Slack, or webhook URL for lead alerts | Yes |

### Step 5: Save and Deploy
1. Click **Save and Deploy**.
2. Cloudflare Pages will clone the GitHub repository, install dependencies via `pnpm`, and compile the application.
3. Once completed, Cloudflare provides a preview URL (e.g. `https://nxrth-web.pages.dev`).

### Step 6: Custom Domain Setup (Optional)
1. In your Cloudflare Pages project, go to the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter `nxrth.co` (and `www.nxrth.co`).
4. Follow the automatic DNS routing instructions if your domain is managed by Cloudflare DNS, or add the CNAME record in your domain registrar.

---

## 3. Maintenance & Continuous Deployment

Any commit pushed to `master` (or `main`) in `https://github.com/nxrth-co/web.git` will automatically trigger an incremental build and zero-downtime deployment on Cloudflare Pages.

