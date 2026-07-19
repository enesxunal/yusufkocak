import Image from "next/image";
import { QUOTE } from "@/lib/constants";
import AppointmentForm from "./AppointmentForm";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      <Image
        src="/images/hero-banner.png"
        alt=""
        fill
        className="object-cover object-center opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/95" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-5 pb-20 pt-28 lg:flex-row lg:items-start lg:gap-16 lg:px-8 lg:pt-32">
        <div className="flex-1 text-white lg:pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Uzman Klinik Psikolog
          </p>
          <h1 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Yusuf Koçak
          </h1>
          <blockquote className="mt-8 max-w-xl border-l-2 border-white/30 pl-5 text-base leading-relaxed text-white/85 sm:text-lg">
            &ldquo;{QUOTE}&rdquo;
          </blockquote>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Hakkımda
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white/90"
            >
              Ön görüşme planla
            </a>
          </div>
        </div>

        <div className="w-full lg:max-w-md lg:shrink-0">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
