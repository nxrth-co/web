"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  ArrowUpRight,
  RotateCcw,
  Minimize2,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
}

interface WhatsAppActionData {
  name?: string;
  phone?: string;
  city?: string;
  businessType?: string;
  service?: string;
  goal?: string;
  timeline?: string;
  message?: string;
}

export interface ChatbotOpenOptions {
  prompt?: string;
}

const QUICK_PROMPTS = [
  "🚀 Start website launch",
  "What is included in the ₹15k template?",
  "How does the monthly care plan work?",
  "Can you customize for solid teak furniture?",
  "How do I request a custom quote?",
];

export function openChatbotWidget(options?: ChatbotOpenOptions) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-nxrth-chat", { detail: options }));
  }
}

function parseWhatsAppAction(content: string): {
  cleanContent: string;
  actionData: WhatsAppActionData | null;
} {
  const match = content.match(/\[WHATSAPP_ACTION:([\s\S]*?)\]/);
  if (!match) {
    return { cleanContent: content, actionData: null };
  }

  let actionData: WhatsAppActionData | null = null;
  try {
    actionData = JSON.parse(match[1]);
  } catch {
    actionData = { message: match[1] };
  }

  const cleanContent = content.replace(/\[WHATSAPP_ACTION:([\s\S]*?)\]/, "").trim();
  return { cleanContent, actionData };
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dispatchedLeadIds, setDispatchedLeadIds] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Namaste! I'm the NXRTH AI Concierge. Ask me anything, or tell me about your furniture showroom to start your website launch right here in chat.",
      time: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  // Fix PC Mouse Wheel Scrolling inside the chat history:
  // Native listener on the scrollable container with passive: false to prevent Lenis/page hijacking
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isOpen) return;

    const onWheel = (e: WheelEvent) => {
      e.stopPropagation();
      // Directly scroll the message container on PC wheel
      container.scrollTop += e.deltaY;
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    setInput("");

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      time: timeStr,
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      const payload = {
        messages: newHistory.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      };

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Chat service unavailable");
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: unknown) {
      console.error("[Chatbot Error]", err);
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "We build fast, AI-powered digital storefronts for furniture showrooms (Template sites from ₹15,000 + ₹4,000/mo care, or custom bespoke architectures). Click below to send your showroom requirements directly to our founders on WhatsApp.\n\n[WHATSAPP_ACTION:{\"name\":\"Showroom Owner\",\"message\":\"Hi NXRTH, I'd like to get a quote and discuss a website for my furniture showroom.\"}]",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Listen for open-nxrth-chat events from anywhere on the website
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<ChatbotOpenOptions>;
      setIsOpen(true);
      if (customEvent.detail?.prompt) {
        const promptText = customEvent.detail.prompt;
        setTimeout(() => {
          handleSendMessage(promptText);
        }, 250);
      }
    };
    window.addEventListener("open-nxrth-chat", handleOpen);
    return () => window.removeEventListener("open-nxrth-chat", handleOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, isLoading]);

  const handleSendWhatsApp = (actionData: WhatsAppActionData, messageId: string) => {
    const defaultMsg = `Hi NXRTH, I'd like to launch a project for my furniture business.\n\n• Business: ${actionData.name || "Showroom"}\n• City: ${actionData.city || "India"}\n• Plan: ${actionData.service || "Showroom Website"}\n• Timeline: ${actionData.timeline || "ASAP"}\n• Contact: ${actionData.phone || "Via WhatsApp"}\n\nLet's get started!`;
    const finalMessage = actionData.message || defaultMsg;

    // Asynchronously submit lead payload to server log / webhook
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: actionData.name || "Chatbot Visitor",
        countryCode: "+91",
        phone: actionData.phone || "Via WhatsApp Dispatch",
        city: actionData.city || "Not specified",
        businessType: actionData.businessType || "Furniture Showroom",
        goal: actionData.goal || "Website Launch via AI Concierge",
        services: [actionData.service || "Showroom website"],
        launchTiming: actionData.timeline || "ASAP",
      }),
    }).catch((err) => console.warn("[Chatbot lead log error]", err));

    setDispatchedLeadIds((prev) => [...prev, messageId]);

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919327051284";
    const encoded = encodeURIComponent(finalMessage);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Namaste! I'm the NXRTH AI Concierge. Ask me anything, or tell me about your furniture showroom to start your website launch right here in chat.",
        time: "Just now",
      },
    ]);
  };

  return (
    <aside aria-label="AI Concierge Assistant" className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Expanded Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 24, stiffness: 300 }}
            className="mb-3 w-[calc(100vw-32px)] sm:w-[400px] md:w-[440px] max-h-[600px] h-[550px] rounded-3xl bg-[#0E0F11] border border-[rgba(255,255,255,0.12)] shadow-[0_24px_50px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-[#15171A] border-b border-[rgba(255,255,255,0.08)] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative h-8 w-8 rounded-full bg-[#070809] border border-[#C8FF00]/40 flex items-center justify-center">
                  <Image
                    src="/brand/nxrth-mark-lime.png"
                    alt="NXRTH"
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#F4F4EF] font-semibold">
                      NXRTH AI Concierge
                    </span>
                    {/* Hot Orange Live Status Dot */}
                    <span className="h-2 w-2 rounded-full bg-[#FF5B1F] animate-pulse" title="Live Groq AI" />
                  </div>
                  <span className="font-mono text-[10px] text-[#8B8D90] block">
                    Direct Launch &amp; Showroom Advisor
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Clear conversation"
                  className="h-7 w-7 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#8B8D90] hover:text-[#F4F4EF] transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Minimize"
                  className="h-7 w-7 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#8B8D90] hover:text-[#C8FF00] transition-colors cursor-pointer"
                >
                  <Minimize2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Messages Body with data-lenis-prevent and PC wheel scroll support */}
            <div
              ref={scrollContainerRef}
              data-lenis-prevent
              className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#070809]/90 text-xs chat-messages-scroll select-text"
              style={{
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {messages.map((m) => {
                const isUser = m.role === "user";
                const { cleanContent, actionData } = parseWhatsAppAction(m.content);
                const isDispatched = dispatchedLeadIds.includes(m.id);

                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[90%] rounded-2xl p-3.5 leading-relaxed ${
                        isUser
                          ? "bg-[#C8FF00] text-[#070809] font-medium rounded-tr-xs"
                          : "bg-[#15171A] text-[#F4F4EF] border border-[rgba(255,255,255,0.08)] rounded-tl-xs"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{cleanContent}</p>

                      {/* Interactive WhatsApp Launch Button Card */}
                      {!isUser && actionData && (
                        <div className="mt-3.5 p-3 rounded-2xl bg-[#070809] border border-[#25D366]/40 shadow-[0_4px_24px_rgba(37,211,102,0.12)] space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="flex h-2 w-2 rounded-full bg-[#25D366] animate-ping" />
                              <span className="font-mono text-[10px] uppercase tracking-wider text-[#25D366] font-semibold">
                                Launch Spec Ready
                              </span>
                            </div>
                            <span className="font-mono text-[9px] text-[#8B8D90]">
                              WhatsApp Dispatch
                            </span>
                          </div>

                          {(actionData.name || actionData.city || actionData.service) && (
                            <div className="p-2.5 rounded-xl bg-[#15171A] border border-[rgba(255,255,255,0.06)] font-mono text-[10px] text-[#8B8D90] space-y-1">
                              {actionData.name && (
                                <div className="text-[#F4F4EF] font-medium flex items-center justify-between">
                                  <span>{actionData.name}</span>
                                  {actionData.service && (
                                    <span className="text-[#C8FF00] font-semibold">{actionData.service}</span>
                                  )}
                                </div>
                              )}
                              {actionData.city && (
                                <div>📍 City: <span className="text-[#F4F4EF]">{actionData.city}</span></div>
                              )}
                              {actionData.timeline && (
                                <div>⚡ Timeline: <span className="text-[#F4F4EF]">{actionData.timeline}</span></div>
                              )}
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={() => handleSendWhatsApp(actionData, m.id)}
                            className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-black font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all cursor-pointer group"
                          >
                            <MessageCircle className="h-4 w-4 fill-black text-black group-hover:scale-110 transition-transform" />
                            <span>{isDispatched ? "Re-open on WhatsApp" : "Send Details via WhatsApp"}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </button>

                          <div className="flex items-center justify-center gap-1.5 font-mono text-[9px] text-[#8B8D90]">
                            {isDispatched ? (
                              <span className="text-[#25D366] flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3" /> Dispatched to Founders (+91 93270 51284)
                              </span>
                            ) : (
                              <span>Direct to Founders (+91 93270 51284)</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="font-mono text-[9px] text-[#8B8D90] mt-1 px-1">
                      {m.time}
                    </span>
                  </motion.div>
                );
              })}

              {isLoading && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#15171A] border border-[rgba(255,255,255,0.08)] w-max">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] animate-bounce [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-2.5 bg-[#0E0F11] border-t border-[rgba(255,255,255,0.06)] overflow-x-auto scrollbar-none flex gap-1.5">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#15171A] hover:bg-[#C8FF00]/10 border border-[rgba(255,255,255,0.06)] hover:border-[#C8FF00]/40 font-mono text-[10px] text-[#8B8D90] hover:text-[#C8FF00] transition-colors shrink-0 cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#15171A] border-t border-[rgba(255,255,255,0.08)] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Reply or type details (e.g., Surat showroom, template site)..."
                className="flex-1 bg-[#0E0F11] border border-[rgba(255,255,255,0.08)] focus:border-[#C8FF00] rounded-xl px-3.5 py-2.5 text-xs text-[#F4F4EF] placeholder-[#8B8D90] outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="h-9 w-9 rounded-xl bg-[#C8FF00] text-[#070809] flex items-center justify-center hover:bg-[#d8ff33] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`relative h-13 w-13 sm:h-14 sm:w-14 rounded-full border flex items-center justify-center shadow-[0_12px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF00] cursor-pointer ${
          isOpen
            ? "bg-[#15171A] border-[rgba(255,255,255,0.2)] text-[#F4F4EF]"
            : "bg-[#0E0F11] border-[#C8FF00]/50 hover:border-[#C8FF00] text-[#C8FF00] hover:shadow-[0_0_24px_rgba(200,255,0,0.35)]"
        }`}
        aria-label={isOpen ? "Close AI chat" : "Open AI chat concierge"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-[#F4F4EF]" />
        ) : (
          <>
            <div className="relative h-6 w-6 sm:h-7 sm:w-7">
              <Image
                src="/brand/nxrth-mark-lime.png"
                alt="NXRTH AI"
                fill
                className="object-contain"
              />
            </div>
            {/* Active Status Dot */}
            <span className="absolute top-1 right-1 h-3 w-3 rounded-full bg-[#FF5B1F] border-2 border-[#0E0F11] animate-pulse" />
          </>
        )}
      </motion.button>
    </aside>
  );
}
