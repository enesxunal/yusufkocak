import Image from "next/image";
import { ABOUT, EDUCATION } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-xl lg:mx-0">
            <Image
              src="/images/profile.jpg"
              alt="Psikolog Yusuf Koçak"
              fill
              className="object-cover object-center"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-light">
              Hakkımda
            </p>
            <h2 className="mt-3 font-display text-3xl font-light text-navy sm:text-4xl">
              Eğitim ve deneyim
            </h2>
            <ul className="mt-8 space-y-4">
              {ABOUT.map((item) => (
                <li
                  key={item.slice(0, 40)}
                  className="flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 rounded-2xl bg-white p-8 shadow-sm lg:p-10">
          <h3 className="font-display text-xl font-medium text-navy sm:text-2xl">
            Eğitimler ve sertifikalar
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {EDUCATION.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-cream px-4 py-3 text-sm leading-relaxed text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
