"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Transition } from "motion/react";
import { developer } from "@/data/portfolio-data";

const name = developer.firstName ?? "Anonymous";
const letterVariants = {
  initial: { y: "100%" },
  animate: { y: 0 },
};
const getLetterTransition = (index: number): Transition => ({
  duration: 0.3,
  delay: (index + 1) * 0.1,
  ease: "linear",
});

export default function InitialLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const totalAnimationTime = name.length * 0.1 + 0.4;

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, totalAnimationTime * 1000);
    return () => clearTimeout(timer);
  }, [totalAnimationTime]);

  return (
    <>
      <AnimatePresence>
        {!mounted ? (
          <>
            <div
              key="splash"
              className="flex h-screen items-center justify-center bg-gray-950 text-gray-300 w-full"
            >
              <motion.div className="text-[clamp(3rem,3.5vw,6rem)] font-bold inline-block overflow-hidden">
                {name.split("").map((letter, index) => (
                  <motion.span
                    {...letterVariants}
                    transition={getLetterTransition(index)}
                    className="inline-block"
                    key={index}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </>
        ) : (
          children
        )}
      </AnimatePresence>
    </>
  );
}
