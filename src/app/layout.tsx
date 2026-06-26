import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowPilot | Ekip İş Akışı SaaS",
  description:
    "FlowPilot, ekiplerin görevleri planlamasını, öncelikleri takip etmesini ve işleri tek akışta bitirmesini sağlayan demo SaaS landing sayfasıdır.",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "FlowPilot | Ekip işlerini tek akışta yönetin",
    description:
      "Görev, takvim, sprint ve raporları tek panelde buluşturan modern ekip üretkenliği platformu.",
    type: "website",
    locale: "tr_TR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white text-navy antialiased">{children}</body>
    </html>
  );
}
