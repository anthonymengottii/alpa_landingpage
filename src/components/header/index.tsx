"use client";
import { Logo } from "@/assets/svg/logo";
import { useNavbarStore } from "@/store/navbar.store";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { MenuMobile } from "./menu-mobile";

export const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Benefícios",
    href: "/#beneficios",
  },
  {
    label: "Recursos",
    href: "/#recursos",
  },
  {
    label: "Taxas",
    href: "/#taxas",
  },
] as const;

export function Header() {
  const pathname = usePathname();
  const { linkActive, setLinkActive } = useNavbarStore();

  useEffect(() => {
    const find = links.find((link) => link.href === pathname);

    if (find) {
      setLinkActive(find?.label);
      return;
    }

    setLinkActive(links[0].label);
  }, [pathname, setLinkActive]);

  return (
    <header className="absolute top-12 left-0 right-0 flex items-center justify-between max-w-7xl mx-auto pt-8 w-full px-5 z-50">
      <div className="flex items-center gap-24 flex-1">
        <Link href="/">
          <Logo />
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map(({ href, label }) => (
            <li
              key={label}
              className="relative text-base font-normal "
              onClick={() => {
                setLinkActive(label);
              }}
            >
              <Link href={href}>{label}</Link>

              {label === linkActive && (
                <motion.span
                  className="absolute top-8 left-0  h-1 bg-primary"
                  animate={{
                    width: label === linkActive ? "100%" : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <Link
          href="https://app.usealpa.com/login"
          className="flex items-center gap-2 border-2 border-foreground rounded-full px-6 py-3 h-max w-max hover:bg-foreground transition-all duration-300 group"
        >
          <span className="text-sm font-bold group-hover:text-foreground-invert transition-all duration-300 ">
            Fazer login
          </span>
          <ArrowUpRight className="size-5 stroke-2 stroke-icon group-hover:stroke-primary" />
        </Link>
        <Link
          href="https://app.usealpa.com/register"
          className="flex items-center gap-2 border-background border-2 rounded-full px-6 py-3 h-max w-max bg-background hover:bg-primary group transition-all duration-300 hover:border-primary"
        >
          <span className="text-sm font-bold">Criar conta</span>
          <ArrowUpRight className="size-5 stroke-2 stroke-primary group-hover:stroke-icon transition-all duration-300 " />
        </Link>
      </div>

      <MenuMobile />
    </header>
  );
}
