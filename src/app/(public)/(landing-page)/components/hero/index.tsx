"use client";

import BannerMobile from "@/assets/banner-mobile.png";
import Banner from "@/assets/banner.png";
import { HeroContent } from "@/components/hero-content";
import Image from "next/image";

export function Hero() {
  return (
    <main className="relative w-full bg-accent min-h-[700px] md:min-h-0">
      <div className="absolute top-0 w-full pt-20 md:pt-20 lg:pt-24 xl:pt-32 z-10">
        <div className="w-full max-w-7xl mx-auto px-6">
          <HeroContent
            eyebrow="Vem pra a Alpa!"
            title="Solução real pra quem quer performance real."
            description="A Alpa é a solução ideal para quem busca rapidez e segurança nas transações financeiras."
            cta={{
              label: "Quero criar minha conta",
              href: "https://app.usealpa.com/registro",
            }}
          />
        </div>
      </div>

      <Image
        src={Banner}
        width={1920}
        height={788}
        className="hidden md:flex md:h-[580px] lg:h-[680px] xl:h-[812px] object-cover object-[70%_70%]"
        alt="Banner principal da Alpa - Solução de pagamentos online"
        draggable={false}
        priority
      />

      <div className="md:hidden absolute inset-0 overflow-hidden z-0 [transform:translateZ(0)]">
        <Image
          src={BannerMobile}
          width={1920}
          height={788}
          alt="Banner principal da Alpa - Solução de pagamentos online"
          className="absolute w-full object-cover object-[80%_0%] -top-[180px] h-[calc(100%+180px)]"
          draggable={false}
          priority
        />
      </div>
    </main>
  );
}
