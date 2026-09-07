"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Cpu, Database, Terminal, ArrowRight, Sparkles, Touchpad } from "lucide-react";
import { SKILL_CATEGORIES, PROJECTS } from "@/lib/data";

const iconMap = {
  code: Code2,
  layers: Layers,
  cpu: Cpu,
  database: Database,
  terminal: Terminal,
};

export default function SkillEcosystem() {
  const [activeSkill, setActiveSkill] = useState<string>("RAG Architecture");

  // Find which projects are connected to the active skill
  const connectedProjects = activeSkill
    ? PROJECTS.filter((p) =>
        p.techStack.some((t) => t.toLowerCase().includes(activeSkill.toLowerCase()) || activeSkill.toLowerCase().includes(t.toLowerCase()))
      )
    : [];

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-surface-border bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-surface-border pb-6">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span>Technical Architecture & Tooling</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Interactive Skill Ecosystem.
            </h2>
          </div>
          <div className="font-mono text-xs text-brandText-muted flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Tap / Hover any technology to trace its real-world usage</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Categorized Skills (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {SKILL_CATEGORIES.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap] || Terminal;

              return (
                <div
                  key={category.title}
                  className="p-5 sm:p-6 bg-surface-card border border-surface-border space-y-3.5 sm:space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-surface-border pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-bg-primary text-accent border border-surface-border shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold text-white text-sm sm:text-base">
                        {category.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-brandText-muted">
                      {category.skills.length} Items
                    </span>
                  </div>

                  <p className="text-brandText-secondary text-xs">{category.description}</p>

                  {/* Skills Tag Cloud with Touch and Click Support */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => {
                      const isSelected = activeSkill === skill.name;

                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() => setActiveSkill(skill.name)}
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          className={`px-3 py-2 text-xs font-mono transition-all flex items-center gap-2 border active:scale-95 min-h-[38px] ${
                            isSelected
                              ? "bg-accent text-white border-accent shadow-md font-semibold"
                              : "bg-bg-primary text-brandText-primary border-surface-border hover:border-accent/60 hover:bg-surface-elevated"
                          }`}
                          aria-pressed={isSelected}
                        >
                          <span>{skill.name}</span>
                          {skill.badge && (
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded-none font-sans font-medium ${
                                isSelected
                                  ? "bg-black/30 text-white"
                                  : "bg-surface-border text-brandText-muted"
                              }`}
                            >
                              {skill.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Connected Projects Inspector (4 cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="p-5 sm:p-6 bg-surface-card border border-surface-border shadow-xl">
              <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent">
                  <Sparkles className="w-4 h-4" />
                  <span>PROJECT CONNECTOR</span>
                </div>
                <span className="font-mono text-[9px] text-brandText-muted uppercase">
                  Verified Traceability
                </span>
              </div>

              {activeSkill ? (
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[10px] text-brandText-muted uppercase block">
                      Active Technology Selected:
                    </span>
                    <span className="font-display font-bold text-lg sm:text-xl text-white block mt-0.5">
                      {activeSkill}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-brandText-muted uppercase block mb-2">
                      Deploys in Flagship Systems:
                    </span>

                    {connectedProjects.length > 0 ? (
                      <div className="space-y-3">
                        {connectedProjects.map((proj) => (
                          <div
                            key={proj.id}
                            className="p-3.5 bg-bg-primary border border-surface-border hover:border-accent transition-colors"
                          >
                            <div className="flex items-center justify-between font-mono text-[10px] text-accent mb-1">
                              <span>/{proj.number}</span>
                              <span className="text-brandText-muted">{proj.year}</span>
                            </div>
                            <h4 className="font-display font-semibold text-white text-xs sm:text-sm">
                              {proj.title}
                            </h4>
                            <p className="text-[11px] text-brandText-secondary mt-1 line-clamp-2 leading-relaxed">
                              {proj.description}
                            </p>
                            {proj.githubUrl && (
                              <a
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-mono text-[10px] text-accent hover:underline mt-2.5"
                              >
                                <span>Inspect Implementation</span>
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 bg-bg-primary border border-surface-border text-center font-mono text-xs text-brandText-muted leading-relaxed">
                        Applied across academic coursework, system benchmarks, and algorithmic implementations.
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 text-brandText-muted font-mono text-xs">
                  Tap any skill to see its connected projects.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
