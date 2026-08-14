"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, type MouseEvent } from "react";
import type { ProductCategoryId } from "../lib/products";

type ShopCategoryLinkProps = {
  categoryId: ProductCategoryId | "all";
  label: string;
  className: string;
};

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function scrollToProducts() {
  window.requestAnimationFrame(() => {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
  });
}

export function ShopCategoryLink({ categoryId, label, className }: ShopCategoryLinkProps) {
  const router = useRouter();
  const href = categoryId === "all" ? "/shop" : `/shop?category=${categoryId}`;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (categoryId === "all") {
      event.preventDefault();
      router.push(href, { scroll: false });
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: getScrollBehavior() });
      });
      return;
    }

    event.preventDefault();

    const currentCategory = new URLSearchParams(window.location.search).get("category");
    if (window.location.pathname === "/shop" && currentCategory === categoryId) {
      scrollToProducts();
      return;
    }

    router.push(href, { scroll: false });
  }

  return (
    <Link href={href} scroll={false} onClick={handleClick} className={className}>
      {label}
    </Link>
  );
}

export function ShopCategoryScroll({ categoryId }: { categoryId: ProductCategoryId | null }) {
  useEffect(() => {
    if (!categoryId) {
      return;
    }

    scrollToProducts();
  }, [categoryId]);

  return null;
}
