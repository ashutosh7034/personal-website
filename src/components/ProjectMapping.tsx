"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Layers, ArrowRight, CheckCircle2, Cpu, Code2, Database, Smartphone, Brain } from "lucide-react";
import { TECH_PROJECT_MAPPINGS, PROJECT_ARCHIVE } from "@/lib/data";

export default function ProjectMapping() {
  const [selectedTech, setSelectedTech] = useState<string>("Python");

  const activeMapping = TECH_PROJECT_MAPPINGS.find((m) => m.tech === selectedTech) || TECH_PROJECT_MAPPINGS[0];

  // Find corresponding archive projects for rich preview
  const mappedProjects = PROJECT_ARCHIVE.filter((p) =>
    activeMapping.projectIds.some((name) => p.title.toLowerCase().includes(name.toLowerCase().split(" ")[0]))
  );

  return (
    <section id="mapping" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E0D8] pb-6">
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Architecture & Stack Correlation
            </span>
            <h2 className="mt-1 font-display font-extrabold text-3xl sm:text-4xl text-brandText-primary tracking-tight">
              Project & Technology Mapping.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brandText-muted max-w-md">
            Interactive matrix mapping programming languages, frameworks, and databases to verified software implementations.
          </p>
        </div>

        {/* Interactive Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Technology Selector Pills */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E5E0D8] p-5 shadow-sm space-y-4">
            <div className="text-xs font-semibold text-brandText-primary uppercase tracking-wider pb-2 border-b border-[#E5E0D8] flex items-center justify-between">
              <span>Select Technology Stack</span>
              <span className="text-accent font-medium">{TECH_PROJECT_MAPPINGS.length} Mapped</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {TECH_PROJECT_MAPPINGS.map((item) => {
                const isSelected = selectedTech === item.tech;
                return (
                  <button
                    key={item.tech}
                    onClick={() => setSelectedTech(item.tech)}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-[#18181B] text-[#FAF8F5] shadow-sm"
                        : "bg-[#FAF8F5] border border-[#E5E0D8] text-brandText-primary hover:border-accent hover:text-accent"
                    }`}
                  >
                    <span>{item.tech}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                        isSelected ? "bg-accent text-white" : "bg-[#EDE6DD] text-brandText-muted"
                      }`}
                    >
                      {item.projectIds.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Project Output Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-7 shadow-editorial space-y-6">
            <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-accent">
                  <GitBranch className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brandText-primary">
                    Systems Built with {activeMapping.tech}
                  </h3>
                  <div className="text-xs text-brandText-muted">
                    {activeMapping.projectIds.length} verified project implementations
                  </div>
                </div>
              </div>
            </div>

            {/* Mapped Project Cards */}
            <div className="space-y-3.5">
              {activeMapping.projectIds.map((projectName, idx) => {
                const archiveMatch = PROJECT_ARCHIVE.find(
                  (p) =>
                    p.title.toLowerCase().includes(projectName.toLowerCase().split(" ")[0]) ||
                    projectName.toLowerCase().includes(p.title.toLowerCase().split(" ")[0])
                );

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#D1C7B7] transition-all space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-display font-bold text-sm text-brandText-primary flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>{projectName}</span>
                      </div>
                      {archiveMatch?.year && (
                        <span className="text-[11px] font-mono text-brandText-muted">
                          {archiveMatch.year}
                        </span>
                      )}
                    </div>

                    {archiveMatch?.description && (
                      <p className="text-xs text-brandText-secondary leading-relaxed pl-6">
                        {archiveMatch.description}
                      </p>
                    )}

                    {archiveMatch?.techStack && (
                      <div className="flex flex-wrap gap-1.5 pl-6 pt-1">
                        {archiveMatch.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-0.5 rounded-md text-[10px] font-medium border ${
                              tech.toLowerCase() === selectedTech.toLowerCase()
                                ? "bg-accent/10 border-accent/30 text-accent font-semibold"
                                : "bg-white border-[#E5E0D8] text-brandText-muted"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
