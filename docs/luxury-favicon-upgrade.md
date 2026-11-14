# Luxury Timber & Travertine Favicon Upgrade

## Overview
As part of NXRTH's identity transition into a luxury furniture digital atelier, all browser favicons, Apple touch icons, and web app marks were redesigned and re-rendered. The previous neon electric lime on midnight black icons were replaced with a refined architectural aesthetic matching our travertine white and rich walnut palette.

---

## 1. Design Specification
- **Form Factor:** Precision squircle with continuous curvature radius (`0.22 * size`).
- **Canvas / Background:** Warm architectural travertine linen (`#FAF7F2` / `rgb(250, 247, 242)`).
- **Border Trim:** Cognac teak hairline border (`#8C532B` / `rgba(140, 83, 43, 0.85)`).
- **Geometric Glyphs:** The NXRTH compass/chevron insignia rendered in deep solid espresso walnut (`#2B1E16` / `rgb(43, 30, 22)`), optically centered at 72% width ratio for high legibility across small browser tabs.

---

## 2. Asset Matrix & Formats

| Asset Path | Resolution | Format | Purpose |
| :--- | :--- | :--- | :--- |
| `src/app/favicon.ico` | 16x16, 32x32, 48x48 | Multi-layer ICO (32-bit RGBA) | Standard desktop browser tab icon (Next.js App Router root) |
| `public/favicon.ico` | 16x16, 32x32, 48x48 | Multi-layer ICO (32-bit RGBA) | Public root fallback for legacy browsers & web crawlers |
| `src/app/icon.png` | 32x32 | PNG (32-bit RGBA) | Next.js App Router `<link rel="icon">` standard |
| `public/icon.png` | 32x32 | PNG (32-bit RGBA) | Static public root icon |
| `src/app/apple-icon.png` | 180x180 | PNG (Opaque background) | Apple iOS Home Screen icon (App Router) |
| `public/apple-touch-icon.png` | 180x180 | PNG (Opaque background) | Static Apple touch link |
| `public/brand/apple-icon.png` | 180x180 | PNG (Opaque background) | Brand repository icon copy |
| `public/brand/icon-512.png` | 512x512 | PNG (32-bit RGBA) | High-definition PWA / manifest / retina showcase |

---

## 3. Browser Compatibility & Visual Legibility
- **Light Theme Browser Tabs:** The cognac teak border and deep walnut mark create distinct contrast against light grey and white browser tab bars.
- **Dark Theme Browser Tabs:** The warm travertine white squircle silhouette ensures the icon remains instantly recognizable and crisp against dark browser frames.
- **Retina Displays:** Rendered with Lanczos anti-aliasing from high-resolution vector matrices.
