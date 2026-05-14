import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground/70 font-normal leading-6",
        className,
      )}
    >
      {children}
    </p>
  );
}
