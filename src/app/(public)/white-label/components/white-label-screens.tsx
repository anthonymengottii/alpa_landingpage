"use client";

import { LogoIcon } from "@/assets/svg/logo-icon";
import {
  ArrowRight,
  Banknote,
  Bell,
  Calendar,
  ChevronRight,
  CreditCard,
  DollarSign,
  Eye,
  LayoutGrid,
  Link2,
  List,
  Menu,
  Package,
  Percent,
  Receipt,
  Share2,
  Store,
  Ticket,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";

export interface BrandProps {
  name: string;
  color: string;
}

export function slugify(value: string) {
  return (
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]/g, "") || "suamarca"
  );
}

const dark = (color: string) =>
  `color-mix(in oklab, ${color} 45%, #0b0620)`;
const tint = (color: string, pct: number) =>
  `color-mix(in srgb, ${color} ${pct}%, white)`;

/** Renders children at a fixed design size and scales them to fit the container width. */
export function ScaledFrame({
  width,
  height,
  children,
  maxScale = 1,
}: {
  width: number;
  height: number;
  children: ReactNode;
  maxScale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setScale(Math.min(maxScale, el.clientWidth / width));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width, maxScale]);

  return (
    <div ref={ref} className="w-full">
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

function AreaChart({ color, height }: { color: string; height: number }) {
  const points = [
    [0, 0.72],
    [0.1, 0.55],
    [0.2, 0.62],
    [0.32, 0.38],
    [0.45, 0.5],
    [0.58, 0.3],
    [0.7, 0.42],
    [0.82, 0.2],
    [1, 0.12],
  ];
  const w = 600;
  const pts = points.map(([x, y]) => [x * w, y * height]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const mx = (px + cx) / 2;
    d += ` C ${mx} ${py}, ${mx} ${cy}, ${cx} ${cy}`;
  }
  const id = `g${color.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <svg
      viewBox={`0 0 ${w} ${height}`}
      preserveAspectRatio="none"
      className="w-full"
      style={{ height }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line
          key={g}
          x1="0"
          x2={w}
          y1={g * height}
          y2={g * height}
          stroke="#E5E7EB"
          strokeDasharray="4 4"
        />
      ))}
      <path d={`${d} L ${w} ${height} L 0 ${height} Z`} fill={`url(#${id})`} />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        style={{ transition: "stroke 0.5s" }}
      />
    </svg>
  );
}

const railIcons = [
  List,
  Users,
  Package,
  Store,
  Share2,
  Ticket,
  Link2,
  Receipt,
  Banknote,
  Percent,
];

export const WEB_SCREEN = { width: 1040, height: 640 };

export function WebDashboardScreen({ name, color }: BrandProps) {
  const darkColor = dark(color);
  const periods = ["Hoje", "Ontem", "Semana", "Outubro", "Últimos 30 dias"];
  const kpis = [
    { label: "Receita Total", value: "R$ 450.596,62", icon: DollarSign, cta: "Ver relatório" },
    { label: "Transações", value: "3.338", icon: CreditCard, cta: "Ver todas" },
    { label: "Ticket Médio", value: "R$ 134,99", icon: TrendingUp, cta: "" },
  ];

  return (
    <div
      className="flex overflow-hidden rounded-[28px] bg-white text-gray-900 shadow-2xl"
      style={{ width: WEB_SCREEN.width, height: WEB_SCREEN.height }}
    >
      <aside className="flex w-16 shrink-0 flex-col items-center gap-3 border-r border-gray-100 py-4">
        <span
          className="flex size-9 items-center justify-center rounded-xl transition-colors duration-500"
          style={{ backgroundColor: color }}
        >
          <LogoIcon className="size-4 [&_path]:fill-white" />
        </span>
        <span className="my-1 h-px w-8 bg-gray-200" />
        <span
          className="flex size-10 items-center justify-center rounded-xl transition-colors duration-500"
          style={{ backgroundColor: tint(color, 14), color }}
        >
          <LayoutGrid className="size-5" />
        </span>
        {railIcons.map((Icon, i) => (
          <span
            key={i}
            className="flex size-10 items-center justify-center text-gray-600"
          >
            <Icon className="size-5" />
          </span>
        ))}
        <span
          className="mt-auto flex size-9 items-center justify-center rounded-full text-[11px] font-bold text-white transition-colors duration-500"
          style={{ backgroundColor: color }}
        >
          JO
        </span>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between px-6 text-sm">
          <span className="flex items-center gap-2 font-medium">
            <LayoutGrid className="size-4" /> Dashboard
          </span>
          <div className="flex items-center gap-4">
            <span className="flex w-64 items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-xs text-gray-600">
              <Trophy className="size-3.5" />
              <span className="truncate">{name || "Sua Marca"} Rewards</span>
              <span className="h-1.5 flex-1 rounded-full bg-gray-200" />
              <span>0%</span>
            </span>
            <Eye className="size-5 text-gray-700" />
          </div>
        </header>

        <div className="flex-1 rounded-tl-[28px] bg-gray-100 px-8 pt-6">
          <h3
            className="text-[28px] font-semibold leading-tight transition-colors duration-500"
            style={{ color: darkColor }}
          >
            Bem-vindo de volta, João!
          </h3>
          <p className="mb-4 text-sm text-gray-500">
            Aqui está o resumo da sua conta hoje.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {kpis.map(({ label, value, icon: Icon, cta }) => (
              <div key={label} className="rounded-xl bg-white p-4">
                <span className="mb-3 flex size-10 items-center justify-center rounded-lg border border-gray-300 text-gray-600">
                  <Icon className="size-5" />
                </span>
                <p className="text-xs text-gray-500">{label}</p>
                <p
                  className="text-[26px] font-bold leading-tight transition-colors duration-500"
                  style={{ color: darkColor }}
                >
                  {value}
                </p>
                <p
                  className="flex h-4 items-center gap-1 text-xs font-semibold transition-colors duration-500"
                  style={{ color }}
                >
                  {cta}
                  {cta && <ChevronRight className="size-3" />}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2 text-xs">
            {periods.map((p, i) => (
              <span
                key={p}
                className="rounded-lg px-4 py-2 font-medium transition-colors duration-500"
                style={
                  i === 4
                    ? { backgroundColor: color, color: "#fff" }
                    : { backgroundColor: "#fff", color: "#374151" }
                }
              >
                {p}
              </span>
            ))}
            <span
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 font-medium text-white transition-colors duration-500"
              style={{ backgroundColor: color }}
            >
              <Calendar className="size-3.5" /> 26/09/2026 - 25/10/2026
            </span>
          </div>

          <div className="mt-4 grid grid-cols-[2fr_1fr] gap-4">
            <div className="rounded-xl bg-white p-4">
              <p className="text-sm font-bold">Receita Total: R$ 450.596,62</p>
              <p className="mb-2 text-[11px] text-gray-500">
                Receita total de 26/09 a 25/10
              </p>
              <AreaChart color={color} height={130} />
            </div>
            <div className="rounded-xl bg-white p-4">
              <p className="text-sm font-bold">Distribuição de parcelas</p>
              <p className="mb-3 text-[11px] text-gray-500">
                Transações de 26/09 a 25/10
              </p>
              <div className="flex h-[130px] items-end justify-between gap-1.5">
                {[88, 40, 28, 20, 14, 36, 10, 8].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t-md transition-colors duration-500"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i === 0 ? color : tint(color, 28),
                    }}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-[9px] text-gray-400">
                {["1x", "2x", "3x", "4x", "5x", "6x", "10x", "12x"].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const PHONE_SCREEN = { width: 290, height: 590 };

export function MobileAppScreen({ name, color }: BrandProps) {
  const darkColor = dark(color);

  return (
    <div
      className="relative overflow-hidden rounded-[46px] border-[7px] border-[#1c1410] bg-[#1c1410] shadow-2xl"
      style={{ width: PHONE_SCREEN.width, height: PHONE_SCREEN.height }}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1c1410]" />
      <div className="flex h-full flex-col overflow-hidden rounded-[38px] bg-gray-100 text-gray-900">
        <div className="flex items-center justify-between bg-white px-5 pb-2 pt-3 text-[11px] font-semibold">
          <span>9:41</span>
          <span className="h-2.5 w-5 rounded-sm border border-gray-800" />
        </div>

        <div className="flex items-center gap-3 bg-white px-4 pb-3">
          <Menu className="size-5" />
          <span className="flex items-center gap-1.5 text-xs font-bold">
            <span
              className="flex size-5 items-center justify-center rounded-md transition-colors duration-500"
              style={{ backgroundColor: color }}
            >
              <LogoIcon className="size-2.5 [&_path]:fill-white" />
            </span>
            <span className="max-w-[90px] truncate">{name || "Sua Marca"}</span>
          </span>
          <span className="flex-1" />
          <Bell className="size-4 text-gray-600" />
          <Eye className="size-4 text-gray-600" />
        </div>

        <div className="flex-1 overflow-hidden px-4 pt-4">
          <h4
            className="text-[22px] font-semibold leading-[1.15] transition-colors duration-500"
            style={{ color: darkColor }}
          >
            Bem-vindo(a) de volta, João!
          </h4>
          <p className="mb-3 mt-1 text-xs text-gray-500">
            Aqui está o resumo da sua conta hoje.
          </p>

          <div className="mb-3 rounded-2xl bg-white p-4">
            <span className="mb-3 flex size-10 items-center justify-center rounded-lg border border-gray-300 text-gray-600">
              <DollarSign className="size-5" />
            </span>
            <p className="text-xs text-gray-500">Receita Total</p>
            <p
              className="text-[26px] font-bold leading-tight transition-colors duration-500"
              style={{ color: darkColor }}
            >
              R$ 450.596,62
            </p>
            <p
              className="mt-1 flex items-center gap-1 text-xs font-semibold transition-colors duration-500"
              style={{ color }}
            >
              Ver relatório <ArrowRight className="size-3" />
            </p>
          </div>

          <div className="mb-3 flex gap-2 text-[11px]">
            {["Hoje", "Semana", "Outubro"].map((p, i) => (
              <span
                key={p}
                className="rounded-xl px-3.5 py-2 font-medium transition-colors duration-500"
                style={
                  i === 1
                    ? { backgroundColor: color, color: "#fff" }
                    : { backgroundColor: "#fff", color: "#374151" }
                }
              >
                {p}
              </span>
            ))}
          </div>

          <div className="rounded-2xl bg-white p-3">
            <p className="text-xs font-bold">Receita Total</p>
            <AreaChart color={color} height={90} />
          </div>
        </div>
      </div>
    </div>
  );
}
