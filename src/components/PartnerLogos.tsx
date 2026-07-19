import Image from "next/image";
import { PARTNERS } from "@/lib/constants";

type PartnerLogosProps = {
  compact?: boolean;
  align?: "left" | "center";
};

export default function PartnerLogos({
  compact = false,
  align = "center",
}: PartnerLogosProps) {
  const alignClass =
    align === "left" ? "justify-start" : "justify-center";

  if (compact) {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${alignClass}`}>
        {PARTNERS.map((partner) => (
          <a
            key={partner.href}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            title={partner.name}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/95 p-1.5 transition hover:scale-105 hover:bg-white"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={201}
              height={201}
              className="h-full w-full object-contain"
            />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-center gap-5 sm:gap-6 ${alignClass} lg:justify-between`}
    >
      {PARTNERS.map((partner) => (
        <a
          key={partner.href}
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          title={partner.name}
          className="flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm transition hover:scale-[1.03] hover:shadow-md sm:h-[140px] sm:w-[140px] sm:p-4"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={201}
            height={201}
            className="h-full w-full object-contain"
          />
        </a>
      ))}
    </div>
  );
}
