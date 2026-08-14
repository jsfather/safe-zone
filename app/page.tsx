import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const selectedLooks = [
  {
    number: "۰۱",
    title: "سفید و مشکی",
    description: "یک ترکیب بی‌زمان برای هر روز",
    image: "/ivory-tee-black-trousers.png",
    alt: "استایل تی‌شرت سفید و شلوار مشکی سیف زون",
    position: "object-[50%_34%]",
    href: "/shop/essential-oversized-tee",
  },
  {
    number: "۰۲",
    title: "خاکی و مشکی",
    description: "رنگ‌های آرام، فرم‌های آزاد",
    image: "/stone-tee-black-trousers.png",
    alt: "استایل تی‌شرت خاکی و شلوار مشکی سیف زون",
    position: "object-[50%_28%]",
    href: "/shop/essential-oversized-tee",
  },
  {
    number: "۰۳",
    title: "تمام کرم",
    description: "سبک، راحت و بدون پیچیدگی",
    image: "/sand-tee-look.png",
    alt: "استایل تمام کرم سیف زون",
    position: "object-[50%_26%]",
    href: "/shop/daily-wide-trousers",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />

      <main>
        <section id="top" aria-labelledby="hero-title" className="pt-10 md:pt-14">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-medium text-accent">کالکشن روزمره</p>
            <h1
              id="hero-title"
              className="mt-4 text-[clamp(3.5rem,7.2vw,7rem)] leading-[0.92] font-bold tracking-[-0.055em] text-balance"
            >
              ساده. آزاد. خودت.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 font-medium text-ink/55 md:text-xl">
              فرم‌های آزاد، رنگ‌های آرام و جزئیاتی که به چشم نمی‌آیند، اما حس می‌شوند.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/shop"
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                خرید کالکشن
              </Link>
              <a
                href="#story"
                className="rounded-full border border-black/15 px-7 py-3.5 text-sm font-medium transition-colors hover:bg-black/5"
              >
                درباره سیف زون
              </a>
            </div>
          </div>

          <div className="mx-2 mt-10 overflow-hidden rounded-[28px] bg-sand md:mx-4 md:mt-12 md:rounded-[40px]">
            <Image
              src="/safe-zone-hero-wide.png"
              alt="تصویر کامل اعضای کالکشن سیف زون با استایل‌های مینیمال مشکی و کرم"
              width={1942}
              height={809}
              priority
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24 text-center md:py-36">
          <p className="font-english-numbers mb-5 text-sm font-medium text-accent">
            SAFE ZONE / 2026
          </p>
          <h2 className="text-4xl leading-tight font-medium tracking-[-0.035em] text-balance md:text-6xl">
            پوشیدن، بدون فکر اضافه
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-ink/55 md:text-xl">
            برای آدم‌هایی که راحتی را جدی می‌گیرند و از سادگی، انتخابی شخصی می‌سازند.
          </p>
        </section>

        <section
          id="collection"
          aria-labelledby="collection-title"
          className="scroll-mt-24 px-2 md:px-4"
        >
          <div className="mx-auto mb-7 flex max-w-[1440px] items-end justify-between px-4 md:px-2">
            <div>
              <p className="mb-2 text-sm text-ink/45">کالکشن‌ها</p>
              <h2 id="collection-title" className="text-3xl font-medium tracking-tight md:text-5xl">
                انتخاب این هفته
              </h2>
            </div>
            <Link
              className="hidden text-sm font-medium text-ink/65 hover:text-ink md:block"
              href="/shop"
            >
              همه محصولات ←
            </Link>
          </div>

          <div className="mx-auto grid max-w-[1440px] gap-2 md:grid-cols-2 md:gap-4">
            <article className="group relative min-h-[640px] overflow-hidden rounded-[28px] bg-[#141414] md:min-h-[780px] md:rounded-[40px]">
              <Image
                src="/oversized-black-tee.png"
                alt="تی‌شرت اورسایز مشکی سیف زون"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[50%_24%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
                <p className="mb-2 text-sm text-white/65">فرم آزاد</p>
                <h3 className="text-3xl font-medium md:text-4xl">تی‌شرت Essential</h3>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium"
                  href="/shop/essential-oversized-tee"
                >
                  انتخاب رنگ و سایز
                  <span aria-hidden="true">←</span>
                </Link>
              </div>
            </article>

            <article className="group relative min-h-[640px] overflow-hidden rounded-[28px] bg-accent md:min-h-[780px] md:rounded-[40px]">
              <Image
                src="/monochrome-duo-orange.png"
                alt="استایل مشترک زنانه و مردانه سیف زون با پس‌زمینه نارنجی"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[50%_28%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
                <p className="mb-2 text-sm text-white/70">برای هر روز</p>
                <h3 className="text-3xl font-medium md:text-4xl">مشکی یا کرم؟ هر دو.</h3>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium"
                  href="/shop/daily-wide-trousers"
                >
                  خرید شلوار Daily
                  <span aria-hidden="true">←</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section
          id="looks"
          aria-labelledby="looks-title"
          className="mx-auto max-w-[1440px] scroll-mt-24 px-6 py-28 md:px-8 md:py-40"
        >
          <div className="mb-10 md:flex md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm text-accent">سه نگاه، یک حس</p>
              <h2 id="looks-title" className="text-4xl font-medium tracking-tight md:text-6xl">
                استایل‌های منتخب
              </h2>
            </div>
            <p className="mt-5 max-w-md leading-8 text-ink/50 md:mt-0">
              پایه‌های ساده‌ای که کنار هم، هر بار شکل تازه‌ای پیدا می‌کنند.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-4">
            {selectedLooks.map((look) => (
              <article key={look.number}>
                <Link href={look.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] bg-sand md:rounded-[32px]">
                    <Image
                      src={look.image}
                      alt={look.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] ${look.position}`}
                    />
                    <span className="absolute top-5 right-5 rounded-full bg-canvas/85 px-3 py-1.5 text-xs font-medium text-ink backdrop-blur">
                      {look.number}
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium">{look.title}</h3>
                      <p className="mt-1 text-sm text-ink/45">{look.description}</p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="grid size-10 shrink-0 place-items-center rounded-full border border-ink/15 transition-colors group-hover:bg-ink group-hover:text-white"
                    >
                      ←
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="story"
          aria-labelledby="story-title"
          className="scroll-mt-24 bg-ink text-white"
        >
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <div className="relative min-h-[620px] lg:min-h-[820px]">
              <Image
                src="/orange-knit-look.png"
                alt="استایل پلیور نارنجی سیف زون در فضای بوتیک"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_26%]"
              />
            </div>

            <div className="flex items-center px-7 py-20 md:px-16 lg:px-20">
              <div className="max-w-xl">
                <p className="mb-5 text-sm text-[#ff6935]">از بوتیک تا صفحه‌ی شما</p>
                <h2
                  id="story-title"
                  className="text-4xl leading-tight font-medium tracking-[-0.035em] text-balance md:text-6xl"
                >
                  یک فضای واقعی، حالا آنلاین
                </h2>
                <p className="mt-7 text-lg leading-9 text-white/55">
                  سیف زون از یک بوتیک فیزیکی شروع شد؛ جایی برای لمس پارچه، دیدن رنگ‌ها و پیدا کردن
                  لباسی که شبیه خودت باشد. حالا همان انتخاب‌ها را ساده‌تر و نزدیک‌تر، آنلاین
                  می‌بینی.
                </p>
                <Link
                  href="/shop"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ff4f12] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  شروع انتخاب
                  <span aria-hidden="true">←</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
