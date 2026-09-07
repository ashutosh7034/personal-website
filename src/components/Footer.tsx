"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Mail, FileDown, Clock, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
  const [mumbaiTime, setMumbaiTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setMumbaiTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E5E0D8] bg-[#F4EFEA]/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Philosophy */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 font-display font-bold text-lg text-brandText-primary">
              <span className="w-7 h-7 rounded-lg bg-[#18181B] text-[#FAF8F5] flex items-center justify-center text-xs font-extrabold">
                AP
              </span>
              <span>Ashutosh Pandey</span>
            </div>
            <p className="text-sm text-brandText-secondary max-w-md leading-relaxed">
              Software developer combining full-stack architecture, applied AI vector retrieval, and data engineering. Built with intention in Mumbai, India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-sm text-brandText-secondary">
            <div className="font-semibold text-brandText-primary text-xs uppercase tracking-wider mb-2">
              Navigation
            </div>
            <div><a href="#projects" className="hover:text-accent transition-colors">Projects</a></div>
            <div><a href="#about" className="hover:text-accent transition-colors">About</a></div>
            <div><a href="#research" className="hover:text-accent transition-colors">Research</a></div>
            <div><a href="#experience" className="hover:text-accent transition-colors">Experience</a></div>
            <div><a href="#skills" className="hover:text-accent transition-colors">Skills</a></div>
            <div><a href="#contact" className="hover:text-accent transition-colors">Contact</a></div>
          </div>

          {/* Real-time Mumbai Time & Socials */}
          <div className="md:col-span-3 space-y-4">
            <div className="p-3.5 rounded-2xl bg-white border border-[#E5E0D8] shadow-sm space-y-1 text-xs">
              <div className="flex items-center gap-1.5 text-brandText-muted font-medium">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Mumbai, India (IST)</span>
              </div>
              <div className="font-mono text-sm font-bold text-brandText-primary">
                {mumbaiTime || "Loading..."}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#E5E0D8] text-brandText-secondary hover:text-accent hover:border-accent transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#E5E0D8] text-brandText-secondary hover:text-accent hover:border-accent transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-white border border-[#E5E0D8] text-brandText-secondary hover:text-accent hover:border-accent transition-colors shadow-sm"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brandText-muted">
          <div>
            © {new Date().getFullYear()} Ashutosh Pandey. All rights reserved.
          </div>
          <div className="text-brandText-secondary font-medium">
            Designed with craft · Next.js 15 & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
