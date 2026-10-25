"use client";

import { Bank } from "@/assets/svg/bank";
import { Cash } from "@/assets/svg/cash";
import { LogoIcon } from "@/assets/svg/logo-icon";
import { Money } from "@/assets/svg/money";
import CreditCard from "@/assets/credit-card.png";
import { HeroContent } from "@/components/hero-content";
import { TrendingUp } from "lucide-react";
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
      className="relative mx-auto w-full max-w-[540px] h-[420px] sm:h-[480px]"
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
    <main className="relative w-full overflow-hidden bg-accent">
      <div className="w-full max-w-7xl mx-auto px-6 pt-20 md:pt-20 lg:pt-24 xl:pt-32 pb-20 lg:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:items-start">
        <HeroContent
          eyebrow="White Label"
          title="Seu gateway de pagamentos, com a sua marca."
          description="Lance a sua própria plataforma de pagamentos com identidade visual, domínio e taxas próprias. PIX, cartão em até 12x e boleto, sem construir tecnologia do zero."
          cta={{
            label: "Quero minha plataforma",
            href: WHITE_LABEL_WHATSAPP,
            target: "_blank",
          }}
        />

        <HeroVisual />
      </div>
    </main>
  );
}
