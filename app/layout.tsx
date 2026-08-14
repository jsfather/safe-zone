import type { Metadata } from "next";
import localFont from "next/font/local";
import { CartProvider } from "./components/cart-provider";
import "./globals.css";

const yekanBakh = localFont({
  src: [
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-num-hairline.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-num-thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-num-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-num-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-num-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-num-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-num-heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-num-fat.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
  display: "swap",
  preload: false,
  fallback: ["Tahoma", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});

const yekanBakhFaEn = localFont({
  src: [
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-en-hairline.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-en-thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-en-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-en-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-en-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-en-heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh/yekan-bakh-fa-en-fat.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh-fa-en",
  display: "swap",
  preload: false,
  fallback: ["Tahoma", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: {
    default: "سیف زون | پوشاک روزمره مینیمال",
    template: "%s | سیف زون",
  },
  description: "فروشگاه آنلاین بوتیک سیف زون؛ پوشاک مینیمال، راحت و مناسب هر روز.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${yekanBakh.variable} ${yekanBakhFaEn.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
