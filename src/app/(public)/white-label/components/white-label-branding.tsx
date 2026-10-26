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
import { Check, ImagePlus, MousePointerClick, Palette, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  MobileAppScreen,
  MobileComposite,
  ScaledFrame,
  WEB_SCREEN,
  WebDashboardScreen,
  readableOn,
} from "./white-label-screens";

const palette = [
  { name: "Laranja", value: "#FF3D02" },
  { name: "Azul", value: "#2563EB" },
  { name: "Verde", value: "#16A34A" },
  { name: "Roxo", value: "#7C3AED" },
  { name: "Rosa", value: "#DB2777" },
];

const LOGO_TYPES = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
const LOGO_MAX_BYTES = 2 * 1024 * 1024;

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
  const isCustom = !palette.some((p) => p.value === color);
  const colorName = isCustom ? color.toUpperCase() : palette.find((p) => p.value === color)?.name;
  const checkColor = readableOn(color);

  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [logoError, setLogoError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const logoRef = useRef<string | null>(null);

  // Keep the object URL in a ref so it is always revoked on replace/unmount.
  useEffect(() => {
    return () => {
      if (logoRef.current) URL.revokeObjectURL(logoRef.current);
    };
  }, []);

  function setLogo(next: string | null) {
    if (logoRef.current) URL.revokeObjectURL(logoRef.current);
    logoRef.current = next;
    setLogoUrl(next);
  }

  function handleLogo(file: File | undefined) {
    if (!file) return;
    if (!LOGO_TYPES.includes(file.type)) {
      setLogoError("Use PNG, JPG, SVG ou WebP.");
      return;
    }
    if (file.size > LOGO_MAX_BYTES) {
      setLogoError("O arquivo deve ter até 2 MB.");
      return;
    }
    setLogoError("");
    setLogo(URL.createObjectURL(file));
  }

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
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-[48px] bg-primary p-5 md:p-10 xl:pb-24">
          <LogoIcon
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 size-[420px] opacity-[0.14] [&_path]:fill-background"
          />

          <div className="relative grid grid-cols-1 gap-6 rounded-[32px] bg-[#FFF8F0] p-5 text-foreground-invert shadow-xl md:p-7 xl:grid-cols-[1fr_1fr_1.3fr] xl:gap-0 xl:divide-x xl:divide-foreground-invert/10">
            <div className="flex flex-col gap-3 xl:pr-6">
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

            <div className="flex flex-col gap-3 xl:px-6">
              <span className="text-xs font-bold uppercase tracking-wide text-foreground-invert/60">
                Logo
              </span>
              <input
                ref={fileRef}
                type="file"
                accept={LOGO_TYPES.join(",")}
                className="sr-only"
                aria-label="Enviar logo"
                onChange={(e) => {
                  handleLogo(e.target.files?.[0]);
                  e.target.value = "";
                }}
              />
              {logoUrl ? (
                <div className="flex items-center gap-3 rounded-2xl bg-foreground-invert/5 p-2.5">
                  {/* biome-ignore lint/performance/noImgElement: local object URL chosen by the visitor */}
                  <img
                    src={logoUrl}
                    alt="Seu logo"
                    className="size-11 rounded-xl bg-white object-contain ring-1 ring-black/5"
                  />
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="flex-1 cursor-pointer text-start text-xs font-semibold hover:underline"
                  >
                    Trocar logo
                  </button>
                  <button
                    type="button"
                    aria-label="Remover logo"
                    onClick={() => {
                      setLogo(null);
                      setLogoError("");
                    }}
                    className="flex size-8 cursor-pointer items-center justify-center rounded-full hover:bg-foreground-invert/10"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-dashed border-foreground-invert/20 px-4 py-3 text-start transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <ImagePlus className="size-5 shrink-0" />
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold">Enviar logo</span>
                    <span className="text-[11px] text-foreground-invert/60">
                      Fica só no seu navegador
                    </span>
                  </span>
                </button>
              )}
              {logoError && (
                <span role="alert" className="text-xs font-semibold text-red-600">
                  {logoError}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3 xl:pl-6">
              <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wide text-foreground-invert/60">
                Cor primária
                <span className="normal-case tracking-normal text-foreground-invert">
                  {colorName}
                </span>
              </span>
              <div className="flex flex-wrap gap-2.5">
                {palette.map(({ name: label, value }) => (
                  <button
                    key={value}
                    type="button"
                    aria-label={label}
                    aria-pressed={color === value}
                    onClick={() => setColor(value)}
                    className={cn(
                      "flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110",
                      color === value &&
                        "ring-[3px] ring-foreground-invert ring-offset-2 ring-offset-[#FFF8F0]",
                    )}
                    style={{ backgroundColor: value }}
                  >
                    {color === value && (
                      <Check
                        className="size-5 stroke-3"
                        style={{ stroke: checkColor }}
                      />
                    )}
                  </button>
                ))}
                <label
                  title="Escolher outra cor"
                  className={cn(
                    "relative flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 focus-within:ring-[3px] focus-within:ring-primary/50",
                    isCustom &&
                      "ring-[3px] ring-foreground-invert ring-offset-2 ring-offset-[#FFF8F0]",
                  )}
                  style={
                    isCustom
                      ? { backgroundColor: color }
                      : {
                          background:
                            "conic-gradient(#ff3d02, #facc15, #16a34a, #2563eb, #7c3aed, #db2777, #ff3d02)",
                        }
                  }
                >
                  {isCustom ? (
                    <Check
                      className="size-5 stroke-3"
                      style={{ stroke: checkColor }}
                    />
                  ) : (
                    <Palette className="size-5 stroke-white drop-shadow" />
                  )}
                  <input
                    type="color"
                    value={color}
                    aria-label="Escolher outra cor"
                    onChange={(e) => setColor(e.target.value)}
                    className="absolute inset-0 size-full cursor-pointer opacity-0"
                  />
                </label>
              </div>
            </div>

          </div>

          <p className="relative -mb-3 flex items-center justify-center gap-2 text-xs font-semibold text-foreground-invert xl:hidden">
            <MousePointerClick className="size-4" />
            Escolha uma cor ou envie seu logo
          </p>

          <div className="relative flex flex-col items-center gap-8">
            <div className="-mr-5 w-[calc(100%+1.25rem)] md:-mr-10 md:w-[calc(100%+2.5rem)] xl:hidden">
              <MobileComposite name={name} color={color} logoUrl={logoUrl} />
            </div>

            <div className="hidden w-full xl:-mr-10 xl:block xl:w-[calc(100%+2.5rem)] xl:self-start">
              <ScaledFrame {...WEB_SCREEN} maxScale={1.3}>
                <WebDashboardScreen
                  name={name}
                  color={color}
                  logoUrl={logoUrl}
                  bleedRight
                />
              </ScaledFrame>
            </div>
            <div className="hidden flex-col items-center xl:absolute xl:-bottom-16 xl:right-6 xl:flex xl:origin-bottom-right xl:scale-[0.85]">
              <MobileAppScreen name={name} color={color} logoUrl={logoUrl} />
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
