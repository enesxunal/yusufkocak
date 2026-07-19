"use client";

import Link from "next/link";
import { LEGAL_PAGES } from "@/lib/legal-content";
import PartnerLogos from "./PartnerLogos";

function openCookieSettings() {
  window.dispatchEvent(new Event("open-cookie-settings"));
}

export default function NavyFooter() {
  return (
    <div className="border-t border-white/10 bg-navy py-8 text-white">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Önemli bağlantılar
        </p>
        <div className="mt-4">
          <PartnerLogos compact />
        </div>

        <nav className="mt-6 flex flex-col items-center gap-2 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
          <Link
            href={LEGAL_PAGES.privacy.path}
            className="text-xs text-white/55 transition hover:text-white"
          >
            KVKK ve Gizlilik Politikası
          </Link>
          <span className="hidden text-white/20 sm:inline" aria-hidden="true">
            |
          </span>
          <Link
            href={LEGAL_PAGES.cookies.path}
            className="text-xs text-white/55 transition hover:text-white"
          >
            Çerez Politikası
          </Link>
          <span className="hidden text-white/20 sm:inline" aria-hidden="true">
            |
          </span>
          <button
            type="button"
            onClick={openCookieSettings}
            className="text-xs text-white/55 transition hover:text-white"
          >
            Çerez tercihlerini yönet
          </button>
        </nav>
      </div>
    </div>
  );
}
