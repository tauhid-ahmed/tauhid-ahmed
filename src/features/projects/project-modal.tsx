import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github, X } from "lucide-react";
import { Heading } from "@/components/heading";
import { createPortal } from "react-dom";
import Card3D from "@/components/card-3d";
import { PROJECT_IMAGES } from "./utils/constants";

export function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (typeof window === "undefined") return null;

  return createPortal(
    isOpen && (
      <div className="fixed inset-0 z-[110] flex items-center justify-center">
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          layoutId={`project-card-${project.id}`}
          className="z-50w-full max-w-lg mx-4 overflow-hidden"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Card3D className="overflow-hidden">
            <div className="relative space-y-6">
              <motion.div className="relative aspect-video overflow-hidden">
                <Image
                  src={
                    PROJECT_IMAGES[project.image as keyof typeof PROJECT_IMAGES]
                  }
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </motion.div>

              <div className="absolute -top-6 -right-6 z-50">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute top-4 right-4 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
                >
                  <X className="size-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <motion.div>
                  <Heading align="left" as="h3" size="h4">
                    {project.title}
                  </Heading>
                </motion.div>

                <motion.p className="text-muted-foreground">
                  {project.description}
                </motion.p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Technologies Used
                    </h4>
                    <motion.div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </motion.div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      asChild
                      size="sm"
                      className="gap-2 bg-primary hover:bg-primary/90"
                    >
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="gap-2"
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    ),
    document.body
  );
}
