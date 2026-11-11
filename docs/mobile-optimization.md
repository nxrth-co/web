# Mobile Responsiveness & Touch Optimization

This document outlines the mobile optimizations engineered across the **NXRTH** platform to ensure a fluid, app-native browsing and inquiry experience on mobile smartphones and small tablets (320px–480px+).

---

## 1. Viewport & Browser Shell Hardening
- **Dynamic Viewport Configuration (`src/app/layout.tsx`)**:
  - `viewport`: `width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover`.
  - Added `theme-color: #070809` matching the dark surface background to prevent jarring white browser address bars on iOS Safari and Android Chrome.
  - Added `overflow-x-hidden` on `<body>` to eliminate horizontal page sway caused by wide decorative elements or shadows.

---

## 2. Component-by-Component Mobile Refinements

### AI Chatbot Concierge Widget (`src/components/ui/chatbot-widget.tsx`)
- **Adaptive Dynamic Height**:
  - Replaced hardcoded heights with dynamic CSS: `h-[min(560px,calc(100dvh-120px))]`.
  - Prevents the chat window from overflowing small mobile screens or colliding with the browser navigation bar.
- **Mobile Keyboard Auto-Zoom Prevention**:
  - Configured input font size to `text-base` (16px) on mobile and `sm:text-xs` on desktop. iOS Safari auto-zooms into any input with font size under 16px; this fix guarantees the page stays steady and won't suddenly zoom when typing.
- **Scroll Containment & Touch Fluidity**:
  - Applied `overscroll-behavior: contain` and `-webkit-overflow-scrolling: touch` alongside `data-lenis-prevent` to let mobile users flick-scroll through chat history without inadvertently pulling the background page.

### Navigation (`src/components/ui/pill-nav.tsx`)
- Floating pill header with 44px touch targets.
- Full-screen mobile backdrop overlay menu with accessible close triggers, smooth navigation linking, and instant AI launch routing.
- Contextual sticky mobile pill bottom CTA with clear safe-area spacing.

### Hero Section (`src/components/sections/hero.tsx`)
- Fluid fluid clamp headline: `text-[clamp(2.4rem,8.5vw,6.5rem)]` preventing awkwardly wrapped words on 360px Android devices.
- Decorative absolute crosshairs hidden on mobile (`hidden sm:block`) to prevent cluttering compact screens.
- Mobile button stacking (`flex-col sm:flex-row`) with full-width tap areas (`w-full sm:w-auto`).
- Peek UI cards formatted as stacked 1-column layouts with generous padding and legible typography.

### Services Grid (`src/components/sections/services-grid.tsx`)
- Optimized padding (`py-16 sm:py-24 md:py-32 px-4 sm:px-6`).
- Full-width rows with flex wrapping for tags and outcomes so text won't truncate on narrow viewports.
- Enhanced touch targets with tap feedback (`active:scale-[0.98]`).

### Pricing & Process (`src/components/sections/pricing-section.tsx`)
- 4-step methodology cards stack gracefully in 1 column on mobile, 2 on tablet, and 4 on desktop.
- Plan cards adapt with compact padding (`p-6 sm:p-8 md:p-10`), badges properly positioned without overlapping headings.

### Final CTA & Service Selector (`src/components/sections/final-cta.tsx`)
- Service selector pills feature minimum 48px heights satisfying WCAG 2.2 AA mobile touch guidelines.
- Truncated descriptions with `line-clamp-1 sm:line-clamp-none` to keep options glanceable on 5.5" displays.

### Footer (`src/components/ui/footer.tsx`)
- Added `break-all` on communications emails so long addresses (`answers@nxrth.co`, `billing@nxrth.co`) won't force horizontal scroll.
- Responsive padding and stacked copyright metadata.

