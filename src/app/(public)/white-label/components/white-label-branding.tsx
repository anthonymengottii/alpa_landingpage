"use client";

import { Bank } from "@/assets/svg/bank";
import { Cash } from "@/assets/svg/cash";
import { LogoIcon } from "@/assets/svg/logo-icon";
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
import { Check, MousePointerClick } from "lucide-react";
import { useState } from "react";
import {
  MobileAppScreen,
  MobileComposite,
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

const extras = ["Logo", "Banner de login", "SEO", "Domínio próprio"];

const cards = [
  {
    icon: Cash,
    title: "Taxas por empresa",
    description:
      "PIX, cartão (de 2x a 12x) e boleto, com limites de transação e de saque.",
  },
  {
    icon: Bank,
    title: "Domínio próprio",
    description:
      "Painel e checkout em subdomínios seus, como app.suamarca.com.",
  },
  {
    icon: Persons,
    title: "Equipe com cargos",
    description: "Permissões por função e trilha de auditoria para o seu time.",
  },
];

export function WhiteLabelBranding() {
  const [name, setName] = useState("Sua Marca");
  const [color, setColor] = useState(palette[0].value);
  const colorName = palette.find((p) => p.value === color)?.name;

  return (
    <Section className="pb-20 md:pb-40" id="estudio">
      <Reveal className="flex flex-col items-center gap-4 mb-12 text-center">
        <span className="font-bold text-primary">Personalização total</span>
        <h2 className="font-bold text-[32px] md:text-[40px] max-w-[640px] leading-tight">
          Sua marca em cada tela
        </h2>
        <p className="max-w-lg">
          Troque o nome e a cor e veja o painel e o app se adaptarem na hora.
        </p>
      </Reveal>

      <Reveal>
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-[48px] bg-accent p-5 md:p-10 xl:pb-24">
          <LogoIcon
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 size-[420px] opacity-[0.12] [&_path]:fill-foreground"
          />

          <div className="relative grid grid-cols-1 gap-6 rounded-[32px] bg-[#FFF8F0] p-5 text-foreground-invert shadow-xl md:p-7 xl:grid-cols-[1fr_1fr_1fr] xl:gap-0 xl:divide-x xl:divide-foreground-invert/10">
            <div className="flex flex-col gap-3 xl:pr-7">
              <label
                htmlFor="wl-name"
                className="text-xs font-bold uppercase tracking-wide text-foreground-invert/60"
              >
                Nome da plataforma
              </label>
              <input
                id="wl-name"
                value={name}
                maxLength={20}
                onChange={(e) => setName(e.target.value)}
                className="rounded-2xl bg-foreground-invert/5 px-5 py-3.5 text-base font-semibold outline-none transition-shadow focus-visible:ring-[3px] focus-visible:ring-primary/50"
              />
            </div>

            <div className="flex flex-col gap-3 xl:px-7">
              <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wide text-foreground-invert/60">
                Cor primária
                <span className="normal-case tracking-normal text-foreground-invert">
                  {colorName}
                </span>
              </span>
              <div className="flex gap-2.5">
                {palette.map(({ name: label, value }) => (
                  <button
                    key={value}
                    type="button"
                    aria-label={label}
                    aria-pressed={color === value}
                    onClick={() => setColor(value)}
                    className={cn(
                      "flex size-11 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110",
                      color === value &&
                        "ring-[3px] ring-foreground-invert ring-offset-2 ring-offset-[#FFF8F0]",
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

            <div className="flex flex-col gap-3 xl:pl-7">
              <span className="text-xs font-bold uppercase tracking-wide text-foreground-invert/60">
                Também personalizável
              </span>
              <ul className="flex flex-wrap gap-2">
                {extras.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-full bg-foreground-invert/5 px-3.5 py-2 text-xs font-semibold"
                  >
                    <span
                      className="size-2 rounded-full transition-colors duration-500"
                      style={{ backgroundColor: color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="relative -mb-3 flex items-center justify-center gap-2 text-xs font-semibold text-foreground-invert/70 xl:hidden">
            <MousePointerClick className="size-4" />
            Escolha uma cor para ver a mudança
          </p>

          <div className="relative flex flex-col items-center gap-8">
            <div className="-mr-5 w-[calc(100%+1.25rem)] md:-mr-10 md:w-[calc(100%+2.5rem)] xl:hidden">
              <MobileComposite name={name} color={color} />
            </div>

            <div className="hidden w-full xl:-mr-10 xl:block xl:w-[calc(100%+2.5rem)] xl:self-start">
              <ScaledFrame {...WEB_SCREEN} maxScale={1.3}>
                <WebDashboardScreen name={name} color={color} bleedRight />
              </ScaledFrame>
              <p className="mt-3 text-center text-xs font-semibold text-foreground-invert/70">
                app.{slugify(name)}.com
              </p>
            </div>
            <div className="hidden flex-col items-center xl:absolute xl:-bottom-16 xl:right-6 xl:flex xl:origin-bottom-right xl:scale-[0.85]">
              <MobileAppScreen name={name} color={color} />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, description }, index) => (
          <Reveal key={title} delay={index * 0.1}>
            <Card className="h-full w-full gap-0 rounded-[40px] border-0 p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <CardHeader className="flex flex-col gap-6 p-0">
                <figure className="flex size-12 items-center justify-center rounded-2xl bg-primary">
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
