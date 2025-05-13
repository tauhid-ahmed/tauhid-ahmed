import { TextWeave } from "@/components/animations/text-weave";
import { SocialHandles } from "@/components/social-handles";
import { Button } from "@/components/ui/button";
import { developer } from "@/data/portfolio-data";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { resumeDownloadPath } from "@/paths";
import { Heading } from "@/components/heading";

export function IntroInformation() {
  return (
    <div className="space-y-8 text-center lg:text-left">
      <motion.div initial="hidden" animate="visible" className="space-y-2">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
        >
          {developer.name}
        </motion.span>

        <Heading as="h1" size="display">
          <TextWeave />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="block text-primary"
          >
            as a{" "}
            <span className="relative">
              <span className="absolute -inset-1 rounded-lg bg-primary/10 blur-sm"></span>
              <span className="relative">{developer.title}</span>
            </span>
          </motion.span>
        </Heading>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0"
      >
        {developer.bio}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="flex flex-wrap gap-4 justify-center lg:justify-start"
      >
        <Button size="lg" asChild>
          <Link href="#projects" target="_blank" className="px-8 py-6">
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Premium button effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link
            href={resumeDownloadPath}
            download="Tauhid Ahmed - Frontend Developer Resume.pdf"
            target="_blank"
            className="px-8 py-6"
          >
            <span className="relative z-10">Download Resume</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.8 }}
      >
        <div className="hidden lg:block">
          <SocialHandles />
        </div>
      </motion.div>
    </div>
  );
}
