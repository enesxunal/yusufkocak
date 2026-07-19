"use client";

import Link from "next/link";
import { LEGAL_PAGES } from "@/lib/legal-content";

function openCookieSettings() {
  window.dispatchEvent(new Event("open-cookie-settings"));
}

type LegalLinksProps = {
  align?: "left" | "center";
};

export default function LegalLinks({ align = "left" }: LegalLinksProps) {
  const alignClass =
    align === "center"
      ? "items-center justify-center"
      : "items-start justify-start";

  return (
    <nav
      className={`flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1 ${alignClass}`}
    >
      <Link
        href={LEGAL_PAGES.privacy.path}
        className="text-xs text-white/55 transition hover:text-white"
      >
        KVKK ve Gizlilik Politikası
      </Link>
      <Link
        href={LEGAL_PAGES.cookies.path}
        className="text-xs text-white/55 transition hover:text-white"
      >
        Çerez Politikası
      </Link>
      <button
        type="button"
        onClick={openCookieSettings}
        className="text-left text-xs text-white/55 transition hover:text-white"
      >
        Çerez tercihlerini yönet
      </button>
    </nav>
  );
}
