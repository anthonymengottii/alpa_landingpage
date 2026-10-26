"use client";

import { WhiteLabelBranding } from "./white-label-branding";
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
      <div className="pt-20 md:pt-32">
        <Faq items={whiteLabelDoubts} />
      </div>
    </>
  );
}
