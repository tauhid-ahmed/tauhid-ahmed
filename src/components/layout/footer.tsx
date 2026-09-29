"use client";

import Link from "next/link";
import { navItems, developer } from "@/data/portfolio-data";
import { Container } from "@/components/layout/container";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 bg-card/60 relative py-12">
      <Container size="lg">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 space-y-4"
          >
            <Link
              href="#home"
              className="inline-flex items-center gap-2 font-bold tracking-tight text-foreground group"
            >
              <motion.span
                whileHover={{ scale: 1.12, rotate: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="flex size-7 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold"
              >
                TA
              </motion.span>
              <span className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                {developer.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
              Full-Stack Developer building modern, high-performance web
              applications with React, Next.js, Node.js, NestJS, and TypeScript.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {[
                { href: developer.github, icon: FaGithub, label: "GitHub" },
                { href: developer.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-8 items-center justify-center rounded-lg border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-colors"
                    aria-label={`${s.label} Profile`}
                  >
                    <s.icon className="size-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Nav */}
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3 space-y-3"
          >
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2 text-xs font-medium">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3 space-y-3"
          >
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
              Direct Contact
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono text-muted-foreground">
              <motion.a
                href={`mailto:${developer.email}`}
                whileHover={{ x: 3, color: "var(--primary)" }}
                transition={{ duration: 0.15 }}
                className="hover:text-primary transition-colors"
              >
                {developer.email}
              </motion.a>
              <motion.a
                href={`tel:${developer.phone}`}
                whileHover={{ x: 3, color: "var(--primary)" }}
                transition={{ duration: 0.15 }}
                className="hover:text-primary transition-colors"
              >
                {developer.phone}
              </motion.a>
              <span>{developer.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-6 border-t border-border/60 text-xs text-muted-foreground gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            &copy; {currentYear} {developer.name}.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 380, damping: 20 }}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUp className="size-3.5" />
            </motion.div>
          </motion.button>
        </div>
      </Container>
    </footer>
  );
}
