export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

const ADS_LABELS = {
  whatsapp: process.env.NEXT_PUBLIC_ADS_LABEL_WHATSAPP,
  phone: process.env.NEXT_PUBLIC_ADS_LABEL_PHONE,
  appointment: process.env.NEXT_PUBLIC_ADS_LABEL_APPOINTMENT,
} as const;

export type ConversionType = keyof typeof ADS_LABELS;

export const hasAnyAnalytics = Boolean(GA_MEASUREMENT_ID || GOOGLE_ADS_ID);

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", name, params);
}

/** Google Ads dönüşümünü tetikler. Yalnızca ilgili etiket tanımlıysa çalışır. */
export function trackConversion(type: ConversionType) {
  if (typeof window === "undefined" || !window.gtag) return;
  if (!GOOGLE_ADS_ID) return;

  const label = ADS_LABELS[type];
  if (!label) return;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
  });
}

export function trackClick(element: HTMLElement) {
  const tag = element.tagName.toLowerCase();
  const text = (element.textContent || "").trim().slice(0, 80);
  const href =
    element instanceof HTMLAnchorElement
      ? element.href
      : element.closest("a")?.href || undefined;

  let contactMethod: string | undefined;

  if (href?.startsWith("tel:")) contactMethod = "phone";
  else if (href?.startsWith("mailto:")) contactMethod = "email";
  else if (href?.includes("wa.me") || href?.includes("whatsapp")) contactMethod = "whatsapp";

  if (contactMethod) {
    trackEvent("contact", {
      method: contactMethod,
      link_text: text || contactMethod,
      link_url: href,
    });

    if (contactMethod === "whatsapp") trackConversion("whatsapp");
    else if (contactMethod === "phone") trackConversion("phone");
    return;
  }

  trackEvent("click", {
    element: tag,
    link_text: text || "unknown",
    link_url: href,
    section: element.closest("section")?.id || undefined,
  });
}
