import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import LegalLinks from "./LegalLinks";

type LegalSection = {
  title: string;
  paragraphs: readonly string[];
};

type LegalLayoutProps = {
  title: string;
  intro: string;
  sections: readonly LegalSection[];
};

export default function LegalLayout({ title, intro, sections }: LegalLayoutProps) {
  return (
    <>
      <Header solid />
      <main className="bg-cream pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Link
            href="/"
            className="text-sm text-navy-light transition hover:text-navy"
          >
            ← Anasayfa
          </Link>

          <h1 className="mt-6 font-display text-3xl font-light text-navy sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            {intro}
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="font-display text-xl font-medium text-navy">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-sm leading-relaxed text-gray-700 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
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
