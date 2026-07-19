import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 text-center sm:flex-row sm:text-left lg:px-8">
        <Link href="#" className="relative block h-8 w-32 opacity-80">
          <Image
            src="/images/logo.png"
            alt={SITE.name}
            fill
            className="object-contain object-left"
          />
        </Link>

        <p className="text-xs text-muted sm:text-sm">
          Tasarım{" "}
          <a
            href="https://www.3kareajans.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            {SITE.designer}
          </a>{" "}
          tarafından yapılmıştır. Tüm hakları saklıdır. {year}
        </p>
      </div>
    </footer>
  );
}
