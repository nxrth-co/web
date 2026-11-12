# Google Analytics & GTM Integration

## Overview
Integrated Google Tag Manager (GTM) and Google Analytics (`GTM-MQ3MPX5J`) into the application using Next.js `next/script` with `strategy="afterInteractive"`.

## Architecture & Implementation
- **File Modified:** `src/app/layout.tsx`
- **Script Strategy:** `afterInteractive` ensures scripts load immediately after the page becomes interactive without delaying First Contentful Paint (FCP) or Core Web Vitals.
- **Components Loaded:**
  1. GTM Script: `https://www.googletagmanager.com/gtm.js?id=GTM-MQ3MPX5J`
  2. DataLayer & gtag Initialization:
     ```js
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     ```
- **Static Export Compatibility:** Fully verified with `next build` and static `out/` export for Cloudflare Pages.

