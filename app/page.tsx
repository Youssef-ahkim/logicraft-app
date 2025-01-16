import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div
      id="home"
      className="h-[89vh] mt-[3rem] sm:mt-[5rem] xl-[5rem]  flex flex-col lg:flex-row justify-around items-center bg-gray-100 px-4"
    >
      {/* Section 1 */}
      <section className="flex flex-col justify-center gap-6 items-center w-full lg:w-[45%] h-auto lg:h-[85%] bg-slate-50 rounded-2xl shadow-xl p-6 lg:p-10 text-center mb-6 lg:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Launch Your US <br />
          LLC Today
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
          Formation + EIN + US Address + Registered Agent Service
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
      <section className="flex justify-center items-center bg-slate-50 w-full lg:w-[45%] h-auto lg:h-[85%] rounded-2xl shadow-xl">
        {/* Add content here for the second section */}
      </section>
    </div>
  );
}
