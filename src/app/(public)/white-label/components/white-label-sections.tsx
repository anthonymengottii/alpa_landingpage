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
import { CircleDollarSign, Percent, ShoppingBag, Tag } from "lucide-react";
import { Pill, SplitSection, Stage } from "./white-label-split";

export function CheckoutSection() {
  return (
    <SplitSection
      id="checkout"
      label="Checkout"
      title="Um checkout com a sua cara, pronto para converter."
      description="Monte o layout de cada link de pagamento e aumente o ticket médio com ofertas na hora da compra."
      bullets={[
        "Layout configurável por bloco",
        "Order bump, upsell e cupons",
        "Recuperação de carrinho abandonado",
      ]}
      visual={
        <Stage>
          <Pill className="flex flex-col gap-4 p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary">
                  <ShoppingBag className="size-5 stroke-white" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold">Curso de Marketing</span>
                  <span className="text-xs text-accent">Acesso vitalício</span>
                </div>
              </div>
              <span className="text-lg font-bold">R$ 297,00</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
              <span className="rounded-2xl bg-primary py-3 text-white">PIX</span>
              <span className="rounded-2xl bg-foreground-invert/10 py-3">
                Cartão
              </span>
              <span className="rounded-2xl bg-foreground-invert/10 py-3">
                Boleto
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-dashed border-primary/50 px-4 py-3 text-xs font-semibold">
              <span className="flex items-center gap-2">
                <Tag className="size-4 stroke-primary" /> Cupom DESC10
              </span>
              <span className="text-primary">- R$ 29,70</span>
            </div>

            <span className="rounded-full bg-foreground-invert py-3.5 text-center text-sm font-bold text-foreground">
              Pagar com PIX
            </span>
          </Pill>

          <Pill className="ml-auto flex w-[78%] items-center gap-3 py-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary">
              <CheckIcon />
            </span>
            <span className="text-xs font-semibold leading-tight">
              Oferta adicionada: E-book por R$ 19,90
            </span>
          </Pill>
        </Stage>
      }
    />
  );
}

export function GrowthSection() {
  const rows = [
    ["Curso de Marketing Digital", "30%"],
    ["Ebook Finanças Pessoais", "R$ 15,00"],
    ["Mentoria em Vendas", "25%"],
  ];

  return (
    <SplitSection
      direction="right"
      label="Crescimento"
      title="Afiliados e recorrência para escalar as vendas."
      description="Ferramentas para vender mais e fidelizar, sem montar tudo do zero."
      bullets={[
        "Marketplace de afiliados com comissão automática",
        "Assinaturas com trial e métricas de MRR",
        "Indique e Ganhe e programa de recompensas",
      ]}
      visual={
        <Stage tone="accent">
          <Pill className="flex flex-col gap-3 p-5">
            <span className="text-sm font-bold">Marketplace de afiliados</span>
            {rows.map(([product, commission]) => (
              <div
                key={product}
                className="flex items-center justify-between rounded-2xl bg-foreground-invert/5 px-4 py-3"
              >
                <span className="text-xs font-semibold">{product}</span>
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-white">
                  {commission}
                </span>
              </div>
            ))}
          </Pill>

          <div className="grid grid-cols-2 gap-4">
            <Pill className="flex flex-col gap-1 p-4">
              <span className="text-[11px] text-accent">MRR</span>
              <span className="text-xl font-bold">R$ 12.480</span>
              <span className="text-[11px] font-semibold text-primary">
                churn 2,1%
              </span>
            </Pill>
            <Pill className="flex items-center gap-3 p-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary">
                <Percent className="size-4 stroke-white" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] text-accent">Comissão</span>
                <span className="text-sm font-bold">+ R$ 89,10</span>
              </span>
            </Pill>
          </div>
        </Stage>
      }
    />
  );
}

export function FinanceSection() {
  return (
    <SplitSection
      label="Financeiro"
      title="Saldo, saques e antecipação sob controle."
      description="Carteira digital com confirmação de segurança em cada movimentação."
      bullets={[
        "Saques via PIX com confirmação por código",
        "Antecipação de recebíveis",
        "Limites por empresa",
      ]}
      visual={
        <Stage>
          <Pill className="flex flex-col gap-4 p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs text-accent">Saldo disponível</span>
              <span className="flex size-9 items-center justify-center rounded-full bg-primary">
                <CircleDollarSign className="size-5 stroke-white" />
              </span>
            </div>
            <span className="text-3xl font-bold">R$ 48.920,00</span>
            <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold">
              <span className="rounded-full bg-primary py-3 text-white">
                Sacar
              </span>
              <span className="rounded-full bg-foreground-invert/10 py-3">
                Antecipar
              </span>
            </div>
          </Pill>

          <Pill className="flex flex-col gap-3 p-5">
            <span className="text-xs font-semibold">
              Código de confirmação enviado por e-mail
            </span>
            <div className="flex gap-2">
              {["4", "8", "1", "7", "", ""].map((digit, i) => (
                <span
                  key={i}
                  className="flex h-11 flex-1 items-center justify-center rounded-xl bg-foreground-invert/10 text-base font-bold"
                >
                  {digit}
                </span>
              ))}
            </div>
          </Pill>
        </Stage>
      }
    />
  );
}

const codeLines = [
  ["const ", "tx", " = await alpa.transactions.create({"],
  ["  product: ", "'Curso Node.js'", ","],
  ["  amountCents: ", "19900", ","],
  ["  paymentMethod: ", "'PIX'", ","],
  ["  clientEmail: ", "'joao@exemplo.com'", ","],
  ["});", "", ""],
];

export function IntegrationSection() {
  const events = ["payment.paid", "payment.failed", "payment.refunded"];

  return (
    <SplitSection
      direction="right"
      label="Integração"
      title="API, SDKs e webhooks para conectar tudo."
      description="Integre a sua plataforma com lojas e sistemas em poucas linhas de código."
      bullets={[
        "SDKs em JavaScript, PHP, Python e Java",
        "Webhooks de pagamento, estorno e chargeback",
        "Integração nativa com Shopify",
      ]}
      visual={
        <div aria-hidden="true" className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-[32px] bg-card">
            <div className="flex items-center gap-2 border-b border-border/20 px-5 py-3">
              <span className="size-2.5 rounded-full bg-primary" />
              <span className="size-2.5 rounded-full bg-accent" />
              <span className="size-2.5 rounded-full bg-foreground/30" />
              <span className="ml-2 text-xs text-foreground/60">
                alpa-js · criar cobrança
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
              {codeLines.map(([a, b, c], i) => (
                <div key={i}>
                  <span className="text-foreground/60">{a}</span>
                  <span className="text-primary">{b}</span>
                  <span className="text-foreground/60">{c}</span>
                </div>
              ))}
            </pre>
          </div>

          <div className="flex flex-wrap gap-2">
            {events.map((event) => (
              <span
                key={event}
                className="flex items-center gap-2 rounded-full bg-card px-4 py-2 font-mono text-xs"
              >
                <span className="size-2 rounded-full bg-primary" />
                {event}
              </span>
            ))}
          </div>
        </div>
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
