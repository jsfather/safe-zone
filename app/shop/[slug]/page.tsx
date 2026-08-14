import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductConfigurator } from "../../components/product-configurator";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { formatPrice, getProduct, products } from "../../lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />

      <div className="sticky top-[104px] z-40 border-b border-black/5 bg-canvas/90 backdrop-blur-xl md:top-[72px]">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <p className="text-sm font-medium">{product.name}</p>
          <p className="text-sm text-ink/50">{formatPrice(product.price)}</p>
        </div>
      </div>

      <main>
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
          <p className="text-sm font-medium text-accent">خرید {product.category}</p>
          <h1 className="mt-4 text-5xl leading-[1.05] font-medium tracking-[-0.045em] text-balance md:text-7xl">
            {product.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-ink/50 md:text-xl">
            {product.description}
          </p>
        </section>

        <ProductConfigurator product={product} />

        <section className="bg-ink px-6 py-24 text-white md:py-36">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-sm font-medium text-[#ff6935]">از نزدیک</p>
            <h2 className="mt-5 max-w-4xl text-4xl leading-tight font-medium tracking-[-0.035em] text-balance md:text-6xl">
              جزئیاتی که برای دیده شدن طراحی نشده‌اند؛ برای بهتر پوشیدن ساخته شده‌اند.
            </h2>

            <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3 md:gap-14">
              {product.features.map((feature, index) => (
                <article key={feature.title}>
                  <p className="text-sm text-white/30">۰{index + 1}</p>
                  <h3 className="mt-5 text-2xl font-medium">{feature.title}</h3>
                  <p className="mt-4 leading-8 text-white/50">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
          <p className="text-sm font-medium text-accent">هنوز مطمئن نیستی؟</p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight text-balance md:text-6xl">
            همه انتخاب‌ها را کنار هم ببین.
          </h2>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            بازگشت به فروشگاه
            <span aria-hidden="true">←</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
