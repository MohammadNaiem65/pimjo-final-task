"use client";

import { cn } from "@/utils";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Activity, useEffect, useRef, useState } from "react";
import Collapsible, {
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import Separator from "../Separator";
import { NavItem } from "./Navbar";

interface SmNavLinksProps {
  items: NavItem[];
}

export default function MobileMenubar({ items }: SmNavLinksProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleOpenState = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !triggerRef.current?.contains(target) &&
        !contentRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div className={cn("relative flex items-center justify-center")}>
      <button
        ref={triggerRef}
        onClick={toggleOpenState}
        className="cursor-pointer"
      >
        {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
      </button>

      <Activity mode={isOpen ? "visible" : "hidden"}>
        <div
          ref={contentRef}
          className={cn(
            "absolute top-12 right-0 min-w-62.5 rounded-xl border border-(--color-border) bg-white p-3 shadow-md",
          )}
        >
          <ul className="flex flex-col gap-y-2 py-2">
            {items.map((item) =>
              item.type === "mega" ? (
                <li key={item.id} className="text-lg text-[#1F2937]">
                  <Collapsible className="group details-content:h-0 details-content:overflow-hidden details-content:transition-all details-content:transition-discrete details-content:duration-1000 [&[open]::details-content]:h-auto">
                    <CollapsibleTrigger className="flex list-outside items-center gap-0.5">
                      <span className="transition-transform group-open:rotate-90">
                        <ChevronRight />
                      </span>
                      {item.label}
                    </CollapsibleTrigger>

                    <CollapsibleContent className="ml-9 py-1">
                      <ul className="space-y-1">
                        {item.columns.map((subItem) => (
                          <li
                            key={subItem.href}
                            className="text-base text-gray-500/80"
                          >
                            <Link href={subItem.href}>{subItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </li>
              ) : (
                <li key={item.id} className="ml-6 text-lg text-[#1F2937]">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ),
            )}
          </ul>
          <Separator />
          <div className="mt-4 flex items-center justify-start gap-x-2">
            <Icon iconSrc="/tweeter.svg" iconAlt="tweeter" />
            <Icon iconSrc="/github.svg" iconAlt="github" />
            <Icon iconSrc="/discord.svg" iconAlt="discord" />
          </div>
        </div>
      </Activity>
    </div>
  );
}

function Icon({ iconSrc, iconAlt }: { iconSrc: string; iconAlt: string }) {
  return (
    <Link
      href={"#"}
      className="size-4.4 flex items-center justify-center rounded-[0.563rem] border border-(--color-border) p-1.75"
    >
      <Image
        src={`/icons${iconSrc}`}
        alt={iconAlt}
        height={24}
        width={24}
        className="size-6"
      />
    </Link>
  );
}
