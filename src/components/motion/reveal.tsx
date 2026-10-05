"use client";

import { type HTMLMotionProps, motion } from "motion/react";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
  x?: number;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  once = true,
  viewport,
  transition,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.25, ...viewport }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1], ...transition }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
