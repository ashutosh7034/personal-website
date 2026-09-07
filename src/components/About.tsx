"use client";

import { motion } from "framer-motion";
import { Code2, Database, Brain, Sparkles, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function About() {
  const pillars = [
    {
      title: "Full-Stack Architecture",
      description:
        "Building structured backends, REST APIs, and responsive interfaces with Node.js, Express, PHP, and Next.js.",
      icon: Layers,
    },
    {
      title: "Applied AI & RAG",
      description:
        "Developing retrieval-augmented generation pipelines, document chunking, FAISS vector indexing, and LangChain workflows.",
      icon: Brain,
    },
    {
      title: "Data & Geodesic Telemetry",
      description:
        "Processing geospatial datasets, ship AIS trajectory correlation, and Haversine distance proximity algorithms.",
      icon: Database,
    },
    {
      title: "Academic Research",
      description:
        "Author of 3 published book chapters and recipient of the Best Paper Award at MULTICON for research in AI in personalized learning.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8] bg-[#F4EFEA]/40">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            About & Perspective
          </span>
          <h2 className="mt-1 sm:mt-2 font-display font-bold text-2xl sm:text-4xl text-brandText-primary tracking-tight">
            I learn by building.
          </h2>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-brandText-secondary leading-relaxed"
          >
            <p className="text-brandText-primary font-medium text-base sm:text-xl leading-relaxed">
              Most of my work starts with a problem that is still a little messy. I&apos;ve built full-stack applications, mobile products, RAG systems, computer-vision prototypes, and research projects.
            </p>

            <p>
              I enjoy understanding how a system works from end to end — from the underlying data models and backend logic to the interface someone actually interacts with. Rather than staying confined to a single tool, I pick technologies that best suit the system&apos;s operational constraints.
            </p>

            <p>
              Currently, I am completing dual postgraduate studies in Computer Applications at <strong>TCET Mumbai (9.14 CGPA)</strong> and Data Science at <strong>IIT Madras (7.67 CGPA)</strong>, combining algorithmic foundations with practical software engineering.
            </p>
          </motion.div>

          {/* Core Focus Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 sm:gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E0D8] shadow-sm hover:border-[#D1C7B7] transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-brandText-primary">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs text-brandText-secondary leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
