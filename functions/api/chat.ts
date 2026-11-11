// Cloudflare Pages native Edge Function for /api/chat
interface Env {
  GROQ_API_KEY?: string;
}

const SYSTEM_PROMPT = `You are the NXRTH Assistant, the official digital assistant for NXRTH (pronounced "North").
NXRTH creates fast, beautiful websites for furniture shops, with an AI assistant that answers their customers.

STRICT FACTS & KNOWLEDGE:
- What we do: We build fast, beautiful websites for furniture shops, with an AI assistant that answers their customers.
- Pricing:
  * Template Plan: ₹15,000 – ₹20,000 one-time build, plus ₹4,000 – ₹5,000 / month care.
    Includes: Pick a ready-made template; your products, logo and WhatsApp button; add an AI assistant anytime.
  * Custom Plan: Custom quote, plus monthly care.
    Includes: Designed from scratch for your brand; AI assistant trained on your catalogue; priority support and updates.
- Monthly Care: Covers hosting, security, backups and updates. Send changes on WhatsApp and we publish within 24 hours.
- Cancellation: You can cancel monthly care anytime with 30 days notice. You own your domain, content and codebase outright.
- Domain & Content Ownership: The client owns 100% of their domain, photos, branding and product catalogue.
- Timeline: Template websites go live in 5 to 7 days once product photos and prices are shared. Custom builds take 2 to 3 weeks.
- Live Client Work: Jeet Furniture (https://www.jeetfurniture.com/) in Surat, Best Furniture Store (https://www.bestfurniture.store/) in Mumbai.

ROLE & BEHAVIOR:
1. Answer the visitor's question in a maximum of 3 short sentences using plain, simple words.
2. NEVER collect name, phone, email or project details in chat.
3. NEVER ask the visitor questions or questionnaire fields.
4. If the visitor is ready to begin, start a project, get a quote, or sign up, instruct them to click "Start a project" to answer a few quick questions.
5. If you do not know the answer, or if the question is outside our facts, say exactly:
   "I'm not sure about that. You can ask us directly on WhatsApp."
6. Banned words: edge, CDN, SLA, turnkey, white-glove, architecture, engineered, dependency, vulnerability, B2B gates, peace of mind, philosophy, dominance, concierge.
7. Tone: calm, direct, helpful, polite. No emojis.`;

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

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const body = (await context.request.json()) as {
      messages?: Array<{ role: string; content: string }>;
    };

    if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return new Response(JSON.stringify({ error: "Missing messages" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const apiKey = context.env.GROQ_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          content:
            "Our Template Plan is ₹15,000 to ₹20,000 one-time plus monthly care. You can tap 'Start a project' to begin or message us on WhatsApp.",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...body.messages.slice(-10),
    ];

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages,
        temperature: 0.3,
        max_tokens: 220,
      }),
    });

    if (!groqRes.ok) {
      return new Response(
        JSON.stringify({
          content:
            "We build websites for furniture shops starting at ₹15,000. You can start a project below or ask us on WhatsApp.",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const groqData = (await groqRes.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    let reply =
      groqData.choices?.[0]?.message?.content ||
      "I'm not sure about that. You can ask us directly on WhatsApp.";

    // Strip any emoji
    reply = reply.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "");

    return new Response(JSON.stringify({ content: reply.trim() }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err: unknown) {
    return new Response(
      JSON.stringify({
        content: "I'm not sure about that. You can ask us directly on WhatsApp.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};
