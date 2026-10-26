"use client";

import { WhiteLabelBranding } from "./white-label-branding";
import { WhiteLabelCta } from "./white-label-cta";
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
import { WhiteLabelStats } from "./white-label-stats";
import { WhiteLabelSteps } from "./white-label-steps";

export function WhiteLabelPage() {
  return (
    <>
      <WhiteLabelHero />
      <WhiteLabelStats />
      <WhiteLabelBranding />
      <WhiteLabelMethods />
      <SalesSection />
      <CheckoutSection />
      <GrowthSection />
      <FinanceSection />
      <IntegrationSection />
      <SecuritySection />
      <WhiteLabelSteps />
      <WhiteLabelCta />
      <Faq items={whiteLabelDoubts} />
    </>
  );
}
