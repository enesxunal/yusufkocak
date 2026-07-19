"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  CONSENT_CHANGE_EVENT,
  hasAnalyticsConsent,
} from "@/lib/cookies";
import { GA_MEASUREMENT_ID, trackClick } from "@/lib/analytics";

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(hasAnalyticsConsent());
    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!enabled || !GA_MEASUREMENT_ID) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const clickable = target.closest("a, button, [role='button']");
      if (!(clickable instanceof HTMLElement)) return;

      trackClick(clickable);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [enabled]);

  if (!enabled || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: true,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
