"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { ProductCard, type StoreProduct } from "@/components/product-card";

const products: StoreProduct[] = [
  {
    id: "glass-cleaner",
    name: "Glass Cleaner",
    category: "Glass care",
    size: "500 ml · Pack of 1",
    price: "₹99",
    description: "A streak-free finish for glass, windows and mirrors.",
    image: "/drcleanx-glass-cleaner.png",
    imageAlt: "DrCleanX 500 ml glass cleaner spray bottle",
  },
  {
    id: "toilet-cleaner",
    name: "Toilet Cleaner",
    category: "Bathroom care",
    size: "500 ml · Pack of 1",
    price: "₹109",
    description: "Deep-cleaning care for everyday bathroom routines.",
    image: "/drcleanx-toilet-cleaner.png",
    imageAlt: "DrCleanX 500 ml toilet cleaner bottle",
  },
  {
    id: "dishwash-gel",
    name: "Citrus Dishwash Gel",
    category: "Kitchen care",
    size: "250 ml · Pack of 1",
    price: "₹79",
    description: "Citrus-fresh care for dishes and daily kitchen cleanups.",
    image: "/drcleanx-dishwash-gel.png",
    imageAlt: "DrCleanX citrus dishwash gel bottle",
  },
  {
    id: "floor-cleaner",
    name: "Triple Action Floor Cleaner",
    category: "Floor care",
    size: "500 ml",
    price: "₹89",
    description: "For floors and washable surfaces around the home.",
    image: "/drcleanx-floor-cleaner.png",
    imageAlt: "DrCleanX Triple Action floor cleaner bottle",
    photoBackground: true,
  },
  {
    id: "multi-surface-cleaner",
    name: "Multi-Surface Cleaner",
    category: "All-purpose",
    size: "500 ml · Pack of 1",
    price: "₹129",
    description: "Everyday wipe-downs for counters, tables and sealed surfaces.",
    image: "/drcleanx-multi-surface-cleaner.png",
    imageAlt: "DrCleanX multi-surface cleaner spray bottle",
    photoBackground: true,
  },
  {
    id: "kitchen-degreaser",
    name: "Kitchen Degreaser",
    category: "Kitchen care",
    size: "500 ml · Pack of 1",
    price: "₹139",
    description: "A helpful spray for everyday kitchen cleanups.",
    image: "/drcleanx-kitchen-degreaser.png",
    imageAlt: "DrCleanX kitchen degreaser spray bottle",
    photoBackground: true,
  },
  {
    id: "bathroom-descaler",
    name: "Bathroom Descaler",
    category: "Bathroom care",
    size: "500 ml · Pack of 1",
    price: "₹149",
    description: "Routine care for bathroom fittings and washable surfaces.",
    image: "/drcleanx-bathroom-descaler.png",
    imageAlt: "DrCleanX bathroom descaler bottle",
    photoBackground: true,
  },
  {
    id: "fabric-freshener",
    name: "Fabric Freshener",
    category: "Fabric care",
    size: "500 ml · Pack of 1",
    price: "₹159",
    description: "A finishing mist for curtains, cushions and upholstery.",
    image: "/drcleanx-fabric-freshener.png",
    imageAlt: "DrCleanX fabric freshener mist bottle",
    photoBackground: true,
  },
];

export function BestSellers() {
  const { addItem } = useCart();
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  function handleAdd(product: StoreProduct) {
    addItem(product.id, 1, {
      productId: product.id,
      name: product.name,
      image: product.image,
      imageAlt: product.imageAlt,
      size: product.size,
      unitPrice: Number(product.price.replace(/[^0-9.]/g, "")),
    });
    setAddedProductId(product.id);
    setStatusMessage(`${product.name} added to your bag.`);
  }

  function handleExploreAll() {
    setShowAllProducts(true);
    setStatusMessage("All eight products are now shown.");
  }

  return (
    <section aria-labelledby="best-sellers-title" className="best-sellers" id="best-sellers">
      <div className="best-sellers-inner">
        <header className="best-sellers-heading">
          <p className="best-sellers-eyebrow">
            <span aria-hidden="true" />
            Top picks
          </p>
          <h2 className="best-sellers-title" id="best-sellers-title">
            Everyday Essentials. Extraordinary Clean.
          </h2>
          <p className="best-sellers-description">The little things that make every clean feel good.</p>
        </header>

        <div className="best-sellers-actions">
          <a className="best-sellers-explore" href="#all-products" onClick={handleExploreAll}>
            Explore all products
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>

        <ul
          aria-label="DrCleanX everyday essentials"
          className={`best-sellers-grid${showAllProducts ? " is-expanded" : ""}`}
          id="all-products"
        >
          {products.map((product, index) => (
            <li
              className={`best-sellers-item${index >= 6 ? " best-sellers-item--extra" : ""}`}
              key={product.id}
            >
              <ProductCard
                isAdded={addedProductId === product.id}
                onAdd={handleAdd}
                product={product}
              />
            </li>
          ))}
        </ul>

        <p aria-atomic="true" aria-live="polite" className="sr-only" role="status">
          {statusMessage}
        </p>
      </div>
    </section>
  );
}
