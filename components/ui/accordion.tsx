"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

function Accordion(
  props: React.ComponentProps<typeof AccordionPrimitive.Root>,
) {
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
        "overflow-hidden rounded-[1.6rem] border border-(--border) bg-(--surface)",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-(--foreground) transition hover:text-(--primary) sm:text-lg",
          className,
        )}
        {...props}
      >
        {children}
        <span className="text-2xl leading-none text-(--primary)">+</span>
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
      className={cn(
        "overflow-hidden border-t border-(--border) px-6 text-base leading-7 text-(--muted) data-[state=closed]:animate-[accordion-up_0.2s_ease-out] data-[state=open]:animate-[accordion-down_0.2s_ease-out]",
        className,
      )}
      {...props}
    >
      <div className="py-5">{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
