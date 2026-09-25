import { motion } from "motion/react";

const titleText = "Building Scalable Web Products with Modern Architecture";
const words = titleText.split(" ");
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export function TextWeave() {
  return (
    <motion.div
      variants={titleVariants}
      className="overflow-hidden flex flex-wrap space-x-3 justify-center lg:justify-start"
    >
      {words.map((word, index) => (
        <motion.span className="inline-block" key={index}>
          <Word>{word}</Word>
        </motion.span>
      ))}
    </motion.div>
  );
}

function Word({ children }: { children: string }) {
  return (
    <motion.span variants={letterVariants} className="leading-0">
      {children.split("").map((letter, index) => (
        <Letter key={index}>{letter}</Letter>
      ))}
    </motion.span>
  );
}

function Letter({ children }: { children: string }) {
  return (
    <motion.span variants={letterVariants} className="inline-block">
      {children}
    </motion.span>
  );
}
