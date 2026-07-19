import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL_PAGES, PRIVACY_SECTIONS } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: LEGAL_PAGES.privacy.title,
  description: LEGAL_PAGES.privacy.description,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title={LEGAL_PAGES.privacy.title}
      intro="Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma yükümlülüğümüzü ve gizlilik ilkelerimizi açıklar."
      sections={PRIVACY_SECTIONS}
    />
  );
}
