"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShieldAlert, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import type { ShopProduct } from "@/components/shop-products";

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

type ShopProductCardProps = {
  product: ShopProduct;
};

export function ShopProductCard({ product }: ShopProductCardProps) {
  const { addItem } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id ?? "");
  const [isAdded, setIsAdded] = useState(false);
  const selectedVariant = product.variants?.find((variant) => variant.id === selectedVariantId);
  const currentPrice = selectedVariant?.price ?? product.price;
  const currentSize = selectedVariant?.label ?? product.size;
  const variantSelectId = `shop-variant-${product.id}`;

  function handleAdd() {
    const productKey = selectedVariant ? `${product.id}-${selectedVariant.id}` : product.id;
    addItem(productKey, 1, {
      productId: product.id,
      name: product.name,
      image: product.image,
      imageAlt: product.imageAlt,
      size: currentSize,
      unitPrice: currentPrice,
      ...(selectedVariant ? { variantId: selectedVariant.id } : {}),
    });
    setIsAdded(true);
  }

  return (
    <article className="shop-product-card">
      <Link
        aria-label={`View ${product.name} product details`}
        className="shop-product-art"
        href={`/shop/${product.id}`}
      >
        <Image
          alt={product.imageAlt}
          className="shop-product-image"
          fill
          sizes="(max-width: 680px) 46vw, (max-width: 1000px) 30vw, 23vw"
          src={product.image}
        />
        {product.badge ? <span className="shop-product-badge">{product.badge}</span> : null}
      </Link>

      <div className="shop-product-content">
        <p className="shop-product-category">{product.category}</p>
        <h3 className="shop-product-name">
          <Link className="shop-product-name-link" href={`/shop/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="shop-product-size">{currentSize}</p>
        <p className="shop-product-description">{product.description}</p>

        {product.variants ? (
          <div className="shop-variant-field">
            <label className="shop-variant-label" htmlFor={variantSelectId}>
              Pack size
            </label>
            <select
              className="shop-variant-select"
              id={variantSelectId}
              onChange={(event) => {
                setSelectedVariantId(event.target.value);
                setIsAdded(false);
              }}
              value={selectedVariantId}
            >
              {product.variants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.label}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        {product.safetyNote ? (
          <p className="shop-product-safety">
            <ShieldAlert aria-hidden="true" size={15} />
            <span>{product.safetyNote}</span>
          </p>
        ) : null}

        <div className="shop-product-buy">
          <div className="shop-product-price-row">
            <span className="shop-product-price">{priceFormatter.format(currentPrice)}</span>
            <span className="shop-product-price-caption">preview</span>
          </div>
          <button
            aria-label={`${isAdded ? "Add another" : "Add"} ${product.name}, ${currentSize}, to bag`}
            className={`shop-add-button${isAdded ? " is-added" : ""}`}
            onClick={handleAdd}
            type="button"
          >
            {isAdded ? <Check aria-hidden="true" size={17} /> : <ShoppingBag aria-hidden="true" size={17} />}
            {isAdded ? "Added to bag" : "Add to bag"}
          </button>
          <span aria-atomic="true" aria-live="polite" className="sr-only" role="status">
            {isAdded ? `${product.name}, ${currentSize}, added to your bag.` : ""}
          </span>
        </div>
      </div>
    </article>
  );
}
