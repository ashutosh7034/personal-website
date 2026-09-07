"use client";

import { motion } from "framer-motion";
import { Trophy, GraduationCap, Award, CheckCircle2, Star, Sparkles } from "lucide-react";
import { EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="education" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-surface-border">
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24">
        {/* Education Sub-Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-surface-border pb-6">
            <div>
              <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span>Academic Credentials & Dual Degrees</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                Education.
              </h2>
            </div>
            <div className="font-mono text-xs text-brandText-muted">
              [ 06 // TCET · IIT MADRAS · UNIV OF MUMBAI ]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-surface-card border border-surface-border p-5 sm:p-6 flex flex-col justify-between hover:border-surface-borderHover transition-all shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs pb-3 mb-3 border-b border-surface-border">
                    <span className="text-brandText-muted text-[11px]">{edu.period}</span>
                    <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent font-bold text-xs">
                      {edu.scoreType} {edu.score}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg md:text-xl text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-accent text-xs font-medium mb-3">
                    {edu.institution}
                  </div>
                  <p className="text-brandText-secondary text-xs leading-relaxed mb-4">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-surface-border">
                  <div className="font-mono text-[10px] text-brandText-muted uppercase mb-2">
                    Focus Areas:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.focusAreas.map((f) => (
                      <span
                        key={f}
                        className="px-2 py-0.5 bg-bg-primary text-[10px] font-mono text-brandText-primary border border-surface-border"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verified Achievements Sub-Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4 border-b border-surface-border pb-6">
            <div>
              <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-accent" />
                <span>Competitions, Research Awards & Scores</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                Honors & Achievements.
              </h2>
            </div>
            <div className="font-mono text-xs text-brandText-muted">
              [ VERIFIED MILESTONES ]
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-5 sm:p-6 bg-surface-card border border-surface-border hover:border-accent/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-3 gap-2 flex-wrap">
                    <span className="text-brandText-muted uppercase text-[10px]">
                      {item.organization}
                    </span>
                    <span className="px-2 py-0.5 bg-accent text-white font-semibold text-[10px] sm:text-[11px]">
                      {item.badgeText}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white text-sm sm:text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brandText-secondary text-xs leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Badges Bar */}
        <div className="p-5 sm:p-8 bg-surface-card border border-surface-border">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-4 pb-3 border-b border-surface-border">
            <Award className="w-4 h-4 text-accent shrink-0" />
            <span>Verified Technical Certifications</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="p-3 bg-bg-primary border border-surface-border text-left"
              >
                <div className="font-display font-semibold text-xs text-white leading-snug">
                  {cert.name}
                </div>
                <div className="font-mono text-[10px] text-accent mt-1">
                  {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
