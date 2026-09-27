"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from "motion/react";
import { developer } from "@/data/portfolio-data";

const name = developer.firstName ?? "Anonymous";
const role = "Full-Stack Developer";

/* -------------------- timing -------------------- */
const LETTER_STAGGER = 0.09;
const LETTER_DURATION = 0.9;
const ROLE_DELAY = name.length * LETTER_STAGGER + 0.35;
const HOLD = 0.55;
const TOTAL_MS = (ROLE_DELAY + 0.7 + HOLD) * 1000;

/* -------------------- variants -------------------- */

const letterVariants: Variants = {
  initial: { y: "115%" },
  animate: { y: "0%" },
};

const getLetterTransition = (i: number): Transition => ({
  duration: LETTER_DURATION,
  delay: 0.2 + i * LETTER_STAGGER,
  ease: [0.19, 1, 0.22, 1], // expo-out — the "expensive" curve
});

const roleVariants: Variants = {
  initial: { y: 14, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

/* -------------------- component -------------------- */

export default function InitialLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), TOTAL_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!mounted ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-background text-foreground"
        >
          {/* subtle radial vignette for depth */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, transparent 45%, color-mix(in oklab, var(--background) 85%, black) 100%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-300%" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="relative flex flex-col items-center"
          >
            {/* Name — masked slide-up, one letter at a time */}
            <h1
              className="flex text-[clamp(3.5rem,8vw,6.5rem)] font-semibold leading-none tracking-[-0.04em]"
              aria-label={name}
            >
              {name.split("").map((letter, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden py-[0.08em]"
                >
                  <motion.span
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    transition={getLetterTransition(i)}
                    className="inline-block will-change-transform"
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Hairline divider that draws in */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: ROLE_DELAY - 0.15,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="mt-7 h-px w-24 origin-center bg-foreground/25"
            />

            {/* Role — fades up beneath divider */}
            <motion.p
              variants={roleVariants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.7,
                delay: ROLE_DELAY + 0.15,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="mt-5 text-[11px] font-medium uppercase tracking-[0.45em] text-muted-foreground"
            >
              {role}
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
}
