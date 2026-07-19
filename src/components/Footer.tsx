import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link href="/" className="relative block h-8 w-32 shrink-0 opacity-80">
          <Image
            src="/images/logo.png"
            alt={SITE.name}
            fill
            className="object-contain object-left"
          />
        </Link>

        <p className="text-right text-xs leading-relaxed text-muted sm:text-sm">
          Tasarım{" "}
          <a
            href="https://www.3kareajans.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/70 underline-offset-2 hover:text-navy hover:underline"
          >
            {SITE.designer}
          </a>{" "}
          tarafından yapılmıştır.
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          Tüm hakları saklıdır. {year}
        </p>
      </div>
    </footer>
  );
}
