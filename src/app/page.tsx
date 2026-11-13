import { BestSellers } from "@/components/best-sellers";
import { CustomerReviews } from "@/components/customer-reviews";
import { NewsletterFooter } from "@/components/newsletter-footer";
import { StorefrontHeader } from "@/components/storefront-header";
import { StorefrontHero } from "@/components/storefront-hero";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
  return (
    <>
      <StorefrontHeader />
      <main>
        <StorefrontHero />
        <BestSellers />
        <WhyChoose />
        <CustomerReviews />
      </main>
      <NewsletterFooter />
    </>
  );
}
