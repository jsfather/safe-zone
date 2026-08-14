"use client";

import Link from "next/link";
import { formatPrice } from "../lib/products";
import { useCart } from "./cart-provider";
import { ProductRender } from "./product-render";

export function CartView() {
  const { items, total, ready, removeItem, updateQuantity, clearCart } = useCart();

  if (!ready) {
    return <div className="mx-auto min-h-[50vh] max-w-[1200px] px-6 py-20" />;
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto flex min-h-[62vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-sm font-medium text-accent">سبد خرید</p>
        <h1 className="mt-4 text-5xl font-medium tracking-[-0.04em] md:text-7xl">
          سبدت هنوز خالی‌ست.
        </h1>
        <p className="mt-6 text-lg leading-8 text-ink/50">یک انتخاب خوب، شروع ساده‌ای دارد.</p>
        <Link
          href="/shop"
          className="mt-8 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white"
        >
          رفتن به فروشگاه
        </Link>
      </section>
    );
  }

  return (
    <main className="mx-auto max-w-[1240px] px-5 py-16 md:px-10 md:py-24">
      <div className="flex items-end justify-between border-b border-black/10 pb-7">
        <div>
          <p className="text-sm font-medium text-accent">انتخاب‌های شما</p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight md:text-6xl">سبد خرید</h1>
        </div>
        <button type="button" onClick={clearCart} className="text-sm text-ink/45 hover:text-ink">
          خالی کردن سبد
        </button>
      </div>

      <div className="grid gap-14 pt-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div className="divide-y divide-black/10">
          {items.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-[112px_1fr] gap-5 py-7 first:pt-0 md:grid-cols-[160px_1fr] md:gap-8"
            >
              <Link
                href={`/shop/${item.productSlug}`}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#e9e5de]"
              >
                <ProductRender
                  src={item.image}
                  alt={item.imageAlt}
                  color={item.colorSwatch}
                  sizes="160px"
                />
              </Link>
              <div className="flex min-w-0 flex-col justify-between py-1">
                <div>
                  <Link
                    href={`/shop/${item.productSlug}`}
                    className="text-lg font-medium hover:text-accent md:text-xl"
                  >
                    {item.productName}
                  </Link>
                  <p className="mt-2 text-sm text-ink/45">
                    {item.colorName} · سایز{" "}
                    <span dir="ltr" className="font-english-numbers inline-block">
                      {item.size}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-ink/45">
                    {item.fulfillment === "delivery" ? "ارسال به آدرس" : "تحویل از فروشگاه"}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                  <div dir="ltr" className="flex items-center rounded-full border border-black/10">
                    <button
                      type="button"
                      aria-label="کم کردن تعداد"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="grid size-9 place-items-center text-lg"
                    >
                      −
                    </button>
                    <span className="font-english-numbers min-w-7 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="زیاد کردن تعداد"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="grid size-9 place-items-center text-lg"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-end">
                    <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-xs text-ink/40 hover:text-accent"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="sticky top-28 rounded-[28px] bg-white p-6 shadow-[0_18px_60px_rgba(20,16,12,0.08)] md:p-8">
          <h2 className="text-2xl font-medium">خلاصه سفارش</h2>
          <div className="mt-6 space-y-3 border-b border-black/10 pb-6 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-ink/45">جمع محصولات</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-ink/45">هزینه ارسال</span>
              <span>در مرحله بعد</span>
            </div>
          </div>
          <div className="mt-5 flex justify-between gap-4 text-lg font-medium">
            <span>مجموع</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button
            type="button"
            disabled
            className="mt-7 w-full cursor-not-allowed rounded-full bg-black/10 px-6 py-4 font-medium text-ink/35"
          >
            پرداخت آنلاین به‌زودی
          </button>
          <p className="mt-4 text-center text-xs leading-6 text-ink/40">
            درگاه پرداخت پس از اتصال سرویس فروش فعال می‌شود.
          </p>
        </aside>
      </div>
    </main>
  );
}
