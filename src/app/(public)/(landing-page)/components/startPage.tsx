"use client";
import { Faq } from "@/components/faq";
import { Benefits } from "./benefits";
import { FeeAndTerms } from "./fee-and-terms";
import { GetStarted } from "./get-started";
import { Hero } from "./hero";
import { Partners } from "./partners";
import { RequestFees } from "./request-fees";
import { Resources } from "./resources";
import { WhyUsersLoveAlpa } from "./why-users-love-alpa";

export function StartPage() {
  return (
    <>
      <Hero />
      <Partners />
      <Benefits />
      <Resources />
      <FeeAndTerms />
      <WhyUsersLoveAlpa />
      <RequestFees />
      <GetStarted />
      <Faq />
    </>
  );
}
