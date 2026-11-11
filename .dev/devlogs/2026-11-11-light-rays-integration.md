# Devlog: Beaming WebGL Light Rays from the Heavens
**Date:** November 11, 2026  
**Author:** Lead Creative Technologist & Systems Architect  
**Mood:** Hypnotic electric lime glow, 60fps WebGL2 bliss.

---

### What just dropped?
We just integrated the **LightRays** component from React Bits into our Hero section, and it looks like pure science fiction.

Remember our initial design directive?
> *"A near-black canvas, one electric lime accent, soft glowing light, elegant type contrast. Think of a dark product-launch site with a glowing beam of light behind a big serif headline."*

Well, static CSS gradients can only take you so far. With `<LightRays />`, we now have true hardware-accelerated WebGL2 volumetric light shafts streaming down from the top center in electric lime (`#C8FF00`).

### Under the Hood: Shader Magic
- Shipped `src/components/ui/light-rays.tsx` and `src/components/ui/light-rays.css`.
- The shader computes smooth ray envelopes, procedural value noise haze, subtle atmospheric coolness, and dynamic pulse waves.
- When the visitor moves their mouse across the desktop, the rays subtly pivot toward the cursor, casting a soft shadow trail behind the pointer.
- Clicking sends a pulse wave down the shafts of light.
- Tuned with `raysSpeed={0.8}`, `lightSpread={0.6}`, `haze={0.28}`, and `opacity={0.7}` so it creates depth without ever compromising the readability of *"Websites that move furniture."*

Compiled cleanly on Next.js 16.4 App Router and verified at 60fps in browser testing. The Hero is now officially unforgettable! ⚡

