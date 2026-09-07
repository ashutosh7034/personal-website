"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-surface-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-surface-border pb-6">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span>Career Trajectory & Engagements</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Work & Leadership Experience.
            </h2>
          </div>
          <div className="font-mono text-xs text-brandText-muted">
            [ 04 // VERIFIED TIMELINE & ROLES ]
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="relative border-l border-surface-border ml-2 sm:ml-6 pl-4 sm:pl-8 space-y-8 sm:space-y-12">
          {EXPERIENCES.map((exp, index) => {
            const isAmbassador = exp.role.includes("Ambassador");

            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Timeline Marker Dot */}
                <div className="absolute -left-[23px] sm:-left-[39px] top-2 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-bg-primary border-2 border-accent rounded-none group-hover:bg-accent transition-colors" />

                {/* Experience Card */}
                <div className="bg-surface-card border border-surface-border p-5 sm:p-7 hover:border-surface-borderHover transition-all shadow-lg">
                  {/* Top Row: Role, Company, Period */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-surface-border pb-3.5 mb-3.5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-white">
                          {exp.role}
                        </h3>
                        {isAmbassador && (
                          <span className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 bg-accent/15 text-accent border border-accent/40">
                            Leadership
                          </span>
                        )}
                      </div>
                      <div className="font-mono text-xs sm:text-sm text-accent mt-0.5 font-medium">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono text-brandText-muted">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brandText-muted shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-brandText-secondary text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities & Highlights */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-brandText-primary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills / Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-surface-border/60">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-bg-primary border border-surface-border font-mono text-[10px] sm:text-[11px] text-brandText-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
