# NXRTH Decluttering, Favicon & Contact Updates

## 1. Overview
This update refines the NXRTH sales page by decluttering verbose descriptive copy, removing the templates section, integrating an interactive strip button to trigger the bottom-right AI Chatbot widget, upgrading all official communications channels (phone + 4 department emails), and generating retina-crisp site favicons and app icons.

## 2. Updated Contact & Corporate Information
- **Phone & WhatsApp Number:** `+91 9327051284` (WhatsApp API links configured as `https://wa.me/919327051284`).
- **Primary Domain:** `https://nxrth.co`
- **Department Emails:**
  - Contact / General Inquiries: `hey@nxrth.co`
  - Customer Support: `answers@nxrth.co`
  - Billing & Invoicing: `billing@nxrth.co`
  - Legal & Compliance: `legal@nxrth.co`

## 3. Structural & Content Streamlining
- **Removed Templates Section:** `<TemplatesPreview />` removed from the root page, navigation bar, and footer index to keep user focus on the core offer and pricing.
- **Dedicated AI Chatbot Trigger Strip:** Replaced the static on-page chat showcase with `<ChatbotCtaStrip />`, which features an electric lime CTA button that programmatically expands the bottom-right Groq-powered AI Concierge widget (`openChatbotWidget()`).
- **Copy Decluttering:**
  - Hero subline and bottom peeking cards trimmed to eliminate redundant explanations.
  - Problem & Promise reduced to 2 high-impact sentences and 3 one-line outcome pills.
  - Services simplified to four clear, single-sentence descriptions.
  - Pricing & process steps sharpened with no filler text.
  - FAQ answers shortened to 2 sentences per question.

## 4. Favicon & Brand Asset Upgrade
- Generated multi-size `favicon.ico` (16x16, 32x32, 48x48) and `icon.png` (32x32) featuring the electric lime geometric NXRTH mark centered on midnight black.
- Generated `apple-touch-icon.png` (180x180) for Apple mobile devices.
- Linked across Next.js App Router metadata standards.

