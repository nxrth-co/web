"use client";

import React, { createContext, useContext, useCallback } from "react";
import { openChatbotWidget } from "@/components/ui/chatbot-widget";

export interface StartFlowAnswers {
  services: string[];
  goal: string;
  businessType: string;
  city: string;
  launchTiming: string;
  template?: string;
  name: string;
  countryCode: string;
  phone: string;
}

interface StartFlowContextType {
  isOpen: boolean;
  openStartFlow: (options?: {
    plan?: string;
    template?: string;
    initialService?: string;
    initialStep?: number;
  }) => void;
  closeStartFlow: () => void;
  step: number;
  setStep: (step: number) => void;
  answers: StartFlowAnswers;
  setAnswer: <K extends keyof StartFlowAnswers>(key: K, value: StartFlowAnswers[K]) => void;
  toggleService: (service: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetFlow: () => void;
  isSubmitting: boolean;
  submitError: string | null;
  submitLead: () => Promise<boolean>;
  isSuccess: boolean;
}

const defaultAnswers: StartFlowAnswers = {
  services: [],
  goal: "",
  businessType: "",
  city: "",
  launchTiming: "",
  template: "",
  name: "",
  countryCode: "+91",
  phone: "",
};

const StartFlowContext = createContext<StartFlowContextType | undefined>(undefined);

export function StartFlowProvider({ children }: { children: React.ReactNode }) {
  // All launch flows route directly to the AI Concierge Chatbot
  const openStartFlow = useCallback(
    (options?: {
      plan?: string;
      template?: string;
      initialService?: string;
      initialStep?: number;
    }) => {
      let prompt = "🚀 Start website launch";

      if (options?.plan === "template" || options?.initialService === "template-website") {
        prompt = "I want to launch with the Template Website plan (₹15,000)";
      } else if (options?.plan === "custom" || options?.initialService === "custom-website") {
        prompt = "I want to request a quote for a Custom Showroom Website";
      } else if (options?.initialService === "ai-chatbot") {
        prompt = "I want to integrate an AI Chatbot for my showroom";
      } else if (options?.initialService === "maintenance") {
        prompt = "I want to enquire about the Monitoring & Maintenance plan";
      } else if (options?.template) {
        prompt = `I want to launch with the ${options.template} template`;
      }

      openChatbotWidget({ prompt });
    },
    []
  );

  const closeStartFlow = useCallback(() => {}, []);
  const setStep = useCallback(() => {}, []);
  const setAnswer = useCallback(() => {}, []);
  const toggleService = useCallback(() => {}, []);
  const nextStep = useCallback(() => {}, []);
  const prevStep = useCallback(() => {}, []);
  const resetFlow = useCallback(() => {}, []);
  const submitLead = useCallback(async () => true, []);

  return (
    <StartFlowContext.Provider
      value={{
        isOpen: false,
        openStartFlow,
        closeStartFlow,
        step: 1,
        setStep,
        answers: defaultAnswers,
        setAnswer,
        toggleService,
        nextStep,
        prevStep,
        resetFlow,
        isSubmitting: false,
        submitError: null,
        submitLead,
        isSuccess: false,
      }}
    >
      {children}
    </StartFlowContext.Provider>
  );
}

export function useStartFlow() {
  const context = useContext(StartFlowContext);
  if (!context) {
    throw new Error("useStartFlow must be used within a StartFlowProvider");
  }
  return context;
}
