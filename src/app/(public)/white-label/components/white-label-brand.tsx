"use client";

import { LogoIcon } from "@/assets/svg/logo-icon";

/** Picks black or white text depending on the background luminance. */
export function readableOn(hex: string) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return "#ffffff";
  const n = Number.parseInt(m[1], 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.55 ? "#111111" : "#ffffff";
}

/** Brand color usable as text on white: darkens light colors so links stay readable. */
export function textOnWhite(color: string) {
  return readableOn(color) === "#111111" ? dark(color) : color;
}

/** Brand mark: the visitor's logo when provided, otherwise the Alpa icon on the brand color. */
export function BrandMark({
  color,
  logoUrl,
  size,
  icon,
}: {
  color: string;
  logoUrl?: string | null;
  size: string;
  icon: string;
}) {
  if (logoUrl) {
    return (
      // biome-ignore lint/performance/noImgElement: local object URL chosen by the visitor
      <img
        src={logoUrl}
        alt=""
        className={`${size} shrink-0 rounded-[inherit] bg-white object-contain ring-1 ring-black/5`}
      />
    );
  }
  return (
    <span
      className={`${size} flex shrink-0 items-center justify-center rounded-[inherit] transition-colors duration-500`}
      style={{ backgroundColor: color }}
    >
      <LogoIcon className={`${icon} [&_path]:fill-[var(--on)]`} />
    </span>
  );
}

export interface BrandProps {
  logoUrl?: string | null;
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

export const dark = (color: string) =>
  `color-mix(in oklab, ${color} 26%, #120a06)`;
export const tint = (color: string, pct: number) =>
  `color-mix(in srgb, ${color} ${pct}%, white)`;


/** Colors derived from the visitor's brand color. */
export interface Theme {
  color: string;
  dark: string;
  link: string;
  fg: string;
  tint: string;
}

export function makeTheme(color: string): Theme {
  return {
    color,
    dark: dark(color),
    link: textOnWhite(color),
    fg: readableOn(color),
    tint: tint(color, 14),
  };
}
