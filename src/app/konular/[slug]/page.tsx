import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalLinks from "@/components/LegalLinks";
import { SITE } from "@/lib/constants";
import { getTopic, TOPICS } from "@/lib/topics";

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

  return {
    title: `${topic.title} | ${SITE.name}`,
    description: topic.description,
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  return (
    <>
      <Header solid />
      <main className="bg-cream pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Link
            href="/#therapy"
            className="text-sm text-navy-light transition hover:text-navy"
          >
            ← Çalışma alanları
          </Link>

          <h1 className="mt-6 font-display text-3xl font-light text-navy sm:text-4xl">
            {topic.title}
          </h1>

          {topic.paragraphs ? (
            <div className="mt-8 space-y-4">
              {topic.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm leading-relaxed text-gray-700 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-2xl bg-white p-6 text-sm leading-relaxed text-gray-600 shadow-sm sm:p-8 sm:text-base">
              Bu konu hakkındaki yazı yakında eklenecektir. Ön görüşme için{" "}
              <Link href="/#appointment" className="text-navy underline-offset-2 hover:underline">
                buradan
              </Link>{" "}
              iletişime geçebilirsiniz.
            </p>
          )}
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
