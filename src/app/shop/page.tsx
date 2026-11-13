import type { Metadata } from "next";
import { NewsletterFooter } from "@/components/newsletter-footer";
import { ShopCatalog } from "@/components/shop-catalog";
import { StorefrontHeader } from "@/components/storefront-header";

export const metadata: Metadata = {
  title: "Shop Home Care Essentials | DrCleanX",
  description:
    "Browse DrCleanX cleaning, kitchen, bathroom, freshness and household essentials in one easy-to-shop collection.",
  openGraph: {
    title: "Shop Home Care Essentials | DrCleanX",
    description:
      "Explore the DrCleanX range of home-care essentials for everyday cleaning routines.",
    url: "https://drcleanx.com/shop",
    type: "website",
  },
};

export default function ShopPage() {
  return (
    <>
      <StorefrontHeader />
      <ShopCatalog />
      <NewsletterFooter />
    </>
  );
}
