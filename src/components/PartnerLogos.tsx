import Image from "next/image";
import { PARTNERS } from "@/lib/constants";

type PartnerLogosProps = {
  compact?: boolean;
};

export default function PartnerLogos({ compact = false }: PartnerLogosProps) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3">
        {PARTNERS.map((partner) => (
          <a
            key={partner.href}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            title={partner.name}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/95 p-1.5 transition hover:bg-white hover:scale-105"
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
    <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 lg:justify-between">
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
