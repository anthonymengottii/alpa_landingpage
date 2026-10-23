"use client";

import Billet from "@/assets/billet.png";
import CreditCard from "@/assets/credit-card.png";
import Pix from "@/assets/pix.png";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import Image from "next/image";

const methods = [
  {
    image: Pix,
    label: "PIX",
    title: "Recebimento instantâneo",
    description: "Cobrança com QR code e confirmação imediata do pagamento.",
    frame: "bg-accent",
    cover: true,
  },
  {
    image: CreditCard,
    label: "Cartão",
    title: "Em até 12x",
    description:
      "Crédito e débito com taxa por parcela e liberação automática dos valores.",
    frame: "bg-primary",
    cover: false,
  },
  {
    image: Billet,
    label: "Boleto",
    title: "Geração automática",
    description: "Boletos com vencimento configurável para cada cobrança.",
    frame: "bg-card",
    cover: true,
  },
];

export function WhiteLabelMethods() {
  return (
    <Section className="pb-20 md:pb-40">
      <Reveal className="flex flex-col items-center gap-4 mb-12 text-center">
        <span className="font-bold text-primary">Meios de pagamento</span>
        <h2 className="font-bold text-[32px] md:text-[40px] max-w-[620px] leading-tight">
          Seus clientes pagam como preferirem
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {methods.map(
          ({ image, label, title, description, frame, cover }, index) => (
            <Reveal key={label} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[40px] bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div
                  className={`relative flex h-64 items-center justify-center overflow-hidden ${frame}`}
                >
                  <Image
                    src={image}
                    alt={`${label} na plataforma white label`}
                    className={
                      cover
                        ? "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        : "w-[78%] -rotate-6 drop-shadow-2xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 p-8">
                  <span className="text-sm font-bold text-primary">
                    {label}
                  </span>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-base">{description}</p>
                </div>
              </article>
            </Reveal>
          ),
        )}
      </div>
    </Section>
  );
}
