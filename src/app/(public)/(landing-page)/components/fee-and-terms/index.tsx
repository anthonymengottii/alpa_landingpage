import Billet from "@/assets/billet.png";
import CreditCard from "@/assets/credit-card.png";
import Pix from "@/assets/pix.png";
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
      alt: "",
    },
    title: "Cartão de crédito D+2",
    content: "Receba em D+2 com apenas 5,99%",
  },
  {
    image: {
      src: Billet,
      alt: "",
    },
    title: "Boleto D+0",
    content: "Recebimento na mesma hora",
  },
  {
    image: {
      src: Pix,
      alt: "",
    },
    title: "PIX D+0",
    content: "Liquidação instantânea por apenas 3,99%",
  },
];

export function FeeAndTerms() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center space-y-4 mb-10 mx-auto">
        <span className="font-semibold text-primary text-center">
          Taxas e prazos
        </span>
        <h1 className="font-bold text-[32px] md:text-[40px] max-w-[600px] text-center">
          Maximize seus lucros com taxas incríveis!
        </h1>
      </div>

      <div className="grid grid-cols-1 items-center justify-items-center self-center lg:grid-cols-3 gap-8">
        {items.map(({ image, title, content }) => (
          <Card
            key={title}
            className="w-full px-10 pt-[76px] pb-16 rounded-[40px] border-0 gap-0  max-w-[397px] h-full"
          >
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
        ))}
      </div>
    </Section>
  );
}
