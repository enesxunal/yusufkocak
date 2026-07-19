"use client";

import Image from "next/image";
import Link from "next/link";
import { LEGAL_PAGES } from "@/lib/legal-content";
import { SITE } from "@/lib/constants";

function openCookieSettings() {
  window.dispatchEvent(new Event("open-cookie-settings"));
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <Link href="/" className="relative block h-8 w-32 opacity-80">
            <Image
              src="/images/logo.png"
              alt={SITE.name}
              fill
              className="object-contain object-left"
            />
          </Link>

          <nav className="flex flex-col items-center gap-3 text-sm sm:items-end">
            <Link
              href={LEGAL_PAGES.privacy.path}
              className="text-muted transition hover:text-navy"
            >
              KVKK ve Gizlilik Politikası
            </Link>
            <Link
              href={LEGAL_PAGES.cookies.path}
              className="text-muted transition hover:text-navy"
            >
              Çerez Politikası
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-muted transition hover:text-navy"
            >
              Çerez tercihlerini yönet
            </button>
          </nav>
        </div>

        <p className="mt-8 text-center text-xs text-muted sm:text-sm">
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
