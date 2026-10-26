"use client";

import { WhiteLabelBranding } from "./white-label-branding";
import { GetStarted } from "../../(landing-page)/components/get-started";
import { RequestFees } from "../../(landing-page)/components/request-fees";
import { WHITE_LABEL_WHATSAPP } from "./white-label-links";
import { Faq } from "@/components/faq";
import { whiteLabelDoubts } from "./white-label-doubts";
import {
  CheckoutSection,
  FinanceSection,
  GrowthSection,
  IntegrationSection,
  SalesSection,
  SecuritySection,
} from "./white-label-sections";
import { WhiteLabelHero } from "./white-label-hero";
import { WhiteLabelMethods } from "./white-label-methods";
import { WhiteLabelSteps } from "./white-label-steps";

export function WhiteLabelPage() {
  return (
    <>
      <WhiteLabelHero />
      <WhiteLabelMethods />
      <SalesSection />
      <CheckoutSection />
      <GrowthSection />
      <FinanceSection />
      <IntegrationSection />
      <WhiteLabelBranding />
      <SecuritySection />
      <WhiteLabelSteps />
      <RequestFees
        id="contato-white-label"
        eyebrow="Seu gateway, sua marca."
        title="Pronto para lançar o seu próprio gateway?"
        description="Fale com o nosso time e receba uma proposta para a sua operação white label."
        cta={{
          label: "Falar com um especialista",
          href: WHITE_LABEL_WHATSAPP,
          target: "_blank",
        }}
      />
      <GetStarted
        eyebrow="White Label"
        title="Tenha o seu gateway de pagamentos com a sua marca."
        description="Tecnologia, checkout e painel prontos para você operar com a sua identidade. Vem pra Alpa!"
        cta={{
          label: "Quero o meu white label",
          href: WHITE_LABEL_WHATSAPP,
          target: "_blank",
        }}
      />
      <Faq items={whiteLabelDoubts} />
    </>
  );
}
