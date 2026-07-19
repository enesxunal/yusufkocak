export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  timestamp: number;
  version: number;
};

export const CONSENT_STORAGE_KEY = "yusufkocak-cookie-consent";
export const CONSENT_VERSION = 1;
export const CONSENT_CHANGE_EVENT = "cookie-consent-change";

export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed.version !== CONSENT_VERSION) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean): CookieConsent {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };

  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));

  return consent;
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics === true;
}

export function hasConsentChoice(): boolean {
  return getConsent() !== null;
}
