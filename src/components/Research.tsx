"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  FileText,
  Award,
  ArrowRight,
  X,
  CheckCircle2,
  Users,
  BarChart3,
  AlertTriangle,
  Info,
  GraduationCap,
} from "lucide-react";
import { FEATURED_RESEARCH_PAPER, BOOK_CHAPTERS } from "@/lib/data";

export default function Research() {
  const [modalOpen, setModalOpen] = useState(false);
  const paper = FEATURED_RESEARCH_PAPER;

  return (
    <section id="research" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E5E0D8] pb-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Academic Inquiry & Publications
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brandText-primary tracking-tight">
              Research & Publications.
            </h2>
            <p className="text-sm text-brandText-secondary leading-relaxed pt-1">
              I also work on research at the intersection of artificial intelligence, education, automation, and human-AI collaboration.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold shrink-0 shadow-sm">
            <Award className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Best Paper Award — MULTICON</span>
          </div>
        </div>

        {/* ========================================================
            01: FEATURED RESEARCH PAPER (MULTICON BEST PAPER)
            ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-brandText-muted uppercase tracking-wider">
              01 — Featured Conference Research
            </span>
            <span className="text-xs font-medium text-accent">
              Primary Empirical Survey + Review
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-[#E5E0D8] p-6 sm:p-8 lg:p-10 shadow-editorial hover:border-[#D1C7B7] transition-all space-y-8"
          >
            {/* Top Award & Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E0D8]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>{paper.award}</span>
                </span>
                <span className="text-[#D1C7B7]">•</span>
                <span className="text-xs font-semibold text-brandText-secondary">
                  {paper.conference}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-brandText-muted">
                <Users className="w-3.5 h-3.5 text-accent" />
                <span>Sample: {paper.sampleSize}</span>
              </div>
            </div>

            {/* Paper Title & Authors */}
            <div className="space-y-3">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brandText-primary tracking-tight leading-tight">
                {paper.title}
              </h3>
              <p className="text-sm font-medium text-brandText-secondary">
                {paper.authors.join(" · ")}
              </p>
              <p className="text-xs text-brandText-muted">
                {paper.affiliation}
              </p>
            </div>

            {/* Abstract / Summary */}
            <p className="text-sm sm:text-base text-brandText-secondary leading-relaxed">
              {paper.abstract}
            </p>

            {/* Key Empirical Survey Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-2">
              {paper.keyMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-1 text-left"
                >
                  <div className="font-display font-black text-xl sm:text-3xl text-accent">
                    {metric.value}
                  </div>
                  <div className="font-semibold text-xs text-brandText-primary">
                    {metric.label}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-brandText-muted leading-tight pt-0.5">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Literature vs Survey Distinction Note */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-brandText-secondary leading-relaxed">
              <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-brandText-primary">Research Nuance: </strong>
                {paper.literatureVsSurvey}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-t border-[#E5E0D8]">
              <div className="flex flex-wrap gap-1.5">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] text-xs font-medium text-brandText-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl bg-[#18181B] text-[#FAF8F5] text-xs font-semibold hover:bg-accent transition-colors shadow-sm"
              >
                <span>Read Research Summary & Findings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            02: PUBLISHED BOOK CHAPTERS (3 CHAPTERS)
            ======================================================== */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-brandText-muted uppercase tracking-wider">
              02 — Published Book Chapters
            </span>
            <span className="text-xs font-medium text-brandText-muted">
              3 Verified Chapters
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {BOOK_CHAPTERS.map((chapter, idx) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-[#E5E0D8] p-5 sm:p-6 shadow-sm hover:border-[#D1C7B7] hover:shadow-editorial transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Meta: Chapter Number & Date */}
                  <div className="flex items-center justify-between text-xs text-brandText-muted">
                    <span className="font-semibold text-accent flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Chapter {chapter.chapterNumber}</span>
                    </span>
                    <span className="font-medium">{chapter.publicationDate}</span>
                  </div>

                  {/* Chapter Title */}
                  <div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-brandText-primary leading-snug">
                      {chapter.chapterTitle}
                    </h4>
                    <p className="mt-1.5 text-xs text-accent font-medium">
                      In: <em>{chapter.bookTitle}</em>
                    </p>
                  </div>

                  {/* Authors & ISBN */}
                  <div className="space-y-1 text-xs text-brandText-muted">
                    <div>
                      <strong className="text-brandText-primary font-medium">Author(s):</strong> {chapter.authors}
                    </div>
                    <div>
                      <strong className="text-brandText-primary font-medium">ISBN:</strong>{" "}
                      <span className="font-mono text-[11px]">{chapter.isbn}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-brandText-secondary leading-relaxed pt-1">
                    {chapter.summary}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 mt-5 border-t border-[#E5E0D8] flex flex-wrap gap-1.5">
                  {chapter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E5E0D8] text-[10px] text-brandText-muted font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          DETAILED RESEARCH CASE STUDY MODAL
          ======================================================== */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
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
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                    <Award className="w-3.5 h-3.5 text-amber-700" />
                    <span>{paper.award}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-2xl text-brandText-primary mt-1">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-brandText-secondary font-medium">
                    {paper.authors.join(" · ")} — {paper.affiliation}
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-xl bg-white border border-[#E5E0D8] text-brandText-muted hover:text-brandText-primary transition-colors shrink-0"
                  aria-label="Close Research Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body Sections */}
              <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-brandText-secondary leading-relaxed">
                {/* Research Question & Importance */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E5E0D8] space-y-2">
                  <h4 className="font-semibold text-brandText-primary text-xs uppercase tracking-wider text-accent">
                    Research Question & Rationale
                  </h4>
                  <p className="font-medium text-brandText-primary">
                    &ldquo;{paper.researchQuestion}&rdquo;
                  </p>
                  <p>{paper.whyItMatters}</p>
                </div>

                {/* Methodology */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E5E0D8] space-y-2">
                  <h4 className="font-semibold text-brandText-primary text-xs uppercase tracking-wider text-accent">
                    Dual-Track Methodology
                  </h4>
                  <p>{paper.methodology}</p>
                </div>

                {/* Primary Survey Key Findings */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E5E0D8] space-y-3">
                  <h4 className="font-semibold text-brandText-primary text-xs uppercase tracking-wider text-accent">
                    Primary Survey Empirical Findings (n = 179)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {paper.keyMetrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-1">
                        <div className="font-display font-extrabold text-lg text-accent">
                          {m.value}
                        </div>
                        <div className="font-semibold text-xs text-brandText-primary">
                          {m.label}
                        </div>
                        <p className="text-[11px] text-brandText-muted leading-tight">
                          {m.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Literature Review vs Empirical Survey */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E5E0D8] space-y-1.5">
                  <h4 className="font-semibold text-brandText-primary text-xs uppercase tracking-wider text-accent">
                    Literature Review vs. Student Survey Nuance
                  </h4>
                  <p>{paper.literatureVsSurvey}</p>
                </div>

                {/* Critical Challenges */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E5E0D8] space-y-2">
                  <h4 className="font-semibold text-brandText-primary text-xs uppercase tracking-wider text-accent">
                    Identified Educational Challenges
                  </h4>
                  <ul className="space-y-1.5">
                    {paper.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Honest Research Limitations */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1.5">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Research Limitations</span>
                  </h4>
                  <p className="text-xs leading-relaxed">{paper.limitations}</p>
                </div>

                {/* Conclusion */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1.5">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-emerald-800">
                    Key Conclusion
                  </h4>
                  <p className="text-xs leading-relaxed">{paper.conclusion}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs text-brandText-muted">
                <div>
                  <strong>Citation:</strong> Pandey et al., MULTICON
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-[#18181B] text-[#FAF8F5] font-semibold hover:bg-accent transition-colors"
                >
                  Close Summary
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
