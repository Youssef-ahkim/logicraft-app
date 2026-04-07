'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

const services = [
  { src: '/paypal.png',   alt: 'PayPal'      },
  { src: '/wise.png',     alt: 'Wise'        },
  { src: '/payooner.png', alt: 'Payoneer'    },
  { src: '/woo.png',      alt: 'WooCommerce' },
  { src: '/mercury.png',  alt: 'Mercury'     },
  { src: '/stripe.png',   alt: 'Stripe'      },
];

const highlights = [
  'Company Setup',
  'Registered Agent',
  'EIN Number',
  'BOI Report',
  'US Phone Number',
  'Stripe · PayPal · Wise · Mercury',
];

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-6 py-20 lg:py-12 overflow-hidden"
    >
      {/* ── Left Column ─────────────────────────────────────────── */}
      <div className="hero-fade-left anim-delay-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-xl">
        {/* Badge */}
        <div className="hero-fade-up anim-delay-2 inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass-card badge-pulse border border-purple-500/30">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-purple-200 tracking-wide">Now accepting new clients</span>
        </div>

        {/* Headline */}
        <h1 className="hero-fade-up anim-delay-2 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
          <span className="gradient-text">Launch Your</span>
          <br />
          <span className="text-white">US LLC</span>
          <br />
          <span className="gradient-text-warm">Today.</span>
        </h1>

        {/* Sub copy */}
        <p className="hero-fade-up anim-delay-3 text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
          Everything you need to operate globally — company formation, banking, and payment gateways, all handled for you.
        </p>

        {/* Feature chips */}
        <ul className="hero-fade-up anim-delay-4 flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-purple-200 bg-purple-900/30 border border-purple-700/30"
            >
              <svg className="w-3 h-3 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {h}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hero-fade-up anim-delay-5 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
          <a
            href="https://wa.me/+212614803118"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-primary btn-whatsapp text-base px-7 py-6 rounded-full font-semibold shadow-lg">
              <span className="flex items-center gap-2">
                <Image
                  src="/whatssap.png"
                  alt="WhatsApp"
                  width={22}
                  height={22}
                  className="brightness-0 invert"
                  priority
                />
                <span>Chat on WhatsApp</span>
              </span>
            </Button>
          </a>
          <a href="#services">
            <Button
              variant="outline"
              className="text-base px-7 py-6 rounded-full font-semibold border-purple-600/50 text-purple-200 bg-transparent hover:bg-purple-900/30 hover:text-white transition-all duration-200"
            >
              View Packages
            </Button>
          </a>
        </div>
      </div>

      {/* ── Right Column — Payment logos grid ───────────────────── */}
      <div className="hero-fade-right anim-delay-3 w-full max-w-md">
        <div className="glass-card p-6 sm:p-8">
          <p className="text-center text-xs font-semibold tracking-widest text-purple-400 uppercase mb-5">
            Supported Platforms
          </p>
          <div className="grid grid-cols-3 gap-3">
            {services.map((img) => (
              <div key={img.alt} className="logo-card aspect-video min-h-[70px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={140}
                  height={60}
                  className="w-full h-auto object-contain max-h-[55px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Trust line */}
          <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            100% Secure &amp; Guaranteed Setup
          </div>
        </div>
      </div>
    </section>
  );
}