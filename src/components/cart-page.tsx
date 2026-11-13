"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { CartLineItem } from "@/components/cart-line-item";
import { CartOrderSummary } from "@/components/cart-order-summary";
import { CartProgress } from "@/components/cart-progress";
import { NewsletterFooter } from "@/components/newsletter-footer";
import { StorefrontHeader } from "@/components/storefront-header";
import { useCart } from "@/components/cart-provider";

export function CartPage() {
  const { items, itemCount } = useCart();

  return (
    <>
      <StorefrontHeader />
      <main className="flow-page">
        <div className="flow-container">
          <CartProgress current="cart" />
          <header className="flow-page-heading">
            <p className="flow-eyebrow">Your order</p>
            <h1>Your shopping bag</h1>
            <p>Review your items before continuing to checkout.</p>
          </header>

          {items.length === 0 ? (
            <section className="empty-cart-card" aria-labelledby="empty-cart-title">
              <span className="empty-cart-icon"><ShoppingBag aria-hidden="true" size={26} /></span>
              <h2 id="empty-cart-title">Your bag is waiting</h2>
              <p>Browse the shop and add the products you need. Your bag will be ready here.</p>
              <Link className="flow-primary-link" href="/shop">Explore the shop <ArrowRight aria-hidden="true" size={17} /></Link>
            </section>
          ) : (
            <div className="flow-layout cart-layout">
              <section aria-labelledby="cart-items-title" className="cart-items-panel">
                <header className="cart-items-heading">
                  <div>
                    <h2 id="cart-items-title">Bag items</h2>
                    <p>{itemCount} {itemCount === 1 ? "item" : "items"} selected</p>
                  </div>
                  <Link href="/shop">Continue shopping</Link>
                </header>
                <ul className="cart-item-list">
                  {items.map((item) => <CartLineItem item={item} key={item.key} />)}
                </ul>
              </section>
              <CartOrderSummary items={items} mode="cart" />
            </div>
          )}
        </div>
      </main>
      <NewsletterFooter />
    </>
  );
}
