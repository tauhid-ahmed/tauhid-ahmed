"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skills, skillProficiency } from "@/data/portfolio-data";
import Card3D from "@/components/card-3d";
import { Badge } from "@/components/ui/badge";
import * as Icons from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionContent,
  SectionName,
  SectionTitle,
} from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/heading";
import { TextReveal } from "@/components/text-reveal";

const icons = {
  Code: <Icons.CodeIcon />,
  Layers: <Icons.LayersIcon />,
  Sparkles: <Icons.SparklesIcon />,
  Palette: <Icons.PaletteIcon />,
  Zap: <Icons.ZapIcon />,
  Smartphone: <Icons.SmartphoneIcon />,
  Server: <Icons.ServerIcon />,
  Database: <Icons.DatabaseIcon />,
  Bot: <Icons.BotIcon />,
};

export function SkillStats() {
  const [activeCategory, setActiveCategory] = useState<string>(
    skills[0]?.category || "FullStack & Core Engineering"
  );

  const activeSkill = useMemo(
    () =>
      skills.find((skill) => skill.category === activeCategory) || skills[0],
    [activeCategory]
  );

  return (
    <Section>
      <SectionContent>
        <motion.div>
          <SectionHeader>
            <SectionName>My Expertise</SectionName>
            <SectionTitle>
              <TextReveal text={"Skills & Technologies"} />
            </SectionTitle>
            <SectionDescription>
              A comprehensive toolkit of technologies and skills that I use to
              bring ideas to life
            </SectionDescription>
          </SectionHeader>
        </motion.div>
        <Container size="lg">
          <Tabs
            onValueChange={setActiveCategory}
            value={activeCategory}
            className="space-y-6"
          >
            <TabsList className="flex flex-wrap gap-4 p-1 bg-background/50 justify-center backdrop-blur w-full px-6">
              {skills.map((skill) => {
                return (
                  <TabsTrigger
                    key={skill.category}
                    className={cn(
                      "relative bg-primary/5 flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-transform duration-300 text-muted-foreground hover:text-foreground"
                    )}
                    value={skill.category}
                  >
                    {skill.category === activeCategory && (
                      <motion.div
                        layoutId="activeSkillCategory"
                        className={cn(
                          "absolute inset-0 rounded-full -z-10",
                          activeCategory === skill.category
                            ? `bg-gradient-to-r ${skill.color}`
                            : "bg-transparent"
                        )}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    {icons[skill.icon as keyof typeof icons]}
                    <span className="lg:hidden">{skill.title.short}</span>
                    <span className="hidden lg:inline">{skill.title.full}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <TabsContent value={activeCategory}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8 perspective-distant"
                >
                  <SkillDetails skill={activeSkill} />
                  <SkillProficiency skill={activeSkill} />
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </Container>
      </SectionContent>
    </Section>
  );
}

function SkillDetails({ skill }: { skill: Skill }) {
  return (
    <Card3D>
      <div className="space-y-6 p-6 h-full flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center size-12 shrink-0 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-md`}
            >
              {icons[skill.icon as keyof typeof icons]}
            </div>
            <div>
              <Heading className="leading-tight" as="h3" size="h4" align="left">
                {skill.category}
              </Heading>
              <span className="text-xs font-semibold tracking-wider uppercase text-primary/80">
                Core Competencies
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {skill.description}
          </p>
        </div>

        <div className="pt-4 border-t border-border/40">
          <span className="text-xs font-medium text-muted-foreground block mb-2">Technologies & Tooling:</span>
          <div className="flex flex-wrap gap-1.5">
            {skill.items.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="bg-card/60 hover:bg-primary/10 hover:text-primary transition-colors py-1 px-2.5 text-xs font-medium"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card3D>
  );
}

function SkillProficiency({ skill }: { skill: Skill }) {
  return (
    <Card3D>
      <div className="space-y-6 p-6">
        <Heading as="h3" size="h4" align="left">
          Proficiency
        </Heading>
        {skill.items
          .filter(
            (item) => skillProficiency[item as keyof typeof skillProficiency]
          )
          .slice(0, 6)
          .map((skill) => (
            <div key={skill} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill}</span>
                <span className="text-sm text-muted-foreground">
                  {skillProficiency[skill as keyof typeof skillProficiency]}%
                </span>
              </div>
              <div className="relative h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${
                      skillProficiency[skill as keyof typeof skillProficiency]
                    }%`,
                  }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>
          ))}
      </div>
    </Card3D>
  );
}
