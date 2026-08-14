export type ProductColor = {
  id: string;
  name: string;
  swatch: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  categoryId: "tshirts" | "trousers" | "knitwear" | "sneakers" | "shorts";
  tagline: string;
  description: string;
  price: number;
  badge?: string;
  coverImage: string;
  coverAlt: string;
  coverPosition: string;
  colors: ProductColor[];
  sizes: string[];
  features: Array<{
    title: string;
    description: string;
  }>;
};

export const products: Product[] = [
  {
    slug: "essential-oversized-tee",
    name: "تی‌شرت اورسایز Essential",
    shortName: "Essential Tee",
    category: "تی‌شرت",
    categoryId: "tshirts",
    tagline: "آزاد، متعادل و ساخته‌شده برای هر روز.",
    description:
      "یک تی‌شرت با فرم آزاد و خط شانه افتاده که به‌تنهایی یا در ترکیب با لایه‌های دیگر، ساده و دقیق می‌ایستد.",
    price: 1_890_000,
    badge: "جدید",
    coverImage: "/oversized-black-tee.png",
    coverAlt: "تی‌شرت اورسایز مشکی Essential سیف زون",
    coverPosition: "object-[50%_22%]",
    colors: [
      {
        id: "black",
        name: "مشکی",
        swatch: "#171717",
        image: "/oversized-black-tee.png",
        imageAlt: "تی‌شرت اورسایز Essential به رنگ مشکی",
        imagePosition: "object-[50%_22%]",
      },
      {
        id: "ivory",
        name: "استخوانی",
        swatch: "#eee7da",
        image: "/ivory-tee-black-trousers.png",
        imageAlt: "تی‌شرت اورسایز Essential به رنگ استخوانی",
        imagePosition: "object-[50%_28%]",
      },
      {
        id: "stone",
        name: "سنگی",
        swatch: "#9f927f",
        image: "/stone-tee-black-trousers.png",
        imageAlt: "تی‌شرت اورسایز Essential به رنگ سنگی",
        imagePosition: "object-[50%_24%]",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    features: [
      {
        title: "فرم آزاد",
        description: "فضای بیشتر در تنه و آستین برای حرکت راحت و یک سیلوئت تمیز.",
      },
      {
        title: "خط شانه افتاده",
        description: "فرمی آرام که بدون حجم اضافه، ظاهر اورسایز را کامل می‌کند.",
      },
      {
        title: "برای هر روز",
        description: "طراحی ساده‌ای که با شلوار واید، جین یا لایه‌های دیگر هماهنگ می‌شود.",
      },
    ],
  },
  {
    slug: "daily-wide-trousers",
    name: "شلوار واید Daily",
    shortName: "Daily Wide",
    category: "شلوار",
    categoryId: "trousers",
    tagline: "یک خط صاف، از کمر تا پایین.",
    description:
      "شلواری با برش واید و ایستایی روان که فاصله‌ی میان راحتی روزمره و ظاهر مرتب را از بین می‌برد.",
    price: 2_490_000,
    coverImage: "/ivory-tee-black-trousers.png",
    coverAlt: "شلوار واید مشکی Daily سیف زون",
    coverPosition: "object-[50%_54%]",
    colors: [
      {
        id: "black",
        name: "مشکی",
        swatch: "#161616",
        image: "/ivory-tee-black-trousers.png",
        imageAlt: "شلوار واید Daily به رنگ مشکی",
        imagePosition: "object-[50%_54%]",
      },
      {
        id: "cream",
        name: "کرم",
        swatch: "#e7dece",
        image: "/monochrome-duo-orange.png",
        imageAlt: "شلوار واید Daily به رنگ کرم",
        imagePosition: "object-[28%_52%]",
      },
    ],
    sizes: ["36", "38", "40", "42", "44"],
    features: [
      {
        title: "برش واید",
        description: "خطی پیوسته و آزاد که در حرکت، فرم خود را حفظ می‌کند.",
      },
      {
        title: "استایل انعطاف‌پذیر",
        description: "از تی‌شرت ساده تا بافت و کت، بدون نیاز به ترکیب پیچیده.",
      },
      {
        title: "راحتی طولانی",
        description: "برای ساعت‌های طولانی روز و رفت‌وآمدهای شهری طراحی شده است.",
      },
    ],
  },
  {
    slug: "ember-knit",
    name: "پلیور بافت Ember",
    shortName: "Ember Knit",
    category: "بافت",
    categoryId: "knitwear",
    tagline: "گرمای رنگ، آرامش فرم.",
    description:
      "یک بافت آزاد با رنگ نارنجی عمیق؛ قطعه‌ای شاخص که باقی استایل را ساده نگه می‌دارد.",
    price: 3_290_000,
    badge: "منتخب",
    coverImage: "/orange-knit-look.png",
    coverAlt: "پلیور بافت نارنجی Ember سیف زون",
    coverPosition: "object-[50%_22%]",
    colors: [
      {
        id: "ember",
        name: "نارنجی Ember",
        swatch: "#b83c12",
        image: "/orange-knit-look.png",
        imageAlt: "پلیور بافت Ember به رنگ نارنجی",
        imagePosition: "object-[50%_22%]",
      },
    ],
    sizes: ["S/M", "L/XL"],
    features: [
      {
        title: "بافت برجسته",
        description: "سطحی با عمق بصری که در عین سادگی، شخصیت خودش را دارد.",
      },
      {
        title: "حجم کنترل‌شده",
        description: "آستین و تنه آزاد با تناسبی که همچنان مرتب دیده می‌شود.",
      },
      {
        title: "رنگ شاخص",
        description: "نارنجی گرم برای ترکیب با مشکی، کرم و رنگ‌های خنثی.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return `${new Intl.NumberFormat("fa-IR").format(price)} تومان`;
}
