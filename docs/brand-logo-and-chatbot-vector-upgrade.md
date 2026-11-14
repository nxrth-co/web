# Brand Logo & AI Chatbot Vector Asset Integration

## Overview
Replaced all legacy raster logos and CSS-filtered image assets across the application with the new official vector SVG marks provided in `assets/logos/`. Specifically, the new `n-logo` (`N.` monogram) has been deployed to the AI Chatbot widget, on-page AI interactive demo, and hero preview bubble, while the full `nxrth-wordmark-brown.svg` has been integrated into the primary navigation bar and site footer.

---

## 1. Updated Component Touchpoints

### 1. AI Chatbot Widget (`ChatbotWidget`)
- **Header Avatar:** Replaced legacy raster mark with `n-logo-cream.svg` (`#FAF7F2` cream on `#2B1E16` espresso walnut header).
- **Floating Launcher Button:** Replaced generic message bubble icon with a prominent `n-logo-cream.svg` badge.
- **Bot Message Replies:** Integrated a miniature `n-logo-brown.svg` avatar alongside the "Concierge" indicator on incoming assistant replies.

### 2. On-Page AI Assistant Section (`AIAssistantSection`)
- **Interactive Box Header:** Replaced plain status dot with `n-logo-brown.svg` preceding the live pulsing indicator.
- **Simulated Chat Replies:** Added `n-logo-brown.svg` badge to the simulated "SHOWROOM BOT" response card.

### 3. Hero Section Vitrine Mockup (`Hero`)
- **Overlapping Chat Bubble:** Added `n-logo-brown.svg` to the floating concierge answer card over the Kyoto dining set vitrine.

### 4. Floating Pill Navigation (`PillNav`)
- **Desktop Brand Link:** Swapped legacy PNG and CSS filter hack for clean, resolution-independent `nxrth-wordmark-brown.svg` in `#2B1E16` (espresso walnut).
- **Mobile Full-Screen Menu:** Configured `nxrth-wordmark-brown.svg` at the top of the mobile drawer.

### 5. Site Footer (`Footer`)
- **Primary Brand Link:** Updated to `nxrth-wordmark-brown.svg`.
- **Giant Mountain Wordmark:** Updated the oversized background wordmark over the sepia dither mountain terrain to `nxrth-wordmark-brown.svg`, rendering crisp vectors across ultra-wide retina viewports.

---

## 2. Asset Manifest (`/public/brand/`)

| File | Type | Fill Color | Primary Placement |
| :--- | :--- | :--- | :--- |
| `n-logo-cream.svg` | Monogram SVG | `#FAF7F2` | Chatbot header, floating launcher |
| `n-logo-brown.svg` | Monogram SVG | `#2B1E16` | On-page AI concierge, hero mockup, bot avatars |
| `n-logo-black.svg` | Monogram SVG | `#000000` | High-contrast documentation & print fallback |
| `nxrth-wordmark-brown.svg` | Full Wordmark SVG | `#2B1E16` | Pill navigation bar, mobile menu, footer |
| `nxrth-wordmark-cream.svg` | Full Wordmark SVG | `#FAF7F2` | Dark container wordmark fallback |
| `nxrth-wordmark-black.svg` | Full Wordmark SVG | `#000000` | Monochrome print fallback |
