"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  CalendarDays,
  Check,
  ChevronDown,
  CirclePlay,
  Github,
  Instagram,
  KanbanSquare,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  MessageSquareText,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#features", label: "Özellikler" },
  { href: "#workflow", label: "Nasıl Çalışır" },
  { href: "#pricing", label: "Fiyatlar" },
  { href: "#testimonials", label: "Yorumlar" },
  { href: "#faq", label: "SSS" }
];

const logos = ["NOVA", "Metrika", "Ardent", "Luma", "Koru", "Atlas"];

const stats = [
  { value: "12k+", label: "aktif görev" },
  { value: "%34", label: "daha hızlı teslim" },
  { value: "4.8/5", label: "ekip memnuniyeti" }
];

const features = [
  {
    icon: KanbanSquare,
    title: "Akıllı görev panoları",
    text: "Sprint, müşteri işi ve günlük operasyonları sürükle-bırak panolarda aynı düzende takip edin."
  },
  {
    icon: CalendarDays,
    title: "Takvim ve teslim planı",
    text: "Son tarihleri, ekip kapasitesini ve kritik bağımlılıkları haftalık görünümde netleştirin."
  },
  {
    icon: BellRing,
    title: "Öncelik uyarıları",
    text: "Geciken işler, bekleyen onaylar ve riskli teslimler için doğru kişiye doğru anda bildirim gönderin."
  },
  {
    icon: BarChart3,
    title: "Canlı ilerleme raporu",
    text: "Tamamlanan iş, açık blokaj ve ekip yükünü tek ekranda ölçülebilir rapora dönüştürün."
  },
  {
    icon: MessageSquareText,
    title: "Bağlamlı yorumlar",
    text: "Dosya, görev ve karar notlarını aynı kart üzerinde tutarak iletişim dağınıklığını azaltın."
  },
  {
    icon: LockKeyhole,
    title: "Rol bazlı erişim",
    text: "Müşteri, ekip lideri ve operasyon rolleri için görünürlük ve işlem izinlerini ayrı yönetin."
  }
];

const steps = [
  {
    title: "Alanınızı kurun",
    text: "Ekipleri, iş tiplerini ve teslim ritmini seçin. FlowPilot ilk pano taslağını otomatik hazırlar."
  },
  {
    title: "İşleri akışa alın",
    text: "Görevleri takvim, öncelik ve sorumlu kişiyle bağlayın. Herkes sıradaki işi tek ekranda görür."
  },
  {
    title: "Sonucu ölçün",
    text: "Haftalık rapor, blokaj listesi ve teslim trendleriyle iyileştirilecek noktaları netleştirin."
  }
];

const plans = [
  {
    name: "Başlangıç",
    price: "₺390",
    text: "Küçük ekipler ve düzenli görev takibi için.",
    features: ["5 kullanıcı", "3 aktif proje", "Temel pano ve takvim", "E-posta bildirimleri"],
    popular: false
  },
  {
    name: "Büyüme",
    price: "₺890",
    text: "Ajanslar ve hızlı büyüyen operasyon ekipleri için.",
    features: ["25 kullanıcı", "Sınırsız proje", "Rapor paneli", "Müşteri görünümü", "Öncelik otomasyonları"],
    popular: true
  },
  {
    name: "Kurumsal",
    price: "Özel",
    text: "Çok ekipli şirketler ve özel entegrasyon ihtiyaçları için.",
    features: ["Sınırsız kullanıcı", "SSO ve rol yönetimi", "Özel eğitim", "Öncelikli destek"],
    popular: false
  }
];

const testimonials = [
  {
    quote:
      "Toplantılarda artık kim neyi bekliyor diye sormuyoruz. FlowPilot haftalık teslimleri görünür yaptı.",
    name: "Derya Aksoy",
    role: "Operasyon Lideri, LumaCare"
  },
  {
    quote:
      "Müşteri onaylarını ve tasarım görevlerini aynı akışa alınca revizyon süremiz ciddi şekilde azaldı.",
    name: "Mert Kaya",
    role: "Ajans Kurucusu, PixelForge"
  },
  {
    quote:
      "Rapor ekranı sayesinde ekip yükünü daha erken görüyoruz. Öncelik kararları artık daha sakin alınıyor.",
    name: "Selin Demir",
    role: "Ürün Müdürü, ArdentSoft"
  }
];

const faqs = [
  {
    question: "FlowPilot gerçek bir ürün mü?",
    answer:
      "Bu çalışma portföy ve gig sunumu için hazırlanmış profesyonel bir demo landing sayfasıdır. İçerik ve arayüz gerçek SaaS hissi verecek şekilde tasarlanmıştır."
  },
  {
    question: "Demo form ve newsletter çalışıyor mu?",
    answer:
      "Dış servise veri göndermeden sayfa içinde başarı durumu gösterir. Gerçek projede CRM, e-posta veya ödeme sistemiyle bağlanabilir."
  },
  {
    question: "Statik export ile hızlı yayınlanır mı?",
    answer:
      "Evet. Sayfa Next.js statik export ile üretilir ve Cloudflare üzerinde hızlı, düşük bakım gerektiren bir yayın modeline uygundur."
  },
  {
    question: "Tasarım mobilde de aynı kaliteyi korur mu?",
    answer:
      "Navbar, fiyat kartları, SSS ve ürün mockup alanı mobil öncelikli kırılımlarla tasarlandı; dar ekranlarda içerik okunabilir kalır."
  }
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="FlowPilot anasayfa">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue text-base font-black text-white shadow-glow">
        F
      </span>
      <span className={cn("text-lg font-bold", inverse ? "text-white" : "text-navy")}>FlowPilot</span>
    </a>
  );
}

function Button({
  href,
  children,
  variant = "primary",
  icon = true
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  icon?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" &&
          "bg-blue text-white shadow-glow hover:-translate-y-0.5 hover:bg-navy focus-visible:outline-blue",
        variant === "secondary" &&
          "border border-line bg-white text-navy hover:-translate-y-0.5 hover:border-blue hover:text-blue focus-visible:outline-blue",
        variant === "dark" &&
          "bg-navy text-white hover:-translate-y-0.5 hover:bg-blue focus-visible:outline-navy"
      )}
    >
      {children}
      {icon ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
    </a>
  );
}

function ProductMockup() {
  const tasks = [
    ["Teklif sayfası", "Tasarım", "Bugün"],
    ["CRM bağlantısı", "Geliştirme", "Yarın"],
    ["Kampanya raporu", "Analitik", "Cuma"]
  ];

  return (
    <div className="relative rounded-lg border border-white/60 bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div>
          <p className="text-sm font-bold text-navy">FlowPilot Workspace</p>
          <p className="mt-1 text-xs text-slateText">Haftalık operasyon görünümü</p>
        </div>
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-300" />
          <span className="h-3 w-3 rounded-full bg-amber" />
          <span className="h-3 w-3 rounded-full bg-emerald" />
        </div>
      </div>
      <div className="grid gap-4 pt-4 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-lg bg-cloud p-4">
          <div className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-slateText shadow-sm">
            <Search aria-hidden="true" className="h-4 w-4" />
            Görev ara
          </div>
          <div className="mt-4 space-y-2 text-sm">
            {["Sprint pano", "Takvim", "Raporlar", "Müşteri onayı"].map((item, index) => (
              <div
                key={item}
                className={cn(
                  "rounded-md px-3 py-2 font-semibold",
                  index === 0 ? "bg-blue text-white" : "text-slateText"
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-line bg-white p-4">
                <p className="text-2xl font-black text-navy">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-slateText">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {["Planlandı", "Devam ediyor", "Bitti"].map((column, columnIndex) => (
              <div key={column} className="rounded-lg border border-line bg-cloud p-3">
                <p className="text-sm font-bold text-navy">{column}</p>
                <div className="mt-3 space-y-3">
                  {tasks.slice(0, columnIndex + 1).map((task) => (
                    <div key={`${column}-${task[0]}`} className="rounded-md bg-white p-3 shadow-sm">
                      <p className="text-sm font-bold text-navy">{task[0]}</p>
                      <div className="mt-3 flex items-center justify-between text-xs text-slateText">
                        <span>{task[1]}</span>
                        <span>{task[2]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Accordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const active = open === index;
        return (
          <div key={faq.question} className="rounded-lg border border-line bg-white shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-navy"
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
            >
              {faq.question}
              <ChevronDown
                aria-hidden="true"
                className={cn("h-5 w-5 flex-none text-blue transition", active && "rotate-180")}
              />
            </button>
            {active ? <p className="px-5 pb-5 text-sm leading-7 text-slateText">{faq.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-5 flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        E-posta adresi
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="is@ornek.com"
        className="min-h-11 flex-1 rounded-md border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-sky focus:ring-4 focus:ring-sky/15"
      />
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-navy transition hover:bg-sky"
      >
        Kaydol
      </button>
      {sent ? <p className="text-sm font-medium text-sky sm:self-center">Kaydınız alındı.</p> : null}
    </form>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/[0.92] backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slateText transition hover:bg-cloud hover:text-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="#pricing">Ücretsiz Dene</Button>
        </div>
        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy lg:hidden"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-white px-5 py-4 shadow-soft lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobil menü">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-slateText hover:bg-cloud hover:text-blue"
              >
                {item.label}
              </a>
            ))}
            <Button href="#pricing">Ücretsiz Dene</Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="soft-grid relative overflow-hidden bg-gradient-to-b from-white via-white to-cloud">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-20">
            <div className="animate-fade-up">
              <h1 className="max-w-4xl text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">
                Ekip işlerini tek akışta planlayın, takip edin, bitirin
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slateText">
                FlowPilot; görev yönetimi, takvim, müşteri onayı ve haftalık raporu aynı panelde
                buluşturan modern ekip iş akışı platformudur.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#pricing">Ücretsiz Dene</Button>
                <Button href="#demo" variant="secondary" icon={false}>
                  <CirclePlay aria-hidden="true" className="h-4 w-4" />
                  Demoyu İzle
                </Button>
              </div>
              <div className="mt-8 flex flex-col gap-3 text-sm font-semibold text-slateText sm:flex-row sm:items-center">
                <span className="flex items-center gap-2">
                  <Check aria-hidden="true" className="h-5 w-5 text-emerald" />
                  Kredi kartı gerekmez
                </span>
                <span className="flex items-center gap-2">
                  <Check aria-hidden="true" className="h-5 w-5 text-emerald" />
                  14 gün ücretsiz deneme
                </span>
              </div>
            </div>
            <div id="demo" className="animate-fade-up lg:pl-4" style={{ animationDelay: "120ms" }}>
              <ProductMockup />
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white py-8">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-bold text-slateText">Operasyon ekiplerinin sunumlarında güven veren yapı</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {logos.map((logo) => (
                  <div key={logo} className="rounded-md border border-line bg-cloud px-4 py-3 text-center text-sm font-black text-navy/65">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-line rounded-lg border border-line bg-cloud">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 text-center">
                  <p className="text-2xl font-black text-navy">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-slateText">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black text-navy sm:text-4xl">Dağınık işleri tek işletim sistemine taşıyın</h2>
              <p className="mt-4 text-lg leading-8 text-slateText">
                FlowPilot, ekiplerin tekrar eden koordinasyon yükünü azaltmak için pano, bildirim,
                rapor ve erişim katmanını birlikte sunar.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className="reveal rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue/40 hover:shadow-soft"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue/10 text-blue">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-black text-navy">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slateText">{feature.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="workflow" className="section-pad bg-cloud">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-black text-navy sm:text-4xl">Üç adımda daha görünür operasyon</h2>
                <p className="mt-4 text-lg leading-8 text-slateText">
                  Kurulum hızlıdır; asıl değer ekiplerin her hafta aynı netlikte ilerlemesidir.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {steps.map((step, index) => (
                  <article key={step.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <h3 className="mt-5 text-xl font-black text-navy">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slateText">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black text-navy sm:text-4xl">Ekibinizin ritmine göre fiyatlandırma</h2>
              <p className="mt-4 text-lg leading-8 text-slateText">
                Küçük ekiplerden çok ekipli operasyonlara kadar sade, anlaşılır ve demo sunumuna hazır paketler.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={cn(
                    "relative rounded-lg border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft",
                    plan.popular ? "border-blue shadow-glow" : "border-line"
                  )}
                >
                  {plan.popular ? (
                    <span className="absolute right-5 top-5 rounded-md bg-emerald px-3 py-1 text-xs font-black text-white">
                      Popüler
                    </span>
                  ) : null}
                  <h3 className="text-2xl font-black text-navy">{plan.name}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-slateText">{plan.text}</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-4xl font-black text-navy">{plan.price}</span>
                    {plan.price !== "Özel" ? <span className="pb-1 text-sm font-medium text-slateText">/ ay</span> : null}
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slateText">
                        <Check aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-emerald" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="#newsletter" variant={plan.popular ? "primary" : "secondary"}>
                      Paketi Seç
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-pad bg-navy text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-black sm:text-4xl">Ekipler daha az takip, daha çok teslim istiyor</h2>
                <p className="mt-4 text-lg leading-8 text-white/70">
                  Yorumlar demo amaçlıdır; gerçekçi müşteri anlatımı ve sosyal kanıt bölümü için hazırlandı.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {testimonials.map((item) => (
                  <article key={item.name} className="rounded-lg border border-white/10 bg-white/[0.08] p-6">
                    <Sparkles aria-hidden="true" className="h-6 w-6 text-sky" />
                    <p className="mt-5 text-sm leading-7 text-white/78">“{item.quote}”</p>
                    <div className="mt-6">
                      <p className="font-black text-white">{item.name}</p>
                      <p className="mt-1 text-xs text-white/58">{item.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-pad bg-cloud">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <h2 className="text-3xl font-black text-navy sm:text-4xl">Sık sorulan sorular</h2>
              <p className="mt-4 text-lg leading-8 text-slateText">
                Demo müşteriye gösterilirken teknik kapsam, yayın modeli ve etkileşim beklentisi net olsun.
              </p>
            </div>
            <Accordion />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-8 rounded-lg bg-gradient-to-r from-blue to-emerald p-7 text-white shadow-glow lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
              <div>
                <h2 className="text-3xl font-black">Ekip akışınızı bu hafta netleştirin.</h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
                  FlowPilot demo landing, SaaS fikrini profesyonel bir satış sayfası gibi sunmak için hazırlandı.
                </p>
              </div>
              <Button href="#pricing" variant="dark">
                Ücretsiz Başla
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer id="newsletter" className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.7fr_1fr] lg:px-8">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              FlowPilot, görev ve ekip operasyonlarını tek akışta göstermek için tasarlanmış modern
              SaaS demo landing çalışmasıdır.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Github, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Sosyal medya"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/12 text-white/70 transition hover:border-sky hover:text-sky"
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer linkleri">
            <h2 className="text-sm font-black">Linkler</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div className="flex items-center gap-2">
              <Mail aria-hidden="true" className="h-5 w-5 text-sky" />
              <h2 className="text-sm font-black">Ürün notlarını alın</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Haftalık verimlilik ipuçları ve ürün güncellemeleri için demo newsletter alanı.
            </p>
            <Newsletter />
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© 2026 FlowPilot. Demo SaaS landing page.</p>
            <p>Next.js 14, TypeScript, Tailwind CSS ve Cloudflare ile yayınlandı.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
