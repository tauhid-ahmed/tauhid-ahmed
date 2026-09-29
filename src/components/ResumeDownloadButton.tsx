"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { resumeDownloadPath } from "@/paths";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";

/**
 * Compact variant — used anywhere a small icon-only or icon+label button fits
 * (e.g. mobile drawer, footer, etc.)
 */
export function ResumeDownloadButtonCompact() {
  return (
    <Link
      href={resumeDownloadPath}
      target="_blank"
      download="Tauhid_Ahmed_Full_Stack_Developer.pdf"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/70 text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-card transition-all"
    >
      <Download className="size-3.5" />
      <span>Resume</span>
    </Link>
  );
}

/**
 * Hero variant — attention-grabbing, full CTA style with animations.
 * Drop this into the hero CTA row.
 */
export default function ResumeDownloadButton() {
  const [downloading, setDownloading] = useState(false);

  // Magnetic pull
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 280, damping: 22 });
  const sy = useSpring(my, { stiffness: 280, damping: 22 });

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const onMouseLeave = () => { mx.set(0); my.set(0); };

  const onClick = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2200);
  };

  return (
    <motion.div style={{ x: sx, y: sy }} className="relative">
      {/* Animated pulsing ring behind the button */}
      <motion.span
        className="absolute -inset-[3px] rounded-xl border border-primary/50 pointer-events-none"        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.04, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <Link
        href={resumeDownloadPath}
        target="_blank"
        download="Tauhid_Ahmed_Full_Stack_Developer.pdf"
        title="Download Resume PDF"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className="relative inline-flex items-center justify-center gap-2 size-9 sm:h-9 sm:w-auto sm:px-4 rounded-xl border border-primary/60 bg-primary/10 text-sm font-semibold text-primary hover:bg-primary/18 hover:border-primary transition-colors duration-200 overflow-hidden group shrink-0"
      >
        {/* Shimmer sweep */}
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
        />

        {/* Bouncing / downloading icon */}
        <motion.span
          animate={
            downloading
              ? { y: [0, 5, 0, 5, 0] }
              : { y: [0, -3, 0] }
          }
          transition={
            downloading
              ? { duration: 0.5, repeat: 2 }
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
          className="flex items-center shrink-0"
        >
          <Download className="size-4" />
        </motion.span>

        <span className="hidden sm:inline">{downloading ? "Downloading…" : "Download Resume"}</span>
        <span className="sm:hidden">{downloading ? "…" : "Resume"}</span>

        {/* Live availability dot — hidden on xs */}
        <span className="relative hidden sm:flex size-2 shrink-0">
          <span className="animate-ping absolute inline-flex size-full rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex rounded-full size-2 bg-primary" />
        </span>
      </Link>
    </motion.div>
  );
}
