"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail, FileDown, Terminal, Sparkles, MapPin, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-surface-border overflow-hidden bg-grid-pattern">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] lg:w-[600px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Personal Statement & Narrative (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Engineering Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-card border border-surface-border text-brandText-secondary text-[11px] sm:text-xs font-mono mb-4 sm:mb-6 max-w-full flex-wrap"
            >
              <Terminal className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>FULL-STACK & APPLIED AI DEV</span>
              <span className="text-surface-border hidden sm:inline">/</span>
              <span className="text-accent font-medium">MUMBAI, IN</span>
            </motion.div>

            {/* Core Personal Statement Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-5 sm:mb-6"
            >
              I build software that turns{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300">
                ideas into useful systems.
              </span>
            </motion.h1>

            {/* Introduction & Academic Standing */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-brandText-secondary text-sm sm:text-base md:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed"
            >
              <p>
                Hi, I&apos;m <strong className="text-white font-semibold">Ashutosh Pandey</strong>.
                I engineer end-to-end full-stack applications, robust backend architectures,
                and applied AI pipelines (RAG systems, LangChain, FAISS vector search).
              </p>
              
              {/* Micro Academic Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs font-mono">
                <div className="flex items-center justify-between gap-2 p-2.5 bg-surface-card border border-surface-border">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                    <span className="text-brandText-primary font-medium">MCA @ TCET</span>
                  </div>
                  <span className="text-accent font-semibold">9.14 CGPA</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 bg-surface-card border border-surface-border">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 shrink-0" />
                    <span className="text-brandText-primary font-medium">BS Data Science @ IITM</span>
                  </div>
                  <span className="text-cyan-400 font-semibold">7.67 CGPA</span>
                </div>
              </div>
            </motion.div>

            {/* CTAs & External Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 bg-accent hover:bg-accent-hover active:scale-[0.98] text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Ashutosh_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-surface-card hover:bg-surface-elevated active:scale-[0.98] border border-surface-border hover:border-surface-borderHover text-brandText-primary font-semibold text-sm transition-all text-center flex items-center justify-center gap-2 min-h-[44px]"
              >
                <FileDown className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links & Verified Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 text-brandText-muted border-t border-surface-border w-full"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-brandText-muted">Connect:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-surface-card hover:bg-surface-elevated border border-surface-border text-brandText-secondary hover:text-white hover:border-accent active:scale-95 transition-all min-h-[38px] min-w-[38px] flex items-center justify-center"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-surface-card hover:bg-surface-elevated border border-surface-border text-brandText-secondary hover:text-white hover:border-accent active:scale-95 transition-all min-h-[38px] min-w-[38px] flex items-center justify-center"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2.5 bg-surface-card hover:bg-surface-elevated border border-surface-border text-brandText-secondary hover:text-white hover:border-accent active:scale-95 transition-all min-h-[38px] min-w-[38px] flex items-center justify-center"
                    aria-label="Direct Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-brandText-muted">
                <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>2x Hackathon Finalist &bull; SIH 2026</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Art-Directed Editorial Photograph (5 cols on desktop, top on mobile) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]"
            >
              {/* Architectural Framing Container */}
              <div className="relative p-2.5 sm:p-3 bg-surface-card border border-surface-strong shadow-2xl group">
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-accent" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-accent" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-accent" />

                {/* Photo with Controlled Editorial Aspect Ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-secondary">
                  <Image
                    src="/images/ashutosh-portrait.png"
                    alt="Ashutosh Pandey — Software Developer"
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                    priority
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle vignette border gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/85 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Bottom Identity Tag */}
                  <div className="absolute bottom-2.5 inset-x-2.5 p-2 sm:p-2.5 bg-bg-primary/95 backdrop-blur-md border border-surface-border text-left">
                    <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px]">
                      <span className="text-white font-semibold">ASHUTOSH PANDEY</span>
                      <span className="text-accent font-medium">MCA · BS DS</span>
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-brandText-muted font-mono mt-0.5">
                      TCET 9.14 CGPA &bull; IIT Madras
                    </div>
                  </div>
                </div>

                {/* Technical Monospace Metadata Footer on Frame */}
                <div className="pt-2.5 px-1 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-brandText-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span>SYS_ID: AP_2026</span>
                  </div>
                  <span>MUMBAI_IN</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
