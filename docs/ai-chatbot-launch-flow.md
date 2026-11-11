# AI Chatbot Conversational Launch Flow

## Overview
The NXRTH AI Concierge now features an end-to-end conversational Launch Flow. Visitors can converse with the AI in natural language, describe their furniture showroom or workshop requirements, and receive a tailor-made project summary with an interactive WhatsApp dispatch button.

## How It Works

1. **Initiation**:
   - Visitors can initiate the flow by typing naturally (e.g., *"I want a website for my furniture showroom in Surat"*) or clicking the quick prompt chip `🚀 Start website launch`.
2. **Natural Language Gathering**:
   - The AI asks concise, hospitable questions (1–2 at a time) to understand:
     - Showroom / Business Name & City (e.g. Surat, Mumbai, Delhi)
     - Business Type (Showroom/retail, Manufacturer/workshop, Designer/dealer)
     - Service Scope (Template site ₹15k–₹20k, Bespoke custom site, or AI Chatbot)
     - Main Goal (More showroom footfall, daily WhatsApp quotes, pan-India buyers)
     - Timeline (ASAP 1–2 weeks, this month, or exploring)
     - Contact Name & Phone / WhatsApp number
3. **Automated WhatsApp Action Generation**:
   - Once the essential details are collected, the AI produces a concise 2-sentence confirmation instructing the visitor to send the project summary via WhatsApp.
   - The AI appends a structured tag:
     ```
     [WHATSAPP_ACTION:{"name":"...","phone":"...","city":"...","businessType":"...","service":"...","goal":"...","timeline":"...","message":"..."}]
     ```
4. **Interactive Action Card & Dispatch**:
   - The Chatbot UI automatically strips the raw tag from the text and renders an interactive **Launch Spec Ready** card with:
     - Real-time spec preview (Business, City, Plan, Timeline)
     - Prominent WhatsApp green action button: **"Send Details via WhatsApp"**
     - Target: Direct to founders (`+91 93270 51284`)
   - When clicked:
     - Asynchronously submits the lead payload to `/api/lead` so all customer details are preserved in server logs, webhook, and email notification.
     - Opens `https://wa.me/919327051284?text=...` with the pre-formatted summary ready to send with one tap.
     - Updates the UI with a green checkmark indicating successful dispatch.

