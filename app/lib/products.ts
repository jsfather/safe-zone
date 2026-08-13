export type Locale = "fa" | "en";

type Localized = Record<Locale, string>;

export type ProductColor = {
  id: string;
  label: Localized;
  hex: string;
  image: string;
};

export type Product = {
  slug: string;
  kind: "top" | "bottom" | "layer";
  name: Localized;
  shortName: Localized;
  eyebrow: Localized;
  description: Localized;
  price: Localized;
  numericPrice: number;
  image: string;
  secondaryImage: string;
  colors: ProductColor[];
  sizes: string[];
  fits: Array<{ id: string; label: Localized; detail: Localized }>;
  material: Localized;
  care: Localized;
  featureTitle: Localized;
  featureText: Localized;
};

export const products: Product[] = [
  {
    slug: "stone-oversized-tee",
    kind: "top",
    name: { fa: "تی‌شرت اورسایز سنگی", en: "Stone oversized tee" },
    shortName: { fa: "تی‌شرت سنگی", en: "Stone tee" },
    eyebrow: { fa: "هوی وِیت / دراپ ۰۱", en: "HEAVYWEIGHT / DROP 01" },
    description: {
      fa: "یک تی‌شرت روزمره با پارچه‌ی سنگین، سرشانه‌ی افتاده و فرمی که بدون تلاش درست می‌ایستد.",
      en: "An everyday tee in substantial cotton, with a dropped shoulder and an easy shape that simply falls right.",
    },
    price: { fa: "۱٬۴۸۰٬۰۰۰ تومان", en: "1,480,000 Toman" },
    numericPrice: 1480000,
    image: "/product-stone-tee.jpg",
    secondaryImage: "/category-tshirts.jpg",
    colors: [
      { id: "stone", label: { fa: "سنگی", en: "Stone" }, hex: "#b7aa98", image: "/product-stone-tee.jpg" },
      { id: "charcoal", label: { fa: "ذغالی", en: "Charcoal" }, hex: "#292927", image: "/product-charcoal-tee.jpg" },
      { id: "ivory", label: { fa: "شیری", en: "Ivory" }, hex: "#e9e0d0", image: "/category-tshirts.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fits: [
      { id: "regular", label: { fa: "آزاد", en: "Relaxed" }, detail: { fa: "اندازه‌ی معمولت را بردار", en: "Choose your usual size" } },
      { id: "oversized", label: { fa: "خیلی اورسایز", en: "Extra oversized" }, detail: { fa: "یک سایز بزرگ‌تر", en: "Go one size up" } },
    ],
    material: { fa: "۱۰۰٪ پنبه، ۲۶۰ گرم", en: "100% cotton, 260 gsm" },
    care: { fa: "شست‌وشو با آب سرد، پشت‌ورو", en: "Cold wash, inside out" },
    featureTitle: { fa: "وزن درست. فرم راحت.", en: "The right weight. An easy shape." },
    featureText: {
      fa: "یقه‌ی ریب تقویت‌شده، دوخت تمیز و پنبه‌ای که بعد از پوشیدن بهتر می‌شود.",
      en: "A reinforced rib neck, clean construction and cotton that gets better as you live in it.",
    },
  },
  {
    slug: "black-wide-trousers",
    kind: "bottom",
    name: { fa: "شلوار واید مشکی", en: "Black wide trousers" },
    shortName: { fa: "شلوار واید", en: "Wide trousers" },
    eyebrow: { fa: "فرم آزاد / پرفروش", en: "EASY SHAPE / BESTSELLER" },
    description: {
      fa: "شلوار واید با پیلی عمیق، افت تمیز و کمری که از صبح تا شب راحت می‌ماند.",
      en: "Wide trousers with a deep pleat, clean drape and a waist that stays comfortable from morning to late.",
    },
    price: { fa: "۲٬۶۹۰٬۰۰۰ تومان", en: "2,690,000 Toman" },
    numericPrice: 2690000,
    image: "/product-black-trousers.jpg",
    secondaryImage: "/category-trousers.jpg",
    colors: [
      { id: "black", label: { fa: "مشکی", en: "Black" }, hex: "#171713", image: "/product-black-trousers.jpg" },
      { id: "ink", label: { fa: "جوهر", en: "Ink" }, hex: "#30302d", image: "/category-trousers.jpg" },
    ],
    sizes: ["28", "30", "32", "34", "36"],
    fits: [
      { id: "regular", label: { fa: "واید", en: "Wide" }, detail: { fa: "فرم اصلی سیف زون", en: "The intended Safe Zone fit" } },
      { id: "long", label: { fa: "واید بلند", en: "Wide long" }, detail: { fa: "۵ سانتی‌متر قد بیشتر", en: "5 cm extra length" } },
    ],
    material: { fa: "ترکیب پنبه و ویسکوز", en: "Cotton–viscose blend" },
    care: { fa: "شست‌وشو ملایم در ۳۰ درجه", en: "Gentle wash at 30°C" },
    featureTitle: { fa: "حرکت، بدون شلوغی.", en: "Movement, without the noise." },
    featureText: { fa: "پیلی‌های دقیق و پارچه‌ای با افت طبیعی، برای فرمی که در حرکت زنده می‌شود.", en: "Considered pleats and naturally fluid cloth make the silhouette come alive in motion." },
  },
  {
    slug: "charcoal-heavyweight-tee",
    kind: "top",
    name: { fa: "تی‌شرت هوی وِیت ذغالی", en: "Charcoal heavyweight tee" },
    shortName: { fa: "تی‌شرت ذغالی", en: "Charcoal tee" },
    eyebrow: { fa: "هوی وِیت / جدید", en: "HEAVYWEIGHT / NEW" },
    description: { fa: "تی‌شرت ذغالی سنگین با بافت نرم و تن‌خور اورسایز کنترل‌شده.", en: "A substantial charcoal tee with a soft hand and controlled oversized fit." },
    price: { fa: "۱٬۶۵۰٬۰۰۰ تومان", en: "1,650,000 Toman" },
    numericPrice: 1650000,
    image: "/product-charcoal-tee.jpg",
    secondaryImage: "/product-stone-tee.jpg",
    colors: [
      { id: "charcoal", label: { fa: "ذغالی", en: "Charcoal" }, hex: "#292927", image: "/product-charcoal-tee.jpg" },
      { id: "stone", label: { fa: "سنگی", en: "Stone" }, hex: "#b7aa98", image: "/product-stone-tee.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fits: [
      { id: "regular", label: { fa: "آزاد", en: "Relaxed" }, detail: { fa: "اندازه‌ی معمولت را بردار", en: "Choose your usual size" } },
      { id: "oversized", label: { fa: "خیلی اورسایز", en: "Extra oversized" }, detail: { fa: "یک سایز بزرگ‌تر", en: "Go one size up" } },
    ],
    material: { fa: "۱۰۰٪ پنبه، ۲۸۰ گرم", en: "100% cotton, 280 gsm" },
    care: { fa: "شست‌وشو با آب سرد، پشت‌ورو", en: "Cold wash, inside out" },
    featureTitle: { fa: "تیره، نرم، ماندگار.", en: "Dark, soft, lasting." },
    featureText: { fa: "رنگ ذغالی شسته‌شده با بافتی که در هر بار پوشیدن شخصیت بیشتری می‌گیرد.", en: "A washed charcoal tone with texture that gains character every time you wear it." },
  },
  {
    slug: "rust-knit-pullover",
    kind: "layer",
    name: { fa: "پلیور بافت آجری", en: "Rust knit pullover" },
    shortName: { fa: "بافت آجری", en: "Rust knit" },
    eyebrow: { fa: "تعداد محدود / لایه‌ی بعدی", en: "LIMITED / NEXT LAYER" },
    description: { fa: "بافت آجری نرم با آستین‌های آزاد و فرمی که روی هر استایلی می‌نشیند.", en: "A soft rust knit with easy sleeves and a shape designed to layer over anything." },
    price: { fa: "۲٬۹۸۰٬۰۰۰ تومان", en: "2,980,000 Toman" },
    numericPrice: 2980000,
    image: "/category-layers.jpg",
    secondaryImage: "/safe-zone-hero-v2.jpg",
    colors: [
      { id: "rust", label: { fa: "آجری", en: "Rust" }, hex: "#b43d1d", image: "/category-layers.jpg" },
    ],
    sizes: ["S", "M", "L", "XL"],
    fits: [
      { id: "regular", label: { fa: "آزاد", en: "Relaxed" }, detail: { fa: "فرم اصلی بافت", en: "The intended knit shape" } },
      { id: "oversized", label: { fa: "اورسایز", en: "Oversized" }, detail: { fa: "یک سایز بزرگ‌تر", en: "Go one size up" } },
    ],
    material: { fa: "پشم و پنبه‌ی نرم", en: "Soft wool–cotton blend" },
    care: { fa: "شست‌وشوی دستی و خشک‌کردن تخت", en: "Hand wash and dry flat" },
    featureTitle: { fa: "گرما، با رنگ سیف زون.", en: "Warmth, in the Safe Zone colour." },
    featureText: { fa: "بافت برجسته با نارنجی عمیق، برای روزهایی که یک لایه همه‌چیز را کامل می‌کند.", en: "A tactile knit in deep orange for days when one layer completes everything." },
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
