# Devlog: 2026-11-14 — The Chameleon Favicon: Auto-Detecting Browser Dark & Light Themes 🦎☕✨

Hey friend! Grab a hot cup because this feature is pure developer satisfaction.

The user dropped in a fresh set of brand SVG assets inside `assets/logos/`, featuring the official **`N.`** monogram mark and wordmarks in three distinct flavor coats: `cream`, `brown`, and `black`. Then came the classic designer question:

> *"Is it possible that we detect the theme of the browser, and show our favicon according to that? If the browser has a dark theme then we'll display our lighter logo, and if it has a lighter theme then we'll display the darker logo? Use the n-logo in the favicon."*

Short answer: **Not only is it possible, it's one of the cleanest frontend tricks in the book!** Here's how we pulled it off with triple-redundant browser support.

---

### 1. The Geometry: Fitting an Asymmetrical Monogram into a 1:1 Favicon

When we parsed `assets/logos/n-logo-brown.svg`, we found the raw path bounding box:
- Width: `782.72` px
- Height: `330.46` px
- Center point: `X = 401.36`, `Y = 402.37` (practically a bullseye!)

Because favicons in browser tabs live in 1:1 square real estate, an uncalibrated viewBox would either crop the edges or smash the aspect ratio. By calculating a balanced square bounding box (`viewBox="-44 -43 890 890"`), we achieved an 88% width fill with 6% breathing padding on the flanks and optical vertical centering. At 16px and 32px in your browser tab, the sharp diagonal cut of the "N" and the distinctive punctuation dot on the right pop with laser clarity.

---

### 2. The Chameleon Trick: How the Detection Works

Browsers handle theme detection across three different layers, and we supported all three simultaneously:

1. **Embedded SVG Media Queries (`/favicon.svg`):**
   Inside the root SVG itself, we embedded:
   ```css
   path { fill: #2B1E16; } /* Default / Light Theme: Deep espresso walnut */
   @media (prefers-color-scheme: dark) {
     path { fill: #FAF7F2; } /* Dark Theme: Cream alabaster */
   }
   ```
   Modern Chromium, Firefox, and Safari renderers execute SVG CSS media queries natively right in the tab bar.

2. **Next.js & HTML Media Query Links:**
   In `src/app/layout.tsx` metadata and `<head>`, we declared dedicated light and dark PNG and SVG links with `media="(prefers-color-scheme: light)"` and `media="(prefers-color-scheme: dark)"`.

3. **Real-Time `matchMedia` Event Listener:**
   What if a user flips their laptop from Light Mode to Dark Mode at 7:00 PM while keeping the tab open? We added a microscopic zero-dependency listener in `<head>`:
   ```javascript
   var m = window.matchMedia('(prefers-color-scheme: dark)');
   m.addEventListener('change', function(e) {
     // Instantly swaps active SVG link between light and dark variants on the fly!
   });
   ```

---

### 3. Verification & Build Cleanliness

We generated rasterized PNGs and ICO files via headless Chrome and PIL, confirmed every binary size, removed our `temp-tests` sandbox, and fired up Turbopack:
```
✓ Compiled successfully in 987ms
Finished TypeScript in 3.4s
✓ Generating static pages using 7 workers (13/13) in 1296ms
```
Now, whether someone is surfing in midnight dark mode on macOS or bright daylight mode in Windows 11, the NXRTH monogram in their tab adapts automatically with high-contrast luxury elegance. ☕🪵
