"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, MessageCircle, ArrowUpRight, CheckCheck } from "lucide-react";
import { SectionBadge, Crosshair } from "@/components/ui/crosshair";
import { Button } from "@/components/ui/button";
import { useStartFlow } from "@/context/start-flow-context";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
  meta?: {
    itemTitle?: string;
    itemPrice?: string;
    actionLabel?: string;
  };
}

const PRESET_QUESTIONS = [
  "Do you have a 3-seater sofa under ₹30,000?",
  "Do you deliver to Mumbai?",
  "Can I customize the wood polish to dark walnut?",
  "Can an interior architect get bulk trade pricing?",
];

const BOT_RESPONSES: Record<string, { text: string; meta?: { itemTitle?: string; itemPrice?: string; actionLabel?: string } }> = {
  "Do you have a 3-seater sofa under ₹30,000?": {
    text: "Yes! Our Nordic Birch 3-Seater is currently ₹28,500 with stain-resistant linen upholstery. Would you like me to send the fabric swatches and dimension sheet to your WhatsApp?",
    meta: {
      itemTitle: "Nordic Birch 3-Seater (84″ W × 36″ D)",
      itemPrice: "₹28,500",
      actionLabel: "Send Spec Sheet to WhatsApp",
    },
  },
  "Do you deliver to Mumbai?": {
    text: "We deliver across Greater Mumbai (South Bombay to Thane & Navi Mumbai) within 3–4 business days via our dedicated furniture transit van with white-glove floor assembly.",
    meta: {
      itemTitle: "Mumbai Direct Showroom Dispatch",
      itemPrice: "Free on orders over ₹25,000",
      actionLabel: "Book Delivery Slot",
    },
  },
  "Can I customize the wood polish to dark walnut?": {
    text: "Absolutely. All our solid teak and sheesham pieces can be finished in Natural Matte, Honey Teak, Smoked Oak, or Dark Walnut at no extra charge. Production turnaround is 7–10 days.",
    meta: {
      itemTitle: "Finish: Smoked Walnut Polish",
      itemPrice: "Custom Polish Included",
      actionLabel: "View Wood Swatch Photo",
    },
  },
  "Can an interior architect get bulk trade pricing?": {
    text: "Yes, we offer registered architects and interior designers 18%–25% trade margin on project orders above 3 rooms, with CAD/3D model assets and priority delivery schedules.",
    meta: {
      itemTitle: "Architect Trade Tier",
      itemPrice: "Up to 25% Trade Discount",
      actionLabel: "Request B2B Trade Deck",
    },
  },
};

export function ChatbotShowcase() {
  const { openStartFlow } = useStartFlow();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "bot",
      text: "Namaste! Welcome to NXRTH Showroom Assistant. Ask me about custom dimensions, wood finishes, live inventory, or delivery zones in your city.",
      time: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendPrompt = (questionText: string) => {
    if (!questionText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: questionText,
      time: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const match =
        BOT_RESPONSES[questionText] || {
          text: `Great question regarding "${questionText}". Our workshop master can craft this to your exact specifications. Let me connect you directly on WhatsApp with our design lead.`,
          meta: {
            itemTitle: "Custom Showroom Consultation",
            itemPrice: "Instant Quote",
            actionLabel: "Chat on WhatsApp",
          },
        };

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: match.text,
        time: "Just now",
        meta: match.meta,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section id="ai-demo" className="relative py-24 sm:py-32 px-6 bg-[#070809] border-b border-[rgba(255,255,255,0.08)]">
      <div className="absolute top-8 left-6 sm:left-12">
        <Crosshair />
      </div>
      <div className="absolute top-8 right-6 sm:right-12">
        <Crosshair />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionBadge number="03" label="AI CONCIERGE DEMO" className="mb-4" />
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F4EF] font-normal tracking-tight">
            An AI salesperson that never sleeps, misses a lead, or forgets <em className="italic text-[#C8FF00]">measurements.</em>
          </h2>
          <p className="mt-4 text-base text-[#8B8D90] font-light">
            Try asking a question below to see how our chatbot handles real showroom customer queries.
          </p>
        </div>

        {/* Interactive Chat Widget Mockup */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[#0E0F11] shadow-[0_24px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[rgba(255,255,255,0.08)] bg-[#15171A]/70 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-full bg-[#070809] border border-[#C8FF00]/40 flex items-center justify-center p-1.5">
                <Image
                  src="/brand/nxrth-mark-lime.png"
                  alt="NXRTH Mark"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#F4F4EF] font-semibold">
                    Studio Teak · AI Showroom Assistant
                  </span>
                  {/* Single hot orange surprise dot for AI online status */}
                  <span className="h-2 w-2 rounded-full bg-[#FF5B1F] animate-pulse" />
                </div>
                <span className="font-mono text-[10px] text-[#8B8D90]">
                  Trained on 140+ furniture models, timber grades &amp; delivery pin-codes
                </span>
              </div>
            </div>

            <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest text-[#C8FF00] border border-[#C8FF00]/30 px-2.5 py-1 rounded-full">
              LIVE INTERACTIVE DEMO
            </span>
          </div>

          {/* Messages Container */}
          <div className="p-4 sm:p-6 space-y-4 min-h-[340px] max-h-[420px] overflow-y-auto bg-[#070809]/80">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#C8FF00] text-[#070809] font-medium rounded-tr-xs"
                      : "bg-[#15171A] text-[#F4F4EF] border border-[rgba(255,255,255,0.08)] rounded-tl-xs"
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Bot Product Card Attachment */}
                  {msg.meta && (
                    <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.08)] flex flex-col gap-2">
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="text-[#F4F4EF] font-medium">{msg.meta.itemTitle}</span>
                        <span className="text-[#C8FF00] font-semibold">{msg.meta.itemPrice}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => openStartFlow()}
                        className="mt-1 w-full py-2 px-3 rounded-lg bg-[#C8FF00]/15 hover:bg-[#C8FF00]/25 border border-[#C8FF00]/40 text-[#C8FF00] font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        {msg.meta.actionLabel}
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-1 flex items-center gap-1 font-mono text-[10px] text-[#8B8D90] px-1">
                  <span>{msg.time}</span>
                  {msg.sender === "user" && <CheckCheck className="h-3 w-3 text-[#C8FF00]" />}
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#15171A] border border-[rgba(255,255,255,0.08)] w-max">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] animate-bounce [animation-delay:0.2s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
          </div>

          {/* Quick Preset Buttons */}
          <div className="p-3 bg-[#0E0F11] border-t border-[rgba(255,255,255,0.06)]">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-[#8B8D90] mb-2 px-1">
              Tap to test sample customer question:
            </span>
            <div className="flex flex-wrap gap-2">
              {PRESET_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSendPrompt(q)}
                  className="px-3 py-1.5 rounded-full text-xs font-mono text-[#8B8D90] hover:text-[#C8FF00] bg-[#15171A] hover:bg-[#15171A]/90 border border-[rgba(255,255,255,0.06)] hover:border-[#C8FF00]/30 transition-all text-left"
                >
                  &ldquo;{q}&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt(inputValue);
            }}
            className="p-3 sm:p-4 bg-[#15171A] border-t border-[rgba(255,255,255,0.08)] flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type any furniture question (e.g. Do you make 8-seater dining sets?)..."
              className="flex-1 bg-[#0E0F11] border border-[rgba(255,255,255,0.08)] focus:border-[#C8FF00] rounded-xl px-4 py-3 text-sm text-[#F4F4EF] placeholder-[#8B8D90] outline-none"
            />
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="px-5 font-mono text-xs uppercase"
            >
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>

        {/* Primary CTA repeated after Chatbot demo as required */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="primary"
            onClick={() => openStartFlow({ initialService: "ai-chatbot" })}
            className="text-sm font-mono uppercase tracking-wider font-semibold px-8"
          >
            Integrate AI into your showroom <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

