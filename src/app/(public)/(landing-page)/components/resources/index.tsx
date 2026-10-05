"use client";

import { Bank } from "@/assets/svg/bank";
import { Cash } from "@/assets/svg/cash";
import { Check } from "@/assets/svg/check";
import { Clock } from "@/assets/svg/clock";
import { Lock } from "@/assets/svg/lock";
import { Money } from "@/assets/svg/money";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const resources = [
  {
    icon: Money,
    title: "Retentativa Inteligente",
    description:
      "Potencialize suas conversões com estratégicas de pagamento aprimoradas.",
  },
  {
    icon: Lock,
    title: "Proteção Antifraude",
    description:
      "Potencialize suas conversões com estratégicas de pagamento aprimoradas.",
  },
  {
    icon: Clock,
    title: "Acesso contínuo e confiável",
    description:
      "Operações sem interrupções garantem que suas vendas permaneçam ativas, independentemente da demanda.",
  },
  {
    icon: Bank,
    title: "Foco na rentabilidade eficiente",
    description:
      "Potencialize suas vendas ao identificar os períodos mais eficazes para pagamentos.",
  },
  {
    icon: Check,
    title: "Taxa de Aprovação de 98%",
    description:
      "Transforme suas vendas superando limitações com nossa tecnologia aprimorada.",
  },
  {
    icon: Cash,
    title: "Saque Rápido e Automático",
    description:
      "Otimize sua gestão financeira com retiradas programadas diretamente na sua conta.",
  },
];

export function Resources() {
  return (
    <Section className="py-20 md:py-60" id="recursos">
      <Reveal className="flex flex-col items-center justify-center space-y-4 mb-10 mx-auto">
        <span className="font-bold text-primary text-center">
          Tecnologia que transforma vendas em resultados
        </span>
        <h1 className="font-bold text-[32px] md:text-[40px] max-w-[600px] text-center">
          Elimine as preocupações e potencialize seus resultados
        </h1>
        <span>A tecnologia que faz a diferença.</span>
      </Reveal>

      <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(320px,1fr))] self-center align-baseline items-center gap-8">
        {resources.map(({ icon: Icon, title, description }, index) => (
          <Reveal key={title} delay={(index % 3) * 0.1}>
            <Card className="w-full p-10 rounded-[40px] border-0 gap-0 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <CardHeader className="flex flex-col gap-6 p-0">
                <figure className="flex items-center justify-center size-12 rounded-2xl bg-primary">
                  <Icon />
                </figure>
                <CardTitle className="text-base font-bold">{title}</CardTitle>
                <CardDescription className="text-base text-foreground">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
