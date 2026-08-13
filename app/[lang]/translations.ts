export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];

export const hasLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale);

const fa = {
  locale: "fa" as const,
  skip: "رفتن به محتوای اصلی",
  announcement: "ارسال رایگان برای خریدهای بالای ۳ میلیون تومان",
  nav: ["جدیدها", "تی‌شرت", "شلوار", "همه محصولات"],
  menu: "منو",
  close: "بستن",
  cart: "سبد",
  language: "EN",
  languageLabel: "تغییر زبان به انگلیسی",
  drop: "دراپ ۰۱ / تابستان ۱۴۰۵",
  heroEyebrow: "EVERYDAY, REFRAMED",
  heroTitle: "جایی امن، برای خودِ واقعی‌ات.",
  heroText:
    "لباس‌های ساده‌ای که قرار نیست ساده از کنارشان بگذری؛ خوش‌فرم، ماندگار و آماده برای هر روز.",
  heroAlt: "چهار مدل جوان ایرانی در کالکشن تابستانی سیف زون",
  shopDrop: "دیدن کالکشن",
  discover: "کشف سیف زون",
  scroll: "اسکرول کن",
  categoriesEyebrow: "شروع انتخاب",
  categoriesTitle: "چیزی که امروز می‌پوشی، از اینجا شروع می‌شود.",
  categories: [
    { name: "تی‌شرت‌ها", count: "۲۴ مدل", image: "/category-tshirts.jpg", alt: "دختر و پسر ایرانی با تی‌شرت‌های اورسایز سیف زون" },
    { name: "شلوارها", count: "۱۸ مدل", image: "/category-trousers.jpg", alt: "مدل مرد ایرانی با شلوار واید مشکی سیف زون" },
    { name: "لایه‌های بعدی", count: "۱۲ مدل", image: "/category-layers.jpg", alt: "مدل زن ایرانی با پلیور بافت آجری سیف زون" },
  ],
  editEyebrow: "منتخب تازه",
  editTitle: "لباس‌های خوب، بی‌سروصدا ماندگار می‌شوند.",
  viewAll: "مشاهده همه",
  add: "افزودن",
  added: "به سبد اضافه شد",
  products: [
    { slug: "stone-oversized-tee", name: "تی‌شرت اورسایز سنگی", price: "۱٬۴۸۰٬۰۰۰ تومان", tag: "جدید", image: "/product-stone-tee.jpg", alt: "مدل زن ایرانی با تی‌شرت اورسایز سنگی" },
    { slug: "black-wide-trousers", name: "شلوار واید مشکی", price: "۲٬۶۹۰٬۰۰۰ تومان", tag: "پرفروش", image: "/product-black-trousers.jpg", alt: "مدل مرد ایرانی با شلوار واید مشکی" },
    { slug: "charcoal-heavyweight-tee", name: "تی‌شرت هوی وِیت ذغالی", price: "۱٬۶۵۰٬۰۰۰ تومان", tag: "جدید", image: "/product-charcoal-tee.jpg", alt: "مدل مرد ایرانی با تی‌شرت هوی ویت ذغالی" },
    { slug: "rust-knit-pullover", name: "پلیور بافت آجری", price: "۲٬۹۸۰٬۰۰۰ تومان", tag: "محدود", image: "/category-layers.jpg", alt: "مدل زن ایرانی با پلیور بافت آجری" },
  ],
  founderEyebrow: "از دل تهران / پشت سیف زون",
  founderTitle: "این‌جا از یک نگاه واقعی شروع شد.",
  founderText:
    "سیف زون فقط یک فروشگاه نیست؛ نتیجه‌ی آدم‌هایی است که به لباس، جزئیات و زندگی روزمره‌ی این شهر نگاه خودشان را دارند.",
  founderCaption: "یکی از بنیان‌گذارهای سیف زون / تهران، ۱۴۰۵",
  founderAlt: "پرتره‌ی یکی از بنیان‌گذارهای سیف زون",
  statement: "ما دنبال ترند بعدی نیستیم.",
  statementBody:
    "سیف زون برای لحظه‌هایی ساخته شده که خودت هستی. پارچه‌های بهتر، فرم‌های آزاد و جزئیاتی که عمر می‌کنند؛ نه فقط یک فصل.",
  storyLink: "داستان ما",
  values: [
    ["ارسال سریع", "تهران ۱ تا ۲ روز کاری"],
    ["تعویض آسان", "تا ۷ روز پس از تحویل"],
    ["انتخاب مسئولانه", "تعداد کم، کیفیت بیشتر"],
  ],
  newsletterTitle: "از دراپ بعدی جا نمان.",
  newsletterText: "خبرهای کوتاه، لباس‌های تازه و هیچ چیز اضافه‌ای.",
  email: "ایمیل شما",
  join: "عضویت",
  emailLabel: "آدرس ایمیل",
  footerNav: ["راهنمای سایز", "ارسال و مرجوعی", "پشتیبانی", "اینستاگرام"],
  copyright: "© ۱۴۰۵ سیف زون",
};

const en = {
  locale: "en" as const,
  skip: "Skip to main content",
  announcement: "Free delivery on orders over 3,000,000 Toman",
  nav: ["New in", "T-shirts", "Trousers", "Shop all"],
  menu: "Menu",
  close: "Close",
  cart: "Bag",
  language: "فا",
  languageLabel: "Switch language to Persian",
  drop: "DROP 01 / SUMMER 2026",
  heroEyebrow: "EVERYDAY, REFRAMED",
  heroTitle: "A safe place to be yourself.",
  heroText:
    "Quiet essentials that are impossible to overlook—considered fits, lasting fabrics, made for every day.",
  heroAlt: "Four young Iranian models wearing the Safe Zone summer collection",
  shopDrop: "Shop the drop",
  discover: "Discover Safe Zone",
  scroll: "Scroll",
  categoriesEyebrow: "START HERE",
  categoriesTitle: "What you wear today starts here.",
  categories: [
    { name: "T-shirts", count: "24 styles", image: "/category-tshirts.jpg", alt: "Iranian woman and man in oversized Safe Zone T-shirts" },
    { name: "Trousers", count: "18 styles", image: "/category-trousers.jpg", alt: "Iranian male model in black wide-leg Safe Zone trousers" },
    { name: "Next layers", count: "12 styles", image: "/category-layers.jpg", alt: "Iranian female model in a rust Safe Zone knit" },
  ],
  editEyebrow: "THE NEW EDIT",
  editTitle: "Good clothes stay—with very little noise.",
  viewAll: "View all",
  add: "Add",
  added: "Added to bag",
  products: [
    { slug: "stone-oversized-tee", name: "Stone oversized tee", price: "1,480,000 Toman", tag: "New", image: "/product-stone-tee.jpg", alt: "Iranian female model in a stone oversized T-shirt" },
    { slug: "black-wide-trousers", name: "Black wide trousers", price: "2,690,000 Toman", tag: "Bestseller", image: "/product-black-trousers.jpg", alt: "Iranian male model in black wide-leg trousers" },
    { slug: "charcoal-heavyweight-tee", name: "Charcoal heavyweight tee", price: "1,650,000 Toman", tag: "New", image: "/product-charcoal-tee.jpg", alt: "Iranian male model in a charcoal heavyweight T-shirt" },
    { slug: "rust-knit-pullover", name: "Rust knit pullover", price: "2,980,000 Toman", tag: "Limited", image: "/category-layers.jpg", alt: "Iranian female model in a rust knit pullover" },
  ],
  founderEyebrow: "FROM TEHRAN / BEHIND SAFE ZONE",
  founderTitle: "It started with a real point of view.",
  founderText:
    "Safe Zone is more than a store. It is shaped by people with their own view of clothes, detail and everyday life in this city.",
  founderCaption: "One of the Safe Zone founders / Tehran, 2026",
  founderAlt: "Portrait of one of the Safe Zone founders",
  statement: "We’re not chasing the next trend.",
  statementBody:
    "Safe Zone is built for the moments you feel most like yourself. Better fabrics, easy shapes and details made to outlive a season.",
  storyLink: "Our story",
  values: [
    ["Fast delivery", "Tehran in 1–2 working days"],
    ["Easy exchange", "Within 7 days of delivery"],
    ["Considered choice", "Fewer pieces, better quality"],
  ],
  newsletterTitle: "Don’t miss the next drop.",
  newsletterText: "Small updates, fresh clothes, nothing extra.",
  email: "Your email",
  join: "Join",
  emailLabel: "Email address",
  footerNav: ["Size guide", "Delivery & returns", "Support", "Instagram"],
  copyright: "© 2026 Safe Zone",
};

export const translations = { fa, en };
export type Translation = typeof fa | typeof en;
