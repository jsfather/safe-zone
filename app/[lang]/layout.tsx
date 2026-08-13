import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "./translations";
import "../globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safezone.shop"),
  title: {
    default: "سیف زون | پوشیدنی‌های روزمره، دوباره تعریف‌شده",
    template: "%s | Safe Zone",
  },
  description:
    "فروشگاه آنلاین سیف زون؛ تی‌شرت، شلوار و لباس‌های روزمره با طراحی ماندگار و انتخاب دقیق.",
  openGraph: {
    title: "SAFE ZONE — YOUR EVERYDAY, REFRAMED",
    description: "Independent essentials. Made to be lived in.",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Safe Zone summer collection with four Iranian models",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAFE ZONE — YOUR EVERYDAY, REFRAMED",
    description: "Independent essentials. Made to be lived in.",
    images: ["/og.png"],
  },
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      dir={lang === "fa" ? "rtl" : "ltr"}
      className={`${vazirmatn.variable} ${geist.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
