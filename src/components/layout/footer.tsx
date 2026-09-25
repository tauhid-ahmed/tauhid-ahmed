"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navItems, developer } from "@/data/portfolio-data";
import { Container } from "@/components/layout/container";
import { SocialHandles } from "@/components/social-handles";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 relative overflow-hidden py-10 bg-background">
      <Container>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight inline-flex items-center gap-1.5">
              <span className="font-extrabold tracking-tight text-foreground">{developer.firstName}</span>
              <span className="gradient-text font-extrabold">{developer.lastName}</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Architecting performant, accessible web applications and leading high-impact engineering teams with Next.js, React, Node.js, and TypeScript.
            </p>
            <div className="flex gap-4">
              <SocialHandles />
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1fr] gap-12 lg:col-span-2 justify-between">
            <div className="space-y-4">
              <h3 className="text-sm font-medium gradient-text">Navigation</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium gradient-text">Contact</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <a
                  href={`mailto:${developer.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors "
                >
                  {developer.email}
                </a>
                <a
                  href={`tel:${developer.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {developer.phone}
                </a>
                <span className="text-muted-foreground">
                  {developer.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-primary/10">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {developer.firstName}. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Button
              variant="link"
              size="sm"
              className="text-xs text-muted-foreground hover:text-primary "
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-xs text-muted-foreground hover:text-primary "
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
