"use client";

import Image from "next/image";
import { ArrowRight, Info, Search } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { ShopProductCard } from "@/components/shop-product-card";
import { shopProducts } from "@/components/shop-products";

type SortMode = "featured" | "price-asc" | "price-desc" | "name";

const categories = ["All products", ...Array.from(new Set(shopProducts.map((product) => product.category)))];

function startingPrice(product: (typeof shopProducts)[number]) {
  return product.variants?.[0]?.price ?? product.price;
}

export function ShopCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All products");
  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const categoryListRef = useRef<HTMLDivElement>(null);

  function clearFilters() {
    setSearchTerm("");
    setActiveCategory("All products");
    categoryListRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }

  const visibleProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    const result = shopProducts.filter((product) => {
      const matchesCategory = activeCategory === "All products" || product.category === activeCategory;
      const searchableText = [
        product.name,
        product.category,
        product.size,
        product.description,
        ...(product.variants?.map((variant) => variant.label) ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });

    if (sortMode === "price-asc") {
      result.sort((a, b) => startingPrice(a) - startingPrice(b));
    } else if (sortMode === "price-desc") {
      result.sort((a, b) => startingPrice(b) - startingPrice(a));
    } else if (sortMode === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, searchTerm, sortMode]);

  return (
    <main className="shop-page">
      <section aria-labelledby="shop-title" className="shop-hero">
        <div className="shop-hero-inner">
          <div className="shop-hero-copy">
            <p className="shop-eyebrow"><span aria-hidden="true" /> The DrCleanX shop</p>
            <h1 id="shop-title">
              Everyday care,
              <span> made simpler.</span>
            </h1>
            <p className="shop-hero-description">
              Find the essentials for the little routines that make a home feel cared for.
              Browse by room, choose a pack, and build your cleaning shelf.
            </p>
            <a className="shop-hero-link" href="#shop-products">
              Explore the collection
              <ArrowRight aria-hidden="true" size={17} />
            </a>
            <div aria-label={`${shopProducts.length} products in the collection`} className="shop-hero-meta">
              <span className="shop-meta-mark" aria-hidden="true">{shopProducts.length}</span>
              <span>Home care, freshness and everyday utility</span>
            </div>
          </div>

          <figure className="shop-hero-figure">
            <Image
              alt="DrCleanX Glass Cleaner, Toilet Cleaner and Dishwash Gel three-piece set"
              className="shop-hero-image"
              fill
              priority
              sizes="(max-width: 680px) 100vw, 48vw"
              src="/products/home-care-trio.jpg"
            />
            <figcaption>Thoughtful essentials for everyday routines</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="shop-products-title" className="shop-collection" id="shop-products">
        <div className="shop-collection-inner">
          <header className="shop-collection-heading">
            <div>
              <p className="shop-section-eyebrow">Find your essentials</p>
              <h2 id="shop-products-title">Shop the full range</h2>
              <p className="shop-collection-description">
                From glass and floors to bathroom, kitchen and home-care essentials.
              </p>
            </div>
            <p className="shop-total-count">{shopProducts.length} products</p>
          </header>

          <div className="shop-price-note" role="note">
            <Info aria-hidden="true" size={18} />
            <p>
              <strong>Preview pricing:</strong> These frontend prices are illustrative and can be replaced
              with your final price list before launch.
            </p>
          </div>

          <div className="shop-toolbar">
            <div className="shop-search-wrap">
              <label className="sr-only" htmlFor="shop-search">Search products</label>
              <Search aria-hidden="true" className="shop-search-icon" size={18} />
              <input
                autoComplete="off"
                className="shop-search-input"
                id="shop-search"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search cleaners, packs, sizes..."
                type="search"
                value={searchTerm}
              />
            </div>
            <div className="shop-sort-wrap">
              <label className="shop-sort-label" htmlFor="shop-sort">Sort by</label>
              <select
                aria-label="Sort products"
                className="shop-sort-select"
                id="shop-sort"
                onChange={(event) => setSortMode(event.target.value as SortMode)}
                value={sortMode}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          <div aria-label="Filter products by category" className="shop-category-list" ref={categoryListRef} role="group">
            {categories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={`shop-category-button${activeCategory === category ? " is-active" : ""}`}
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  if (category === "All products") {
                    categoryListRef.current?.scrollTo({ left: 0, behavior: "auto" });
                  }
                }}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="shop-results-line">
            <p aria-atomic="true" aria-live="polite">
              Showing <strong>{visibleProducts.length}</strong> of {shopProducts.length} products
            </p>
            {searchTerm || activeCategory !== "All products" ? (
              <button
                className="shop-clear-filters"
                onClick={clearFilters}
                type="button"
              >
                Clear filters
              </button>
            ) : null}
          </div>

          {visibleProducts.length ? (
            <ul aria-label="DrCleanX shop products" className="shop-product-grid">
              {visibleProducts.map((product) => (
                <li className="shop-product-item" key={product.id}>
                  <ShopProductCard product={product} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="shop-empty-state">
              <span aria-hidden="true"><Search size={21} /></span>
              <h3>No products found</h3>
              <p>Try a different search or choose another category.</p>
              <button
                className="shop-empty-reset"
                onClick={clearFilters}
                type="button"
              >
                Show all products
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
