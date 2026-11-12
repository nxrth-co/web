# Devlog: Google Analytics & GTM Tracking Integration + React Compiler Lint Polish

*Date: November 12, 2026*  
*Vibe: Energized, sharp, coffee brewed ☕*

---

### What We Cooked Up Today

1. **Google Analytics & GTM Integration**
   We hooked up the official Google Tag Manager container (`GTM-MQ3MPX5J`) along with the `dataLayer` and `gtag('js', new Date())` configuration straight into `src/app/layout.tsx`.
   - Used Next.js's native `next/script` with `strategy="afterInteractive"`.
   - This keeps the page fast on mobile and desktop without blocking initial hydration or the WebGL2 light rays, while ensuring pageviews and visitor events track reliably.
   - Built with `pnpm build` and confirmed that the GTM script tags, preloads, and initialization scripts are compiled cleanly into `out/index.html`.

2. **React 19 & ESLint Clean Sweep**
   While at it, we systematically eliminated all lingering ESLint and React Compiler warnings:
   - Polished `src/components/ui/chatbot-widget.tsx` with `useSyncExternalStore` for media queries and storage listeners, eliminating any synchronous cascading render calls in effects.
   - Fixed ref assignment during render in `src/components/ui/light-rays.tsx` and `src/components/ui/ridgeline-dither-footer.tsx`.
   - Cleaned unused imports across sections (`ArrowUpRight`, `motion`, and unused error variables).
   - `pnpm lint` and `pnpm build` now execute with a pristine **0 errors, 0 warnings**.

3. **Status Check on Git**
   Per your directive, nothing has been committed or pushed to git. All edits are safe and ready for your manual commit and push whenever you're ready!

