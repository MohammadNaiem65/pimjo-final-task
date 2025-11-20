import logo from "@/../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import LgScreenRightSideContent from "./LgScreenRightSideContent";
import Megamenu from "./Megamenu";
import MobileMenubar from "./MobileMenubar";
import SearchDialog from "./SearchDialog";

// Base interface without type property
interface BaseNavItem {
  id: string;
  label: string;
}

// Interface for regular nav items (without type or type !== "mega")j
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
    <header className="bg-white text-[#374151] [--color-border:#EDEDED]">
      <div className="invisible mx-auto hidden h-5 w-[1391px] border-x border-(--color-border) lg:visible lg:block" />

      <div className="border-y border-(--color-border)">
        <div className="mx-auto flex w-full items-center justify-between border-x border-(--color-border) px-8 py-5 lg:w-[1391px]">
          {/* Left Side */}
          <div className="flex items-center justify-between gap-x-11">
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={110} height={44} />
            </Link>

            {/* Megamenu for larger devices */}
            <nav className="hidden items-center justify-between lg:flex">
              <ul className="flex items-center justify-between gap-x-2">
                {menu.map((item: NavItem) =>
                  item.type === "mega" ? (
                    <li key={item.id}>
                      <Megamenu label={item.label} items={item.columns} />
                    </li>
                  ) : (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="cursor-pointer rounded-md px-2 py-1.5 text-sm font-medium text-text outline-(--color-border) hover:bg-gray-secondary hover:text-text-title focus-visible:bg-gray-secondary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>

          {/* Right Side */}
          {/* Larger devices only */}
          <LgScreenRightSideContent />

          {/* Smaller devices only */}
          <div className="flex items-center lg:hidden">
            <SearchDialog />
            <MobileMenubar items={menu} />
          </div>
        </div>
      </div>
    </header>
  );
}
