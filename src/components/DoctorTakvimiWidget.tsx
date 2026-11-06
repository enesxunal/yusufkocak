"use client";

import { useState } from "react";

const bookingUrl = "https://www.doktortakvimi.com/profil/yusuf-kocak2";

export default function DoctorTakvimiWidget() {
  const [enabled, setEnabled] = useState(false);

  const enableCalendar = () => {
    if (enabled) return;
    setEnabled(true);
    if (!document.getElementById("zl-widget-s")) {
      const script = document.createElement("script");
      script.id = "zl-widget-s";
      script.src = "https://platform.docplanner.com/js/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
        Online randevu
      </p>
      <h3 className="mt-2 font-display text-xl text-white">Uygun saatleri görüntüleyin</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        DoktorTakvimi üzerinden müsait gün ve saatlere bakarak randevu oluşturabilirsiniz.
      </p>
      <div className="mt-5" id="doctor-calendar-widget">
        {enabled ? (
          <a
            id="zl-url"
            className="zl-url inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-white/90"
            href={bookingUrl}
            rel="nofollow"
            data-zlw-doctor="yusuf-kocak2"
            data-zlw-type="big_with_calendar"
            data-zlw-opinion="false"
            data-zlw-hide-branding="true"
            data-zlw-saas-only="true"
            data-zlw-a11y-title="Doktor randevu widgeti"
          >
            DoktorTakvimi’nde randevu al
          </a>
        ) : (
          <button
            type="button"
            onClick={enableCalendar}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-white/90"
          >
            Randevu takvimini aç
          </button>
        )}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-white/55">
        Takvimi açtığınızda DoktorTakvimi hizmeti yüklenir. Açılmazsa {" "}
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline underline-offset-2 hover:text-white">
          randevu sayfasına gidin.
        </a>
      </p>
    </div>
  );
}
