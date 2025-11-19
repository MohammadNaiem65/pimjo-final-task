import { cn } from "@/utils";

interface SeparatorProps {
  className?: string;
  orientation?: "vertical" | "horizontal";
}

export default function Separator({
  className,
  orientation = "horizontal",
}: SeparatorProps) {
  const orientationBasedStyle =
    orientation === "vertical" ? "h-full w-[1px]" : "w-full h-[1px]";

  return (
    <div
      className={cn(
        "my-2 bg-(--color-border)",
        orientationBasedStyle,
        className,
      )}
    />
  );
}
