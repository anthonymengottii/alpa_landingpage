import { DC } from "@/assets/svg/dc";
import { Instragram } from "@/assets/svg/instragram";
import { Linkedin } from "@/assets/svg/linkedin";
import { Logo } from "@/assets/svg/logo";
import Image from "next/image";
import Link from "next/link";
import { PolicyAndSupport } from "./policy-and-support";

import FooterBannerMobile from "@/assets/footer-banner-mobile.png";
import FooterBanner from "@/assets/footer-banner.png";

export function Footer() {
  return (
    <footer className="relative ">
      <div className="max-w-7xl w-full mx-auto px-6 pb-18 pt-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-44 mb-16 md:mb-56">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Logo />
            </Link>

            <p className="text-base text-center md:text-start max-w-44 my-9 md:mb-12 md:mt-7">
              Simplicidade e segurança para as suas vendas.
            </p>

            <div className="flex items-center gap-4">
              <Link
                target="_blank"
                href="https://www.instagram.com/usealpa_"
                className="flex items-center justify-center size-10 bg-accent rounded-full hover:bg-primary group transition-all duration-300"
              >
                <Instragram className="group-hover:[&>path]:fill-foreground" />
              </Link>
              <Link
                target="_blank"
                href="https://linkedin.com"
                className="flex items-center justify-center size-10 bg-accent rounded-full hover:bg-primary group transition-all duration-300"
              >
                <Linkedin className="group-hover:[&>path]:fill-foreground" />
              </Link>
            </div>
          </div>

          <PolicyAndSupport />
        </div>

        <div className="flex flex-col items-center gap-14 md:flex-row justify-between pt-12 border-t border-border/30">
          <div className="flex flex-col items-center md:flex-row gap-4 md:gap-14">
            <p className="text-xs text-center md:text-start h-max">
              © 2025 - Alpa - Gateway de pagamentos CNPJ 35.359.088/0001-17 -
              Todos os direitos reservados.
            </p>
            <span className=" text-xs text-center md:text-start max-w-46 flex-1 w-full">
              Avenida Brigadeiro Faria Lima 1485, Conj. 91, CEP 01.452.002
            </span>
          </div>

          <Link href="https://dinamitecriativa.com.br" target="_blank">
            <DC />
          </Link>
        </div>
      </div>

      <Image
        src={FooterBanner}
        alt=""
        width={1920}
        height={600}
        className="hidden opacity-20 md:flex absolute top-0  right-0 h-full bottom-0 -z-[1] lg:opacity-60 object-right object-cover 2xl:object-fill"
        aria-hidden="true"
      />

      <Image
        src={FooterBannerMobile}
        alt=""
        width={768}
        height={600}
        className="absolute top-0 h-full left-0 w-full right-0  bottom-0 -z-[2] md:hidden opacity-60"
        aria-hidden="true"
      />
    </footer>
  );
}
