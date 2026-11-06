"use client";

import { useEffect, useState } from "react";

const bookingUrl = "https://www.doktortakvimi.com/profil/yusuf-kocak2";

export default function DoctorTakvimiWidget() {
  const [enabled, setEnabled] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  // Load the third-party calendar only after an explicit click and after React
  // has inserted the DoktorTakvimi anchor into the document.
  useEffect(() => {
    if (!enabled) return;
    if (document.getElementById("zl-widget-s")) return;

    const script = document.createElement("script");
    script.id = "zl-widget-s";
    script.src = "https://platform.docplanner.com/js/widget.js";
    script.async = true;
    script.onerror = () => setLoadFailed(true);
    document.body.appendChild(script);
  }, [enabled]);

  return (
    <div className="overflow-hidden rounded-[28px] border border-navy/10 bg-white shadow-[0_24px_70px_rgba(21,25,51,0.13)]">
      <div className="relative overflow-hidden bg-navy px-6 py-6 text-white sm:px-8">
        <div className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-40 w-40 rounded-full border border-white/10" />
        <div className="relative flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M7 3v4m10-4v4M3 10h18M8 15h3m3 0h3" />
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Online randevu sistemi</p>
            <p className="mt-1 text-lg font-medium">Randevu Takvimi</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-7 sm:px-8 sm:py-8">
        <div className="mb-6 flex items-start gap-4 rounded-2xl bg-cream p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <circle cx="12" cy="12" r="9" />
              <path d="m8 12 2.5 2.5L16 9" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-navy">Yusuf Koçak</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">DoktorTakvimi üzerinden uygun gün ve saati seçerek randevu oluşturun.</p>
          </div>
        </div>

        <div id="doctor-calendar-widget" className="min-w-0">
          {enabled ? (
            <a
              id="zl-url"
              className="zl-url flex min-h-14 w-full items-center justify-center rounded-xl bg-navy px-5 py-4 text-center text-base font-semibold text-white transition hover:bg-navy-light"
              href={bookingUrl}
              rel="nofollow"
              data-zlw-doctor="yusuf-kocak2"
              data-zlw-type="big_with_calendar"
              data-zlw-opinion="false"
              data-zlw-hide-branding="true"
              data-zlw-saas-only="true"
              data-zlw-a11y-title="Doktor randevu widgeti"
            >
              DoktorTakvimi ile randevu al
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setEnabled(true)}
              className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-navy px-5 py-4 text-base font-semibold text-white shadow-[0_8px_22px_rgba(21,25,51,0.2)] transition hover:-translate-y-0.5 hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Randevu takvimini görüntüle
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-5 w-5 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          )}
        </div>

        {loadFailed && (
          <p role="status" className="mt-4 text-sm text-amber-800">
            Takvim şu anda yüklenemedi. Aşağıdaki bağlantıdan devam edebilirsiniz.
          </p>
        )}
        <p className="mt-5 text-center text-xs leading-relaxed text-muted">
          {enabled ? "DoktorTakvimi hizmeti açılıyor. " : "Takvimi açtığınızda DoktorTakvimi hizmeti yüklenir. "}
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer nofollow" className="font-medium text-navy underline underline-offset-4 hover:text-navy-light">
            DoktorTakvimi sayfasına git
          </a>
        </p>
      </div>
    </div>
  );
}
