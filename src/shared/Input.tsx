import { cn } from "@/utils";
import { Search } from "lucide-react";

export default function Input({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-xl border border-(--color-border) py-2 pr-2.5 pl-4",
        className,
      )}
    >
      <Search className="mr-5 size-5 text-[#9CA3AF]" />

      <input type="text" placeholder="Quick search..." className="outline-0" />

      <span className="inline-flex items-center justify-start gap-0.5 rounded-lg border border-(--color-border) px-2 py-1.5 text-xs font-normal text-[#6B7280]">
        ⌘ K
      </span>
    </div>
  );
}
