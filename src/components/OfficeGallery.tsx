import Image from "next/image";

const spaces = [
  {
    src: "/images/divan.png",
    alt: "Psikoterapi seans odası",
  },
  {
    src: "/images/merdiven.png",
    alt: "Ofis binası giriş alanı",
  },
];

export default function OfficeGallery() {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2">
      {spaces.map((space) => (
        <div
          key={space.src}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
        >
          <Image
            src={space.src}
            alt={space.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}
