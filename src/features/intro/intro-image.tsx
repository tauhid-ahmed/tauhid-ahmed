import { motion, MotionValue } from "motion/react";
import Image from "next/image";
import { developer } from "@/data/portfolio-data";

import me from "@/images/me/me.webp";
import reactIcon from "@/images/tech-icons/react.svg";
import typescriptIcon from "@/images/tech-icons/typescript.svg";
import nextjsIcon from "@/images/tech-icons/nextjs.svg";

export function IntroImage({ rotate }: { rotate: MotionValue }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, rotateY: -20 },
        visible: {
          opacity: 1,
          rotateY: 0,
          transition: { duration: 1.2, delay: 0.5 },
        },
      }}
      initial="hidden"
      animate="visible"
      style={{ rotate }}
      className="relative hidden lg:block perspective-1000"
    >
      <div className="relative aspect-square lg:max-w-lg xl:max-w-xl mx-auto transform-3d">
        {/* Premium decorative elements */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/30 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-400/20 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        {/* Premium image container with creative border */}
        <div className="relative z-10 w-full h-full transform-style-3d rotate-y-10 rotate-x-5">
          {/* Layered background elements for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-2xl rotate-6 transform-gpu translate-z-[-20px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-2xl -rotate-6 transform-gpu translate-z-[-10px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-400/10 rounded-2xl rotate-3 transform-gpu translate-z-[-5px]" />

          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/50 to-background/10 p-4 backdrop-blur border border-primary/20 shadow-2xl">
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              {/* Premium image treatment */}

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 via-transparent to-primary/50 mix-blend-overlay z-10" />

              <Image
                src={me}
                alt={`${developer.name} - ${developer.title}`}
                fill
                className="object-cover transform-gpu hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

              {/* Subtle scan line effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20" />
            </div>
          </div>
          <FloatingInformation />
        </div>
      </div>
    </motion.div>
  );
}

function FloatingInformation() {
  return (
    <>
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="absolute top-5 -right-10 bg-primary text-primary-foreground rounded-full px-4 py-2 font-medium text-sm shadow-lg backdrop-blur-sm"
      >
        4+ Years Experience
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        className="absolute -bottom-5 -left-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 font-medium text-xs border border-primary/20 shadow-lg"
      >
        FullStack & Engineering Team Lead
      </motion.div>
      <TechIcons />
    </>
  );
}

function TechIcons() {
  return (
    <>
      {[reactIcon, nextjsIcon, typescriptIcon].map((tech, i) => (
        <motion.div
          key={i}
          className="absolute overflow-hidden bg-background/70 backdrop-blur-sm rounded-full size-12 flex items-center justify-center border border-primary/20 shadow-lg"
          style={{
            top: `${20 + i * 25}%`,
            right: i % 2 === 0 ? "-15%" : "85%",
          }}
          initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 + i * 0.2, duration: 0.8 }}
        >
          <Image
            className="rounded-full"
            src={tech}
            alt="tech-icon"
            width={40}
            height={40}
          />
        </motion.div>
      ))}
    </>
  );
}
