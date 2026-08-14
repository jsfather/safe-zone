import Link from "next/link";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="bg-canvas px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 border-t border-black/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" aria-label="صفحه اصلی سیف زون">
            <BrandLogo />
          </Link>
          <p className="mt-3 text-sm text-ink/45">لباس‌هایی برای زندگی واقعی.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink/55">
          <Link className="hover:text-ink" href="/shop">
            فروشگاه
          </Link>
          <Link className="hover:text-ink" href="/about">
            درباره ما
          </Link>
          <Link className="hover:text-ink" href="/size-guide">
            راهنمای سایز
          </Link>
          <Link className="hover:text-ink" href="/contact">
            تماس با ما
          </Link>
        </div>
        <p className="text-xs text-ink/35">© ۲۰۲۶ سیف زون</p>
      </div>
    </footer>
  );
}
