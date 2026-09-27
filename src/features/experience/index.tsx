"use client";

import { motion } from "motion/react";
import { workExperience, educationHistory } from "@/data/portfolio-data";
import { Container } from "@/components/layout/container";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  MapPin,
} from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-10 md:py-16 relative">
      <Container size="lg">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <div className="section-eyebrow">
            <Briefcase className="size-3.5" />
            <span>Career History & Visual CV</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Professional Experience
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            A track record of engineering full-stack production systems, leading
            cross-functional teams, and delivering reliable software for
            international businesses.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-8 relative">
          {workExperience.map((exp, index) => {
            const isCurrent = exp.period.includes("Present");
            return (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.15, once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                className={`relative rounded-2xl border p-6 sm:p-8 transition-all ${
                  isCurrent
                    ? "border-primary/50 bg-card shadow-lg ring-1 ring-primary/20"
                    : "border-border/80 bg-card/60 hover:bg-card hover:border-border"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6 pb-6 border-b border-border/60">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                        {exp.company}
                      </h3>
                      {isCurrent && (
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="text-base sm:text-lg font-semibold text-primary">
                      {exp.role}
                    </div>

                    {exp.leadHighlight && (
                      <p className="text-xs font-mono font-medium text-muted-foreground">
                        Focus: {exp.leadHighlight}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-muted-foreground shrink-0">
                    <span className="inline-flex items-center gap-1.5 font-bold text-foreground bg-muted/60 px-3 py-1 rounded-md border border-border/50">
                      <Calendar className="size-3.5 text-primary" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold">
                    Key Deliverables & Responsibilities:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-foreground/90">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 leading-relaxed"
                      >
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-muted-foreground mr-2 font-medium">
                    Core Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-0.5 rounded-md border border-border/70 bg-background/50 text-foreground/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Education & Continuous Learning */}
        <div className="mt-14 pt-12 border-t border-border/70">
          <div className="flex items-center gap-2.5 mb-6 text-foreground font-bold">
            <GraduationCap className="size-5 text-primary" />
            <h3 className="text-lg font-bold tracking-tight">
              Education & Engineering Development
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {educationHistory.map((edu, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-border/70 bg-card/40 space-y-2 text-left"
              >
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>{edu.period}</span>
                </div>
                <h4 className="text-sm font-bold text-foreground">
                  {edu.degree}
                </h4>
                <p className="text-xs font-semibold text-primary">
                  {edu.institution}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
