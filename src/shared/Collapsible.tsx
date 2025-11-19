import { cn } from "@/utils";
import { ComponentProps, ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
}

export default function Collapsible({
  className,
  children,
  ...props
}: ChildrenProp & ComponentProps<"details">) {
  return (
    <details
      className={cn("[interpolate-size:allow-keywords]", className)}
      {...props}
    >
      {children}
    </details>
  );
}

export function CollapsibleTrigger({
  children,
  ...props
}: ChildrenProp & ComponentProps<"summary">) {
  return <summary {...props}>{children}</summary>;
}

export function CollapsibleContent({
  children,
  ...props
}: ChildrenProp & ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}
