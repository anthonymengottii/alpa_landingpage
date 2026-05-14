import { CtaButton } from "@/components/cta-button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cards } from ".";

interface SolutionCardProps {
  card: (typeof cards)[number];
  direction?: "left" | "right";
}

export function SolutionCard({ card, direction = "left" }: SolutionCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col  gap-8 items-center md:flex-row justify-center",
        direction === "right" && "md:flex-row-reverse",
      )}
    >
      <figure className="w-full max-w-[420px]  lg:max-w-[740px]">
        <Image src={card.image} alt="" className="w-full" width={760} />
      </figure>

      <div
        className={cn(
          "flex flex-col gap-4 items-center md:items-start lg:min-w-[505px]",
        )}
      >
        <span className="font-semibold text-base text-primary text-center">
          {card.data.label}
        </span>
        <h1 className="text-3xl lg:text-[40px] font-bold text-center md:text-start leading-10 max-w-lg">
          {card.data.title}
        </h1>
        <p className="text-base text-center md:text-start max-w-80 leading-6 md:max-w-lg">
          {card.data.description}
        </p>

        <CtaButton href="https://app.usealpa.com/register" variant="primary">
          <span className="text-sm font-bold group-hover:text-foreground-invert">
            {card.data.callToAction}
          </span>
          <ArrowUpRight className="size-5 stroke-icon group-hover:stroke-primary" />
        </CtaButton>
      </div>
    </div>
  );
}
