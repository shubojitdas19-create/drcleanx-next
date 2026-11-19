import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  { label: "Laundry & Fabric Care", image: "/categories/laundry-fabric-care.png" },
  { label: "Refills", image: "/categories/refills.png" },
  { label: "Dish & Kitchen", image: "/categories/dish-kitchen.png" },
  { label: "Hand Washes", image: "/categories/hand-washes.png" },
  { label: "Floor, Surface & Home Cleaners", image: "/categories/floor-surface-home.png" },
  { label: "Cleaning Accessories", image: "/categories/cleaning-accessories.png" },
  { label: "Baby Cleaners", image: "/categories/baby-cleaners.png" },
  { label: "Pet Cleaners", image: "/categories/pet-cleaners.png" },
];

export function CategoryShowcase() {
  return (
    <section aria-labelledby="category-showcase-title" className="category-showcase" id="categories">
      <div className="home-section-inner">
        <header className="section-heading">
          <p className="section-eyebrow">Browse by need</p>
          <h2 className="section-title" id="category-showcase-title">Shop by category</h2>
          <p className="section-description">Find the right cleaner for every room, surface and member of the family.</p>
        </header>

        <ul aria-label="Product categories" className="category-grid">
          {categories.map((category) => (
            <li key={category.label}>
              <Link className="category-card" href="/shop">
                <span className="category-card-image">
                  <Image alt="" fill sizes="(max-width: 680px) 50vw, 25vw" src={category.image} />
                </span>
                <span className="category-card-label">
                  {category.label}
                  <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
