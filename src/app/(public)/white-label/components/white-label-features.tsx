"use client";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import {
  Check,
  CreditCard,
  Lock,
  Plug,
  Rocket,
  ShoppingCart,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const categories = [
  {
    id: "pagamentos",
    icon: CreditCard,
    label: "Pagamentos",
    items: [
      "PIX com QR code, cartão de crédito/débito e boleto com vencimento configurável",
      "Parcelamento em até 12x, com taxa por parcela e mínimo de R$ 5,00",
      "Liberação automática de cartão: à vista após 30 dias ou uma parcela a cada 30 dias",
      "Multiadquirência com prioridade configurável",
      "Split de pagamentos entre plataforma e lojistas",
      "Idempotência e retentativas automáticas em falhas",
    ],
  },
  {
    id: "checkout",
    icon: ShoppingCart,
    label: "Checkout e vendas",
    items: [
      "Links de pagamento com slug próprio e controle de estoque",
      "Checkout Builder: escolha variantes de layout para dados, endereço, resumo, pagamento e prova social",
      "Order bump, upsell e downsell",
      "Cupons de desconto percentuais ou de valor fixo, com limites e validade",
      "Recuperação de carrinho abandonado",
      "Produtos digitais e físicos",
    ],
  },
  {
    id: "crescimento",
    icon: Rocket,
    label: "Crescimento",
    items: [
      "Marketplace de afiliados com comissão percentual ou fixa e link rastreável",
      "Comissões creditadas automaticamente após a confirmação do pagamento",
      "Programa Indique e Ganhe, com recompensa fixa ou comissão recorrente",
      "Programa de recompensas por faturamento, com níveis configuráveis",
      "Assinaturas recorrentes com trial, pausa, retomada e métricas de MRR e churn",
      "Meta Pixel, UTMs e integração com Utmify",
    ],
  },
  {
    id: "financeiro",
    icon: Wallet,
    label: "Financeiro",
    items: [
      "Carteira digital com histórico de movimentações",
      "Saques via PIX com chave validada contra o cadastro do usuário",
      "Confirmação por código (OTP) enviado por e-mail em saques e transferências",
      "Antecipação de recebíveis",
      "Limites de transação e de saque diário, globais ou por empresa",
      "Dashboard com receita, ticket médio, taxa de aprovação e exportação CSV/Excel",
    ],
  },
  {
    id: "seguranca",
    icon: Lock,
    label: "Segurança",
    items: [
      "Autenticação em dois fatores (TOTP) e login com Google",
      "KYC para pessoa física e jurídica, com bloqueio de recursos até a aprovação",
      "Gestão e revogação de sessões ativas",
      "Chaves de API com escopos, limite de requisições e registro de uso",
      "Dados pessoais de clientes criptografados e recursos de LGPD",
      "Trilha de auditoria das ações administrativas",
    ],
  },
  {
    id: "integracoes",
    icon: Plug,
    label: "Integrações",
    items: [
      "API REST com documentação interativa (Swagger/OpenAPI)",
      "SDKs oficiais em JavaScript, PHP, Python e Java",
      "Webhooks para eventos como pagamento aprovado, recusado, estornado e chargeback",
      "Integração com Shopify: produtos sincronizados e links gerados para pedidos pagos",
      "E-mails transacionais com a sua marca e comprovante em PDF",
      "App mobile Android para acompanhar vendas e solicitar saques",
    ],
  },
];

export function WhiteLabelFeatures() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <Section className="pb-20 md:pb-40" id="recursos">
      <Reveal className="flex flex-col items-center gap-4 mb-10 text-center">
        <span className="font-bold text-primary">Plataforma completa</span>
        <h2 className="font-bold text-[32px] md:text-[40px] max-w-[640px] leading-tight">
          Tudo o que a sua operação precisa, em um só lugar
        </h2>
      </Reveal>

      <Reveal className="flex flex-wrap justify-center gap-2 mb-8" role="tablist">
        {categories.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active === id}
            onClick={() => setActive(id)}
            className={`flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
              active === id
                ? "bg-primary"
                : "bg-card hover:bg-accent hover:text-foreground-invert"
            }`}
          >
            <Icon className="size-4" />
            {label}
          </button>
        ))}
      </Reveal>

      <ul
        key={current.id}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500"
      >
        {current.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4 rounded-[32px] bg-card p-6 text-base border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >
            <span className="flex shrink-0 items-center justify-center size-7 rounded-full bg-primary">
              <Check className="size-4 stroke-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
