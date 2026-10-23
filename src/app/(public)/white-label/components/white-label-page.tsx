"use client";

import { WhiteLabelBranding } from "./white-label-branding";
import { WhiteLabelCta } from "./white-label-cta";
import { WhiteLabelDivision } from "./white-label-division";
import { WhiteLabelFaq } from "./white-label-faq";
import { WhiteLabelFeatures } from "./white-label-features";
import { WhiteLabelHero } from "./white-label-hero";
import { WhiteLabelMethods } from "./white-label-methods";
import { WhiteLabelStats } from "./white-label-stats";
import { WhiteLabelSteps } from "./white-label-steps";

export function WhiteLabelPage() {
  return (
    <main>
      <WhiteLabelHero />
      <WhiteLabelStats />
      <WhiteLabelBranding />
      <WhiteLabelMethods />
      <WhiteLabelFeatures />
      <WhiteLabelDivision />
      <WhiteLabelSteps />
      <WhiteLabelCta />
      <WhiteLabelFaq />
    </main>
  );
}
