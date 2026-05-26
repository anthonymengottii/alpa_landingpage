import { JsonLd } from "@/components/json-ld";
import { StartPage } from "./components/startPage";

export const revalidate = 1800;

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Alpa – Gateway de Pagamento",
  alternateName: "Alpa Pagamentos",
  description:
    "Gateway de pagamento online para e-commerces, infoprodutos, dropshipping e negócios digitais. Aceita cartão de crédito, PIX e boleto bancário com antifraude híbrido e saque diário.",
  url: "https://usealpa.com",
  logo: "https://usealpa.com/logo.png",
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  availableLanguage: "Portuguese",
  currenciesAccepted: "BRL",
  paymentAccepted: "Cartão de Crédito, PIX, Boleto Bancário",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planos e Taxas Alpa",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Cartão de Crédito D+2",
        description:
          "Receba pagamentos via cartão de crédito com liquidação em D+2 (dois dias úteis). Taxa de 5,99% por transação aprovada.",
        price: "5.99",
        priceCurrency: "BRL",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "5.99",
          priceCurrency: "BRL",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: 100,
            unitCode: "BRL",
          },
          description: "5,99% por transação aprovada",
        },
      },
      {
        "@type": "Offer",
        name: "PIX D+0",
        description:
          "Receba pagamentos via PIX com liquidação instantânea (D+0). Taxa de 3,99% por transação aprovada.",
        price: "3.99",
        priceCurrency: "BRL",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "3.99",
          priceCurrency: "BRL",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: 100,
            unitCode: "BRL",
          },
          description: "3,99% por transação aprovada",
        },
      },
      {
        "@type": "Offer",
        name: "Boleto Bancário D+0",
        description:
          "Receba pagamentos via boleto bancário com liquidação no mesmo dia (D+0).",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={financialServiceSchema} />
      <StartPage />
    </>
  );
}