import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Links from "../Links";
import Megamenu from "./Megamenu";

// Base interface without type property
interface BaseNavItem {
  id: string;
  label: string;
}

// Interface for regular nav items (without type or type !== "mega")
export interface RegularNavItem extends BaseNavItem {
  type?: never;
  href: string;
  columns?: never;
}

// Interface for mega menu items
export interface MegamenuItem extends BaseNavItem {
  type: "mega";
  href?: never;
  columns: ColumnItem[];
}

// Combined type
export type NavItem = RegularNavItem | MegamenuItem;

export interface ColumnItem {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default async function Navbar() {
  const res = await fetch(
    "https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  const menu: NavItem[] = await res.json();

  return (
    <nav className="bg-white text-[#374151] [--color-border:#EDEDED]">
      <div className="mx-auto h-5 w-[1391px] border-x border-(--color-border)" />

      <div className="border-y border-(--color-border)">
        <div className="mx-auto flex w-[1391px] items-center justify-between border-x border-(--color-border) px-8 py-5">
          <div className="flex items-center justify-between gap-x-11">
            <Image src="/logo.png" alt="logo" width={110} height={44} />

            <div className="flex items-center justify-between gap-x-2">
              {menu.map((item: NavItem) =>
                item.type === "mega" ? (
                  <Megamenu
                    key={item.id}
                    label={item.label}
                    items={item.columns}
                  />
                ) : (
                  <Link href={item.href} key={item.id}>
                    <Button className="cursor-pointer rounded-md px-2 py-1.5 text-sm hover:text-[#374151]">
                      {item.label}
                    </Button>
                  </Link>
                ),
              )}
            </div>
          </div>

          <Links />
        </div>
      </div>
    </nav>
  );
}
