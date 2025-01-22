"use client";

import { Poppins } from 'next/font/google';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

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

export default function Pricing() {
  return (
    <div
      id="services"
      className="min-h-screen flex flex-col justify-center items-center px-5 py-12 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 overflow-hidden"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-14"
      >
        <h1 className={`${poppins.className} text-4xl md:text-5xl font-black text-white mb-4`}>
          Business Packages
        </h1>
        <p className="text-lg text-purple-200 max-w-2xl mx-auto">
          Choose the perfect package to launch your US business with confidence
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative w-full sm:w-[350px] bg-gray-800 rounded-2xl p-8 border-2 border-purple-900/50 hover:border-purple-400 transition-all duration-500 ease-out shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
            whileHover={{
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl" />
            </div>

            {/* Popular ribbon - Changed to index 0 */}
            {index === 0 && (
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-1 rounded-full text-sm font-bold transform rotate-3 shadow-lg">
                Most Popular
              </div>
            )}

            {/* Plan Header */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {plan.price}
                </span>
                <span className="text-lg text-purple-300 line-through">{plan.oldPrice}</span>
              </div>
            </div>

            {/* Features List */}
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-purple-100">
                  <FiCheckCircle className="flex-shrink-0 text-pink-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="https://wa.me/+212614803118"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  } 
                }}
              >
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-6 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
                  Get Started
                </Button>
              </motion.div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center text-purple-300 text-sm"
      >
        Need custom solutions? Contact us at{' '}
        <a
          href="mailto:logicraftagency@gmail.com"
          className="underline decoration-2 underline-offset-4 hover:decoration-pink-400 transition-all duration-300 text-white"
        >
          logicraftagency@gmail.com
        </a>
      </motion.div>
    </div>
  );
}