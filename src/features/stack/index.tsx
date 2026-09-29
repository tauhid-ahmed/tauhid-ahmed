"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
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

const FILTER_TABS = [
  { id: "all", label: "All Stack" },
  { id: "backend", label: "Backend & APIs" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "data", label: "Databases & DevOps" },
  { id: "ai", label: "AI & Agents" },
] as const;

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

/* ── Tilt card wrapper ── */
function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 200, damping: 22 });

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stack() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

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
          <SectionEyebrow icon={Wrench}>Tools &amp; Technologies</SectionEyebrow>
          <SectionTitle>The Stack I Work With Daily</SectionTitle>
          <SectionDescription>
            A curated overview of backend runtimes, frontend architecture,
            databases, and development tooling I rely on to build fast,
            dependable products.
          </SectionDescription>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="relative flex flex-wrap gap-2 mb-8">
        {FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={cn(
                "relative px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors duration-200",
                isActive
                  ? "text-primary-foreground border-primary/70"
                  : "text-muted-foreground border-border/70 bg-card/60 hover:text-foreground hover:border-primary/40",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="stackFilterPill"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {tab.label}
            </motion.button>
          );
        })}
      </div>

      {/* Bento Grid */}
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
          const isMatch = activeFilter === "all" || visual.filterGroup === activeFilter;

          return (
            <TiltCard
              key={item.category}
              className={cn(visual.bentoClass, "group")}
            >
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.1, once: true }}
                animate={{ opacity: isMatch ? 1 : 0.3, scale: isMatch ? 1 : 0.98 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "relative rounded-2xl border p-6 flex flex-col justify-between overflow-hidden h-full",
                  "transition-colors duration-300",
                  isBackend
                    ? "border-primary/50 bg-card/90 shadow-lg shadow-primary/5 ring-1 ring-primary/20 hover:ring-primary/40"
                    : "border-border/80 bg-card/75 hover:bg-card hover:border-primary/35 hover:shadow-md",
                )}
              >
                {/* Ambient glow orb */}
                <div
                  className={cn(
                    "absolute -top-12 -right-12 size-36 rounded-full bg-gradient-to-bl blur-3xl opacity-20 pointer-events-none group-hover:opacity-50 transition-opacity duration-500",
                    visual.accentGlow,
                  )}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 360, damping: 18 }}
                        className={cn(
                          "size-9 rounded-xl flex items-center justify-center border shadow-2xs",
                          visual.iconWrap,
                        )}
                      >
                        <Icon className="size-4.5" />
                      </motion.div>
                      <h3 className="text-base font-bold text-foreground tracking-tight">
                        {item.category}
                      </h3>
                    </div>

                    {isBackend && (
                      <motion.span
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30 shadow-2xs"
                      >
                        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                        Core Focus
                      </motion.span>
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

                  {/* Backend highlight banner */}
                  {isBackend && (
                    <div className="mb-4 p-3 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                        <SiNestjs className="size-4 text-[#E0234E]" />
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-foreground">NestJS Architecture</span>
                        <p className="text-[11px] text-muted-foreground">
                          Modular services, dependency injection, and clean REST/RPC APIs
                        </p>
                      </div>
                    </div>
                  )}

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

                  {/* Skill pills */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.035 } } }}
                  >
                    {item.skills.map((skill) => {
                      const meta = skillIconMap[skill.name];
                      const SkillIcon = meta?.icon;
                      const isNest = skill.name === "NestJS";

                      return (
                        <motion.div
                          key={skill.name}
                          variants={{
                            hidden: { opacity: 0, scale: 0.85 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
                          }}
                          whileHover={{ y: -3, scale: isNest ? 1.08 : 1.06 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className={cn(
                            "group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-default select-none border",
                            "transition-colors duration-150",
                            isNest
                              ? "bg-primary text-primary-foreground font-bold border-primary/50 shadow-md shadow-primary/25 scale-[1.04]"
                              : skill.isPillar
                                ? "bg-card text-foreground font-semibold border-primary/35 shadow-2xs hover:border-primary hover:bg-card/90 hover:shadow-primary/15 hover:shadow-md"
                                : "bg-background/80 text-muted-foreground border-border/70 hover:text-foreground hover:border-primary/40 hover:bg-card",
                          )}
                        >
                          {SkillIcon && (
                            <SkillIcon
                              className={cn(
                                "size-3.5 shrink-0 transition-transform duration-200 group-hover/pill:scale-110",
                                isNest ? "text-primary-foreground" : meta?.color || "text-foreground",
                              )}
                            />
                          )}
                          <span>{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Footer metric */}
                <div className="mt-6 pt-3.5 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <motion.span
                    className="flex items-center gap-1.5"
                    whileHover={{ color: "var(--primary)" }}
                  >
                    <span className="size-1.5 rounded-full bg-primary/70" />
                    {item.skills.length} Technologies
                  </motion.span>
                  <span className="text-[10px] uppercase font-semibold text-muted-foreground/75 tracking-wider">
                    {isBackend ? "Enterprise Ready" : isAI ? "Modern Tooling" : "Production Tested"}
                  </span>
                </div>
              </motion.div>
            </TiltCard>
          );
        })}
      </div>

      {/* Engineering Philosophy Callout */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 p-6 md:p-10 rounded-2xl border border-border/80 bg-card/80 shadow-xs flex flex-col gap-4 sm:gap-5 sm:flex-row sm:items-start md:items-center sm:justify-between hover:border-primary/40 hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start gap-3 sm:gap-4 min-w-0">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 360, damping: 18 }}
            className="size-9 sm:size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary"
          >
            <Code className="size-4 sm:size-5" />
          </motion.div>
          <div className="min-w-0">
            <h4 className="text-sm sm:text-base font-bold text-foreground leading-snug">
              Pragmatic Engineering &amp; Tooling Mindset
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
              I prioritize clean modular architecture, strict TypeScript typing,
              and real-world performance over hype. I adopt modern AI developer
              tools (Claude Code, Cursor) to automate tedious tasks while
              keeping code reviews, system design, and security strictly
              engineer-driven.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
