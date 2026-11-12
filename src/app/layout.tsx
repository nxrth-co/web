import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StartFlowProvider } from "@/context/start-flow-context";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { PillNav } from "@/components/ui/pill-nav";
import { Footer } from "@/components/ui/footer";
import { ChatbotWidget } from "@/components/ui/chatbot-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nxrth.co"),
  title: "NXRTH — Websites & AI for Furniture Showrooms & Manufacturers",
  description:
    "NXRTH builds fast, editorial, AI-powered digital storefronts for furniture showrooms, workshops, and manufacturers. Turn searchers into WhatsApp showroom visits.",
  keywords: [
    "furniture showroom website",
    "furniture website agency",
    "AI chatbot for furniture",
    "furniture manufacturer digital catalog",
    "teak wood furniture online",
    "interior showroom web design",
  ],
  authors: [{ name: "NXRTH Studio", url: "https://nxrth.co" }],
  creator: "NXRTH",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nxrth.co",
    siteName: "NXRTH",
    title: "NXRTH — Websites that move furniture.",
    description:
      "Fast, beautiful, AI-powered websites for furniture brands. Drive more footfall and high-ticket WhatsApp enquiries.",
    images: [
      {
        url: "/brand/nxrth-logo.png",
        width: 1038,
        height: 148,
        alt: "NXRTH Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NXRTH — Websites that move furniture.",
    description: "Web & AI agency for furniture brands, showrooms, and workshops.",
    images: ["/brand/nxrth-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nxrth.co/#organization",
      name: "NXRTH",
      alternateName: "North Web & AI Studio",
      url: "https://nxrth.co",
      logo: "https://nxrth.co/brand/nxrth-logo.png",
      sameAs: ["https://wa.me/919327051284"],
      email: "hey@nxrth.co",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+91-9327051284",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://nxrth.co/#service",
      name: "NXRTH Showroom Systems",
      url: "https://nxrth.co",
      serviceType: "Web Design, Development & AI Chatbot Integration for Furniture Brands",
      provider: {
        "@id": "https://nxrth.co/#organization",
      },
      areaServed: ["India", "United Arab Emirates", "United Kingdom", "United States", "Global"],
      priceRange: "₹15,000 - ₹50,000+",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />
        <meta name="theme-color" content="#070809" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#070809] text-[#F4F4EF] overflow-x-hidden">
        {/* Google Tag Manager / Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-MQ3MPX5J"
          strategy="afterInteractive"
        />
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
        <StartFlowProvider>
          <SmoothScroll>
            <CustomCursor />
            <div className="grain-overlay" aria-hidden="true" />
            <PillNav />
            {children}
            <Footer />
            <ChatbotWidget />
          </SmoothScroll>
        </StartFlowProvider>
      </body>
    </html>
  );
}
