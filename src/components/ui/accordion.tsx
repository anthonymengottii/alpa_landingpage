"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  ChevronDownIcon,
  LucideIcon,
  LucideProps,
  Minus,
  Plus,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border border-border/30 data-[state=open]:bg-accent hover:bg-muted group transition-colors duration-300",
        className,
      )}
      {...props}
    />
  );
}

interface AccordionTriggerProps
  extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
  icon?: React.ReactNode;
  index?: string;
}

function AccordionTrigger({
  className,
  children,
  icon,
  index,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180  duration-300 text-foreground data-[state=open]:text-foreground-invert",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-6">
          {index && (
            <span className="flex items-center justify-center shrink-0 size-10 bg-primary text-sm font-bold rounded-full text-foreground">
              {index}
            </span>
          )}

          {children}
        </div>

        <div>
          <Plus className="stroke-primary size-8 group-data-[state=open]:hidden" />
          <Minus className="hidden stroke-icon group-data-[state=open]:flex" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
