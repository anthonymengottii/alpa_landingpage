import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Section({ children, className, ...rest }: SectionProps) {
  return (
    <section
      className={cn("max-w-7xl w-full mx-auto px-6 2xl:px-0", className)}
      {...rest}
    >
      {children}
    </section>
  );
}
