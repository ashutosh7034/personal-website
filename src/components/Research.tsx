"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PUBLICATIONS } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E0D8] pb-6">
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Academic Inquiry
            </span>
            <h2 className="mt-1 font-display font-extrabold text-3xl sm:text-4xl text-brandText-primary tracking-tight">
              Research & Book Chapters.
            </h2>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
            <Award className="w-4 h-4 text-amber-700" />
            <span>MULTICON-W 2026 Best Paper Award</span>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLICATIONS.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-[#E5E0D8] p-6 shadow-sm hover:border-[#D1C7B7] hover:shadow-editorial transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-brandText-muted">
                  <span className="font-semibold text-accent flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{pub.year}</span>
                  </span>
                  {pub.award && (
                    <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-medium text-[10px]">
                      {pub.award}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-brandText-primary leading-snug">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-xs text-brandText-muted italic">
                    {pub.venue}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed">
                  {pub.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E0D8] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E5E0D8] text-[10px] text-brandText-muted font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
