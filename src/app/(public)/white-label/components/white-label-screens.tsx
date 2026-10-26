"use client";

import {
  type BrandProps,
  BrandMark,
  type Theme,
  dark,
  readableOn,
  slugify,
  textOnWhite,
  tint,
} from "./white-label-brand";
import { MobileAppScreen, PHONE_SCREEN } from "./white-label-mobile";
import {
  AffiliatesPage,
  CheckoutsPage,
  ClientsPage,
  CouponsPage,
  LinksPage,
  PlansPage,
  ProductsPage,
  RatesPage,
  TransactionsPage,
  WithdrawPage,
} from "./white-label-pages";
import {
  Banknote,
  Calendar,
  ChevronDown,
  ChevronRight,
  CreditCard,
  DollarSign,
  Eye,
  LayoutGrid,
  Link2,
  List,
  Package,
  PanelLeftOpen,
  Percent,
  Receipt,
  Search,
  Share2,
  Store,
  Ticket,
  TrendingUp,
  Trophy,
  Users,
  X,
} from "lucide-react";
import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

/** Renders children at a fixed design size and scales them to fit the container width. */
export function ScaledFrame({
  width,
  height,
  children,
  maxScale = 1,
  minScale = 0,
}: {
  width: number;
  height: number;
  children: ReactNode;
  maxScale?: number;
  minScale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setScale(Math.max(minScale, Math.min(maxScale, el.clientWidth / width)));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width, maxScale, minScale]);

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <div style={{ height: height * scale, width: width * scale }}>
        <div
          style={{
            width,
            height,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}


function RevenueChart({ color, height }: { color: string; height: number }) {
  const vals = [
    8, 12.4, 9.8, 16.5, 14, 21, 18, 24, 22.5, 29, 11, 9.5, 15, 17.5, 13, 19.5,
    22, 18.5, 26, 21, 16, 14.5, 20.5, 23.5, 19, 27, 25.5, 21.5, 24.5, 28.5,
  ];
  const w = 640;
  const left = 46;
  const bottom = 22;
  const ph = height - bottom - 8;
  const pw = w - left - 8;
  const max = 30;
  const pts = vals.map((v, i) => [
    left + (i / (vals.length - 1)) * pw,
    8 + (1 - v / max) * ph,
  ]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const mx = (px + cx) / 2;
    d += ` C ${mx} ${py}, ${mx} ${cy}, ${cx} ${cy}`;
  }
  const id = `rc${color.replace(/[^a-z0-9]/gi, "")}`;
  const yTicks = ["30 mil", "22,5 mil", "15 mil", "7,5 mil", "0"];
  const xTicks = ["28/09", "02/10", "06/10", "10/10", "14/10", "18/10", "22/10", "26/10"];

  return (
    <svg
      viewBox={`0 0 ${w} ${height}`}
      className="w-full"
      style={{ height }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.45" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {yTicks.map((label, i) => {
        const y = 8 + (i / (yTicks.length - 1)) * ph;
        return (
          <g key={label}>
            <line x1={left} x2={w - 8} y1={y} y2={y} stroke="#E5E7EB" strokeDasharray="3 4" />
            <text x={left - 8} y={y + 3} textAnchor="end" fontSize="10" fill="#6B7280">
              {label}
            </text>
          </g>
        );
      })}
      {xTicks.map((label, i) => (
        <text
          key={label}
          x={left + (i / (xTicks.length - 1)) * pw}
          y={height - 6}
          textAnchor="middle"
          fontSize="10"
          fill="#6B7280"
        >
          {label}
        </text>
      ))}
      <path d={`${d} L ${pts[pts.length - 1][0]} ${8 + ph} L ${left} ${8 + ph} Z`} fill={`url(#${id})`} />
      <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" style={{ transition: "stroke 0.5s" }} />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.2" fill={color} stroke="#fff" strokeWidth="1.6" style={{ transition: "fill 0.5s" }} />
      ))}
    </svg>
  );
}

const navItems = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Transações", icon: List },
  { label: "Clientes", icon: Users },
  { label: "Produtos", icon: Package },
  { label: "Checkout", icon: Store },
  { label: "Afiliados", icon: Share2 },
  { label: "Cupons", icon: Ticket },
  { label: "Links de Pagamento", icon: Link2 },
  { label: "Planos de Assinatura", icon: Receipt },
  { label: "Saque", icon: Banknote },
  { label: "Taxas", icon: Percent },
];

export const WEB_SCREEN = { width: 1200, height: 720 };

export function WebDashboardScreen({
  name,
  color,
  logoUrl,
  bleedRight = false,
}: BrandProps & { bleedRight?: boolean }) {
  const darkColor = dark(color);
  const brand = name || "Sua Marca";
  const [page, setPage] = useState(0);
  const theme: Theme = {
    color,
    dark: darkColor,
    link: textOnWhite(color),
    fg: readableOn(color),
    tint: tint(color, 14),
  };
  const ActiveIcon = navItems[page].icon;
  const periods = ["Hoje", "Ontem", "Semana", "Outubro", "Últimos 30 dias"];
  const kpis = [
    { label: "Receita Total", value: "R$ 450.596,62", icon: DollarSign, cta: "Ver relatório" },
    { label: "Transações", value: "3338", icon: CreditCard, cta: "Ver todas" },
    { label: "Ticket Médio", value: "R$ 134,99", icon: TrendingUp, cta: "" },
  ];
  const installments = [100, 38, 26, 14, 10, 12, 8, 9];

  return (
    <div
      className={`flex overflow-hidden bg-white text-gray-900 ${
        bleedRight ? "rounded-l-[28px]" : "rounded-[28px] shadow-2xl"
      }`}
      style={
        {
          width: WEB_SCREEN.width,
          height: WEB_SCREEN.height,
          "--on": readableOn(color),
        } as CSSProperties
      }
    >
      <aside className="flex w-64 shrink-0 flex-col px-4 pb-4">
        <div className="flex h-16 items-center justify-between">
          <span className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-9 shrink-0 rounded-xl">
              <BrandMark color={color} logoUrl={logoUrl} size="size-9" icon="size-[18px]" />
            </span>
            <span className="max-w-[124px] truncate text-base font-extrabold uppercase" style={{ color: darkColor }}>
              {brand}
            </span>
          </span>
          <PanelLeftOpen className="size-5 text-gray-500" />
        </div>
        <div className="mb-3 flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-400">
          <Search className="size-4" />
          <span className="flex-1">Buscar...</span>
          <span className="rounded border border-gray-200 bg-white px-1.5 text-[10px]">⌘ F</span>
        </div>
        <nav className="flex flex-col gap-0.5">
          {navItems.map(({ label, icon: Icon }, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setPage(i)}
              aria-current={page === i ? "page" : undefined}
              className="flex h-[42px] cursor-pointer items-center gap-3 rounded-lg px-3 text-start text-[15px] transition-colors duration-300 hover:bg-gray-50"
              style={
                page === i
                  ? { backgroundColor: tint(color, 12), color: textOnWhite(color) }
                  : { color: "#374151" }
              }
            >
              <Icon className="size-5" />
              {label}
            </button>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-3 border-t border-gray-200 pt-3">
          <span
            className="flex size-9 items-center justify-center rounded-full text-[11px] font-bold transition-colors duration-500"
            style={{ backgroundColor: color, color: readableOn(color) }}
          >
            JO
          </span>
          <span className="flex min-w-0 flex-1 flex-col leading-tight">
            <span className="text-sm font-medium">João Teste</span>
            <span className="truncate text-[11px] text-gray-500">joao@teste.com</span>
          </span>
          <ChevronDown className="size-4 text-gray-500" />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between px-10 text-sm">
          <span className="flex items-center gap-2 font-medium">
            <ActiveIcon className="size-4" /> {navItems[page].label}
          </span>
          <div className="flex items-center gap-4">
            <span className="flex w-72 items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-xs text-gray-600">
              <Trophy className="size-3.5" />
              <span className="truncate">{brand} Rewards</span>
              <span className="h-1.5 flex-1 rounded-full bg-gray-200" />
              <span>0%</span>
            </span>
            <Eye className="size-5 text-gray-700" />
          </div>
        </header>

        <div className="mr-6 flex-1 overflow-hidden rounded-t-[40px] bg-gray-100 px-10 pt-9">
          {page === 0 && (
            <>
          <h3
            className="text-[30px] font-bold leading-tight transition-colors duration-500"
            style={{ color: darkColor }}
          >
            Bem-vindo(a) de volta, João!
          </h3>
          <p className="mb-5 text-[15px] text-gray-500">
            Aqui está um resumo da sua conta hoje.
          </p>

          <div className="grid grid-cols-3 gap-5">
            {kpis.map(({ label, value, icon: Icon, cta }) => (
              <div key={label} className="rounded-xl bg-white p-5 shadow-sm">
                <span className="mb-4 flex size-12 items-center justify-center rounded-lg border border-gray-300 text-gray-600">
                  <Icon className="size-5" />
                </span>
                <p className="text-sm text-gray-500">{label}</p>
                <p
                  className="text-[30px] font-bold leading-tight transition-colors duration-500"
                  style={{ color: darkColor }}
                >
                  {value}
                </p>
                <p
                  className="mt-1 flex h-5 items-center gap-1 text-sm font-bold transition-colors duration-500"
                  style={{ color: textOnWhite(color) }}
                >
                  {cta}
                  {cta && <ChevronRight className="size-3.5" />}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-2.5 whitespace-nowrap text-sm">
            {periods.map((p, i) => (
              <span
                key={p}
                className="rounded-xl px-5 py-3 shadow-sm transition-colors duration-500"
                style={
                  i === 4
                    ? { backgroundColor: color, color: readableOn(color) }
                    : { backgroundColor: "#fff", color: "#374151" }
                }
              >
                {p}
              </span>
            ))}
            <span
              className="flex items-center gap-2 rounded-xl px-5 py-3 shadow-sm transition-colors duration-500"
              style={{ backgroundColor: color, color: readableOn(color) }}
            >
              <Calendar className="size-4" /> 27/09/2026 - 26/10/2026
              <X className="ml-2 size-3.5" />
            </span>
          </div>

          <div className="mt-5 grid grid-cols-[2fr_1fr] gap-5">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-xl font-bold">Receita Total: R$ 450.596,62</p>
              <p className="mb-3 text-sm text-gray-500">Total de receita de 27/09 a 26/10</p>
              <RevenueChart color={color} height={200} />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-xl font-bold leading-tight">Distribuição de parcelas do cartão</p>
              <p className="mb-3 mt-1 text-sm text-gray-500">Total de transações de 27/09 a 26/10</p>
              <div className="flex h-[170px] items-end justify-between gap-2">
                {installments.map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t-md transition-colors duration-500"
                    style={{ height: `${h}%`, backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-[11px] text-gray-500">
                {["1x", "2x", "3x", "4x", "5x", "6x", "10x", "12x"].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </div>
            </>
          )}
          {page === 1 && <TransactionsPage theme={theme} />}
          {page === 2 && <ClientsPage theme={theme} />}
          {page === 3 && <ProductsPage theme={theme} />}
          {page === 4 && <CheckoutsPage theme={theme} />}
          {page === 5 && <AffiliatesPage theme={theme} />}
          {page === 6 && <CouponsPage theme={theme} />}
          {page === 7 && <LinksPage theme={theme} />}
          {page === 8 && <PlansPage theme={theme} />}
          {page === 9 && <WithdrawPage theme={theme} />}
          {page === 10 && <RatesPage theme={theme} />}
        </div>
      </div>
    </div>
  );
}

/**
 * Small-screen composition: the web dashboard enlarged and cropped, with the
 * mobile app overlapping its bottom-right corner.
 */
export function MobileComposite({ name, color, logoUrl }: BrandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(300);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Show ~55% of the dashboard width, so it renders larger than a fit-to-width view.
  const narrow = width < 460;
  const webScale = width / (WEB_SCREEN.width * (narrow ? 0.4 : 0.55));
  const phoneScale = Math.min(0.8, Math.max(0.42, (width * (narrow ? 0.4 : 0.48)) / PHONE_SCREEN.width));
  const webHeight = WEB_SCREEN.height * webScale;
  const phoneHeight = PHONE_SCREEN.height * phoneScale;
  const height = Math.max(webHeight * (narrow ? 0.66 : 0.82), phoneHeight) + 24;

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden rounded-l-[28px]"
      style={{ height }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: WEB_SCREEN.width, height: WEB_SCREEN.height, transform: `scale(${webScale})` }}
      >
        <WebDashboardScreen name={name} color={color} logoUrl={logoUrl} bleedRight />
      </div>
      <div
        className="absolute bottom-0 right-3 origin-bottom-right"
        style={{ width: PHONE_SCREEN.width, height: PHONE_SCREEN.height, transform: `scale(${phoneScale})` }}
      >
        <MobileAppScreen name={name} color={color} logoUrl={logoUrl} />
      </div>
    </div>
  );
}

export { MobileAppScreen, PHONE_SCREEN, slugify };
export { readableOn } from "./white-label-brand";
export type { BrandProps } from "./white-label-brand";
