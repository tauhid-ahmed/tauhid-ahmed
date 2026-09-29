"use client";

import { workExperience, educationHistory } from "@/data/portfolio-data";
import { Section } from "@/components/section";
import { motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  MapPin,
} from "lucide-react";
import {
  SectionHeader,
  SectionEyebrow,
  SectionTitle,
} from "@/components/section-header";
import { AnimatedCard, TechBadge, MonoLabel } from "@/components/ui/primitives";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        icon={Briefcase}
        eyebrow="Career & Background"
        title="Professional Experience"
        description="A track record of building full-stack web applications, leading developer teams, and delivering reliable software for companies and global clients."
        className="mb-10"
      />

      {/* Experience Timeline */}
      <div className="space-y-8 relative">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-primary/40 via-border/60 to-transparent hidden lg:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top" }}
        />

        {workExperience.map((exp, index) => {
          const isCurrent = exp.period.includes("Present");
          return (
            <AnimatedCard
              key={exp.company}
              index={index}
              as="article"
              tilt={false}
              className={`relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${
                isCurrent
                  ? "border-primary/50 bg-card shadow-lg ring-1 ring-primary/20 hover:ring-primary/35 hover:shadow-primary/10"
                  : "border-border/80 bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-md"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-[5px] top-8 size-2.5 rounded-full bg-primary border-2 border-background hidden lg:block"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 400, damping: 20 }}
              />

              {isCurrent && (
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{ opacity: [0, 0.06, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background: "radial-gradient(ellipse at 20% 20%, var(--primary), transparent 70%)",
                  }}
                />
              )}

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6 pb-6 border-b border-border/60">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                      {exp.company}
                    </h3>
                    {isCurrent && (
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30"
                      >
                        Current Role
                      </motion.span>
                    )}
                  </div>
                  <div className="text-md font-medium text-primary -mt-0.5">{exp.role}</div>
                  {exp.leadHighlight && (
                    <p className="text-sm font-mono font-medium text-muted-foreground">
                      Focus: {exp.leadHighlight}
                    </p>
                  )}
                </div>

                <div className="flex flex sm:flex-col sm:items-end gap-1 text-xs font-mono text-muted-foreground shrink-0">
                  <motion.span
                    whileHover={{ scale: 1.04 }}
                    className="inline-flex items-center gap-1.5 font-bold text-foreground bg-muted/60 px-3 py-1 rounded-md border border-border/50 whitespace-nowrap"
                  >
                    <Calendar className="size-3.5 text-primary" />
                    {exp.period}
                  </motion.span>
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground whitespace-nowrap">
                    <MapPin className="size-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                <MonoLabel className="text-base">Key Responsibilities &amp; Deliverables:</MonoLabel>
                <motion.ul
                  className="grid md:grid-cols-2 gap-3 text-md text-foreground/90 mt-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
                >
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                      }}
                      className="flex items-start gap-2.5 leading-relaxed"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-2" />
                      </motion.div>
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-1">
                <MonoLabel className="text-xs mr-1">Core Technologies:</MonoLabel>
                {exp.technologies.map((tech) => (
                  <TechBadge key={tech} className="text-xs text-primary/80">{tech}</TechBadge>
                ))}
              </div>
            </AnimatedCard>
          );
        })}
      </div>

      {/* Education */}
      <div className="mt-14 pt-12 border-t border-border/70">
        <SectionEyebrow icon={GraduationCap}>Learning &amp; Growth</SectionEyebrow>
        <SectionTitle as="h3" className="mb-6">Education &amp; Engineering Development</SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3, borderColor: "color-mix(in srgb, var(--primary) 50%, transparent)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-xl border border-border/70 bg-card/40 space-y-2 text-left hover:border-primary hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between text-sm font-mono text-muted-foreground">
                <span>{edu.period}</span>
              </div>
              <h4 className="text-base font-semibold text-foreground">{edu.degree}</h4>
              <p className="text-md font-medium text-primary -mt-0.5">{edu.institution}</p>
              <p className="text-md text-muted-foreground leading-relaxed pt-1">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
