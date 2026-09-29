"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { professionalSnapshot } from "@/data/portfolio-data";
import { Container } from "@/components/layout/container";
import { Layers, Terminal, Database, Workflow, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [Layers, Terminal, Database, Workflow, Users];

function SnapshotCard({
  item,
  index,
  Icon,
}: {
  item: { number: string; label: string; detail: string };
  index: number;
  Icon: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, scale: 1.03 }}
      viewport={{ amount: 0.15, once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative p-4 rounded-xl border border-border/60 bg-card/60",
        "hover:bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/8",
        "transition-colors duration-300 flex flex-col justify-between overflow-hidden",
        "shimmer-on-hover cursor-default",
        index === professionalSnapshot.length - 1 && "col-span-2 lg:col-span-1",
      )}
    >
      {/* Ambient glow */}
      <div className="absolute -top-8 -right-8 size-20 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-center justify-between mb-2">
        <motion.span
          className="text-sm font-extrabold text-foreground group-hover:text-primary transition-colors tracking-tight"
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.08 + 0.1 }}
        >
          {item.number}
        </motion.span>
        <motion.div
          whileHover={{ rotate: 15, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 16 }}
        >
          <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </div>

      <div>
        <h4 className="text-xs font-bold text-foreground/90 uppercase tracking-wider group-hover:text-foreground transition-colors">
          {item.label}
        </h4>
        <p className="text-[11px] text-muted-foreground leading-normal mt-1">{item.detail}</p>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary/60 to-transparent rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}

export function ProfessionalSnapshot() {
  return (
    <section className="py-8 border-y border-border/70 bg-card/40 backdrop-blur-xs">
      <Container size="lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {professionalSnapshot.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <SnapshotCard key={item.label} item={item} index={index} Icon={Icon} />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
