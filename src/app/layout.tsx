import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { env } from "@/env";

const inter = Inter({
  subsets: ["latin"],
  display: "fallback",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.BASE_URL),
  title: {
    default: "Alpa | Run your business smarter",
    template: "%s | Alpa",
  },
  description:
    "A Alpa oferece processamento de pagamentos online, além de ferramentas financeiras que atendem empresas de todos os tamanhos. Receba pagamentos, faça repasses e automatize suas finanças para acelerar crescimento do seu negócio.",
  openGraph: {
    title: "Alpa | Run your business smarter",
    description:
      "A Alpa oferece processamento de pagamentos online, além de ferramentas financeiras que atendem empresas de todos os tamanhos. Receba pagamentos, faça repasses e automatize suas finanças para acelerar crescimento do seu negócio.",
    url: env.BASE_URL,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}  antialiased`}>{children}</body>
    </html>
  );
}
