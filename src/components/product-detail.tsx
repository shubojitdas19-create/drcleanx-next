"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ChangeEvent } from "react";
import { Check, ChevronRight, Heart, ShieldAlert, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { ProductReviews } from "@/components/product-reviews";
import { shopProducts, type ShopProduct } from "@/components/shop-products";

type ProductDetailProps = {
  product: ShopProduct;
};

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "reviews">("details");

  const selectedVariant = product.variants?.find((variant) => variant.id === selectedVariantId);
  const currentPrice = selectedVariant?.price ?? product.price;
  const currentSize = selectedVariant?.label ?? product.size;
  const relatedProducts = shopProducts
    .filter((item) => item.id !== product.id && item.category === product.category)
    .concat(shopProducts.filter((item) => item.id !== product.id && item.category !== product.category))
    .slice(0, 4);

  function updateQuantity(event: ChangeEvent<HTMLInputElement>) {
    const value = Number.parseInt(event.target.value, 10);
    if (Number.isFinite(value)) setQuantity(Math.min(99, Math.max(1, value)));
  }

  function addToBag() {
    const productKey = selectedVariant ? `${product.id}-${selectedVariant.id}` : product.id;
    addItem(productKey, quantity, {
      productId: product.id,
      name: product.name,
      image: product.image,
      imageAlt: product.imageAlt,
      size: currentSize,
      unitPrice: currentPrice,
      ...(selectedVariant ? { variantId: selectedVariant.id } : {}),
    });
    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 2200);
  }

  return (
    <main className="product-page">
      <div className="product-page-inner">
        <nav aria-label="Breadcrumb" className="product-breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight aria-hidden="true" size={14} />
          <Link href="/shop">Shop</Link>
          <ChevronRight aria-hidden="true" size={14} />
          <span aria-current="page">{product.name}</span>
        </nav>

        <section aria-labelledby="product-title" className="product-main-grid">
          <div className="product-visual">
            <div className="product-visual-frame">
              <Image
                alt={product.imageAlt}
                className="product-visual-image"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 50vw"
                src={product.image}
              />
              {product.badge ? <span className="product-badge">{product.badge}</span> : null}
              <button
                aria-label={isSaved ? "Remove product from saved items" : "Save product"}
                aria-pressed={isSaved}
                className={`product-save-button${isSaved ? " is-saved" : ""}`}
                onClick={() => setIsSaved((saved) => !saved)}
                type="button"
              >
                <Heart aria-hidden="true" fill={isSaved ? "currentColor" : "none"} size={19} />
              </button>
            </div>
            <p className="product-image-caption">Product packaging and appearance may vary slightly by batch.</p>
          </div>

          <div className="product-purchase-panel">
            <p className="product-category-label">{product.category}</p>
            <h1 className="product-title" id="product-title">{product.name}</h1>
            <p className="product-size-label">{currentSize}</p>
            <button
              className="product-reviews-jump"
              onClick={() => {
                setActiveTab("reviews");
                document.getElementById("product-information")?.scrollIntoView({ behavior: "smooth" });
              }}
              type="button"
            >
              View customer reviews
              <ChevronRight aria-hidden="true" size={15} />
            </button>

            <p className="product-short-description">{product.description}</p>

            {product.safetyNote ? (
              <div className="product-safety-note" role="note">
                <ShieldAlert aria-hidden="true" size={18} />
                <p>{product.safetyNote}</p>
              </div>
            ) : null}

            <div className="product-purchase-box">
              <div className="product-price-line">
                <span className="product-price">{priceFormatter.format(currentPrice)}</span>
                <span className="product-preview-label">Preview price</span>
              </div>

              {product.variants ? (
                <div className="product-control">
                  <label htmlFor="product-variant">Choose a pack</label>
                  <select
                    id="product-variant"
                    onChange={(event) => setSelectedVariantId(event.target.value)}
                    value={selectedVariantId}
                  >
                    {product.variants.map((variant) => (
                      <option key={variant.id} value={variant.id}>{variant.label}</option>
                    ))}
                  </select>
                </div>
              ) : null}

              <div className="product-control">
                <label htmlFor="product-quantity">Quantity</label>
                <div className="product-quantity-control">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    type="button"
                  >−</button>
                  <input
                    id="product-quantity"
                    inputMode="numeric"
                    max={99}
                    min={1}
                    onChange={updateQuantity}
                    type="number"
                    value={quantity}
                  />
                  <button
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((value) => Math.min(99, value + 1))}
                    type="button"
                  >+</button>
                </div>
              </div>

              <button className={`product-add-button${isAdded ? " is-added" : ""}`} onClick={addToBag} type="button">
                {isAdded ? <Check aria-hidden="true" size={19} /> : <ShoppingBag aria-hidden="true" size={19} />}
                {isAdded ? "Added to bag" : "Add to bag"}
              </button>
              <p aria-live="polite" className="product-add-status" role="status">
                {isAdded ? `${quantity} ${quantity === 1 ? "item" : "items"} added to your bag.` : ""}
              </p>
            </div>

            <p className="product-price-disclaimer">
              Prices are illustrative for this frontend preview and may change before launch.
            </p>
          </div>
        </section>

        <section aria-label="Product information" className="product-information" id="product-information">
          <div aria-label="Product information sections" className="product-tabs" role="tablist">
            <button
              aria-controls="product-details-panel"
              aria-selected={activeTab === "details"}
              className={activeTab === "details" ? "is-active" : ""}
              id="product-details-tab"
              onClick={() => setActiveTab("details")}
              role="tab"
              type="button"
            >Product details</button>
            <button
              aria-controls="product-reviews-panel"
              aria-selected={activeTab === "reviews"}
              className={activeTab === "reviews" ? "is-active" : ""}
              id="product-reviews-tab"
              onClick={() => setActiveTab("reviews")}
              role="tab"
              type="button"
            >Customer reviews</button>
          </div>

          <div
            aria-labelledby="product-details-tab"
            className="product-details-panel"
            hidden={activeTab !== "details"}
            id="product-details-panel"
            role="tabpanel"
          >
            <div className="product-details-copy">
              <p className="product-section-eyebrow">Product information</p>
              <h2>Made for everyday routines</h2>
              <p>{product.description}</p>
              <p className="product-label-reminder">
                For ingredients, directions, and complete product information, please refer to the packaging label.
              </p>
            </div>
            <dl className="product-spec-list">
              <div><dt>Product</dt><dd>{product.name}</dd></div>
              <div><dt>Category</dt><dd>{product.category}</dd></div>
              <div><dt>Pack</dt><dd>{currentSize}</dd></div>
              <div><dt>Price</dt><dd>{priceFormatter.format(currentPrice)} <span>(preview)</span></dd></div>
            </dl>
            {product.safetyNote ? (
              <div className="product-detail-safety">
                <ShieldAlert aria-hidden="true" size={18} />
                <div><h3>Safety information</h3><p>{product.safetyNote}</p></div>
              </div>
            ) : null}
          </div>
          <div
            aria-labelledby="product-reviews-tab"
            className="product-reviews-panel"
            hidden={activeTab !== "reviews"}
            id="product-reviews-panel"
            role="tabpanel"
          >
            <ProductReviews productId={product.id} />
          </div>
        </section>

        {relatedProducts.length > 0 ? (
          <section aria-labelledby="related-products-title" className="related-products-section">
            <div className="related-products-heading">
              <div>
                <p className="product-section-eyebrow">Keep exploring</p>
                <h2 id="related-products-title">You might also like</h2>
              </div>
              <Link href="/shop">Shop all products <ChevronRight aria-hidden="true" size={16} /></Link>
            </div>
            <ul className="related-products-grid">
              {relatedProducts.map((item) => (
                <li key={item.id}>
                  <Link className="related-product-card" href={`/shop/${item.id}`}>
                    <span className="related-product-image-wrap">
                      <Image alt={item.imageAlt} fill sizes="(max-width: 600px) 45vw, 220px" src={item.image} />
                    </span>
                    <span className="related-product-category">{item.category}</span>
                    <span className="related-product-name">{item.name}</span>
                    <span className="related-product-price">{priceFormatter.format(item.price)} <small>preview</small></span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  );
}
