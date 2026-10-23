"use client";

import BannerMobile from "@/assets/banner-mobile.png";
import Banner from "@/assets/banner.png";
import { CtaButton } from "@/components/cta-button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export const WHITE_LABEL_WHATSAPP =
  "https://wa.me/+5511978673936?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20White%20Label%20da%20Alpa.";

export function WhiteLabelHero() {
  return (
    <main className="relative w-full bg-accent min-h-[700px] md:min-h-0">
      <div className="absolute top-0 w-full pt-20 md:pt-20 lg:pt-24 xl:pt-32 z-10">
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 justify-center max-w-80 md:max-w-[550px] mx-auto md:items-start md:mx-0"
          >
            <span className="font-semibold">White Label</span>
            <h1 className="text-[30px] sm:text-4xl leading-7 md:leading-12 md:text-5xl font-bold lg:leading-14 text-center md:text-start lg:text-6xl">
              Seu próprio gateway de pagamentos, com a sua marca.
            </h1>
            <p className="text-center md:text-start text-sm md:text-base">
              Lance sua plataforma de pagamentos com domínio, identidade visual
              e taxas próprias, sobre a mesma infraestrutura que a Alpa usa.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <CtaButton href={WHITE_LABEL_WHATSAPP} target="_blank">
                <span className="text-sm font-bold">
                  Quero minha plataforma
                </span>
                <ArrowUpRight className="size-5 stroke-icon stroke-2 group-hover:stroke-primary" />
              </CtaButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Image
        src={Banner}
        width={1920}
        height={788}
        className="hidden md:flex md:h-[580px] lg:h-[680px] xl:h-[812px] object-cover object-[70%_70%]"
        alt="Banner da solução White Label da Alpa"
        draggable={false}
        priority
      />

      <div className="md:hidden absolute inset-0 overflow-hidden z-0 [transform:translateZ(0)]">
        <Image
          src={BannerMobile}
          width={1920}
          height={788}
          alt="Banner da solução White Label da Alpa"
          className="absolute w-full object-cover object-[80%_0%] -top-[180px] h-[calc(100%+180px)]"
          draggable={false}
          priority
        />
      </div>
    </main>
  );
}
