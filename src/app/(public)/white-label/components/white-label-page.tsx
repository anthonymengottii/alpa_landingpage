"use client";

import { WhiteLabelBranding } from "./white-label-branding";
import { WhiteLabelCta } from "./white-label-cta";
import { WhiteLabelDivision } from "./white-label-division";
import { WhiteLabelFaq } from "./white-label-faq";
import { WhiteLabelHero } from "./white-label-hero";
import { WhiteLabelStats } from "./white-label-stats";
import { WhiteLabelSteps } from "./white-label-steps";

export function WhiteLabelPage() {
  return (
    <main>
      <WhiteLabelHero />
      <WhiteLabelStats />
      <WhiteLabelBranding />
      <WhiteLabelDivision />
      <WhiteLabelSteps />
      <WhiteLabelCta />
      <WhiteLabelFaq />
    </main>
  );
}
