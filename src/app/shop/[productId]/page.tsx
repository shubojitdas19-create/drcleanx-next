import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsletterFooter } from "@/components/newsletter-footer";
import { ProductDetail } from "@/components/product-detail";
import { StorefrontHeader } from "@/components/storefront-header";
import { shopProducts } from "@/components/shop-products";
import "@/components/product-detail.css";
import "@/components/product-reviews.css";

type Params = Promise<{ productId: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { productId } = await params;
  const product = shopProducts.find((item) => item.id === productId);

  if (!product) {
    return { title: "Product Not Found | DrCleanX" };
  }

  return {
    title: `${product.name} | DrCleanX Shop`,
    description: product.description,
    openGraph: {
      title: `${product.name} | DrCleanX Shop`,
      description: product.description,
      url: `https://drcleanx.com/shop/${product.id}`,
      images: [{ url: product.image, alt: product.imageAlt }],
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return shopProducts.map(({ id }) => ({ productId: id }));
}

export default async function ProductPage({ params }: { params: Params }) {
  const { productId } = await params;
  const product = shopProducts.find((item) => item.id === productId);

  if (!product) notFound();

  return (
    <>
      <StorefrontHeader />
      <ProductDetail product={product} />
      <NewsletterFooter />
    </>
  );
}
