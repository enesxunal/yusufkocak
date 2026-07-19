import { SITE } from "./constants";

export const DATA_CONTROLLER = {
  title: "Uzman Klinik Psikolog Yusuf Koçak",
  email: SITE.email,
  phone: SITE.phone,
  address: "Barbaros Mahallesi, Çankaya / Ankara",
} as const;

export const LEGAL_PAGES = {
  privacy: {
    path: "/gizlilik",
    title: "KVKK Aydınlatma Metni ve Gizlilik Politikası",
    description:
      "Psikolog Yusuf Koçak web sitesi kişisel verilerin korunması ve gizlilik politikası.",
  },
  cookies: {
    path: "/cerez",
    title: "Çerez Politikası",
    description:
      "Psikolog Yusuf Koçak web sitesi çerez kullanımı ve tercih yönetimi.",
  },
} as const;

export const PRIVACY_SECTIONS = [
  {
    title: "1. Veri Sorumlusu",
    paragraphs: [
      `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu: ${DATA_CONTROLLER.title}.`,
      `Adres: ${DATA_CONTROLLER.address}`,
      `E-posta: ${DATA_CONTROLLER.email}`,
      `Telefon: ${DATA_CONTROLLER.phone}`,
    ],
  },
  {
    title: "2. Kişisel Verilerin İşlenme Amaçları",
    paragraphs: [
      "Web sitemiz aracılığıyla aşağıdaki amaçlarla sınırlı kişisel veri işlenmektedir:",
      "• Ön görüşme talebinizin WhatsApp üzerinden iletilmesi,",
      "• İletişim kanallarımız aracılığıyla tarafımızla iletişime geçmeniz,",
      "• Web sitesi güvenliğinin sağlanması ve kötüye kullanımın önlenmesi,",
      "• Yasal yükümlülüklerin yerine getirilmesi,",
      "• Açık rızanız olması hâlinde web sitesi kullanım istatistiklerinin analiz edilmesi (Google Analytics).",
    ],
  },
  {
    title: "3. İşlenen Kişisel Veri Kategorileri",
    paragraphs: [
      "Kimlik bilgisi: Ad soyad (randevu formunda girdiğiniz bilgi, yalnızca WhatsApp mesajına eklenir; web sitemizde saklanmaz).",
      "İletişim bilgisi: Telefon numarası, e-posta adresi (doğrudan arama, e-posta veya WhatsApp ile iletişim kurduğunuzda).",
      "İşlem güvenliği: IP adresi, tarayıcı türü, cihaz bilgisi, oturum ve erişim kayıtları.",
      "Pazarlama / analitik: Açık rızanız ile Google Analytics aracılığıyla anonimleştirilmiş kullanım verileri.",
    ],
  },
  {
    title: "4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi",
    paragraphs: [
      "Veriler; web sitesi formları, iletişim kanalları, çerezler ve benzeri teknolojiler aracılığıyla otomatik veya otomatik olmayan yollarla toplanır.",
      "Hukuki sebepler: KVKK m.5/2 (c) sözleşmenin kurulması veya ifası, (ç) veri sorumlusunun hukuki yükümlülüğü, (f) meşru menfaat; analitik çerezler için KVKK m.5/1 açık rıza.",
    ],
  },
  {
    title: "5. Kişisel Verilerin Aktarılması",
    paragraphs: [
      "Randevu formunda girdiğiniz ad soyad bilgisi, yalnızca sizin başlattığınız WhatsApp mesajına eklenir; bu aşamadan sonra veri Meta/WhatsApp platformunun kendi politikalarına tabidir.",
      "Analitik hizmeti kapsamında, açık rızanız olması hâlinde Google LLC (Google Analytics) ile sınırlı teknik veriler paylaşılabilir. Google Analytics'te IP anonimleştirme etkinleştirilmiştir.",
      "Yasal zorunluluk hâlinde yetkili kamu kurum ve kuruluşlarına aktarım yapılabilir.",
    ],
  },
  {
    title: "6. Kişisel Verilerin Saklama Süresi",
    paragraphs: [
      "Web sitemiz randevu formu verilerini sunucularında saklamamaktadır.",
      "Doğrudan iletişim kanalları üzerinden paylaştığınız bilgiler, hizmet ilişkisinin gerektirdiği süre ve ilgili mevzuattaki zamanaşımı süreleri boyunca saklanır.",
      "Analitik veriler, Google Analytics varsayılan saklama sürelerine tabidir (genellikle 14 ay).",
      "Çerez tercih kaydınız tarayıcınızda, tercihinizi değiştirene kadar saklanır.",
    ],
  },
  {
    title: "7. İlgili Kişi Hakları (KVKK m.11)",
    paragraphs: [
      "KVKK kapsamında aşağıdaki haklara sahipsiniz:",
      "• Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
      "• İşlenmişse buna ilişkin bilgi talep etme,",
      "• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,",
      "• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,",
      "• Eksik veya yanlış işlenmişse düzeltilmesini isteme,",
      "• KVKK'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,",
      "• Düzeltme/silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
      "• Münhasıran otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,",
      "• Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.",
    ],
  },
  {
    title: "8. Başvuru Yöntemi",
    paragraphs: [
      `Haklarınızı kullanmak için ${DATA_CONTROLLER.email} adresine e-posta gönderebilir veya ${DATA_CONTROLLER.phone} numarasından bize ulaşabilirsiniz.`,
      "Başvurular en geç 30 gün içinde sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.",
      "Başvurunuzun reddedilmesi, verilen cevabın yetersiz bulunması veya süresinde cevap verilmemesi hâlinde Kişisel Verileri Koruma Kurulu'na şikâyet hakkınız saklıdır.",
    ],
  },
  {
    title: "9. Veri Güvenliği",
    paragraphs: [
      "Kişisel verilerinizin hukuka aykırı olarak işlenmesini ve erişilmesini önlemek amacıyla teknik ve idari tedbirler alınmaktadır.",
      "Web sitemiz HTTPS protokolü ile korunmaktadır. Analitik çerezler yalnızca açık rızanız sonrasında etkinleştirilir.",
    ],
  },
  {
    title: "10. Politika Güncellemeleri",
    paragraphs: [
      "Bu metin yasal düzenlemeler veya hizmet süreçlerindeki değişiklikler doğrultusunda güncellenebilir. Güncel metin her zaman bu sayfada yayımlanır.",
      `Son güncelleme: ${new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}`,
    ],
  },
] as const;

export const COOKIE_SECTIONS = [
  {
    title: "1. Çerez Nedir?",
    paragraphs: [
      "Çerezler, web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Site deneyimini iyileştirmek, güvenliği sağlamak ve — yalnızca izninizle — kullanım istatistiklerini analiz etmek için kullanılabilir.",
    ],
  },
  {
    title: "2. Kullandığımız Çerez Türleri",
    paragraphs: [
      "Zorunlu çerezler: Sitemizin temel işlevleri ve çerez tercihinizin hatırlanması için gereklidir. Bu çerezler devre dışı bırakılamaz.",
      "Analitik çerezler: Google Analytics aracılığıyla ziyaretçi sayısı, sayfa görüntüleme ve tıklama gibi anonimleştirilmiş istatistikler toplar. Yalnızca açık rızanız ile etkinleştirilir.",
    ],
  },
  {
    title: "3. Kullanılan Çerezler",
    paragraphs: [
      "yusufkocak-cookie-consent — Çerez tercihinizi saklar (süre: tercih değiştirilene kadar, sağlayıcı: yusufkocak.tr).",
      "_ga — Google Analytics kullanıcı ayırt etme (süre: 2 yıl, sağlayıcı: Google).",
      "_ga_* — Google Analytics oturum durumu (süre: 2 yıl, sağlayıcı: Google).",
    ],
  },
  {
    title: "4. Çerez Tercihlerinizi Yönetme",
    paragraphs: [
      "Siteye ilk girişinizde çerez banner'ı üzerinden tercihinizi belirleyebilirsiniz.",
      "“Tümünü kabul et” seçeneği analitik çerezleri etkinleştirir.",
      "“Sadece zorunlu” seçeneği analitik çerezleri devre dışı bırakır.",
      "Tercihinizi daha sonra değiştirmek için sayfanın altındaki “Çerez tercihlerini yönet” bağlantısını kullanabilir veya tarayıcı ayarlarınızdan çerezleri silebilirsiniz.",
    ],
  },
  {
    title: "5. Üçüncü Taraf Bağlantılar",
    paragraphs: [
      "WhatsApp, LinkedIn ve meslek kuruluşu web sitelerine yönlendiren bağlantılar kendi çerez politikalarına tabidir. Bu platformlara geçtiğinizde ilgili sitelerin gizlilik ve çerez metinlerini incelemenizi öneririz.",
    ],
  },
  {
    title: "6. İletişim",
    paragraphs: [
      `Çerez politikası hakkında sorularınız için ${DATA_CONTROLLER.email} adresinden bize ulaşabilirsiniz.`,
      `Son güncelleme: ${new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}`,
    ],
  },
] as const;
