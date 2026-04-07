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

export const metadata: Metadata = {
  title: "Logicraft — Launch Your US LLC Today",
  description:
    "Logicraft helps you launch a US LLC with company setup, EIN, BOI, registered agent, Stripe, PayPal, Wise, Mercury and more — all in one place.",
  keywords: ["US LLC", "company formation", "EIN", "Stripe setup", "PayPal business", "Logicraft"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
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