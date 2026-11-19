import { AvailableOn } from "@/components/available-on";
import { BestSellers } from "@/components/best-sellers";
import { CategoryShowcase } from "@/components/category-showcase";
import { CustomerReviews } from "@/components/customer-reviews";
import { NewsletterFooter } from "@/components/newsletter-footer";
import { StorefrontHeader } from "@/components/storefront-header";
import { StorefrontHero } from "@/components/storefront-hero";
import { VideoReviews } from "@/components/video-reviews";
import { WelcomeOfferDialog } from "@/components/welcome-offer-dialog";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
  return (
    <>
      <StorefrontHeader />
      <main>
        <StorefrontHero />
        <CategoryShowcase />
        <AvailableOn />
        <BestSellers />
        <WhyChoose />
        <VideoReviews />
        <CustomerReviews />
      </main>
      <NewsletterFooter />
      <WelcomeOfferDialog />
    </>
  );
}
