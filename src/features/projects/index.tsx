"use client";

import { motion } from "motion/react";
import { Layers } from "lucide-react";
import { domainExperiences } from "@/data/portfolio-data";
import { Container } from "@/components/layout/container";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <Container size="lg">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <div className="section-eyebrow">
            <Layers className="size-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Selected Projects & Domain Experience
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            Visual evidence of production web applications, edge architectures,
            and real-world domain engineering across enterprise domains.
          </p>
        </div>

        {/* 02. Broader Application Domains */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Domain Engineering Experience
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Real-world application architectures developed across enterprise
                sectors.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span>Production Systems</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {domainExperiences.map((domain, index) => (
              <motion.div
                key={domain.domain}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.15, once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
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
                    <span className="text-[11px] font-mono text-muted-foreground uppercase font-bold">
                      Key Technical Focus:
                    </span>
                    <ul className="space-y-1 text-xs text-foreground/85">
                      {domain.architecturalFocus.map((focus, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-primary" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 flex flex-wrap items-center gap-1.5">
                  {domain.keyTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md border border-border/60 bg-background/50 text-muted-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
