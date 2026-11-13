import type { Metadata } from "next";
import { CheckoutPage } from "@/components/checkout-page";
import "@/app/cart-checkout.css";

export const metadata: Metadata = {
  title: "Checkout Preview | DrCleanX",
  description: "Complete the DrCleanX checkout preview.",
};

export default function Page() {
  return <CheckoutPage />;
}
