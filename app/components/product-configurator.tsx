"use client";

import { useState } from "react";
import { formatPrice, type Product } from "../lib/products";
import { useCart } from "./cart-provider";
import { ProductRender } from "./product-render";

type ProductConfiguratorProps = {
  product: Product;
};

export function ProductConfigurator({ product }: ProductConfiguratorProps) {
  const { addItem } = useCart();
  const [selectedColorId, setSelectedColorId] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [fulfillment, setFulfillment] = useState<"delivery" | "pickup">("delivery");
  const [added, setAdded] = useState(false);

  const selectedColor =
    product.colors.find((color) => color.id === selectedColorId) ?? product.colors[0];

  function resetConfirmation() {
    setAdded(false);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (selectedSize) {
          addItem({
            productSlug: product.slug,
            productName: product.name,
            colorId: selectedColor.id,
            colorName: selectedColor.name,
            size: selectedSize,
            fulfillment,
            price: product.price,
            image: product.renderImage,
            imageAlt: product.renderAlt,
            colorSwatch: selectedColor.swatch,
          });
          setAdded(true);
        }
      }}
      className="mx-auto max-w-[1440px] px-5 pb-28 md:px-10 md:pb-40"
    >
      <div
        dir="ltr"
        className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(380px,0.82fr)] lg:gap-20"
      >
        <div className="lg:sticky lg:top-32">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#ebe7e0] md:rounded-[40px]">
            <ProductRender
              src={product.renderImage}
              alt={`${product.name} به رنگ ${selectedColor.name}`}
              color={selectedColor.swatch}
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>

          {product.colors.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-3" aria-label="تصاویر رنگ‌ها">
              {product.colors.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  aria-label={`نمایش رنگ ${color.name}`}
                  aria-pressed={selectedColor.id === color.id}
                  onClick={() => {
                    setSelectedColorId(color.id);
                    resetConfirmation();
                  }}
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl border-2 bg-[#ebe7e0] transition-colors ${
                    selectedColor.id === color.id ? "border-ink" : "border-transparent"
                  }`}
                >
                  <ProductRender
                    src={product.renderImage}
                    alt=""
                    color={color.swatch}
                    sizes="20vw"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div dir="rtl">
          <section className="border-b border-black/10 pb-12">
            {product.badge && (
              <p className="mb-3 text-sm font-medium text-accent">{product.badge}</p>
            )}
            <p className="text-sm text-ink/45">{product.category}</p>
            <h2 className="mt-2 text-4xl leading-tight font-medium tracking-[-0.035em] md:text-5xl">
              {product.name}
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/55">{product.tagline}</p>
            <p className="mt-7 text-xl font-medium">{formatPrice(product.price)}</p>
          </section>

          <section className="border-b border-black/10 py-12 md:py-16">
            <p className="text-sm font-medium text-accent">مرحله ۱</p>
            <h3 className="mt-3 text-3xl font-medium tracking-tight">
              رنگ مورد علاقه‌ات را انتخاب کن.
            </h3>
            <p className="mt-3 text-ink/50">
              انتخاب فعلی: <span className="font-medium text-ink">{selectedColor.name}</span>
            </p>
            <p className="mt-2 text-sm leading-6 text-ink/40">
              فرم، دوخت و زاویه محصول ثابت می‌ماند؛ فقط رنگ واقعی انتخاب‌شده تغییر می‌کند.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {product.colors.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  aria-pressed={selectedColor.id === color.id}
                  onClick={() => {
                    setSelectedColorId(color.id);
                    resetConfirmation();
                  }}
                  className={`flex min-h-20 items-center justify-between rounded-2xl border-2 px-5 text-start transition-colors ${
                    selectedColor.id === color.id
                      ? "border-ink bg-white"
                      : "border-black/10 bg-transparent hover:border-black/30"
                  }`}
                >
                  <span className="font-medium">{color.name}</span>
                  <span
                    aria-hidden="true"
                    className="size-7 rounded-full border border-black/10 shadow-[inset_0_0_0_3px_white]"
                    style={{ backgroundColor: color.swatch }}
                  />
                </button>
              ))}
            </div>
          </section>

          <section className="border-b border-black/10 py-12 md:py-16">
            <p className="text-sm font-medium text-accent">مرحله ۲</p>
            <h3 className="mt-3 text-3xl font-medium tracking-tight">سایز مناسب را بردار.</h3>
            <p className="mt-3 leading-7 text-ink/50">
              اگر بین دو سایز هستی، برای فرم آزادتر سایز بزرگ‌تر را انتخاب کن.
            </p>

            <div dir="ltr" className="mt-7 grid grid-cols-4 gap-3 sm:grid-cols-5">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  aria-pressed={selectedSize === size}
                  onClick={() => {
                    setSelectedSize(size);
                    resetConfirmation();
                  }}
                  className={`font-english-numbers min-h-14 rounded-2xl border-2 text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "border-ink bg-ink text-white"
                      : "border-black/10 hover:border-black/30"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </section>

          <section className="border-b border-black/10 py-12 md:py-16">
            <p className="text-sm font-medium text-accent">مرحله ۳</p>
            <h3 className="mt-3 text-3xl font-medium tracking-tight">چطور می‌خواهی تحویل بگیری؟</h3>

            <div className="mt-7 grid gap-3">
              <button
                type="button"
                aria-pressed={fulfillment === "delivery"}
                onClick={() => {
                  setFulfillment("delivery");
                  resetConfirmation();
                }}
                className={`rounded-2xl border-2 p-5 text-start transition-colors ${
                  fulfillment === "delivery"
                    ? "border-ink bg-white"
                    : "border-black/10 hover:border-black/30"
                }`}
              >
                <span className="block font-medium">ارسال به آدرس شما</span>
                <span className="mt-1 block text-sm text-ink/45">
                  نشانی و زمان ارسال در مرحله نهایی ثبت می‌شود.
                </span>
              </button>
              <button
                type="button"
                aria-pressed={fulfillment === "pickup"}
                onClick={() => {
                  setFulfillment("pickup");
                  resetConfirmation();
                }}
                className={`rounded-2xl border-2 p-5 text-start transition-colors ${
                  fulfillment === "pickup"
                    ? "border-ink bg-white"
                    : "border-black/10 hover:border-black/30"
                }`}
              >
                <span className="block font-medium">تحویل از فروشگاه</span>
                <span className="mt-1 block text-sm text-ink/45">
                  سفارش را آنلاین انتخاب کن و از بوتیک تحویل بگیر.
                </span>
              </button>
            </div>
          </section>

          <section className="pt-12 md:pt-16">
            <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_60px_rgba(20,16,12,0.08)] md:p-8">
              <p className="text-sm text-ink/45">انتخاب شما</p>
              <div className="mt-4 space-y-2 border-b border-black/10 pb-5 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-ink/45">رنگ</span>
                  <span className="font-medium">{selectedColor.name}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-ink/45">سایز</span>
                  <span dir="ltr" className="font-english-numbers font-medium">
                    {selectedSize ?? "انتخاب نشده"}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-ink/45">دریافت</span>
                  <span className="font-medium">
                    {fulfillment === "delivery" ? "ارسال به آدرس" : "تحویل از فروشگاه"}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <span className="font-medium">مجموع</span>
                <span className="text-lg font-medium">{formatPrice(product.price)}</span>
              </div>

              <button
                type="submit"
                disabled={!selectedSize}
                className="mt-6 w-full rounded-full bg-accent px-6 py-4 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#df3e0a] disabled:cursor-not-allowed disabled:bg-black/15 disabled:text-ink/40 disabled:hover:translate-y-0"
              >
                {added
                  ? "به سبد اضافه شد"
                  : selectedSize
                    ? "افزودن به سبد"
                    : "ابتدا سایز را انتخاب کن"}
              </button>
              <p aria-live="polite" className="mt-3 min-h-5 text-center text-sm text-ink/45">
                {added ? "انتخاب شما برای ادامه خرید در سبد ذخیره شد." : ""}
              </p>
            </div>
          </section>
        </div>
      </div>
    </form>
  );
}
