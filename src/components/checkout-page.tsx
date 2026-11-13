"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { CartOrderSummary } from "@/components/cart-order-summary";
import { CartProgress } from "@/components/cart-progress";
import { NewsletterFooter } from "@/components/newsletter-footer";
import { StorefrontHeader } from "@/components/storefront-header";

type PaymentMethod = "delivery" | "online-preview";

type CompletedPreview = {
  orderNumber: string;
  itemCount: number;
  subtotal: number;
};

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("delivery");
  const [completedOrder, setCompletedOrder] = useState<CompletedPreview | null>(null);

  function completePreviewCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const order = {
      orderNumber: `DX-${Date.now().toString().slice(-7)}`,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      subtotal: items.reduce((total, item) => total + item.unitPrice * item.quantity, 0),
    };
    setCompletedOrder(order);
    clearCart();
  }

  return (
    <>
      <StorefrontHeader />
      <main className="flow-page">
        <div className="flow-container">
          {completedOrder ? (
            <>
              <CartProgress current="complete" />
              <section aria-labelledby="checkout-complete-title" className="checkout-confirmation">
                <span className="checkout-confirmation-icon"><Check aria-hidden="true" size={29} /></span>
                <p className="flow-eyebrow">Preview complete</p>
                <h1 id="checkout-complete-title">Your checkout preview is complete</h1>
                <p>No payment was processed and no order was sent or saved. This is only a frontend demonstration.</p>
                <p className="confirmation-order-number">Preview reference <strong>{completedOrder.orderNumber}</strong></p>
                <div className="confirmation-summary">
                  <span>{completedOrder.itemCount} {completedOrder.itemCount === 1 ? "item" : "items"}</span>
                  <span>Items subtotal {priceFormatter.format(completedOrder.subtotal)}</span>
                  <span>{paymentMethod === "delivery" ? "Delivery payment selected" : "Online payment preview selected"}</span>
                </div>
                <Link className="flow-primary-link" href="/shop">Continue shopping</Link>
              </section>
            </>
          ) : items.length === 0 ? (
            <section aria-labelledby="empty-checkout-title" className="empty-cart-card">
              <span className="empty-cart-icon"><ShieldCheck aria-hidden="true" size={26} /></span>
              <h1 id="empty-checkout-title">Your bag is empty</h1>
              <p>Add an item to your bag before starting checkout.</p>
              <Link className="flow-primary-link" href="/shop">Browse products</Link>
            </section>
          ) : (
            <>
              <CartProgress current="checkout" />
              <header className="flow-page-heading">
                <p className="flow-eyebrow">Almost there</p>
                <h1>Delivery & checkout</h1>
                <p>Enter delivery details to complete this frontend checkout preview.</p>
              </header>
              <form className="flow-layout checkout-layout" onSubmit={completePreviewCheckout}>
                <div className="checkout-form-panel">
                  <section aria-labelledby="contact-heading" className="checkout-section">
                    <header className="checkout-section-heading">
                      <span className="checkout-section-number">1</span>
                      <h2 id="contact-heading">Contact details</h2>
                    </header>
                    <div className="checkout-form-grid">
                      <div className="checkout-field">
                        <label htmlFor="checkout-name">Full name</label>
                        <input autoComplete="name" id="checkout-name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="checkout-field">
                        <label htmlFor="checkout-phone">Mobile number</label>
                        <input autoComplete="tel" id="checkout-phone" inputMode="tel" name="phone" pattern="[+]?[0-9 -]{10,15}" placeholder="10-digit mobile number" required title="Enter a valid phone number" type="tel" />
                      </div>
                      <div className="checkout-field checkout-field--full">
                        <label htmlFor="checkout-email">Email address</label>
                        <input autoComplete="email" id="checkout-email" name="email" placeholder="you@example.com" required type="email" />
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="delivery-heading" className="checkout-section">
                    <header className="checkout-section-heading">
                      <span className="checkout-section-number">2</span>
                      <h2 id="delivery-heading">Delivery address</h2>
                    </header>
                    <div className="checkout-form-grid">
                      <div className="checkout-field checkout-field--full">
                        <label htmlFor="checkout-address">Address</label>
                        <input autoComplete="street-address" id="checkout-address" name="address" placeholder="House number and street" required />
                      </div>
                      <div className="checkout-field">
                        <label htmlFor="checkout-city">City</label>
                        <input autoComplete="address-level2" id="checkout-city" name="city" placeholder="City" required />
                      </div>
                      <div className="checkout-field">
                        <label htmlFor="checkout-state">State</label>
                        <input autoComplete="address-level1" id="checkout-state" name="state" placeholder="State" required />
                      </div>
                      <div className="checkout-field">
                        <label htmlFor="checkout-postal">PIN code</label>
                        <input autoComplete="postal-code" id="checkout-postal" inputMode="numeric" maxLength={6} minLength={6} name="postalCode" pattern="[0-9]{6}" placeholder="6-digit PIN code" required title="Enter a 6-digit PIN code" />
                      </div>
                      <div className="checkout-field">
                        <label htmlFor="checkout-landmark">Landmark <span>(optional)</span></label>
                        <input id="checkout-landmark" name="landmark" placeholder="Nearby landmark" />
                      </div>
                      <div className="checkout-field checkout-field--full">
                        <label htmlFor="checkout-note">Delivery note <span>(optional)</span></label>
                        <textarea id="checkout-note" name="deliveryNote" placeholder="Any useful delivery instructions?" rows={2} />
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="payment-heading" className="checkout-section">
                    <header className="checkout-section-heading">
                      <span className="checkout-section-number">3</span>
                      <h2 id="payment-heading">Payment preference</h2>
                    </header>
                    <fieldset className="checkout-payment-options">
                      <legend className="sr-only">Choose a preview payment method</legend>
                      <label className="checkout-payment-option">
                        <input checked={paymentMethod === "delivery"} name="paymentMethod" onChange={() => setPaymentMethod("delivery")} type="radio" value="delivery" />
                        <span>Pay on delivery <small>Selection is for preview only; no payment is collected.</small></span>
                      </label>
                      <label className="checkout-payment-option">
                        <input checked={paymentMethod === "online-preview"} name="paymentMethod" onChange={() => setPaymentMethod("online-preview")} type="radio" value="online-preview" />
                        <span>Online payment <small>Preview selection only. No card or UPI details are requested.</small></span>
                      </label>
                    </fieldset>
                    <p className="checkout-preview-disclaimer">This checkout is frontend-only. Submitting the form will show a confirmation preview but will not charge you, send an order, or store your details.</p>
                  </section>

                  <button className="flow-primary-link checkout-submit" type="submit">Place preview order</button>
                  <Link className="checkout-back-link" href="/cart">Return to bag</Link>
                </div>
                <CartOrderSummary items={items} mode="checkout" />
              </form>
            </>
          )}
        </div>
      </main>
      <NewsletterFooter />
    </>
  );
}
