"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/cart-provider";

const links = [
  { label: "Shop all", href: "/shop" },
  { label: "Our story", href: "/about" },
  { label: "Contact", href: "https://wa.me/919832108395" },
];

export function StorefrontHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      <div className="announcement-bar">
        <span>Clean today. Fresh tomorrow.</span>
        <span className="announcement-note">Everyday care for every corner of home</span>
      </div>
      <header className="store-header">
        <button
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="store-navigation"
          className="icon-button mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <Link aria-label="DrCleanX home" className="brand-mark" href="/">
          <Image alt="" className="brand-logo" height={120} src="/drcleanx-logo.png" width={180} />
        </Link>
        <nav aria-label="Main navigation" className={`main-nav${menuOpen ? " is-open" : ""}`} id="store-navigation">
          {links.map((link) => (
            <a href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a className="mobile-nav-contact" href="https://wa.me/919832108395">Chat with our team <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
        <div className="header-actions">
          <Link aria-label="Search products" className="icon-button" href="/shop"><Search size={19} /></Link>
          <a aria-label="Your wishlist" className="icon-button wishlist-button" href="/wishlist"><Heart size={19} /></a>
          <Link aria-label={`Shopping bag, ${itemCount} ${itemCount === 1 ? "item" : "items"}`} className="bag-button" href="/cart"><ShoppingBag size={18} /><span className="bag-label">Bag</span><span aria-atomic="true" aria-live="polite" className="bag-count">{itemCount}</span></Link>
        </div>
      </header>
    </>
  );
}
