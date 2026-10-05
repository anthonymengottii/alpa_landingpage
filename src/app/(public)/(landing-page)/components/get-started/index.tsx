"use client";

import { LogoIcon } from "@/assets/svg/logo-icon";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import Image from "next/image";

import CellPhone from "@/assets/cell-phone.png";
import { CtaButton } from "@/components/cta-button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function GetStarted() {
  return (
    <section className="my-30 lg:my-52">
      <div className="relative flex flex-col items-center gap-7 pt-16 lg:pb-44 lg:flex-row lg:justify-between bg-primary px-6 lg:px-12 max-w-7xl mx-auto xl:rounded-3xl overflow-visible">
        <Reveal x={-24} y={0} className="flex flex-col items-center lg:max-w-80 lg:items-start">
          <LogoIcon className="size-7 [&_path]:fill-white" />
          <span className="text-base font-semibold mb-3 mt-[59px] text-background">
            Criar conta
          </span>
          <h1 className="text-2xl md:text-[40px] font-bold text-center lg:text-start">
            Crie sua conta agora mesmo e tenha acesso a todos os benefícios.
          </h1>
        </Reveal>

        <Reveal x={24} y={0} delay={0.1} className="flex flex-col items-center lg:items-start space-y-7 lg:max-w-80 ">
          <p className="text-base text-center lg:text-start md:text-2xl font-normal">
            Na Alpa você tem todos os recursos para crescer o seu negócio com
            tecnologia e confiança. Vem pra alpa!
          </p>

          <CtaButton
            variant="truffle"
            target="_blank"
            href="https://wa.me/+5511978673936"
          >
            <span className="text-sm font-bold">Abrir Sua Conta</span>
            <ArrowUpRight className="stroke-primary stroke-2" />
          </CtaButton>
        </Reveal>

        <div className="relative z-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:w-max">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={CellPhone}
              alt="cell phone"
              className="max-w-60 xl:max-w-full -mb-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
