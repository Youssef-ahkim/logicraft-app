"use client"

import { Inter, Roboto } from 'next/font/google';
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Pricing() {
  const textRef = useRef(null);
  const pricingRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger the animation when 10% of the element is visible
    };

    const handleIntersection = (entries: any[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideIn');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    pricingRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      pricingRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const pricingPlans = [
    {
      name: "Basic",
      price: "2499 Dh",
      oldPrice: "4500 Dh",
      features: [
        "We Set Up Your Company",
        "Registered Agent",
        "EIN Number",
        "BOI Form",
        "US Phone Number",
        "Stripe Account",
        "PayPal Business",
        "Wise Business",
        "Mercury Business",
        "Payoneer Business",
      ],
    },
    {
      name: "Standard",
      price: "3999 Dh",
      oldPrice: "6000 Dh",
      features: [
        "We Set Up Your Company",
        "Registered Agent",
        "EIN Number",
        "BOI Form",
        "US Phone Number",
        "Payoneer Business",
        "PayPal Business",
        "Wise Business",
        "Mercury Business",
        "2 Stripes",
        "WordPress Store Set Up",
      ],
    },
  ];

  return (
    <div
      id="services"
      className={`${inter.className} mt-8 min-h-screen xl:h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-5 py-12 overflow-hidden`}
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
        <div ref={textRef} className={`${roboto.className} text-left md:w-1/2 opacity-0 transform -translate-x-20 transition-all duration-1000 ease-out`}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 drop-shadow-md">
            Start Your Business Today
            <br />
            With Our All-Inclusive Packages!
          </h1>
          <p className="text-lg md:text-xl text-white mb-4 md:mb-5 drop-shadow-sm">
            Support available 24/7 at <strong>0684449361</strong>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center md:w-1/2">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              ref={el => pricingRefs.current[index] = el}
              className="relative hover:scale-105 bg-white w-full sm:w-[45%] max-w-[400px] p-6 md:p-7 rounded-3xl shadow-2xl transform opacity-0 translate-x-20 transition-all duration-1000 ease-out"
            >
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-3">
                  {plan.name}
                </h2>
                <div className="text-center mb-3">
                  <p className="text-3xl md:text-4xl font-extrabold text-gray-900">{plan.price}</p>
                  <p className="text-lg text-gray-500 line-through">{plan.oldPrice}</p>
                </div>
                <ul className="mb-3 space-y-2 md:space-y-3">
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
                <div className="flex justify-center">
                  <a
                    href="https://wa.me/+212614803118"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                  >
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 md:py-2.5 md:px-7 rounded-full shadow-lg text-lg transition-all">
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-slideIn {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </div>
  );
}