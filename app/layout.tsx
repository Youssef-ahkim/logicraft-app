import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* ── Site-wide constants ── */
const SITE_URL = "https://logicraft-app.vercel.app";
const SITE_NAME = "Logicraft";
const SITE_TITLE = "Logicraft — Launch Your US LLC Today | Company Formation & Business Setup";
const SITE_DESCRIPTION =
  "Logicraft helps international entrepreneurs launch a US LLC in 48 hours. Company formation, EIN, BOI, registered agent, Stripe, PayPal, Wise, Mercury — all handled for you.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/* ── Comprehensive SEO Metadata ── */
export const metadata: Metadata = {
  /* 🔹 Core */
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "US LLC formation",
    "company formation",
    "EIN number",
    "BOI report",
    "registered agent",
    "Stripe setup",
    "PayPal business account",
    "Wise business",
    "Mercury bank",
    "Payoneer business",
    "international business",
    "LLC for non-residents",
    "US business setup",
    "Logicraft",
    "start US company",
    "LLC online",
    "LLC Morocco",
  ],

  /* 🔹 Canonical & Alternates */
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },

  /* 🔹 Open Graph */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Logicraft — Launch Your US LLC Today",
      },
    ],
  },

  /* 🔹 Twitter / X */
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },

  /* 🔹 Robots */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* 🔹 Misc */
  applicationName: SITE_NAME,
  category: "Business Services",
  creator: "Logicraft Agency",
  publisher: "Logicraft Agency",
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  description: SITE_DESCRIPTION,
  email: "logicraftagency@gmail.com",
  telephone: "+212614803118",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates" },
    description: "Worldwide",
  },
  priceRange: "$$",
  sameAs: [
    "https://wa.me/+212614803118",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "US LLC Formation Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Package",
        description: "Company Setup, Registered Agent, EIN Number, BOI Form, US Phone Number",
        price: "1499",
        priceCurrency: "MAD",
      },
      {
        "@type": "Offer",
        name: "Standard Package",
        description: "Everything in Starter plus Mercury, Wise, PayPal, Stripe",
        price: "2499",
        priceCurrency: "MAD",
      },
      {
        "@type": "Offer",
        name: "Premium Package",
        description: "Everything in Standard plus Payoneer and 2× Stripe Accounts",
        price: "3999",
        priceCurrency: "MAD",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen relative overflow-x-hidden bg-[#050510]">
        {/* ── Lightweight Cosmic Background ── */}
        <div className="cosmic-bg" aria-hidden="true" />
        <div className="stars-layer" aria-hidden="true">
          <span />
        </div>
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        <div className="orb orb-3" aria-hidden="true" />

        {/* ── Content Layer ── */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main>
            {children}
            <Services />
            <About />
            <ContactUs />
          </main>
        </div>
      </body>
    </html>
  );
}