import Image from "next/image";
import Link from "next/link";
import Input from "./Input";

export default function LgScreenRightSideContent() {
  return (
    <div className="hidden items-center justify-between gap-x-6 lg:flex">
      <Input className="text-sm" />

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

        <Link
          href={"#"}
          className="cursor-pointer rounded-xl border-0 bg-gray-800 px-4.5 py-2.75 text-sm leading-5 font-medium text-white shadow-[0px_0px_0px_1px_rgba(17,24,39,1.00),0px_1.5px_3px_0px_rgba(31,31,31,0.08),0px_4px_4px_0px_rgba(31,31,31,0.07),0px_12px_6px_0px_rgba(31,31,31,0.04),0px_16px_8px_0px_rgba(31,31,31,0.01),inset_0px_1px_3px_0px_rgba(255,255,255,0.30)] outline-gray-800 hover:bg-gray-800/90 focus-visible:outline-2"
        >
          Pricing & FAQ
        </Link>
      </div>
    </div>
  );
}

function Icon({ iconSrc, iconAlt }: { iconSrc: string; iconAlt: string }) {
  return (
    <Link
      href={"#"}
      className="size-4.4 flex items-center justify-center rounded-[0.563rem] p-1.75 shadow-[0px_0px_0px_1px_rgba(229,231,235,1),0px_1px_1px_0.5px_rgba(51,51,51,0.04),0px_3px_3px_-1.5px_rgba(51,51,51,0.02),0px_6px_6px_-3px_rgba(51,51,51,0.04),0px_12px_12px_-6px_rgba(51,51,51,0.04),0px_24px_24px_-12px_rgba(51,51,51,0.04),0px_48px_48px_-24px_rgba(51,51,51,0.04),inset_0px_-1px_1px_-0.5px_rgba(51,51,51,0.06)] outline-(--color-border)"
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
