export interface ClientProject {
  id: string;
  name: string;
  category: string;
  location: string;
  url: string;
  displayUrl: string;
  tagline: string;
  description: string;
  results: string[];
  metrics: { label: string; value: string };
  timberFocus: string;
  year: string;
}

export const clientProjects: ClientProject[] = [
  {
    id: "jeet-furniture",
    name: "Jeet Furniture",
    category: "Solid Teak & Bespoke Living",
    location: "Surat, Gujarat",
    url: "https://www.jeetfurniture.com/",
    displayUrl: "jeetfurniture.com",
    tagline: "Artisanal solid teak living, dining & master bedroom collections.",
    description:
      "A complete digital showroom crafted for Jeet Furniture. High-definition product showcases, tactile wood-grain details, direct WhatsApp catalogue inquiries, and local Google Maps search visibility.",
    results: [
      "Zero-latency image loading with next-gen compression",
      "One-tap WhatsApp routing for high-ticket dining & sofa inquiries",
      "Local Google Search top-3 ranking for solid teak furniture in Surat",
      "Seamless mobile experience designed for on-the-go homeowners",
    ],
    metrics: { label: "WhatsApp Enquiries", value: "+180%" },
    timberFocus: "Burma Teak · Sheesham · Natural Oak",
    year: "2026",
  },
  {
    id: "best-furniture",
    name: "Best Furniture Store",
    category: "Modern Living & Modular Showroom",
    location: "Mumbai, Maharashtra",
    url: "https://www.bestfurniture.store/",
    displayUrl: "bestfurniture.store",
    tagline: "Contemporary home furniture, ergonomic workspaces & custom upholstery.",
    description:
      "An editorial digital storefront built for Best Furniture Store. Engineered to convert casual browsers into showroom visits through streamlined category navigation, fabric swatch previews, and instant direct messaging.",
    results: [
      "Ultra-minimal digital catalog layout highlighting craftsmanship",
      "Integrated 24/7 AI enquiry filters to qualify buyer intent",
      "Sub-second page speeds across mobile and 4G networks",
      "Showroom footfall attribution tracking with WhatsApp integration",
    ],
    metrics: { label: "Showroom Footfall", value: "+135%" },
    timberFocus: "Engineered Wood · American Walnut · Matte Ash",
    year: "2026",
  },
];
