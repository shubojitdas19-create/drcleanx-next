import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, ListChecks, MapPin } from "lucide-react";
import { NewsletterFooter } from "@/components/newsletter-footer";
import { StorefrontHeader } from "@/components/storefront-header";

export const metadata: Metadata = {
  title: "Our Story | DrCleanX",
  description:
    "Get to know DrCleanX: practical home-care essentials, a clear point of view, and roots in Tarakeswar, Hooghly.",
  openGraph: {
    title: "Our Story | DrCleanX",
    description:
      "Discover the idea behind DrCleanX and our approach to everyday home care.",
    url: "https://drcleanx.com/about",
    type: "website",
  },
};

const values = [
  {
    icon: Home,
    title: "Useful by design",
    description:
      "A focused range for familiar cleaning tasks—from windows and floors to kitchen and bathroom care.",
  },
  {
    icon: ListChecks,
    title: "Clear and approachable",
    description:
      "Everyday essentials and straightforward product details, so it is easier to find what fits the task at hand.",
  },
  {
    icon: MapPin,
    title: "Close to home",
    description:
      "DrCleanX is based in Tarakeswar, Hooghly. We are here to make home care feel more approachable and easy to reach.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <StorefrontHeader />
      <main className="our-story-page">
        <section aria-labelledby="story-title" className="story-hero">
          <div className="story-hero-inner">
            <div className="story-hero-copy">
              <p className="story-eyebrow">
                <span aria-hidden="true" /> Our story
              </p>
              <h1 className="story-hero-title" id="story-title">
                A fresh start,
                <span>for every home.</span>
              </h1>
              <p className="story-hero-description">
                DrCleanX is a home-care brand from Tarakeswar, Hooghly, built around one simple belief:
                everyday cleaning should feel clear, practical, and easy to fit into real life.
              </p>
              <div className="story-hero-actions">
                <Link className="story-primary-link" href="/#best-sellers">
                  Explore our essentials
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
                <a className="story-secondary-link" href="mailto:info@drcleanx.com">
                  Talk to our team
                </a>
              </div>
              <p className="story-location">
                <MapPin aria-hidden="true" size={16} />
                Rooted in Tarakeswar, Hooghly
              </p>
            </div>

            <figure className="story-hero-image">
              <Image
                alt="Illustrative lifestyle photograph of a woman wiping a kitchen counter in a bright home"
                className="story-image"
                fill
                priority
                sizes="(max-width: 720px) 100vw, 52vw"
                src="/our-story-home.png"
              />
              <figcaption className="story-image-caption">Illustrative lifestyle photography</figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby="story-point-title" className="story-point" id="our-approach">
          <div className="story-point-inner">
            <figure className="story-point-image">
              <Image
                alt="Illustrative lifestyle photograph of hands cleaning a window in soft morning light"
                className="story-image"
                fill
                sizes="(max-width: 720px) 100vw, 46vw"
                src="/our-story-routine.png"
              />
              <figcaption className="story-image-caption">Small routines. A home that feels cared for.</figcaption>
            </figure>

            <div className="story-point-copy">
              <p className="story-eyebrow">
                <span aria-hidden="true" /> Our point of view
              </p>
              <h2 className="story-section-title" id="story-point-title">
                Good cleaning should fit the day you already have.
              </h2>
              <p>
                From glass and floors to kitchens and bathrooms, our range is shaped around familiar jobs at home.
                We focus on giving each task a clear place in your routine, so you can choose an everyday essential
                and get on with your day.
              </p>
              <p>
                We believe trust starts with clarity: knowing what a product is for, where it belongs in your home,
                and how to reach us when you have a question.
              </p>
              <a className="story-inline-link" href="mailto:info@drcleanx.com">
                Get in touch <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="story-values-title" className="story-values">
          <div className="story-values-inner">
            <header className="story-values-heading">
              <p className="story-eyebrow">
                <span aria-hidden="true" /> What matters to us
              </p>
              <h2 className="story-section-title" id="story-values-title">
                Thoughtful care, in the everyday details.
              </h2>
            </header>

            <ul className="story-values-grid">
              {values.map(({ icon: Icon, title, description }) => (
                <li className="story-value-card" key={title}>
                  <span className="story-value-icon">
                    <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="story-next-title" className="story-next">
          <div className="story-next-inner">
            <div>
              <p className="story-next-eyebrow">A little more care, one clean at a time</p>
              <h2 id="story-next-title">Find the essentials for your home.</h2>
              <p>Explore our everyday range or get in touch if you would like a hand choosing.</p>
            </div>
            <div className="story-next-actions">
              <Link className="story-next-primary" href="/#best-sellers">
                Shop DrCleanX <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <a className="story-next-secondary" href="mailto:info@drcleanx.com">
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>
      <NewsletterFooter />
    </>
  );
}
