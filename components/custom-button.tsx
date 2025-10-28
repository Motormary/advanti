"use client";

import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        className,
        'px-4 py-3 rounded-xs text-white bg-secondary hover:bg-secondary/80 transition-colors"',
      )}
    >
      {children}
    </button>
  );
}
