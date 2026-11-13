import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function StorefrontHero() {
  return (
    <div className="hero-shell" id="home">
      <section aria-labelledby="hero-title" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> THE DRCLEANX HOME CARE RANGE</p>
          <h1 id="hero-title">Clean today.<br /><span>Fresh</span> tomorrow.</h1>
          <p className="hero-description">Everyday cleaning essentials for the rooms, routines and little resets that make a house feel like home.</p>
          <div className="hero-actions">
            <Link className="primary-cta" href="/shop">Shop the collection <ArrowRight size={17} aria-hidden="true" /></Link>
            <a className="text-cta" href="/about">Meet DrCleanX <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-trust"><span className="trust-mark"><Sparkles size={14} aria-hidden="true" /></span> Everyday care, made for your home</div>
        </div>

        <div className="hero-visual">
          <div aria-hidden="true" className="hero-bubbles">
            <span className="soap-bubble bubble-one" />
            <span className="soap-bubble bubble-two" />
            <span className="soap-bubble bubble-three" />
            <span className="soap-bubble bubble-four" />
            <Sparkles className="hero-sparkle sparkle-one" size={24} />
            <Sparkles className="hero-sparkle sparkle-two" size={17} />
          </div>

          <div className="product-composition">
            <div className="product-item product-item--glass">
              <Image alt="DrCleanX glass cleaner bottle" className="hero-product-image" fill priority sizes="(max-width: 680px) 45vw, 25vw" src="/drcleanx-glass-cleaner.png" />
            </div>
            <div className="product-item product-item--dishwash">
              <Image alt="DrCleanX dishwash gel bottle" className="hero-product-image" fill priority sizes="(max-width: 680px) 45vw, 25vw" src="/drcleanx-dishwash-gel.png" />
            </div>
          </div>

          <div className="hero-badge hero-badge--streak">
            <span className="badge-icon"><Sparkles size={15} aria-hidden="true" /></span>
            <span><strong>100% streak-free</strong><small>DrCleanX glass cleaner</small></span>
          </div>
          <div className="hero-badge hero-badge--citrus">
            <span className="badge-icon badge-icon--citrus" aria-hidden="true"><Sparkles size={15} /></span>
            <span><strong>Powerful protection</strong><small>DrCleanX dishwash gel</small></span>
          </div>
        </div>
      </section>
    </div>
  );
}
