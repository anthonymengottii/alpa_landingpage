"use client";

import {
  Banknote,
  CreditCard,
  Download,
  ImageIcon,
  Link2,
  Plus,
  QrCode,
  Receipt,
  Search,
  Store,
  Ticket,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import type { ReactNode } from "react";

/** Colors derived from the visitor's brand color, computed once by the screen. */
export interface Theme {
  color: string;
  dark: string;
  link: string;
  fg: string;
  tint: string;
}

export function PageTitle({
  title,
  subtitle,
  theme,
}: {
  title: string;
  subtitle: string;
  theme: Theme;
}) {
  return (
    <>
      <h3
        className="text-[30px] font-bold leading-tight transition-colors duration-500"
        style={{ color: theme.dark }}
      >
        {title}
      </h3>
      <p className="mb-5 text-[15px] text-gray-500">{subtitle}</p>
    </>
  );
}

function Kpi({
  icon: Icon,
  label,
  value,
  theme,
}: {
  icon: typeof Wallet;
  label: string;
  value: string;
  theme: Theme;
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <span className="mb-3 flex size-12 items-center justify-center rounded-lg border border-gray-300 text-gray-600">
        <Icon className="size-5" />
      </span>
      <p className="text-sm text-gray-500">{label}</p>
      <p
        className="text-[28px] font-bold leading-tight transition-colors duration-500"
        style={{ color: theme.dark }}
      >
        {value}
      </p>
    </div>
  );
}

function Button({ children, theme, outline }: { children: ReactNode; theme: Theme; outline?: boolean }) {
  return (
    <span
      className="inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-500"
      style={
        outline
          ? { color: theme.link, border: `1px solid ${theme.color}`, backgroundColor: "#fff" }
          : { backgroundColor: theme.color, color: theme.fg }
      }
    >
      {children}
    </span>
  );
}

function Select({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm">
      {children} <span className="ml-2 text-gray-400">⌄</span>
    </span>
  );
}

const badgeStyles = {
  Pago: "bg-green-100 text-green-700",
  Pendente: "bg-amber-100 text-amber-700",
  Reembolso: "bg-orange-100 text-orange-700",
  Ativo: "bg-green-100 text-green-700",
  Ativa: "bg-green-100 text-green-700",
} as const;

function Badge({ kind }: { kind: keyof typeof badgeStyles }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeStyles[kind]}`}>
      {kind}
    </span>
  );
}

function Table({
  head,
  rows,
  cols,
}: {
  head: string[];
  rows: ReactNode[][];
  cols: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div
        className="grid gap-3 border-b border-gray-100 px-5 py-3 text-xs text-gray-500"
        style={{ gridTemplateColumns: cols }}
      >
        {head.map((h) => (
          <span key={h}>{h}</span>
        ))}
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid items-center gap-3 border-b border-gray-50 px-5 py-3 text-sm last:border-0"
          style={{ gridTemplateColumns: cols }}
        >
          {row.map((cell, j) => (
            <span key={j} className="truncate">
              {cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function Avatar({ name, theme }: { name: string; theme: Theme }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors duration-500"
        style={{ backgroundColor: theme.tint, color: theme.link }}
      >
        {initials}
      </span>
      {name}
    </span>
  );
}

function ProductCard({
  name,
  price,
  note,
  theme,
}: {
  name: string;
  price: string;
  note: string;
  theme: Theme;
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div
        className="flex h-24 items-center justify-center transition-colors duration-500"
        style={{ backgroundColor: theme.tint }}
      >
        <ImageIcon className="size-8" style={{ color: theme.link }} />
      </div>
      <div className="p-3.5">
        <p className="truncate text-[11px] font-bold uppercase text-gray-800">{name}</p>
        <p className="mt-1 text-xs text-gray-500">{note}</p>
        <p
          className="mt-1.5 text-base font-bold transition-colors duration-500"
          style={{ color: theme.dark }}
        >
          {price}
        </p>
      </div>
    </div>
  );
}

export function TransactionsPage({ theme }: { theme: Theme }) {
  const rows: [string, string, string, "Pago" | "Pendente" | "Reembolso", string, string][] = [
    ["Maria Silva", "PIX", "R$ 297,00", "Pago", "Curso de Marketing", "26/10 às 02:48"],
    ["Carlos Souza", "Cartão", "R$ 891,00", "Pago", "Mentoria em Vendas", "25/10 às 19:36"],
    ["Ana Paula", "Boleto", "R$ 199,00", "Pendente", "Ebook Finanças", "25/10 às 12:24"],
    ["João Mendes", "PIX", "R$ 497,00", "Pago", "Treinamento Tráfego", "25/10 às 05:12"],
    ["Beatriz Lima", "Cartão", "R$ 129,00", "Pago", "Assinatura Premium", "24/10 às 22:00"],
  ];
  return (
    <>
      <PageTitle title="Transações" subtitle="Visualize e gerencie todas as suas transações." theme={theme} />
      <div className="mb-4 grid grid-cols-2 gap-5">
        <Kpi icon={Banknote} label="Total Pago" value="R$ 1.814,00" theme={theme} />
        <Kpi icon={TrendingUp} label="Ticket Médio (Pago)" value="R$ 453,50" theme={theme} />
      </div>
      <div className="mb-3 flex items-center gap-3">
        <Select>Todos Status</Select>
        <Select>Todos Métodos</Select>
        <span className="flex-1" />
        <Button theme={theme} outline>
          <Download className="size-4" /> Exportar CSV
        </Button>
      </div>
      <Table
        cols="1.6fr 0.8fr 1fr 0.9fr 1.4fr 1.1fr"
        head={["Cliente", "Método", "Valor (líquido)", "Status", "Produto", "Data"]}
        rows={rows.map(([n, m, v, s, p, d]) => [
          <Avatar key="a" name={n} theme={theme} />,
          m,
          v,
          <Badge key="b" kind={s} />,
          p,
          d,
        ])}
      />
    </>
  );
}

export function ClientsPage({ theme }: { theme: Theme }) {
  const rows = [
    ["Maria Silva", "maria.silva@exemplo.com", "(11) 98877-1020", "8", "R$ 2.376,00"],
    ["Carlos Souza", "carlos.souza@exemplo.com", "(21) 97766-3041", "5", "R$ 4.455,00"],
    ["Ana Paula", "ana.paula@exemplo.com", "(31) 99654-2210", "3", "R$ 597,00"],
    ["João Mendes", "joao.mendes@exemplo.com", "(41) 98123-4455", "12", "R$ 5.964,00"],
    ["Beatriz Lima", "beatriz.lima@exemplo.com", "(51) 99710-8832", "2", "R$ 258,00"],
    ["Rafael Costa", "rafael.costa@exemplo.com", "(61) 98899-7766", "6", "R$ 1.782,00"],
  ];
  return (
    <>
      <PageTitle title="Clientes" subtitle="Gerencie sua base de clientes." theme={theme} />
      <div className="mb-3 flex items-center gap-3">
        <Button theme={theme}>
          <Plus className="size-4" /> Novo cliente
        </Button>
        <span className="flex-1" />
        <span className="flex w-64 items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-sm text-gray-400 shadow-sm">
          <Search className="size-4" /> Buscar clientes...
        </span>
      </div>
      <Table
        cols="1.5fr 1.8fr 1.2fr 0.6fr 1fr"
        head={["Nome", "E-mail", "Telefone", "Compras", "Total gasto"]}
        rows={rows.map(([n, e, t, c, v]) => [<Avatar key="a" name={n} theme={theme} />, e, t, c, v])}
      />
    </>
  );
}

export function ProductsPage({ theme }: { theme: Theme }) {
  const items = [
    ["Curso de Marketing Digital", "R$ 297,00", "Digital · Ativo"],
    ["Mentoria em Vendas", "R$ 997,00", "Digital · Ativo"],
    ["Ebook Finanças Pessoais", "R$ 49,00", "Digital · Ativo"],
    ["Kit Home Office", "R$ 389,90", "Físico · 24 em estoque"],
  ];
  return (
    <>
      <PageTitle title="Seus Produtos" subtitle="Visualize e gerencie todos os seus produtos em um só lugar." theme={theme} />
      <div className="mb-4 flex items-center gap-3">
        <Button theme={theme}>
          <Plus className="size-4" /> Novo produto
        </Button>
        <span className="flex-1" />
        <Select>Todos Tipos</Select>
        <Select>Todos Status</Select>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {items.map(([n, p, note]) => (
          <ProductCard key={n} name={n} price={p} note={note} theme={theme} />
        ))}
      </div>
    </>
  );
}

export function CheckoutsPage({ theme }: { theme: Theme }) {
  const items = [
    ["Checkout Padrão", "PIX, Cartão e Boleto", "6 produtos"],
    ["Checkout Premium", "Cartão em até 12x", "2 produtos"],
    ["Checkout Infoprodutos", "PIX e Cartão", "4 produtos"],
  ];
  return (
    <>
      <PageTitle
        title="Checkouts"
        subtitle="Crie versões de checkout (métodos de pagamento, cupons, aparência) e vincule aos produtos."
        theme={theme}
      />
      <div className="mb-4">
        <Button theme={theme}>
          <Plus className="size-4" /> Criar checkout
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {items.map(([n, m, p]) => (
          <div key={n} className="rounded-xl bg-white p-5 shadow-sm">
            <span
              className="mb-4 flex size-12 items-center justify-center rounded-lg transition-colors duration-500"
              style={{ backgroundColor: theme.tint, color: theme.link }}
            >
              <Store className="size-5" />
            </span>
            <p className="text-base font-bold">{n}</p>
            <p className="mt-1 text-sm text-gray-500">{m}</p>
            <p className="mt-3 text-xs font-semibold" style={{ color: theme.link }}>
              {p}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export function AffiliatesPage({ theme }: { theme: Theme }) {
  const tabs = ["Marketplace", "Sou Anunciante", "Meus Links", "Comissões"];
  const items = [
    ["Curso de Marketing Digital", "Escola Digital", "R$ 89,10"],
    ["Ebook Finanças Pessoais", "Studio Finanças", "R$ 15,00"],
    ["Mentoria em Vendas", "Vendas Pro", "R$ 249,25"],
    ["Treinamento de Tráfego Pago", "Tráfego Lab", "R$ 198,80"],
  ];
  return (
    <>
      <PageTitle
        title="Afiliados"
        subtitle="Promova produtos de outros vendedores e receba comissões automáticas no seu saldo."
        theme={theme}
      />
      <div className="mb-4 flex gap-6 rounded-xl bg-white px-5 text-sm shadow-sm">
        {tabs.map((t, i) => (
          <span
            key={t}
            className="border-b-2 py-3.5 font-medium transition-colors duration-500"
            style={i === 0 ? { borderColor: theme.color, color: theme.link } : { borderColor: "transparent", color: "#6B7280" }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {items.map(([n, by, c]) => (
          <ProductCard key={n} name={n} price={c} note={`Por ${by} · Receba até`} theme={theme} />
        ))}
      </div>
    </>
  );
}

export function CouponsPage({ theme }: { theme: Theme }) {
  const rows: [string, string, string, string, string, "Ativo"][] = [
    ["DESCONTO10", "10%", "Percentual", "84", "Até 31/12", "Ativo"],
    ["BEMVINDO", "R$ 20,00", "Valor fixo", "31", "Até 30/11", "Ativo"],
    ["BLACK25", "25%", "Percentual", "13", "Até 29/11", "Ativo"],
  ];
  return (
    <>
      <PageTitle title="Cupons" subtitle="Gerencie seus cupons de desconto de forma centralizada." theme={theme} />
      <div className="mb-4 grid grid-cols-2 gap-5">
        <Kpi icon={Ticket} label="Cupons ativos nesta página" value="3" theme={theme} />
        <Kpi icon={Receipt} label="Usos nesta página" value="128" theme={theme} />
      </div>
      <div className="mb-3">
        <Button theme={theme}>
          <Plus className="size-4" /> Criar novo cupom
        </Button>
      </div>
      <Table
        cols="1.3fr 0.9fr 1fr 0.7fr 1fr 0.8fr"
        head={["Código", "Desconto", "Tipo", "Usos", "Validade", "Status"]}
        rows={rows.map(([c, d, t, u, v, s]) => [
          <span key="c" className="font-semibold">{c}</span>,
          d,
          t,
          u,
          v,
          <Badge key="b" kind={s} />,
        ])}
      />
    </>
  );
}

export function LinksPage({ theme }: { theme: Theme }) {
  const rows: [string, string, string, "Ativo"][] = [
    ["Curso de Marketing", "R$ 297,00", "132 vendas", "Ativo"],
    ["Mentoria em Vendas", "R$ 997,00", "41 vendas", "Ativo"],
    ["Ebook Finanças", "R$ 49,00", "287 vendas", "Ativo"],
    ["Assinatura Premium", "R$ 99,00", "76 vendas", "Ativo"],
  ];
  return (
    <>
      <PageTitle
        title="Links de Pagamento"
        subtitle="Crie e gerencie links para cobrar seus clientes de forma simples."
        theme={theme}
      />
      <div className="mb-4 grid grid-cols-2 gap-5">
        <Kpi icon={Wallet} label="Total recebido por links" value="R$ 38.420,00" theme={theme} />
        <Kpi icon={Link2} label="Links ativos" value="12" theme={theme} />
      </div>
      <div className="mb-3">
        <Button theme={theme}>
          <Plus className="size-4" /> Criar novo link
        </Button>
      </div>
      <Table
        cols="1.7fr 1fr 1fr 0.8fr"
        head={["Link", "Valor", "Vendas", "Status"]}
        rows={rows.map(([n, v, s, st]) => [n, v, s, <Badge key="b" kind={st} />])}
      />
    </>
  );
}

export function PlansPage({ theme }: { theme: Theme }) {
  const plans = [
    ["Básico", "R$ 49,00", "98 assinantes"],
    ["Pro", "R$ 99,00", "86 assinantes"],
    ["Premium", "R$ 199,00", "30 assinantes"],
  ];
  return (
    <>
      <PageTitle
        title="Planos de Assinatura"
        subtitle="Crie e gerencie planos recorrentes para cobrar seus clientes automaticamente."
        theme={theme}
      />
      <div className="mb-4 grid grid-cols-2 gap-5">
        <Kpi icon={TrendingUp} label="MRR" value="R$ 12.480,00" theme={theme} />
        <Kpi icon={Users} label="Assinantes ativos" value="214" theme={theme} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {plans.map(([n, p, s]) => (
          <div key={n} className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-base font-bold">{n}</p>
            <p className="mt-2 text-[26px] font-bold transition-colors duration-500" style={{ color: theme.dark }}>
              {p}
              <span className="text-sm font-normal text-gray-500"> /mês</span>
            </p>
            <p className="mt-2 text-sm text-gray-500">{s}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export function WithdrawPage({ theme }: { theme: Theme }) {
  const rows = [
    ["Venda aprovada · PIX", "R$ 297,00", "R$ 0,00", "R$ 297,00"],
    ["Venda aprovada · cartão 3x", "R$ 891,00", "R$ 0,00", "R$ 891,00"],
    ["Saque via PIX", "R$ 0,00", "R$ 3.500,00", "- R$ 3.500,00"],
    ["Comissão de afiliado", "R$ 89,10", "R$ 0,00", "R$ 89,10"],
  ];
  return (
    <>
      <PageTitle title="Saque e Extrato" subtitle="Acompanhe seus saldos e transferências." theme={theme} />
      <div className="mb-4 grid grid-cols-3 gap-5">
        <Kpi icon={Wallet} label="Disponível para saque" value="R$ 48.920,00" theme={theme} />
        <Kpi icon={TrendingUp} label="Aguardando antecipação" value="R$ 3.200,00" theme={theme} />
        <Kpi icon={Banknote} label="Reserva financeira" value="R$ 1.500,00" theme={theme} />
      </div>
      <div className="mb-3 flex gap-3">
        <Button theme={theme}>
          <Plus className="size-4" /> Criar antecipação
        </Button>
        <Button theme={theme}>
          <Banknote className="size-4" /> Criar transferência
        </Button>
      </div>
      <Table
        cols="2fr 1fr 1fr 1fr"
        head={["Tipo / Motivo", "Entradas", "Saídas", "Valor"]}
        rows={rows.map(([m, e, s, v]) => [
          <span key="m" className={v.startsWith("-") ? "text-red-600" : "text-green-600"}>{m}</span>,
          e,
          s,
          <span key="v" className={v.startsWith("-") ? "text-red-600" : "text-green-600"}>{v}</span>,
        ])}
      />
    </>
  );
}

export function RatesPage({ theme }: { theme: Theme }) {
  const items = [
    [QrCode, "PIX", "O PIX é o novo meio de pagamento instantâneo da plataforma."],
    [CreditCard, "Cartão de Crédito", "Para ver as taxas por parcela, clique em ver parcelas."],
    [Receipt, "Boleto", "Boletos emitidos não são cobrados, apenas os pagos."],
  ] as const;
  return (
    <>
      <PageTitle title="Taxas e Pagamentos" subtitle="Suas taxas personalizadas." theme={theme} />
      <div
        className="mb-5 flex h-28 items-center rounded-xl px-8 text-2xl font-extrabold uppercase transition-colors duration-500"
        style={{ backgroundColor: theme.color, color: theme.fg }}
      >
        Taxas e pagamentos
      </div>
      <p className="mb-3 text-lg font-bold" style={{ color: theme.dark }}>
        Meios de pagamento
      </p>
      <div className="grid grid-cols-3 gap-4">
        {items.map(([Icon, n, d]) => (
          <div key={n} className="rounded-xl bg-white p-5 shadow-sm">
            <span
              className="mb-3 flex size-10 items-center justify-center rounded-lg transition-colors duration-500"
              style={{ backgroundColor: theme.tint, color: theme.link }}
            >
              <Icon className="size-5" />
            </span>
            <p className="text-base font-bold">{n}</p>
            <p className="mt-1 text-sm text-gray-500">{d}</p>
          </div>
        ))}
      </div>
    </>
  );
}
