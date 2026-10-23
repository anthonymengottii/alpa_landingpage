"use client";

import { Bank } from "@/assets/svg/bank";
import { Cash } from "@/assets/svg/cash";
import { Cubes } from "@/assets/svg/cubes";
import { Data } from "@/assets/svg/data";
import { Lock } from "@/assets/svg/lock";
import { Persons } from "@/assets/svg/persons";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Cubes,
    title: "Identidade visual própria",
    description:
      "Nome, logo, cor primária e banner de login configuráveis pelo painel, sem precisar de novo deploy.",
  },
  {
    icon: Bank,
    title: "Domínio e checkout seus",
    description:
      "Painel e checkout público rodando no seu domínio, com SEO personalizado para a sua marca.",
  },
  {
    icon: Cash,
    title: "Taxas customizadas",
    description:
      "Defina as taxas de PIX, cartão e boleto por cliente e construa a sua própria margem.",
  },
  {
    icon: Data,
    title: "Multiadquirência",
    description:
      "Roteie as transações entre adquirentes para aumentar a aprovação e reduzir custos.",
  },
  {
    icon: Persons,
    title: "Gestão de equipe e afiliados",
    description:
      "Permissões por usuário, múltiplos administradores e marketplace de afiliados já incluídos.",
  },
  {
    icon: Lock,
    title: "Segurança e antifraude",
    description:
      "Criptografia, antifraude híbrido e acompanhamento em tempo real de pagamentos e reembolsos.",
  },
];

export function WhiteLabelFeatures() {
  return (
    <Section className="py-20 md:py-40" id="recursos-white-label">
      <Reveal className="flex flex-col items-center justify-center space-y-4 mb-10 mx-auto">
        <span className="font-bold text-primary text-center">
          Tudo o que você precisa para operar
        </span>
        <h2 className="font-bold text-[32px] md:text-[40px] max-w-[640px] text-center">
          Uma plataforma completa, pronta para levar o seu nome
        </h2>
        <span className="text-center">
          Você foca em vender e atender. A Alpa cuida da tecnologia.
        </span>
      </Reveal>

      <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(320px,1fr))] self-center align-baseline items-center gap-8">
        {features.map(({ icon: Icon, title, description }, index) => (
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
