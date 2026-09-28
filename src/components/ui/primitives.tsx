"use client";

import { motion, type Variants, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  AnimatedCard — motion.div with whileInView fade-in                 */
/* ------------------------------------------------------------------ */

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type AnimatedCardProps = {
  /** Stagger index — used to calculate animation delay */
  index?: number;
  /** How much of the element must be visible to trigger (0–1) */
  threshold?: number;
  /** HTML tag to render (default: div) */
  as?: "div" | "article";
  className?: string;
  children: React.ReactNode;
};

export function AnimatedCard({
  index = 0,
  threshold = 0.15,
  as = "div",
  className,
  children,
}: AnimatedCardProps) {
  const Tag = as === "article" ? motion.article : motion.div;

  const transition: Transition = {
    duration: 0.5,
    delay: index * 0.04,
    ease: "easeOut",
  };

  return (
    <Tag
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: threshold, once: true }}
      transition={transition}
      className={className}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  TechBadge — the repeated mono tech pill                            */
/* ------------------------------------------------------------------ */

type TechBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "text-[10px] font-mono px-2 py-0.5 rounded-md border border-primary/50 bg-background/50 text-muted-foreground font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  MonoLabel — uppercase mono caption (e.g. "Core Technologies:")      */
/* ------------------------------------------------------------------ */

type MonoLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function MonoLabel({ children, className }: MonoLabelProps) {
  return (
    <span
      className={cn(
        "text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-bold",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  BulletList — check-marked list (experience responsibilities, etc.) */
/* ------------------------------------------------------------------ */

type BulletListProps = {
  items: string[];
  /** Grid columns on md+ screens */
  columns?: 1 | 2;
  className?: string;
};

export function BulletList({ items, columns = 1, className }: BulletListProps) {
  return (
    <ul
      className={cn(
        "space-y-3 text-sm text-foreground/90",
        columns === 2 && "grid md:grid-cols-2 gap-3 space-y-0",
        className,
      )}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
          <span className="size-1.5 rounded-full bg-primary shrink-0 mt-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/*  StatusBadge — small pill with optional ping dot                    */
/* ------------------------------------------------------------------ */

type StatusBadgeProps = {
  children: React.ReactNode;
  /** Shows a pinging live dot when true */
  live?: boolean;
  className?: string;
};

export function StatusBadge({
  children,
  live = false,
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/70 bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground",
        className,
      )}
    >
      {live && (
        <span className="relative flex size-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
}
