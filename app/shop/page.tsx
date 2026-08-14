import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductRender } from "../components/product-render";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { formatPrice, products } from "../lib/products";

export const metadata: Metadata = {
  title: "فروشگاه",
  description: "کالکشن آنلاین سیف زون؛ تی‌شرت، شلوار، کتانی و شلوارک‌های مینیمال.",
};

const categoryOptions = [
  { id: "all", label: "همه" },
  { id: "tshirts", label: "تی‌شرت‌ها" },
  { id: "trousers", label: "شلوارها" },
  { id: "sneakers", label: "کتانی‌ها" },
  { id: "shorts", label: "شلوارک‌ها" },
] as const;

type ShopPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category } = await searchParams;
  const selectedCategory = categoryOptions.some((option) => option.id === category)
    ? category
    : "all";
  const selectedLabel =
    categoryOptions.find((option) => option.id === selectedCategory)?.label ?? "همه";
  const visibleProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.categoryId === selectedCategory);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center md:pt-36 md:pb-28">
          <p className="text-sm font-medium text-accent">فروشگاه سیف زون</p>
          <h1 className="mt-5 text-5xl leading-[1.05] font-medium tracking-[-0.045em] text-balance md:text-8xl">
            کمتر انتخاب کن.
            <br />
            بیشتر بپوش.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-ink/50 md:text-xl">
            قطعه‌های ساده، فرم‌های آزاد و رنگ‌هایی که کنار هم بهتر می‌شوند.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-2">
            {categoryOptions.map((option) => (
              <Link
                key={option.id}
                href={option.id === "all" ? "/shop" : `/shop?category=${option.id}`}
                className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                  selectedCategory === option.id
                    ? "border-ink bg-ink text-white"
                    : "border-black/10 hover:border-black/30"
                }`}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="products-title"
          className="mx-auto max-w-[1440px] px-5 pb-32 md:px-10 md:pb-44"
        >
          <div className="mb-8 flex items-end justify-between border-b border-black/10 pb-6">
            <div>
              <p className="text-sm text-ink/45">{selectedLabel}</p>
              <h2 id="products-title" className="mt-2 text-3xl font-medium md:text-4xl">
                {visibleProducts.length > 0 ? "انتخاب‌های فعلی" : "در راه فروشگاه"}
              </h2>
            </div>
            <p className="text-sm text-ink/40">{visibleProducts.length} محصول</p>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid gap-x-4 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <article key={product.slug} className="group">
                  <Link href={`/shop/${product.slug}`} className="block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e9e5de] md:rounded-[34px]">
                      <ProductRender
                        src={product.renderImage}
                        alt={product.renderAlt}
                        color={product.colors[0].swatch}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      />
                      {product.badge && (
                        <span className="absolute top-5 right-5 rounded-full bg-canvas/90 px-3 py-1.5 text-xs font-medium text-accent backdrop-blur">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex items-start justify-between gap-5">
                      <div>
                        <p className="text-sm text-ink/40">{product.category}</p>
                        <h3 className="mt-1 text-xl font-medium">{product.name}</h3>
                        <p className="mt-2 text-sm text-ink/50">{product.tagline}</p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="grid size-10 shrink-0 place-items-center rounded-full border border-black/10 transition-colors group-hover:bg-ink group-hover:text-white"
                      >
                        ←
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-medium">{formatPrice(product.price)}</p>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-80 flex-col items-center justify-center rounded-[28px] bg-white px-6 text-center md:rounded-[40px]">
              <p className="text-3xl font-medium">اولین مدل‌های {selectedLabel} به‌زودی می‌رسند.</p>
              <p className="mt-4 max-w-lg leading-8 text-ink/45">
                این دسته در منوی اصلی آماده است و محصولاتش با تکمیل کالکشن اضافه می‌شوند.
              </p>
              <Link
                href="/shop"
                className="mt-7 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white"
              >
                دیدن محصولات موجود
              </Link>
            </div>
          )}
        </section>

        <section className="mx-2 mb-2 overflow-hidden rounded-[28px] bg-ink text-white md:mx-4 md:rounded-[40px]">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <div className="flex items-center px-7 py-20 md:px-16 lg:px-20">
              <div className="max-w-xl">
                <p className="text-sm text-[#ff6935]">انتخاب حضوری</p>
                <h2 className="mt-5 text-4xl leading-tight font-medium tracking-[-0.035em] text-balance md:text-6xl">
                  اول لمسش کن. بعد انتخابش کن.
                </h2>
                <p className="mt-6 text-lg leading-9 text-white/55">
                  اگر دوست داری پارچه و فرم را از نزدیک ببینی، انتخابت را آنلاین انجام بده و برای
                  تحویل از بوتیک آماده کن.
                </p>
              </div>
            </div>
            <div className="relative min-h-[560px] lg:min-h-[720px]">
              <Image
                src="/safe-zone-hero-wide.png"
                alt="فضای تصویری کالکشن سیف زون"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[70%_center]"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
