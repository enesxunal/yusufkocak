import Image from "next/image";
import { PARTNERS } from "@/lib/constants";

export default function PartnerLogos() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {PARTNERS.map((partner) => (
        <a
          key={partner.href}
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          title={partner.name}
          className="flex h-24 items-center justify-center rounded-xl bg-white/95 p-4 transition hover:bg-white hover:shadow-md"
        >
          {partner.logo.endsWith(".svg") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-16 max-w-full object-contain"
            />
          ) : (
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              className="max-h-16 w-auto object-contain"
            />
          )}
        </a>
      ))}
    </div>
  );
}
