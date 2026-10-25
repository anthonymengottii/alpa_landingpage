"use client";

import { Bank } from "@/assets/svg/bank";
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
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";
import {
  MobileAppScreen,
  ScaledFrame,
  WEB_SCREEN,
  WebDashboardScreen,
  slugify,
} from "./white-label-screens";

const palette = [
  { name: "Laranja", value: "#FF3D02" },
  { name: "Azul", value: "#2563EB" },
  { name: "Verde", value: "#16A34A" },
  { name: "Roxo", value: "#7C3AED" },
  { name: "Rosa", value: "#DB2777" },
];

const customizable = [
  "Nome do sistema e logo",
  "Cor primária em toda a interface",
  "Banner da tela de login",
  "Título, descrição e imagem de SEO",
  "Painel e checkout em subdomínios seus",
];

const cards = [
  {
    icon: Cash,
    title: "Taxas customizadas",
    description:
      "Taxas de PIX, cartão (inclusive por parcela, de 2x a 12x) e boleto por empresa, além de limites de transação e de saque.",
  },
  {
    icon: Data,
    title: "Multiadquirência",
    description:
      "Conecte várias adquirentes com prioridade configurável e divida pagamentos entre plataforma e lojistas com split.",
  },
  {
    icon: Persons,
    title: "Equipe e afiliados",
    description:
      "Cargos com permissões granulares para a sua equipe e marketplace de afiliados com comissão automática.",
  },
];

export function WhiteLabelBranding() {
  const [name, setName] = useState("Sua Marca");
  const [color, setColor] = useState(palette[0].value);
  const [view, setView] = useState<"mobile" | "web">("mobile");

  return (
    <Section className="pb-20 md:pb-40" id="estudio">
      <Reveal className="flex flex-col items-center gap-4 mb-12 text-center">
        <span className="font-bold text-primary">Personalização total</span>
        <h2 className="font-bold text-[32px] md:text-[40px] max-w-[640px] leading-tight">
          Sua marca em cada tela, do login ao checkout
        </h2>
        <p className="max-w-lg">
          Teste agora: troque o nome e a cor e veja a plataforma se adaptar.
        </p>
      </Reveal>

      <Reveal>
        <div className="flex flex-col gap-10 rounded-[48px] bg-accent p-6 md:p-10 xl:pb-24">
          <div className="grid grid-cols-1 gap-8 text-foreground-invert md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.3fr]">
            <div className="flex flex-col gap-3">
              <label htmlFor="wl-name" className="text-sm font-bold">
                Nome da sua plataforma
              </label>
              <input
                id="wl-name"
                value={name}
                maxLength={20}
                onChange={(e) => setName(e.target.value)}
                className="rounded-full bg-[#FFF8F0] px-6 py-3.5 text-base font-semibold outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold">Cor primária</span>
              <div className="flex flex-wrap gap-3">
                {palette.map(({ name: label, value }) => (
                  <button
                    key={value}
                    type="button"
                    aria-label={label}
                    aria-pressed={color === value}
                    onClick={() => setColor(value)}
                    className={cn(
                      "flex items-center justify-center size-12 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105",
                      color === value &&
                        "ring-[3px] ring-foreground-invert ring-offset-2 ring-offset-accent",
                    )}
                    style={{ backgroundColor: value }}
                  >
                    {color === value && (
                      <Check className="size-5 stroke-3 stroke-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <ul className="flex flex-col gap-2 md:col-span-2 xl:col-span-1">
              {customizable.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-full bg-foreground-invert/10 px-5 py-2 text-sm font-semibold"
                >
                  <span
                    className="size-2.5 shrink-0 rounded-full transition-colors duration-500"
                    style={{ backgroundColor: color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col items-center gap-8">
            <div
              role="tablist"
              className="flex gap-2 rounded-full bg-foreground-invert/10 p-1 xl:hidden"
            >
              {(
                [
                  ["mobile", "App mobile"],
                  ["web", "Dashboard web"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={view === id}
                  onClick={() => setView(id)}
                  className={cn(
                    "cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold text-foreground-invert transition-all duration-300",
                    view === id && "bg-[#FFF8F0] shadow",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            <div
              className={cn(
                "w-full xl:block xl:w-[82%] xl:self-start",
                view === "web" ? "block" : "hidden",
              )}
            >
              <ScaledFrame {...WEB_SCREEN} minScale={0.62}>
                <WebDashboardScreen name={name} color={color} />
              </ScaledFrame>
              <p className="mt-3 text-center text-xs font-semibold text-foreground-invert/70">
                Dashboard web · app.{slugify(name)}.com
                <span className="xl:hidden"> · deslize para ver mais</span>
              </p>
            </div>
            <div
              className={cn(
                "flex-col items-center xl:absolute xl:-bottom-16 xl:right-2 xl:flex",
                view === "mobile" ? "flex" : "hidden",
              )}
            >
              <MobileAppScreen name={name} color={color} />
              <p className="mt-3 text-center text-xs font-semibold text-foreground-invert/70 xl:hidden">
                App mobile Android
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {cards.map(({ icon: Icon, title, description }, index) => (
          <Reveal key={title} delay={index * 0.1}>
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
