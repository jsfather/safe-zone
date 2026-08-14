import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "راهنمای سایز",
  description: "راهنمای انتخاب سایز محصولات سیف زون.",
};

const sizeRows = [
  { size: "S", chest: "۹۶–۱۰۰", waist: "۷۶–۸۰", hip: "۹۶–۱۰۰" },
  { size: "M", chest: "۱۰۰–۱۰۶", waist: "۸۰–۸۶", hip: "۱۰۰–۱۰۶" },
  { size: "L", chest: "۱۰۶–۱۱۲", waist: "۸۶–۹۲", hip: "۱۰۶–۱۱۲" },
  { size: "XL", chest: "۱۱۲–۱۱۸", waist: "۹۲–۹۸", hip: "۱۱۲–۱۱۸" },
];

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-[1000px] px-5 py-20 md:px-10 md:py-28">
        <p className="text-sm font-medium text-accent">راهنمای انتخاب</p>
        <h1 className="mt-4 text-5xl font-bold tracking-[-0.045em] md:text-7xl">
          سایز مناسب، فرم بهتر.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-ink/50">
          اندازه‌ها را با متر و بدون کشیدن آن روی بدن بگیر. اگر بین دو سایز هستی، برای فرم آزادتر
          سایز بزرگ‌تر را انتخاب کن.
        </p>

        <section className="mt-16 overflow-hidden rounded-[28px] bg-white md:mt-20">
          <div className="border-b border-black/10 p-6 md:p-8">
            <h2 className="text-2xl font-medium">راهنمای عمومی بالاتنه و پایین‌تنه</h2>
            <p className="mt-2 text-sm text-ink/45">همه اندازه‌ها بر حسب سانتی‌متر هستند.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-center">
              <thead className="bg-black/[0.025] text-sm text-ink/45">
                <tr>
                  <th className="p-5 font-medium">سایز</th>
                  <th className="p-5 font-medium">دور سینه</th>
                  <th className="p-5 font-medium">دور کمر</th>
                  <th className="p-5 font-medium">دور باسن</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {sizeRows.map((row) => (
                  <tr key={row.size}>
                    <td dir="ltr" className="font-english-numbers p-5 font-medium">
                      {row.size}
                    </td>
                    <td className="p-5">{row.chest}</td>
                    <td className="p-5">{row.waist}</td>
                    <td className="p-5">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-10 rounded-[28px] bg-ink p-7 text-white md:p-10">
          <h2 className="text-2xl font-medium">فرم اورسایز یعنی چه؟</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/55">
            محصولات اورسایز از ابتدا فضای بیشتری در تنه و آستین دارند. سایز همیشگی‌ات را برای فرم
            استاندارد برند بردار و فقط زمانی یک سایز بزرگ‌تر انتخاب کن که حجم بیشتری می‌خواهی.
          </p>
          <Link
            href="/shop"
            className="mt-7 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium"
          >
            انتخاب محصول
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
