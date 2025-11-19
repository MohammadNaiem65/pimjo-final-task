"use client";

import { cn } from "@/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ComponentProps, useRef } from "react";
import Button from "../Button";
import { ColumnItem } from "./Navbar";

interface MegaMenuProps {
  label: string;
  items: ColumnItem[];
}

type ContentState = "open" | "close";

export default function Megamenu({ label, items }: MegaMenuProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const content = contentRef.current;
    if (!content) return;

    const currentState =
      (content.dataset.state as ContentState | undefined) ?? "close";
    const nextState: ContentState = currentState === "open" ? "close" : "open";

    content.dataset.state = nextState;
  };

  return (
    <div className="relative">
      <MegamenuTrigger
        className="peer flex items-center justify-center gap-x-0.5 hover:bg-gray-100 [&:has(+[data-state=open])]:bg-gray-100 [&:has(+[data-state=open])]:text-[#1F2937] [&:has(+[data-state=open])_svg]:rotate-180"
        handleToggle={handleToggle}
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
        className="flex flex-row items-start justify-between gap-x-3 rounded-xl p-4 hover:bg-gray-100"
      >
        <Image
          src={`/icons/${item.icon}.svg`}
          alt={item.title}
          width={24}
          height={24}
        />
        <div className="flex flex-col gap-y-1">
          <span className="text-base font-medium text-[#374151]">
            {item.title}
          </span>
          <p className="text-sm leading-snug text-[#6B7280]">
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
}: {
  children: React.ReactNode;
  className?: string | undefined;
  handleToggle: () => void;
}) {
  return (
    <Button
      className={cn(className, "cursor-pointer rounded-lg px-2 py-1.5 text-sm")}
      onClick={handleToggle}
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
