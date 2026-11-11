# Ridgeline Dither Footer Component Integration

## Overview
The `RidgelineDitherFooter` component provides an ordered-dither 2D canvas mountain landscape with interactive valley mist, parallax depth, altimeter crest readout, and click gusts, seamlessly integrated with NXRTH's dark editorial brand identity.

## Architecture & Technical Specifications

- **Location**: `src/components/ui/ridgeline-dither-footer.tsx`
- **Host Component**: `src/components/ui/footer.tsx`
- **Rendering Model**:
  - Pure HTML5 Canvas 2D with `ImageData` and packed 32-bit pixel array buffer (`Uint32Array`).
  - Standard 8×8 Bayer dither matrix for pixel thresholding (`RDF_BAYER`).
  - Procedural ridgeline generation utilizing value noise and fractal Brownian motion (fBm).
  - Dual operational mode:
    1. **Standalone Footer**: Default multi-column layout with links, badges, socials, and copyright.
    2. **Background Canvas Mode (`asBackground`)**: Full-bleed absolute background canvas behind existing footer elements, maintaining interactive pointer listeners, altimeter crest elevation tracking, and click gust waves.
- **Theme Tokens (`preset: "nxrth"`)**:
  - `paper`: `#070809` (NXRTH Midnight Black)
  - `ink`: `#F4F4EF` (NXRTH Off-White)
  - `muted`: `#8B8D90` (NXRTH Neutral Muted)
  - `line`: `rgba(255, 255, 255, 0.08)`
  - `heart`: `#C8FF00` (Electric Lime Accent)
  - `tones`: `["#070809", "#0b120d", "#112015", "#183321", "#234e30", "#317244", "#C8FF00"]`
- **Interactive Behaviors**:
  - **Parallax**: Ridges shift horizontally based on cursor position relative to footer width.
  - **Lantern Mist Clearing**: Drifting valley mist parts around the mouse cursor with an exponential falloff.
  - **Altimeter**: Displays live crest elevation in meters above sea level (`rdfElevation`) over the active ridge.
  - **Click Gust**: Clicking on open canvas areas accelerates mist drift left or right based on click offset.
- **SSR & Next.js 16 Compatibility**:
  - Static prerender protection: Dynamic date reading is deferred to client hydration to comply with Partial Prerendering (PPR).

## Usage Example

```tsx
import RidgelineDitherFooter from "@/components/ui/ridgeline-dither-footer";

export function CustomFooter() {
  return (
    <RidgelineDitherFooter
      asBackground
      preset="nxrth"
      seed={19}
      ridges={6}
      pixel={2}
      mist={0.7}
      drift={0.9}
      interactive={true}
      altimeter={true}
    >
      <div className="relative z-10 p-8">
        <h2>Your Footer Content</h2>
      </div>
    </RidgelineDitherFooter>
  );
}
```

