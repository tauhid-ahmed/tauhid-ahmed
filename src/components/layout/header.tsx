"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { developer, navItems } from "@/data/portfolio-data";
import { Container } from "./container";

import meImgDark from "@/images/me/me-dark.jpg";
import meImgLight from "@/images/me/me-light.jpeg";
import { useTheme } from "next-themes";
import Image from "next/image";
import ResumeDownloadButton from "../ResumeDownloadButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { resolvedTheme } = useTheme();
  const meImg = resolvedTheme === "light" ? meImgLight : meImgDark;

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[999] transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? "bg-background/30 backdrop-blur-md shadow-sm border-b border-border/70 py-3"
          : "bg-transparent py-3"
      }`}
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Monogram */}
          <Link
            href="#home"
            className="group flex items-center gap-2 font-bold tracking-tight text-foreground transition-opacity hover:opacity-90"
          >
            <span className="flex size-8 items-center justify-center rounded-full -translate-y-0.5 overflow-hidden shadow-inner">
              <Image src={meImg} alt="logo" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-tight text-foreground leading-none">
                {developer.name}
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wide">
                Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="relative hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-card/60 backdrop-blur-md px-4 py-1 shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors rounded-full ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                        mass: 0.5,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions: Social + Theme */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="size-4" />
            </Link>
            <Link
              href={developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="size-3.5" />
            </Link>
            <div className="h-4 w-px bg-border/80 mx-1" />
            <ThemeToggle />
          </div>

          {/* Mobile Actions & Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <span className="lg:hidden">
              <ResumeDownloadButton />
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="size-9 border-border/70"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </motion.div>
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/80"
      >
        <Container size="lg">
          <nav className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-2.5 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "bg-primary text-primary-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/70"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3 mt-2 border-t border-border/60 px-4">
              <Link
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                <FaGithub className="size-4" /> GitHub
              </Link>
              <Link
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                <FaLinkedinIn className="size-4" /> LinkedIn
              </Link>
            </div>
          </nav>
        </Container>
      </motion.div>
    </motion.header>
  );
}
