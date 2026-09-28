"use client";

import { Layers } from "lucide-react";
import { domainExperiences } from "@/data/portfolio-data";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import {
  AnimatedCard,
  TechBadge,
  MonoLabel,
  BulletList,
} from "@/components/ui/primitives";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        icon={Layers}
        eyebrow="Featured Systems & Domains"
        title="Domain Systems & Engineered Workflows"
        description="A look at core architectures, operational platforms, and production systems I've designed and delivered across key business areas."
        className="mb-10"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {domainExperiences.map((domain, index) => (
          <AnimatedCard
            key={domain.domain}
            index={index}
            className="group p-6 sm:p-7 rounded-2xl border border-border/80 bg-card/70 hover:bg-card hover:border-primary/40 transition-all flex flex-col justify-between hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-primary px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                  {domain.scope}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>

              <h4 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {domain.domain}
              </h4>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {domain.description}
              </p>

              <div className="space-y-1.5 pt-2">
                <MonoLabel>Key Architectural Focus:</MonoLabel>
                <BulletList items={domain.architecturalFocus} />
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-border/50 flex flex-wrap items-center gap-1.5">
              {domain.keyTechnologies.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}

