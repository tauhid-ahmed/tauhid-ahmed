"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeSelector } from "@/components/theme-selector";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { developer, navItems } from "@/data/portfolio-data";
import { Container } from "./container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollY } = useScroll();

  // Track scroll direction to hide/show header
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    // Show header at the top of the page
    if (latest < 50) {
      setHidden(false);
      setScrolled(false);
      return;
    }

    // Hide header when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Add background when scrolled
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  useEffect(() => {
    // Determine active section based on scroll position
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));

      // Check sections from bottom to top
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" className="text-xl font-bold tracking-tight">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-1.5"
              >
                <span className="font-extrabold tracking-tight text-foreground">{developer.firstName}</span>
                <span className="gradient-text font-extrabold">{developer.lastName}</span>
                <span className="hidden sm:inline-block ml-1.5 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Lead
                </span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md ${
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 border border-primary/50 rounded-md -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <div className="ml-2 flex items-center gap-2">
              <ThemeSelector />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeSelector />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className=""
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/60 border-b-2 border-primary/50"
      >
        <Container>
          <nav className="flex flex-col gap-1 pb-6 -mx-6 border-b">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  x: mobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`py-4 font-bold transition-colors block px-10 border ${
                    activeSection === item.href.substring(1)
                      ? "text-foreground bg-primary/5 border-primary/50"
                      : "text-foreground/70 hover:text-foreground hover:bg-primary/5 border-transparent hover:border-primary/30 transition-colors duration-150"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </Container>
      </motion.div>
    </motion.header>
  );
}
