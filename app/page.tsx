import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div
      id="home"
      className="h-[89vh] mt-[3rem] sm:mt-[5rem] xl-[5rem] flex flex-col lg:flex-row justify-around items-center bg-gray-100 px-4"
    >
      {/* Section 1 */}
      <section className="flex flex-col justify-center gap-6 items-center w-full lg:w-[45%] h-auto lg:h-[85%] bg-slate-50 rounded-2xl shadow-xl p-6 lg:p-10 text-center mb-6 lg:mb-0">
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
          className="flex items-center justify-center"
        >
          <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 md:py-8 md:px-8 rounded-full shadow-lg text-base md:text-lg transition-all">
            <Image
              className="w-[20px] md:w-[30px] mr-3"
              src="/whatssap.png"
              alt="WhatsApp Icon"
              width={30}
              height={30}
            />
            Contact us
          </Button>
        </a>
      </section>

      {/* Section 2 */}
      <section className="flex flex-wrap justify-center items-center bg-slate-50 w-full lg:w-[45%] h-auto lg:h-[85%] rounded-2xl shadow-xl p-6 lg:p-10">
        <Image
          className="w-[100px] md:w-[150px] lg:w-[200px] m-3 transition-transform duration-500 float-animation-1"
          src="/paypal.png"
          alt="paypal Icon"
          width={1024}
          height={300}
        />
        <Image
          className="w-[100px] md:w-[150px] lg:w-[200px] m-3 transition-transform duration-500 float-animation-2"
          src="/wise.png"
          alt="wise Icon"
          width={1024}
          height={300}
        />
        <Image
          className="w-[100px] md:w-[150px] lg:w-[200px] m-3 transition-transform duration-500 float-animation-3"
          src="/payooner.png"
          alt="payooner Icon"
          width={1024}
          height={300}
        />
        <Image
          className="w-[100px] md:w-[150px] lg:w-[200px] m-3 transition-transform duration-500 float-animation-4"
          src="/woo.png"
          alt="woo Icon"
          width={1024}
          height={300}
        />
        <Image
          className="w-[100px] md:w-[150px] lg:w-[200px] m-3 transition-transform duration-500 float-animation-5"
          src="/mercury.png"
          alt="mercury Icon"
          width={1024}
          height={300}
        />
        <Image
          className="w-[100px] md:w-[150px] lg:w-[200px] m-3 transition-transform duration-500 float-animation-6"
          src="/stripe.png"
          alt="stripe Icon"
          width={1024}
          height={300}
        />
      </section>
    </div>
  );
}