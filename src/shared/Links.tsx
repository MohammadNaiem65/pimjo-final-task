import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Input from "./Input";

export default function Links() {
  return (
    <div className="hidden items-center justify-between gap-x-6 lg:flex">
      <Input />

      <div className="flex items-center justify-center gap-x-2">
        <Icon iconSrc="/tweeter.svg" iconAlt="tweeter" />
        <Icon iconSrc="/github.svg" iconAlt="github" />
        <Icon iconSrc="/discord.svg" iconAlt="discord" />
      </div>

      <div className="space-x-4">
        <Link
          href={"#"}
          className="text-sm leading-5 font-medium hover:text-gray-500"
        >
          Sign In
        </Link>

        <Button className="cursor-pointer rounded-xl bg-gray-800 text-white hover:bg-gray-800/90">
          Pricing & FAQ
        </Button>
      </div>
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
        height={18}
        width={18}
        className="size-4.5"
      />
    </Link>
  );
}
