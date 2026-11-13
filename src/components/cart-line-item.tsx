"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart, type CartItem } from "@/components/cart-provider";
import { shopProducts } from "@/components/shop-products";

type CartLineItemProps = {
  item: CartItem;
};

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function CartLineItem({ item }: CartLineItemProps) {
  const { setItemQuantity, removeItem } = useCart();
  const hasProductPage = shopProducts.some((product) => product.id === item.productId);

  return (
    <li className="cart-line-item">
      <div className="cart-line-image">
        <Image alt={item.imageAlt} fill sizes="100px" src={item.image} />
      </div>
      <div className="cart-line-details">
        <p className="cart-line-category">{hasProductPage ? shopProducts.find((product) => product.id === item.productId)?.category : "DrCleanX home care"}</p>
        <h3>
          {hasProductPage ? <Link href={`/shop/${item.productId}`}>{item.name}</Link> : item.name}
        </h3>
        <p className="cart-line-variant">{item.size}</p>
        <p className="cart-line-unit-price">{priceFormatter.format(item.unitPrice)} <span>per pack</span></p>
        <div className="cart-line-controls">
          <div aria-label={`Quantity for ${item.name}`} className="cart-quantity-control">
            <button
              aria-label={`Decrease ${item.name} quantity`}
              disabled={item.quantity <= 1}
              onClick={() => setItemQuantity(item.key, item.quantity - 1)}
              type="button"
            ><Minus aria-hidden="true" size={14} /></button>
            <span aria-live="polite" aria-atomic="true">{item.quantity}</span>
            <button
              aria-label={`Increase ${item.name} quantity`}
              disabled={item.quantity >= 99}
              onClick={() => setItemQuantity(item.key, item.quantity + 1)}
              type="button"
            ><Plus aria-hidden="true" size={14} /></button>
          </div>
          <button
            aria-label={`Remove ${item.name} from bag`}
            className="cart-remove-button"
            onClick={() => removeItem(item.key)}
            type="button"
          ><Trash2 aria-hidden="true" size={15} /> Remove</button>
        </div>
      </div>
      <p className="cart-line-total">{priceFormatter.format(item.unitPrice * item.quantity)}</p>
    </li>
  );
}
