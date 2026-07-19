import type { Metadata } from "next";
import { SITE } from "./constants";

const keywords = [
  "psikolog ankara",
  "klinik psikolog ankara",
  "bireysel psikoterapi ankara",
  "psikolog yusuf koçak",
  "psikodinamik terapi",
  "depresyon terapisi ankara",
  "kaygı terapisi ankara",
  "online psikoterapi",
  "çankaya psikolog",
];

export function getSiteMetadata(): Metadata {
  const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

  return {
    title: SITE.title,
    description: SITE.description,
    keywords,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: SITE.title,
      description: SITE.description,
      url: SITE.url,
      siteName: SITE.name,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: "/images/profile.jpg",
          width: 1200,
          height: 1500,
          alt: "Psikolog Yusuf Koçak - Ankara bireysel psikoterapi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.title,
      description: SITE.description,
      images: ["/images/profile.jpg"],
    },
    icons: {
      icon: "/images/favicon.png",
      apple: "/images/favicon.png",
    },
    verification: gscVerification
      ? {
          google: gscVerification,
        }
      : undefined,
    category: "health",
  };
}

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "tr-TR",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        image: `${SITE.url}/images/profile.jpg`,
        logo: `${SITE.url}/images/logo.png`,
        description: SITE.description,
        telephone: SITE.phone,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Barbaros Mahallesi",
          addressLocality: "Çankaya",
          addressRegion: "Ankara",
          addressCountry: "TR",
        },
        areaServed: {
          "@type": "City",
          name: "Ankara",
        },
        priceRange: "$$",
        availableLanguage: ["Turkish"],
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: "Yusuf Koçak",
        jobTitle: "Uzman Klinik Psikolog",
        worksFor: { "@id": `${SITE.url}/#organization` },
        url: SITE.url,
        image: `${SITE.url}/images/profile.jpg`,
        knowsAbout: [
          "Psikodinamik psikoterapi",
          "Bireysel psikoterapi",
          "Depresyon",
          "Kaygı bozuklukları",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#person` },
        inLanguage: "tr-TR",
      },
    ],
  };
}
