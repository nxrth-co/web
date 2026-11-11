# GitHub Repository Deployment & Remote Synchronization

## Overview
The NXRTH production codebase has been synchronized with the official GitHub organization repository.

- **Repository**: [https://github.com/nxrth-co/web](https://github.com/nxrth-co/web)
- **Primary Remote**: `origin` (`https://github.com/nxrth-co/web.git`)
- **Pushed Branches**: `master` & `main`
- **Latest Commit**: `ea79012` (*feat: complete nxrth sales page, conversational ai launch flow, dither footer, and production deployment readiness*)

## Deployment Pipelines
The repository is structured for zero-configuration continuous deployment on Vercel, Netlify, or Railway:
1. Connect GitHub repository `nxrth-co/web`.
2. Framework preset: **Next.js**.
3. Environment variables required in production:
   - `NEXT_PUBLIC_SITE_URL`: `https://nxrth.co`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: `919327051284`
   - `GROQ_API_KEY`: Groq API key for the live AI Concierge.
   - Optional: `LEAD_WEBHOOK_URL`, `RESEND_API_KEY`, `ADMIN_NOTIFICATION_EMAIL`.
