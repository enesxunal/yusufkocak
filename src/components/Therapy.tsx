import { THERAPY_AREAS, THERAPY_INTRO } from "@/lib/constants";

const areas = [
  "Depresyon",
  "Kaygı bozuklukları",
  "Panik bozukluk",
  "Travma",
  "Obsesif kompulsif bozukluk",
  "Kişilik bozuklukları",
  "Stres yönetimi",
  "Öfke kontrolü",
];

export default function Therapy() {
  return (
    <section id="therapy" className="relative overflow-hidden py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(/images/section-bg-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "contain",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-light">
            Psikoterapi
          </p>
          <h2 className="mt-3 font-display text-3xl font-light text-navy sm:text-4xl">
            Bireysel psikoterapi
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {THERAPY_INTRO.map((paragraph) => (
            <p
              key={paragraph.slice(0, 50)}
              className="text-sm leading-relaxed text-gray-700 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:p-10">
          <h3 className="font-display text-xl font-medium text-navy">
            Çalışma alanları
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
            {THERAPY_AREAS}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-cream px-4 py-2 text-xs font-medium text-navy sm:text-sm"
              >
                {area}
              </span>
            ))}
          </div>

          <a
            href="#appointment"
            className="mt-8 inline-flex items-center rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-light"
          >
            Ön görüşme planla
          </a>
        </div>
      </div>
    </section>
  );
}
