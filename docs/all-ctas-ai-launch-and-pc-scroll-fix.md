# Universal AI Chatbot Launch Routing & PC Wheel Scroll Fix

## Overview
All CTAs across the entire NXRTH website now seamlessly route into the AI Concierge chat to initiate the natural language Launch Flow. The legacy multi-step modal form has been completely removed from the DOM and application bundle. Additionally, PC mouse wheel scrolling within the chatbot history has been fixed by stopping Lenis smooth-scroll interference.

## Key Changes & Architecture

### 1. Form Removal & Global CTA Re-routing
- **Modal Elimination**: Removed `StartModal`, `StartFlowCard`, and `SuccessCard` from the project and excluded them from `layout.tsx`.
- **Universal Event Dispatch**:
  - `openChatbotWidget({ prompt?: string })` triggers an `open-nxrth-chat` window event.
  - CTAs across `Hero`, `PillNav`, `ServicesGrid`, `PricingSection`, `FinalCTA`, and `Footer` now pass contextual launch prompts:
    - *Hero & Nav*: `"🚀 Start website launch"`
    - *Pricing Template Card*: `"I want to launch with the Template Website plan (₹15,000)"`
    - *Pricing Custom Card*: `"I want to request a quote for a Custom Showroom Website"`
    - *Services*: `"I want to get started with <Service Title>"`
    - *Final CTA*: Direct launch per service pill.
- **StartFlowProvider Bridge**: Any legacy calls to `openStartFlow(options)` automatically map and forward to `openChatbotWidget` with the corresponding plan or service prompt, guaranteeing zero broken button clicks.

### 2. PC Mouse Wheel Scrolling Fix
- **Root Cause**: Lenis smooth scroll intercepted global `wheel` events on `window` and called `preventDefault()`, blocking the browser from natively scrolling child `overflow-y: auto` containers on desktop computers with a mouse wheel.
- **Solution**:
  1. Configured Lenis `prevent` predicate in `src/components/ui/smooth-scroll.tsx` to detect `[data-lenis-prevent]`.
  2. Added `data-lenis-prevent` to both the chat window container and the scrollable messages body in `src/components/ui/chatbot-widget.tsx`.
  3. Attached a native wheel event listener with `{ passive: false }` directly on the messages element (`container.scrollTop += e.deltaY` with `e.stopPropagation()`).
  4. Styled a dedicated sleek custom scrollbar (`.chat-messages-scroll`) in `src/app/globals.css`.
