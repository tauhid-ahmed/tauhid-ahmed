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
        eyebrow="Engineering Showcase"
        title="Selected Projects & Domain Experience"
        description="Visual evidence of production web applications, edge architectures, and real-world domain engineering across enterprise domains."
        className="mb-10"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {domainExperiences.map((domain, index) => (
          <AnimatedCard
            key={domain.domain}
            index={index}
            className="group p-6 rounded-2xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                  {domain.scope}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 2}
                </span>
              </div>

              <h4 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {domain.domain}
              </h4>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {domain.description}
              </p>

              <div className="space-y-1.5 pt-2">
                <MonoLabel>Key Technical Focus:</MonoLabel>
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

