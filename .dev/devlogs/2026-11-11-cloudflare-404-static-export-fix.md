# Devlog: The 404 Solved — Next.js Static Export for Cloudflare Pages
**Date:** 2026-11-11  
**Author:** Antigravity Engineering  
**Mood:** 💡 Epiphany! Static HTML Export + Edge Functions = Perfection.

---

### Why Did Cloudflare Return 404? 🕵️‍♂️
Cloudflare Pages is a static asset host at its core with edge Workers attached.
When Next.js runs without `output: "export"`, its production output in `.next` is an internal Node.js server bundle (`.next/server/app/index.html` and `.next/server/pages`). It does **not** create a root `index.html` at the top level of `.next`.
Cloudflare Pages looked inside `.next` for an `index.html` file, didn't find one, and immediately served its standard:
`404: No webpage is found HTTP ERROR 404`.

### The Architecture & Fix:
1. **Configured `output: "export"` in `next.config.ts`**:
   - Next.js now produces a pristine `/out` folder containing pure HTML, JS, CSS, `index.html`, `404.html`, `sitemap.xml`, and `robots.txt`.
2. **Added `export const dynamic = "force-static"`**:
   - Configured on `sitemap.ts`, `robots.ts`, `llms.txt`, `llms-full.txt`, and `opengraph-image.tsx` so Next.js pre-renders all assets into static files at build time.
3. **Pointed `wrangler.toml` to `out`**:
   - `pages_build_output_dir = "out"`.
4. **Kept Dynamic APIs Serverless via Cloudflare Functions**:
   - Dynamic serverless endpoints (`/api/chat` and `/api/lead`) are handled natively by Cloudflare Pages Functions located in `/functions/api/`, executing directly on the edge.

### Result:
- Lightning-fast static delivery of HTML/CSS/JS assets globally cached on Cloudflare CDN.
- Real `/index.html` served with zero 404 errors.
- Fully working edge APIs for AI chat and lead processing! 🚀

