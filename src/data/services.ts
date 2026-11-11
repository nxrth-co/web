export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  tag: string;
  outcomes: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "template-websites",
    num: "01",
    title: "Showroom Website",
    shortDesc: "Fast-launch digital storefront customized with your pieces, finishes, and direct WhatsApp enquiry triggers.",
    tag: "TURNKEY",
    outcomes: ["Live in 5–7 days", "Mobile-first catalog", "WhatsApp routing"],
  },
  {
    id: "custom-websites",
    num: "02",
    title: "Custom Architecture",
    shortDesc: "Bespoke digital presence crafted for multi-city showrooms, furniture manufacturers, and export networks.",
    tag: "BESPOKE",
    outcomes: ["Custom design", "B2B & trade gates", "Sub-second speed"],
  },
  {
    id: "ai-chatbot",
    num: "03",
    title: "AI Showroom Concierge",
    shortDesc: "24/7 assistant trained on your furniture dimensions, timber polishes, stock, and delivery zones.",
    tag: "AUTOMATION",
    outcomes: ["Instant answers", "Zero lost inquiries", "Qualified leads"],
  },
  {
    id: "maintenance",
    num: "04",
    title: "Monitoring & Maintenance",
    shortDesc: "Continuous supervision, edge hosting, security hardening, and hands-free monthly catalogue updates.",
    tag: "SUPERVISED",
    outcomes: ["99.9% uptime", "Monthly updates", "Zero maintenance headache"],
  },
];
