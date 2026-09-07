"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail, FileDown, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E0D8] text-xs font-medium text-brandText-secondary shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Available for select engineering roles & research</span>
              <span className="text-[#D1C7B7]">•</span>
              <span className="flex items-center gap-1 text-brandText-muted">
                <MapPin className="w-3 h-3" /> Mumbai, IN
              </span>
            </div>

            {/* Name & Primary Headline */}
            <div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brandText-primary tracking-tight leading-[1.08]">
                Ashutosh Pandey.
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-display font-semibold text-accent">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Role & Academic Grounding */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-brandText-secondary leading-relaxed max-w-xl">
                Software developer building full-stack applications, applied AI pipelines, and data systems. Currently pursuing dual academic pathways:
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E5E0D8] text-xs sm:text-sm font-medium text-brandText-primary shadow-sm">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <span>
                    <strong>MCA @ TCET</strong> <span className="text-accent font-semibold">(9.14 CGPA)</span>
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E5E0D8] text-xs sm:text-sm font-medium text-brandText-primary shadow-sm">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <span>
                    <strong>BS Data Science @ IIT Madras</strong> <span className="text-accent font-semibold">(7.67 CGPA)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#18181B] text-[#FAF8F5] text-sm font-semibold hover:bg-accent transition-all duration-200 shadow-sm"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Ashutosh_Pandey_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#E5E0D8] text-brandText-primary text-sm font-semibold hover:border-accent hover:text-accent transition-all duration-200 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-[#E5E0D8] text-brandText-secondary hover:text-accent hover:border-accent transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-[#E5E0D8] text-brandText-secondary hover:text-accent hover:border-accent transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-xl bg-white border border-[#E5E0D8] text-brandText-secondary hover:text-accent hover:border-accent transition-all shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-sm w-full">
              {/* Paper Framing Accent Behind Photo */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#EDE6DD] border border-[#E5E0D8] -z-10" />

              {/* Main Photo Card */}
              <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-editorial overflow-hidden">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F4EFEA]">
                  <Image
                    src="/images/ashutosh-portrait.png"
                    alt="Ashutosh Pandey — Software Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-102 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Caption Bar */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-brandText-muted">
                  <span className="font-medium text-brandText-primary">Ashutosh Pandey</span>
                  <span>Software Developer · Mumbai</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
