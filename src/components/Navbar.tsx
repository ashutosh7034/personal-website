"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Mapping", href: "#mapping" },
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E5E0D8] shadow-editorial"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo / Personal Mark */}
          <a
            href="#"
            className="group flex items-center gap-3 text-brandText-primary font-display font-bold text-lg tracking-tight"
          >
            <span className="w-8 h-8 rounded-lg bg-[#18181B] text-[#FAF8F5] flex items-center justify-center font-display font-extrabold text-sm tracking-tighter group-hover:bg-accent transition-colors">
              AP
            </span>
            <span className="hidden sm:inline font-display font-semibold text-sm text-brandText-primary group-hover:text-accent transition-colors">
              Ashutosh Pandey
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brandText-secondary hover:text-brandText-primary hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume CTA & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Ashutosh_Pandey_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#18181B] text-[#FAF8F5] text-xs font-semibold hover:bg-accent transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-[#E5E0D8] text-brandText-primary hover:text-accent transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] shadow-cardHover space-y-4 max-w-6xl mx-auto"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-brandText-primary hover:bg-[#F4EFEA] hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#E5E0D8] flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Ashutosh_Pandey_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#18181B] text-[#FAF8F5] text-sm font-semibold hover:bg-accent transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
