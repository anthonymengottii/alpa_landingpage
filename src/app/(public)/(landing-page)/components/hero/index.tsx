import BannerMobile from "@/assets/banner-mobile.png";
import Banner from "@/assets/banner.png";
import { CtaButton } from "@/components/cta-button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <main className="relative w-full bg-accent">
      <div className="absolute top-0 w-full pt-20 md:pt-32 ">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className=" flex flex-col items-center gap-4 justify-center max-w-80  md:max-w-[550px] mx-auto md:items-start md:mx-0">
            <span className="font-semibold">Vem pra a Alpa!</span>
            <h1 className="text-[32px] sm:text-4xl leading-8 md:leading-12 md:text-5xl font-bold lg:leading-14 text-center md:text-start lg:text-6xl">
              Solução real pra quem quer performance real.
            </h1>
            <p className="text-center md:text-start ">
              A Alpa é a solução ideal para quem busca rapidez e segurança nas
              transações financeiras.
            </p>

            <CtaButton href="https://app.usealpa.com/register">
              <span className="text-sm font-bold">Quero criar minha conta</span>
              <ArrowUpRight className="size-5 stroke-icon stroke-2 group-hover:stroke-primary" />
            </CtaButton>
          </div>
        </div>
      </div>

      <Image
        src={Banner}
        width={1920}
        height={788}
        className="hidden md:flex  h-[812px] object-cover object-[70%_70%]"
        alt="Banner principal da Alpa - Solução de pagamentos online"
        draggable={false}
        priority
      />

      <Image
        src={BannerMobile}
        width={1920}
        height={788}
        alt="Banner principal da Alpa - Solução de pagamentos online"
        className="md:hidden -z-10 h-[812px] w-full object-cover"
        draggable={false}
        priority
      />
    </main>
  );
}
