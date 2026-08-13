import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductConfigurator from "../../../product-configurator";
import { getProduct, products } from "../../../lib/products";
import { hasLocale, locales } from "../../translations";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    products.map((product) => ({ lang, slug: product.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/product/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = getProduct(slug);

  if (!hasLocale(lang) || !product) return {};

  return {
    title: product.name[lang],
    description: product.description[lang],
    openGraph: {
      title: `${product.name[lang]} — Safe Zone`,
      description: product.description[lang],
      images: [{ url: product.image, alt: product.name[lang] }],
    },
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/[lang]/product/[slug]">) {
  const { lang, slug } = await params;

  if (!hasLocale(lang)) notFound();

  const product = getProduct(slug);
  if (!product) notFound();

  return <ProductConfigurator locale={lang} product={product} />;
}
