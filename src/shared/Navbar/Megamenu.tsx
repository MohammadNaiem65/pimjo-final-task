"use client";

import { cn } from "@/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ComponentProps, useEffect, useRef } from "react";
import Button from "../Button";
import { ColumnItem } from "./Navbar";

interface MegaMenuProps {
  label: string;
  items: ColumnItem[];
}

export default function Megamenu({ label, items }: MegaMenuProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    if (contentRef.current?.dataset.state === "close") {
      contentRef.current.dataset.state = "open";
    }
  };

  const closeMenu = () => {
    if (contentRef.current?.dataset.state === "open") {
      contentRef.current.dataset.state = "close";
    }
  };

  const toggleMenu = () => {
    if (contentRef.current?.dataset.state === "close") {
      openMenu();
    } else {
      closeMenu();
    }
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !triggerRef.current?.contains(target) &&
        !contentRef.current?.contains(target)
      ) {
        closeMenu();
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div className="relative">
      <MegamenuTrigger
        ref={triggerRef}
        className="peer flex items-center justify-center gap-x-0.5 text-text hover:bg-gray-secondary [&:has(+[data-state=open])]:bg-gray-secondary [&:has(+[data-state=open])]:text-text-title [&:has(+[data-state=open])_svg]:rotate-180"
        handleToggle={toggleMenu}
      >
        {label} <ChevronDown className="size-3.5 text-[#6B7280]" />
      </MegamenuTrigger>

      <MegamenuContent
        className="left-1/5 mt-[21.5px] rounded-[1.25rem] bg-white shadow-lg"
        ref={contentRef}
      >
        <ul className="grid grid-cols-2 gap-x-2 p-2 *:border-(--color-border) [&>*:nth-child(odd)]:border-r [&>*:nth-child(odd)]:pr-2">
          {items.map((item) => (
            <ListItem key={item.title} item={item} />
          ))}
        </ul>
      </MegamenuContent>
    </div>
  );
}

function ListItem({ item }: { item: ColumnItem }) {
  return (
    <li>
      <Link
        href={item.href}
        className="group flex h-full w-full flex-row items-start justify-between gap-x-3 rounded-xl p-4 outline-(--color-border) hover:bg-gray-100 focus-visible:bg-gray-100"
      >
        <Image
          src={`/icons/${item.icon}.svg`}
          alt={item.title}
          width={24}
          height={24}
        />
        <div className="flex flex-col gap-y-1">
          <span className="text-base font-medium text-text-title group-hover:text-gray-800">
            {item.title}
          </span>
          <p className="text-sm leading-snug text-text-secondary group-hover:text-gray-500">
            {item.description}
          </p>
        </div>
      </Link>
    </li>
  );
}

function MegamenuTrigger({
  children,
  className,
  handleToggle,
  ...props
}: {
  children: React.ReactNode;
  className?: string | undefined;
  handleToggle: () => void;
} & ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        className,
        "cursor-pointer rounded-lg px-2 py-1.5 text-sm outline-(--color-border) duration-300 focus-visible:bg-gray-secondary focus-visible:text-text-title",
      )}
      onClick={handleToggle}
      {...props}
    >
      {children}
    </Button>
  );
}

function MegamenuContent({
  ref,
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      ref={ref}
      data-state="close"
      className={cn(
        "absolute top-full right-0 hidden min-h-20 w-172 border border-(--color-border) data-[state=open]:block",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
