"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { technicalMatrix } from "@/data/portfolio-data";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiShadcnui,
  SiFramer,
  SiGreensock,
  SiFigma,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiHono,
  SiTrpc,
  SiClerk,
  SiPostgresql,
  SiRedis,
  SiDrizzle,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiAnthropic,
  SiOpenai,
} from "react-icons/si";
import {
  Cpu,
  Layers,
  Server,
  Database,
  Shield,
  GitBranch,
  Bot,
  Code,
  Wrench,
  Terminal,
  Lock,
  Globe,
  Gauge,
  Search,
  Key,
  Boxes,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
} from "@/components/section-header";

type IconComponent = IconType | LucideIcon;

interface SkillMeta {
  icon: IconComponent;
  color?: string;
}

// Brand icon & aesthetic accent color map
const skillIconMap: Record<string, SkillMeta> = {
  TypeScript: { icon: SiTypescript, color: "text-[#3178C6]" },
  JavaScript: { icon: SiJavascript, color: "text-[#F7DF1E]" },
  React: { icon: SiReact, color: "text-[#61DAFB]" },
  "Next.js (App Router)": { icon: SiNextdotjs, color: "text-foreground" },
  Redux: { icon: SiRedux, color: "text-[#764ABC]" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[#06B6D4]" },
  SCSS: { icon: SiSass, color: "text-[#CC6699]" },
  "Shadcn UI": { icon: SiShadcnui, color: "text-foreground" },
  "Motion for React": { icon: SiFramer, color: "text-[#0055FF]" },
  GSAP: { icon: SiGreensock, color: "text-[#88CE02]" },
  Figma: { icon: SiFigma, color: "text-[#F24E1E]" },
  NestJS: { icon: SiNestjs, color: "text-[#E0234E]" },
  "Node.js": { icon: SiNodedotjs, color: "text-[#5FA04E]" },
  "Express.js": { icon: SiExpress, color: "text-foreground/90" },
  "REST APIs": { icon: Globe, color: "text-primary" },
  GraphQL: { icon: SiGraphql, color: "text-[#E10098]" },
  Hono: { icon: SiHono, color: "text-[#E36002]" },
  tRPC: { icon: SiTrpc, color: "text-[#2596BE]" },
  "API Integration": { icon: Workflow, color: "text-primary" },
  "Component Architecture": { icon: Boxes, color: "text-indigo-400" },
  "Auth.js (NextAuth)": { icon: Shield, color: "text-primary" },
  Clerk: { icon: SiClerk, color: "text-[#6C47FF]" },
  "Custom Authentication": { icon: Key, color: "text-amber-400" },
  "Authorization & RBAC": { icon: Lock, color: "text-emerald-400" },
  "Web Security Best Practices": { icon: Shield, color: "text-cyan-400" },
  PostgreSQL: { icon: SiPostgresql, color: "text-[#4169E1]" },
  "Neon Postgres": { icon: Database, color: "text-[#00E599]" },
  Redis: { icon: SiRedis, color: "text-[#DC382D]" },
  "Drizzle ORM": { icon: SiDrizzle, color: "text-[#C5F74F]" },
  Prisma: { icon: SiPrisma, color: "text-[#5A67D8]" },
  NoSQL: { icon: Database, color: "text-muted-foreground" },
  Git: { icon: SiGit, color: "text-[#F05032]" },
  GitHub: { icon: SiGithub, color: "text-foreground" },
  Docker: { icon: SiDocker, color: "text-[#2496ED]" },
  "Vercel CI/CD": { icon: SiVercel, color: "text-foreground" },
  "Performance Optimization (CWV)": { icon: Gauge, color: "text-emerald-400" },
  "Production SEO": { icon: Search, color: "text-primary" },
  "LLM APIs & Streaming": { icon: SiOpenai, color: "text-emerald-400" },
  "AI API Integration": { icon: Bot, color: "text-indigo-400" },
  "Agentic Workflows": { icon: Workflow, color: "text-purple-400" },
  "Claude Code": { icon: SiAnthropic, color: "text-[#D97757]" },
  Codex: { icon: SiOpenai, color: "text-foreground" },
  "GitHub Copilot": { icon: SiGithub, color: "text-[#8957e5]" },
  Cursor: { icon: Terminal, color: "text-foreground" },
};

const categoryVisuals: Record<
  string,
  {
    icon: LucideIcon;
    iconWrap: string;
    accentGlow: string;
    bentoClass: string;
    filterGroup: string;
  }
> = {
  Backend: {
    icon: Server,
    iconWrap: "bg-primary/10 text-primary border-primary/25",
    accentGlow: "from-primary/15 via-primary/5 to-transparent",
    bentoClass: "lg:col-span-6",
    filterGroup: "backend",
  },
  Frontend: {
    icon: Layers,
    iconWrap: "bg-primary/10 text-primary border-primary/25",
    accentGlow: "from-primary/15 via-primary/5 to-transparent",
    bentoClass: "lg:col-span-6",
    filterGroup: "frontend",
  },
  "AI & Agentic Engineering": {
    icon: Bot,
    iconWrap: "bg-primary/10 text-primary border-primary/25",
    accentGlow: "from-primary/15 via-primary/5 to-transparent",
    bentoClass: "lg:col-span-4",
    filterGroup: "ai",
  },
  "Databases & ORM": {
    icon: Database,
    iconWrap: "bg-primary/10 text-primary border-primary/25",
    accentGlow: "from-primary/15 via-primary/5 to-transparent",
    bentoClass: "lg:col-span-4",
    filterGroup: "data",
  },
  "APIs & Architecture": {
    icon: Cpu,
    iconWrap: "bg-primary/10 text-primary border-primary/25",
    accentGlow: "from-primary/15 via-primary/5 to-transparent",
    bentoClass: "lg:col-span-4",
    filterGroup: "backend",
  },
  Languages: {
    icon: Code,
    iconWrap: "bg-primary/10 text-primary border-primary/25",
    accentGlow: "from-primary/15 via-primary/5 to-transparent",
    bentoClass: "lg:col-span-4",
    filterGroup: "core",
  },
  "Authentication & Security": {
    icon: Shield,
    iconWrap: "bg-primary/10 text-primary border-primary/25",
    accentGlow: "from-primary/15 via-primary/5 to-transparent",
    bentoClass: "lg:col-span-4",
    filterGroup: "backend",
  },
  "DevOps & Production": {
    icon: GitBranch,
    iconWrap: "bg-primary/10 text-primary border-primary/25",
    accentGlow: "from-primary/15 via-primary/5 to-transparent",
    bentoClass: "lg:col-span-4",
    filterGroup: "data",
  },
};

// Filter categories
const FILTER_TABS = [
  { id: "all", label: "All Stack" },
  { id: "backend", label: "Backend & APIs" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "data", label: "Databases & DevOps" },
  { id: "ai", label: "AI & Agents" },
] as const;

// Desired Bento order
const BENTO_ORDER = [
  "Backend",
  "Frontend",
  "AI & Agentic Engineering",
  "Databases & ORM",
  "APIs & Architecture",
  "Languages",
  "Authentication & Security",
  "DevOps & Production",
];

export function Stack() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Sort technicalMatrix according to Bento order
  const sortedMatrix = [...technicalMatrix].sort((a, b) => {
    const idxA = BENTO_ORDER.indexOf(a.category);
    const idxB = BENTO_ORDER.indexOf(b.category);
    return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
  });

  return (
    <Section id="stack" className="bg-card/25 border-y border-border/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
        <div className="space-y-2 max-w-2xl">
          <SectionEyebrow icon={Wrench}>Tools & Technologies</SectionEyebrow>
          <SectionTitle>The Stack I Work With Daily</SectionTitle>
          <SectionDescription>
            A curated overview of backend runtimes, frontend architecture, databases, and development tooling I rely on to build fast, dependable products.
          </SectionDescription>
        </div>
      </div>

      {/* Bento Grid Technical Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {sortedMatrix.map((item, index) => {
            const visual = categoryVisuals[item.category] || {
              icon: Code,
              iconWrap: "bg-muted text-foreground border-border/60",
              accentGlow: "from-muted/20 to-transparent",
              bentoClass: "lg:col-span-4",
              filterGroup: "all",
            };

            const Icon = visual.icon;
            const isBackend = item.category === "Backend";
            const isAI = item.category === "AI & Agentic Engineering";
            const isLanguages = item.category === "Languages";

            // Check if card matches active filter
            const isMatch =
              activeFilter === "all" || visual.filterGroup === activeFilter;

            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.15, once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                className={cn(
                  visual.bentoClass,
                  "relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 group overflow-hidden",
                  isMatch ? "opacity-100" : "opacity-35 hover:opacity-90",
                  isBackend
                    ? "border-primary/50 bg-card/90 shadow-lg shadow-primary/5 ring-1 ring-primary/20"
                    : "border-border/80 bg-card/75 hover:bg-card hover:border-primary/35 hover:shadow-md transition-all",
                )}
              >
                {/* Ambient Top Glow Plate */}
                <div
                  className={cn(
                    "absolute -top-12 -right-12 size-36 rounded-full bg-gradient-to-bl blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500",
                    visual.accentGlow,
                  )}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "size-9 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-105",
                          visual.iconWrap,
                        )}
                      >
                        <Icon className="size-4.5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground tracking-tight flex items-center gap-2">
                          {item.category}
                        </h3>
                      </div>
                    </div>

                    {/* Prominent Core Focus Badge */}
                    {isBackend && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30 shadow-2xs">
                        <span className="size-1.5 rounded-full bg-primary" />
                        Core Focus
                      </span>
                    )}

                    {isAI && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">
                        AI Workflows
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Backend Highlight Banner */}
                  {isBackend && (
                    <div className="mb-4 p-3 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                        <SiNestjs className="size-4 text-[#E0234E]" />
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-foreground">
                          NestJS Architecture
                        </span>
                        <p className="text-[11px] text-muted-foreground">
                          Modular services, dependency injection, and clean REST/RPC APIs
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Languages Highlight Detail */}
                  {isLanguages && (
                    <div className="mb-4 p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs">
                      <span className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="size-3.5 text-primary" />
                        Strict Type Safety
                      </span>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        End-to-end typed contracts spanning frontend and backend codebases.
                      </p>
                    </div>
                  )}

                  {/* Skills Pills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => {
                      const meta = skillIconMap[skill.name];
                      const SkillIcon = meta?.icon;
                      const isNest = skill.name === "NestJS";

                      return (
                        <div
                          key={skill.name}
                          className={cn(
                            "group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-default select-none border",
                            isNest
                              ? "bg-primary text-primary-foreground font-bold border-primary/50 shadow-md shadow-primary/25 scale-[1.04]"
                              : skill.isPillar
                                ? "bg-card text-foreground font-semibold border-primary/35 shadow-2xs hover:border-primary hover:bg-card/90 hover:scale-[1.02]"
                                : "bg-background/80 text-muted-foreground hover:text-foreground border-border/70 hover:border-border hover:bg-card hover:scale-[1.02]",
                          )}
                        >
                          {SkillIcon && (
                            <SkillIcon
                              className={cn(
                                "size-3.5 shrink-0 transition-transform duration-200 group-hover/pill:scale-115",
                                isNest
                                  ? "text-primary-foreground"
                                  : meta?.color || "text-foreground",
                              )}
                            />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer Metric Bar */}
                <div className="mt-6 pt-3.5 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary/70" />
                    {item.skills.length} Technologies
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-muted-foreground/75 tracking-wider">
                    {isBackend
                      ? "Enterprise Ready"
                      : isAI
                        ? "Modern Tooling"
                        : "Production Tested"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering Philosophy Callout */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl border border-border/80 bg-card/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
              <Code className="size-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-foreground">
                Pragmatic Engineering & Tooling Mindset
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                I prioritize clean modular architecture, strict TypeScript typing, and real-world performance over hype. I adopt modern AI developer tools (Claude Code, Cursor) to automate tedious tasks while keeping code reviews, system design, and security strictly engineer-driven.
              </p>
            </div>
          </div>
          <span className="font-mono text-xs font-semibold text-primary px-3.5 py-1.5 rounded-lg bg-primary/10 border border-primary/25 shrink-0 text-center self-start sm:self-center">
            Human-Guided Craft
          </span>
        </div>
    </Section>
  );
}
