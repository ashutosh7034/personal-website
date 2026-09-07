"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2.5 sm:py-3 bg-bg-primary/90 backdrop-blur-md border-b border-surface-border shadow-md"
            : "py-4 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 sm:gap-3 text-brandText-primary hover:text-white transition-colors"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-none border border-surface-border group-hover:border-accent flex items-center justify-center font-display font-bold text-xs sm:text-sm tracking-wider bg-surface-card transition-all group-hover:scale-105">
              AP
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-white flex items-center gap-1">
                ASHUTOSH PANDEY
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-brandText-muted tracking-wider uppercase">
                Software Dev · Applied AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-card/60 backdrop-blur-sm border border-surface-border px-3 py-1.5 rounded-full">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-brandText-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-accent/15 border border-accent/40 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Status (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-surface-card border border-surface-border rounded-none text-[11px] font-mono text-brandText-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Work</span>
            </div>

            <a
              href={PERSONAL_INFO.resumePdf}
              download="Ashutosh_Pandey_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-accent text-white hover:bg-accent-hover text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Actions: Resume quick tap & Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Ashutosh_Pandey_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 border border-accent/40 bg-accent/10 text-accent text-xs font-mono font-medium flex items-center gap-1 active:scale-95 min-h-[36px]"
              title="Download Resume PDF"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="text-[11px]">CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-surface-border bg-surface-card text-brandText-primary hover:text-white active:scale-95 min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full-Width Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[56px] sm:top-[65px] bottom-0 z-40 bg-bg-primary/98 backdrop-blur-2xl border-b border-surface-border p-6 md:hidden overflow-y-auto flex flex-col justify-between shadow-2xl"
          >
            <div className="flex flex-col gap-2 pt-2">
              <div className="font-mono text-[10px] text-accent uppercase tracking-wider px-3 pb-2 border-b border-surface-border">
                Navigation Index
              </div>

              {NAV_LINKS.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3.5 text-base font-display font-medium text-brandText-primary hover:text-white active:text-accent hover:bg-surface-card border border-transparent hover:border-surface-border transition-all flex items-center justify-between min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">0{idx + 1}</span>
                    <span>{link.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brandText-muted" />
                </Link>
              ))}
            </div>

            <div className="pt-6 mt-4 border-t border-surface-border space-y-3 pb-8">
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Ashutosh_Pandey_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-accent active:bg-accent-hover text-white text-center font-semibold text-sm flex items-center justify-center gap-2 min-h-[48px] shadow-lg"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="text-center font-mono text-[11px] text-brandText-muted pt-1">
                Mumbai, India &bull; ashutosh3276s16@gmail.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
