"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award, Star, BookOpen } from "lucide-react";
import { EDUCATION_ITEMS, ACHIEVEMENTS } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8] bg-[#F4EFEA]/30">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* ========================================================
            EDUCATION
            ======================================================== */}
        <div className="space-y-10">
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Academic Degrees
            </span>
            <h2 className="mt-1 font-display font-extrabold text-3xl sm:text-4xl text-brandText-primary tracking-tight">
              Education.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_ITEMS.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-[#E5E0D8] p-6 shadow-sm hover:border-[#D1C7B7] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-brandText-muted">
                    <span className="font-semibold text-accent flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.scoreType}: {edu.score}</span>
                    </span>
                    <span>{edu.period}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-brandText-primary leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="text-xs font-semibold text-brandText-muted">
                    {edu.institution}
                  </div>

                  {edu.description && (
                    <p className="text-xs text-brandText-secondary leading-relaxed pt-1">
                      {edu.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E0D8] flex flex-wrap gap-1.5">
                  {edu.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E5E0D8] text-[10px] text-brandText-muted font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================
            HONORS & RECOGNITIONS
            ======================================================== */}
        <div className="space-y-10 pt-8 border-t border-[#E5E0D8]">
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Recognition
            </span>
            <h3 className="mt-1 font-display font-bold text-2xl sm:text-3xl text-brandText-primary tracking-tight">
              Honors & Milestones.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#E5E0D8] p-5 shadow-sm hover:border-[#D1C7B7] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-brandText-muted mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs">
                      {item.category === "academic" ? (
                        <Award className="w-3 h-3" />
                      ) : (
                        <Trophy className="w-3 h-3" />
                      )}
                      <span>{item.badgeText}</span>
                    </span>
                    <span>{item.year}</span>
                  </div>

                  <h4 className="font-display font-bold text-base text-brandText-primary">
                    {item.title}
                  </h4>
                  <div className="text-xs text-brandText-muted mt-0.5 font-medium">
                    {item.organization}
                  </div>

                  <p className="mt-2.5 text-xs text-brandText-secondary leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
