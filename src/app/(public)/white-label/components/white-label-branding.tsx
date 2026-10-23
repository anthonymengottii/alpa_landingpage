"use client";

import { Cash } from "@/assets/svg/cash";
import { Data } from "@/assets/svg/data";
import { Persons } from "@/assets/svg/persons";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const customizable = [
  "Nome do sistema e logo",
  "Cor primária em toda a interface",
  "Banner da tela de login",
  "Título, descrição e imagem de SEO",
];

const cards = [
  {
    icon: Cash,
    title: "Taxas customizadas",
    description:
      "Defina as taxas de PIX, cartão e boleto por cliente e construa a sua margem.",
  },
  {
    icon: Data,
    title: "Multiadquirência",
    description:
      "Roteie as transações entre adquirentes para aumentar a aprovação.",
  },
  {
    icon: Persons,
    title: "Equipe e afiliados",
    description:
      "Permissões por usuário e marketplace de afiliados já incluídos.",
  },
];

export function WhiteLabelBranding() {
  return (
    <Section className="pb-20 md:pb-40">
      <Reveal className="flex flex-col gap-4 mb-12 text-center md:text-start">
        <span className="font-bold text-primary">Personalização total</span>
        <h2 className="font-bold text-[32px] md:text-[40px] max-w-[640px] leading-tight">
          Sua marca em cada tela, do login ao checkout
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
        <Reveal x={-24} y={0}>
          <div className="h-full rounded-[40px] bg-accent p-10 md:p-12 text-foreground-invert flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl md:text-[32px] font-bold leading-tight">
                Mude pelo painel, sem novo deploy.
              </h3>
              <p className="text-base max-w-md">
                A identidade da plataforma é configurada em tempo real pelo
                administrador e aplicada em todo o sistema.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {customizable.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-full bg-background/10 px-5 py-3 text-sm font-semibold"
                >
                  <span className="size-2.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          {cards.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} x={24} y={0} delay={index * 0.1}>
              <Card className="w-full p-8 rounded-[40px] border-0 gap-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <CardHeader className="flex flex-row items-start gap-5 p-0">
                  <figure className="flex shrink-0 items-center justify-center size-12 rounded-2xl bg-primary">
                    <Icon />
                  </figure>
                  <div className="flex flex-col gap-2">
                    <CardTitle className="text-base font-bold">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-base text-foreground">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
