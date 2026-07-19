"use client";

import { useMemo, useState } from "react";
import {
  buildWhatsAppUrl,
  getAvailableDates,
  getHoursForDate,
  formatHour,
} from "@/lib/appointment";
import { trackEvent } from "@/lib/analytics";

export default function AppointmentForm() {
  const dates = useMemo(() => getAvailableDates(), []);
  const [name, setName] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [hour, setHour] = useState<number | "">("");
  const [error, setError] = useState("");
  const [redirecting, setRedirecting] = useState(false);

  const selectedDate = dates.find((d) => d.value === dateValue);
  const hours = selectedDate ? getHoursForDate(selectedDate.isWeekend) : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Lütfen adınızı yazın.");
      return;
    }
    if (!selectedDate) {
      setError("Lütfen bir gün seçin.");
      return;
    }
    if (hour === "") {
      setError("Lütfen bir saat seçin.");
      return;
    }

    const url = buildWhatsAppUrl(name, selectedDate.label, hour);
    setRedirecting(true);

    trackEvent("appointment_request", {
      appointment_date: selectedDate.label,
      appointment_hour: formatHour(hour),
    });
    trackEvent("generate_lead", {
      method: "whatsapp_appointment",
    });

    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setRedirecting(false);
    }, 600);
  };

  return (
    <div
      id="appointment"
      className="rounded-2xl border border-white/10 bg-white/95 p-6 shadow-2xl backdrop-blur-sm sm:p-8"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-light">
          Ücretsiz ön görüşme
        </p>
        <h2 className="mt-2 font-display text-2xl font-light text-navy sm:text-3xl">
          15 dakikalık tanışma görüşmesi
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Süreci birlikte değerlendirmek için kısa bir görüşme planlayabilirsiniz.
          Tercih ettiğiniz gün ve saati seçin.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
            Ad Soyad
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Adınız ve soyadınız"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-navy outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
          />
        </div>

        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-navy">
            Gün
          </label>
          <select
            id="date"
            value={dateValue}
            onChange={(e) => {
              setDateValue(e.target.value);
              setHour("");
            }}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-navy outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
          >
            <option value="">Tarih seçin</option>
            {dates.map((date) => (
              <option key={date.value} value={date.value}>
                {date.label}
                {date.isWeekend ? " (Hafta sonu)" : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="hour" className="mb-1.5 block text-sm font-medium text-navy">
            Saat
          </label>
          <select
            id="hour"
            value={hour === "" ? "" : String(hour)}
            onChange={(e) => setHour(e.target.value ? Number(e.target.value) : "")}
            disabled={!selectedDate}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-navy outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
          >
            <option value="">
              {selectedDate ? "Saat seçin" : "Önce gün seçin"}
            </option>
            {hours.map((h) => (
              <option key={h} value={h}>
                {formatHour(h)}
              </option>
            ))}
          </select>
          {selectedDate && (
            <p className="mt-1.5 text-xs text-muted">
              {selectedDate.isWeekend
                ? "Hafta sonu: 09:00 – 21:00 arası"
                : "Hafta içi: 17:00 – 21:00 arası"}
            </p>
          )}
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">{error}</p>
        )}

        <button
          type="submit"
          disabled={redirecting}
          className="flex w-full items-center justify-center rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-navy/20 disabled:cursor-wait disabled:opacity-80"
        >
          {redirecting ? "WhatsApp'a yönlendiriliyorsunuz…" : "Randevu oluştur"}
        </button>

        {redirecting && (
          <p className="rounded-lg bg-[#25D366]/10 px-4 py-3 text-center text-sm text-[#128C7E]">
            Mesajınız hazırlanıyor, WhatsApp açılacak.
          </p>
        )}
      </form>
    </div>
  );
}
