"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LEGAL_PAGES } from "@/lib/legal-content";
import { hasConsentChoice, setConsent } from "@/lib/cookies";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);

  useEffect(() => {
    setVisible(!hasConsentChoice());
  }, []);

  useEffect(() => {
    const openManager = () => {
      setManageOpen(true);
      setVisible(true);
    };

    window.addEventListener("open-cookie-settings", openManager);
    return () => window.removeEventListener("open-cookie-settings", openManager);
  }, []);

  const acceptAll = () => {
    setConsent(true);
    setVisible(false);
    setManageOpen(false);
  };

  const acceptNecessary = () => {
    setConsent(false);
    setVisible(false);
    setManageOpen(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:p-6">
        <h2 id="cookie-title" className="font-display text-lg font-medium text-navy sm:text-xl">
          {manageOpen ? "Çerez tercihleriniz" : "Çerez kullanımı"}
        </h2>
        <p id="cookie-desc" className="mt-3 text-sm leading-relaxed text-gray-600">
          Web sitemizde deneyiminizi iyileştirmek ve — izninizle — anonim kullanım
          istatistikleri toplamak için çerezler kullanılmaktadır. Zorunlu çerezler
          site işlevselliği için gereklidir. Detaylar için{" "}
          <Link href={LEGAL_PAGES.cookies.path} className="text-navy underline-offset-2 hover:underline">
            çerez politikamızı
          </Link>{" "}
          ve{" "}
          <Link href={LEGAL_PAGES.privacy.path} className="text-navy underline-offset-2 hover:underline">
            gizlilik metnimizi
          </Link>{" "}
          inceleyebilirsiniz.
        </p>

        {manageOpen && (
          <div className="mt-4 space-y-3 rounded-xl bg-cream p-4 text-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-navy">Zorunlu çerezler</p>
                <p className="mt-1 text-gray-600">Tercih kaydı ve temel site işlevleri.</p>
              </div>
              <span className="shrink-0 rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">
                Her zaman açık
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-gray-200 pt-3">
              <div>
                <p className="font-medium text-navy">Analitik çerezler</p>
                <p className="mt-1 text-gray-600">Google Analytics ile anonim istatistikler.</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-light"
          >
            Tümünü kabul et
          </button>
          <button
            type="button"
            onClick={acceptNecessary}
            className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-navy transition hover:bg-gray-50"
          >
            Sadece zorunlu
          </button>
          {!manageOpen && (
            <button
              type="button"
              onClick={() => setManageOpen(true)}
              className="rounded-xl px-5 py-3 text-sm font-medium text-muted transition hover:text-navy"
            >
              Tercihleri yönet
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
