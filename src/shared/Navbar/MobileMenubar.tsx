"use client";

import { cn } from "@/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Activity, useState } from "react";
import { NavItem } from "./Navbar";

interface SmNavLinksProps {
  items: NavItem[];
}

export default function MobileMenubar({ items }: SmNavLinksProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleOpenState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "visible relative flex items-center justify-center lg:invisible lg:hidden",
      )}
    >
      <button onClick={toggleOpenState} className="cursor-pointer">
        {isOpen ? <Menu className="size-8" /> : <X className="size-8" />}
      </button>

      <Activity mode={isOpen ? "visible" : "hidden"}>
        <div
          className={cn(
            "absolute top-12 right-0 min-w-62.5 rounded-xl border border-(--color-border) bg-white p-3 shadow-md",
          )}
        >
          <ul className="flex flex-col gap-y-2 py-2 pl-1.5">
            {items.map((item) => (
              <li key={item.id} className="text-lg text-[#1F2937]">
                <Link href={item?.href ?? "/"}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Activity>
    </div>
  );
}
