"use client";

import { motion } from "framer-motion";
import { Code2, Database, Brain, Sparkles, BookOpen, Layers } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack & Backend",
      desc: "Architecting relational schemas, RESTful APIs, and responsive frontends in Node.js, PHP, Python, and JavaScript.",
    },
    {
      icon: Brain,
      title: "Applied AI & RAG",
      desc: "Building document retrieval pipelines with LangChain, FAISS vector stores, semantic search, and prompt engineering.",
    },
    {
      icon: Database,
      title: "Database Engineering",
      desc: "Structuring normalized relational datasets (MySQL, SQLite) and high-speed document/vector indices (MongoDB, FAISS).",
    },
    {
      icon: BookOpen,
      title: "Academic Research",
      desc: "Published 2 peer-reviewed academic papers in 2026 focusing on AI integration and automated learning systems in Higher Education.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-surface-border bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-surface-border pb-6">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span>About / Philosophy</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Engineering with purpose.
            </h2>
          </div>
          <div className="font-mono text-xs text-brandText-muted">
            [ 01 // PROFILE & BACKGROUND ]
          </div>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-brandText-secondary text-base sm:text-lg leading-relaxed">
            <p className="text-white font-medium text-lg sm:text-xl leading-relaxed">
              I enjoy turning ideas into working software. Whether designing an institutional tracking system, a hyperlocal service engine, or a semantic retrieval pipeline, I build systems that solve tangible problems.
            </p>

            <p>
              My background bridges core computer science principles with practical, modern engineering. Currently pursuing an <strong className="text-white">MCA at Thakur College of Engineering and Technology (9.14 CGPA)</strong> alongside a <strong className="text-white">BS in Data Science & Applications from IIT Madras</strong>, I approach software challenges with rigorous algorithmic thinking and clean architecture.
            </p>

            <p>
              Rather than chasing superficial AI hype, I focus on <strong className="text-white">applied AI systems</strong>—combining vector databases (FAISS), chunking strategies, and language models (LangChain, Gemini) to augment real operational workflows with verifiable context.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-4 bg-surface-card border border-surface-border">
                <div className="font-display font-bold text-2xl text-accent">9.14</div>
                <div className="font-mono text-[11px] text-brandText-muted mt-1 uppercase">MCA CGPA</div>
              </div>
              <div className="p-4 bg-surface-card border border-surface-border">
                <div className="font-display font-bold text-2xl text-white">2x</div>
                <div className="font-mono text-[11px] text-brandText-muted mt-1 uppercase">Hackathon Finalist</div>
              </div>
              <div className="p-4 bg-surface-card border border-surface-border">
                <div className="font-display font-bold text-2xl text-white">2</div>
                <div className="font-mono text-[11px] text-brandText-muted mt-1 uppercase">Research Papers</div>
              </div>
              <div className="p-4 bg-surface-card border border-surface-border">
                <div className="font-display font-bold text-2xl text-accent">97.8%ile</div>
                <div className="font-mono text-[11px] text-brandText-muted mt-1 uppercase">MCA CET</div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 bg-surface-card border border-surface-border hover:border-surface-borderHover transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-bg-primary border border-surface-border group-hover:border-accent/50 text-accent transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-base mb-1 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-brandText-secondary text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
