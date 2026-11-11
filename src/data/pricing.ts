export interface PricingPlan {
  id: "template" | "custom";
  name: string;
  badge?: string;
  priceHeadline: string;
  priceSubline: string;
  monthlyFee: string;
  monthlyNote: string;
  description: string;
  ctaText: string;
  features: string[];
  isFeatured?: boolean;
}

export const processSteps = [
  {
    step: "01",
    title: "Select",
    desc: "Choose a turnkey showroom model or commission custom architecture.",
  },
  {
    step: "02",
    title: "Brand",
    desc: "We configure your timber collections, swatches, pricing, and WhatsApp.",
  },
  {
    step: "03",
    title: "Launch",
    desc: "Your showroom goes live in 5 to 7 days on edge hosting.",
  },
  {
    step: "04",
    title: "Supervise",
    desc: "Monthly care handles hosting, security, and hands-free catalogue changes.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "template",
    name: "Showroom Package",
    badge: "FAST LAUNCH",
    priceHeadline: "₹15,000 – ₹20,000",
    priceSubline: "One-time build & setup",
    monthlyFee: "+ ₹4,000 – ₹5,000 / month",
    monthlyNote: "Ongoing care: hosting, updates, security & 99.9% uptime",
    description: "For furniture showrooms, workshops, and makers wanting a modern, high-converting digital presence fast.",
    ctaText: "Choose Showroom Plan",
    features: [
      "Turnkey showroom storefront ready in 5–7 days",
      "Branded with your logo, timber catalog, and finishes",
      "One-tap WhatsApp direct enquiry routing on every piece",
      "Google Maps local SEO & business profile setup",
      "Mobile-optimized catalog for fast browsing",
      "Optional 24/7 AI showroom assistant add-on",
    ],
    isFeatured: false,
  },
  {
    id: "custom",
    name: "Custom Architecture",
    badge: "BESPOKE",
    priceHeadline: "Request a Quote",
    priceSubline: "Tailored brand architecture",
    monthlyFee: "+ Custom Care Plan",
    monthlyNote: "Dedicated engineering, priority updates & high-traffic SLA",
    description: "Built for multi-city showroom brands, volume manufacturers, and luxury architectural ateliers.",
    ctaText: "Request Custom Quote",
    features: [
      "100% custom UI/UX design tailored to your brand identity",
      "Full 24/7 AI Chatbot trained on your models & delivery zones",
      "Multi-collection filtering (dimensions, wood types, upholstery)",
      "B2B trade discount portals & architect CAD/PDF downloads",
      "Global CDN edge hosting with sub-second speeds",
      "Priority 24-hour turnaround on inventory & banner updates",
    ],
    isFeatured: true,
  },
];

export const monthlyCareIncludes = [
  {
    title: "99.9% Uptime & Hosting",
    desc: "Global edge servers, automated SSL, and round-the-clock monitoring.",
  },
  {
    title: "Hands-Free Updates",
    desc: "Send new photos or price changes on WhatsApp; we push them live within 24h.",
  },
  {
    title: "Local Search Optimization",
    desc: "Monthly tuning so buyers in your city find your showroom first.",
  },
  {
    title: "Security & Backups",
    desc: "Automated vulnerability scans, dependency upgrades, and daily off-site backups.",
  },
];

export const faqItems = [
  {
    question: "What does the monthly care fee cover?",
    answer:
      "It covers ultra-fast cloud hosting, security, backups, and hands-free updates. Whenever you have new pieces, price adjustments, or showroom banners, send them on WhatsApp and we update them.",
  },
  {
    question: "Can I cancel the monthly care plan?",
    answer:
      "Yes, with 30 days notice. If you cancel, we hand over full source code and database backups so your team can self-host.",
  },
  {
    question: "Can I add the AI chatbot later?",
    answer:
      "Yes. You can start with our Showroom Website and add the 24/7 AI Chatbot whenever enquiry volume increases.",
  },
  {
    question: "Who owns my domain, photos, and content?",
    answer:
      "You own 100% of your domain, photography, and brand assets. We engineer and manage the platform, but you retain full legal ownership.",
  },
  {
    question: "How long does it take from start to launch?",
    answer:
      "Showroom websites launch in 5 to 7 days once we receive your product photos and details. Custom builds take 2 to 3 weeks.",
  },
];
