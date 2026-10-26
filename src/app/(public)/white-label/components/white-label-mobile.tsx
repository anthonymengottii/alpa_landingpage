"use client";

import {
  AlertCircle,
  Banknote,
  ChevronDown,
  ChevronRight,
  Copy,
  CreditCard,
  DollarSign,
  Eye,
  FileText,
  Gift,
  ImageIcon,
  KeyRound,
  Lightbulb,
  LayoutGrid,
  Link2,
  List,
  Package,
  PanelLeftOpen,
  Percent,
  Plug,
  Plus,
  QrCode,
  Receipt,
  Search,
  Share2,
  Store,
  Ticket,
  TrendingUp,
  Trophy,
  Users,
  Webhook,
  X,
} from "lucide-react";
import { type CSSProperties, type ReactNode, useState } from "react";
import {
  type BrandProps,
  BrandMark,
  type Theme,
  makeTheme,
  readableOn,
  textOnWhite,
  tint,
} from "./white-label-brand";

export const PHONE_SCREEN = { width: 290, height: 590 };

type Item = {
  id: string;
  label: string;
  icon: typeof LayoutGrid;
  /** Web-only items open an "unavailable in the app" alert, like the real drawer. */
  webOnly?: boolean;
};

const SECTIONS: { title: string; items: Item[] }[] = [
  { title: "Visão Geral", items: [{ id: "dashboard", label: "Dashboard", icon: LayoutGrid }] },
  {
    title: "Vendas e Recebimentos",
    items: [
      { id: "transactions", label: "Transações", icon: List },
      { id: "clients", label: "Clientes", icon: Users },
      { id: "products", label: "Produtos", icon: Package },
      { id: "checkout", label: "Checkout", icon: Store, webOnly: true },
      { id: "affiliates", label: "Afiliados", icon: Share2, webOnly: true },
      { id: "coupons", label: "Cupons", icon: Ticket },
      { id: "links", label: "Links de Pagamento", icon: Link2, webOnly: true },
      { id: "plans", label: "Planos de Assinatura", icon: Receipt, webOnly: true },
      { id: "withdraw", label: "Saque", icon: Banknote },
      { id: "rates", label: "Taxas", icon: Percent },
    ],
  },
  {
    title: "Marketing",
    items: [
      { id: "referral", label: "Indique e Ganhe", icon: Gift },
      { id: "integrations", label: "Integrações", icon: Plug },
      { id: "suggestions", label: "Sugestões", icon: Lightbulb },
    ],
  },
  {
    title: "Integrações",
    items: [
      { id: "api", label: "Credenciais de API", icon: KeyRound },
      { id: "webhooks", label: "Webhooks", icon: Webhook, webOnly: true },
      { id: "docs", label: "Documentação", icon: FileText, webOnly: true },
    ],
  },
];

function MTitle({ title, subtitle, theme }: { title: string; subtitle: string; theme: Theme }) {
  return (
    <>
      <h4
        className="text-[22px] font-semibold leading-[1.15] transition-colors duration-500"
        style={{ color: theme.dark }}
      >
        {title}
      </h4>
      <p className="mb-3 mt-1 text-[12px] leading-snug text-gray-500">{subtitle}</p>
    </>
  );
}

function MKpi({
  icon: Icon,
  label,
  value,
  cta,
  theme,
}: {
  icon: typeof DollarSign;
  label: string;
  value: string;
  cta?: string;
  theme: Theme;
}) {
  return (
    <div className="mb-3 rounded-2xl bg-white p-4 shadow-sm">
      <span className="mb-3 flex size-11 items-center justify-center rounded-lg border border-gray-300 text-gray-600">
        <Icon className="size-5" />
      </span>
      <p className="text-xs text-gray-500">{label}</p>
      <p
        className="text-[24px] font-bold leading-tight transition-colors duration-500"
        style={{ color: theme.dark }}
      >
        {value}
      </p>
      {cta && (
        <p
          className="mt-1 flex items-center gap-1 text-xs font-semibold transition-colors duration-500"
          style={{ color: theme.link }}
        >
          {cta} <ChevronRight className="size-3" />
        </p>
      )}
    </div>
  );
}

function MButton({ children, theme, className = "" }: { children: ReactNode; theme: Theme; className?: string }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-500 ${className}`}
      style={{ backgroundColor: theme.color, color: theme.fg }}
    >
      {children}
    </span>
  );
}

function Badge({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "amber" | "orange" }) {
  const tones = {
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
    orange: "bg-orange-100 text-orange-700",
  };
  return <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tones[tone]}`}>{children}</span>;
}

function Row({ left, sub, right, rightSub }: { left: ReactNode; sub?: string; right?: ReactNode; rightSub?: ReactNode }) {
  return (
    <div className="mb-2 flex items-center justify-between gap-2 rounded-xl bg-white p-3 shadow-sm">
      <div className="min-w-0">
        <p className="truncate text-[13px] font-semibold">{left}</p>
        {sub && <p className="truncate text-[11px] text-gray-500">{sub}</p>}
      </div>
      <div className="shrink-0 text-right">
        <p className="text-[13px] font-semibold">{right}</p>
        {rightSub}
      </div>
    </div>
  );
}

function Product({ name, price, theme }: { name: string; price: string; theme: Theme }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="flex h-16 items-center justify-center" style={{ backgroundColor: theme.tint }}>
        <ImageIcon className="size-6" style={{ color: theme.link }} />
      </div>
      <div className="p-2.5">
        <p className="truncate text-[10px] font-bold uppercase">{name}</p>
        <p className="mt-0.5 text-[13px] font-bold" style={{ color: theme.dark }}>
          {price}
        </p>
      </div>
    </div>
  );
}

function Screen({ id, theme, brand }: { id: string; theme: Theme; brand: string }) {
  switch (id) {
    case "transactions":
      return (
        <>
          <MTitle title="Transações" subtitle="Visualize e gerencie todas as suas transações." theme={theme} />
          <MKpi icon={Banknote} label="Total Pago" value="R$ 1.814,00" theme={theme} />
          <MKpi icon={TrendingUp} label="Ticket Médio (Pago)" value="R$ 453,50" theme={theme} />
          <Row left="Maria Silva" sub="Curso de Marketing · PIX" right="R$ 297,00" rightSub={<Badge>Pago</Badge>} />
          <Row left="Carlos Souza" sub="Mentoria em Vendas · Cartão" right="R$ 891,00" rightSub={<Badge>Pago</Badge>} />
          <Row left="Ana Paula" sub="Ebook Finanças · Boleto" right="R$ 199,00" rightSub={<Badge tone="amber">Pendente</Badge>} />
          <Row left="Rafael Costa" sub="Mentoria em Vendas · PIX" right="R$ 997,00" rightSub={<Badge tone="orange">Reembolso</Badge>} />
        </>
      );
    case "clients":
      return (
        <>
          <MTitle title="Clientes" subtitle="Gerencie sua base de clientes." theme={theme} />
          <MButton theme={theme} className="mb-3"><Plus className="size-3.5" /> Novo cliente</MButton>
          <Row left="Maria Silva" sub="maria.silva@exemplo.com" right="R$ 2.376,00" rightSub={<span className="text-[10px] text-gray-500">8 compras</span>} />
          <Row left="Carlos Souza" sub="carlos.souza@exemplo.com" right="R$ 4.455,00" rightSub={<span className="text-[10px] text-gray-500">5 compras</span>} />
          <Row left="João Mendes" sub="joao.mendes@exemplo.com" right="R$ 5.964,00" rightSub={<span className="text-[10px] text-gray-500">12 compras</span>} />
          <Row left="Beatriz Lima" sub="beatriz.lima@exemplo.com" right="R$ 258,00" rightSub={<span className="text-[10px] text-gray-500">2 compras</span>} />
        </>
      );
    case "products":
      return (
        <>
          <MTitle title="Seus Produtos" subtitle="Visualize e gerencie todos os seus produtos em um só lugar." theme={theme} />
          <MButton theme={theme} className="mb-3"><Plus className="size-3.5" /> Novo produto</MButton>
          <div className="grid grid-cols-2 gap-2.5">
            <Product name="Curso de Marketing" price="R$ 297,00" theme={theme} />
            <Product name="Mentoria em Vendas" price="R$ 997,00" theme={theme} />
            <Product name="Ebook Finanças" price="R$ 49,00" theme={theme} />
            <Product name="Kit Home Office" price="R$ 389,90" theme={theme} />
          </div>
        </>
      );
    case "coupons":
      return (
        <>
          <MTitle title="Cupons" subtitle="Gerencie seus cupons de desconto de forma centralizada." theme={theme} />
          <MKpi icon={Ticket} label="Cupons ativos nesta página" value="3" theme={theme} />
          <MButton theme={theme} className="mb-3"><Plus className="size-3.5" /> Criar novo cupom</MButton>
          <Row left="DESCONTO10" sub="10% · Percentual" right="84 usos" rightSub={<Badge>Ativo</Badge>} />
          <Row left="BEMVINDO" sub="R$ 20,00 · Valor fixo" right="31 usos" rightSub={<Badge>Ativo</Badge>} />
          <Row left="BLACK25" sub="25% · Percentual" right="13 usos" rightSub={<Badge>Ativo</Badge>} />
        </>
      );
    case "withdraw":
      return (
        <>
          <MTitle title="Saque e Extrato" subtitle="Acompanhe seus saldos e transferências." theme={theme} />
          <MKpi icon={Banknote} label="Disponível para saque" value="R$ 48.920,00" theme={theme} />
          <div className="mb-3 flex gap-2">
            <MButton theme={theme}>Antecipar</MButton>
            <MButton theme={theme}>Transferir</MButton>
          </div>
          <Row left={<span className="text-green-600">Venda aprovada · PIX</span>} sub="26 out." right={<span className="text-green-600">R$ 297,00</span>} />
          <Row left={<span className="text-green-600">Venda aprovada · cartão 3x</span>} sub="26 out." right={<span className="text-green-600">R$ 891,00</span>} />
          <Row left={<span className="text-red-600">Saque via PIX</span>} sub="25 out." right={<span className="text-red-600">- R$ 3.500,00</span>} />
        </>
      );
    case "rates":
      return (
        <>
          <MTitle title="Taxas e Pagamentos" subtitle="Suas taxas personalizadas." theme={theme} />
          <div className="mb-3 flex h-16 items-center rounded-xl px-4 text-sm font-extrabold uppercase transition-colors duration-500" style={{ backgroundColor: theme.color, color: theme.fg }}>
            Taxas e pagamentos
          </div>
          {[
            [QrCode, "PIX", "O PIX é o novo meio de pagamento instantâneo."],
            [CreditCard, "Cartão de Crédito", "Para ver as taxas por parcela, toque em ver parcelas."],
            [Receipt, "Boleto", "Boletos emitidos não são cobrados, apenas os pagos."],
          ].map(([Icon, n, d]) => {
            const I = Icon as typeof QrCode;
            return (
              <div key={n as string} className="mb-2 flex gap-3 rounded-xl bg-white p-3 shadow-sm">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: theme.tint, color: theme.link }}>
                  <I className="size-4" />
                </span>
                <span>
                  <p className="text-[13px] font-bold">{n as string}</p>
                  <p className="text-[11px] text-gray-500">{d as string}</p>
                </span>
              </div>
            );
          })}
        </>
      );
    case "referral":
      return (
        <>
          <MTitle title="Indique e Ganhe" subtitle="Convide novos clientes e acompanhe seus ganhos." theme={theme} />
          <div className="mb-3 rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-xs text-gray-500">Seu Código de Indicação</p>
            <div className="mt-2 flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2.5">
              <span className="text-sm font-bold tracking-wide">{brand.slice(0, 5).toUpperCase().replace(/\s/g, "")}-JOAO10</span>
              <Copy className="size-4 text-gray-500" />
            </div>
          </div>
          <MKpi icon={Gift} label="Ganhos totais" value="R$ 1.240,00" theme={theme} />
          <Row left="Ana Paula" sub="Comissão recorrente" right="R$ 38,40" />
          <Row left="Rafael Costa" sub="Recompensa fixa" right="R$ 10,00" />
        </>
      );
    case "integrations":
      return (
        <>
          <MTitle title="Integrações" subtitle="Benefícios exclusivos para potencializar sua operação" theme={theme} />
          {[
            ["Integração Shopify", `Conecte sua loja e use o ${brand} como checkout`],
            ["Integração Utmify", "Configure o rastreamento de vendas e campanhas"],
          ].map(([n, d]) => (
            <div key={n} className="mb-2.5 rounded-2xl bg-white p-4 shadow-sm">
              <span className="mb-2 flex size-10 items-center justify-center rounded-lg" style={{ backgroundColor: theme.tint, color: theme.link }}>
                <Plug className="size-5" />
              </span>
              <p className="text-sm font-bold">{n}</p>
              <p className="mt-0.5 text-[11px] text-gray-500">{d}</p>
              <MButton theme={theme} className="mt-3">Conectar</MButton>
            </div>
          ))}
        </>
      );
    case "suggestions":
      return (
        <>
          <MTitle title="Sugestões" subtitle="Veja as sugestões aprovadas da comunidade e envie a sua." theme={theme} />
          {[
            ["Exportar relatórios em PDF", "Em alta", "bg-orange-100 text-orange-700"],
            ["Modo escuro no painel", "Sugestão", "bg-blue-100 text-blue-700"],
            ["Notificações por WhatsApp", "Novo", "bg-green-100 text-green-700"],
          ].map(([n, t, c]) => (
            <div key={n} className="mb-2 rounded-xl bg-white p-3 shadow-sm">
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${c}`}>{t}</span>
              <p className="mt-1.5 text-[13px] font-semibold">{n}</p>
              <p className="mt-0.5 text-[11px] text-gray-500">Votada pela comunidade</p>
            </div>
          ))}
        </>
      );
    case "api":
      return (
        <>
          <MTitle title="Credenciais de API" subtitle="Gerencie suas chaves de API para integração com aplicações externas" theme={theme} />
          <MButton theme={theme} className="mb-3"><Plus className="size-3.5" /> Nova Credencial</MButton>
          {[
            ["Loja principal", "Integração do e-commerce"],
            ["App mobile", "Chave do aplicativo"],
          ].map(([n, d]) => (
            <div key={n} className="mb-2.5 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">{n}</p>
                <Badge>Ativa</Badge>
              </div>
              <p className="mt-0.5 text-[11px] text-gray-500">{d}</p>
              <p className="mt-2 rounded-lg bg-gray-100 px-3 py-2 font-mono text-[11px] text-gray-600">alpa_live_••••••••••••</p>
            </div>
          ))}
        </>
      );
    default:
      return null;
  }
}

function Dashboard({ theme }: { theme: Theme }) {
  const periods = ["Hoje", "Ontem", "Semana"];
  return (
    <>
      <MTitle title="Bem-vindo(a) de volta, João!" subtitle="Aqui está um resumo da sua conta hoje." theme={theme} />
      <MKpi icon={DollarSign} label="Receita Total" value="R$ 450.596,62" cta="Ver relatório" theme={theme} />
      <MKpi icon={CreditCard} label="Transações" value="3338" cta="Ver todas" theme={theme} />
      <MKpi icon={TrendingUp} label="Ticket Médio" value="R$ 134,99" theme={theme} />
      <div className="flex gap-2 text-[11px]">
        {periods.map((p, i) => (
          <span
            key={p}
            className="rounded-xl px-3.5 py-2 shadow-sm transition-colors duration-500"
            style={i === 2 ? { backgroundColor: theme.color, color: theme.fg } : { backgroundColor: "#fff", color: "#374151" }}
          >
            {p}
          </span>
        ))}
      </div>
    </>
  );
}

export function MobileAppScreen({ name, color, logoUrl }: BrandProps) {
  const theme = makeTheme(color);
  const brand = name || "Sua Marca";
  const [screen, setScreen] = useState("dashboard");
  const [drawer, setDrawer] = useState(false);
  const [alert, setAlert] = useState(false);

  function open(item: Item) {
    setDrawer(false);
    if (item.webOnly) {
      setTimeout(() => setAlert(true), 220);
      return;
    }
    setScreen(item.id);
  }

  return (
    <div
      className="relative overflow-hidden rounded-[46px] border-[7px] border-[#1c1410] bg-[#1c1410] shadow-2xl"
      style={
        {
          width: PHONE_SCREEN.width,
          height: PHONE_SCREEN.height,
          "--on": readableOn(color),
        } as CSSProperties
      }
    >
      <div className="absolute left-1/2 top-2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1c1410]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[38px] bg-gray-100 text-gray-900">
        <div className="bg-white px-5 pb-1 pt-3 text-[11px] font-semibold">
          <div className="flex items-center justify-between">
            <span>9:41</span>
            <span className="h-2.5 w-5 rounded-sm border border-gray-800" />
          </div>
        </div>

        <div className="flex h-12 items-center gap-3 bg-white px-4">
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setDrawer(true)}
            className="-m-2 flex cursor-pointer rounded-lg p-2 hover:bg-black/5"
          >
            <PanelLeftOpen className="size-5 text-gray-600" />
          </button>
          <span className="flex min-w-0 items-center gap-1.5">
            <span className="flex size-5 shrink-0 rounded-md">
              <BrandMark color={color} logoUrl={logoUrl} size="size-5" icon="size-2.5" />
            </span>
            <span className="max-w-[88px] truncate text-[11px] font-bold">{brand}</span>
          </span>
          <span className="flex-1" />
          <Trophy className="size-5 text-gray-600" />
          <Eye className="size-5 text-gray-600" />
        </div>

        <div
          key={screen}
          className="flex-1 overflow-y-auto px-4 pb-6 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {screen === "dashboard" ? <Dashboard theme={theme} /> : <Screen id={screen} theme={theme} brand={brand} />}
        </div>

        {/* Drawer */}
        <div
          className={`absolute inset-0 z-20 bg-black/45 transition-opacity duration-300 ${drawer ? "opacity-100" : "pointer-events-none opacity-0"}`}
          onClick={() => setDrawer(false)}
        />
        <aside
          aria-hidden={!drawer}
          className={`absolute bottom-0 left-0 top-0 z-30 flex w-[84%] flex-col bg-white shadow-2xl transition-transform duration-300 ${drawer ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex h-14 shrink-0 items-center justify-between px-4 pt-5">
            <span className="flex min-w-0 items-center gap-2">
              <span className="flex size-7 shrink-0 rounded-lg">
                <BrandMark color={color} logoUrl={logoUrl} size="size-7" icon="size-3.5" />
              </span>
              <span className="max-w-[110px] truncate text-sm font-extrabold uppercase" style={{ color: theme.dark }}>
                {brand}
              </span>
            </span>
            <button type="button" aria-label="Fechar menu" onClick={() => setDrawer(false)} className="cursor-pointer rounded-lg p-1.5 hover:bg-black/5">
              <X className="size-5 text-gray-500" />
            </button>
          </div>
          <div className="mx-4 border-b border-gray-200" />
          <div className="mx-4 my-3 flex h-9 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 text-xs text-gray-400">
            <Search className="size-3.5" /> Buscar...
          </div>
          <nav className="flex-1 overflow-y-auto px-3 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SECTIONS.map((section) => (
              <div key={section.title} className="mb-4">
                <p className="mb-1 px-2 text-[10px] font-bold uppercase tracking-wide text-gray-400">{section.title}</p>
                {section.items.map((item) => {
                  const active = screen === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => open(item)}
                      aria-current={active ? "page" : undefined}
                      className="flex h-9 w-full cursor-pointer items-center gap-2.5 rounded-lg px-2 text-start text-[13px] transition-colors hover:bg-gray-50"
                      style={active ? { backgroundColor: tint(color, 12), color: textOnWhite(color), fontWeight: 600 } : { color: "#374151", fontWeight: 500 }}
                    >
                      <Icon className="size-4" />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-2.5 border-t border-gray-200 p-3">
            <span className="flex size-8 items-center justify-center rounded-full text-[10px] font-bold" style={{ backgroundColor: color, color: readableOn(color) }}>
              JO
            </span>
            <span className="flex min-w-0 flex-1 flex-col leading-tight">
              <span className="text-xs font-medium">João Teste</span>
              <span className="truncate text-[10px] text-gray-500">joao@teste.com</span>
            </span>
            <ChevronDown className="size-4 text-gray-500" />
          </div>
        </aside>

        {/* "Unavailable in the app" alert, like the real drawer for web-only items */}
        {alert && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/45 px-8">
            <div role="alertdialog" className="w-full rounded-2xl bg-white p-4 text-center shadow-2xl">
              <AlertCircle className="mx-auto mb-2 size-6 text-gray-500" />
              <p className="text-sm font-bold">Indisponível no app</p>
              <p className="mt-1 text-[11px] text-gray-500">Esta funcionalidade está disponível na versão web.</p>
              <button
                type="button"
                onClick={() => setAlert(false)}
                className="mt-3 w-full cursor-pointer rounded-lg py-2 text-xs font-semibold transition-colors duration-500"
                style={{ backgroundColor: color, color: readableOn(color) }}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
