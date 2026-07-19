export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
  if (typeof window === "undefined" || !window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag("event", name, params);
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
    return;
  }

  trackEvent("click", {
    element: tag,
    link_text: text || "unknown",
    link_url: href,
    section: element.closest("section")?.id || undefined,
  });
}
