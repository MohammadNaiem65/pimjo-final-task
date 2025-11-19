import { cn } from "@/utils";
import { ComponentProps } from "react";

export default function Button({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "rounded-full px-4.5 py-2.75 text-sm leading-5 font-medium hover:bg-gray-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
