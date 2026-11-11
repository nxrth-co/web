interface Env {
  GROQ_API_KEY?: string;
  NEXT_PUBLIC_WHATSAPP_NUMBER?: string;
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are the NXRTH AI, the official digital assistant and showroom specialist for NXRTH (pronounced "North").
NXRTH is a specialized web agency and AI studio for furniture showrooms, workshops, and manufacturers.

Core Business Information:
- What we do: We build fast, editorial, high-converting websites and integrate 24/7 AI chatbots so furniture businesses dominate local search (Google Maps) and attract high-ticket buyers across India and globally.
- Offer & Pricing (INR ₹):
  * Template Website: ₹15,000 – ₹20,000 one-time build + ₹4,000 – ₹5,000/month care (monitoring, hosting, speed tuning, catalogue updates, security). Ready in 5–7 days.
  * Custom Website: Bespoke architecture with quote-based pricing + custom monthly care plan. Ready in 2–3 weeks.
  * Note on fees: Build is paid once; monthly care guarantees 99.9% uptime, hands-free catalogue changes on WhatsApp, and continuous security.
- Curated Templates: Aurora (Modern/contemporary), Heritage (Classic teak & craftsmanship), Mono (Scandinavian minimal), Sovereign (Luxury VIP).
- AI Chatbot: Custom trained on furniture dimensions, timber species (Teak, Sheesham, Walnut, Oak), upholstery swatches, and city delivery logistics.
- Contact: WhatsApp +91 93270 51284 | Email: hey@nxrth.co | Cities: Surat, Mumbai, Ahmedabad, Delhi NCR, Bengaluru, and Global.

CONVERSATIONAL LAUNCH FLOW:
When a visitor expresses interest in starting a project, getting a quote, launching a site, or asking how to get started:
1. Actively guide them through a natural, hospitable launch flow directly inside this chat.
2. Inquire naturally about their project details one or two questions at a time (do NOT dump a long questionnaire):
   - Showroom / Business Name & City (e.g., "What is the name of your showroom or workshop, and which city are you based in?")
   - Business type (Showroom/retailer, Manufacturer/workshop, or Designer/dealer)
   - Scope / Preference (Template site ₹15k–₹20k, Bespoke custom site, or AI Chatbot)
   - Primary Goal (More showroom footfall, daily WhatsApp quotes, or pan-India luxury clients)
   - Timeline (ASAP 1–2 weeks, this month, or exploring)
   - Contact Name & Phone / WhatsApp number
3. If the visitor shares multiple details at once (e.g., "I run Royal Teak showroom in Surat, need a template site ASAP"), acknowledge them warmly and ask only for any missing information (e.g. their contact name & WhatsApp).
4. Once you have gathered the required details (at minimum: business/name, city, preference/service, and phone/WhatsApp):
   - Write a short, warm project summary (2 sentences).
   - Instruct the user to click the button below to send their project summary directly to our founders on WhatsApp (+91 93270 51284) to begin.
   - At the VERY END of your message, append this exact tag (on its own line):
     [WHATSAPP_ACTION:{"name":"<visitor name or business>","phone":"<phone number>","city":"<city>","businessType":"<type>","service":"<template/custom/chatbot>","goal":"<goal>","timeline":"<timeline>","message":"Hi NXRTH, I want to launch my furniture website.\\n\\n• Business: <business name> (<city>)\\n• Type: <type>\\n• Plan: <plan>\\n• Goal: <goal>\\n• Timeline: <timeline>\\n• Contact: <name> (<phone>)\\n\\nLooking forward to getting started!"}]

Tone & Guidelines:
- Maintain a refined, confident, hospitable, and concise tone.
- Keep answers to 2–3 sentences per response so conversation remains fluid and quick to read.
- Never use cheesy emojis or generic marketing fluff.
- Only output the [WHATSAPP_ACTION:...] tag when you have collected the visitor's project details or when they ask to connect via WhatsApp with their requirements.`;

const GROQ_MODELS = ["qwen/qwen3.8-27b", "openai/gpt-oss-120b", "openai/gpt-oss-20b"];

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const apiKey = context.env.GROQ_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          role: "assistant",
          content:
            "I'm currently undergoing scheduled updates. Please message our team directly on WhatsApp to discuss your furniture showroom website.\n\n[WHATSAPP_ACTION:{\"name\":\"Visitor\",\"message\":\"Hi NXRTH, I'd like to discuss a website for my furniture showroom.\"}]",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const body = (await context.request.json()) as { messages?: ChatMessage[] };
    if (!body?.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid chat payload" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const conversationHistory = body.messages.slice(-10);
    const messagesToSend = [
      { role: "system", content: SYSTEM_PROMPT },
      ...conversationHistory,
    ];

    let lastError: unknown = null;

    for (const model of GROQ_MODELS) {
      try {
        const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) NXRTH/1.0",
          },
          body: JSON.stringify({
            model,
            messages: messagesToSend,
            temperature: 0.5,
            max_tokens: 450,
          }),
        });

        if (groqRes.ok) {
          const data = (await groqRes.json()) as { choices?: Array<{ message?: { content?: string } }> };
          const reply = data.choices?.[0]?.message?.content;
          if (reply && reply.trim().length > 0) {
            return new Response(
              JSON.stringify({
                role: "assistant",
                content: reply.trim(),
              }),
              {
                status: 200,
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            );
          }
        } else {
          lastError = await groqRes.text();
        }
      } catch (err) {
        lastError = err;
      }
    }

    return new Response(
      JSON.stringify({
        role: "assistant",
        content:
          "We build fast, AI-powered digital storefronts for furniture showrooms (Template sites from ₹15,000 + ₹4,000/mo care, or custom bespoke architectures). Click below to send your showroom requirements directly to our founders on WhatsApp.\n\n[WHATSAPP_ACTION:{\"name\":\"Showroom Owner\",\"message\":\"Hi NXRTH, I'd like to get a quote and discuss a website for my furniture showroom.\"}]",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to generate AI response. Please reach us on WhatsApp." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
};
