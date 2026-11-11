export interface TemplateItem {
  id: string;
  name: string;
  category: "Modern" | "Classic" | "Minimal" | "Luxury";
  description: string;
  tagline: string;
  accentColor: string;
  woodTone: string;
  features: string[];
}

export const templatesData: TemplateItem[] = [
  {
    id: "aurora",
    name: "Aurora",
    category: "Modern",
    tagline: "Sleek curves, architectural silhouettes, and gallery viewports.",
    description: "Designed for contemporary furniture studios, modular sofas, and urban interior boutiques.",
    accentColor: "#C8FF00",
    woodTone: "Smoked Ash & Cast Bronze",
    features: ["Bespoke dimensions modal", "Instant fabric swatch selector", "WhatsApp catalog sync"],
  },
  {
    id: "heritage",
    name: "Heritage",
    category: "Classic",
    tagline: "Timeless warmth, artisanal joinery, and rich wood grain focus.",
    description: "Engineered for solid teak, sheesham wood craftsmen, antique dealers, and heritage workshop showrooms.",
    accentColor: "#D4AF37",
    woodTone: "Burnt Teak & Brushed Brass",
    features: ["Storytelling craftsmanship timeline", "Grain-detail zoom preview", "Custom timber consultation form"],
  },
  {
    id: "mono",
    name: "Mono",
    category: "Minimal",
    tagline: "Maximum restraint, quiet luxury, and stark monochrome typography.",
    description: "Tailored for Scandinavian-inspired lines, architect-designed pieces, and high-concept living.",
    accentColor: "#FFFFFF",
    woodTone: "Nordic Birch & Matte Charcoal",
    features: ["Zero-distraction white glove layout", "Architect spec sheet download", "High-res tactile lookbook"],
  },
  {
    id: "sovereign",
    name: "Sovereign",
    category: "Luxury",
    tagline: "Deep velvet textures, marble highlights, and private-viewing allure.",
    description: "Built for bespoke luxury ateliers, custom estate furniture, and VIP interior designer portals.",
    accentColor: "#E2C391",
    woodTone: "Italian Walnut & Calacatta Gold",
    features: ["VIP private consultation gate", "White-glove enquiry concierge", "Curated room-set lookbooks"],
  },
];

