"use client";

import { Bank } from "@/assets/svg/bank";
import { Cash } from "@/assets/svg/cash";
import { LogoIcon } from "@/assets/svg/logo-icon";
import { Money } from "@/assets/svg/money";
import Banner from "@/assets/banner-3.png";
import CreditCard from "@/assets/credit-card.png";
import { CtaButton } from "@/components/cta-button";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { WHITE_LABEL_WHATSAPP } from "./white-label-links";

const float = (delay = 0, distance = 10) => ({
  animate: { y: [0, -distance, 0] },
  transition: {
    duration: 5,
    delay,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut" as const,
  },
});

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[560px] h-[420px] sm:h-[500px]"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-8 bottom-0 rounded-[48px] bg-primary overflow-hidden">
        <LogoIcon className="absolute -right-10 -bottom-12 size-72 opacity-20 [&_path]:fill-background" />
      </div>

      <motion.div
        {...float(0.4, 8)}
        className="absolute -top-2 right-2 sm:right-0 w-[62%] -rotate-[8deg] drop-shadow-2xl"
      >
        <Image src={CreditCard} alt="" className="w-full rounded-2xl" />
      </motion.div>

      <motion.div
        {...float(0, 6)}
        className="absolute left-4 right-4 sm:left-8 sm:right-8 top-32 sm:top-40 rounded-[32px] bg-card p-5 sm:p-6 shadow-2xl flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <figure className="flex items-center justify-center size-10 rounded-2xl bg-primary">
              <LogoIcon className="size-5 [&_path]:fill-white" />
            </figure>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold">Sua Marca</span>
              <span className="text-xs text-foreground/60">
                pay.suamarca.com
              </span>
            </div>
          </div>
          <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-primary">
            ao vivo
          </span>
        </div>

        <div className="rounded-3xl bg-background p-5 flex flex-col gap-1">
          <span className="text-xs text-foreground/60">Total em vendas</span>
          <span className="text-2xl sm:text-3xl font-bold">R$ 450.596,62</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-primary">
            <TrendingUp className="size-4" /> +12,4% esta semana
          </span>
          <div className="flex items-end justify-between h-12 mt-3">
            {[40, 65, 35, 80, 55, 90, 60, 100].map((h, i) => (
              <span
                key={`${h}-${i}`}
                className={`w-2.5 sm:w-3 rounded-full ${i === 7 ? "bg-primary" : "bg-foreground/15"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        {...float(0.8, 7)}
        className="absolute -left-2 sm:-left-8 bottom-12 flex items-center gap-3 rounded-[28px] bg-[#FFF8F0] px-4 py-3 text-foreground-invert shadow-xl"
      >
        <figure className="flex items-center justify-center size-11 rounded-full bg-primary">
          <LogoIcon className="size-5 [&_path]:fill-white" />
        </figure>
        <div className="flex flex-col leading-tight">
          <span className="text-xs text-accent">Valor recebido</span>
          <span className="text-lg font-bold">R$ 134,99</span>
        </div>
      </motion.div>

      <motion.div
        {...float(1.2, 6)}
        className="absolute -right-1 sm:-right-6 bottom-2 flex gap-2 rounded-[28px] bg-[#FBE1CB] p-2.5 shadow-xl"
      >
        {[Cash, Money, Bank].map((Icon, i) => (
          <figure
            key={i}
            className="flex items-center justify-center size-12 rounded-2xl bg-primary"
          >
            <Icon />
          </figure>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function WhiteLabelHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={Banner}
        alt=""
        fill
        priority
        className="object-cover opacity-70"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative max-w-7xl mx-auto w-full px-6 2xl:px-0 pt-44 pb-24 md:pt-56 md:pb-36 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start"
        >
          <span className="rounded-full border border-primary/60 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary uppercase tracking-wide">
            White Label
          </span>
          <h1 className="text-[34px] sm:text-5xl md:text-6xl font-bold leading-[1.1] max-w-xl">
            Seu gateway de pagamentos, com a{" "}
            <span className="text-primary">sua marca.</span>
          </h1>
          <p className="text-base md:text-lg max-w-lg">
            Lance a sua própria plataforma de pagamentos com identidade visual,
            domínio e taxas próprias. PIX, cartão em até 12x e boleto, sem
            construir tecnologia do zero.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <CtaButton
              href={WHITE_LABEL_WHATSAPP}
              target="_blank"
              variant="primary"
            >
              <span className="text-sm font-bold group-hover:text-foreground-invert">
                Quero minha plataforma
              </span>
              <ArrowUpRight className="size-5 stroke-icon group-hover:stroke-primary" />
            </CtaButton>
            <CtaButton href="#estudio" variant="outline">
              <span className="text-sm font-bold">Ver personalização</span>
            </CtaButton>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
