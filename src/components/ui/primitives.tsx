"use client";

import { motion, type Variants, type Transition, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  AnimatedCard — scroll-triggered fade + lift, whileHover glow lift  */
/* ------------------------------------------------------------------ */

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0 },
};

type AnimatedCardProps = {
  index?: number;
  threshold?: number;
  as?: "div" | "article";
  className?: string;
  children: React.ReactNode;
  /** Enable 3-D tilt on hover (default false) */
  tilt?: boolean;
};

export function AnimatedCard({
  index = 0,
  threshold = 0.15,
  as = "div",
  className,
  children,
  tilt = false,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as === "article" ? motion.article : motion.div;

  /* tilt values */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const transition: Transition = {
    duration: 0.5,
    delay: index * 0.06,
    ease: [0.16, 1, 0.3, 1],
  };

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLElement>}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: tilt ? 0 : -4 }}
      viewport={{ amount: threshold, once: true }}
      transition={transition}
      style={tilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  TechBadge — mono tech pill with hover shimmer + lift               */
/* ------------------------------------------------------------------ */

type TechBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "tech-pill text-[10px] px-2 py-0.5",
        className,
      )}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/*  MonoLabel — uppercase mono caption                                 */
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
/*  BulletList — animated stagger on scroll                           */
/* ------------------------------------------------------------------ */

type BulletListProps = {
  items: string[];
  columns?: 1 | 2;
  className?: string;
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export function BulletList({ items, columns = 1, className }: BulletListProps) {
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={cn(
        "space-y-3 text-sm text-foreground/90",
        columns === 2 && "grid md:grid-cols-2 gap-3 space-y-0",
        className,
      )}
    >
      {items.map((item, i) => (
        <motion.li key={i} variants={listItemVariants} className="flex items-start gap-2.5 leading-relaxed">
          <motion.span
            className="size-1.5 rounded-full bg-primary shrink-0 mt-2"
            whileInView={{ scale: [0, 1.4, 1] }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
          />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

/* ------------------------------------------------------------------ */
/*  StatusBadge — pill with optional pinging live dot + shimmer        */
/* ------------------------------------------------------------------ */

type StatusBadgeProps = {
  children: React.ReactNode;
  live?: boolean;
  className?: string;
};

export function StatusBadge({ children, live = false, className }: StatusBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/70 bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground shimmer-on-hover",
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
    </motion.span>
  );
}
