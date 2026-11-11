# LightRays Component Integration

## 1. Overview
The `<LightRays />` WebGL2 component from React Bits has been integrated into the NXRTH Hero section (`src/components/sections/hero.tsx`). It creates an interactive, volumetric lighting effect in electric lime (`#C8FF00`) that streams down behind the display serif headline with mouse tracking, cursor shadow casting, and click pulses.

## 2. Component Implementation
- **Source Files:**
  - Component: `src/components/ui/light-rays.tsx`
  - Styles: `src/components/ui/light-rays.css`
- **Technology:** Pure WebGL2 vertex and fragment shaders (`#version 300 es`) rendered on a hardware-accelerated canvas.
- **Key Parameters in NXRTH Hero:**
  - `raysOrigin="top-center"`: Beams emanate from the top center downward across the hero viewport.
  - `raysColor="#C8FF00"`: Tuned to NXRTH's primary electric lime token.
  - `raysSpeed={0.8}`: Calm, fluid ray animation.
  - `lightSpread={0.6}` & `rayLength={3}`: Generous beam width spanning the viewport width.
  - `glow={0.55}` & `haze={0.28}`: Volumetric dust and atmospheric scattering.
  - `followMouse={true}` & `mouseInfluence={0.12}`: Subtle angular deflection toward user pointer.
  - `cursorShadow={true}` & `clickPulse={true}`: Interactive shadow occlusion and pulse waves.
  - `opacity={0.7}`: Calibrated to preserve readability on high-contrast text.
  - Respects `prefers-reduced-motion` automatically.

