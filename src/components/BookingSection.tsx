import DoctorTakvimiWidget from "./DoctorTakvimiWidget";

const steps = [
  { number: "01", title: "Takvimi açın", description: "Randevu ekranına geçin." },
  { number: "02", title: "Gün ve saat seçin", description: "Size uygun zamanı belirleyin." },
  { number: "03", title: "Randevunuzu tamamlayın", description: "İşlemi DoktorTakvimi'nde bitirin." },
];

export default function BookingSection() {
  return (
    <section id="randevu" aria-labelledby="booking-title" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[430px] w-[430px] rounded-full border border-navy/[0.05]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[300px] w-[300px] rounded-full border border-navy/[0.05]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_0.95fr] lg:gap-20 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-navy/60" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy/65">Online randevu</p>
          </div>
          <h2 id="booking-title" className="mt-6 max-w-xl font-display text-4xl font-light leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            Görüşmeniz için <span className="font-medium">ilk adımı atın.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted">
            Yüz yüze veya çevrim içi psikoterapi görüşmesi planlamak için DoktorTakvimi üzerinden uygun gün ve saatleri görüntüleyebilirsiniz.
          </p>
          <div className="mt-9 space-y-6 border-l border-navy/15 pl-6">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-5">
                <span className="pt-0.5 text-sm font-semibold tracking-wider text-navy/45">{step.number}</span>
                <div>
                  <h3 className="text-base font-semibold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">
            Sorularınız mı var? <a className="font-semibold text-navy underline underline-offset-4 hover:text-navy-light" href="#contact">İletişime geçin.</a>
          </p>
        </div>
        <DoctorTakvimiWidget />
      </div>
    </section>
  );
}
