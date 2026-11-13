import type { Metadata } from "next";
import { CartPage } from "@/components/cart-page";
import "@/app/cart-checkout.css";

export const metadata: Metadata = {
  title: "Your Cart | DrCleanX",
  description: "Review your DrCleanX shopping bag before checkout.",
};

export default function Page() {
  return <CartPage />;
}
