import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import type { CartItem } from "@/components/cart-provider";

type CartOrderSummaryProps = {
  items: CartItem[];
  mode: "cart" | "checkout";
};

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function CartOrderSummary({ items, mode }: CartOrderSummaryProps) {
  const subtotal = items.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <aside aria-labelledby="order-summary-title" className="order-summary-card">
      <div className="order-summary-heading">
        <h2 id="order-summary-title">Order summary</h2>
        <span>{itemCount} {itemCount === 1 ? "item" : "items"}</span>
      </div>

      {mode === "checkout" ? (
        <ul className="summary-item-list">
          {items.map((item) => (
            <li key={item.key}>
              <span className="summary-item-quantity">{item.quantity}</span>
              <span className="summary-item-name">{item.name}<small>{item.size}</small></span>
              <strong>{priceFormatter.format(item.unitPrice * item.quantity)}</strong>
            </li>
          ))}
        </ul>
      ) : null}

      <dl className="order-summary-totals">
        <div><dt>Items subtotal</dt><dd>{priceFormatter.format(subtotal)}</dd></div>
        <div><dt>Delivery</dt><dd className="summary-pending">Not configured</dd></div>
        <div><dt>Taxes</dt><dd className="summary-pending">Not configured</dd></div>
        <div className="order-summary-total"><dt>Preview total</dt><dd>{priceFormatter.format(subtotal)}</dd></div>
      </dl>
      <p className="summary-preview-note">
        Preview only. Delivery fees and taxes are not configured, and this total is not a final payable amount.
      </p>

      {mode === "cart" ? (
        <Link className="flow-primary-link order-summary-cta" href="/checkout">
          Continue to checkout <ArrowRight aria-hidden="true" size={17} />
        </Link>
      ) : (
        <Link className="summary-edit-link" href="/cart">Edit bag</Link>
      )}
      <p className="summary-secure-note"><LockKeyhole aria-hidden="true" size={14} /> Checkout preview · no payment is processed</p>
    </aside>
  );
}
