"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { developer } from "@/data/portfolio-data";
import { resumeDownloadPath } from "@/paths";
import { Container } from "@/components/layout/container";
import { useTheme } from "next-themes";
import meImgDark from "@/images/me/me-dark.jpg";
import meImgLight from "@/images/me/me-light.jpeg";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiAnthropic,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import ResumeDownloadButton from "@/components/ResumeDownloadButton";

const techPills = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "currentColor" },
  { icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
  { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiAnthropic, name: "AI", color: "#D97757" },
];

/* ── Magnetic button wrapper ── */
function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 24 });
  const springY = useSpring(y, { stiffness: 300, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.28);
    y.set((e.clientY - cy) * 0.28);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const { resolvedTheme } = useTheme();
  const meImg = resolvedTheme === "light" ? meImgLight : meImgDark;

  /* photo card 3-D tilt */
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 160, damping: 18 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative items-center justify-center overflow-hidden pb-10 pt-16 lg:py-28"
    >
      <Container size="lg" className="w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left max-lg:mx-auto">

            {/* Status badge — shimmer + scale */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border/70 bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground shimmer-on-hover cursor-default"
              >
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-emerald-500 animate-breath" />
                </span>
                <span>Available for Full-Stack Roles &amp; High-Impact Projects</span>
              </motion.div>
            </motion.div>

            {/* Name + Title */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 hidden lg:block"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground uppercase">
                {developer.name.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.03, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary"
              >
                Full-Stack Developer
              </motion.div>
            </motion.div>

            {/* Mobile photo card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-150 lg:hidden"
            >
              <div className="absolute -inset-3 rounded-3xl bg-linear-to-tr from-primary/30 via-primary/10 to-transparent blur-2xl -z-10" />
              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/90 p-2.5 sm:p-3.5">
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-muted/40 shadow-inner">
                  <Image
                    src={meImg}
                    alt={developer.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 380px, (max-width: 1024px) 440px, 510px"
                    className="object-cover object-top filter contrast-[1.02] transition-transform duration-500 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/15 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl border border-border/70 bg-card/90 backdrop-blur-md shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-foreground">{developer.name}</p>
                        <p className="text-[11px] sm:text-xs text-primary font-semibold">Full-Stack Developer</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase">Stack</p>
                        <p className="font-mono text-[11px] sm:text-xs font-bold text-foreground">Next.js • NestJS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tech pills — staggered entrance + hover lift */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              {techPills.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    "flex text-xs font-semibold p-2 md:px-3 md:py-1 rounded-md border transition-colors flex items-center gap-1 cursor-default",
                    tech.name === "NestJS"
                      ? "border-primary/40 bg-primary/10 text-primary font-bold shadow-xs"
                      : "border-border/80 bg-card text-foreground/90 hover:border-primary/40 hover:bg-card/80",
                  )}
                >
                  <tech.icon className={cn("inline-block size-4 md:size-3 mr-1")} style={{ color: tech.color }} />
                  <span className="hidden md:block">{tech.name}</span>
                </motion.span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              {developer.bio}
            </motion.p>

            {/* CTA Buttons — magnetic + shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <MagneticButton>
                <Button asChild className="shimmer-on-hover">
                  <Link className="group" href="#projects">
                    <span>View Projects</span>
                    <motion.span
                      className="inline-flex"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <ArrowRight className="size-4" />
                    </motion.span>
                  </Link>
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button asChild variant="outline" className="group shimmer-on-hover">
                  <Link href="#contact">
                    <motion.span whileHover={{ scale: 1.15, rotate: -8 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Mail className="text-primary size-4" />
                    </motion.span>
                    <span>Contact Me</span>
                  </Link>
                </Button>
              </MagneticButton>

              <ResumeDownloadButton />
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 md:gap-4 pt-2 text-xs text-muted-foreground"
            >
              <span className="font-mono uppercase tracking-wider text-[11px] text-muted-foreground/80">Connect:</span>
              {[
                { href: developer.github, icon: FaGithub, label: "GitHub" },
                { href: developer.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
              ].map((s, i) => (
                <motion.div key={s.label} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium hover:text-foreground transition-colors link-underline"
                  >
                    <s.icon className="size-3.5" />
                    <span>{s.label}</span>
                  </Link>
                </motion.div>
              ))}
              <span className="text-border">•</span>
              <span className="font-mono text-muted-foreground whitespace-nowrap">Pabna, Bangladesh</span>
            </motion.div>
          </div>

          {/* Right Column — 3-D tilt photo card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="relative w-full max-w-150 hidden lg:block"
            >
              {/* Floating glow orb */}
              <motion.div
                animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 rounded-3xl bg-primary/15 blur-3xl -z-10 pointer-events-none"
              />

              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/90 p-2.5 sm:p-3.5 glow-border transition-all duration-300">
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-muted/40 shadow-inner">
                  <Image
                    src={meImg}
                    alt={developer.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 380px, (max-width: 1024px) 440px, 510px"
                    className="object-cover object-top filter contrast-[1.02] transition-transform duration-500 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/15 to-transparent" />

                  {/* Caption */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl border border-border/70 bg-card/90 backdrop-blur-md shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-foreground">{developer.name}</p>
                        <p className="text-[11px] sm:text-xs text-primary font-semibold">Full-Stack Developer</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase">Stack</p>
                        <p className="font-mono text-[11px] sm:text-xs font-bold text-foreground">Next.js • NestJS</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
