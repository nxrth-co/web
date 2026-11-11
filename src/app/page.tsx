import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { ProblemPromise } from "@/components/sections/problem-promise";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ChatbotCtaStrip } from "@/components/sections/chatbot-cta-strip";
import { PricingSection } from "@/components/sections/pricing-section";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#070809] text-[#F4F4EF] selection:bg-[#C8FF00] selection:text-[#070809]">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Marquee */}
      <Marquee />

      {/* 3. Problem & Promise */}
      <ProblemPromise />

      {/* 4. Services */}
      <ServicesGrid />

      {/* 5. AI Chatbot Widget Trigger */}
      <ChatbotCtaStrip />

      {/* 6. Pricing (Process strip + Plans + Care list + FAQ) */}
      <PricingSection />

      {/* 7. Final CTA with Inline Step 1 */}
      <FinalCTA />
    </main>
  );
}
