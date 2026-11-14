# Devlog: 2026-11-14 — Turning NXRTH into a Sunlit Luxury Timber Atelier ☕🪵✨

Hey friend, grab your favorite brew because today was a huge aesthetic milestone! 

You know how NXRTH started with that razor-sharp, pitch-black cyberpunk-ish neon-lime look? It looked cool and futuristic, sure, but our entire USP is building websites for *furniture showrooms, teak craftsmen, and bespoke ateliers*. When a showroom owner selling ₹80,000 solid Burma teak dining sets lands on an electric lime hacker terminal, there's a bit of cognitive dissonance. Today, we aligned the entire soul of the site with our actual craft: **warm architectural white, rich walnut timbers, cozy gallery lighting, and silky frosted glass.**

Let me walk you through how we pulled it off and what's humming under the hood.

---

### The Palette Surgery: Goodbye Neon `#C8FF00`, Hello Oiled Teak & Travertine

First thing on the operating table was `src/app/globals.css` and `tailwind.config` / `@theme inline`:
- **The Canvas (`#FAF7F2`):** Rather than blinding hospital white (`#FFFFFF`) or pure zero-dark-thirty black, we introduced a warm, tactile limestone linen tone (`#FAF7F2`). It feels like high-end exhibition paper or honed Italian travertine.
- **The Timber Spine (`#8C532B` & `#2B1E16`):** We crafted two primary wood voices. For badges, active tabs, and delicate border accents, we used `#8C532B` (warm cognac teak). For primary CTAs, headlines, and structural anchors, we used `#2B1E16`—a deep, solid espresso walnut that gives the exact contrast punch black used to give, but with organic warmth.
- **The Specular Highlights (`#C68B59` & `#DFAB6A`):** Honey oak and polished brass accents for metrics and subtle glowing rings.

### The Logo Contrast Magic Trick 🎩
Here was our funny little hiccup: our brand logo files in `/public/brand/nxrth-logo.png` were baked with transparent backgrounds and `#F4F4EF` (off-white) lettering. When we flipped the entire site background to white travertine, the logo completely vanished into thin air!
Rather than messing with bitmap editors or generating raster duplicates, we tapped into CSS filter chaining:
```css
filter: invert(1) brightness(0.18) sepia(0.25);
```
Boom! The white glyphs instantly inverted and tinted into an exquisite deep espresso walnut that looks like it was laser-etched straight into hardwood. Crisp at every viewport and retina density with zero extra network requests!

### From Neon Lasers to Morning Skylights ☀️
Remember the `LightRays` component running WebGL2 fragment shaders in the hero? In the old build, it shot electric lime rave beams across the screen. We tuned the WebGL uniforms:
- `raysColor` shifted to `#D4A373` (warm golden sunlight).
- `haze` and `glow` dialed to `0.35` and `0.6` respectively.
Now when you land on the page, it feels like soft morning sun streaming through high atelier glass windows, casting gentle volumetric dust-mote beams across a handcrafted teak collection.

### Glassy & Wooden Architectural Vitrines
Every component got a tactile tactile upgrade:
- **`PillNav`:** Now a floating frosted glass pill (`bg-white/85 backdrop-blur-xl border border-[rgba(140,83,43,0.18)]`) with warm timber hover states.
- **`Button`:** The primary button is sculpted from rich espresso walnut (`#2B1E16`) with spring-physics magnetic cursor tracking; the secondary button is translucent frosted glass with timber borders.
- **`Hero` & `ProjectsSection`:** We turned the browser mockup into a luxury furniture console with warm blonde oak window headers (`#F4EFEB`), brass dot rivets, Burma teak dining set previews, and linen swatch tags.
- **`ChatbotWidget`:** The concierge got a luxury bespoke makeover. Rich walnut header (`#2B1E16`), warm amber status pulse, cream travertine message container (`#FAF7F2`), and white frosted chat bubbles with delicate timber outlines.
- **`RidgelineDitherFooter`:** We switched the Bayer 8x8 dither terrain preset from noir-lime over to `"sepia"` with a custom 7-tone wood grain gradient flowing into the travertine paper.

### Build Verification & Static Export
Ran `pnpm run build` with Turbopack:
```
✓ Compiled successfully in 2.3s
Finished TypeScript in 5.3s
Generating static pages using 7 workers (13/13) in 1120ms
```
Zero lint warnings, zero type mismatches, and sub-second static page generation. The site feels warm, inviting, editorial, and unmistakably tailored for the luxury furniture industry.

Time to sit back, admire the grain, and pour another cup! ☕🪑🪵
