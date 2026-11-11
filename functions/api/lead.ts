// Cloudflare Pages native Edge Function for /api/lead
interface Env {
  LEAD_WEBHOOK_URL?: string;
  RESEND_API_KEY?: string;
  NOTIFICATION_EMAIL?: string;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = (await context.request.json()) as Record<string, unknown>;

    // Honeypot check
    if (body.hp && typeof body.hp === "string" && body.hp.length > 0) {
      return new Response(JSON.stringify({ success: true, message: "Received" }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...CORS_HEADERS },
      });
    }

    const { name, email, phone, projectType, budget, timeline, notes } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Validation failed", details: { name: ["Name is required"] } }),
        { status: 400, headers: { "Content-Type": "application/json", ...CORS_HEADERS } }
      );
    }

    const leadPayload = {
      name,
      email: email || "Not provided",
      phone: phone || "Not provided",
      projectType: projectType || "Not specified",
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
      notes: notes || "Direct lead submission",
      timestamp: new Date().toISOString(),
    };

    console.log("[NXRTH Cloudflare Pages Lead Received]", JSON.stringify(leadPayload));

    // Optional webhook forwarding if configured in Cloudflare environment
    if (context.env.LEAD_WEBHOOK_URL) {
      try {
        await fetch(context.env.LEAD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload),
        });
      } catch (webhookErr) {
        console.warn("[NXRTH Lead Webhook Error]", webhookErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead processed successfully",
        deliveredChannels: ["console", context.env.LEAD_WEBHOOK_URL ? "webhook" : null].filter(Boolean),
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...CORS_HEADERS } }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal error";
    return new Response(
      JSON.stringify({ error: "Failed to process lead", details: errorMsg }),
      { status: 500, headers: { "Content-Type": "application/json", ...CORS_HEADERS } }
    );
  }
};

