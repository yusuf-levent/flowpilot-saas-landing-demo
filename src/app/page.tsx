"use client";

/* eslint-disable @next/next/no-img-element */

import type { ReactNode } from "react";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  CirclePlay,
  Github,
  Instagram,
  KanbanSquare,
  Linkedin,
  Mail,
  Menu,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#features", label: "Özellikler" },
  { href: "#workflow", label: "Nasıl Çalışır" },
  { href: "#pricing", label: "Fiyatlar" },
  { href: "#testimonials", label: "Yorumlar" },
  { href: "#faq", label: "SSS" }
];

const heroImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=85";
const teamImage =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=85";

const features = [
  {
    icon: KanbanSquare,
    title: "Net görev akışı",
    text: "Planlanan, devam eden ve biten işleri tek ekranda sade bir pano düzeniyle takip edin."
  },
  {
    icon: CalendarDays,
    title: "Teslim takvimi",
    text: "Haftalık kapasiteyi, kritik tarihleri ve gecikme risklerini görsel takvimde netleştirin."
  },
  {
    icon: BarChart3,
    title: "Yönetici raporu",
    text: "Ekip yükü, tamamlanan iş ve bekleyen onayları toplantıya hazır bir özetle görün."
  },
  {
    icon: MessageSquareText,
    title: "Bağlamlı iletişim",
    text: "Karar notlarını, dosyaları ve yorumları görev kartlarının içinde tutun."
  },
  {
    icon: ShieldCheck,
    title: "Rol bazlı erişim",
    text: "Müşteri, ekip lideri ve yönetici görünümünü ayrı izinlerle düzenleyin."
  },
  {
    icon: Sparkles,
    title: "Akıllı öncelik",
    text: "Geciken ve etkisi yüksek işleri öne çıkaran sade uyarılarla odağı koruyun."
  }
];

const steps = [
  ["Alanınızı kurun", "Ekipleri ve iş tiplerini seçin; FlowPilot ilk çalışma alanını hazırlar."],
  ["İşleri akışa alın", "Görevleri sorumlu, tarih ve öncelikle bağlayıp tek ritimde ilerleyin."],
  ["Sonucu görün", "Haftalık özetlerle blokajı, teslim hızını ve ekip yükünü takip edin."]
];

const plans = [
  {
    name: "Başlangıç",
    price: "₺390",
    text: "Küçük ekipler için sade görev takibi.",
    items: ["5 kullanıcı", "3 proje", "Pano ve takvim", "E-posta bildirimleri"]
  },
  {
    name: "Büyüme",
    price: "₺890",
    text: "Ajanslar ve operasyon ekipleri için.",
    popular: true,
    items: ["25 kullanıcı", "Sınırsız proje", "Rapor paneli", "Müşteri görünümü", "Öncelik otomasyonları"]
  },
  {
    name: "Kurumsal",
    price: "Özel",
    text: "Çok ekipli şirketler için özel kurulum.",
    items: ["Sınırsız kullanıcı", "SSO", "Özel eğitim", "Öncelikli destek"]
  }
];

const testimonials = [
  ["Derya Aksoy", "Operasyon Lideri", "Haftalık teslimler artık tek ekranda. Toplantılar çok daha kısa ve net geçiyor."],
  ["Mert Kaya", "Ajans Kurucusu", "Müşteri onayları ve tasarım görevlerini aynı akışa alınca revizyon süremiz azaldı."],
  ["Selin Demir", "Ürün Müdürü", "Rapor ekranı ekip yükünü erkenden gösteriyor. Öncelik kararları daha sakin alınıyor."]
];

const faqs = [
  ["FlowPilot gerçek bir ürün mü?", "Bu çalışma portföy ve gig sunumu için hazırlanmış profesyonel bir demo landing sayfasıdır."],
  ["Demo form ve newsletter çalışıyor mu?", "Dış servise veri göndermeden sayfa içinde başarı durumu gösterir. Gerçek projede CRM veya e-posta sistemiyle bağlanabilir."],
  ["Statik export ile hızlı yayınlanır mı?", "Evet. Next.js statik export ile üretilir ve Cloudflare üzerinde hızlı bir yayın modeline uygundur."],
  ["Tasarım mobilde de iyi görünür mü?", "Navbar, hero, fiyat kartları ve SSS alanı mobil öncelikli kırılımlarla düzenlendi."]
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
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  icon?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" && "bg-blue text-white shadow-glow hover:-translate-y-0.5 hover:bg-navy focus-visible:outline-blue",
        variant === "secondary" && "border border-line bg-white text-navy hover:-translate-y-0.5 hover:border-blue hover:text-blue focus-visible:outline-blue",
        variant === "dark" && "bg-navy text-white hover:-translate-y-0.5 hover:bg-blue focus-visible:outline-white"
      )}
    >
      {children}
      {icon ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
    </a>
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
            <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-semibold text-slateText transition hover:bg-cloud hover:text-blue">
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
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-semibold text-slateText hover:bg-cloud hover:text-blue">
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

function ProductMockup() {
  return (
    <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/70 bg-white/[0.94] p-4 shadow-soft backdrop-blur sm:bottom-6 sm:left-auto sm:w-[430px]">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div>
          <p className="text-sm font-black text-navy">Haftalık Akış</p>
          <p className="mt-1 text-xs text-slateText">12 görev, 3 kritik teslim</p>
        </div>
        <span className="rounded-md bg-emerald/10 px-3 py-1 text-xs font-black text-emerald">Canlı</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          ["Plan", "6"],
          ["Devam", "4"],
          ["Bitti", "2"]
        ].map(([label, count], index) => (
          <div key={label} className="rounded-md bg-cloud p-3">
            <p className="text-xs font-bold text-slateText">{label}</p>
            <p className="mt-2 text-2xl font-black text-navy">{count}</p>
            <div className={cn("mt-3 h-1.5 rounded-full", index === 0 ? "bg-blue" : index === 1 ? "bg-amber" : "bg-emerald")} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Accordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map(([question, answer], index) => {
        const active = open === index;
        return (
          <div key={question} className="rounded-lg border border-line bg-white shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-black text-navy"
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
            >
              {question}
              <ChevronDown aria-hidden="true" className={cn("h-5 w-5 flex-none text-blue transition", active && "rotate-180")} />
            </button>
            {active ? <p className="px-5 pb-5 text-sm leading-7 text-slateText">{answer}</p> : null}
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
      <button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-black text-navy transition hover:bg-sky">
        Kaydol
      </button>
      {sent ? <p className="text-sm font-medium text-sky sm:self-center">Kaydınız alındı.</p> : null}
    </form>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-cloud to-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-14 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-20">
            <div className="animate-fade-up">
              <h1 className="max-w-4xl text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">
                Ekip işlerini tek akışta planlayın, takip edin, bitirin
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slateText">
                FlowPilot; görev, takvim, müşteri onayı ve haftalık raporu tek panelde birleştiren modern ekip iş akışı platformudur.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#pricing">Ücretsiz Dene</Button>
                <Button href="#features" variant="secondary" icon={false}>
                  <CirclePlay aria-hidden="true" className="h-4 w-4" />
                  Demoyu İzle
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-slateText">
                {["14 gün ücretsiz", "Kredi kartı gerekmez", "5 dakikada kurulum"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check aria-hidden="true" className="h-5 w-5 text-emerald" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[430px] animate-fade-up" style={{ animationDelay: "120ms" }}>
              <img src={heroImage} alt="FlowPilot kullanan ekip toplantısı" className="h-[430px] w-full rounded-lg object-cover shadow-soft lg:h-[560px]" />
              <ProductMockup />
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-6 lg:px-8">
            <div className="grid gap-4 rounded-lg border border-line bg-white p-4 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
              <p className="text-sm font-black text-slateText">Operasyon ekipleri için sade, görsel ve toplantıya hazır akış</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  ["12k+", "aktif görev"],
                  ["%34", "hızlı teslim"],
                  ["4.8/5", "memnuniyet"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-md bg-cloud px-4 py-3">
                    <p className="text-xl font-black text-navy">{value}</p>
                    <p className="text-xs text-slateText">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-black text-navy sm:text-4xl">Daha az ekran, daha net iş takibi</h2>
                <p className="mt-4 text-lg leading-8 text-slateText">
                  Kart kalabalığı yerine ekiplerin gerçekten baktığı üç alanı öne çıkarır: görev akışı, teslim tarihi ve karar notu.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {features.slice(0, 4).map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <article key={feature.title} className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                        <Icon aria-hidden="true" className="h-6 w-6 text-blue" />
                        <h3 className="mt-4 text-lg font-black text-navy">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slateText">{feature.text}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
              <div className="relative">
                <img src={teamImage} alt="Planlama yapan modern ekip" className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft" />
                <div className="absolute -bottom-6 left-6 right-6 rounded-lg bg-navy p-5 text-white shadow-soft">
                  <p className="text-sm font-black">Gün sonu özeti</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">3 teslim tamamlandı, 1 blokaj çözüldü, yarın için 2 kritik görev kaldı.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="section-pad bg-cloud">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black text-navy sm:text-4xl">Üç adımda akışı sadeleştirin</h2>
              <p className="mt-4 text-lg leading-8 text-slateText">Kurulum hızlı, görünüm net, raporlar toplantıya hazır.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map(([title, text], index) => (
                <article key={title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-blue text-sm font-black text-white">{index + 1}</span>
                  <h3 className="mt-5 text-xl font-black text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slateText">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black text-navy sm:text-4xl">Sade fiyatlandırma</h2>
              <p className="mt-4 text-lg leading-8 text-slateText">Sunumda hızlı anlaşılır, müşterinin kafasını yormayan üç paket.</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <article key={plan.name} className={cn("relative rounded-lg border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft", plan.popular ? "border-blue shadow-glow" : "border-line")}>
                  {plan.popular ? <span className="absolute right-5 top-5 rounded-md bg-emerald px-3 py-1 text-xs font-black text-white">Popüler</span> : null}
                  <h3 className="text-2xl font-black text-navy">{plan.name}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-slateText">{plan.text}</p>
                  <p className="mt-6 text-4xl font-black text-navy">{plan.price}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slateText">
                        <Check aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-emerald" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="#newsletter" variant={plan.popular ? "primary" : "secondary"}>Paketi Seç</Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-pad bg-navy text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-black sm:text-4xl">Daha görsel, daha hızlı karar</h2>
                <p className="mt-4 text-lg leading-8 text-white/70">Demo yorumlar, SaaS landing sayfasının sosyal kanıt alanını gerçekçi göstermek için hazırlandı.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {testimonials.map(([name, role, quote]) => (
                  <article key={name} className="rounded-lg border border-white/10 bg-white/[0.08] p-6">
                    <p className="text-sm leading-7 text-white/78">“{quote}”</p>
                    <p className="mt-6 font-black text-white">{name}</p>
                    <p className="mt-1 text-xs text-white/58">{role}</p>
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
              <p className="mt-4 text-lg leading-8 text-slateText">Tek sayfa demo için teknik kapsam ve yayın modeli net dursun.</p>
            </div>
            <Accordion />
          </div>
        </section>
      </main>

      <footer id="newsletter" className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.7fr_1fr] lg:px-8">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">FlowPilot, ekip operasyonlarını sade ve görsel bir akışta sunan modern SaaS demo landing çalışmasıdır.</p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Github, Instagram].map((Icon, index) => (
                <a key={index} href="#" aria-label="Sosyal medya" className="flex h-10 w-10 items-center justify-center rounded-md border border-white/12 text-white/70 transition hover:border-sky hover:text-sky">
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
                  <a href={item.href} className="transition hover:text-white">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div className="flex items-center gap-2">
              <Mail aria-hidden="true" className="h-5 w-5 text-sky" />
              <h2 className="text-sm font-black">Ürün notlarını alın</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-white/70">Haftalık verimlilik ipuçları ve ürün güncellemeleri için demo newsletter alanı.</p>
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
