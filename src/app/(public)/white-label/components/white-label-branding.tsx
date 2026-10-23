"use client";

import { Bank } from "@/assets/svg/bank";
import { Cash } from "@/assets/svg/cash";
import { Data } from "@/assets/svg/data";
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
import { Check } from "lucide-react";
import { useState } from "react";

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

function slugify(value: string) {
  return (
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]/g, "") || "suamarca"
  );
}

function BrandPreview({ name, color }: { name: string; color: string }) {
  const bars = [35, 55, 40, 70, 50, 85, 60, 95];

  return (
    <div className="overflow-hidden rounded-[32px] bg-[#FFF8F0] text-foreground-invert shadow-2xl">
      <div className="flex items-center gap-3 border-b border-black/5 bg-white/60 px-5 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-black/15" />
          <span className="size-2.5 rounded-full bg-black/15" />
          <span className="size-2.5 rounded-full bg-black/15" />
        </div>
        <span className="flex-1 truncate rounded-full bg-black/5 px-4 py-1 text-xs text-foreground-invert/60">
          app.{slugify(name)}.com
        </span>
      </div>

      <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[150px_1fr] min-h-[360px]">
        <aside className="flex flex-col gap-4 border-r border-black/5 p-4">
          <div className="flex items-center gap-2">
            <span
              className="flex shrink-0 items-center justify-center size-9 rounded-xl transition-colors duration-500"
              style={{ backgroundColor: color }}
            >
              <LogoIcon className="size-4 [&_path]:fill-white" />
            </span>
            <span className="hidden sm:block truncate text-sm font-bold">
              {name || "Sua Marca"}
            </span>
          </div>
          {["Início", "Vendas", "Saques"].map((item, i) => (
            <span
              key={item}
              className={cn(
                "hidden sm:block rounded-xl px-3 py-2 text-xs font-semibold transition-colors duration-500",
                i === 0 ? "text-white" : "text-foreground-invert/60",
              )}
              style={i === 0 ? { backgroundColor: color } : undefined}
            >
              {item}
            </span>
          ))}
        </aside>

        <div className="flex flex-col gap-4 p-5">
          <div className="rounded-2xl bg-foreground-invert p-5 text-foreground">
            <span
              className="text-xs transition-colors duration-500"
              style={{ color }}
            >
              Total em vendas
            </span>
            <p className="text-2xl font-bold">R$ 450.596,62</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              ["Pedidos pagos", "3.338"],
              ["Ticket médio", "R$ 134,99"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-white p-4">
                <span className="text-[11px] text-accent">{label}</span>
                <p className="text-base font-bold">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-1 items-end justify-between rounded-2xl bg-white p-4 min-h-28">
            {bars.map((h, i) => (
              <span
                key={`${h}-${i}`}
                className="w-2.5 sm:w-4 rounded-full transition-colors duration-500"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === bars.length - 1 ? color : `${color}33`,
                }}
              />
            ))}
          </div>

          <span
            className="self-start rounded-full px-5 py-2.5 text-xs font-bold text-white transition-colors duration-500"
            style={{ backgroundColor: color }}
          >
            Solicitar saque
          </span>
        </div>
      </div>
    </div>
  );
}

export function WhiteLabelBranding() {
  const [name, setName] = useState("Sua Marca");
  const [color, setColor] = useState(palette[0].value);

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
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 rounded-[48px] bg-accent p-6 md:p-10">
          <div className="flex flex-col gap-8 text-foreground-invert">
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

            <ul className="flex flex-col gap-2.5">
              {customizable.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-full bg-foreground-invert/10 px-5 py-3 text-sm font-semibold"
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

          <BrandPreview name={name} color={color} />
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
