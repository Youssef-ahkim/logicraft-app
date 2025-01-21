"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const mailtoLink = `mailto:logicraftagency@gmail.com?subject=Contact%20Us&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      id="contact-us"
      className={`${inter.className} h-screen flex flex-col justify-between items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8`}
    >
      {/* Header Section */}
      <motion.section
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={sectionVariants}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          We{"'"}re here to help you with any questions or concerns.
        </p>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={sectionVariants}
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full border min-h-[8rem] max-h-[8rem] h-[8rem] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Send Message
            </Button>
          </div>
        </form>
      </motion.section>

      {/* Footer Section */}
      <motion.section
        className="text-center mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={sectionVariants}
      >
        <p className="text-sm text-gray-200">
          Or email us directly at{" "}
          <a
            href="mailto:logicraftagency@gmail.com"
            className="text-yellow-300 underline hover:text-yellow-500 transition-all duration-200"
          >
            info@yourbusiness.com
          </a>
        </p>
      </motion.section>
    </div>
  );
}