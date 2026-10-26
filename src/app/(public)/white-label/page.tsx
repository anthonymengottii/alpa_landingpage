import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";
import { WhiteLabelPage } from "./components/white-label-page";
import { whiteLabelDoubts } from "./components/white-label-doubts";

const PAGE_URL = "https://usealpa.com/white-label";
const TITLE = "Gateway de Pagamentos White Label | Lance com a sua marca";
const DESCRIPTION =
  "Lance sua própria plataforma de pagamentos white label: marca, domínio e taxas próprias, PIX, cartão em até 12x e boleto, multiadquirência, checkout personalizável, afiliados e API com SDKs.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "white label pagamentos",
    "gateway de pagamento white label",
    "plataforma de pagamentos white label",
    "subadquirente white label",
    "criar gateway de pagamento",
    "criar plataforma de pagamentos com minha marca",
    "checkout personalizado",
    "multiadquirência",
    "split de pagamentos",
    "gateway PIX white label",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Alpa",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alpa White Label | Seu gateway de pagamentos com a sua marca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const features = [
  "Marca própria: nome, logo, cor primária, banner de login e SEO configuráveis pelo painel",
  "Painel e checkout em subdomínios do domínio do cliente",
  "Taxas de PIX, cartão (por parcela, de 2x a 12x) e boleto configuráveis por empresa",
  "Multiadquirência com prioridade configurável e split de pagamentos",
  "Checkout personalizável com order bump, upsell, cupons e recuperação de carrinho",
  "Marketplace de afiliados, assinaturas recorrentes e programa Indique e Ganhe",
  "Carteira digital com saques via PIX confirmados por código e antecipação de recebíveis",
  "API REST, SDKs em JavaScript, PHP, Python e Java, webhooks e integração com Shopify",
  "Autenticação em dois fatores, KYC para pessoa física e jurídica e controle de equipe por cargos",
  "App mobile Android para acompanhar vendas e solicitar saques",
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "pt-BR",
      about: { "@id": `${PAGE_URL}#service` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Alpa White Label",
      serviceType: "Plataforma de pagamentos white label",
      description:
        "Plataforma de pagamentos pronta para ser lançada com a marca, o domínio e as taxas do cliente, com PIX, cartão de crédito e boleto.",
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "Alpa",
        url: "https://usealpa.com",
      },
      areaServed: { "@type": "Country", name: "Brasil" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Empresas que querem operar o próprio gateway ou subadquirente de pagamentos",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://wa.me/+5511978673936",
        availableLanguage: "pt-BR",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Recursos da plataforma white label",
        itemListElement: features.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Alpa",
          item: "https://usealpa.com",
        },
        { "@type": "ListItem", position: 2, name: "White Label", item: PAGE_URL },
      ],
    },
  ],
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
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <WhiteLabelPage />
    </>
  );
}
