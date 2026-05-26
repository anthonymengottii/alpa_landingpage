import { JsonLd } from "@/components/json-ld";
import { doubts } from "@/components/faq/doubts";
import { Metadata } from "next";
import { PageFaq } from "./components/page-faq";

export const metadata: Metadata = {
  title: "Dúvidas Frequentes – FAQ",
  description:
    "Respostas para as principais dúvidas sobre o gateway de pagamento da Alpa: taxas, prazos de saque, antifraude, tipos de negócio aceitos, PIX, cartão de crédito e boleto bancário.",
  keywords: [
    "dúvidas gateway de pagamento",
    "FAQ pagamento online",
    "como funciona alpa",
    "taxa gateway pagamento",
    "saque diário fintech",
    "antifraude pagamentos",
    "gateway infoprodutos",
  ],
  alternates: {
    canonical: "https://usealpa.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: doubts.map(({ question, answer }) => ({
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
      <PageFaq />
    </>
  );
}

