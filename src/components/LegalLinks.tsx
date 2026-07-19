"use client";

import Link from "next/link";
import { LEGAL_PAGES } from "@/lib/legal-content";

function openCookieSettings() {
  window.dispatchEvent(new Event("open-cookie-settings"));
}

type LegalLinksProps = {
  align?: "left" | "center";
};

const linkClass =
  "text-sm text-white/60 transition hover:text-white underline-offset-4 hover:underline";

export default function LegalLinks({ align = "left" }: LegalLinksProps) {
  const alignClass =
    align === "center"
      ? "items-center justify-center text-center"
      : "items-start justify-start text-left";

  return (
    <nav className={`flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-1 ${alignClass}`}>
      <Link href={LEGAL_PAGES.privacy.path} className={linkClass}>
        KVKK ve Gizlilik Politikası
      </Link>
      <span className="hidden text-white/25 sm:inline" aria-hidden="true">
        ·
      </span>
      <Link href={LEGAL_PAGES.cookies.path} className={linkClass}>
        Çerez Politikası
      </Link>
      <span className="hidden text-white/25 sm:inline" aria-hidden="true">
        ·
      </span>
      <button type="button" onClick={openCookieSettings} className={linkClass}>
        Çerez tercihlerini yönet
      </button>
    </nav>
  );
}
