import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PROJECT_IMAGES } from "./utils/constants";
import Card3D from "@/components/card-3d";
import { Heading } from "@/components/heading";
import { ProjectModal } from "./project-modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          `relative overflow-hidden rounded-xl border border-border/50 bg-card/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg h-full max-w-lg mx-auto`,
          isModalOpen && "opacity-0 pointer-events-none"
        )}
      >
        <motion.div className="h-full" layoutId={`project-card-${project.id}`}>
          <Card3D className="h-full">
            <div className="flex flex-col group relative h-full gap-6">
              <div className="overflow-hidden relative z-10 h-52 lg:h-60 shrink-0">
                <div className="size-full">
                  <motion.div
                    className="animate-project-image"
                    layoutId={`project-image-${project.id}`}
                  >
                    <Image
                      src={
                        PROJECT_IMAGES[
                          project.image as keyof typeof PROJECT_IMAGES
                        ]
                      }
                      alt={project.title}
                    />
                  </motion.div>
                </div>

                {project.featured && (
                  <div className="absolute top-2 left-2 z-10">
                    <Badge
                      variant="outline"
                      className="bg-primary/80 backdrop-blur text-primary-foreground border-none px-3 py-1"
                    >
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <div className="absolute -inset-6 bg-gradient-to-t from-primary/20 via-background/10 to-transparent group-hover:opacity-100 opacity-70" />

              <div className="relative z-10 space-y-4 flex flex-col justify-between flex-1">
                <motion.div
                  className="flex flex-wrap gap-2"
                  layoutId={`project-tags-${project.id}`}
                >
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      className="font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge
                      variant="outline"
                      className="font-medium bg-muted/50 text-muted-foreground border border-muted/20"
                    >
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </motion.div>

                <div className="space-y-2">
                  <motion.div layoutId={`project-title-${project.id}`}>
                    <Heading
                      as="h3"
                      size="h5"
                      align="left"
                      className="font-bold text-foreground tracking-tight group-hover:text-primary transition-colors"
                    >
                      {project.title}
                    </Heading>
                  </motion.div>
                  <motion.p
                    className="text-muted-foreground text-sm leading-relaxed line-clamp-2"
                    layoutId={`project-description-${project.id}`}
                  >
                    {project.description}
                  </motion.p>
                </div>
                <motion.div layoutId={`project-button-${project.id}`} className="pt-2">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    Explore Architecture & Details
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
