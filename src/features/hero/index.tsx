"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { developer } from "@/data/portfolio-data";
import { resumeDownloadPath } from "@/paths";
import { Container } from "@/components/layout/container";
import { useTheme } from "next-themes";
import meImgDark from "@/images/me/me-dark.jpg";
import meImgLight from "@/images/me/me-light.jpeg";
import { Button } from "@/components/ui/button";

const techPills = ["React", "Next.js", "Node.js", "NestJS", "TypeScript", "AI"];

export function Hero() {
  const { resolvedTheme } = useTheme();
  const meImg = resolvedTheme === "light" ? meImgLight : meImgDark;
  return (
    <section
      id="home"
      className="relative items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      {/* Full Screen Box Grid Pattern with Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Primary Ambient Lighting Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-130 bg-primary/15 rounded-full blur-[160px] opacity-80 dark:opacity-60" />

        {/* Secondary Color Glow */}
        <div className="absolute top-1/3 -right-20 w-125 h-100 bg-primary/10 rounded-full blur-[140px] opacity-60 dark:opacity-40" />

        {/* Full-bleed Box Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[44px_44px] mask-[radial-gradient(ellipse_120%_90%_at_50%_40%,#000_65%,transparent_100%)] opacity-70 dark:opacity-45" />

        {/* Smooth Bottom Fade Transition */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-background to-transparent" />
      </div>

      <Container size="lg" className="w-full">
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
              <Button asChild>
                <Link className="group" href="#projects">
                  <span>View Projects</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild variant={"outline"}>
                <Link href="#contact" className="group">
                  <Mail className="text-primary group-hover:scale-105" />
                  <span>Contact Me</span>
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link
                  href={resumeDownloadPath}
                  target="_blank"
                  download="Tauhid_Ahmed_Full_Stack_Developer.pdf"
                  className="group"
                  title="Download Resume"
                >
                  <Download className="group-hover:scale-105 group-hover:text-primary" />
                  <span className="hidden sm:inline">Resume</span>
                </Link>
              </Button>
            </motion.div>

            {/* Direct Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 md:gap-4 pt-2 text-xs text-muted-foreground"
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
              <span className="font-mono text-muted-foreground">
                Pabna, Bangladesh
              </span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Visual Identity */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-150"
            >
              {/* Decorative background plate glow */}
              <div className="absolute -inset-3 rounded-3xl bg-linear-to-tr from-primary/30 via-primary/10 to-transparent blur-2xl -z-10" />

              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/90 p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-xs">
                {/* Photo frame */}
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-muted/40 shadow-inner">
                  <Image
                    src={meImg}
                    alt={developer.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 380px, (max-width: 1024px) 440px, 510px"
                    className="object-cover object-top filter contrast-[1.02] transition-transform duration-500 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/15 to-transparent" />

                  {/* Overlaid caption */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl border border-border/70 bg-card/90 backdrop-blur-md shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-foreground">
                          {developer.name}
                        </p>
                        <p className="text-[11px] sm:text-xs text-primary font-semibold">
                          Full-Stack Developer
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase">
                          Stack
                        </p>
                        <p className="font-mono text-[11px] sm:text-xs font-bold text-foreground">
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
