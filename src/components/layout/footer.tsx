"use client";

import Link from "next/link";
import { navItems, developer } from "@/data/portfolio-data";
import { Container } from "@/components/layout/container";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 bg-card/60 relative py-12">
      <Container size="lg">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* Identity & positioning */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 font-bold tracking-tight text-foreground"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold">
                TA
              </span>
              <span className="text-base font-extrabold text-foreground">
                {developer.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
              Full-Stack Developer building modern, high-performance web applications with React, Next.js, Node.js, NestJS, and TypeScript.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <Link
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-lg border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub className="size-4" />
              </Link>
              <Link
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-lg border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2 text-xs font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
              Direct Contact
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono text-muted-foreground">
              <a
                href={`mailto:${developer.email}`}
                className="hover:text-primary transition-colors"
              >
                {developer.email}
              </a>
              <a
                href={`tel:${developer.phone}`}
                className="hover:text-primary transition-colors"
              >
                {developer.phone}
              </a>
              <span>{developer.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-6 border-t border-border/60 text-xs text-muted-foreground gap-4">
          <p>
            &copy; {currentYear} {developer.name}. All rights reserved. Designed & built with Next.js 15 & TypeScript.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
