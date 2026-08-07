import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalLinks from "@/components/LegalLinks";
import { SITE } from "@/lib/constants";
import { getTopic, TOPICS, type Topic, type TopicBlock } from "@/lib/topics";

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return TOPICS.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};

  const url = `${SITE.url}/konular/${topic.slug}`;
  const imageUrl = `${SITE.url}${topic.image}`;

  return {
    title: topic.seoTitle,
    description: topic.description,
    keywords: topic.keywords,
    alternates: {
      canonical: `/konular/${topic.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: topic.seoTitle,
      description: topic.description,
      url,
      siteName: SITE.name,
      locale: "tr_TR",
      type: "article",
      images: [
        {
          url: imageUrl,
          alt: topic.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: topic.seoTitle,
      description: topic.description,
      images: [imageUrl],
    },
  };
}

function getTopicStructuredData(topic: Topic) {
  const url = `${SITE.url}/konular/${topic.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: SITE.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Çalışma Alanları",
            item: `${SITE.url}/#therapy`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: topic.title,
            item: url,
          },
        ],
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name: topic.seoTitle,
        description: topic.description,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: {
          "@type": "MedicalCondition",
          name: topic.title,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE.url}${topic.image}`,
        },
        author: {
          "@type": "Person",
          name: "Yusuf Koçak",
          jobTitle: "Uzman Klinik Psikolog",
          url: SITE.url,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
          logo: {
            "@type": "ImageObject",
            url: `${SITE.url}/images/logo.png`,
          },
        },
      },
    ],
  };
}

function TopicContent({ blocks }: { blocks: TopicBlock[] }) {
  return (
    <div className="mt-8 space-y-5">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={`h-${index}`}
              className="pt-4 font-display text-xl font-medium text-navy sm:text-2xl"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={`l-${index}`}
              className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 sm:text-base"
            >
              {block.items.map((item) => (
                <li key={item.slice(0, 50)}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={`p-${index}`}
            className="text-sm leading-relaxed text-gray-700 sm:text-base"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const related = TOPICS.filter((item) => item.slug !== topic.slug).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getTopicStructuredData(topic)),
        }}
      />
      <Header solid />
      <main className="bg-cream pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <nav aria-label="Sayfa yolu" className="text-sm text-navy-light">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-navy">
                  Ana Sayfa
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/#therapy" className="transition hover:text-navy">
                  Çalışma Alanları
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-navy">{topic.title}</li>
            </ol>
          </nav>

          <h1 className="mt-6 font-display text-3xl font-light text-navy sm:text-4xl">
            {topic.title}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            {topic.description}
          </p>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden">
            <Image
              src={topic.image}
              alt={topic.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {topic.content ? (
            <TopicContent blocks={topic.content} />
          ) : (
            <p className="mt-8 rounded-2xl bg-white p-6 text-sm leading-relaxed text-gray-600 shadow-sm sm:p-8 sm:text-base">
              Bu konu hakkındaki yazı yakında eklenecektir. Tanışma görüşmesi için{" "}
              <Link
                href="/#appointment"
                className="text-navy underline-offset-2 hover:underline"
              >
                buradan
              </Link>{" "}
              iletişime geçebilirsiniz.
            </p>
          )}

          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link
              href="/#appointment"
              className="inline-flex items-center rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-light"
            >
              Mesajınızı Bırakınız
            </Link>
          </div>

          <section className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="font-display text-xl font-medium text-navy">
              Diğer çalışma alanları
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/konular/${item.slug}`}
                    className="inline-block rounded-full bg-white px-4 py-2 text-sm text-navy transition hover:bg-navy hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <div className="bg-navy px-5 py-5 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <LegalLinks align="center" />
        </div>
      </div>
      <Footer />
    </>
  );
}
