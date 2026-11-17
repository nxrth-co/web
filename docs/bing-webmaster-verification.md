# Bing Webmaster Tools Verification

## Overview
Bing Webmaster Tools verification enables indexing control, crawl diagnostic insights, sitemap submission, and search performance analytics across Microsoft Bing, Yahoo, and AI search interfaces like Microsoft Copilot.

## Architecture & Implementation
Next.js App Router exposes a type-safe `verification` configuration field inside the root `Metadata` object.

In `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... existing OpenGraph, Twitter, and Icon metadata
  verification: {
    other: {
      "msvalidate.01": "84CDBD8EF8A2EA109CEDB85C5BBE13F1",
    },
  },
};
```

### Generated Output
During Next.js server-side rendering and static compilation (`next build`), Turbopack outputs the exact HTML tag in the `<head>` of all prerendered pages:

```html
<meta name="msvalidate.01" content="84CDBD8EF8A2EA109CEDB85C5BBE13F1" />
```

## Verification Procedure
1. Log into [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Enter `https://nxrth.co` as the site URL (or select it from your property list).
3. Select **HTML Meta Tag** as the verification method.
4. Click **Verify**. Bing's crawler immediately checks the static `<head>` output of `https://nxrth.co` and marks the site as verified.
