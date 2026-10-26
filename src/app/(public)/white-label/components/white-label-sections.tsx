"use client";

import { Cash } from "@/assets/svg/cash";
import { Check as CheckIcon } from "@/assets/svg/check";
import { Lock } from "@/assets/svg/lock";
import { Persons } from "@/assets/svg/persons";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import affiliatesImg from "@/assets/system/affiliates.webp";
import apiImg from "@/assets/system/api.webp";
import checkoutImg from "@/assets/system/checkout.webp";
import transactionsImg from "@/assets/system/transactions.webp";
import webhooksImg from "@/assets/system/webhooks.webp";
import withdrawImg from "@/assets/system/withdraw.webp";
import { Percent, Tag } from "lucide-react";
import { Pill, ScreenFrame, ScreenStage, SplitSection } from "./white-label-split";

const bleed = "w-[114%] max-w-none";

export function SalesSection() {
  return (
    <SplitSection
      id="vendas"
      label="Operação"
      title="Acompanhe cada venda em tempo real."
      description="Uma visão clara de todas as transações, com filtros e exportação."
      bullets={[
        "Filtros por status e meio de pagamento",
        "Exportação dos dados em CSV",
        "Reembolsos direto pelo painel",
      ]}
      visual={
        <ScreenStage tone="accent">
          <ScreenFrame
            src={transactionsImg}
            alt="Tela de transações do painel"
            url="app.suamarca.com/transacoes"
            className={bleed}
          />
          <Pill className="absolute bottom-6 left-6 flex items-center gap-3 py-3 sm:bottom-10 sm:left-10">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary">
              <CheckIcon />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] text-accent">Venda aprovada</span>
              <span className="text-base font-bold">+ R$ 297,00</span>
            </span>
          </Pill>
        </ScreenStage>
      }
    />
  );
}

export function CheckoutSection() {
  return (
    <SplitSection
      id="checkout"
      direction="right"
      label="Checkout"
      title="Um checkout com a sua cara, pronto para converter."
      description="Monte o layout de cada link de pagamento e aumente o ticket médio com ofertas na hora da compra."
      bullets={[
        "Layout configurável por bloco",
        "Order bump, upsell e cupons",
        "Recuperação de carrinho abandonado",
      ]}
      visual={
        <ScreenStage>
          <ScreenFrame
            src={checkoutImg}
            alt="Checkout público com a marca do cliente"
            url="checkout.suamarca.com/pay/curso-marketing"
            className={bleed}
          />
          <Pill className="absolute bottom-6 left-6 flex items-center gap-3 py-3 sm:bottom-10 sm:left-10">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary">
              <Tag className="size-4 stroke-white" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] text-accent">Cupom DESC10</span>
              <span className="text-base font-bold">- R$ 29,70</span>
            </span>
          </Pill>
        </ScreenStage>
      }
    />
  );
}

export function GrowthSection() {
  return (
    <SplitSection
      label="Crescimento"
      title="Afiliados e recorrência para escalar as vendas."
      description="Ferramentas para vender mais e fidelizar, sem montar tudo do zero."
      bullets={[
        "Marketplace de afiliados com comissão automática",
        "Assinaturas com trial e métricas de MRR",
        "Indique e Ganhe e programa de recompensas",
      ]}
      visual={
        <ScreenStage tone="accent">
          <ScreenFrame
            src={affiliatesImg}
            alt="Marketplace de afiliados do painel"
            url="app.suamarca.com/afiliados"
            className={bleed}
          />
          <Pill className="absolute bottom-6 left-6 flex items-center gap-3 py-3 sm:bottom-10 sm:left-10">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary">
              <Percent className="size-4 stroke-white" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] text-accent">Comissão creditada</span>
              <span className="text-base font-bold">+ R$ 89,10</span>
            </span>
          </Pill>
        </ScreenStage>
      }
    />
  );
}

export function FinanceSection() {
  return (
    <SplitSection
      direction="right"
      label="Financeiro"
      title="Saldo, saques e antecipação sob controle."
      description="Carteira digital com confirmação de segurança em cada movimentação."
      bullets={[
        "Saques via PIX com confirmação por código",
        "Antecipação de recebíveis",
        "Limites por empresa",
      ]}
      visual={
        <ScreenStage>
          <ScreenFrame
            src={withdrawImg}
            alt="Tela de saque e extrato do painel"
            url="app.suamarca.com/saque"
            className={bleed}
          />
          <Pill className="absolute bottom-6 left-6 flex flex-col gap-2 py-3 sm:bottom-10 sm:left-10">
            <span className="text-[11px] font-semibold">
              Código de confirmação enviado por e-mail
            </span>
            <span className="flex gap-1.5">
              {["4", "8", "1", "7", "", ""].map((digit, i) => (
                <span
                  key={i}
                  className="flex h-8 w-7 items-center justify-center rounded-lg bg-foreground-invert/10 text-sm font-bold"
                >
                  {digit}
                </span>
              ))}
            </span>
          </Pill>
        </ScreenStage>
      }
    />
  );
}

export function IntegrationSection() {
  return (
    <SplitSection
      label="Integração"
      title="API, SDKs e webhooks para conectar tudo."
      description="Integre a sua plataforma com lojas e sistemas em poucas linhas de código."
      bullets={[
        "SDKs em JavaScript, PHP, Python e Java",
        "Webhooks de pagamento, estorno e chargeback",
        "Integração nativa com Shopify",
      ]}
      visual={
        <ScreenStage tone="accent">
          <ScreenFrame
            src={apiImg}
            alt="Tela de credenciais de API do painel"
            url="app.suamarca.com/api"
            className="w-[100%] max-w-none"
          />
          <ScreenFrame
            src={webhooksImg}
            alt="Tela de webhooks do painel"
            url="app.suamarca.com/webhooks"
            className="absolute bottom-0 right-0 w-[68%] translate-x-6 translate-y-6 sm:translate-x-10 sm:translate-y-10"
          />
        </ScreenStage>
      }
    />
  );
}

const securityItems = [
  {
    icon: Lock,
    title: "Acesso protegido",
    description: "Autenticação em dois fatores e login com Google.",
  },
  {
    icon: CheckIcon,
    title: "KYC integrado",
    description: "Verificação de pessoa física e jurídica.",
  },
  {
    icon: Persons,
    title: "Controle da equipe",
    description: "Cargos, permissões e trilha de auditoria.",
  },
  {
    icon: Cash,
    title: "Dados protegidos",
    description: "Dados de clientes criptografados, com recursos de LGPD.",
  },
];

export function SecuritySection() {
  return (
    <Section className="pb-20 md:pb-40">
      <Reveal className="flex flex-col items-center justify-center space-y-4 mb-10 mx-auto">
        <span className="font-semibold text-primary text-center">
          Segurança
        </span>
        <h2 className="font-bold text-[32px] md:text-[40px] max-w-[600px] text-center">
          Controle e proteção em cada etapa
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {securityItems.map(({ icon: Icon, title, description }, index) => (
          <Reveal key={title} delay={index * 0.1}>
            <Card className="h-full w-full gap-0 rounded-[40px] border-0 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <CardHeader className="flex flex-col gap-5 p-0">
                <figure className="flex size-12 items-center justify-center rounded-2xl bg-primary">
                  <Icon />
                </figure>
                <CardTitle className="text-base font-bold">{title}</CardTitle>
                <CardDescription className="text-base text-foreground">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
