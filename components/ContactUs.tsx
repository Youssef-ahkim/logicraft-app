"use client";

import { useState, useEffect, useRef } from "react";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold, rootMargin: "-30px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function ContactUs() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors]   = useState({ name: false, email: false, message: false });
  const [sent, setSent]       = useState(false);

  const titleRef = useReveal();
  const cardRef  = useReveal();

  const validate = () => {
    const e = {
      name:    !name.trim(),
      email:   !/^\S+@\S+\.\S+$/.test(email),
      message: !message.trim(),
    };
    setErrors(e);
    return !Object.values(e).some(Boolean);
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const mailto = `mailto:logicraftagency@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Header */}
      <div ref={titleRef} className="reveal text-center mb-14 max-w-xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400 mb-3">Contact</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Let&rsquo;s Build{" "}
          <span className="gradient-text">Something Great</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Drop us a message and we&rsquo;ll get back to you within 24 hours.
        </p>
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        className="reveal max-w-4xl mx-auto glass-card overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left panel */}
          <div className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Get in touch</h3>

              <div className="space-y-6">
                <a
                  href="mailto:logicraftagency@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/25 group-hover:bg-purple-500/30 transition-colors duration-200">
                    <FiMail className="w-4 h-4 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-xs text-purple-400 font-medium mb-1 uppercase tracking-wider">Email</p>
                    <p className="text-slate-200 text-sm group-hover:text-white transition-colors duration-200">
                      logicraftagency@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/25">
                    <FiPhone className="w-4 h-4 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-xs text-purple-400 font-medium mb-1 uppercase tracking-wider">Phone</p>
                    <p className="text-slate-200 text-sm">+212 614 803 118</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="mt-12 hidden lg:block">
              <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent mb-6" />
              <p className="text-xs text-slate-500">
                We typically respond within a few hours during business days.
              </p>
            </div>
          </div>

          {/* Right panel — form */}
          <div className="p-8 lg:p-12">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <FiSend className="w-7 h-7 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Message sent!</h4>
                <p className="text-slate-400 text-sm">Your email client should open shortly.</p>
                <button
                  onClick={() => { setSent(false); setName(""); setEmail(""); setMessage(""); }}
                  className="mt-2 text-sm text-purple-400 hover:text-purple-200 underline underline-offset-4 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors(p => ({ ...p, name: false })); }}
                    placeholder="Your full name"
                    className={`premium-input ${errors.name ? "error" : ""}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs">Name is required</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors(p => ({ ...p, email: false })); }}
                    placeholder="your@email.com"
                    className={`premium-input ${errors.email ? "error" : ""}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs">Valid email required</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); setErrors(p => ({ ...p, message: false })); }}
                    placeholder="How can we help you?"
                    rows={5}
                    className={`premium-input resize-none ${errors.message ? "error" : ""}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs">Message is required</p>}
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-1 w-full justify-center py-3.5 rounded-xl text-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FiSend className="w-4 h-4" />
                    <span>Send Message</span>
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-center text-slate-600 text-xs mt-12">
        © {new Date().getFullYear()} Logicraft. All rights reserved.
      </p>
    </section>
  );
}