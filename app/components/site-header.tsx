"use client";

import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { useCart } from "./cart-provider";

export function SiteHeader() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-canvas/90 backdrop-blur-xl">
      <nav
        aria-label="ناوبری اصلی"
        className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-[72px] md:px-10"
      >
        <Link href="/" aria-label="صفحه اصلی سیف زون">
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-8 text-sm text-ink/60 md:flex">
          <Link className="transition-colors hover:text-ink" href="/shop">
            فروشگاه
          </Link>
          <Link className="transition-colors hover:text-ink" href="/shop?category=tshirts">
            تی‌شرت‌ها
          </Link>
          <Link className="transition-colors hover:text-ink" href="/shop?category=trousers">
            شلوارها
          </Link>
          <Link className="transition-colors hover:text-ink" href="/shop?category=sneakers">
            کتانی‌ها
          </Link>
          <Link className="transition-colors hover:text-ink" href="/shop?category=shorts">
            شلوارک‌ها
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link className="text-sm font-medium text-ink md:hidden" href="/shop">
            فروشگاه
          </Link>
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white transition-transform hover:-translate-y-0.5 md:px-5 md:text-sm"
          >
            سبد
            <span className="font-english-numbers grid size-5 place-items-center rounded-full bg-white/15 text-[10px]">
              {itemCount}
            </span>
          </Link>
        </div>
      </nav>
      <div className="grid h-10 grid-cols-4 border-t border-black/5 px-2 text-center text-[11px] text-ink/55 md:hidden">
        <Link className="grid place-items-center" href="/shop?category=tshirts">
          تی‌شرت‌ها
        </Link>
        <Link className="grid place-items-center" href="/shop?category=trousers">
          شلوارها
        </Link>
        <Link className="grid place-items-center" href="/shop?category=sneakers">
          کتانی‌ها
        </Link>
        <Link className="grid place-items-center" href="/shop?category=shorts">
          شلوارک‌ها
        </Link>
      </div>
    </header>
  );
}
