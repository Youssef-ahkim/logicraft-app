"use client";

import { useEffect, useRef } from "react";
import { FiCheckCircle } from "react-icons/fi";

type PricingPlan = {
  name: string;
  price: string;
  oldPrice: string;
  tag?: string;
  accent: string;
  features: string[];
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "1,499 Dh",
    oldPrice: "2,000 Dh",
    accent: "from-indigo-500 to-blue-500",
    features: [
      "Company Setup",
      "Registered Agent",
      "EIN Number",
      "BOI Form",
      "US Phone Number",
    ],
  },
  {
    name: "Standard",
    price: "2,499 Dh",
    oldPrice: "4,000 Dh",
    tag: "Most Popular",
    accent: "from-violet-500 to-purple-600",
    features: [
      "Company Setup",
      "Registered Agent",
      "EIN Number",
      "BOI Form",
      "US Phone Number",
      "Mercury Business",
      "Wise Business",
      "PayPal Business",
      "Stripe Account",
    ],
  },
  {
    name: "Premium",
    price: "3,999 Dh",
    oldPrice: "6,000 Dh",
    accent: "from-pink-500 to-rose-600",
    features: [
      "Company Setup",
      "Registered Agent",
      "EIN Number",
      "BOI Form",
      "US Phone Number",
      "Payoneer Business",
      "Mercury Business",
      "Wise Business",
      "PayPal Business",
      "2× Stripe Accounts",
    ],
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const ref = useReveal();
  const isPopular = !!plan.tag;

  return (
    <div
      ref={ref}
      className="reveal relative flex flex-col w-full sm:max-w-[340px] overflow-hidden rounded-2xl shine-border"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Glow ring for popular */}
      {isPopular && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-0"
          style={{ boxShadow: "0 0 0 1.5px rgba(167,139,250,0.5), 0 0 50px rgba(139,92,246,0.2)" }}
        />
      )}

      {/* Card inner */}
      <div className={`relative z-10 flex flex-col h-full glass-card glass-card-hover p-7 sm:p-8`}>
        {/* Popular badge */}
        {plan.tag && (
          <div className="popular-badge absolute -top-px right-6 px-3 py-1 text-white rounded-b-lg font-bold tracking-wider z-20">
            {plan.tag}
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          {/* Accent dot line */}
          <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${plan.accent} mb-4`} />
          <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
          <div className="flex items-end gap-2">
            <span className={`text-4xl font-black bg-gradient-to-r ${plan.accent} bg-clip-text text-transparent`}>
              {plan.price}
            </span>
            <span className="text-slate-400 line-through text-sm mb-1">{plan.oldPrice}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-2.5 mb-8 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-slate-300 text-sm">
              <FiCheckCircle className="shrink-0 text-purple-400 w-4 h-4" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/+212614803118"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <button
            className={`w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${plan.accent} 
              hover:opacity-90 hover:shadow-lg transition-all duration-200 active:scale-[0.98]`}
          >
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const titleRef = useReveal();
  const bottomRef = useReveal();

  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      {/* Section header */}
      <div ref={titleRef} className="reveal text-center mb-16 max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400 mb-3">Pricing</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Business{" "}
          <span className="gradient-text">Packages</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Choose the perfect plan to launch your US business with confidence.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-2">
        {pricingPlans.map((plan, i) => (
          <PricingCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>

      {/* Bottom note */}
      <div ref={bottomRef} className="reveal text-center mt-14 delay-300">
        <p className="text-slate-400 text-sm">
          Need custom solutions?{" "}
          <a
            href="mailto:logicraftagency@gmail.com"
            className="text-purple-300 hover:text-white underline underline-offset-4 transition-colors duration-200"
          >
            logicraftagency@gmail.com
          </a>
        </p>
      </div>

      <div className="section-divider mt-16" />
    </section>
  );
}