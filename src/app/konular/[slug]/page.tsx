import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalLinks from "@/components/LegalLinks";
import { SITE } from "@/lib/constants";
import { getTopic, TOPICS, type TopicBlock } from "@/lib/topics";

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
    openGraph: {
      title: `${topic.title} | ${SITE.name}`,
      description: topic.description,
      images: [topic.image],
    },
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
              Bu konu hakkındaki yazı yakında eklenecektir. Ön görüşme için{" "}
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
              Ücretsiz ön görüşme planla
            </Link>
          </div>
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
