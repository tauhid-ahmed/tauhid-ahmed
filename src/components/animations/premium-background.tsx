"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export function PremiumBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const isHoveringRef = useRef(false);
  const animationFrameIdRef = useRef<number>(-1);

  const { scrollYProgress } = useScroll();
  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.2],
    [1, 0.8, 0.6, 0.4]
  );

  // Smooth mouse movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Initialize particles
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });

        // Create particles based on screen size (balanced for performance & visuals)
        const particleCount = Math.min(
          65,
          Math.floor((width * height) / 22000)
        );

        const newParticles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.1,
            color: `hsl(${260 + Math.random() * 60}, 70%, 60%)`,
          });
        }
        particlesRef.current = newParticles;
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  // Animation function
  const startAnimation = useCallback(() => {
    if (!canvasRef.current || !dimensions.width) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const render = () => {
      if (!canvasRef.current || !ctx) return;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      const particles = particlesRef.current;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        // Update position
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;

        // Bounce off edges
        if (newX < 0 || newX > dimensions.width) {
          particle.speedX *= -1;
          newX = particle.x + particle.speedX;
        }

        if (newY < 0 || newY > dimensions.height) {
          particle.speedY *= -1;
          newY = particle.y + particle.speedY;
        }

        // Mouse interaction
        if (isHoveringRef.current) {
          const dx = smoothMouseX.get() - newX;
          const dy = smoothMouseY.get() - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 0.2;
            newX -= dx * force;
            newY -= dy * force;
          }
        }

        // Update particle position
        particle.x = newX;
        particle.y = newY;

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections with max distance check without expensive Math.sqrt when out of range
        let connections = 0;
        for (let j = i + 1; j < particles.length && connections < 4; j++) {
          const otherParticle = particles[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 7225) { // 85px max distance
            const distance = Math.sqrt(distSq);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (1 - distance / 85) * 0.12;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            connections++;
          }
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    render();
  }, [dimensions, smoothMouseX, smoothMouseY]);

  // Start animation when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0 && canvasRef.current) {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      startAnimation();
    }

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [dimensions, startAnimation]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed bg-transparent inset-0 size-full z-20 overflow-hidden pointer-events-none"
      style={{ opacity: scrollOpacity }}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 w-full h-full"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background opacity-80" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
    </motion.div>
  );
}
