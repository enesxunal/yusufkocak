export const SITE = {
  name: "Psikolog Yusuf Koçak",
  title: "Psikolog Yusuf Koçak | Bireysel Psikoterapi Ankara",
  description:
    "Psikolog Yusuf Koçak, Ankara'da bireysel psikoterapi hizmetleri. Depresyon, kaygı ve daha fazlası için yüz yüze veya online seanslar.",
  url: "https://yusufkocak.tr",
  email: "psyyusuf@gmail.com",
  phone: "+90 555 151 35 33",
  phoneRaw: "905551513533",
  location: "Barbaros Mahallesi\nÇankaya / Ankara",
  designer: "3 Kare Ajans",
} as const;

export const QUOTE =
  "Birey, kendi yolculuğu sonucu içsel dinamiklerine ulaşıp onları kabul edebildiği ölçüde başkalarının dinamiklerine de anlayış ve saygıyla yaklaşabilir.";

export const ABOUT = [
  "Hacettepe Üniversitesi Psikoloji bölümünde lisans eğitimimi tamamladım.",
  "Ankara Hava Lojistik Komutanlığı'nda, Rehberlik ve Danışma Merkezi'nde psikolog yedek subay olarak askerliğimi yaptım.",
  "Ankara Yıldırım Beyazıt Üniversitesi'nde Klinik Psikoloji Yüksek Lisans programını 'Benlik Saygısı ve Narsisizm Arasındaki İlişkide Anneden Algılanan Narsisizmin ve Savunma Mekanizmalarının Aracı Rolü' başlıklı tezim ile tamamladım.",
  "Ergen, genç yetişkin ve yetişkinlerle psikodinamik kuram temelinde Ankara'da yüz yüze ve çevrim içi bireysel psikoterapi çalışmalarımı sürdürüyorum.",
];

export const EDUCATION = [
  "Dinamik Psikoterapi Temel Eğitimi (Doğan Şahin)",
  "Aktarım Odaklı Psikoterapi Eğitimi (Doğan Şahin)",
  "Nevrotiklerde Dinamik Psikoterapi Eğitimi (Doğan Şahin)",
  "Bireysel Süpervizyon (devam ediyor)",
  "Psikodinamik Destekleyici Psikoterapi Eğitimi (Cem Kaptanoğlu) (Eylül 2025 – Haziran 2028)",
];

export const THERAPY_INTRO = [
  "Psikodinamik terapinin amacı, yalnızca belirtileri ortadan kaldırmak veya hastalığı iyileştirmek değil; bireyin kendi iç dünyasını, ilişki örüntülerini, duygusal çatışmalarını ve savunmalarını derinlemesine anlamasına olanak tanımaktır. Bu anlayış, sadece semptomlarla değil, bireyin yaşamla kurduğu bütünsel ilişkiyle çalışmayı mümkün kılmaktadır.",
  "Psikoterapi sürecinde kişi yargılanmadan ve şefkatle dinlenerek; tüm karmaşıklığı ve bütünselliği içinde anlaşılmaya çalışılır. Çünkü, kendilik ancak bir ilişki içinde, empatik bir anlayışla, başkası tarafından hissedildiğinde iyileşebilir.",
];

export const THERAPY_AREAS =
  "Depresyon, stres yönetimi, öfke kontrolü, panik bozukluk, fobiler, obsesif kompulsif bozukluk (takıntılar), yaygın kaygı bozukluğu, travma sonrası stres bozukluğu, kişilik bozuklukları ve diğer psikopatolojiler gibi ruh sağlığınızı, işlevselliğinizi ve kişilerarası ilişkilerinizi etkileyen konular üzerine çalışıyorum.";

export const LINKS = [
  { label: "Türk Psikologlar Derneği", href: "https://psikolog.org.tr/" },
  { label: "Türk Psikiyatri Derneği", href: "https://psikiyatri.org.tr/" },
  { label: "International Psychoanalytical Association", href: "https://www.ipa.world/" },
  { label: "İstanbul Psikanaliz Derneği", href: "https://istanbulpsikanalizdernegi.com/" },
  { label: "Psike İstanbul", href: "https://psikeistanbul.org/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yusuf-ko%C3%A7ak-6a9512189/",
  },
];

export const WEEKDAY_HOURS = [17, 18, 19, 20, 21] as const;
export const WEEKEND_HOURS = Array.from({ length: 13 }, (_, i) => i + 9); // 09-21

export const DAY_NAMES = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
] as const;

export const MONTH_NAMES = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
] as const;
