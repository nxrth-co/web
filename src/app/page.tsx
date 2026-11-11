import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AIAssistantSection } from "@/components/sections/ai-assistant-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#070809] text-[#F4F4EF] selection:bg-[#C8FF00] selection:text-[#070809]">
      {/* 1. HERO */}
      <Hero />

      {/* 2. STATEMENT */}
      <Statement />

      {/* 3. WORK */}
      <ProjectsSection />

      {/* 4. AI ASSISTANT */}
      <AIAssistantSection />

      {/* 5. HOW IT WORKS */}
      <HowItWorksSection />

      {/* 6. PRICING */}
      <PricingSection />

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. FINAL CTA */}
      <FinalCTA />
    </main>
  );
}
