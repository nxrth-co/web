# 🌄 Devlog: Mountains in the Mist — The Ridgeline Dither Footer Landed!

**Date:** November 11, 2026  
**Mood:** ☕ Electric, pixel-perfect, and admiring mountain peaks at 2,558m  
**Author:** Your friendly pair-programmer  

---

### What’s Cookin’?
Grab your espresso, because the bottom of our sales page just got a whole lot more atmospheric. We just took the incredible `RidgelineDitherFooter` and brought it home to NXRTH. 

Instead of a plain old flat footer, our footer is now backed by a live 2D pixel-scaled canvas featuring six ridged mountain ranges printed in ordered 8×8 Bayer dither. As you scroll down to the finish line, the ridges rise out of midnight paper (`#070809`), receding back-to-front into drifting valley mist, with the crests tipped in our signature electric lime (`#C8FF00`)!

### The Cool Under-The-Hood Stuff 🛠️
1. **The NXRTH Preset**: We created a custom palette preset (`preset="nxrth"`) tuned specifically for our dark noir canvas:
   - Paper: `#070809` (seamless background blend)
   - Text & Lines: `#F4F4EF` & `rgba(255, 255, 255, 0.08)`
   - Tones: Graduating smoothly from `#070809` through deep forest noirs (`#0b120d`, `#112015`, `#183321`, `#234e30`, `#317244`) all the way up to electric lime (`#C8FF00`) highlight specks.
2. **Dual-Mode Flexibility (`asBackground`)**:
   - The component works as a standalone multi-column footer, but we supercharged it with an `asBackground` mode so it can act as the atmospheric canvas engine behind our full NXRTH communications grid, direct WhatsApp channel (`+91 93270 51284`), the 4 email addresses (`hey@nxrth.co`, `answers@nxrth.co`, `billing@nxrth.co`, `legal@nxrth.co`), and the giant scaled NXRTH wordmark.
3. **Interactive Delights**:
   - **Pointer Parallax**: Shift your cursor side to side and watch the distant ridges tilt with genuine depth.
   - **Lantern Mist Clearing**: The pointer cuts a clean circle through the fog like a handheld lantern.
   - **Live Altimeter**: Hover near a ridge crest, and a delicate mono badge floats above the summit reporting the elevation in meters (verified live in browser at 2,558 m!).
   - **Click Gust**: Click any open canvas area and a gust of wind sends the mist billowing sideways across the valley.

### Hiccups & Quick Fixes 🐛
- Next.js 16 Partial Prerendering (PPR) yelled at us for `new Date().getFullYear()` being read synchronously in a client component during static page compilation. Fixed in 20 seconds by initializing a stable default and setting it in `useEffect`. The build compiler smiled and optimized all 11 routes with 0 errors!

Now take a look at the footer and enjoy the climb. Cheers! ☕⛰️

