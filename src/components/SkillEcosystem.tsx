"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Brain, Database, Smartphone } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/data";

const iconMap = {
  Code2,
  Layers,
  Brain,
  Database,
  Smartphone,
};

export default function SkillEcosystem() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8] bg-[#F4EFEA]/30">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Technical Tools
          </span>
          <h2 className="mt-1 font-display font-extrabold text-3xl sm:text-4xl text-brandText-primary tracking-tight">
            Skills & Engineering Tooling.
          </h2>
          <p className="mt-2 text-sm text-brandText-muted">
            Grouped by architectural layer. No artificial percentage bars or exaggerated claims.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] || Code2;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl border border-[#E5E0D8] p-6 shadow-sm hover:border-[#D1C7B7] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-3 border-b border-[#E5E0D8]">
                    <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-brandText-primary">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-brandText-muted mt-2.5 mb-4">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-xs font-medium text-brandText-primary hover:border-accent hover:text-accent transition-colors"
                      >
                        <span>{skill.name}</span>
                        {skill.badge && (
                          <span className="text-[10px] text-accent font-semibold">
                            ({skill.badge})
                          </span>
                        )}
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
