"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam trap

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to deliver message. Please try emailing directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please write directly to ashutosh3276s16@gmail.com.");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Human Invitation & Contact Details */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Start a Conversation
              </span>
              <h2 className="mt-1 font-display font-extrabold text-2xl sm:text-4xl text-brandText-primary tracking-tight leading-tight">
                Have something worth building?
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-brandText-secondary leading-relaxed">
                I am actively exploring software engineering opportunities, applied AI systems, and technical collaborations. Whether you have a project idea, an open role, or a research question, my inbox is open.
              </p>
            </div>

            {/* Direct Contact List */}
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#E5E0D8] text-xs sm:text-sm text-brandText-primary hover:border-accent hover:text-accent transition-all shadow-sm"
              >
                <div className="p-2 rounded-xl bg-[#FAF8F5] text-accent shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 overflow-hidden text-ellipsis">
                  <div className="text-[10px] sm:text-[11px] text-brandText-muted font-medium">Email Directly</div>
                  <div className="font-semibold truncate">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#E5E0D8] text-xs sm:text-sm text-brandText-primary hover:border-accent hover:text-accent transition-all shadow-sm"
              >
                <div className="p-2 rounded-xl bg-[#FAF8F5] text-accent shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] text-brandText-muted font-medium">Call / WhatsApp</div>
                  <div className="font-semibold">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#E5E0D8] text-xs sm:text-sm text-brandText-primary shadow-sm">
                <div className="p-2 rounded-xl bg-[#FAF8F5] text-accent shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] text-brandText-muted font-medium">Base Location</div>
                  <div className="font-semibold">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Verified Social Profiles */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-[#E5E0D8] text-brandText-primary hover:text-accent hover:border-accent transition-colors shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-[#E5E0D8] text-brandText-primary hover:text-accent hover:border-accent transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Ashutosh_Pandey_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E5E0D8] text-xs font-semibold text-brandText-primary hover:border-accent hover:text-accent transition-colors shadow-sm"
              >
                <FileDown className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Validated Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-[#E5E0D8] p-5 sm:p-8 lg:p-10 shadow-editorial">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Honeypot field (hidden from humans) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-brandText-primary">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-brandText-primary placeholder:text-brandText-muted focus:bg-white focus:border-accent focus:outline-none text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-brandText-primary">
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-brandText-primary placeholder:text-brandText-muted focus:bg-white focus:border-accent focus:outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-brandText-primary">
                  Subject <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineering Inquiry / Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-brandText-primary placeholder:text-brandText-muted focus:bg-white focus:border-accent focus:outline-none text-sm transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-brandText-primary">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about what you are working on, timelines, or your team..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-brandText-primary placeholder:text-brandText-muted focus:bg-white focus:border-accent focus:outline-none text-sm transition-all resize-none"
                />
              </div>

              {/* Status Feedback Alerts */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message was sent directly to my inbox. I&apos;ll get back to you shortly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#18181B] text-[#FAF8F5] text-sm font-semibold hover:bg-accent transition-all duration-200 shadow-sm disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
