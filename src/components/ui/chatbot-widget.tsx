"use client";

import React, { useState, useRef, useEffect, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, RotateCcw, ArrowUpRight, MessageCircle } from "lucide-react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  action?: "start-flow" | "whatsapp" | "both";
  followUps?: string[];
}

export interface ChatbotOpenOptions {
  prompt?: string;
}

const INITIAL_PILLS = [
  "What's included in the ₹15,000 template?",
  "How much is monthly care?",
  "Can I add an AI assistant?",
  "I'd like to start a project",
];

const GREETING_MESSAGE: Message = {
  id: "greeting",
  role: "assistant",
  content: "Namaste! Ask me about websites, pricing or getting started.",
};

const SESSION_STORAGE_KEY = "nxrth_chat_history_v2";
const HAS_OPENED_STORAGE_KEY = "nxrth_chat_has_opened";

export function openChatbotWidget(options?: ChatbotOpenOptions) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-nxrth-chat", { detail: options }));
  }
}

function triggerStartFlow() {
  if (typeof window !== "undefined") {
    const el = document.getElementById("faq");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }
}

function subscribeStorage(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getHasOpenedSnapshot() {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(HAS_OPENED_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getHasOpenedServerSnapshot() {
  return false;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [userOpenedInSession, setUserOpenedInSession] = useState(false);
  const isStoredOpened = useSyncExternalStore(
    subscribeStorage,
    getHasOpenedSnapshot,
    getHasOpenedServerSnapshot
  );
  const hasEverOpened = isStoredOpened || userOpenedInSession;

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING_MESSAGE]);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919327051284";

  const handleOpenChat = useCallback(() => {
    setIsOpen(true);
    setUserOpenedInSession(true);
    try {
      sessionStorage.setItem(HAS_OPENED_STORAGE_KEY, "true");
    } catch {
      // ignore
    }
  }, []);

  // Check saved session messages on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const savedMessages = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (savedMessages) {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          queueMicrotask(() => {
            setMessages(parsed);
          });
        }
      }
    } catch {
      // use default greeting
    }
  }, []);

  // Save messages to sessionStorage
  useEffect(() => {
    if (messages.length > 1) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom smoothly
  const scrollToBottom = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(scrollToBottom, 50);
      return () => clearTimeout(timer);
    }
  }, [messages, isOpen, isLoading, scrollToBottom]);

  // Focus management: on open, focus input (desktop); on close, focus launcher
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    } else {
      launcherRef.current?.focus();
    }
  }, [isOpen]);

  // Lock body scroll on mobile (<640px)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen && window.innerWidth < 640) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  // Esc key to close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // PC Wheel scroll listener with passive: false to prevent background scroll interference
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isOpen) return;

    const onWheel = (e: WheelEvent) => {
      e.stopPropagation();
      container.scrollTop += e.deltaY;
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    // Special case: "I'd like to start a project"
    if (text === "I'd like to start a project") {
      setIsOpen(false);
      triggerStartFlow();
      return;
    }

    setInput("");

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setIsLoading(true);

    const startTime = Date.now();

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
      const content = data.content || "I'm not sure about that. You can ask us directly on WhatsApp.";

      // Determine follow-up buttons based on answer content
      let action: "start-flow" | "whatsapp" | "both" | undefined;
      const followUps: string[] = [];

      const lower = content.toLowerCase();
      if (lower.includes("not sure") || lower.includes("whatsapp")) {
        action = "whatsapp";
        followUps.push("How much is monthly care?", "What's included in the template?");
      } else if (lower.includes("template") || lower.includes("15,000") || lower.includes("pricing") || lower.includes("custom")) {
        action = "start-flow";
        followUps.push("How much is monthly care?", "Can I add an AI assistant?");
      } else if (lower.includes("ai assistant") || lower.includes("month")) {
        action = "start-flow";
        followUps.push("What's included in the template?", "I'd like to start a project");
      }

      // Enforce 600ms - 800ms soft typing indicator
      const elapsed = Date.now() - startTime;
      const delay = Math.max(0, 650 - elapsed);

      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content,
          action,
          followUps: followUps.slice(0, 2),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, delay);
    } catch {
      setTimeout(() => {
        const fallbackMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "I'm not sure about that. You can ask us directly on WhatsApp.",
          action: "whatsapp",
          followUps: ["What's included in the template?", "How much is monthly care?"],
        };
        setMessages((prev) => [...prev, fallbackMessage]);
        setIsLoading(false);
      }, 650);
    }
  };

  const handleResetChat = () => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    setMessages([GREETING_MESSAGE]);
    setInput("");
    inputRef.current?.focus();
  };

  // Listen for programmatic open requests
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<ChatbotOpenOptions>;
      setIsOpen(true);
      if (customEvent.detail?.prompt) {
        const promptText = customEvent.detail.prompt;
        setTimeout(() => {
          handleSendMessage(promptText);
        }, 200);
      }
    };
    window.addEventListener("open-nxrth-chat", handleOpen);
    return () => window.removeEventListener("open-nxrth-chat", handleOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, isLoading]);

  const hasUserSpoken = messages.some((m) => m.role === "user");

  return (
    <>
      {/* Expanded Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Chat with NXRTH Assistant"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-[100dvh] sm:h-[min(640px,calc(100svh-48px))] bg-white/95 sm:rounded-[24px] border-0 sm:border border-[rgba(140,83,43,0.18)] shadow-[0_24px_80px_rgba(78,52,34,0.18)] flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Header: 72px tall in rich espresso walnut */}
            <div className="h-[72px] px-5 bg-[#2B1E16] border-b border-[rgba(140,83,43,0.2)] flex items-center justify-between shrink-0 pt-safe sm:pt-0">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 flex items-center justify-center shrink-0">
                  <Image
                    src="/brand/nxrth-mark.png"
                    alt="NXRTH"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[15px] font-semibold text-[#FAF7F2] leading-tight">
                    NXRTH Concierge
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-[#C68B59] animate-pulse" />
                    <span className="font-sans text-[12px] text-[#D4A373] leading-none">
                      Online · Showroom Support
                    </span>
                  </div>
                </div>
              </div>

              {/* Header Actions: New chat and Close */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  aria-label="New chat"
                  title="New chat"
                  className="h-10 w-10 rounded-full flex items-center justify-center text-[#FAF7F2]/70 hover:text-[#FAF7F2] hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C68B59]"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                  title="Close"
                  className="h-10 w-10 rounded-full flex items-center justify-center text-[#FAF7F2]/70 hover:text-[#FAF7F2] hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C68B59]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div
              ref={scrollContainerRef}
              role="log"
              aria-live="polite"
              className="flex-1 px-5 pt-6 pb-4 overflow-y-auto bg-[#FAF7F2] font-sans chat-messages-scroll"
              style={{
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div className="space-y-5">
                {messages.map((m, idx) => {
                  const isUser = m.role === "user";
                  return (
                    <motion.div
                      key={m.id}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.16 }}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`text-[16px] leading-[1.5] py-3.5 px-4 ${
                          isUser
                            ? "bg-[#2B1E16] text-[#FAF7F2] font-medium rounded-[20px] rounded-br-[6px] max-w-[85%] shadow-xs"
                            : "bg-white text-[#201815] border border-[rgba(140,83,43,0.14)] rounded-[20px] rounded-bl-[6px] max-w-[85%] shadow-2xs"
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{m.content}</p>
                      </div>

                      {/* Initial 4 Full-Width Stacked Question Pills directly under greeting */}
                      {idx === 0 && !hasUserSpoken && (
                        <div className="w-full mt-4 flex flex-col gap-2.5">
                          {INITIAL_PILLS.map((pill, pIdx) => {
                            const isStart = pill === "I'd like to start a project";
                            return (
                              <button
                                key={pIdx}
                                type="button"
                                onClick={() => handleSendMessage(pill)}
                                className={`w-full h-11 px-4 rounded-full font-sans text-[15px] text-left transition-all cursor-pointer flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C532B] ${
                                  isStart
                                    ? "border border-[#8C532B] bg-[#8C532B]/10 text-[#8C532B] hover:bg-[#8C532B]/20 font-medium"
                                    : "border border-[rgba(140,83,43,0.16)] bg-white text-[#201815] hover:border-[#8C532B] hover:text-[#8C532B] shadow-2xs"
                                }`}
                              >
                                <span>{pill}</span>
                                {isStart && <ArrowUpRight className="h-4 w-4 text-[#8C532B]" />}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Inline Actions under Bot Replies */}
                      {!isUser && m.action && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {(m.action === "start-flow" || m.action === "both") && (
                            <button
                              type="button"
                              onClick={() => {
                                setIsOpen(false);
                                triggerStartFlow();
                              }}
                              className="h-10 px-4 rounded-full bg-[#2B1E16] text-[#FAF7F2] font-sans text-sm font-semibold hover:bg-[#432F23] transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C532B] shadow-xs"
                            >
                              <span>Start a project</span>
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </button>
                          )}

                          {(m.action === "whatsapp" || m.action === "both") && (
                            <a
                              href={`https://wa.me/${whatsappNumber}?text=Hi%20NXRTH,%20I'd%20like%20to%20discuss%20a%20website%20for%20my%20furniture%20showroom.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-10 px-4 rounded-full border border-[rgba(140,83,43,0.22)] bg-white text-[#201815] hover:border-[#8C532B] hover:text-[#8C532B] font-sans text-sm transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C532B] shadow-2xs"
                            >
                              <MessageCircle className="h-3.5 w-3.5 text-[#8C532B]" />
                              <span>Message us on WhatsApp</span>
                            </a>
                          )}
                        </div>
                      )}

                      {/* Follow-up Pills (at most 2) */}
                      {!isUser && hasUserSpoken && m.followUps && m.followUps.length > 0 && (
                        <div className="mt-3 flex flex-col gap-2 w-full max-w-[85%]">
                          {m.followUps.map((pill, fIdx) => (
                            <button
                              key={fIdx}
                              type="button"
                              onClick={() => handleSendMessage(pill)}
                              className="h-10 px-4 rounded-full border border-[rgba(140,83,43,0.16)] bg-white text-[#201815] hover:border-[#8C532B] hover:text-[#8C532B] font-sans text-sm text-left transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C532B] shadow-2xs"
                            >
                              {pill}
                            </button>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}

                {/* 3-Dot Soft Typing Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1.5 py-3 px-4 rounded-[20px] rounded-bl-[6px] bg-white border border-[rgba(140,83,43,0.14)] w-max shadow-2xs"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#8C532B] animate-bounce" />
                    <span className="h-2 w-2 rounded-full bg-[#8C532B] animate-bounce [animation-delay:0.18s]" />
                    <span className="h-2 w-2 rounded-full bg-[#8C532B] animate-bounce [animation-delay:0.36s]" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Input Area: 16px padding, 52px pill input, 44px send button */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-4 bg-[#F4EFEB] border-t border-[rgba(140,83,43,0.12)] flex items-center gap-2.5 pb-safe sm:pb-4 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question"
                className="flex-1 h-[52px] bg-white border border-[rgba(140,83,43,0.16)] focus:border-[#8C532B] rounded-full px-5 font-sans text-[16px] text-[#201815] placeholder-[#8C7E74] outline-none transition-colors shadow-2xs"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send question"
                className={`h-[44px] w-[44px] rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C532B] ${
                  input.trim() && !isLoading
                    ? "bg-[#2B1E16] text-[#FAF7F2] shadow-[0_4px_12px_rgba(43,30,22,0.25)]"
                    : "bg-transparent border border-[rgba(140,83,43,0.2)] text-[#8C7E74] opacity-50 cursor-not-allowed"
                }`}
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button (HIDDEN when panel is open) */}
      {!isOpen && (
        <aside
          aria-label="Chat Launcher"
          className="fixed bottom-24 right-5 sm:bottom-6 sm:right-6 z-40"
        >
          <motion.button
            ref={launcherRef}
            type="button"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
            onClick={handleOpenChat}
            aria-label="Open NXRTH Assistant"
            className="relative h-14 w-14 rounded-full bg-[#2B1E16] text-[#FAF7F2] flex items-center justify-center shadow-[0_12px_32px_rgba(43,30,22,0.3)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C532B] border border-[rgba(140,83,43,0.25)]"
          >
            <MessageSquare className="h-6 w-6 fill-[#FAF7F2] text-[#FAF7F2]" />

            {/* ONLY location where orange appears on the entire site: small 8px dot until opened for the first time */}
            {!hasEverOpened && (
              <span
                className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-[#C05A32] ring-2 ring-white"
                title="New message"
              />
            )}
          </motion.button>
        </aside>
      )}
    </>
  );
}
