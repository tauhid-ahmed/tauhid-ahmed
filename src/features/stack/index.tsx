"use client";

import { motion } from "motion/react";
import { technicalMatrix } from "@/data/portfolio-data";
import { Container } from "@/components/layout/container";
import {
  Cpu,
  Layers,
  Server,
  Database,
  Shield,
  GitBranch,
  Bot,
  Code,
  Sparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Code,
  Frontend: Layers,
  Backend: Server,
  "APIs & Architecture": Cpu,
  "Authentication & Security": Shield,
  "Databases & ORM": Database,
  "DevOps & Production": GitBranch,
  "AI & Agentic Engineering": Bot,
};

export function Stack() {

  return (
    <section id="stack" className="py-20 md:py-28 relative bg-card/25 border-y border-border/60">
      <Container size="lg">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <div className="section-eyebrow">
            <Cpu className="size-3.5" />
            <span>Technical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Technologies & Engineering Stack
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            A structured map of production technologies, backend frameworks, data layers, and AI engineering workflows utilized across full-stack systems.
          </p>
        </div>

        {/* Technical Matrix Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {technicalMatrix.map((item, index) => {
            const Icon = categoryIcons[item.category] || Code;
            const isBackend = item.category === "Backend";
            const isAI = item.category === "AI & Agentic Engineering";

            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative rounded-2xl border p-5 flex flex-col justify-between transition-all ${
                  isBackend
                    ? "border-primary/60 bg-card shadow-md ring-1 ring-primary/25"
                    : isAI
                    ? "border-indigo-500/40 bg-card/90"
                    : "border-border/70 bg-card/60 hover:bg-card hover:border-border"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`size-8 rounded-lg flex items-center justify-center ${
                          isBackend
                            ? "bg-primary text-primary-foreground"
                            : isAI
                            ? "bg-indigo-500/15 text-indigo-400"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground">
                          {item.category}
                        </h3>
                      </div>
                    </div>

                    {isBackend && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                        Core Focus
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-muted-foreground leading-normal mb-4">
                    {item.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => {
                      const isNest = skill.name === "NestJS";
                      return (
                        <span
                          key={skill.name}
                          className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all ${
                            isNest
                              ? "bg-primary text-primary-foreground font-bold shadow-xs scale-[1.03]"
                              : skill.isPillar
                              ? "bg-primary/10 text-primary border border-primary/20 font-semibold"
                              : "bg-background/70 text-foreground/80 border border-border/60 hover:border-primary/30"
                          }`}
                        >
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 text-[10px] font-mono text-muted-foreground">
                  {item.skills.length} core technologies
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Capability Note */}
        <div className="mt-8 p-5 rounded-xl border border-border/70 bg-card/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-primary shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-foreground">
                AI Engineering & Autonomous Workflows
              </h4>
              <p className="text-xs text-muted-foreground">
                Integrating LLM APIs, structured model outputs, prompt chaining, and AI coding agents (Claude Code, Cursor) into production developer velocity.
              </p>
            </div>
          </div>
          <span className="font-mono text-xs font-semibold text-primary px-3 py-1 rounded-md bg-primary/10 border border-primary/20 shrink-0 text-center">
            Pragmatic Engineering
          </span>
        </div>
      </Container>
    </section>
  );
}
