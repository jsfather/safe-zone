import type { Metadata } from "next";
import { CartView } from "../components/cart-view";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "سبد خرید",
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <CartView />
      <SiteFooter />
    </div>
  );
}
