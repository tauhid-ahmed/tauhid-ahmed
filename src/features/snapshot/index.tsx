"use client";

import { motion } from "motion/react";
import { professionalSnapshot } from "@/data/portfolio-data";
import { Container } from "@/components/layout/container";
import { Layers, Terminal, Sparkles, Users, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [Layers, Terminal, Cpu, Sparkles, Users];

export function ProfessionalSnapshot() {
  return (
    <section className="py-8 border-y border-border/70 bg-card/40 backdrop-blur-xs">
      <Container size="lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {professionalSnapshot.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.15, once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                className={cn(
                  "group p-4 rounded-xl border border-border/60 bg-card/60 hover:bg-card hover:border-primary/40 transition-all flex flex-col justify-between",
                  index === professionalSnapshot.length - 1 &&
                    "col-span-2 lg:col-span-1",
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-extrabold text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {item.number}
                  </span>
                  <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground/90 uppercase tracking-wider">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-muted-foreground leading-normal mt-1">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
