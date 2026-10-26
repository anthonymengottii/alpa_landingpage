"use client";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

interface SplitSectionProps {
  id?: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  visual: ReactNode;
  direction?: "left" | "right";
}

/** Text + visual block, alternating sides (same rhythm as the home benefits). */
export function SplitSection({
  id,
  label,
  title,
  description,
  bullets,
  visual,
  direction = "left",
}: SplitSectionProps) {
  const fromX = direction === "right" ? 40 : -40;

  return (
    <Section id={id} className="pb-20 md:pb-40">
      <div
        className={cn(
          "flex flex-col gap-10 items-center justify-center md:gap-16 lg:flex-row",
          direction === "right" && "lg:flex-row-reverse",
        )}
      >
        <Reveal y={0} x={fromX} className="w-full max-w-[620px]">
          {visual}
        </Reveal>

        <Reveal
          y={0}
          x={-fromX}
          delay={0.1}
          className="flex w-full flex-col items-center gap-4 lg:min-w-[440px] lg:max-w-lg lg:items-start"
        >
          <span className="font-semibold text-base text-primary text-center">
            {label}
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-center lg:text-start leading-tight max-w-lg">
            {title}
          </h2>
          <p className="text-base text-center lg:text-start max-w-lg leading-6">
            {description}
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-base">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="size-3.5 stroke-3" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

/** Colored stage that holds the mock UI cards. */
export function Stage({
  tone = "primary",
  children,
  className,
}: {
  tone?: "primary" | "accent";
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex min-h-[420px] flex-col justify-center gap-4 overflow-hidden rounded-[48px] p-6 sm:p-10",
        tone === "primary" ? "bg-primary" : "bg-accent",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Light "pill" card used for the mock UIs, same look as the home art. */
export function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[28px] bg-[#FFF8F0] p-4 text-foreground-invert shadow-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Browser window around a real system screenshot. */
export function ScreenFrame({
  src,
  alt,
  url,
  className,
}: {
  src: StaticImageData;
  alt: string;
  url: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-black/5 bg-[#F3F4F6] px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-black/15" />
          <span className="size-2.5 rounded-full bg-black/15" />
          <span className="size-2.5 rounded-full bg-black/15" />
        </span>
        <span className="truncate rounded-full bg-white px-4 py-1 text-[11px] text-gray-500">
          {url}
        </span>
      </div>
      <Image src={src} alt={alt} className="h-auto w-full" sizes="720px" />
    </figure>
  );
}

/** Colored stage where the screenshot bleeds off the bottom/right edges. */
export function ScreenStage({
  tone = "primary",
  children,
  className,
}: {
  tone?: "primary" | "accent";
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-[340px] overflow-hidden rounded-[48px] pl-6 pt-6 sm:h-[470px] sm:pl-10 sm:pt-10",
        tone === "primary" ? "bg-primary" : "bg-accent",
        className,
      )}
    >
      {children}
    </div>
  );
}
