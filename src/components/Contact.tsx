import { LINKS, SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-20 text-white lg:py-28"
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
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              İletişim
            </p>
            <h2 className="mt-3 font-display text-3xl font-light sm:text-4xl">
              Birlikte konuşalım
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Önemli bağlantılar
            </h3>
            <ul className="mt-6 space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 underline-offset-4 transition hover:text-white hover:underline sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SITE.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb855]"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Telefon et
              </a>
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-white/90"
              >
                Ön görüşme planla
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      <p className="text-xs uppercase tracking-wider text-white/45">{label}</p>
      <p className="mt-1 whitespace-pre-line text-base sm:text-lg">{value}</p>
    </>
  );

  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg">
        {icon === "phone" && "📞"}
        {icon === "mail" && "✉️"}
        {icon === "location" && "📍"}
      </div>
      <div>
        {href ? (
          <a href={href} className="transition hover:text-white/90">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
