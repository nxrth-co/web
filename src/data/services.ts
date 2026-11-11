export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "template",
    title: "Template Website",
    desc: "Pick a ready-made template customized with your products, logo and WhatsApp button.",
  },
  {
    id: "custom",
    title: "Custom Website",
    desc: "Designed from scratch for your brand with an AI assistant trained on your catalogue.",
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    desc: "Answers customer questions about size, price and delivery 24/7.",
  },
  {
    id: "monthly-care",
    title: "Monthly Care",
    desc: "Covers hosting, security, backups and updates within 24 hours.",
  },
];

