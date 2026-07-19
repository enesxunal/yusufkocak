import Link from "next/link";
import { SITE } from "@/lib/constants";
import PartnerLogos from "./PartnerLogos";
import LegalLinks from "./LegalLinks";

const sectionLabel =
  "text-xs font-semibold uppercase tracking-[0.2em] text-white/50";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-20 text-white lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/section-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          backgroundSize: "contain",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className={sectionLabel}>İletişim</p>
            <h2 className="mt-3 font-display text-3xl font-light sm:text-4xl">
              Birlikte konuşalım
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Psikoterapi süreci hakkında sorularınız varsa veya ön görüşme
              planlamak isterseniz aşağıdaki kanallardan ulaşabilirsiniz.
            </p>

            <div className="mt-10 space-y-5">
              <ContactItem
                icon="phone"
                label="Telefon"
                href={`tel:${SITE.phoneRaw}`}
                value={SITE.phone}
              />
              <ContactItem
                icon="mail"
                label="E-posta"
                href={`mailto:${SITE.email}`}
                value={SITE.email}
              />
              <ContactItem
                icon="location"
                label="Konum"
                value={SITE.location}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 border-white/10 lg:border-l lg:pl-12">
            <div>
              <p className={sectionLabel}>Hızlı iletişim</p>
              <div className="mt-4 flex flex-col gap-3">
                <ContactButton
                  href={`https://wa.me/${SITE.phoneRaw}`}
                  external
                  variant="whatsapp"
                >
                  WhatsApp
                </ContactButton>
                <ContactButton href={`tel:${SITE.phoneRaw}`} variant="outline">
                  Telefon et
                </ContactButton>
                <ContactButton href="#appointment" variant="solid">
                  Ön görüşme planla
                </ContactButton>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className={sectionLabel}>Önemli bağlantılar</p>
              <div className="mt-4">
                <PartnerLogos compact align="left" />
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <LegalLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactButton({
  href,
  children,
  variant,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant: "whatsapp" | "outline" | "solid";
  external?: boolean;
}) {
  const classes = {
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1fb855]",
    outline:
      "border border-white/25 bg-white/10 text-white hover:bg-white/20",
    solid: "bg-white text-navy hover:bg-white/90",
  }[variant];

  const props = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};

  return (
    <a
      href={href}
      {...props}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition ${classes}`}
    >
      {children}
    </a>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: "phone" | "mail" | "location";
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
        {label}
      </p>
      <p className="mt-1 whitespace-pre-line text-sm text-white/90">{value}</p>
    </>
  );

  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-base">
        {icon === "phone" && "📞"}
        {icon === "mail" && "✉️"}
        {icon === "location" && "📍"}
      </div>
      <div>
        {href ? (
          <a href={href} className="transition hover:text-white">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
