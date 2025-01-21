"use client";

import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});



export default function Pricing() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const pricingRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideIn');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Copy ref values to variables inside the effect
    const currentTextRef = textRef.current;
    const currentPricingRefs = pricingRefs.current;

    if (currentTextRef) {
      observer.observe(currentTextRef);
    }

    currentPricingRefs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (currentTextRef) {
        observer.unobserve(currentTextRef);
      }
      currentPricingRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const pricingPlans = [
    {
      name: "Basic",
      price: "2499 Dh",
      oldPrice: "4000 Dh",
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
      name: "Standard",
      price: "3999 Dh",
      oldPrice: "6000 Dh",
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
        "2 Stripes",
      ],
    },
  ];

  return (
    <div
      id="services"
      className={`${inter.className}  pt-4 pb-12 min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700  overflow-hidden`}

    >
      <div className="w-full text-center mb-10">
        <h1
          ref={textRef}
          className={`${poppins.className} text-4xl md:text-6xl font-black tracking-tight text-white opacity-0 transform -translate-y-10 transition-all duration-1000 ease-out`}
        >
          BUSINESS PACKAGES
        </h1>

      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) {
                pricingRefs.current[index] = el;
              }
            }}
            className="relative bg-white w-full sm:w-[300px] max-w-[400px] p-6 md:p-7 rounded-3xl shadow-2xl transform opacity-0 translate-x-10 transition-all duration-1000"
          >
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-3">
                {plan.name}
              </h2>
              <div className="text-center mb-3">
                <p className="text-3xl md:text-4xl font-extrabold text-gray-900">{plan.price}</p>
                <p className="text-lg text-gray-500 line-through">{plan.oldPrice}</p>
              </div>
              <ul className="mb-3 space-y-2 md:space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-base md:text-lg text-gray-700"
                  >
                    <span className="text-green-500" aria-hidden="true">✔</span>
                    <span className="sr-only">Feature:</span>{feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-auto">
                <a
                  href="https://wa.me/+212614803118"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp"
                >
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-2 px-6 md:py-2.5 md:px-7 rounded-full shadow-lg text-lg transition-all">
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-slideIn {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
