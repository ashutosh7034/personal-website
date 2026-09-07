"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_ITEMS } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8] bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Work History
          </span>
          <h2 className="mt-1 font-display font-extrabold text-3xl sm:text-4xl text-brandText-primary tracking-tight">
            Experience & Roles.
          </h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 shadow-sm hover:border-[#D1C7B7] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E5E0D8]">
                <div>
                  <h3 className="font-display font-bold text-xl text-brandText-primary">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-accent mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-brandText-muted">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{item.period}</span>
                  </span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>
              </div>

              <p className="mt-4 text-sm text-brandText-secondary leading-relaxed">
                {item.description}
              </p>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-brandText-secondary">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-[#E5E0D8] flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E5E0D8] text-xs font-medium text-brandText-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
