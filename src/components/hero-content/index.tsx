"use client";

import { CtaButton } from "@/components/cta-button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroContentProps {
  eyebrow: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
    target?: "_blank";
  };
}

/**
 * Text block shared by every hero (home, white-label...). Keeps typography,
 * spacing and entrance animation identical across pages.
 */
export function HeroContent({
  eyebrow,
  title,
  description,
  cta,
}: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-4 justify-center max-w-80 md:max-w-[550px] mx-auto md:items-start md:mx-0"
    >
      <span className="font-semibold">{eyebrow}</span>
      <h1 className="text-[30px] sm:text-4xl leading-7 md:leading-12 md:text-5xl font-bold lg:leading-14 text-center md:text-start lg:text-6xl">
        {title}
      </h1>
      <p className="text-center md:text-start text-sm md:text-base">
        {description}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <CtaButton href={cta.href} target={cta.target}>
          <span className="text-sm font-bold">{cta.label}</span>
          <ArrowUpRight className="size-5 stroke-icon stroke-2 group-hover:stroke-primary" />
        </CtaButton>
      </motion.div>
    </motion.div>
  );
}
