import BannerImg from "@/assets/banner-2.png";
import { LogoIcon } from "@/assets/svg/logo-icon";
import { CtaButton } from "@/components/cta-button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function RequestFees() {
  return (
    <section className="relative w-full" id="taxas">
      <Image
        src={BannerImg}
        alt="banner"
        className="w-full h-[788px] object-cover"
        width={1920}
        priority
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-4 px-6">
        <LogoIcon />
        <span className="text-primary font-semibold">
          Mais lucro, menos taxa.
        </span>
        <h1 className="text-[32px] md:text-[40px] font-bold max-w-[441px] text-center leading-12">
          Você fatura mais de 50 mil reais por mês?
        </h1>
        <p className="text-base text-center max-w-md ">
          Na Alpa você tem todos os recursos para crescer o seu negócio com
          tecnologia e confiança. Vem pra Alpa!
        </p>

        <CtaButton href="https://wa.me/+5511978673936" variant="primary">
          <span className="text-sm font-bold group-hover:text-foreground-invert">
            Solicite taxas exclusivas para você
          </span>
          <ArrowUpRight className="stroke-icon group-hover:stroke-primary" />
        </CtaButton>
      </div>
    </section>
  );
}
