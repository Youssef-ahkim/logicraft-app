"use client";

import { Inter, Space_Grotesk } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiMail, FiPhone, FiArrowRight } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] });

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const validateForm = () => {
    const newErrors = {
      name: !name.trim(),
      email: !/^\S+@\S+\.\S+$/.test(email),
      message: !message.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const mailtoLink = `mailto:logicraftagency@gmail.com?subject=Contact%20Us&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className={`${inter.className} xl:p-20 min-h-screen flex items-center relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-800/20 rounded-full mix-blend-screen blur-3xl opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 right-0 w-96 h-96 bg-indigo-800/20 rounded-full mix-blend-screen blur-3xl opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-800/80 rounded-3xl shadow-2xl overflow-hidden border border-purple-900/50 backdrop-blur-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Panel */}
          <div className="bg-gradient-to-br from-purple-900/80 to-indigo-900/80 p-8 lg:p-12 text-purple-100 relative">
            <div className="absolute inset-0 opacity-10 bg-noise-pattern" />
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className={`${spaceGrotesk.className} text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 leading-tight`}>
                Let{"'"}s Build<br />Something Great
              </h2>
              <div className="space-y-6 lg:space-y-8">
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-purple-900/50 rounded-xl backdrop-blur-sm border border-purple-800/50">
                    <FiMail className="text-xl lg:text-2xl text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-purple-300">Email Us</h3>
                    <a href="mailto:logicraftagency@gmail.com" className="text-purple-200 hover:text-purple-100 transition-colors text-base lg:text-lg">
                      logicraftagency@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-purple-900/50 rounded-xl backdrop-blur-sm border border-purple-800/50">
                    <FiPhone className="text-xl lg:text-2xl text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-purple-300">Call Us</h3>
                    <p className="text-purple-200 hover:text-purple-100 transition-colors text-base lg:text-lg">
                      +212 14 80 31 18
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Panel */}
          <div className="p-8 lg:p-12">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 lg:space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              noValidate
            >
              <div className="space-y-6 lg:space-y-8">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors(prev => ({ ...prev, name: false }));
                    }}
                    className={`w-full px-4 py-3 border-b-2 ${
                      errors.name ? 'border-red-400' : 'border-gray-600'
                    } focus:border-purple-400 focus:outline-none bg-gray-800/20 transition-colors peer text-purple-100`}
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3.5 text-gray-400 transition-all duration-200 pointer-events-none 
                    peer-[:not(:placeholder-shown)]:-top-4
                    peer-[:not(:placeholder-shown)]:text-sm
                    peer-focus:-top-4
                    peer-focus:text-sm
                    peer-focus:text-purple-400">
                    Name
                  </label>
                  {errors.name && <p className="text-red-400 text-sm mt-1">Name required</p>}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors(prev => ({ ...prev, email: false }));
                    }}
                    className={`w-full px-4 py-3 border-b-2 ${
                      errors.email ? 'border-red-400' : 'border-gray-600'
                    } focus:border-purple-400 focus:outline-none bg-gray-800/20 transition-colors peer text-purple-100`}
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3.5 text-gray-400 transition-all duration-200 pointer-events-none 
                    peer-[:not(:placeholder-shown)]:-top-4
                    peer-[:not(:placeholder-shown)]:text-sm
                    peer-focus:-top-4
                    peer-focus:text-sm
                    peer-focus:text-purple-400">
                    Email
                  </label>
                  {errors.email && <p className="text-red-400 text-sm mt-1">Valid email required</p>}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setErrors(prev => ({ ...prev, message: false }));
                    }}
                    className={`w-full px-4 py-3 border-b-2 ${
                      errors.message ? 'border-red-400' : 'border-gray-600'
                    } focus:border-purple-400 focus:outline-none bg-gray-800/20 transition-colors min-h-[120px] lg:min-h-[150px] peer text-purple-100`}
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3.5 text-gray-400 transition-all duration-200 pointer-events-none 
                    peer-[:not(:placeholder-shown)]:-top-4
                    peer-[:not(:placeholder-shown)]:text-sm
                    peer-focus:-top-4
                    peer-focus:text-sm
                    peer-focus:text-purple-400">
                    Message
                  </label>
                  {errors.message && <p className="text-red-400 text-sm mt-1">Message required</p>}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-4 lg:py-5 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/30"
              >
                <span className="font-semibold tracking-wide">Send Message</span>
                <FiArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}