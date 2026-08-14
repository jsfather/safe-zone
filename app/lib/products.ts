export type ProductCategoryId = "tshirts" | "trousers" | "sneakers" | "shorts";

export type ProductColor = {
  id: string;
  name: string;
  swatch: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  categoryId: ProductCategoryId;
  tagline: string;
  description: string;
  price: number;
  badge?: string;
  renderImage: string;
  renderAlt: string;
  defaultColorId: string;
  colors: readonly ProductColor[];
  sizes: readonly string[];
  features: ReadonlyArray<{
    title: string;
    description: string;
  }>;
};

type PaletteId = "core" | "earth" | "cool" | "sport" | "summer";

type ProductSeed = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  price: number;
  palette: PaletteId;
  badge?: string;
};

const palettes: Record<PaletteId, readonly ProductColor[]> = {
  core: [
    { id: "black", name: "مشکی", swatch: "#171717" },
    { id: "ivory", name: "استخوانی", swatch: "#E9E2D6" },
    { id: "stone", name: "سنگی", swatch: "#8A8175" },
    { id: "clay", name: "رسی", swatch: "#A85C3A" },
  ],
  earth: [
    { id: "graphite", name: "گرافیتی", swatch: "#30302E" },
    { id: "sand", name: "شنی", swatch: "#C7B69D" },
    { id: "olive", name: "زیتونی", swatch: "#62634D" },
    { id: "cocoa", name: "کاکائویی", swatch: "#765747" },
  ],
  cool: [
    { id: "ink", name: "جوهر مشکی", swatch: "#1B2026" },
    { id: "fog", name: "مه‌آلود", swatch: "#C9CDD0" },
    { id: "navy", name: "سرمه‌ای", swatch: "#29384C" },
    { id: "sage", name: "سبز مریم‌گلی", swatch: "#879486" },
  ],
  sport: [
    { id: "carbon", name: "کربنی", swatch: "#242527" },
    { id: "chalk", name: "سفید گچی", swatch: "#ECEAE4" },
    { id: "steel", name: "فولادی", swatch: "#727B82" },
    { id: "signal", name: "نارنجی سیگنال", swatch: "#E25323" },
  ],
  summer: [
    { id: "night", name: "شب", swatch: "#202020" },
    { id: "oat", name: "جو دوسر", swatch: "#D8CDBB" },
    { id: "dusty-blue", name: "آبی غبارآلود", swatch: "#71828E" },
    { id: "brick", name: "آجری", swatch: "#A64F38" },
  ],
};

const categoryDetails = {
  tshirts: {
    label: "تی‌شرت",
    directory: "tshirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "پارچه، خط شانه و نسبت‌های این مدل طوری تنظیم شده‌اند که در استفاده روزمره فرم تمیز خود را حفظ کند.",
    features: [
      {
        title: "پنبه با وزن متعادل",
        description: "سطحی نرم با ایستایی کافی؛ نه بیش از حد نازک و نه سنگین.",
      },
      {
        title: "فرم دقیق",
        description: "تناسب شانه، آستین و قد برای یک سیلوئت آرام و قابل‌لایه‌پوشی تنظیم شده است.",
      },
      {
        title: "دوخت ماندگار",
        description: "یقه و لبه‌ها برای حفظ فرم در پوشیدن و شست‌وشوی مداوم تقویت شده‌اند.",
      },
    ],
  },
  trousers: {
    label: "شلوار",
    directory: "trousers",
    sizes: ["36", "38", "40", "42", "44", "46"],
    description:
      "برش این شلوار میان حرکت آزاد و ظاهر مرتب تعادل می‌سازد و برای ساعت‌های طولانی روز طراحی شده است.",
    features: [
      {
        title: "افت کنترل‌شده",
        description: "پارچه در حرکت روان است و در حالت ایستاده خط اصلی شلوار را نگه می‌دارد.",
      },
      {
        title: "ساختار راحت",
        description: "فضای نشیمن و ران بدون حجم اضافه، آزادی حرکت روزمره را فراهم می‌کند.",
      },
      {
        title: "جزئیات کم‌صدا",
        description: "جیب‌ها، پیلی‌ها و درزها در خدمت فرم‌اند و ظاهر را شلوغ نمی‌کنند.",
      },
    ],
  },
  sneakers: {
    label: "کتانی",
    directory: "sneakers",
    sizes: ["39", "40", "41", "42", "43", "44"],
    description:
      "یک کتانی روزمره با ساختار سبک و زیره‌ای پایدار که برای حرکت شهری و ترکیب‌های مینیمال ساخته شده است.",
    features: [
      {
        title: "پایداری نرم",
        description: "زیره، ضربه قدم‌ها را کنترل می‌کند و زیر پا حس بیش از حد حجیم ایجاد نمی‌کند.",
      },
      {
        title: "فرم هماهنگ",
        description: "پنجه، پنل‌ها و خط زیره به‌عنوان یک حجم ساده و یکپارچه طراحی شده‌اند.",
      },
      {
        title: "برای تمام روز",
        description: "فضای داخلی و گردش هوا برای رفت‌وآمد و پوشیدن طولانی تنظیم شده است.",
      },
    ],
  },
  shorts: {
    label: "شلوارک",
    directory: "shorts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "این مدل با فضای حرکت کافی و جزئیات ساده، یک انتخاب سبک برای روزهای گرم و استایل شهری است.",
    features: [
      {
        title: "حرکت آزاد",
        description: "فاق، ران و دهانه پا برای نشستن، راه رفتن و حرکت روزمره فضای کافی دارند.",
      },
      {
        title: "پارچه تنفس‌پذیر",
        description: "بافت سبک، جریان هوا را بهتر می‌کند و همچنان فرم خود را حفظ می‌کند.",
      },
      {
        title: "ساختار مینیمال",
        description: "جیب و درزها کاربردی‌اند و بدون شلوغی، شخصیت مدل را کامل می‌کنند.",
      },
    ],
  },
} as const;

function createCategoryProducts(
  categoryId: ProductCategoryId,
  seeds: readonly ProductSeed[],
): Product[] {
  const details = categoryDetails[categoryId];

  return seeds.map((seed) => {
    const { palette, ...product } = seed;
    const colors = palettes[palette];
    const defaultColor = colors[getStableColorIndex(seed.slug, colors.length)];

    return {
      ...product,
      category: details.label,
      categoryId,
      description: `${seed.tagline} ${details.description}`,
      renderImage: `/products/${details.directory}/${seed.slug}.png`,
      renderAlt: `${seed.name} سیف زون`,
      defaultColorId: defaultColor.id,
      colors,
      sizes: details.sizes,
      features: details.features,
    };
  });
}

function getStableColorIndex(value: string, colorCount: number) {
  let hash = 0;

  for (const character of value) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }

  return hash % colorCount;
}

const tshirts = createCategoryProducts("tshirts", [
  {
    slug: "essential-oversized-tee",
    name: "تی‌شرت اورسایز Essential",
    shortName: "Essential Tee",
    tagline: "آزاد، متعادل و ساخته‌شده برای هر روز.",
    price: 1_890_000,
    palette: "core",
    badge: "پرفروش",
  },
  {
    slug: "core-heavy-tee",
    name: "تی‌شرت سنگین Core",
    shortName: "Core Heavy Tee",
    tagline: "وزن بیشتر، خط تمیزتر.",
    price: 2_190_000,
    palette: "cool",
    badge: "جدید",
  },
  {
    slug: "drop-shoulder-tee",
    name: "تی‌شرت Drop Shoulder",
    shortName: "Drop Shoulder Tee",
    tagline: "شانه افتاده، حجم آرام.",
    price: 1_990_000,
    palette: "earth",
  },
  {
    slug: "boxy-crop-tee",
    name: "تی‌شرت باکسی Crop",
    shortName: "Boxy Crop Tee",
    tagline: "کوتاه‌تر، عریض‌تر و دقیق‌تر.",
    price: 1_890_000,
    palette: "summer",
  },
  {
    slug: "longline-tee",
    name: "تی‌شرت لانگ‌لاین Flow",
    shortName: "Flow Longline Tee",
    tagline: "قد بلند با حرکت بی‌وقفه.",
    price: 2_090_000,
    palette: "core",
  },
  {
    slug: "washed-tee",
    name: "تی‌شرت شسته‌شده Fade",
    shortName: "Fade Washed Tee",
    tagline: "بافت آشنا، فرم تازه.",
    price: 2_290_000,
    palette: "earth",
  },
  {
    slug: "pocket-tee",
    name: "تی‌شرت جیب‌دار Utility",
    shortName: "Utility Pocket Tee",
    tagline: "یک جزئیات کاربردی، بدون شلوغی.",
    price: 2_090_000,
    palette: "cool",
  },
  {
    slug: "split-hem-tee",
    name: "تی‌شرت چاک‌دار Shift",
    shortName: "Shift Split Tee",
    tagline: "حرکت بیشتر در یک سیلوئت ساده.",
    price: 2_190_000,
    palette: "summer",
  },
  {
    slug: "mock-neck-tee",
    name: "تی‌شرت یقه‌ماک Form",
    shortName: "Form Mock Tee",
    tagline: "یقه‌ای بلندتر برای خطی مشخص‌تر.",
    price: 2_190_000,
    palette: "core",
  },
  {
    slug: "raglan-relaxed-tee",
    name: "تی‌شرت رگلان Arc",
    shortName: "Arc Raglan Tee",
    tagline: "درز منحنی، آزادی طبیعی شانه.",
    price: 1_990_000,
    palette: "sport",
  },
]);

const trousers = createCategoryProducts("trousers", [
  {
    slug: "daily-wide-trousers",
    name: "شلوار واید Daily",
    shortName: "Daily Wide",
    tagline: "یک خط صاف، از کمر تا پایین.",
    price: 2_690_000,
    palette: "core",
    badge: "پرفروش",
  },
  {
    slug: "pleated-flow-trousers",
    name: "شلوار پیلی‌دار Flow",
    shortName: "Pleated Flow",
    tagline: "پیلی عمیق با افتی روان.",
    price: 2_890_000,
    palette: "earth",
  },
  {
    slug: "cargo-arc-trousers",
    name: "شلوار کارگو Arc",
    shortName: "Cargo Arc",
    tagline: "کاربردی، بدون حجم اضافه.",
    price: 3_190_000,
    palette: "cool",
    badge: "جدید",
  },
  {
    slug: "straight-studio-trousers",
    name: "شلوار راسته Studio",
    shortName: "Studio Straight",
    tagline: "یک برش مستقیم برای تمام هفته.",
    price: 2_790_000,
    palette: "core",
  },
  {
    slug: "taper-move-trousers",
    name: "شلوار تِیپرد Move",
    shortName: "Move Tapered",
    tagline: "فضا در ران، تمرکز در مچ.",
    price: 2_590_000,
    palette: "sport",
  },
  {
    slug: "drawstring-ease-trousers",
    name: "شلوار بنددار Ease",
    shortName: "Ease Drawstring",
    tagline: "راحتی خانگی با فرم شهری.",
    price: 2_490_000,
    palette: "summer",
  },
  {
    slug: "double-pleat-trousers",
    name: "شلوار دوپیلی Frame",
    shortName: "Frame Double Pleat",
    tagline: "ساختار بیشتر، حرکت همچنان آزاد.",
    price: 3_090_000,
    palette: "earth",
  },
  {
    slug: "cropped-form-trousers",
    name: "شلوار کراپ Form",
    shortName: "Form Cropped",
    tagline: "پایان دقیق روی مچ پا.",
    price: 2_690_000,
    palette: "cool",
  },
  {
    slug: "utility-wide-trousers",
    name: "شلوار واید Utility",
    shortName: "Utility Wide",
    tagline: "پنل‌های کاربردی در یک فرم یکپارچه.",
    price: 3_190_000,
    palette: "sport",
  },
  {
    slug: "soft-tailored-trousers",
    name: "شلوار تیلورد Soft",
    shortName: "Soft Tailored",
    tagline: "مرتب، اما هرگز خشک.",
    price: 2_990_000,
    palette: "summer",
  },
]);

const sneakers = createCategoryProducts("sneakers", [
  {
    slug: "orbit-one-sneaker",
    name: "کتانی Orbit One",
    shortName: "Orbit One",
    tagline: "حجم خالص برای قدم‌های روزمره.",
    price: 3_890_000,
    palette: "core",
    badge: "پرفروش",
  },
  {
    slug: "frame-low-sneaker",
    name: "کتانی Frame Low",
    shortName: "Frame Low",
    tagline: "نزدیک به زمین، ساده و سبک.",
    price: 3_690_000,
    palette: "cool",
  },
  {
    slug: "mono-court-sneaker",
    name: "کتانی Mono Court",
    shortName: "Mono Court",
    tagline: "کلاسیک‌ترین فرم، با کمترین جزئیات.",
    price: 3_790_000,
    palette: "core",
  },
  {
    slug: "axis-runner-sneaker",
    name: "کتانی Axis Runner",
    shortName: "Axis Runner",
    tagline: "لایه‌های فنی برای ریتم شهر.",
    price: 4_290_000,
    palette: "sport",
    badge: "جدید",
  },
  {
    slug: "cloud-step-sneaker",
    name: "کتانی Cloud Step",
    shortName: "Cloud Step",
    tagline: "زیره نرم، حضور پررنگ.",
    price: 4_490_000,
    palette: "summer",
  },
  {
    slug: "line-02-sneaker",
    name: "کتانی Line 02",
    shortName: "Line 02",
    tagline: "یک خط کشیده، بدون حواس‌پرتی.",
    price: 3_990_000,
    palette: "earth",
  },
  {
    slug: "terra-low-sneaker",
    name: "کتانی Terra Low",
    shortName: "Terra Low",
    tagline: "آماده مسیر، مناسب شهر.",
    price: 4_390_000,
    palette: "earth",
  },
  {
    slug: "studio-slip-sneaker",
    name: "کتانی Studio Slip",
    shortName: "Studio Slip",
    tagline: "بدون بند، بدون مکث.",
    price: 3_490_000,
    palette: "cool",
  },
  {
    slug: "block-trainer-sneaker",
    name: "کتانی Block Trainer",
    shortName: "Block Trainer",
    tagline: "حس رترو در یک حجم مدرن.",
    price: 4_590_000,
    palette: "sport",
  },
  {
    slug: "pace-knit-sneaker",
    name: "کتانی Pace Knit",
    shortName: "Pace Knit",
    tagline: "رویه منعطف، قدم سبک.",
    price: 4_190_000,
    palette: "summer",
  },
]);

const shorts = createCategoryProducts("shorts", [
  {
    slug: "motion-shorts",
    name: "شلوارک Motion",
    shortName: "Motion Shorts",
    tagline: "آزاد برای هر حرکت.",
    price: 1_890_000,
    palette: "sport",
    badge: "پرفروش",
  },
  {
    slug: "daily-pleat-shorts",
    name: "شلوارک پیلی‌دار Daily",
    shortName: "Daily Pleat Shorts",
    tagline: "مرتب‌تر از معمول، همچنان راحت.",
    price: 2_190_000,
    palette: "core",
  },
  {
    slug: "cargo-shorts",
    name: "شلوارک کارگو Arc",
    shortName: "Arc Cargo Shorts",
    tagline: "جیب بیشتر، ظاهر آرام.",
    price: 2_390_000,
    palette: "earth",
    badge: "جدید",
  },
  {
    slug: "relaxed-sweat-shorts",
    name: "شلوارک دورس Ease",
    shortName: "Ease Sweat Shorts",
    tagline: "نرم، سبک و آماده هر روز.",
    price: 1_790_000,
    palette: "summer",
  },
  {
    slug: "tailored-shorts",
    name: "شلوارک تیلورد Form",
    shortName: "Form Tailored Shorts",
    tagline: "خط اتو برای یک انتخاب دقیق‌تر.",
    price: 2_290_000,
    palette: "cool",
  },
  {
    slug: "utility-shorts",
    name: "شلوارک Utility",
    shortName: "Utility Shorts",
    tagline: "ساختار فنی، جزئیات کنترل‌شده.",
    price: 2_390_000,
    palette: "sport",
  },
  {
    slug: "longline-shorts",
    name: "شلوارک لانگ‌لاین Flow",
    shortName: "Flow Longline Shorts",
    tagline: "قد بلندتر، سیلوئت روان‌تر.",
    price: 2_090_000,
    palette: "core",
  },
  {
    slug: "track-shorts",
    name: "شلوارک Track",
    shortName: "Track Shorts",
    tagline: "سبک و سریع، بدون ظاهر ورزشی شلوغ.",
    price: 1_890_000,
    palette: "sport",
  },
  {
    slug: "linen-ease-shorts",
    name: "شلوارک لینن Ease",
    shortName: "Linen Ease Shorts",
    tagline: "خنک، طبیعی و بی‌تکلف.",
    price: 2_290_000,
    palette: "earth",
  },
  {
    slug: "panel-shorts",
    name: "شلوارک پنل Shift",
    shortName: "Shift Panel Shorts",
    tagline: "یک درز هندسی برای فرم متفاوت.",
    price: 2_190_000,
    palette: "cool",
  },
]);

export const products: Product[] = [...tshirts, ...trousers, ...sneakers, ...shorts];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getDefaultProductColor(product: Product) {
  return product.colors.find((color) => color.id === product.defaultColorId) ?? product.colors[0];
}

export function formatPrice(price: number) {
  return `${new Intl.NumberFormat("fa-IR").format(price)} تومان`;
}
