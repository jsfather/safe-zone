"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Translation } from "./[lang]/translations";

export default function Storefront({ content }: { content: Translation }) {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const languageHref = content.locale === "fa" ? "/en" : "/fa";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function addToBag(name: string) {
    setCartCount((count) => count + 1);
    setToast(`${name} — ${content.added}`);
    window.setTimeout(() => setToast(""), 2600);
  }

  return (
    <>
      <a className="skip-link" href="#main">
        {content.skip}
      </a>

      <div className="announcement">
        <span>{content.announcement}</span>
        <span aria-hidden="true">✦</span>
        <span>SAFE ZONE / EST. 2026</span>
      </div>

      <header className="site-header">
        <Link className="brand" href={`/${content.locale}`} aria-label="Safe Zone home">
          <span className="brand-mark" aria-hidden="true">
            <span>S</span>
            <span>Z</span>
          </span>
          <span className="brand-name">SAFE ZONE</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {content.nav.map((item, index) => (
            <a href={index === 0 ? "#new" : "#categories"} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="language-link" href={languageHref} aria-label={content.languageLabel}>
            {content.language}
          </Link>
          <button className="bag-button" type="button" aria-label={`${content.cart}: ${cartCount}`}>
            {content.cart} <span>{String(cartCount).padStart(2, "0")}</span>
          </button>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span>{content.menu}</span>
            <i aria-hidden="true" />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-top">
          <span className="brand-name">SAFE ZONE</span>
          <button type="button" onClick={() => setMenuOpen(false)}>
            {content.close} <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {content.nav.map((item, index) => (
            <a href={index === 0 ? "#new" : "#categories"} key={item} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item}
            </a>
          ))}
        </nav>
        <Link href={languageHref}>{content.languageLabel}</Link>
      </div>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/safe-zone-hero-v2.jpg"
            alt={content.heroAlt}
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-scrim" />
          <div className="hero-copy">
            <div className="hero-meta">
              <span>{content.drop}</span>
              <span>{content.heroEyebrow}</span>
            </div>
            <h1 id="hero-title">{content.heroTitle}</h1>
            <p>{content.heroText}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#new">
                {content.shopDrop}<span aria-hidden="true">↙</span>
              </a>
              <a className="text-link" href="#story">{content.discover}</a>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">SZ—001</div>
          <a className="scroll-cue" href="#categories">
            <span>{content.scroll}</span><i aria-hidden="true" />
          </a>
        </section>

        <section id="categories" className="categories section-pad" aria-labelledby="category-title">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{content.categoriesEyebrow}</span>
              <h2 id="category-title">{content.categoriesTitle}</h2>
            </div>
            <span className="section-index">01 — 03</span>
          </div>

          <div className="category-grid">
            {content.categories.map((category, index) => (
              <a className="category-card" href="#new" key={category.name}>
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 700px) 86vw, 33vw"
                />
                <span className="category-number">0{index + 1}</span>
                <div className="category-label">
                  <div>
                    <h3>{category.name}</h3>
                    <span>{category.count}</span>
                  </div>
                  <span className="circle-arrow" aria-hidden="true">↙</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="new" className="new-edit section-pad" aria-labelledby="edit-title">
          <div className="section-heading section-heading-light">
            <div>
              <span className="eyebrow">{content.editEyebrow}</span>
              <h2 id="edit-title">{content.editTitle}</h2>
            </div>
            <a className="text-link light" href="#new">{content.viewAll}</a>
          </div>

          <div className="product-grid">
            {content.products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <Link className="product-visual-link" href={`/${content.locale}/product/${product.slug}`}>
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 700px) 76vw, 25vw"
                    />
                    <span className="product-tag">{product.tag}</span>
                  </Link>
                  <button type="button" onClick={() => addToBag(product.name)}>
                    <span>{content.add}</span><span aria-hidden="true">＋</span>
                  </button>
                </div>
                <div className="product-info">
                  <h3><Link href={`/${content.locale}/product/${product.slug}`}>{product.name}</Link></h3>
                  <span>{product.price}</span>
                  <span className="product-number">0{index + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="founder-note section-pad" aria-labelledby="founder-title">
          <div className="founder-image">
            <Image
              src="/founder-campaign-v2.jpg"
              alt={content.founderAlt}
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
            />
            <span>TEHRAN — 2026</span>
          </div>
          <div className="founder-copy">
            <span className="eyebrow">{content.founderEyebrow}</span>
            <h2 id="founder-title">{content.founderTitle}</h2>
            <p>{content.founderText}</p>
            <span className="founder-caption">{content.founderCaption}</span>
          </div>
        </section>

        <section id="story" className="story section-pad" aria-labelledby="story-title">
          <div className="story-stamp" aria-hidden="true">
            <span>SAFE</span><span>ZONE</span>
          </div>
          <div className="story-copy">
            <span className="eyebrow">OUR POINT OF VIEW / 2026</span>
            <h2 id="story-title">{content.statement}</h2>
            <p>{content.statementBody}</p>
            <a className="text-link" href="#story">{content.storyLink}</a>
          </div>
          <div className="story-art" aria-hidden="true">
            <div className="seam seam-one" />
            <div className="seam seam-two" />
            <span>SZ</span>
          </div>
        </section>

        <section className="values" aria-label="Store services">
          {content.values.map(([title, detail], index) => (
            <div key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{detail}</p></div>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <div className="newsletter">
          <div>
            <span className="eyebrow">SAFE LETTERS</span>
            <h2>{content.newsletterTitle}</h2>
            <p>{content.newsletterText}</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">{content.emailLabel}</label>
            <input id="newsletter-email" type="email" placeholder={content.email} required />
            <button type="submit">{content.join}<span aria-hidden="true">↙</span></button>
          </form>
        </div>

        <div className="footer-brand" aria-label="Safe Zone">SAFE ZONE</div>

        <div className="footer-bottom">
          <span>{content.copyright}</span>
          <nav aria-label="Footer navigation">
            {content.footerNav.map((item) => <a href="#main" key={item}>{item}</a>)}
          </nav>
          <span>TEHRAN / 35.6892° N</span>
        </div>
      </footer>

      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>{toast}
      </div>
    </>
  );
}
