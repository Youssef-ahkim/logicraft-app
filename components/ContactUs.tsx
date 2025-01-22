"use client";

import { Inter, Space_Grotesk } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiMail, FiPhone, FiArrowRight } from "react-icons/fi";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      name: !name.trim(),
      email: !emailRegex.test(email),
      message: !message.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const mailtoLink = `mailto:logicraftagency@gmail.com?subject=Contact%20Us&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-us"
      className={`${inter.className} min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          {/* Left Panel - Contact Information */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-8 lg:p-12 text-white relative">
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
                  className="flex items-start gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm flex-shrink-0">
                    <FiMail className="text-xl lg:text-2xl text-white/90" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5 text-white/90 text-lg lg:text-xl">Email Us</h3>
                    <a
                      href="mailto:logicraftagency@gmail.com"
                      className="text-white/75 hover:text-white transition-colors duration-200 text-base lg:text-lg"
                    >
                      logicraftagency@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm flex-shrink-0">
                    <FiPhone className="text-xl lg:text-2xl text-white/90" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5 text-white/90 text-lg lg:text-xl">Call Us</h3>
                    <a
                      href="tel:+212614803118"
                      className="text-white/75 hover:text-white transition-colors duration-200 text-base lg:text-lg"
                    >
                      +212 6 14 80 31 18
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Panel - Contact Form */}
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
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    } focus:border-indigo-600 focus:outline-none bg-transparent transition-colors peer`}
                    placeholder=" "
                    aria-label="Your name"
                    disabled={isSubmitting}
                  />
                  <label className="absolute left-4 top-3.5 text-gray-400 transition-all duration-200 pointer-events-none 
                    peer-[:not(:placeholder-shown)]:-top-4
                    peer-[:not(:placeholder-shown)]:text-sm
                    peer-focus:-top-4
                    peer-focus:text-sm
                    peer-focus:text-indigo-600">
                    Name
                  </label>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">Please enter your name</p>
                  )}
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
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:border-indigo-600 focus:outline-none bg-transparent transition-colors peer`}
                    placeholder=" "
                    aria-label="Your email"
                    disabled={isSubmitting}
                  />
                  <label className="absolute left-4 top-3.5 text-gray-400 transition-all duration-200 pointer-events-none 
                    peer-[:not(:placeholder-shown)]:-top-4
                    peer-[:not(:placeholder-shown)]:text-sm
                    peer-focus:-top-4
                    peer-focus:text-sm
                    peer-focus:text-indigo-600">
                    Email
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
                  )}
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
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } focus:border-indigo-600 focus:outline-none bg-transparent transition-colors min-h-[120px] lg:min-h-[150px] peer`}
                    placeholder=" "
                    aria-label="Your message"
                    disabled={isSubmitting}
                  />
                  <label className="absolute left-4 top-3.5 text-gray-400 transition-all duration-200 pointer-events-none 
                    peer-[:not(:placeholder-shown)]:-top-4
                    peer-[:not(:placeholder-shown)]:text-sm
                    peer-focus:-top-4
                    peer-focus:text-sm
                    peer-focus:text-indigo-600">
                    Message
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">Please enter your message</p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-4 lg:py-5 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100 disabled:opacity-80"
                disabled={isSubmitting}
              >
                <span className="font-semibold tracking-wide">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                {!isSubmitting && (
                  <FiArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                )}
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}