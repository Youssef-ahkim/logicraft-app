import { Inter } from 'next/font/google';
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import Image from "next/image";

// Load the Google Font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // Optional: Add specific font weights
});

export default function Home() {
  return (
    <div
      id="home"
      className={`${inter.className} h-[89vh] mt-[7rem] xl:mt-[5rem] lg:mt-[5rem] md:mt-[4rem] flex flex-col lg:flex-row justify-center items-center gap-[2%] bg-gray-100 px-4`}
    >
      {/* Section 1 */}
      <section className="flex flex-col justify-evenly sm:justify-center items-center w-full lg:w-[45%] h-auto lg:h-[85%] bg-slate-50 rounded-2xl shadow-xl p-6 lg:p-10 text-center lg:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Launch Your US <br />
          LLC Today
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
          We Set Up Your Company <span className="font-bold">+</span> Registered Agent <span className="font-bold">+</span> EIN Number <span className="font-bold">+</span> BOI Form <span className="font-bold">+</span> US Phone Number <span className="font-bold">+</span> Stripe Account <span className="font-bold">+</span> PayPal Business <span className="font-bold">+</span> Wise Business <span className="font-bold">+</span> Mercury Business <span className="font-bold">+</span> Payoneer Business
        </p>
        <a
          href="https://wa.me/+212614803118"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="flex items-center justify-center"
        >
          <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 md:py-8 md:px-8 rounded-full shadow-lg text-base md:text-lg transition-all">
            <Image
              className="w-[20px] md:w-[30px] mr-3"
              src="/whatssap.png"
              alt="WhatsApp Icon"
              width={30}
              height={30}
              priority
            />
            Contact us
          </Button>
        </a>
      </section>

      {/* Section 2 */}
      <section className="flex flex-wrap justify-center items-center bg-slate-50 w-full lg:w-[45%] h-auto lg:h-[85%] rounded-2xl shadow-xl p-6 lg:p-10">
        {[
          { src: '/paypal.png', alt: 'PayPal Icon' },
          { src: '/wise.png', alt: 'Wise Icon' },
          { src: '/payooner.png', alt: 'Payoneer Icon' },
          { src: '/woo.png', alt: 'WooCommerce Icon' },
          { src: '/mercury.png', alt: 'Mercury Icon' },
          { src: '/stripe.png', alt: 'Stripe Icon' },
        ].map((image, index) => (
          <Image
            key={index}
            className={`w-[100px] md:w-[150px] lg:w-[200px] m-3 transition-transform duration-500 float-animation-1`}
            src={image.src}
            alt={image.alt}
            width={1024}
            height={300}
            loading="lazy"
          />
        ))}
      </section>
    </div>
  );
}