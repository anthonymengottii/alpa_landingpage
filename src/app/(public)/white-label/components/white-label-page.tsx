"use client";

import { Partners } from "../../(landing-page)/components/partners";
import { GetStarted } from "../../(landing-page)/components/get-started";
import { RequestFees } from "../../(landing-page)/components/request-fees";
import { WhiteLabelFaq } from "./white-label-faq";
import { WhiteLabelFeatures } from "./white-label-features";
import { WhiteLabelHero } from "./white-label-hero";
import { WhiteLabelSteps } from "./white-label-steps";

export function WhiteLabelPage() {
  return (
    <>
      <WhiteLabelHero />
      <Partners />
      <WhiteLabelFeatures />
      <WhiteLabelSteps />
      <RequestFees />
      <GetStarted />
      <WhiteLabelFaq />
    </>
  );
}
