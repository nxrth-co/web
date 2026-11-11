import type { LeadPayload } from "./schema";

export interface NotifyResult {
  success: boolean;
  channel: string;
  detail?: string;
}

export async function notifyLead(lead: LeadPayload): Promise<NotifyResult[]> {
  const results: NotifyResult[] = [];
  const timestamp = new Date().toISOString();

  // 1. Primary zero-config logger (Always active)
  console.log(`\n================= [NXRTH NEW PROJECT LEAD] =================`);
  console.log(`Timestamp   : ${timestamp}`);
  console.log(`Name        : ${lead.name}`);
  console.log(`WhatsApp    : ${lead.countryCode} ${lead.phone}`);
  console.log(`City        : ${lead.city}`);
  console.log(`Business    : ${lead.businessType}`);
  console.log(`Goal        : ${lead.goal}`);
  console.log(`Services    : ${lead.services.join(", ")}`);
  console.log(`Launch Time : ${lead.launchTiming}`);
  if (lead.template) {
    console.log(`Template    : ${lead.template}`);
  }
  console.log(`============================================================\n`);

  results.push({
    success: true,
    channel: "console",
    detail: "Lead logged to server console",
  });

  // 2. Generic Webhook (e.g. Zapier, Make, Slack, Discord)
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "lead.created",
          data: lead,
          receivedAt: timestamp,
        }),
      });
      results.push({
        success: res.ok,
        channel: "webhook",
        detail: `Status ${res.status}`,
      });
    } catch (err: unknown) {
      console.error("[NXRTH Webhook Error]", err);
      results.push({
        success: false,
        channel: "webhook",
        detail: err instanceof Error ? err.message : "Webhook fetch failed",
      });
    }
  }

  // 3. Email Notification (Resend adapter)
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;
  if (resendApiKey && adminEmail) {
    try {
      const emailBody = `
        <h2>New NXRTH Project Lead</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>WhatsApp:</strong> ${lead.countryCode} ${lead.phone}</p>
        <p><strong>City:</strong> ${lead.city}</p>
        <p><strong>Business Type:</strong> ${lead.businessType}</p>
        <p><strong>Goal:</strong> ${lead.goal}</p>
        <p><strong>Services:</strong> ${lead.services.join(", ")}</p>
        <p><strong>Launch Timing:</strong> ${lead.launchTiming}</p>
        ${lead.template ? `<p><strong>Preselected Template:</strong> ${lead.template}</p>` : ""}
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "NXRTH Inquiries <leads@nxrth.com>",
          to: [adminEmail],
          subject: `New Lead: ${lead.name} (${lead.city})`,
          html: emailBody,
        }),
      });
      results.push({
        success: res.ok,
        channel: "resend_email",
        detail: `Status ${res.status}`,
      });
    } catch (err: unknown) {
      console.error("[NXRTH Resend Error]", err);
      results.push({
        success: false,
        channel: "resend_email",
        detail: err instanceof Error ? err.message : "Email sending failed",
      });
    }
  }

  // 4. WhatsApp Business Cloud API Hook
  // PLUG YOUR META / WHATSAPP BUSINESS CLOUD API CREDENTIALS HERE:
  // WHATSAPP_API_TOKEN, WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_ADMIN_RECIPIENT
  const waToken = process.env.WHATSAPP_CLOUD_API_TOKEN;
  const waPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const waRecipient = process.env.WHATSAPP_ADMIN_RECIPIENT;
  if (waToken && waPhoneId && waRecipient) {
    try {
      const waMessage = `🚀 *New NXRTH Lead*\n\n*Name:* ${lead.name}\n*Phone:* ${lead.countryCode}${lead.phone}\n*City:* ${lead.city}\n*Type:* ${lead.businessType}\n*Goal:* ${lead.goal}\n*Services:* ${lead.services.join(", ")}\n*Launch:* ${lead.launchTiming}${lead.template ? `\n*Template:* ${lead.template}` : ""}`;
      const res = await fetch(
        `https://graph.facebook.com/v21.0/${waPhoneId}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${waToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: waRecipient,
            type: "text",
            text: { body: waMessage },
          }),
        }
      );
      results.push({
        success: res.ok,
        channel: "whatsapp_cloud_api",
        detail: `Status ${res.status}`,
      });
    } catch (err: unknown) {
      console.error("[NXRTH WhatsApp API Error]", err);
      results.push({
        success: false,
        channel: "whatsapp_cloud_api",
        detail: err instanceof Error ? err.message : "WhatsApp API failed",
      });
    }
  }

  return results;
}

