import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { LEGAL_PAGES } from "@/lib/legal-content";
import { TOPICS } from "@/lib/topics";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}${LEGAL_PAGES.privacy.path}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}${LEGAL_PAGES.cookies.path}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...TOPICS.map((topic) => ({
      url: `${SITE.url}/konular/${topic.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
