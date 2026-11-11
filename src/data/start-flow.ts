export interface StepOption {
  id: string;
  label: string;
  icon?: string;
  desc?: string;
}

export const step1Options: StepOption[] = [
  { id: "template-website", label: "Showroom website", desc: "Turnkey digital storefront" },
  { id: "custom-website", label: "Custom website", desc: "Bespoke digital architecture" },
  { id: "ai-chatbot", label: "AI showroom assistant", desc: "24/7 automated inquiry qualification" },
  { id: "maintenance", label: "Monitoring & maintenance", desc: "Uptime, speed, and monthly updates" },
  { id: "not-sure", label: "Not sure yet", desc: "Help me choose the right path" },
];

export const step2Goals: StepOption[] = [
  { id: "local-customers", label: "Get more local customers", desc: "Drive footfall to our physical showroom" },
  { id: "online-enquiries", label: "Get more online enquiries", desc: "Receive direct WhatsApp quotes every day" },
  { id: "pan-india", label: "Sell across India / globally", desc: "Reach luxury architects & buyers nationwide" },
  { id: "modernise-brand", label: "Modernise my brand", desc: "Establish an elevated, premium presence" },
];

export const step3Businesses: StepOption[] = [
  { id: "retail-showroom", label: "Furniture showroom / retail shop" },
  { id: "workshop-manufacturer", label: "Manufacturer / workshop" },
  { id: "online-seller", label: "Online-first seller" },
  { id: "designer-dealer", label: "Interior designer / dealer" },
];

export const cityChips = [
  "Surat",
  "Mumbai",
  "Ahmedabad",
  "Delhi NCR",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Jaipur",
  "Chennai",
  "Kolkata",
];

export const step5LaunchTimings: StepOption[] = [
  { id: "asap", label: "As soon as possible", desc: "Ready to launch within 1–2 weeks" },
  { id: "this-month", label: "This month", desc: "Planning to start in the next 3–4 weeks" },
  { id: "exploring", label: "Just exploring", desc: "Gathering information and quotes" },
];

export const countryCodes = [
  { code: "+91", country: "IN", name: "India" },
  { code: "+971", country: "AE", name: "UAE" },
  { code: "+1", country: "US", name: "USA / Canada" },
  { code: "+44", country: "GB", name: "UK" },
  { code: "+61", country: "AU", name: "Australia" },
  { code: "+65", country: "SG", name: "Singapore" },
];

