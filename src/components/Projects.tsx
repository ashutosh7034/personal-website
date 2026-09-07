"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  ChevronRight,
  Layers,
  X,
  Sparkles,
  BookOpen,
  Filter,
  Flame,
  Award,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS, PROJECT_ARCHIVE } from "@/lib/data";
import { Project, ArchiveProject } from "@/lib/types";

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [archiveFilter, setArchiveFilter] = useState<string>("all");

  const filteredArchive = PROJECT_ARCHIVE.filter((p) => {
    if (archiveFilter === "all") return true;
    return p.archiveCategory === archiveFilter;
  });

  const categories = [
    { label: "All Repositories", value: "all", count: PROJECT_ARCHIVE.length },
    { label: "Applied AI / ML", value: "ai", count: PROJECT_ARCHIVE.filter((p) => p.archiveCategory === "ai").length },
    { label: "Full-Stack", value: "fullstack", count: PROJECT_ARCHIVE.filter((p) => p.archiveCategory === "fullstack").length },
    { label: "Backend & Systems", value: "backend", count: PROJECT_ARCHIVE.filter((p) => p.archiveCategory === "backend").length },
    { label: "Mobile Apps", value: "mobile", count: PROJECT_ARCHIVE.filter((p) => p.archiveCategory === "mobile").length },
    { label: "Hackathons", value: "hackathon", count: PROJECT_ARCHIVE.filter((p) => p.archiveCategory === "hackathon").length },
    { label: "Academic / Institutional", value: "academic", count: PROJECT_ARCHIVE.filter((p) => p.archiveCategory === "academic").length },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-surface-border">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* ========================================================
            PART 1: FLAGSHIP CASE STUDIES
            ======================================================== */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-surface-border pb-6">
            <div>
              <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent" />
                <span>Selected Systems & Engineering</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Featured Case Studies.
              </h2>
            </div>
            <div className="font-mono text-xs text-brandText-muted">
              [ 02 // 6 FLAGSHIP SYSTEMS · VERIFIED IMPLEMENTATIONS ]
            </div>
          </div>

          {/* Project Case Studies List */}
          <div className="space-y-16">
            {PROJECTS.map((project, index) => {
              const hasPipeline = !!project.pipelineSteps && project.pipelineSteps.length > 0;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-surface-card border border-surface-border p-6 sm:p-8 lg:p-10 relative overflow-hidden group hover:border-surface-borderHover transition-all shadow-xl"
                >
                  {/* Top Bar: Number, Category & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-surface-border">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-accent tracking-tighter">
                        /{project.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                            {project.category}
                          </span>
                          {project.hackathonBadge && (
                            <span className="px-2 py-0.5 bg-accent text-white font-mono text-[10px] font-semibold flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              <span>{project.hackathonBadge}</span>
                            </span>
                          )}
                        </div>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-0.5">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-brandText-muted px-3 py-1 bg-bg-primary border border-surface-border">
                        {project.duration}
                      </span>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-elevated hover:bg-surface-border text-white text-xs font-mono transition-colors border border-surface-border hover:border-accent"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent hover:bg-accent-hover text-white text-xs font-mono font-semibold transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Main Content Grid: Problem & Solution vs Technical Architecture */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
                    {/* Left Column: Problem & What Was Built (6 cols) */}
                    <div className="lg:col-span-6 space-y-6">
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-brandText-muted mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                          <span>The Problem</span>
                        </h4>
                        <p className="text-brandText-secondary text-sm sm:text-base leading-relaxed bg-bg-primary/60 p-4 border-l-2 border-rose-500/60">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                          <span>What I Built</span>
                        </h4>
                        <p className="text-brandText-primary text-sm sm:text-base leading-relaxed">
                          {project.built}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-brandText-muted mb-2">
                          Technical Approach & Implementation
                        </h4>
                        <p className="text-brandText-secondary text-xs sm:text-sm leading-relaxed">
                          {project.technicalApproach}
                        </p>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="pt-2">
                        <div className="font-mono text-[11px] text-brandText-muted uppercase tracking-wider mb-2">
                          Technologies Deployed:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-bg-primary border border-surface-border text-xs font-mono text-brandText-primary hover:border-accent transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Deep Dive Modal Trigger */}
                      <div className="pt-3">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="px-4 py-2 bg-surface-card hover:bg-surface-elevated border border-surface-border hover:border-accent text-accent hover:text-white font-mono text-xs flex items-center gap-2 transition-all"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Inspect Deep Dive Case Study & Contribution</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Visual System Flow Diagram (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                      {hasPipeline ? (
                        <div className="p-5 bg-bg-primary border border-surface-border relative">
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border">
                            <div className="flex items-center gap-2 font-mono text-xs text-accent">
                              <Cpu className="w-4 h-4 text-accent" />
                              <span>SYSTEM ARCHITECTURE PIPELINE</span>
                            </div>
                            <span className="font-mono text-[10px] text-brandText-muted uppercase">
                              End-to-End Workflow
                            </span>
                          </div>

                          <div className="space-y-3">
                            {project.pipelineSteps?.map((step, idx) => (
                              <div key={step.step} className="relative">
                                <div className="flex items-start gap-3 p-3 bg-surface-card border border-surface-border/80 hover:border-accent/60 transition-colors">
                                  <div className="font-mono text-xs font-bold text-accent px-1.5 py-0.5 bg-accent/10 border border-accent/30">
                                    {step.step}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-display font-semibold text-white text-xs sm:text-sm">
                                      {step.label}
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-brandText-secondary mt-0.5 leading-snug">
                                      {step.description}
                                    </p>
                                  </div>
                                </div>
                                {project.pipelineSteps && idx < project.pipelineSteps.length - 1 && (
                                  <div className="flex justify-center my-0.5">
                                    <div className="w-0.5 h-2 bg-accent/40" />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="p-6 bg-bg-primary border border-surface-border space-y-4">
                          <div className="flex items-center justify-between border-b border-surface-border pb-3">
                            <div className="flex items-center gap-2 font-mono text-xs text-brandText-primary">
                              <Database className="w-4 h-4 text-accent" />
                              <span>SYSTEM OVERVIEW & SPECS</span>
                            </div>
                            <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              Verified Artifact
                            </span>
                          </div>

                          <div className="space-y-3 font-mono text-xs">
                            <div className="p-3 bg-surface-card border border-surface-border">
                              <span className="text-brandText-muted block text-[10px] uppercase">Core Workflow</span>
                              <span className="text-white mt-1 block font-sans text-xs sm:text-sm">
                                {project.description}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <div className="p-3 bg-surface-card border border-surface-border">
                                <span className="text-brandText-muted block text-[10px] uppercase">Category</span>
                                <span className="text-accent mt-0.5 block">{project.category}</span>
                              </div>
                              <div className="p-3 bg-surface-card border border-surface-border">
                                <span className="text-brandText-muted block text-[10px] uppercase">Timeline</span>
                                <span className="text-white mt-0.5 block">{project.duration}</span>
                              </div>
                            </div>

                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2.5 px-3 bg-surface-card hover:bg-surface-elevated border border-surface-border hover:border-accent text-brandText-primary flex items-center justify-between transition-colors"
                              >
                                <span className="text-xs">Inspect Repository on GitHub</span>
                                <ChevronRight className="w-4 h-4 text-accent" />
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PART 2: COMPLETE GITHUB PROJECT ARCHIVE
            ======================================================== */}
        <div className="pt-8 border-t border-surface-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-accent" />
                <span>Audited Repositories Archive</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Complete Project Archive.
              </h3>
              <p className="text-brandText-secondary text-sm mt-1 max-w-xl">
                Explore audited repositories spanning Applied AI, Full-Stack systems, Mobile applications, and Hackathon prototypes.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setArchiveFilter(cat.value)}
                  className={`px-3 py-1.5 text-xs font-mono transition-all border flex items-center gap-1.5 ${
                    archiveFilter === cat.value
                      ? "bg-accent text-white border-accent"
                      : "bg-surface-card text-brandText-secondary border-surface-border hover:border-surface-borderHover hover:text-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1 py-0.2 ${
                      archiveFilter === cat.value ? "bg-black/30 text-white" : "bg-bg-primary text-brandText-muted"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Archive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredArchive.map((p) => (
              <div
                key={p.id}
                className="p-5 bg-surface-card border border-surface-border hover:border-accent/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] mb-2 pb-2 border-b border-surface-border">
                    <span className="text-accent uppercase font-semibold">{p.category}</span>
                    <span className="text-brandText-muted">{p.year}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-display font-bold text-base text-white group-hover:text-accent transition-colors">
                      {p.title}
                    </h4>
                    {p.highlight && (
                      <span className="px-1.5 py-0.5 bg-accent/15 border border-accent/40 text-accent font-mono text-[9px] shrink-0">
                        {p.highlight}
                      </span>
                    )}
                  </div>

                  <p className="text-brandText-secondary text-xs leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-surface-border">
                  <div className="flex flex-wrap gap-1.5">
                    {p.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-bg-primary text-[10px] font-mono text-brandText-muted border border-surface-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1 font-mono text-[11px]">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-brandText-primary hover:text-accent transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-accent" />
                        <span>Repository</span>
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:underline transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Site</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          DEEP DIVE CASE STUDY MODAL
          ======================================================== */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-surface-card border border-surface-strong max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 bg-bg-primary border border-surface-border hover:border-accent text-brandText-secondary hover:text-white transition-colors"
                aria-label="Close Case Study Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b border-surface-border pb-6 mb-6">
                <div className="flex items-center gap-3 font-mono text-xs text-accent uppercase mb-2">
                  <span>Case Study /{activeModalProject.number}</span>
                  <span className="text-surface-border">|</span>
                  <span>{activeModalProject.category}</span>
                  <span className="text-surface-border">|</span>
                  <span className="text-brandText-muted">{activeModalProject.duration}</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {activeModalProject.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="space-y-6 text-sm text-brandText-secondary leading-relaxed">
                <div>
                  <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                    <span>The Problem & Context</span>
                  </h4>
                  <p className="bg-bg-primary p-4 border-l-2 border-rose-500/60 text-brandText-primary">
                    {activeModalProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Proposed Solution & Architecture</span>
                  </h4>
                  <p>{activeModalProject.built}</p>
                </div>

                {activeModalProject.myContribution && (
                  <div>
                    <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                      <span>My Specific Technical Contribution</span>
                    </h4>
                    <p className="bg-bg-primary p-4 border-l-2 border-accent text-white font-medium">
                      {activeModalProject.myContribution}
                    </p>
                  </div>
                )}

                {activeModalProject.challenges && (
                  <div>
                    <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-2">
                      Key Technical Decisions & Engineering Challenges
                    </h4>
                    <p>{activeModalProject.challenges}</p>
                  </div>
                )}

                {activeModalProject.outcome && (
                  <div>
                    <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-2">
                      Verified Outcome & Impact
                    </h4>
                    <p className="text-emerald-400">{activeModalProject.outcome}</p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="pt-4 border-t border-surface-border">
                  <div className="font-mono text-xs text-brandText-muted uppercase mb-2">
                    Technologies Deployed:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-bg-primary border border-surface-border font-mono text-xs text-brandText-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center gap-4">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white font-semibold text-xs font-mono flex items-center gap-2 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Inspect Repository on GitHub</span>
                    </a>
                  )}
                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-surface-card hover:bg-surface-elevated border border-surface-border text-white text-xs font-mono flex items-center gap-2 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Live Deployment</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
