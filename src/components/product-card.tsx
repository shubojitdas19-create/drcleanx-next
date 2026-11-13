import Image from "next/image";
import { Check, ShoppingBag } from "lucide-react";

export type StoreProduct = {
  id: string;
  name: string;
  category: string;
  size: string;
  price: string;
  description: string;
  image: string;
  imageAlt: string;
  photoBackground?: boolean;
};

type ProductCardProps = {
  product: StoreProduct;
  isAdded: boolean;
  onAdd: (product: StoreProduct) => void;
};

export function ProductCard({ product, isAdded, onAdd }: ProductCardProps) {
  return (
    <article className="product-card">
      <div
        className={`product-card-art${product.photoBackground ? " product-card-art--photographic" : ""}`}
        style={{ minHeight: 150, position: "relative" }}
      >
        <span className="product-category-tag">{product.category}</span>
        <span className="product-size-chip">{product.size}</span>
        <div
          className={`product-image-wrap${product.photoBackground ? " product-image-wrap--photo" : ""}`}
          style={{ inset: 0, position: "absolute" }}
        >
          <Image
            alt={product.imageAlt}
            className="product-card-image"
            fill
            sizes="(max-width: 680px) 42vw, (max-width: 1100px) 46vw, 24vw"
            src={product.image}
          />
        </div>
      </div>
      <div className="product-card-content">
        <p className="product-card-brand">DRCLEANX HOME CARE</p>
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-description">{product.description}</p>
        <div className="product-card-price-row">
          <span className="product-card-price">{product.price}</span>
          <span className="product-card-pack">per pack</span>
        </div>
        <button
          aria-label={isAdded ? `${product.name} added to your bag` : `Add ${product.name} to cart`}
          className={`product-add-button${isAdded ? " is-added" : ""}`}
          onClick={() => onAdd(product)}
          type="button"
        >
          {isAdded ? <Check aria-hidden="true" size={17} /> : <ShoppingBag aria-hidden="true" size={17} />}
          {isAdded ? "Added to Bag" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
