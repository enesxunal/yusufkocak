"use client";

import { useState } from "react";
import { buildWhatsAppUrl, DEFAULT_MESSAGE } from "@/lib/appointment";
import { trackEvent } from "@/lib/analytics";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [error, setError] = useState("");
  const [redirecting, setRedirecting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Lütfen adınızı yazın.");
      return;
    }
    if (!message.trim()) {
      setError("Lütfen bir mesaj yazın.");
      return;
    }

    const url = buildWhatsAppUrl(name, message);
    setRedirecting(true);

    trackEvent("appointment_request", {
      method: "whatsapp_message",
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
        <p className="text-xs uppercase tracking-[0.2em] text-navy-light">
          <span className="text-sm font-extrabold text-navy">Ücretsiz</span>{" "}
          <span className="font-semibold">ön görüşme</span>
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Süreci birlikte ele almak ve 15 dakikalık değerlendirme görüşmesi
          planlaması yapabilmek için lütfen bilgilerinizi ve mesajınızı iletiniz.
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
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
            Mesajınız
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-navy outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
          />
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
