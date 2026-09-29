"use client";

import { useState } from "react";
import { developer } from "@/data/portfolio-data";
import { Section } from "@/components/section";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

import type { Variants } from "motion/react";

const contactInfoVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit message. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or email directly.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeader
        icon={MessageSquare}
        eyebrow="Let's Connect"
        title="Get In Touch"
        description="Whether exploring full-stack engineering roles, discussing system architectures, or planning a new project — feel free to reach out anytime."
        className="mb-10"
      />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="p-6 py-9 rounded-2xl border border-border/80 bg-card space-y-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <h3 className="text-lg font-bold text-foreground tracking-tight">Direct Contact</h3>

            {/* Email */}
            <motion.div
              custom={0}
              variants={contactInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-4 rounded-xl border border-border/70 bg-background/60 flex items-center justify-between gap-3 hover:border-primary/40 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0"
                >
                  <Mail className="size-4" />
                </motion.div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${developer.email}`}
                    className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block link-underline"
                  >
                    {developer.email}
                  </a>
                </div>
              </div>

              <motion.button
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-2.5 py-1.5 rounded-md border border-border/70 text-xs font-mono font-medium hover:border-primary/40 hover:text-primary transition-colors shrink-0 flex items-center gap-1"
                title="Copy email to clipboard"
              >
                <AnimatePresence mode="wait">
                  {copiedEmail ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1 text-emerald-500"
                    >
                      <CheckCircle className="size-3" />
                      <span>Copied!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1"
                    >
                      <Copy className="size-3" />
                      <span>Copy</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>

            {/* Phone */}
            <motion.div
              custom={1}
              variants={contactInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-4 rounded-xl border border-border/70 bg-background/60 flex items-center gap-3 hover:border-primary/40 transition-colors duration-200"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0"
              >
                <Phone className="size-4" />
              </motion.div>
              <div>
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Phone / WhatsApp</p>
                <a
                  href={`tel:${developer.phone}`}
                  className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors link-underline"
                >
                  {developer.phone}
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              custom={2}
              variants={contactInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-4 rounded-xl border border-border/70 bg-background/60 flex items-center gap-3 hover:border-primary/40 transition-colors duration-200"
            >
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0"
              >
                <MapPin className="size-4" />
              </motion.div>
              <div>
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Location &amp; Timezone</p>
                <p className="text-xs sm:text-sm font-semibold text-foreground">
                  {developer.location} (UTC+6)
                </p>
              </div>
            </motion.div>

            {/* Social profiles */}
            <motion.div
              custom={3}
              variants={contactInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-4 border-t border-border/60 space-y-3"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                Professional Networks
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { href: developer.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
                  { href: developer.github, icon: FaGithub, label: "GitHub" },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border/70 bg-background/60 hover:border-primary/40 hover:bg-card transition-all flex items-center justify-between group block"
                    >
                      <span className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <s.icon className="size-3.5 text-primary" />
                        {s.label}
                      </span>
                      <motion.div
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                        whileHover={{ x: 2, y: -2 }}
                      >
                        <ArrowUpRight className="size-3" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column — Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card space-y-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <h3 className="text-lg font-bold text-foreground tracking-tight">Send a Message</h3>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center space-y-3"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <CheckCircle className="size-10 text-emerald-500 mx-auto" />
                  </motion.div>
                  <h4 className="text-base font-bold text-foreground">Message Sent Successfully</h4>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    Thank you for reaching out. I will respond to your inquiry directly at{" "}
                    {formData.email || "your email"} as soon as possible.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg border border-border/70 text-xs font-semibold text-foreground hover:bg-card transition-all"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: "name", label: "Your Name *", type: "text", value: formData.name, placeholder: "e.g. John Doe", key: "name" as const },
                      { id: "email", label: "Your Email *", type: "email", value: formData.email, placeholder: "your.email@example.com", key: "email" as const },
                    ].map((field, i) => (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.35 }}
                        className="space-y-1.5 text-left"
                      >
                        <label htmlFor={field.id} className="text-xs font-semibold text-foreground/90">
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          required
                          type={field.type}
                          value={field.value}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          placeholder={field.placeholder}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-border/80 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 hover:border-border"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.16, duration: 0.35 }}
                    className="space-y-1.5 text-left"
                  >
                    <label htmlFor="subject" className="text-xs font-semibold text-foreground/90">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project discussion / Full-stack engineering role"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-border/80 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 hover:border-border"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22, duration: 0.35 }}
                    className="space-y-1.5 text-left"
                  >
                    <label htmlFor="message" className="text-xs font-semibold text-foreground/90">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of your project, scope, or timeline..."
                      className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-lg border border-border/80 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 resize-y hover:border-border"
                    />
                  </motion.div>

                  <AnimatePresence>
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-3.5 rounded-lg border border-destructive/30 bg-destructive/10 text-xs text-destructive flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <span>{errorMessage}</span>
                        <a
                          href={`mailto:${developer.email}?subject=${encodeURIComponent(formData.subject || "Contact from Portfolio")}&body=${encodeURIComponent(`Hi Tauhid,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`}
                          className="underline font-semibold hover:opacity-80 shrink-0 text-foreground"
                        >
                          Send via Email Directly →
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={isSubmitting ? {} : { scale: 1.02, y: -1 }}
                    whileTap={isSubmitting ? {} : { scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition-all shadow-md disabled:opacity-50 shimmer-on-hover"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span
                          key="sending"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="size-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          Sending…
                        </motion.span>
                      ) : (
                        <motion.span
                          key="send"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          Send Message
                          <motion.div
                            whileHover={{ x: 3, y: -3 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Send className="size-4" />
                          </motion.div>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
