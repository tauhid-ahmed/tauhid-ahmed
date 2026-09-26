"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { developer } from "@/data/portfolio-data";
import { resumeDownloadPath } from "@/paths";
import { Container } from "@/components/layout/container";
import meImg from "@/images/me/me.webp";

const techPills = [
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "TypeScript",
  "AI",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] -z-10"
      />

      <Container size="lg">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status indicator badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border/70 bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground"
            >
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
              </span>
              <span>Available for Full-Stack Roles & High-Impact Projects</span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground uppercase">
                Tauhid Ahmed
              </h1>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">
                Full-Stack Developer
              </div>
            </motion.div>

            {/* Core Tech Positioning Bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs font-semibold px-3 py-1 rounded-md border transition-all ${
                    tech === "NestJS"
                      ? "border-primary/40 bg-primary/10 text-primary font-bold shadow-xs"
                      : "border-border/80 bg-card text-foreground/90 hover:border-primary/30"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              {developer.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition-all shadow-md group"
              >
                <span>View Projects</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/90 bg-card hover:bg-muted/70 text-foreground font-semibold text-sm transition-all shadow-xs"
              >
                <Mail className="size-4 text-primary" />
                <span>Contact Me</span>
              </Link>

              <Link
                href={resumeDownloadPath}
                target="_blank"
                download="Tauhid_Ahmed_Full_Stack_Developer.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/30 text-sm font-medium transition-all"
                title="Download Resume"
              >
                <Download className="size-4" />
                <span className="hidden sm:inline">Resume</span>
              </Link>
            </motion.div>

            {/* Direct Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-2 text-xs text-muted-foreground"
            >
              <span className="font-mono uppercase tracking-wider text-[11px] text-muted-foreground/80">
                Connect:
              </span>
              <Link
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium hover:text-foreground transition-colors"
              >
                <FaGithub className="size-3.5" />
                <span>GitHub</span>
              </Link>
              <span className="text-border">•</span>
              <Link
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium hover:text-foreground transition-colors"
              >
                <FaLinkedinIn className="size-3.5" />
                <span>LinkedIn</span>
              </Link>
              <span className="text-border">•</span>
              <span className="font-mono text-muted-foreground">Pabna, Bangladesh</span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Visual Identity */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Decorative background plate */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-xl -z-10" />

              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-2xl">
                {/* Photo frame */}
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-muted/40">
                  <Image
                    src={meImg}
                    alt={developer.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 340px, 380px"
                    className="object-cover object-top filter contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                  {/* Overlaid caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg border border-border/70 bg-card/85 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-foreground">
                          {developer.name}
                        </p>
                        <p className="text-[11px] text-primary font-semibold">
                          Full-Stack Developer
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[10px] text-muted-foreground uppercase">
                          Stack
                        </p>
                        <p className="font-mono text-[11px] font-bold text-foreground">
                          Next.js • NestJS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
