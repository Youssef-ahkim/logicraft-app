"use client";

import { useEffect, useRef } from "react";
import { FiCheckCircle, FiZap, FiGlobe, FiShield } from "react-icons/fi";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold, rootMargin: "-30px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const stats = [
  { icon: FiZap,    value: "48h",  label: "Average setup time" },
  { icon: FiGlobe,  value: "50+",  label: "Countries served"   },
  { icon: FiShield, value: "100%", label: "Success rate"       },
];

const offerings = [
  "LLC Formation & Registered Agent",
  "EIN / BOI Setup & Compliance",
  "Payment Gateway Solutions",
  "US Business Banking",
];

export default function About() {
  const titleRef  = useReveal();
  const statsRef  = useReveal();
  const visionRef = useReveal();
  const offerRef  = useReveal();
  const ctaRef    = useReveal();

  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Section header */}
      <div ref={titleRef} className="reveal text-center mb-16 max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400 mb-3">About Us</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Why{" "}
          <span className="gradient-text">Logicraft?</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Specializing in streamlined US LLC formation and comprehensive business solutions
          for international entrepreneurs.
        </p>
      </div>

      {/* Stats row */}
      <div ref={statsRef} className="reveal delay-100 flex flex-wrap justify-center gap-5 mb-16 max-w-3xl mx-auto">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="glass-card glass-card-hover p-6 flex-1 min-w-[160px] max-w-[220px] text-center">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
              <Icon className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-3xl font-black gradient-text mb-1">{value}</p>
            <p className="text-xs text-slate-400 font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Two column cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        {/* Vision */}
        <div ref={visionRef} className="reveal reveal-left glass-card glass-card-hover p-8">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
            <FiGlobe className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
          <p className="text-slate-400 leading-relaxed">
            Redefining international business launch through innovative, hassle-free
            establishment processes that transcend borders — so you can focus on building,
            not bureaucracy.
          </p>
        </div>

        {/* Offerings */}
        <div ref={offerRef} className="reveal reveal-right glass-card glass-card-hover p-8" style={{ transitionDelay: "0.1s" }}>
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
            <FiCheckCircle className="w-5 h-5 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">What We Handle</h3>
          <ul className="flex flex-col gap-3">
            {offerings.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                  <FiCheckCircle className="w-3 h-3 text-purple-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="reveal delay-200 text-center">
        <a
          href="https://wa.me/+212614803118"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="btn-primary btn-whatsapp py-4 px-10 text-base">
            <span>Launch Your Venture →</span>
          </button>
        </a>
        <p className="mt-5 text-slate-500 text-sm">
          Or email us at{" "}
          <a
            href="mailto:logicraftagency@gmail.com"
            className="text-purple-400 hover:text-purple-200 transition-colors duration-200 underline underline-offset-4"
          >
            logicraftagency@gmail.com
          </a>
        </p>
      </div>

      <div className="section-divider mt-16" />
    </section>
  );
}