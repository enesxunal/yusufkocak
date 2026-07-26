export type TopicBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Topic = {
  slug: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** İçerik eklendiğinde buraya blokları yazın. null ise "yakında" gösterilir. */
  content: TopicBlock[] | null;
};

export const TOPICS: Topic[] = [
  {
    slug: "kaygi-bozukluklari",
    label: "Kaygı (Anksiyete) Bozuklukları",
    title: "Yaygın Kaygı (Anksiyete) Bozukluğu",
    description:
      "Yaygın kaygı bozukluğu belirtileri ve psikoterapi süreci hakkında bilgilendirici içerik.",
    image: "/images/divan.png",
    imageAlt: "Psikoterapi seans odası",
    content: [
      {
        type: "paragraph",
        text: "Yaygın anksiyeteli kişiler; geleceklerine, yaşamakta oldukları ana, parasal durumlarına, yakınlarının başlarına gelebilecek olası felaketlere ve yaşamın diğer yönlerine ilişkin sürekli kaygılar yaşamaktadırlar.",
      },
      {
        type: "paragraph",
        text: "Zaman zaman ve birden yoğunlaşan kaygı duygularıyla belirlenen yaygın anksiyete, belirli bir tehlike kaynağına bağlı değildir. Anksiyete kaynağı olarak gösterilen durumun çoğu kez belirtisiz, örüntülü ve karmaşık bir nitelik taşımasına rağmen kişiyi gün boyunca meşgul edebilmektedir. Aynı zamanda bu anksiyete kişinin sürekli olarak gerilim, üzüntü ve tedirginlik yaşamasına neden olabilmektedir.",
      },
      {
        type: "paragraph",
        text: "Eşlik eden belirtiler arasında; dikkati toplayamama, karar verme güçlüğü, aşırı duyarlık, umutsuzluk, uyku bozuklukları, aşırı terleme ve kas gerilimi sayılabilmektedir.",
      },
      {
        type: "paragraph",
        text: "Kişi işleri yolunda gitse de kaygı duyabilmektedir. Belirsiz kaygılar ve genel duyarlık sürekli sıkıntılı ve tedirgin olmasına, umudunu yitirmesine yol açmaktadır. Büyük bir güçlükle karar vermiş olsa bile bu kararın sonuçları, yapmış olabileceği yanlışlar ve bunların doğuracağı olumsuz etkiler üzerinde aşırı bir kaygı sürdürülür.",
      },
      {
        type: "paragraph",
        text: "Günlük olaylarla ilgili kaygılara, geçmişte yapılmış yanlışlar ve gelecekte ortaya çıkabilecek güçlükler de eklenebilir. Bu düşünceler sona erip uykuya dalındığında kabus görülmesi oldukça sık rastlanan bir durumdur.",
      },
      {
        type: "paragraph",
        text: "Anksiyete bozukluğuna depresif bir durumun eşlik etmesi de klinikte sıkça gözlemlenen bir olgudur. Yaygın anksiyeteye eşlik eden isteksizlik, karamsarlık, kolay incinebilirlik ve kolayca çöküntüye düşme gibi belirtiler bu olgularda yer almaktadır.",
      },
    ],
  },
  {
    slug: "depresyon",
    label: "Depresyon",
    title: "Depresyon",
    description:
      "Depresyon belirtileri ve psikoterapi süreci hakkında bilgilendirici içerik.",
    image: "/images/merdiven.png",
    imageAlt: "Ofis binası giriş alanı",
    content: [
      {
        type: "paragraph",
        text: "Depresif dönemin temel özelliği en az iki hafta süreyle yaşanan depresif duygudurumu ya da hemen her şeye ilgisizlik ve eşlik eden yan belirtilerdir. Belirtiler oldukça inatçıdır, günün büyük bir bölümünde ve hemen her gün kişiye egemendirler.",
      },
      {
        type: "paragraph",
        text: "Yan belirtiler arasında, iştah bozulmaları, beden ağırlığında değişiklikler (hızlı kilo alma-verme), uyku bozuklukları, psikomotor ajitasyon ya da yavaşlama, enerjinin azalması, değersizlik ve abartılı suçluluk duyguları, düşünme ve dikkat toplama güçlükleri, tekrar tekrar gelen ölüm ve intihar düşünceleri/girişimleri sayılabilir.",
      },
      {
        type: "paragraph",
        text: "Depresif duygu durumu yaşamakta olan kişiler yaşadıklarını genellikle çöküntü duygusu, hüzün, umutsuzluk ve yüreksizlik olarak tanımlar. Yüzü kederli, gözleri, ağzı, başı öne eğiktir. Bakışları boş, omuzları düşüktür. Bazı durumlarda ise kişi depresyonda olduğunu kabul etmez ve depresyonun varlığı başkalarınca gözlemlenir.",
      },
      {
        type: "paragraph",
        text: "İştah bozulmaları oldukça sıktır ve genellikle iştah azalması ya da daha ender olarak artması biçiminde görülür. Bu durumlara kilo kaybı ya da artışı eşlik eder.",
      },
      {
        type: "paragraph",
        text: "Uyku güçlükleri de oldukça sıktır; daha çok insomnia bazen de hipersomnia şeklinde görülür. İnsomnia; uykuya dalmada güçlük, uyanıp tekrar uyuyamama ya da erken uyanma olarak yaşanabilir. Hipersomnia ise alışılmıştan uzun süreler uyuma, gün boyunca uyuklama ya da gün ortasında uzun uykular biçiminde görülebilir.",
      },
      {
        type: "paragraph",
        text: "Psikomotor ajitasyon; yerinde duramama, sürekli olarak dolaşma, el ovuşturma, saçları, deriyi, giysileri ya da diğer objeleri ovma ya da çekiştirme biçiminde görülür. Psikomotor yavaşlama belirtileri arasında ise konuşmanın ağırlaşması, cevaplardan önceki sürelerin uzaması, yumuşak ve tekdüze ses tonu, hareketlerde yavaşlama, konuşma içeriğinin azalması sayılabilir. Yorgunluk çok yoğun yaşanır, en basit işleri yapmak dahi zor gelir ya da imkânsızlaşır.",
      },
      {
        type: "paragraph",
        text: "Değersizlik duyguları, kendini yetersiz hissetmekten kişinin kendi değerine ilişkin gerçeğe hiç uymayan olumsuz inançlara kadar değişen tonlarda ortaya çıkabilir. Depresif kişi bundan ötürü önemsiz hatalarını bile abartır ve değersizliğini kanıtlayacak ipuçları arar. Abartılı suçluluk duygusu ve kendini sorumlu görme eğilimi yaşanır.",
      },
      {
        type: "paragraph",
        text: "Dikkat toplayamama, düşünmede yavaşlık ve karar verme güçlüğü sık görülen belirtiler arasındadır. Ölümle ilgili düşünceler, kendisinin ve diğerlerinin ölümle huzura kavuşacakları inancı, intihar düşünceleri ya da girişimleri görülebilir.",
      },
      {
        type: "paragraph",
        text: "Diğer yan belirtiler arasında; ağlamalar, anksiyete ve panik nöbetleri, hırçınlık, beden sağlığına ilişkin aşırı kaygılar ve obsesif düşünce takılmaları sayılabilir.",
      },
    ],
  },
  {
    slug: "fobiler",
    label: "Fobiler",
    title: "Fobiler",
    description:
      "Fobiler, özgül fobi, sosyal fobi ve agorafobi hakkında bilgilendirici içerik.",
    image: "/images/divan.png",
    imageAlt: "Psikoterapi seans odası",
    content: [
      {
        type: "paragraph",
        text: "“Fobi” terimi Yunancada “kaçış, panik, korku ve dehşet” anlamlarına gelen ‘phobos’ sözcüğünden türetilmiştir.",
      },
      {
        type: "paragraph",
        text: "Birçok insan tarafından tehlikeli sayılmayan obje ya da durumlar karşısında duyulan olağandışı güçlü bir korku olarak tanımlanabilecek olan fobi, oldukça sık görülen bir anksiyete bozukluğu türüdür.",
      },
      {
        type: "paragraph",
        text: "Birçok insan arada bir geçici ve gerçekçi olmayan korkulara kapılabilir. Ancak fobide korku duygusu o denli yoğundur ki kişinin günlük yaşamını engelleyebilmektedir. Örneğin kapalı yerlere karşı fobi geliştirmiş olan kişi, odalara girmemek ya da dar koridorlardan geçmemek için türlü önlemler alır ya da her an dışarı çıkabilmesine olanak sağlayan biçimde ve kapıya yakın olmadıkça kapalı bir yerde oturamaz.",
      },
      {
        type: "paragraph",
        text: "Gerçekte kişinin kaçabilmek istediği durum, içsel dürtülerin denetiminden çıkması durumunda karşılaşacağı anksiyetedir.",
      },
      {
        type: "paragraph",
        text: "Aşağıda bazı fobi türlerine örnekler yer almaktadır;",
      },
      {
        type: "list",
        items: [
          "Özgül Fobi: Özgül bir nesne ya da durumla ilgili olarak belirgin bir korku ya da kaygı duyma. Örneğin; uçağa binme, yükseklik, hayvanlar, iğne, kan görme vs.",
          "Sosyal Fobi: Bireyin başkalarınca değerlendirilebilecek olduğu bir ya da birden çok toplumsal durumda belirgin bir korku ya da kaygı duyması.",
          "Agorafobi: Kişinin, kaçmanın güç olabileceğini ya da panik benzeri, yetersizleştiren, utanç veren bir durumda yardım alamayabileceğini düşündüğü için çeşitli ortamlardan (toplu taşıma, alışveriş merkezleri, tiyatrolar vs.) korkması ya da kaçınması.",
        ],
      },
    ],
  },
  {
    slug: "panik-bozukluk",
    label: "Panik Bozukluk",
    title: "Panik Bozukluk",
    description:
      "Panik bozukluk ve panik nöbetleri hakkında bilgilendirici içerik.",
    image: "/images/about-image.png",
    imageAlt: "Psikoterapi çalışma alanı",
    content: [
      {
        type: "paragraph",
        text: "Panik nöbetlerinin süresi dakikalarla sınırlı olsa da kişide katlanması zor bir ürküntünün deneyimlenmesine neden olmaktadır. Birden ve çok yoğun biçimde ortaya çıkan bu nöbetlerde çarpıntı, soluk alma güçlüğü, bayılma duygusu, baş dönmesi, yüz ve ellerde solukluk ve soğuma, göğüs ve midede ağırlık hissi ve ölüme yaklaşıyormuşçasına korkutucu bir duygu yaşanır.",
      },
      {
        type: "paragraph",
        text: "Yaşanılan bu duygular kişide panik yaratır ve genellikle bu durumda bir doktor çağrılır ya da hastanenin acil servislerine gidilir. Ancak gerekli ilaçlar verilip güven sağlayıcı telkinlerde bulunulduktan sonra nöbet geçiren kişide rahatlama olur.",
      },
      {
        type: "paragraph",
        text: "Nöbetlerin sıklığı günde birkaç kereden, birkaç ayda bire kadar değişebilir. Kişiyi uykusundan uyandıracak şiddette ya da hafif derecede yaşanabilir.",
      },
      {
        type: "paragraph",
        text: "Panik nöbetlerin tekrarlayıcı niteliği bir sonraki nöbetin nerede ve ne zaman tekrar geleceği konusunda bir beklenti anksiyetesinin sürekli yaşanmasına da neden olur. Bu nedenle kişi kaçamayacaklarını düşündükleri ortamlara girmekten uzak durabilmektedir. Bu durum da kişinin ilişkilerini, meslek hayatını, işlevselliğini etkileyebilmektedir.",
      },
      {
        type: "paragraph",
        text: "Panik nöbetlerinde yaşanılan kaygının genellikle bir içeriği yoktur, nöbetler bir neden olmaksızın ortaya çıkmaktadırlar.",
      },
      {
        type: "paragraph",
        text: "Bununla birlikte birçok kişide, panik nöbetleri ile psikolojik etmenler arasında bir ilişki olduğu ve bu kişilerin psikoterapiden olumlu şekilde faydalandıkları gözlemlenmiştir.",
      },
    ],
  },
  {
    slug: "obsesif-kompulsif-bozukluk",
    label: "Obsesif – Kompulsif Bozukluk",
    title: "Obsesif – Kompulsif Bozukluk",
    description:
      "Obsesif kompulsif bozukluk (takıntılar) hakkında bilgilendirici içerik.",
    image: "/images/merdiven.png",
    imageAlt: "Ofis binası giriş alanı",
    content: [
      {
        type: "paragraph",
        text: "Obsesyon; kişinin kendisine yabancı ve anlamsız gelen takıntılı, istemdışı düşünceler, kompulsiyonlar ise kaygıdan uzaklaşmak için yapılması gereken ritüelleştirilmiş eylemler şeklinde tanımlanmaktadır.",
      },
      {
        type: "paragraph",
        text: "Baer ve Jenike’ye göre (1986), obsesif kompulsif yaşayan kişilerin yakınmaları beş temel kategoride sınıflanmaktadır:",
      },
      {
        type: "list",
        items: [
          "Kontrol etme ritüelleri,",
          "Temizlikle ilgili ritüeller,",
          "Kompulsiyonların eşlik etmediği obsesif düşünceler,",
          "Obsesif yavaşlık,",
          "Karma kompulsiyonlar.",
        ],
      },
      {
        type: "paragraph",
        text: "Obsesif – kompulsif bozukluk kişinin çalışma ve toplumsal yaşamını önemli derecede olumsuz etkileyebilmektedir. Bu durumdan kişinin yakınında bulunanlar da etkilenebilmektedirler.",
      },
    ],
  },
  {
    slug: "travma",
    label: "Travma Sonrası Stres Bozukluğu",
    title: "Travma Sonrası Stres Bozukluğu",
    description:
      "Travma sonrası stres bozukluğu hakkında bilgilendirici içerik.",
    image: "/images/hero-banner.png",
    imageAlt: "Psikoterapi atmosferi",
    content: [
      {
        type: "paragraph",
        text: "Trafik kazaları, yangınlar, depremler, sel baskınları ve bedensel ya da cinsel saldırıya uğrama gibi olaylar şok tepkisi de denilen geçici bazı bozukluklara yol açabilmektedir. Ancak bazı kişilerde bu olaylar kalıcı ve sürekli bir ruhsal durum bozukluğuna neden olabilmektedir. Şok tepkisi belirtileri olayın şiddetine, türüne, beklenmedik bir anda ortaya çıkmasına ya da önceden hazırlıklı olunmasına ve olayı yaşayan bireyin kişilik yapısına bağlı olarak değişebilmektedir.",
      },
      {
        type: "paragraph",
        text: "İnsanlar böyle olaylarla karşılaştıklarında genellikle aşağıdaki dönemleri yaşarlar;",
      },
      {
        type: "list",
        items: [
          "Olayı izleyen ilk dakikalarda kişi şok dönemindedir; donakalmış, şaşkın ve sersemlemiş görünür. Yaralanma derecesinin farkında değildir, olay yerinde amaçsız bir biçimde dolaşır. Zaman, yer ve kişi yöneliminde bozukluklar, algılamada sapmalar, olaya ilişkin bellek kaybı ve kendinden geçme gibi durumlar da görülebilir. Olayın yarattığı yoğun anksiyetenin etkisiyle kişiliğin işlevlerini gereğince sürdürememesi sonucu oluşan şok dönemi, doğal bir savunma mekanizması olarak kişiyi olaya yabancılaştırır ve anksiyetenin tüm yoğunluğuyla yaşanmasını engeller.",
          "Şok belirtilerini izleyen dönemde olayı yaşayan kişi, edilgin ve telkine açıktır. Kurtarıcı ekibin ve yardıma gelenlerin önerilerini izler. Kendi dışındaki kaza kurbanlarının durumuyla ilgilenmek isterse de davranışları, en basit işlemleri bile yapamayacak derecede yetersiz kalmaktadır.",
          "Psikolojik dengesini kazanmaya başladığı toparlanma döneminde kişi sürekli kazadan söz eder, kurtarma işlemlerinin yetersizliğinden yakınır ve genel anksiyete belirtileri gösterir. Çoğu kez gergin ve ürkektir, dikkatini toplamakta ve uyumakta güçlük çeker, başından geçen olayı anımsatan kabuslar görür ve çabuk yorulur. Bu belirtiler normal bir insanda kısa sürede ortadan kalkar. Kazadan sürekli söz etme, sık sık düşlerinde canlandırma ya da benzer konulu kabuslar görme, kazanın etkisini yumuşatmak ve olaya uyum sağlayabilmek için doğal olarak işleyen bir onarım mekanizmasıdır.",
        ],
      },
      {
        type: "paragraph",
        text: "Travma sonrası stres bozukluklarında; haftalar, aylar ve bazen yıllar boyu sürebilir ve aşağıdaki belirtileri içerir:",
      },
      {
        type: "list",
        items: [
          "Geçirilen olayın istemdışı gelen düşüncelerde ve rüyalarda tekrar tekrar yeniden yaşanması,",
          "İnsanlara yaklaşmaktan kaçınma ya da onlara karşı tepkisiz kalma ve cinsel istek azalması,",
          "Uyku güçlükleri ya da gürültü vb. uyaranlara karşı sıçrama gibi abartılı tepkiler verme eğilimi.",
        ],
      },
    ],
  },
  {
    slug: "yeme-bozukluklari",
    label: "Beslenme ve Yeme Bozuklukları",
    title: "Beslenme ve Yeme Bozuklukları",
    description:
      "Anoreksiya nervoza ve bulimiya nervoza hakkında bilgilendirici içerik.",
    image: "/images/divan.png",
    imageAlt: "Psikoterapi seans odası",
    content: [
      {
        type: "heading",
        text: "Anoreksiya Nervoza",
      },
      {
        type: "paragraph",
        text: "Anoreksiya nervoza, şişmanlamaktan aşırı korkma sonucu zayıflamak için sürekli çaba göstermek olarak tanımlanabilmektedir. Kişinin beden ağırlığını kendi isteğiyle yaşı ve boyu için normal olan ağırlığın %85’inin altına indirmesi tanı konulması için önemli bir parametredir.",
      },
      {
        type: "paragraph",
        text: "Bruch’a göre (1973, 1978), zihnin yiyeceklerle ve beden ağırlığıyla sürekli meşgul tutulması derinlerdeki gizli bir benlik kavramı bozukluğunun gecikmiş bir işaretidir. Bu kişilerde beden, benlikten ayrı bir parça gibi yaşanır. Belirtilerin ortaya çıkması, kendini tedavi etmeye ve bedeniyle yaşadığı kopukluktan kurtularak onun denetimini ele geçirmeye yönelik bir girişimdir.",
      },
      {
        type: "paragraph",
        text: "Gabbard ise anoreksiya nervozanın psikodinamiğini aşağıdaki şekilde açıklamaktadır;",
      },
      {
        type: "list",
        items: [
          "Özgün ve biricik olma maksadıyla aşırı biçimde çabalama,",
          "Ebeveyn beklentileri sonucu gelişen yapay benlik duygusunu reddetme,",
          "Gerçek benliğin belirginleşmeye başlaması,",
          "Bedende somutlaşan içselleştirilmiş bazı imgelerin reddedilmesi,",
          "Aşırı isteklere karşı savunma geliştirme,",
          "Başkalarını çaresiz durumda bırakabilecek pozisyon alma.",
        ],
      },
      {
        type: "heading",
        text: "Bulimiya Nervoza",
      },
      {
        type: "paragraph",
        text: "Bulimiya nervoza, yeme krizleri ve bunu izleyen mideyi boşaltma çabalarıyla karakterizedir. Beden ağırlığı çoğu kez normale yakındır ancak aşırı kilo kaybı olan kişilere de rastlanmaktadır.",
      },
      {
        type: "paragraph",
        text: "Bruch (1987), anoreksiya ve bulimiya olan kişilerin birbirlerinden farklı özellikleri olduğunu belirtmektedir. Bruch’a göre, anoreksiya kişiler katı ve disiplinli olmalarına karşın bulimiya kişiler daha impulsif ve istikrarsızdır.",
      },
      {
        type: "paragraph",
        text: "Bulimiya nervozanın psikodinamik yönlerini inceleyen çoğu araştırmacı; hem çocukta hem de ebeveynde ayrılma ile ilgili yoğun güçlükler yaşandığını gözlemlemişlerdir.",
      },
    ],
  },
  {
    slug: "kisilik-bozukluklari",
    label: "Kişilik Bozuklukları",
    title: "Kişilik Bozuklukları",
    description:
      "Kişilik bozuklukları ve DSM-5 kümeleri hakkında bilgilendirici içerik.",
    image: "/images/merdiven.png",
    imageAlt: "Ofis binası giriş alanı",
    content: [
      {
        type: "paragraph",
        text: "Kişilik bozuklukları, kişilik özelliklerinin esneklikten yoksun bir nitelik kazanarak kişinin çevresiyle ilişkilerinde zorlanmasını ya da kendi içinde sıkıntılara neden olacak boyutlarda yaşamakta olmasını tanımlar.",
      },
      {
        type: "paragraph",
        text: "Kendisini ve çevresini algılamasında ve ilişkisinde katı bir değişmezlik gösteren bu özellikler nedeniyle kişi, yaşadığı durumlara uygun tepkiler vermek yerine her türlü duruma birbirinin benzeri tepkiler verir.",
      },
      {
        type: "paragraph",
        text: "Bu özellikler çoğu kez ergenlik döneminde, bazen de yetişkinliğin ilk yıllarında ortaya çıkar ve giderek belirginleşir.",
      },
      {
        type: "paragraph",
        text: "Kişilik bozukluğu gösteren insanlar genellikle bu özelliklerini doğrudan şikayet konusu etmezlerse de yaşamlarında etkin olamamaktan ya da ilişkilerindeki aksaklıklardan dolayı rahatsızdırlar.",
      },
      {
        type: "paragraph",
        text: "DSM-5 kişilik bozukluklarını üç kümede toplamıştır;",
      },
      {
        type: "heading",
        text: "A Kümesi",
      },
      {
        type: "paragraph",
        text: "Başkalarınca yadırganabilecek ve alışılmışın dışında davranışlarla karakterize kişiliklerin bulunduğu kümedir.",
      },
      {
        type: "list",
        items: [
          "Paranoid Kişilik Bozukluğu",
          "Şizoid Kişilik Bozukluğu",
          "Şizotipal Kişilik Bozukluğu",
        ],
      },
      {
        type: "heading",
        text: "B Kümesi",
      },
      {
        type: "paragraph",
        text: "Dramatik, duygusal ya da iniş çıkışlı davranışlarla karakterize kişiliklerin bulunduğu kümedir.",
      },
      {
        type: "list",
        items: [
          "Antisosyal Kişilik Bozukluğu",
          "Histrionik Kişilik Bozukluğu",
          "Narsisistik Kişilik Bozukluğu",
          "Sınırda (Borderline) Kişilik Bozukluğu",
        ],
      },
      {
        type: "heading",
        text: "C Kümesi",
      },
      {
        type: "paragraph",
        text: "Anksiyete ve korkularla belirlenen özelliklerin yoğun olduğu kişiliklerin bulunduğu kümedir.",
      },
      {
        type: "list",
        items: [
          "Çekingen Kişilik Bozukluğu",
          "Obsesif-Kompulsif (Takıntılı-Zorlantılı) Kişilik Bozukluğu",
          "Bağımlı Kişilik Bozukluğu",
        ],
      },
    ],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}
