"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import "@/app/storefront-refinements.css";

const offerMessages = [
  { text: "Get 10% off on your first order", code: "FIRST10" },
  { text: "Free delivery on orders above ₹499" },
  { text: "Shop everyday essentials from Tarakeswar, Hooghly" },
  { text: "Clean today. Fresh tomorrow." },
];

const links = [
  { label: "Shop all", href: "/shop" },
  { label: "Our story", href: "/about" },
  { label: "Contact", href: "https://wa.me/919832108395" },
];

export function StorefrontHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      <div className="announcement-bar" role="region" aria-label="Current offers">
        <div className="announcement-track">
          {[false, true].map((isRepeat) => (
            <div aria-hidden={isRepeat || undefined} className="announcement-group" key={isRepeat ? "repeat" : "original"}>
              {offerMessages.map((message) => (
                <span className="announcement-item" key={message.text}>
                  {message.text}
                  {message.code ? <span className="announcement-code">{message.code}</span> : null}
                </span>
              ))}
            </div>
          ))}
        </div>
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
          <div className="profile-menu">
            <button
              aria-expanded={profileOpen}
              aria-haspopup="menu"
              aria-label="Account menu"
              className="icon-button"
              onClick={() => setProfileOpen((open) => !open)}
              type="button"
            >
              <User size={19} />
            </button>
            {profileOpen ? (
              <div className="profile-menu-panel" role="menu">
                <a href="/login" role="menuitem" onClick={() => setProfileOpen(false)}>Log in</a>
                <a href="/signup" role="menuitem" onClick={() => setProfileOpen(false)}>Sign up for 10% off</a>
                <hr className="profile-menu-divider" />
                <a href="/shop" role="menuitem" onClick={() => setProfileOpen(false)}>Shop all products</a>
                <a href="/faq" role="menuitem" onClick={() => setProfileOpen(false)}>Help and FAQs</a>
              </div>
            ) : null}
          </div>
          <Link aria-label={`Shopping bag, ${itemCount} ${itemCount === 1 ? "item" : "items"}`} className="bag-button" href="/cart"><ShoppingBag size={18} /><span className="bag-label">Bag</span><span aria-atomic="true" aria-live="polite" className="bag-count">{itemCount}</span></Link>
        </div>
      </header>
    </>
  );
}
