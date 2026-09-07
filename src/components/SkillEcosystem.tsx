"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layers, Brain, Database, Smartphone, ArrowUpRight, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { SKILL_CATEGORIES, SKILL_PROJECT_MAPPINGS, SkillProjectMapping } from "@/lib/data";

const iconMap = {
  Code2,
  Layers,
  Brain,
  Database,
  Smartphone,
};

export default function SkillEcosystem() {
  const [selectedSkill, setSelectedSkill] = useState<string>("Python");

  const currentMapping: SkillProjectMapping | undefined =
    SKILL_PROJECT_MAPPINGS[selectedSkill] || SKILL_PROJECT_MAPPINGS["Python"];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8] bg-[#F4EFEA]/30">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Architecture & Tooling
          </span>
          <h2 className="mt-1 font-display font-extrabold text-3xl sm:text-4xl text-brandText-primary tracking-tight">
            Skills & Project Mapping.
          </h2>
          <p className="mt-2 text-sm text-brandText-secondary leading-relaxed">
            Every technology is backed by real code. Select any skill to see where and how it was implemented in my repositories.
          </p>
        </div>

        {/* 2-Column Layout: Skill Grid on Left, Project Mapping Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Categorized Skills */}
          <div className="lg:col-span-7 space-y-5">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const Icon = iconMap[cat.icon as keyof typeof iconMap] || Code2;

              return (
                <div
                  key={cat.title}
                  className="bg-white rounded-2xl border border-[#E5E0D8] p-5 shadow-sm hover:border-[#D1C7B7] transition-all"
                >
                  <div className="flex items-center gap-2.5 pb-3 border-b border-[#E5E0D8]">
                    <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-brandText-primary">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-3.5">
                    {cat.skills.map((skill) => {
                      const isSelected = selectedSkill === skill.name;
                      const hasMapping = !!SKILL_PROJECT_MAPPINGS[skill.name];

                      return (
                        <button
                          key={skill.name}
                          onClick={() => setSelectedSkill(skill.name)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            isSelected
                              ? "bg-[#18181B] text-[#FAF8F5] shadow-sm scale-102"
                              : "bg-[#FAF8F5] border border-[#E5E0D8] text-brandText-primary hover:border-accent hover:text-accent"
                          }`}
                        >
                          <span>{skill.name}</span>
                          {skill.badge && (
                            <span
                              className={`text-[10px] font-semibold ${
                                isSelected ? "text-accent" : "text-brandText-muted"
                              }`}
                            >
                              ({skill.badge})
                            </span>
                          )}
                          {hasMapping && (
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isSelected ? "bg-accent" : "bg-[#D1C7B7]"
                              }`}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Project Mapping Panel (Sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl border border-[#E5E0D8] p-6 shadow-editorial space-y-6">
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D8]">
                <div>
                  <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                    Project Mapping
                  </span>
                  <h3 className="font-display font-bold text-xl text-brandText-primary mt-0.5">
                    {selectedSkill}
                  </h3>
                </div>
                {currentMapping && (
                  <span className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] text-xs font-medium text-brandText-muted">
                    {currentMapping.projects.length} System{currentMapping.projects.length > 1 ? "s" : ""}
                  </span>
                )}
              </div>

              {/* Connected Projects List */}
              <div className="space-y-3.5">
                <AnimatePresence mode="wait">
                  {currentMapping ? (
                    <motion.div
                      key={selectedSkill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3.5"
                    >
                      {currentMapping.projects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#D1C7B7] transition-all space-y-1.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-display font-bold text-sm text-brandText-primary">
                              {proj.title}
                            </h4>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-accent/10 text-accent text-[10px] font-semibold shrink-0">
                              {proj.roleOrHighlight}
                            </span>
                          </div>

                          <p className="text-xs text-brandText-secondary leading-relaxed">
                            {proj.description}
                          </p>

                          {proj.link && (
                            <div className="pt-1">
                              <a
                                href={proj.link}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                              >
                                <span>Inspect Case Study</span>
                                <ChevronRight className="w-3 h-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <div className="p-6 text-center text-xs text-brandText-muted">
                      Select any highlighted skill on the left to inspect its implementation.
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer Tip */}
              <div className="pt-3 border-t border-[#E5E0D8] flex items-center gap-2 text-xs text-brandText-muted">
                <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Click any technology pill to update connected systems.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
