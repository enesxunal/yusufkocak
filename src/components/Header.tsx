"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LEGAL_PAGES } from "@/lib/legal-content";

const navItems = [
  { href: "/#about", label: "Hakkımda" },
  { href: "/#therapy", label: "Psikoterapi" },
  { href: "/#appointment", label: "Ön Görüşme" },
  { href: "/#contact", label: "İletişim" },
];

type HeaderProps = {
  solid?: boolean;
};

export default function Header({ solid = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
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
        <Link href="/" className="relative block h-10 w-36 sm:h-12 sm:w-44">
          <Image
            src="/images/logo-white.png"
            alt="Psikolog Yusuf Koçak"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy px-5 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-lg text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
