"use client";

import { LogoIcon } from "@/assets/svg/logo-icon";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { ArrowUpRight, Globe, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { WHITE_LABEL_WHATSAPP } from "./white-label-links";

const swatches = ["bg-primary", "bg-accent", "bg-foreground", "bg-card"];

function BrandPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[520px] mx-auto"
      aria-hidden="true"
    >
      <div className="absolute -inset-4 md:-inset-6 rounded-[48px] bg-accent" />

      <div className="relative rounded-[32px] bg-card p-6 md:p-8 flex flex-col gap-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <figure className="flex items-center justify-center size-11 rounded-2xl bg-primary">
              <LogoIcon className="size-6 [&_path]:fill-white" />
            </figure>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Sua Marca</span>
              <span className="text-xs text-foreground/60">
                pay.suamarca.com
              </span>
            </div>
          </div>
          <div className="flex gap-1.5">
            {swatches.map((color) => (
              <span
                key={color}
                className={`size-4 rounded-full border border-foreground/20 ${color}`}
              />
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-background p-6 flex flex-col gap-2">
          <span className="text-xs text-foreground/60">Saldo disponível</span>
          <span className="text-3xl font-bold">R$ 48.920,00</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-primary">
            <TrendingUp className="size-4" /> +12,4% esta semana
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["PIX", "Cartão", "Boleto"].map((method) => (
            <div
              key={method}
              className="rounded-2xl bg-background px-3 py-4 flex flex-col items-center gap-1"
            >
              <span className="text-sm font-bold">{method}</span>
              <span className="text-[11px] text-foreground/60">ativo</span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-6 -left-2 md:-left-10 flex items-center gap-3 rounded-2xl bg-primary px-5 py-4 shadow-xl"
      >
        <Globe className="size-6" />
        <span className="text-sm font-bold leading-4">
          Checkout no
          <br />
          seu domínio
        </span>
      </motion.div>
    </motion.div>
  );
}

export function WhiteLabelHero() {
  return (
    <Section className="pt-44 pb-20 md:pt-56 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start"
      >
        <span className="font-semibold text-primary uppercase tracking-wide">
          White Label
        </span>
        <h1 className="text-[32px] sm:text-4xl md:text-5xl font-bold leading-tight max-w-xl">
          Seu gateway de pagamentos, com a sua marca.
        </h1>
        <p className="text-base max-w-lg">
          Lance a sua própria plataforma de pagamentos com identidade visual,
          domínio e taxas próprias. PIX, cartão em até 12x e boleto, sem
          construir tecnologia do zero.
        </p>

        <CtaButton href={WHITE_LABEL_WHATSAPP} target="_blank" variant="primary">
          <span className="text-sm font-bold group-hover:text-foreground-invert">
            Quero minha plataforma
          </span>
          <ArrowUpRight className="size-5 stroke-icon group-hover:stroke-primary" />
        </CtaButton>
      </motion.div>

      <BrandPreview />
    </Section>
  );
}
