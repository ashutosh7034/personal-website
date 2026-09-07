"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, FileDown, ArrowUpRight, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
    website_hp: "", // Honeypot spam trap
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-Side Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          company: "",
          message: "",
          website_hp: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to deliver message. Please contact me directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Something went wrong while sending your message. Please try again or contact me directly.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-bg-secondary/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-surface-border pb-6">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span>Initiate Collaboration & Inquiries</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Have something worth building?
            </h2>
          </div>
          <div className="font-mono text-xs text-brandText-muted">
            [ 07 // DIRECT DISPATCH & INBOX ]
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Verified Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <p className="text-brandText-secondary text-sm sm:text-base md:text-lg leading-relaxed">
              I am open to software engineering roles, full-stack development, and applied AI systems projects.
              Drop a message through the dispatch terminal or connect directly via verified channels.
            </p>

            <div className="space-y-3 sm:space-y-4 font-mono text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3.5 sm:p-4 bg-surface-card border border-surface-border hover:border-accent active:scale-[0.99] flex items-center gap-3.5 transition-colors group block"
              >
                <div className="p-2 sm:p-2.5 bg-bg-primary text-accent border border-surface-border group-hover:border-accent shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-brandText-muted uppercase text-[10px] block">Direct Email</span>
                  <span className="text-white group-hover:text-accent font-sans text-xs sm:text-sm font-semibold block mt-0.5 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-3.5 sm:p-4 bg-surface-card border border-surface-border hover:border-accent active:scale-[0.99] flex items-center gap-3.5 transition-colors group block"
              >
                <div className="p-2 sm:p-2.5 bg-bg-primary text-accent border border-surface-border group-hover:border-accent shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-brandText-muted uppercase text-[10px] block">Phone / Mobile</span>
                  <span className="text-white group-hover:text-accent font-sans text-xs sm:text-sm font-semibold block mt-0.5">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="p-3.5 sm:p-4 bg-surface-card border border-surface-border flex items-center gap-3.5">
                <div className="p-2 sm:p-2.5 bg-bg-primary text-accent border border-surface-border shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-brandText-muted uppercase text-[10px] block">Primary Location</span>
                  <span className="text-white font-sans text-xs sm:text-sm font-semibold block mt-0.5">
                    Mumbai, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 font-mono text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 bg-surface-card hover:bg-surface-elevated active:scale-95 border border-surface-border hover:border-accent text-white flex items-center gap-1.5 transition-colors min-h-[42px]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 bg-surface-card hover:bg-surface-elevated active:scale-95 border border-surface-border hover:border-accent text-white flex items-center gap-1.5 transition-colors min-h-[42px]"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Ashutosh_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 bg-surface-card hover:bg-surface-elevated active:scale-95 border border-surface-border hover:border-accent text-accent flex items-center gap-1.5 transition-colors min-h-[42px]"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface-card border border-surface-border p-5 sm:p-8 lg:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-surface-border pb-3.5 mb-5 sm:mb-6">
              <div className="font-mono text-xs text-accent flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>DISPATCH TERMINAL</span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-brandText-muted uppercase">
                Secure Route
              </span>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-6 sm:p-8 bg-bg-primary border border-emerald-500/40 text-center space-y-4 my-4 sm:my-8"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-brandText-secondary text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thanks for reaching out! Your message was delivered and an alert was dispatched to my inbox. I&apos;ll review and get back to you promptly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-3 bg-surface-card border border-surface-border hover:border-accent text-xs font-mono text-brandText-primary hover:text-white active:scale-95 transition-colors min-h-[44px]"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  {/* Honeypot field (hidden from visual users) */}
                  <input
                    type="text"
                    name="website_hp"
                    value={formData.website_hp}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Error Notification Banner */}
                  {status === "error" && (
                    <div className="p-3.5 sm:p-4 bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">{errorMessage}</div>
                        <div className="mt-1 text-rose-300">
                          Fallback: write directly to{" "}
                          <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-mono">
                            {PERSONAL_INFO.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Inputs Grid: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="block font-mono text-[11px] text-brandText-muted uppercase mb-1.5">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-3.5 sm:px-4 py-3 bg-bg-primary border border-surface-border text-white text-base focus:border-accent focus:outline-none transition-colors min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-mono text-[11px] text-brandText-muted uppercase mb-1.5">
                        Your Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-3.5 sm:px-4 py-3 bg-bg-primary border border-surface-border text-white text-base focus:border-accent focus:outline-none transition-colors min-h-[48px]"
                      />
                    </div>
                  </div>

                  {/* Inputs Grid: Subject & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="subject" className="block font-mono text-[11px] text-brandText-muted uppercase mb-1.5">
                        Subject <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Full-Stack / AI Opportunity"
                        className="w-full px-3.5 sm:px-4 py-3 bg-bg-primary border border-surface-border text-white text-base focus:border-accent focus:outline-none transition-colors min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block font-mono text-[11px] text-brandText-muted uppercase mb-1.5">
                        Company / Organization <span className="text-brandText-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-3.5 sm:px-4 py-3 bg-bg-primary border border-surface-border text-white text-base focus:border-accent focus:outline-none transition-colors min-h-[48px]"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block font-mono text-[11px] text-brandText-muted uppercase mb-1.5">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detail your inquiry or opportunity..."
                      className="w-full px-3.5 sm:px-4 py-3 bg-bg-primary border border-surface-border text-white text-base focus:border-accent focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 sm:py-4 bg-accent hover:bg-accent-hover disabled:bg-accent/50 text-white font-semibold text-sm font-mono tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.99] min-h-[48px]"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>TRANSMITTING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH MESSAGE</span>
                      </>
                    )}
                  </button>

                  <div className="font-mono text-[10px] text-brandText-muted text-center pt-1">
                    Secured with honeypot spam protection & server-side validation.
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
