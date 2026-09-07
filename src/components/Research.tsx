"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Sparkles, Award } from "lucide-react";
import { PUBLICATIONS } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-surface-border bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-surface-border pb-6">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span>Academic Publications & Applied Inquiries</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Research & Technical Writing.
            </h2>
          </div>
          <div className="font-mono text-xs text-brandText-muted">
            [ 05 // 2026 PEER-REVIEWED PAPERS ]
          </div>
        </div>

        {/* Editorial Paper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PUBLICATIONS.map((pub, index) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-surface-card border border-surface-border p-8 relative flex flex-col justify-between hover:border-accent/60 transition-all shadow-xl group"
            >
              <div>
                {/* Paper Header & Metadata */}
                <div className="flex items-center justify-between font-mono text-xs text-accent pb-4 mb-4 border-b border-surface-border">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    <span>PUBLISHED PAPER #{index + 1}</span>
                  </div>
                  <span className="text-brandText-muted">{pub.year}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug mb-3 group-hover:text-accent transition-colors">
                  &ldquo;{pub.title}&rdquo;
                </h3>

                {/* Authors & Venue */}
                <div className="font-mono text-xs text-brandText-secondary mb-4 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Author: {pub.authors}</span>
                  <span className="text-surface-border">|</span>
                  <span className="text-accent">{pub.venue}</span>
                </div>

                {/* Abstract Summary */}
                <p className="text-brandText-secondary text-sm leading-relaxed mb-6 bg-bg-primary p-4 border-l-2 border-accent">
                  {pub.summary}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-surface-border flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-bg-primary border border-surface-border font-mono text-[10px] text-brandText-muted uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Research differentiator note */}
        <div className="mt-8 p-4 bg-surface-card border border-surface-border flex items-center gap-3 font-mono text-xs text-brandText-muted">
          <Award className="w-4 h-4 text-accent shrink-0" />
          <span>
            Research papers explore cognitive architectures, real-time learner diagnostics, and retrieval-augmented educational chatbots. Awarded <strong>Best Paper Award at MULTICON-W 2026</strong>.
          </span>
        </div>
      </div>
    </section>
  );
}
