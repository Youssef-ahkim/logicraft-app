'use client'

import { Inter, Open_Sans } from 'next/font/google';
import { Button } from "@/components/ui/button";
import Image from "next/image";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
});

const services = [
  { src: '/paypal.png', alt: 'PayPal Icon' },
  { src: '/wise.png', alt: 'Wise Icon' },
  { src: '/payooner.png', alt: 'Payoneer Icon' },
  { src: '/woo.png', alt: 'WooCommerce Icon' },
  { src: '/mercury.png', alt: 'Mercury Icon' },
  { src: '/stripe.png', alt: 'Stripe Icon' },
];

export default function Home() {
  return (
    <div
      id="home"
      className={`${inter.variable} ${openSans.variable} pt-5  overflow-hidden h-[89vh] flex flex-col lg:flex-row justify-evenly items-center gap-[2%] bg-gradient-to-br  px-4`}
    >
      {/* Section 1 */}
      <section

        className="animate-slideInL flex flex-col justify-evenly  items-center w-full lg:w-[45%] h-auto lg:h-[85%] bg-gray-800/80 rounded-2xl backdrop-blur-lg shadow-2xl p-6 lg:p-10 text-center lg:mb-0"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent leading-tight mb-6">
          Launch Your US<br />
          LLC Today
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed">
          We Set Up Your Company <span className="font-bold text-purple-300">+</span> Registered Agent <span className="font-bold text-purple-300">+</span> EIN Number <span className="font-bold text-purple-300">+</span> BOI Form <span className="font-bold text-purple-300">+</span> US Phone Number <span className="font-bold text-purple-300">+</span> Stripe Account <span className="font-bold text-purple-300">+</span> PayPal Business <span className="font-bold text-purple-300">+</span> Wise Business <span className="font-bold text-purple-300">+</span> Mercury Business <span className="font-bold text-purple-300">+</span> Payoneer Business
        </p>
        <a
          href="https://wa.me/+212614803118"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 px-6 md:py-8 md:px-8 rounded-full shadow-lg text-base md:text-lg">
            <Image
              className="w-6 md:w-8 mr-2"
              src="/whatssap.png"
              alt="WhatsApp Icon"
              width={32}
              height={32}
              priority
            />
            <span>Contact us</span>
          </Button>
        </a>
      </section>

{/* Section 2 - CSS animated version */}
<section
  className="animate-slideInR grid grid-cols-2 gap-3 sm:gap-5 bg-gray-800/80 backdrop-blur-lg w-full lg:w-[45%] h-auto lg:h-[85%] rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8"
>
  {services.map((image, index) => (
    <div
      key={index}
      className=" p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl backdrop-blur-sm border-2 border-blue-200/20 flex items-center justify-center"
    >
      <Image
        className="w-full max-w-[100px] sm:max-w-[130px] md:max-w-[160px] lg:max-w-[200px]"
        src={image.src}
        alt={image.alt}
        width={1024}
        height={300}
        loading="lazy"
      />
    </div>
  ))}
</section>
    </div>
  );
}