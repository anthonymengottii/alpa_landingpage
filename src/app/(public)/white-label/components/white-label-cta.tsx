"use client";

import { LogoIcon } from "@/assets/svg/logo-icon";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import CreditCard from "@/assets/credit-card.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { WHITE_LABEL_WHATSAPP } from "./white-label-links";

export function WhiteLabelCta() {
  return (
    <Section className="pb-20 md:pb-40">
      <Reveal>
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[40px] bg-primary px-6 py-16 md:py-24 text-center">
          <Image
            src={CreditCard}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -bottom-10 hidden w-80 -rotate-12 opacity-90 drop-shadow-2xl lg:block"
          />
          <Image
            src={CreditCard}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-10 hidden w-80 rotate-12 opacity-90 drop-shadow-2xl lg:block"
          />
          <LogoIcon className="size-7 [&_path]:fill-white" />
          <h2 className="text-2xl md:text-[40px] font-bold max-w-2xl leading-tight">
            Pronto para lançar o seu próprio gateway?
          </h2>
          <p className="text-base md:text-xl max-w-xl">
            Fale com o nosso time e receba uma proposta para a sua operação.
          </p>
          <CtaButton
            variant="truffle"
            target="_blank"
            href={WHITE_LABEL_WHATSAPP}
          >
            <span className="text-sm font-bold">Falar com um especialista</span>
            <ArrowUpRight className="stroke-primary stroke-2" />
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}
