"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  hasAnalyticsConsent,
} from "@/lib/cookies";
import {
  GA_MEASUREMENT_ID,
  GOOGLE_ADS_ID,
  hasAnyAnalytics,
  trackClick,
} from "@/lib/analytics";

const primaryTagId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

export default function GoogleAnalytics() {
  // Onay bandındaki canlı değişiklikleri Google'a bildir (yükleme sonrası).
  useEffect(() => {
    if (!hasAnyAnalytics) return;

    const applyConsent = () => {
      const granted = hasAnalyticsConsent();
      const value = granted ? "granted" : "denied";
      window.gtag?.("consent", "update", {
        ad_storage: value,
        analytics_storage: value,
        ad_user_data: value,
        ad_personalization: value,
      });
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, applyConsent);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, applyConsent);
  }, []);

  useEffect(() => {
    if (!hasAnyAnalytics) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const clickable = target.closest("a, button, [role='button']");
      if (!(clickable instanceof HTMLElement)) return;

      trackClick(clickable);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  if (!hasAnyAnalytics || !primaryTagId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryTagId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });

          try {
            var raw = localStorage.getItem('${CONSENT_STORAGE_KEY}');
            if (raw) {
              var c = JSON.parse(raw);
              if (c && c.version === ${CONSENT_VERSION} && c.analytics === true) {
                gtag('consent', 'update', {
                  ad_storage: 'granted',
                  analytics_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted'
                });
              }
            }
          } catch (e) {}

          gtag('js', new Date());
          ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}');` : ""}
          ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
