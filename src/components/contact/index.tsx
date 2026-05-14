import { Headset } from "lucide-react";
import { CtaButton } from "../cta-button";

export function Contact() {
  return (
    <div className="w-full bg-primary py-1.5 h-12">
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto px-5 h-full">
        <p className="text-sm hidden sm:flex">
          Seu negócio fatura mais de R$ 50 mil mensais? Aproveite condições
          exclusivas!
        </p>
        <p className="text-xs sm:hidden">Fatura mais de R$ 50 mil?</p>

        <CtaButton
          target="_blank"
          variant="outline"
          className="py-2 border-[1px]"
          href="https://wa.me/+5511978673936"
        >
          <Headset className="size-4 sm:size-5 stroke-2 stroke-foreground group-hover:stroke-primary transition-colors duration-300" />
          <span className="text-xs font-medium">Fale com a gente</span>
        </CtaButton>
      </div>
    </div>
  );
}
