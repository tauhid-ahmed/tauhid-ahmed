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
import { motion } from "motion/react";

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
            tilt={true}
            className="group relative p-6 sm:p-7 rounded-2xl border border-border/80 bg-card/70 hover:bg-card hover:border-primary/40 transition-all flex flex-col justify-between hover:shadow-xl hover:shadow-primary/8 overflow-hidden"
          >
            {/* Animated ambient glow */}
            <div className="absolute -top-10 -right-10 size-32 rounded-full bg-primary/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Animated border line */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <motion.span
                  whileHover={{ scale: 1.06, y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="text-xs font-mono font-semibold text-primary px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20 hover:border-primary/50 transition-colors shimmer-on-hover"
                >
                  {domain.scope}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.2 }}
                  className="font-mono text-xs text-muted-foreground"
                >
                  0{index + 1}
                </motion.span>
              </div>

              <h4 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                {domain.domain}
              </h4>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{domain.description}</p>

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
