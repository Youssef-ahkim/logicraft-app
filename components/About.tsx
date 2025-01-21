"use client";

import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export default function About() {
    return (
        <div
            id="about"
            className={`${inter.className} flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 px-6 py-12 text-white`}
        >
            {/* Header Section */}
            <motion.section
                className="w-full max-w-5xl text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={sectionVariants}
            >
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-gray-50">
                    About Us
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    We specialize in creating US-based LLCs and providing robust business
                    solutions for entrepreneurs. Whether you{"'"}re dealing with payment
                    gateway issues or need reliable business accounts, we’ve got you
                    covered.
                </p>
            </motion.section>

            {/* Mission and Offerings */}
            <motion.section
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                variants={sectionVariants}
            >
                {/* Mission */}
                <div className=" bg-white p-8 rounded-xl shadow-xl transition-transform transform xl:hover:scale-105 lg:hover:scale-105 md:hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                    <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4">
                        Our Mission
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg">
                        Our mission is to simplify setting up and managing your US business
                        while empowering entrepreneurs to succeed in a global marketplace.
                    </p>
                </div>

                {/* Offerings */}
                <div className="bg-white p-8 rounded-xl shadow-xl transition-transform transform xl:hover:scale-105 lg:hover:scale-105 md:hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                    <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4">
                        What We Offer
                    </h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 text-base md:text-lg">
                        <li>LLC Formation</li>
                        <li>Registered Agent Services</li>
                        <li>EIN Number Setup</li>
                        <li>BOI Form Assistance</li>
                        <li>US Phone Number Registration</li>
                        <li>Stripe, PayPal, Wise, and Mercury Accounts</li>
                    </ul>
                </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
                className="mt-12 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                variants={sectionVariants}
            >
                <a
                    href="https://wa.me/+212614803118"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                >
                    <Button className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-8 rounded-full shadow-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                        Contact Us
                    </Button>
                </a>
                <p className="text-sm mt-4">
                    Or email us at{" "}
                    <a
                        href="mailto:info@yourbusiness.com"
                        className="text-yellow-300 underline hover:text-yellow-500 transition-all duration-200"
                    >
                        logicraftagency@gmail.com
                    </a>
                </p>
            </motion.section>
        </div>
    );
}
