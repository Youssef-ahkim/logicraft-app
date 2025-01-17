import { Inter } from 'next/font/google';
import { Button } from "@/components/ui/button";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Pricing() {
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
      className={`${inter.className} mt-[2rem] min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-6 py-16`}
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
            Start Your Business Today
            <br />
            With Our All-Inclusive Packages!
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-sm">
            Support available 24/7 at <strong>0684449361</strong>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 items-center md:w-1/2">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white w-full sm:w-[45%] max-w-[400px] p-8 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-30 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">
                  {plan.name}
                </h2>
                <div className="text-center mb-6">
                  <p className="text-5xl font-extrabold text-gray-900">{plan.price}</p>
                  <p className="text-lg text-gray-500 line-through">{plan.oldPrice}</p>
                </div>
                <ul className="mb-6 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-lg text-gray-700"
                    >
                      <span className="text-green-500">✔</span> {feature}
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
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg text-lg transition-all">
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
