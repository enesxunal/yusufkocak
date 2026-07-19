import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { COOKIE_SECTIONS, LEGAL_PAGES } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: LEGAL_PAGES.cookies.title,
  description: LEGAL_PAGES.cookies.description,
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title={LEGAL_PAGES.cookies.title}
      intro="Bu politika, yusufkocak.tr web sitesinde kullanılan çerez türlerini, amaçlarını ve tercihlerinizi nasıl yönetebileceğinizi açıklar."
      sections={COOKIE_SECTIONS}
    />
  );
}
