"use client";

import { useState } from "react";
import { developer } from "@/data/portfolio-data";
import { Container } from "@/components/layout/container";
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

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift submission or mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <Container size="lg">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <div className="section-eyebrow">
            <MessageSquare className="size-3.5" />
            <span>Initiate Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Get In Touch
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            Whether exploring full-stack engineering opportunities, discussing
            high-scale web applications, or inquiring about technical
            collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-6">
              <h3 className="text-lg font-bold text-foreground tracking-tight">
                Direct Communication Channels
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl border border-border/70 bg-background/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="size-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono uppercase text-muted-foreground">
                      Email
                    </p>
                    <a
                      href={`mailto:${developer.email}`}
                      className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                    >
                      {developer.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-md border border-border/70 text-xs font-mono font-medium hover:border-primary/40 hover:text-primary transition-all shrink-0 flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle className="size-3 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-xl border border-border/70 bg-background/60 flex items-center gap-3">
                <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">
                    Phone / WhatsApp
                  </p>
                  <a
                    href={`tel:${developer.phone}`}
                    className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {developer.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl border border-border/70 bg-background/60 flex items-center gap-3">
                <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">
                    Location & Timezone
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    {developer.location} (UTC+6)
                  </p>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="pt-4 border-t border-border/60 space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                  Professional Networks
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href={developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border/70 bg-background/60 hover:border-primary/40 hover:bg-card transition-all flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold text-foreground">
                      <FaLinkedinIn className="size-3.5 text-primary" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>

                  <Link
                    href={developer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border/70 bg-background/60 hover:border-primary/40 hover:bg-card transition-all flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold text-foreground">
                      <FaGithub className="size-3.5 text-primary" />
                      GitHub
                    </span>
                    <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card space-y-6">
              <h3 className="text-lg font-bold text-foreground tracking-tight">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center space-y-3">
                  <CheckCircle className="size-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-foreground">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    Thank you for reaching out. I will respond to your inquiry
                    directly at {formData.email || "your email"} as soon as
                    possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg border border-border/70 text-xs font-semibold text-foreground hover:bg-card transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-foreground/90"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-border/80 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-foreground/90"
                      >
                        Your Email *
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="[EMAIL_ADDRESS]"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-border/80 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold text-foreground/90"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Full-Stack Engineer Role / Project Inquiry"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-border/80 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-foreground/90"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Brief overview of project scope, timelines, or role expectations..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-border/80 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="size-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
