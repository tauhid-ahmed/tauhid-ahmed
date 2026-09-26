"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform, type TargetAndTransition } from "motion/react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "glass" | "accent" | "muted";
type Radius = "none" | "sm" | "md" | "lg" | "xl" | "rounded";

interface Card3DProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  intensity?: number;
  theme?: Theme;
  border?: boolean;
  shadow?: boolean;
  glare?: boolean;
  float?: boolean;
  hoverScale?: number;
  disabled?: boolean;
  radius?: Radius;
}

// Constants extracted outside component to prevent recreations
const SPRING_CONFIG = { damping: 40, stiffness: 180, mass: 0.5 };
const FLOAT_ANIMATION: TargetAndTransition = {
  y: [0, -8, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

// Theme configuration map
const THEME_CLASSES = {
  light: "bg-card text-card-foreground border-border/10",
  dark: "bg-card/95 text-card-foreground border-border/20 dark:bg-card/40",
  glass:
    "bg-background/30 backdrop-blur-md border-white/10 dark:bg-background/10",
  accent: "bg-primary/10 text-primary-foreground border-primary/20",
  muted: "bg-muted text-muted-foreground border-muted-foreground/20",
};

export default function Card3D({
  children,
  className,
  intensity = 8,
  theme = "glass",
  border = true,
  shadow = true,
  glare = true,
  float = false,
  hoverScale = 1.01,
  disabled = false,
  radius = "xl",
  onClick,
  ...props
}: Card3DProps) {
  // Refs and state
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values with reduced updates
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // Spring animations with optimized configuration
  const springRotateX = useSpring(rotateX, SPRING_CONFIG);
  const springRotateY = useSpring(rotateY, SPRING_CONFIG);
  const springScale = useSpring(scale, SPRING_CONFIG);

  // Z-transform with memoized transform function
  const z = useTransform([springRotateX, springRotateY], ([rotX, rotY]) => {
    if (!isHovered) return 0;
    const absoluteRotation =
      Math.abs(rotX as number) + Math.abs(rotY as number);
    return Math.min(20, absoluteRotation / 2);
  });

  // Memoized styles and classes
  const radiusClass = useMemo(
    () => (radius === "none" ? "rounded-none" : `rounded-${radius}`),
    [radius]
  );

  const shadowClass = useMemo(() => {
    if (!shadow) return "";
    return cn(
      "shadow-lg",
      isHovered && "shadow-xl",
      theme === "accent" && "shadow-primary/10",
      theme === "dark" && "shadow-black/20"
    );
  }, [shadow, isHovered, theme]);

  // Event handlers with useCallback for performance
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || disabled) return;

      const rect = cardRef.current.getBoundingClientRect();

      // Calculate relative position - optimized math
      const centerX = (e.clientX - rect.left) / rect.width - 0.5;
      const centerY = (e.clientY - rect.top) / rect.height - 0.5;

      // Update motion values - throttled updates
      rotateX.set(-centerY * intensity);
      rotateY.set(centerX * intensity);
      scale.set(hoverScale);

      // Update glare position if enabled
      if (glare) {
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
        glareX.set(xPercent);
        glareY.set(yPercent);
      }
    },
    [
      disabled,
      intensity,
      hoverScale,
      glare,
      rotateX,
      rotateY,
      scale,
      glareX,
      glareY,
    ]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setIsHovered(false);
  }, [rotateX, rotateY, scale]);

  const handleMouseEnter = useCallback(() => {
    if (!disabled) {
      setIsHovered(true);
    }
  }, [disabled]);

  // Memoized border component to prevent rerenders
  const borderElement = useMemo(() => {
    if (!border || !isHovered) return null;

    return (
      <motion.div
        className={cn(
          "absolute inset-0 pointer-events-none",
          theme === "accent"
            ? "border border-primary/30"
            : "border border-border/30",
          className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    );
  }, [border, isHovered, theme, className]);

  const glareTop = useTransform(glareY, (y) => `${y - 100}%`);
  const glareLeft = useTransform(glareX, (x) => `${x - 100}%`);

  // Glare effect using reactive motion transforms (no re-renders)
  const glareElement = glare && (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
      <motion.div
        className="absolute pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, transparent 50%)",
          width: "200%",
          height: "200%",
          top: glareTop,
          left: glareLeft,
        }}
      />
    </div>
  );

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden transition-colors duration-300 modern-card",
        radiusClass,
        THEME_CLASSES[theme],
        shadowClass,
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
        willChange: "transform",
        rotateX: springRotateX,
        rotateY: springRotateY,
        z,
        scale: springScale,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      animate={float ? FLOAT_ANIMATION : undefined}
      {...props}
    >
      {/* Card content */}
      <div className={cn("relative z-10 h-full")}>{children}</div>

      {/* Effects */}
      {borderElement}
      {glareElement}

      {/* Ambient light effect - simplified */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none" />
      )}
    </motion.div>
  );
}
