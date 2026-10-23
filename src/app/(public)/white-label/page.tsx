import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";
import { WhiteLabelPage } from "./components/white-label-page";
import { whiteLabelDoubts } from "./components/white-label-faq";

export const metadata: Metadata = {
  title: "White Label | Sua própria plataforma de pagamentos",
  description:
    "Lance seu gateway de pagamentos com a sua marca. Plataforma white-label da Alpa com domínio próprio, checkout personalizado, multiadquirência, taxas customizadas e painel administrativo completo.",
  keywords: [
    "white label pagamentos",
    "gateway white label",
    "plataforma de pagamentos white label",
    "subadquirente white label",
    "criar gateway de pagamento",
    "checkout personalizado",
    "multiadquirência",
  ],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://usealpa.com/white-label",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: whiteLabelDoubts.map(({ question, answer }) => ({
    "@type": "Question",
    name: `${question}?`,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WhiteLabelPage />
    </>
  );
}
