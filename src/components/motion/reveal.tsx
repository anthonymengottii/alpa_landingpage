"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { type HTMLMotionProps, motion } from "motion/react";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
  x?: number;
  once?: boolean;
}

/**
 * The viewport margin shrinks the detection area toward the vertical
 * center of the screen, so the entrance animation fires when the
 * element is closer to the middle of the screen instead of as soon
 * as it touches the edge.
 */
const CENTER_MARGIN = "-15% 0px -15% 0px";

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
  const isMobile = useIsMobile();
  const duration = isMobile ? 0.9 : 0.6;
  const mobileDelay = isMobile ? delay * 0.6 : delay;

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.2, margin: CENTER_MARGIN, ...viewport }}
      transition={{
        duration,
        delay: mobileDelay,
        ease: [0.16, 1, 0.3, 1],
        ...transition,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
