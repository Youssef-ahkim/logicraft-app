"use client";

import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowUpRight } from "react-icons/fi";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.1 + 0.4, duration: 0.3 }
    }),
};

export default function About() {
    return (
        <div
            id="about"
            className={`${inter.className} flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-950 px-6 py-20 md:py-24 text-white overflow-hidden`}
        >
            {/* Header Section */}
            <motion.section
                className="w-full max-w-6xl text-center mb-16 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="absolute inset-0 radial-gradient pointer-events-none" />
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 leading-tight">
                    About Us
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-blue-100/90 font-medium">
                    Specializing in streamlined US LLC formation and comprehensive business solutions 
                    for international visionaries.
                </p>
            </motion.section>

            {/* Mission and Offerings */}
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Mission */}
                    <motion.div
                        className="group bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-blue-900/20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariants}
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                                <FiArrowUpRight className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
                                Our Vision
                            </h3>
                            <p className="text-blue-100/85 text-base md:text-lg leading-relaxed font-medium">
                                Redefining international business launch through innovative, 
                                hassle-free establishment processes that transcend borders.
                            </p>
                        </div>
                    </motion.div>

                    {/* Offerings */}
                    <motion.div
                        className="group bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-purple-900/20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariants}
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                                <FiCheckCircle className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">
                                Comprehensive Solutions
                            </h3>
                            <ul className="space-y-4">
                                {["LLC Formation & Registered Agent", "EIN/BOI Setup & Compliance", 
                                "Payment Gateway Solutions", "US Business Accounts"].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-3 text-blue-100/85 font-medium"
                                        custom={i}
                                        variants={listItemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-blue-400"><FiCheckCircle /></span>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Call to Action */}
            <motion.section
                className="mt-20 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <a
                    href="https://wa.me/+212614803118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <Button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-600/30 group">
                        <span className="relative z-10">Launch Your Venture</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                </a>
                <p className="text-sm mt-8 text-blue-200/90 font-medium">
                    Connect with us at{' '}
                    <a
                        href="mailto:logicraftagency@gmail.com"
                        className="underline hover:text-blue-100 transition-colors duration-200"
                    >
                        logicraftagency@gmail.com
                    </a>
                </p>
            </motion.section>
        </div>
    );
}