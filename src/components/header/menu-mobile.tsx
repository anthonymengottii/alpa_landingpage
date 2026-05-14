"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from ".";

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useIsMobile(1024);

  useEffect(() => {
    setIsOpen(false);
  }, [isMobile]);

  return (
    <Sheet defaultOpen={false} open={isOpen} onOpenChange={setIsOpen} modal>
      <SheetTrigger asChild>
        <Button
          variant="default"
          className={cn(
            "flex flex-col gap-2.5 !p-0 h-max w-max bg-transparent hover:bg-transparent lg:hidden",
          )}
        >
          <span className="w-12 h-[2px] bg-primary" />
          <span className="w-12 h-[2px] bg-primary" />
          <span className="w-12 h-[2px] bg-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col pt-16 border-none px-4 pb-24">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <ul className="flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <li className="w-full" key={label} onClick={() => setIsOpen(false)}>
              <Link
                href={href}
                className="font-semibold text-lg w-full flex border-b border-[#363636] py-4"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center justify-end gap-4 w-full flex-1">
          <Link
            href="https://app.usealpa.com/login"
            className="flex items-center justify-center  gap-2 border-2 border-foreground rounded-full px-6 py-3 h-max hover:bg-primary transition-all duration-300 hover:border-primary w-full"
          >
            <span className="text-sm font-bold">Fazer login</span>
            <ArrowUpRight className="size-5 stroke-2 stroke-foreground" />
          </Link>
          <Link
            href="https://app.usealpa.com/register"
            className="flex items-center justify-center gap-2 border-background border-2 rounded-full px-6 py-3 h-max hover:bg-foreground hover:text-foreground-invert w-full bg-primary"
          >
            <span className="text-sm font-bold">Criar conta</span>
            <ArrowUpRight className="size-5 stroke-2 stroke-foreground" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
