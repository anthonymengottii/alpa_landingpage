import { Section } from "@/components/section";

import Hope from "@/assets/hope.png";
import { Clock } from "@/assets/svg/clock";
import { Conversion } from "@/assets/svg/conversion";
import { Cryptography } from "@/assets/svg/cryptography";
import { Cubes } from "@/assets/svg/cubes";
import { Data } from "@/assets/svg/data";
import { Persons } from "@/assets/svg/persons";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const benefits = [
  {
    icon: Conversion,
    title: "Alta conversão",
    description:
      "Faça transações em segundos com a experiência de pagamento perfeita da Alpa, pare de perder vendas.",
  },
  {
    icon: Clock,
    title: "Suporte 24 horas",
    description:
      "Garantimos que você tenha assistência sempre que precisar, seja dia ou noite.",
  },
  {
    icon: Cryptography,
    title: "Criptografia segura",
    description:
      "Camada extra de proteção às suas transações, verificamos suas transações com tecnologia de ponta.",
  },
  {
    icon: Cubes,
    title: "Plug and play",
    description:
      "Integre nosso gateway de forma transparente e eficiente em qualquer sistema ou plataforma.",
  },
  {
    icon: Persons,
    title: "Maior controle",
    description:
      "Permitimos a atribuição de múltiplos administradores, facilitando a delegação de responsabilidades e o controle de acesso.",
  },
  {
    icon: Data,
    title: "Dados em tempo real",
    description:
      "De pagamentos a reembolsos, o rastreamento em tempo real da Alpa mantém você informado e no controle.",
  },
];

export function WhyUsersLoveAlpa() {
  return (
    <Section className="pt-20 pb-32 md:pt-60 grid grid-cols-1 xl:grid-cols-[413px_1fr] gap-10">
      <div className="flex flex-col items-center justify-center xl:items-start gap-4 mb-10 mx-auto">
        <span className="font-semibold text-primary text-center md:text-start">
          Escale sua operação sem limites
        </span>
        <h1 className="font-bold text-[32px] leading-[40px] md:text-[40px] max-w-[600px] text-center xl:text-start">
          Por que os usuários amam a Alpa
        </h1>
        <span className="text-start">
          Revolucione sua forma de vender online.
        </span>

        <Image 
          src={Hope} 
          alt="Ilustração representando os benefícios da Alpa" 
        />
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] self-center align-baseline items-center gap-8 xl:gap-2">
        {benefits.map(({ icon: Icon, title, description }) => (
          <Card
            className="w-full p-10 rounded-[40px] border-0 gap-0 h-full"
            key={title}
          >
            <CardHeader className="flex flex-col gap-6 p-0">
              <figure className="flex items-center justify-center size-12 rounded-2xl bg-primary">
                <Icon />
              </figure>
              <CardTitle className="font-bold">{title}</CardTitle>
              <CardDescription className="text-foreground text-base">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
