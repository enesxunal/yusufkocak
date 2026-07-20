export type Topic = {
  slug: string;
  label: string;
  title: string;
  description: string;
  /** İçerik eklendiğinde buraya paragrafları yazın. null ise "yakında" gösterilir. */
  paragraphs: string[] | null;
};

export const TOPICS: Topic[] = [
  {
    slug: "depresyon",
    label: "Depresyon",
    title: "Depresyon",
    description:
      "Depresyon ve psikoterapi süreci hakkında bilgilendirici içerik.",
    paragraphs: null,
  },
  {
    slug: "kaygi-bozukluklari",
    label: "Kaygı bozuklukları",
    title: "Kaygı bozuklukları",
    description:
      "Kaygı bozuklukları ve psikoterapi süreci hakkında bilgilendirici içerik.",
    paragraphs: null,
  },
  {
    slug: "panik-bozukluk",
    label: "Panik bozukluk",
    title: "Panik bozukluk",
    description:
      "Panik bozukluk ve psikoterapi süreci hakkında bilgilendirici içerik.",
    paragraphs: null,
  },
  {
    slug: "travma",
    label: "Travma",
    title: "Travma",
    description: "Travma ve psikoterapi süreci hakkında bilgilendirici içerik.",
    paragraphs: null,
  },
  {
    slug: "obsesif-kompulsif-bozukluk",
    label: "Obsesif kompulsif bozukluk",
    title: "Obsesif kompulsif bozukluk",
    description:
      "Obsesif kompulsif bozukluk ve psikoterapi süreci hakkında bilgilendirici içerik.",
    paragraphs: null,
  },
  {
    slug: "kisilik-bozukluklari",
    label: "Kişilik bozuklukları",
    title: "Kişilik bozuklukları",
    description:
      "Kişilik bozuklukları ve psikoterapi süreci hakkında bilgilendirici içerik.",
    paragraphs: null,
  },
  {
    slug: "stres-yonetimi",
    label: "Stres yönetimi",
    title: "Stres yönetimi",
    description:
      "Stres yönetimi ve psikoterapi süreci hakkında bilgilendirici içerik.",
    paragraphs: null,
  },
  {
    slug: "ofke-kontrolu",
    label: "Öfke kontrolü",
    title: "Öfke kontrolü",
    description:
      "Öfke kontrolü ve psikoterapi süreci hakkında bilgilendirici içerik.",
    paragraphs: null,
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}
