"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TOPICS } from "@/lib/topics";

const navItems = [
  { href: "/#about", label: "Hakkımda" },
  { href: "/#therapy", label: "Psikoterapi" },
  { href: "/#faq", label: "SSS" },
  { href: "/#contact", label: "İletişim" },
];

type HeaderProps = {
  solid?: boolean;
};

export default function Header({ solid = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(solid);

  useEffect(() => {
    if (solid) return;

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenus = () => {
    setOpen(false);
    setTopicsOpen(false);
    setMobileTopicsOpen(false);
  };

  const isSolid = solid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isSolid
          ? "border-b border-white/10 bg-navy/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="relative block h-10 w-36 sm:h-12 sm:w-44" onClick={closeMenus}>
          <Image
            src="/images/logo-white.png"
            alt="Psikolog Yusuf Koçak"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setTopicsOpen(true)}
            onMouseLeave={() => setTopicsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-white/85 transition hover:text-white"
              aria-expanded={topicsOpen}
              aria-haspopup="true"
              onClick={() => setTopicsOpen((prev) => !prev)}
            >
              Çalışma Alanları
              <span className={`text-[10px] transition ${topicsOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {topicsOpen && (
              <div className="absolute left-0 top-full pt-2">
                <ul className="min-w-64 rounded-xl border border-white/10 bg-navy py-2 shadow-xl">
                  {TOPICS.map((topic) => (
                    <li key={topic.slug}>
                      <Link
                        href={`/konular/${topic.slug}`}
                        className="block px-4 py-2.5 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                        onClick={closeMenus}
                      >
                        {topic.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#randevu"
            className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition hover:bg-cream"
          >
            Randevu Al
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-navy px-5 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-lg text-white/90"
                  onClick={closeMenus}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                type="button"
                className="flex w-full items-center justify-between text-lg text-white/90"
                aria-expanded={mobileTopicsOpen}
                onClick={() => setMobileTopicsOpen((prev) => !prev)}
              >
                Çalışma Alanları
                <span className={`text-sm transition ${mobileTopicsOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {mobileTopicsOpen && (
                <ul className="mt-3 space-y-2 border-l border-white/15 pl-4">
                  {TOPICS.map((topic) => (
                    <li key={topic.slug}>
                      <Link
                        href={`/konular/${topic.slug}`}
                        className="block py-1 text-base text-white/75"
                        onClick={closeMenus}
                      >
                        {topic.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navItems.slice(2).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-lg text-white/90"
                  onClick={closeMenus}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#randevu"
                className="block rounded-xl bg-white px-5 py-3.5 text-center text-base font-semibold text-navy"
                onClick={closeMenus}
              >
                Randevu Al
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
