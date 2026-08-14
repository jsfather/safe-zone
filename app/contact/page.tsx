import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "راه‌های ارتباط با بوتیک سیف زون.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-[1100px] px-5 py-20 md:px-10 md:py-28">
        <p className="text-sm font-medium text-accent">تماس با سیف زون</p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-[1.05] font-bold tracking-[-0.045em] text-balance md:text-7xl">
          برای انتخاب بهتر، کنار تو هستیم.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-ink/50">
          برای پرسش درباره محصول، سایز یا تحویل حضوری می‌توانی از مسیرهای زیر استفاده کنی. اطلاعات
          نهایی تماس و نشانی بوتیک در زمان راه‌اندازی فروش ثبت می‌شوند.
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <article className="rounded-[28px] bg-white p-7 md:p-8">
            <p className="text-sm text-accent">خرید آنلاین</p>
            <h2 className="mt-4 text-2xl font-medium">محصول و سفارش</h2>
            <p className="mt-3 leading-8 text-ink/45">
              انتخاب رنگ، سایز و روش تحویل از صفحه هر محصول.
            </p>
            <Link href="/shop" className="mt-7 inline-flex text-sm font-medium">
              فروشگاه ←
            </Link>
          </article>
          <article className="rounded-[28px] bg-white p-7 md:p-8">
            <p className="text-sm text-accent">انتخاب سایز</p>
            <h2 className="mt-4 text-2xl font-medium">اندازه و فرم</h2>
            <p className="mt-3 leading-8 text-ink/45">
              جدول اندازه و توضیح فرم‌های آزاد و اورسایز.
            </p>
            <Link href="/size-guide" className="mt-7 inline-flex text-sm font-medium">
              راهنمای سایز ←
            </Link>
          </article>
          <article className="rounded-[28px] bg-ink p-7 text-white md:p-8">
            <p className="text-sm text-[#ff6935]">بوتیک</p>
            <h2 className="mt-4 text-2xl font-medium">مراجعه حضوری</h2>
            <p className="mt-3 leading-8 text-white/45">
              نشانی، ساعت کاری و شماره تماس پس از تأیید اطلاعات فروشگاه اینجا قرار می‌گیرند.
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
