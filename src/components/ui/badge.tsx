import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "secondary" | "outline";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: Variant }) {
  const variants: Record<Variant, string> = {
    default: "bg-primary/20 text-foreground border border-primary/20",
    secondary: "bg-secondary/20 text-foreground border border-secondary/20",
    outline: "bg-transparent text-foreground border border-white/10",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
