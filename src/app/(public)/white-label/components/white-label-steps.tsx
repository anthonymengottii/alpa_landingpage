"use client";

import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { ArrowUpRight } from "lucide-react";
import { WHITE_LABEL_WHATSAPP } from "./white-label-hero";

const steps = [
  {
    title: "Fale com nosso time",
    description:
      "Entendemos o seu modelo de negócio, volume esperado e as necessidades da sua operação.",
  },
  {
    title: "Configuramos a sua marca",
    description:
      "Aplicamos domínio, identidade visual, taxas e adquirentes na sua plataforma.",
  },
  {
    title: "Integre e comece a vender",
    description:
      "Use a API e a documentação para conectar seus clientes e começar a operar.",
  },
];

export function WhiteLabelSteps() {
  return (
    <Section className="pb-20 md:pb-40">
      <Reveal className="flex flex-col items-center gap-4 mb-12 text-center">
        <span className="font-bold text-primary">Como funciona</span>
        <h2 className="font-bold text-[32px] md:text-[40px] max-w-[600px]">
          Do primeiro contato ao primeiro pagamento
        </h2>
      </Reveal>

      <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map(({ title, description }, index) => (
          <Reveal key={title} delay={index * 0.1}>
            <li className="flex flex-col gap-4 h-full list-none rounded-[40px] bg-card p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <span className="flex items-center justify-center size-12 rounded-2xl bg-primary font-bold text-lg">
                {index + 1}
              </span>
              <h3 className="text-base font-bold">{title}</h3>
              <p className="text-base">{description}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="flex justify-center mt-12">
        <CtaButton
          href={WHITE_LABEL_WHATSAPP}
          target="_blank"
          variant="primary"
        >
          <span className="text-sm font-bold group-hover:text-foreground-invert">
            Falar com um especialista
          </span>
          <ArrowUpRight className="size-5 stroke-icon group-hover:stroke-primary" />
        </CtaButton>
      </Reveal>
    </Section>
  );
}
