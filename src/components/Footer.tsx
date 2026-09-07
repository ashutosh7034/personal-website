"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail, FileDown, Terminal, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-primary border-t border-surface-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-surface-card border border-surface-border flex items-center justify-center font-display font-bold text-sm text-white">
                AP
              </div>
              <span className="font-display font-bold text-lg text-white">
                ASHUTOSH PANDEY
              </span>
            </div>
            <p className="text-brandText-secondary text-sm max-w-sm leading-relaxed">
              Software Developer engineering web platforms, backend systems, and applied AI pipelines (RAG, LangChain, FAISS).
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-brandText-muted">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>MUMBAI (IST): {currentTime || "10:50 AM"} (UTC +05:30)</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider text-[11px] mb-2">
              Navigation
            </div>
            <ul className="space-y-2 text-brandText-secondary">
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  01 // Selected Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  02 // About & Background
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent transition-colors">
                  03 // Skill Ecosystem
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent transition-colors">
                  04 // Experience Timeline
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-accent transition-colors">
                  05 // Research & Papers
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-accent transition-colors">
                  06 // Academic Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  07 // Contact Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Channels & Top Trigger (4 cols) */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider text-[11px] mb-2">
              Verified Links
            </div>
            <div className="flex flex-col gap-2.5 text-brandText-secondary">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-2 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-accent" />
                <span>github.com/ashutosh7034</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-2 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-accent" />
                <span>linkedin.com/in/ashutoshpandey34</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-white flex items-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Ashutosh_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-2 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-accent" />
                <span>Ashutosh_Pandey_Resume.pdf</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 px-3 py-2 bg-surface-card border border-surface-border hover:border-accent text-white flex items-center gap-2 text-xs font-mono transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal & Colophon */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-brandText-muted">
          <div>
            &copy; {new Date().getFullYear()} Ashutosh Pandey. Hand-crafted with Next.js, TypeScript & Tailwind.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Systems Normal · Production Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
