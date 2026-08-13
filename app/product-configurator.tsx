"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale, Product } from "./lib/products";

const copy = {
  fa: {
    back: "بازگشت به فروشگاه",
    new: "جدید",
    buy: "خرید",
    stepColor: "اول رنگت را انتخاب کن.",
    color: "رنگ",
    stepSize: "بعد، اندازه‌ی مناسب.",
    size: "سایز",
    sizeGuide: "راهنمای اندازه",
    sizeAdvice: "اگر بین دو سایز هستی، برای فرم آزاد سایز بزرگ‌تر را انتخاب کن.",
    stepFit: "فرم پوشیدن را انتخاب کن.",
    fit: "تن‌خور",
    stepTry: "قبل از خرید، روی خودت ببین.",
    tryTitle: "Try it — پرو مجازی",
    tryText: "یک عکس تمام‌قد بفرست؛ سیف زون این لباس را با هوش مصنوعی روی بدن تو شبیه‌سازی می‌کند.",
    tryButton: "روی خودم امتحانش می‌کنم",
    summary: "انتخاب تو",
    quantity: "تعداد",
    add: "افزودن به سبد",
    delivery: "ارسال رایگان · تعویض تا ۷ روز",
    details: "جزئیات",
    material: "جنس",
    care: "نگهداری",
    fitSection: "فرمی که برای زندگی ساخته شده.",
    fitBody: "در حرکت راحت است، در سکون تمیز می‌ایستد و قرار نیست فقط برای یک فصل خوب به نظر برسد.",
    trySection: "دیدنش روی مدل کافی نیست.",
    trySectionBody: "عکس خودت را بفرست و قبل از تصمیم، لباس را روی فرم واقعی بدنت ببین.",
    modalTitle: "این لباس را روی خودت ببین.",
    modalText: "برای نتیجه‌ی بهتر، عکس روشن و تمام‌قد با دست‌های مشخص انتخاب کن.",
    upload: "انتخاب عکس",
    uploadHint: "JPG، PNG یا WebP · حداکثر ۸ مگابایت",
    generate: "ساخت تصویر پرو",
    generating: "در حال پوشاندن لباس…",
    close: "بستن",
    change: "انتخاب عکس دیگر",
    result: "این هم نتیجه‌ی پرو تو.",
    download: "دانلود تصویر",
    privacy: "عکس برای ساخت نتیجه به OpenAI ارسال می‌شود و در سرور سیف زون ذخیره نمی‌شود.",
    noKey: "پرو مجازی آماده است، اما مدیر فروشگاه باید OPENAI_API_KEY را روی سرور تنظیم کند.",
    genericError: "ساخت تصویر ممکن نشد. لطفاً یک عکس دیگر امتحان کن.",
    invalidImage: "لطفاً یک فایل JPG، PNG یا WebP کوچک‌تر از ۸ مگابایت انتخاب کن.",
    added: "به سبد اضافه شد",
  },
  en: {
    back: "Back to store",
    new: "New",
    buy: "Buy",
    stepColor: "First, choose your colour.",
    color: "Colour",
    stepSize: "Then, find your size.",
    size: "Size",
    sizeGuide: "Size guide",
    sizeAdvice: "Between sizes? Choose the larger one for a more relaxed fit.",
    stepFit: "Choose how you want it to fit.",
    fit: "Fit",
    stepTry: "See it on yourself before you buy.",
    tryTitle: "Try it — virtual fitting",
    tryText: "Upload a full-body photo and Safe Zone will use AI to fit this piece to your body.",
    tryButton: "Try it on me",
    summary: "Your selection",
    quantity: "Quantity",
    add: "Add to bag",
    delivery: "Free delivery · 7-day exchange",
    details: "Details",
    material: "Material",
    care: "Care",
    fitSection: "A shape made for living.",
    fitBody: "Easy in motion, clean at rest, and designed to look right for much longer than one season.",
    trySection: "Seeing it on a model isn’t enough.",
    trySectionBody: "Send your photo and see the piece on your real proportions before you decide.",
    modalTitle: "See this piece on you.",
    modalText: "For the best result, choose a bright full-body photo with your arms visible.",
    upload: "Choose a photo",
    uploadHint: "JPG, PNG or WebP · up to 8 MB",
    generate: "Create my fitting",
    generating: "Fitting your garment…",
    close: "Close",
    change: "Choose another photo",
    result: "Here’s your virtual fitting.",
    download: "Download image",
    privacy: "Your photo is sent to OpenAI to create the result and is not stored by Safe Zone’s server.",
    noKey: "Virtual fitting is ready, but the store owner must configure OPENAI_API_KEY on the server.",
    genericError: "We couldn’t create this image. Please try another photo.",
    invalidImage: "Choose a JPG, PNG or WebP image smaller than 8 MB.",
    added: "Added to bag",
  },
} as const;

export default function ProductConfigurator({
  product,
  locale,
}: {
  product: Product;
  locale: Locale;
}) {
  const text = copy[locale];
  const [colorId, setColorId] = useState(product.colors[0].id);
  const [size, setSize] = useState(product.sizes[2] ?? product.sizes[0]);
  const [fit, setFit] = useState(product.fits[0].id);
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [tryOpen, setTryOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const selectedColor = product.colors.find((color) => color.id === colorId) ?? product.colors[0];
  const selectedFit = product.fits.find((option) => option.id === fit) ?? product.fits[0];
  const languageHref = `/${locale === "fa" ? "en" : "fa"}/product/${product.slug}`;

  function addToBag() {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2400);
  }

  return (
    <div className="product-shell">
      <header className="product-nav">
        <Link className="brand compact-brand" href={`/${locale}`} aria-label="Safe Zone home">
          <span className="brand-mark" aria-hidden="true"><span>S</span><span>Z</span></span>
          <span className="brand-name">SAFE ZONE</span>
        </Link>
        <nav aria-label="Product navigation">
          <a href="#overview">{text.buy}</a>
          <a href="#details">{text.details}</a>
          <a href="#virtual-try">Try it</a>
        </nav>
        <div className="product-nav-actions">
          <Link href={languageHref}>{locale === "fa" ? "EN" : "فا"}</Link>
          <button type="button" onClick={addToBag}>{text.buy}</button>
        </div>
      </header>

      <main>
        <section id="overview" className="product-overview">
          <div className="product-title-row">
            <Link href={`/${locale}`}>← {text.back}</Link>
            <div>
              <span>{product.eyebrow[locale]}</span>
              <h1>{product.name[locale]}</h1>
            </div>
            <p>{product.price[locale]}</p>
          </div>

          <div className="buy-flow">
            <div className="buy-gallery">
              <div className="buy-main-image" style={{ "--selected-color": selectedColor.hex } as React.CSSProperties}>
                <Image
                  key={selectedColor.image}
                  src={selectedColor.image}
                  alt={`${product.name[locale]} — ${selectedColor.label[locale]}`}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
                <span>SAFE ZONE / {product.slug.toUpperCase()}</span>
              </div>
              <div className="buy-secondary-image">
                <Image src={product.secondaryImage} alt="" fill sizes="(max-width: 900px) 100vw, 58vw" />
              </div>
            </div>

            <aside className="configurator" aria-label={text.summary}>
              <p className="product-description">{product.description[locale]}</p>

              <fieldset className="config-step">
                <legend><span>01</span>{text.stepColor}</legend>
                <p>{text.color}: <strong>{selectedColor.label[locale]}</strong></p>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      type="button"
                      className={color.id === colorId ? "selected" : ""}
                      aria-label={color.label[locale]}
                      aria-pressed={color.id === colorId}
                      onClick={() => setColorId(color.id)}
                      key={color.id}
                    >
                      <i style={{ background: color.hex }} />
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="config-step">
                <legend><span>02</span>{text.stepSize}</legend>
                <div className="config-label-row"><p>{text.size}: <strong>{size}</strong></p><button type="button" aria-expanded={sizeGuideOpen} onClick={() => setSizeGuideOpen((value) => !value)}>{text.sizeGuide}</button></div>
                {sizeGuideOpen && <p className="size-advice">{text.sizeAdvice}</p>}
                <div className="size-options">
                  {product.sizes.map((option) => (
                    <button
                      type="button"
                      className={option === size ? "selected" : ""}
                      aria-pressed={option === size}
                      onClick={() => setSize(option)}
                      key={option}
                    >{option}</button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="config-step">
                <legend><span>03</span>{text.stepFit}</legend>
                <p>{text.fit}</p>
                <div className="fit-options">
                  {product.fits.map((option) => (
                    <button
                      type="button"
                      className={option.id === fit ? "selected" : ""}
                      aria-pressed={option.id === fit}
                      onClick={() => setFit(option.id)}
                      key={option.id}
                    >
                      <span>{option.label[locale]}</span>
                      <small>{option.detail[locale]}</small>
                      <i aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="config-step try-option-card">
                <div><span>04</span><h2>{text.stepTry}</h2></div>
                <p>{text.tryText}</p>
                <button type="button" onClick={() => setTryOpen(true)}>
                  <span className="try-spark" aria-hidden="true">✦</span>
                  {text.tryButton}
                  <span aria-hidden="true">↙</span>
                </button>
              </div>

              <div className="purchase-summary">
                <div>
                  <span>{text.summary}</span>
                  <p>{selectedColor.label[locale]} · {size} · {selectedFit.label[locale]}</p>
                </div>
                <label>{text.quantity}
                  <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
                    {[1, 2, 3].map((value) => <option value={value} key={value}>{value}</option>)}
                  </select>
                </label>
                <button type="button" className="purchase-button" onClick={addToBag}>
                  <span>{added ? text.added : text.add}</span>
                  <span>{product.price[locale]}</span>
                </button>
                <small>{text.delivery}</small>
              </div>
            </aside>
          </div>
        </section>

        <section id="details" className="product-feature">
          <div className="feature-copy">
            <span>SAFE ZONE / MATERIAL STUDY</span>
            <h2>{product.featureTitle[locale]}</h2>
            <p>{product.featureText[locale]}</p>
            <dl>
              <div><dt>{text.material}</dt><dd>{product.material[locale]}</dd></div>
              <div><dt>{text.care}</dt><dd>{product.care[locale]}</dd></div>
            </dl>
          </div>
          <div className="feature-image">
            <Image src={product.secondaryImage} alt="" fill sizes="50vw" />
          </div>
        </section>

        <section className="fit-manifesto">
          <span>FIT / 01</span>
          <h2>{text.fitSection}</h2>
          <p>{text.fitBody}</p>
        </section>

        <section id="virtual-try" className="virtual-try-section">
          <div className="virtual-try-visual">
            <Image src={selectedColor.image} alt="" fill sizes="50vw" />
            <div className="scan-line" aria-hidden="true" />
            <span aria-hidden="true">AI FIT / SAFE ZONE</span>
          </div>
          <div>
            <span className="eyebrow">TRY IT / POWERED BY OPENAI</span>
            <h2>{text.trySection}</h2>
            <p>{text.trySectionBody}</p>
            <button type="button" className="button button-dark" onClick={() => setTryOpen(true)}>
              {text.tryButton}<span aria-hidden="true">✦</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="product-footer">
        <span>SAFE ZONE</span>
        <Link href={`/${locale}`}>{text.back}</Link>
        <span>TEHRAN / 2026</span>
      </footer>

      <TryOnDialog
        open={tryOpen}
        onClose={() => setTryOpen(false)}
        product={product}
        locale={locale}
        color={selectedColor.id}
        fit={fit}
        size={size}
      />

      <div className={`toast ${added ? "show" : ""}`} role="status">
        <span aria-hidden="true">✓</span>{text.added}
      </div>
    </div>
  );
}

function TryOnDialog({
  open,
  onClose,
  product,
  locale,
  color,
  fit,
  size,
}: {
  open: boolean;
  onClose: () => void;
  product: Product;
  locale: Locale;
  color: string;
  fit: string;
  size: string;
}) {
  const text = copy[locale];
  const inputRef = useRef<HTMLInputElement>(null);
  const previewUrlRef = useRef("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const acceptedTypes = useMemo(() => new Set(["image/jpeg", "image/png", "image/webp"]), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => () => {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !loading) onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [loading, onClose, open]);

  if (!open) return null;

  function chooseFile(nextFile?: File) {
    if (!nextFile || !acceptedTypes.has(nextFile.type) || nextFile.size > 8 * 1024 * 1024) {
      setError(text.invalidImage);
      return;
    }
    setError("");
    setResult("");
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = URL.createObjectURL(nextFile);
    setPreview(previewUrlRef.current);
    setFile(nextFile);
  }

  function resetUpload() {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = "";
    setPreview("");
    setResult("");
    setError("");
    setFile(null);
  }

  async function generateTryOn() {
    if (!file || loading) return;
    setLoading(true);
    setError("");

    const body = new FormData();
    body.append("image", file);
    body.append("productSlug", product.slug);
    body.append("color", color);
    body.append("fit", fit);
    body.append("size", size);

    try {
      const response = await fetch("/api/try-on", { method: "POST", body });
      const payload = await response.json() as { image?: string; code?: string; message?: string };

      if (!response.ok || !payload.image) {
        setError(payload.code === "API_NOT_CONFIGURED" ? text.noKey : text.genericError);
        return;
      }

      setResult(payload.image);
    } catch {
      setError(text.genericError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="try-dialog-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget && !loading) onClose();
    }}>
      <section className="try-dialog" role="dialog" aria-modal="true" aria-labelledby="try-dialog-title">
        <button className="dialog-close" type="button" onClick={onClose} disabled={loading} aria-label={text.close}>×</button>
        <div className="try-dialog-copy">
          <span className="eyebrow">SAFE ZONE / AI FITTING</span>
          <h2 id="try-dialog-title">{result ? text.result : text.modalTitle}</h2>
          {!result && <p>{text.modalText}</p>}
        </div>

        {result ? (
          <div className="try-result">
            {/* A generated data URL is intentionally rendered with a native image element. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={result} alt={text.result} />
            <div>
              <a href={result} download={`safe-zone-${product.slug}-try-on.jpg`}>{text.download}</a>
              <button type="button" onClick={resetUpload}>{text.change}</button>
            </div>
          </div>
        ) : (
          <>
            <div
              className={`try-upload ${preview ? "has-preview" : ""}`}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                chooseFile(event.dataTransfer.files[0]);
              }}
            >
              {preview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={preview} alt="" />
              ) : (
                <div><span aria-hidden="true">＋</span><strong>{text.upload}</strong><small>{text.uploadHint}</small></div>
              )}
              <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(event) => chooseFile(event.target.files?.[0])}
              />
              <button type="button" onClick={() => inputRef.current?.click()}>{preview ? text.change : text.upload}</button>
            </div>
            {error && <p className="try-error" role="alert">{error}</p>}
            <button className="generate-try-button" type="button" onClick={generateTryOn} disabled={!file || loading}>
              {loading ? <><i aria-hidden="true" />{text.generating}</> : <>{text.generate}<span aria-hidden="true">✦</span></>}
            </button>
            <p className="try-privacy">{text.privacy}</p>
          </>
        )}
      </section>
    </div>
  );
}
