"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { resumeDownloadPath } from "@/paths";
import { motion } from "motion/react";
import { useState } from "react";

export default function ResumeDownloadButton() {
  const [downloading, setDownloading] = useState(false);

  const onClick = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="shrink-0"
    >
      <Link
        href={resumeDownloadPath}
        target="_blank"
        download="Tauhid_Ahmed_Full_Stack_Developer.pdf"
        title="Download Resume"
        onClick={onClick}
        className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md border border-primary/50 bg-primary/10 text-sm font-semibold text-primary hover:bg-primary/15 hover:border-primary transition-colors duration-200 whitespace-nowrap"
      >
        <motion.span
          animate={downloading ? { y: [0, 4, 0, 4, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Download className="size-4 shrink-0" />
        </motion.span>
        <span className="hidden sm:inline">
          {downloading ? "Downloading…" : "Resume"}
        </span>
      </Link>
    </motion.div>
  );
}
