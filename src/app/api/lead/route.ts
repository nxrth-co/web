import { NextResponse, type NextRequest } from "next/server";
import { leadSchema } from "@/lib/schema";
import { notifyLead } from "@/lib/notify";

// Simple in-memory rate limiter per IP: max 5 requests per 10 minutes
const ipHits = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipHits.get(ip);

  if (!record || now > record.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Check honeypot field
    if (body.hp && body.hp.length > 0) {
      // Quietly succeed to fool bots
      return NextResponse.json({ success: true, message: "Received" });
    }

    const parseResult = leadSchema.safeParse(body);
    if (!parseResult.success) {
      const issues = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed", details: issues },
        { status: 400 }
      );
    }

    const validLead = parseResult.data;
    const notifyResults = await notifyLead(validLead);

    return NextResponse.json({
      success: true,
      message: "Lead processed successfully",
      deliveredChannels: notifyResults.filter((r) => r.success).map((r) => r.channel),
    });
  } catch (error: unknown) {
    console.error("[NXRTH Lead API Error]", error);
    return NextResponse.json(
      { error: "Internal server error. Please try reaching us directly on WhatsApp." },
      { status: 500 }
    );
  }
}

