import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { env } from "@/env";
import { JsonLd } from "@/components/json-ld";

const inter = Inter({
  subsets: ["latin"],
  display: "fallback",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.BASE_URL),
  title: {
    default: "Alpa | Administre seu negócio de forma mais inteligente",
    template: "%s | Alpa",
  },
  description:
    "A Alpa é um gateway de pagamento online para e-commerces, infoprodutos e dropshipping. Taxas a partir de 3,99% no PIX e 5,99% no crédito. Receba em D+0, saque diário e antifraude híbrido.",
  keywords: [
    "gateway de pagamento",
    "processamento de pagamentos",
    "pagamento online",
    "gateway PIX",
    "receber pagamentos online",
    "fintech brasileira",
    "antifraude pagamentos",
    "e-commerce pagamentos",
    "infoprodutos pagamentos",
    "dropshipping pagamentos",
    "saque instantâneo",
    "liquidez instantânea",
    "alpa pagamentos",
  ],
  category: "financial services",
  alternates: {
    canonical: env.BASE_URL,
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
    title: "Alpa | Administre seu negócio de forma mais inteligente",
    description:
      "A Alpa é um gateway de pagamento online para e-commerces, infoprodutos e dropshipping. Taxas a partir de 3,99% no PIX e 5,99% no crédito. Receba em D+0 com saque diário.",
    url: env.BASE_URL,
    siteName: "Alpa",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alpa | Gateway de Pagamento Online para Negócios Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpa | Administre seu negócio de forma mais inteligente",
    description:
      "A Alpa é um gateway de pagamento online para e-commerces, infoprodutos e dropshipping. Taxas a partir de 3,99% no PIX e 5,99% no crédito.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alpa",
  alternateName: "Alpa Pagamentos",
  url: "https://usealpa.com",
  logo: "https://usealpa.com/logo.png",
  description:
    "A Alpa é uma fintech brasileira especializada em gateway de pagamentos online para e-commerces, infoprodutos, dropshipping e negócios digitais. Oferece PIX a 3,99%, cartão de crédito a 5,99% D+2, boleto D+0, antifraude híbrido e saque diário.",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "BR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://wa.me/+5511978673936",
      availableLanguage: "Portuguese",
    },
  ],
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alpa",
  url: "https://usealpa.com",
  description:
    "Gateway de pagamento online para negócios digitais. PIX, cartão de crédito e boleto com as menores taxas e saque diário.",
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://usealpa.com/faq?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}  antialiased`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
      </body>
    </html>
  );
}
