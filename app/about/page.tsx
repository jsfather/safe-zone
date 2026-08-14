import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "داستان بوتیک و فروشگاه آنلاین سیف زون.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
          <p className="text-sm font-medium text-accent">درباره سیف زون</p>
          <h1 className="mt-5 text-5xl leading-[1.05] font-bold tracking-[-0.05em] text-balance md:text-8xl">
            جایی برای ساده‌تر پوشیدن.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 font-medium text-ink/50 md:text-xl">
            سیف زون از یک بوتیک فیزیکی شروع شد؛ با لباس‌هایی که راحت‌اند، دقیق می‌ایستند و هر روز
            دوباره پوشیده می‌شوند.
          </p>
        </section>

        <div className="mx-2 overflow-hidden rounded-[28px] bg-sand md:mx-4 md:rounded-[40px]">
          <Image
            src="/safe-zone-hero-wide.png"
            alt="مدل‌های ثابت کالکشن سیف زون در فضای معماری مینیمال"
            width={1942}
            height={809}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 md:grid-cols-2 md:gap-24 md:py-36">
          <h2 className="text-4xl leading-tight font-medium tracking-tight md:text-6xl">
            واقعی شروع شد.
            <br />
            آنلاین ادامه پیدا کرد.
          </h2>
          <div className="space-y-6 text-lg leading-9 text-ink/55">
            <p>
              ما لباس را فقط در یک عکس نمی‌بینیم. فرم، حرکت و حسی که روی تن دارد برایمان مهم است.
              برای همین فروشگاه آنلاین سیف زون ادامه‌ی همان تجربه‌ی حضوری‌ست، نه جایگزین آن.
            </p>
            <p>
              کالکشن‌ها کوچک و متمرکز می‌مانند تا هر قطعه دلیل روشنی برای بودن داشته باشد؛ رنگ‌های
              محدود، فرم‌های قابل ترکیب و جزئیاتی که عمر استایل را بیشتر می‌کنند.
            </p>
          </div>
        </section>

        <section className="bg-ink px-6 py-24 text-center text-white md:py-36">
          <p className="text-sm font-medium text-[#ff6935]">کالکشن فعلی</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl leading-tight font-medium tracking-tight text-balance md:text-6xl">
            انتخاب کمتر. استفاده بیشتر.
          </h2>
          <Link
            href="/shop"
            className="mt-8 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-medium"
          >
            رفتن به فروشگاه
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
