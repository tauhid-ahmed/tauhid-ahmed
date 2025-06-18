"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Layers, Search } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { ProjectCard } from "./project-card";
import { Container } from "@/components/layout/container";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionName,
  SectionTitle,
} from "@/components/layout/section";
import { TextReveal } from "@/components/text-reveal";

type ProjectCategory = "all" | "frontend" | "fullstack" | "design" | "mobile";

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  const categories: {
    value: ProjectCategory;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      value: "all",
      label: "All Projects",
      icon: <Layers className="h-4 w-4" />,
    },
    {
      value: "frontend",
      label: "Frontend",
      icon: <Code className="h-4 w-4" />,
    },
    {
      value: "fullstack",
      label: "Full Stack",
      icon: <Layers className="h-4 w-4" />,
    },
    { value: "design", label: "Design", icon: <Search className="h-4 w-4" /> },
    { value: "mobile", label: "Mobile", icon: <Layers className="h-4 w-4" /> },
  ];

  return (
    <Section id="projects">
      <SectionContent>
        <SectionHeader>
          <SectionName>My Work</SectionName>
          <SectionTitle>
            <TextReveal text={"Featured Projects"} />
          </SectionTitle>
          <SectionDescription className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and expertise in
            frontend development
          </SectionDescription>
        </SectionHeader>

        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveCategory(category.value)}
                >
                  {activeCategory === category.value && (
                    <motion.div
                      layoutId="background"
                      className="absolute rounded z-10 inset-0 bg-gradient-to-r from-primary to-purple-500"
                    />
                  )}

                  <span className="flex items-center gap-2 relative z-10">
                    {category.icon}
                    {category.label}
                  </span>
                </Button>
              ))}
            </div>

            {filteredProjects.length <= 0 ? (
              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, easings: "linear" }}
              >
                <span className="text-muted-foreground gradient-text text-[clamp(3rem,4.5vw,6rem)] font-bold">
                  No projects found
                </span>{" "}
                <br />
                <span className="inline-block underline underline-offset-4 capitalize px-4 py-2 text-sm text-primary">
                  Coming soon
                </span>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, easings: "linear" }}
              >
                <div className="-mx-8 px-4 flex flex-wrap justify-center">
                  {filteredProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className="basis-1/1 lg:basis-1/3 shrink-0 p-4"
                    >
                      <ProjectCard project={project} index={index} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {/* </AnimatePresence> */}

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={{ opacity: 1 }}
            >
              <Button asChild size="lg">
                <Link
                  href="https://github.com"
                  className="gap-2 px-8 py-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Projects on GitHub
                </Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </SectionContent>
    </Section>
  );
}
