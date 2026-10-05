import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { Button, buttonVariants } from "../ui/button";

type CtaButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

export function CtaButton({
  children,
  className,
  href,
  target,
  variant,
  ...rest
}: CtaButtonProps & VariantProps<typeof buttonVariants>) {
  return (
    <Link href={href || "/"} className={cn("w-max")} target={target}>
      <Button
        className={cn(
          buttonVariants({ variant, className }),
          "h-max !px-6 py-4 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]",
          className,
        )}
        {...rest}
      >
        {children}
      </Button>
    </Link>
  );
}
