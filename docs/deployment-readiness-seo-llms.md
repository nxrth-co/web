# Production Deployment Readiness, SEO & llms.txt Specification

## Overview
NXRTH is now 100% production-ready for deployment to Vercel, Netlify, Railway, or VPS. It features an updated `sitemap.xml`, a crawler-friendly `robots.txt` supporting both search engines and AI agents, standard `/llms.txt` and `/llms-full.txt` endpoints for LLM discoverability, and production security headers.

## Configuration Details

### 1. Dynamic Sitemap (`/sitemap.xml`)
- **Source**: `src/app/sitemap.ts`
- **Output**: Valid XML sitemap adhering to the Sitemaps.org protocol.
- **Indexed Endpoints**:
  - `https://nxrth.co` (Priority 1.0, weekly)
  - `https://nxrth.co#services` (Priority 0.85, monthly)
  - `https://nxrth.co#ai-assistant` (Priority 0.85, monthly)
  - `https://nxrth.co#pricing` (Priority 0.9, monthly)
  - `https://nxrth.co#faq` (Priority 0.7, monthly)
  - `https://nxrth.co/llms.txt` (Priority 0.6, weekly)

### 2. Robots Configuration (`/robots.txt`)
- **Source**: `src/app/robots.ts`
- **Search Engines**: Allowed across all public paths, assets (`/brand/`, `/icon.png`, `/favicon.ico`), and markdown resources.
- **AI Crawlers**: Explicitly whitelist `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Applebot-Extended`, `Google-Extended`, `CCBot`, and `cohere-ai` to access `/` and `/llms.txt`.
- **Security Boundary**: Internal API routes (`/api/`) remain strictly disallowed from indexing.
- **Directives**: Declares `Host: https://nxrth.co` and `Sitemap: https://nxrth.co/sitemap.xml`.

### 3. LLM Discoverability (`/llms.txt` & `/llms-full.txt`)
- **Format**: Structured Markdown following the `llmstxt.org` standard.
- **Locations**:
  - Static file: `public/llms.txt` and `public/llms-full.txt`
  - Next.js Route Handlers: `src/app/llms.txt/route.ts` and `src/app/llms-full.txt/route.ts`
- **Headers**:
  - `Content-Type: text/plain; charset=utf-8`
  - `Cache-Control: public, max-age=86400, stale-while-revalidate=604800`
- **Discovery**: Linked in HTML `<head>` via `<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context" />`.

### 4. Production Security Headers & Optimization
Configured in `next.config.ts`:
- `poweredByHeader: false` (removes `X-Powered-By: Next.js` fingerprint)
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (HSTS)
- `X-Frame-Options: SAMEORIGIN` (Clickjacking prevention)
- `X-Content-Type-Options: nosniff` (MIME sniffing prevention)
- `Referrer-Policy: origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

