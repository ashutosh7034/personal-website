"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  ChevronRight,
  X,
  Sparkles,
  Award,
  Layers,
  Database,
  Brain,
  Smartphone,
  CheckCircle2,
  FileText,
  MapPin,
  Clock,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { FEATURED_PROJECTS, PROJECT_ARCHIVE } from "@/lib/data";
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
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8]">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* ========================================================
            PART 1: TOP 3 BEST FLAGSHIP PROJECTS
            ======================================================== */}
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-[#E5E0D8] pb-6">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Flagship Systems
              </span>
              <h2 className="mt-1 font-display font-extrabold text-3xl sm:text-4xl text-brandText-primary tracking-tight">
                Featured Projects.
              </h2>
            </div>
            <p className="text-sm text-brandText-muted">
              Top 3 verified engineering implementations across Geospatial AI, RAG, and Enterprise workflows.
            </p>
          </div>

          {/* Project Cards (Top 3 Only) */}
          <div className="space-y-16">
            {FEATURED_PROJECTS.map((project, index) => {
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-3xl border border-[#E5E0D8] p-6 sm:p-8 lg:p-10 shadow-editorial hover:border-[#D1C7B7] transition-all"
                >
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E0D8]">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-extrabold text-xl text-accent">
                        /{project.number}
                      </span>
                      <span className="text-[#D1C7B7]">•</span>
                      <span className="text-xs font-semibold text-brandText-secondary uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-accent/10 text-accent text-xs font-semibold">
                          <Award className="w-3 h-3" />
                          <span>{project.badge}</span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-brandText-muted">
                      {project.duration}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-brandText-primary">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-sm font-medium text-accent mt-0.5">
                            {project.subtitle}
                          </p>
                        )}
                      </div>

                      <p className="text-base text-brandText-secondary leading-relaxed">
                        {project.description}
                      </p>

                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-2 text-xs sm:text-sm">
                        <div className="font-semibold text-brandText-primary">The Core Problem:</div>
                        <p className="text-brandText-secondary leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-[#F4EFEA] border border-[#E5E0D8] text-xs font-medium text-brandText-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-4 pt-4">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#18181B] text-[#FAF8F5] text-xs font-semibold hover:bg-accent transition-colors"
                        >
                          <span>Read Architecture & Contribution</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E0D8] text-xs font-medium text-brandText-primary hover:text-accent hover:border-accent transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Visual Narrative Breakdown */}
                    <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl p-5 border border-[#E5E0D8] space-y-4">
                      <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-3 text-xs">
                        <span className="font-semibold text-brandText-primary">
                          System Execution Pipeline
                        </span>
                        <span className="text-accent font-medium">{project.pipelineSteps?.length || 0} Stages</span>
                      </div>

                      <div className="space-y-3">
                        {project.pipelineSteps?.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs">
                            <span className="w-5 h-5 rounded-full bg-white border border-[#E5E0D8] text-accent font-bold flex items-center justify-center shrink-0 text-[10px]">
                              {step.step}
                            </span>
                            <div>
                              <div className="font-semibold text-brandText-primary">
                                {step.label}
                              </div>
                              <p className="text-brandText-muted text-[11px] leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PART 2: COMPLETE GITHUB PROJECT ARCHIVE (ALL PROJECTS)
            ======================================================== */}
        <div className="pt-12 border-t border-[#E5E0D8]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Full Repository Catalog
              </span>
              <h3 className="mt-1 font-display font-bold text-2xl sm:text-3xl text-brandText-primary tracking-tight">
                Complete Project Archive ({PROJECT_ARCHIVE.length} Systems).
              </h3>
            </div>            {/* Filter Pills with smooth horizontal scroll on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setArchiveFilter(cat.value)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${
                    archiveFilter === cat.value
                      ? "bg-[#18181B] text-[#FAF8F5]"
                      : "bg-white border border-[#E5E0D8] text-brandText-secondary hover:text-brandText-primary"
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Archive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredArchive.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E5E0D8] p-5 shadow-sm hover:border-[#D1C7B7] hover:shadow-editorial transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-brandText-muted mb-2">
                    <span className="font-semibold text-accent">{item.category}</span>
                    <span className="font-mono">{item.year}</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-brandText-primary">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-brandText-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5E0D8] flex items-center justify-between text-xs gap-2">
                  <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                    {item.techStack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E5E0D8] text-[10px] text-brandText-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] text-brandText-primary hover:text-accent transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] text-brandText-primary hover:text-accent transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
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
          DEEP DIVE MODAL
          ======================================================== */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#E5E0D8] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-cardHover z-10 max-h-[92dvh] overflow-y-auto space-y-5 sm:space-y-6"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-[#E5E0D8] pb-4 gap-3">
                <div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {activeModalProject.category}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-3xl text-brandText-primary mt-1">
                    {activeModalProject.title}
                  </h3>
                  {activeModalProject.subtitle && (
                    <p className="text-xs font-semibold text-accent mt-0.5">
                      {activeModalProject.subtitle}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-xl bg-white border border-[#E5E0D8] text-brandText-muted hover:text-brandText-primary transition-colors shrink-0"
                  aria-label="Close Case Study Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Sections */}
              <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-brandText-secondary leading-relaxed">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1.5">
                  <h4 className="font-semibold text-brandText-primary text-xs uppercase tracking-wider text-accent">
                    The Problem & Context
                  </h4>
                  <p>{activeModalProject.problem}</p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1.5">
                  <h4 className="font-semibold text-brandText-primary text-xs uppercase tracking-wider text-accent">
                    What Was Built
                  </h4>
                  <p>{activeModalProject.built}</p>
                </div>

                {activeModalProject.myContribution && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1.5">
                    <h4 className="font-semibold text-brandText-primary text-xs uppercase tracking-wider text-accent">
                      My Specific Engineering Contribution
                    </h4>
                    <p>{activeModalProject.myContribution}</p>
                  </div>
                )}

                {activeModalProject.outcome && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1">
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-emerald-800">
                      Verified Outcome
                    </h4>
                    <p>{activeModalProject.outcome}</p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#E5E0D8] text-xs font-medium text-brandText-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#18181B] text-[#FAF8F5] text-xs font-semibold hover:bg-accent transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
