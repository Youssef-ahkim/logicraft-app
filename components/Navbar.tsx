"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",     href: "#home"     },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "navbar-glass shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="shrink-0 hero-fade-up anim-delay-1">
          <Image
            src="/logo.png"
            alt="Logicraft Logo"
            width={160}
            height={48}
            className="h-9 w-auto filter brightness-0 invert"
            priority
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link hero-fade-up anim-delay-${i + 2}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/+212614803118"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex hero-fade-up anim-delay-5"
          >
            <button className="btn-primary btn-whatsapp text-sm py-2.5 px-5">
              <span className="flex items-center gap-1.5">
                <Image
                  src="/whatssap.png"
                  alt="WhatsApp"
                  width={18}
                  height={18}
                  className="brightness-0 invert"
                />
                <span>Contact Us</span>
              </span>
            </button>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span
              className={`block h-0.5 bg-slate-300 rounded-full transition-all duration-300 ${
                open ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
              }`}
            />
            <span
              className={`block h-0.5 bg-slate-300 rounded-full transition-all duration-300 ${
                open ? "opacity-0 w-5" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-slate-300 rounded-full transition-all duration-300 ${
                open ? "w-5 -rotate-45 -translate-y-[7px]" : "w-3"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden ${open ? "open" : ""}`}>
        <ul className="flex flex-col px-5 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-base block py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/+212614803118"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <button className="btn-primary btn-whatsapp text-sm w-full py-3 mt-1">
                <span className="flex items-center justify-center gap-2">
                  <Image src="/whatssap.png" alt="WhatsApp" width={18} height={18} className="brightness-0 invert" />
                  <span>Chat on WhatsApp</span>
                </span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}