"use client";

import Billet from "@/assets/billet.png";
import CreditCard from "@/assets/credit-card.png";
import Pix from "@/assets/pix.png";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const items = [
  {
    image: {
      src: CreditCard,
      alt: "Cartão de crédito com parcelamento em até 12x",
    },
    title: "Cartão em até 12x",
    content: "Crédito e débito com taxa por parcela e liberação automática",
  },
  {
    image: {
      src: Billet,
      alt: "Boleto bancário com vencimento configurável",
    },
    title: "Boleto",
    content: "Geração automática com vencimento configurável",
  },
  {
    image: {
      src: Pix,
      alt: "PIX com QR code e confirmação imediata",
    },
    title: "PIX",
    content: "Cobrança com QR code e confirmação imediata",
  },
];

export function WhiteLabelMethods() {
  return (
    <Section className="pt-20 pb-20 md:pt-32 md:pb-40">
      <Reveal className="flex flex-col items-center justify-center space-y-4 mb-10 mx-auto">
        <span className="font-semibold text-primary text-center">
          Meios de pagamento
        </span>
        <h2 className="font-bold text-[32px] md:text-[40px] max-w-[600px] text-center">
          Seus clientes pagam como preferirem
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 items-center justify-items-center self-center lg:grid-cols-3 gap-8">
        {items.map(({ image, title, content }, index) => (
          <Reveal
            key={title}
            delay={index * 0.12}
            className="w-full flex justify-center"
          >
            <Card className="w-full px-10 pt-[76px] pb-16 rounded-[40px] border-0 gap-0 max-w-[397px] h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <CardHeader className="flex flex-col gap-5 items-center p-0">
                <figure className="flex items-end justify-end max-w-80 w-full rounded-2xl max-h-[202px]">
                  <Image src={image.src} alt={image.alt} />
                </figure>
                <CardTitle className="font-bold text-2xl text-center">
                  {title}
                </CardTitle>
                <CardDescription className="text-base font-normal text-center text-foreground">
                  {content}
                </CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
