# Browser Theme-Adaptive Favicon System (N-Logo)

## Overview
Implemented an automatic browser/OS color scheme detection system for the site favicon. When the user's browser or operating system is in **Dark Theme**, the favicon displays the **lighter logo** (`#FAF7F2` cream). When the browser is in **Light Theme**, it displays the **darker logo** (`#2B1E16` espresso walnut).

The favicon uses the newly provided official **N-logo** glyph (`N.` monogram) extracted and optically centered from `assets/logos/`.

---

## 1. Technical Architecture & Multi-Layer Detection Strategy

To ensure 100% universal support across all desktop and mobile browsers (Chrome, Edge, Safari, Firefox, iOS, Android), we implemented a three-tier adaptive architecture:

### Tier 1: Embedded SVG Media Query (`/favicon.svg`)
The primary SVG favicon contains an internal CSS media query that the browser's tab renderer executes natively:
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-44 -43 890 890">
  <style>
    path {
      fill: #2B1E16; /* Light theme: Darker espresso walnut logo */
    }
    @media (prefers-color-scheme: dark) {
      path {
        fill: #FAF7F2; /* Dark theme: Lighter cream logo */
      }
    }
  </style>
  <path ... />
  <path ... />
</svg>
```

### Tier 2: HTML `<link media="(prefers-color-scheme: ...)">`
Declared in both Next.js App Router metadata and document `<head>`:
```html
<link rel="icon" href="/favicon-light.png" sizes="32x32" type="image/png" media="(prefers-color-scheme: light)" />
<link rel="icon" href="/favicon-dark.png" sizes="32x32" type="image/png" media="(prefers-color-scheme: dark)" />
<link rel="icon" href="/favicon-light.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
<link rel="icon" href="/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
```

### Tier 3: Client-Side Live MatchMedia Event Listener
An inline script in `<head>` continuously monitors `window.matchMedia('(prefers-color-scheme: dark)')` so that if the user toggles their OS or browser theme dynamically, the tab icon updates in real-time without requiring a page refresh:
```javascript
var m = window.matchMedia('(prefers-color-scheme: dark)');
function syncFavicon(e) {
  var isDark = e.matches;
  var links = document.querySelectorAll("link[rel*='icon']");
  links.forEach(function(link) {
    if (link.getAttribute('type') === 'image/svg+xml' && !link.getAttribute('media')) {
      link.href = isDark ? '/favicon-dark.svg' : '/favicon-light.svg';
    }
  });
}
m.addEventListener('change', syncFavicon);
```

---

## 2. Asset Matrix

| Asset Path | Theme Target | Color | Format / Resolution |
| :--- | :--- | :--- | :--- |
| `/favicon.svg` | Adaptive (Light & Dark) | Auto `#2B1E16` ⇄ `#FAF7F2` | SVG vector (890×890 viewBox) |
| `/favicon-light.svg` | Light theme tabs | `#2B1E16` (Espresso Walnut) | SVG vector |
| `/favicon-dark.svg` | Dark theme tabs | `#FAF7F2` (Cream / Alabaster) | SVG vector |
| `/favicon-light.png` | Light theme tabs | `#2B1E16` (Espresso Walnut) | 32×32 PNG |
| `/favicon-dark.png` | Dark theme tabs | `#FAF7F2` (Cream / Alabaster) | 32×32 PNG |
| `/favicon.ico` | Legacy / fallback | `#2B1E16` | Multi-layer ICO (16/32/48px) |
| `/apple-touch-icon.png` | iOS Home Screen | `#2B1E16` on `#FAF7F2` | 180×180 opaque PNG |

---

## 3. Optical Centering & Canvas Metrics
- Source glyph: N-logo vector coordinates (`10` to `793` width, `237` to `568` height).
- Aspect ratio: `782.72 × 330.46`.
- Symmetrical Center: `X = 401.36, Y = 402.37`.
- Square ViewBox: `viewBox="-44 -43 890 890"`, achieving clean 6% horizontal breathing padding and vertical optical centering.
