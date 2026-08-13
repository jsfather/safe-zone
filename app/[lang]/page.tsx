import { notFound } from "next/navigation";
import Storefront from "../storefront";
import { hasLocale, translations } from "./translations";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return <Storefront content={translations[lang]} />;
}
