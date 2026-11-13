import Image from "next/image";
import { Droplets, HeartHandshake, Leaf, Truck } from "lucide-react";

const trustPillars = [
  {
    title: "Tough on Stains",
    description: "Lifts everyday grease and grime so surfaces shine again.",
    image: "/trust-tough-stains.png",
    imageAlt: "A gloved hand wiping grease clean from a glass stovetop",
    Icon: Droplets,
  },
  {
    title: "Safe for Family & Pets",
    description: "Thoughtfully formulated for the people and pets you care for most.",
    image: "/trust-family-pets.png",
    imageAlt: "A relaxed golden retriever resting on a freshly cleaned floor",
    Icon: HeartHandshake,
  },
  {
    title: "Eco-Friendly",
    description: "Biodegradable formulas and recyclable packaging for a lighter footprint.",
    image: "/trust-eco-friendly.png",
    imageAlt: "A reusable glass spray bottle beside fresh citrus and green leaves",
    Icon: Leaf,
  },
  {
    title: "Fast Delivery",
    description: "Packed with care and delivered quickly across West Bengal.",
    image: "/trust-fast-delivery.png",
    imageAlt: "A courier handing a parcel to a customer at home",
    Icon: Truck,
  },
];

export function WhyChoose() {
  return (
    <section aria-labelledby="why-choose-title" className="why-choose" id="why-choose">
      <div className="why-choose-inner">
        <header className="why-choose-heading">
          <p className="why-choose-eyebrow">
            <span aria-hidden="true" />
            The DrCleanX promise
          </p>
          <h2 className="why-choose-title" id="why-choose-title">
            Sparkling Homes. <span>No Compromises.</span>
          </h2>
          <p className="why-choose-description">
            Thoughtful everyday care, from the first spray to the final shine.
          </p>
        </header>

        <ul aria-label="Why choose DrCleanX" className="why-choose-grid">
          {trustPillars.map(({ Icon, ...pillar }) => (
            <li className="why-choose-item" key={pillar.title}>
              <article className="why-choose-card">
                <div className="why-choose-image-wrap">
                  <Image
                    alt={pillar.imageAlt}
                    className="why-choose-image"
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1080px) 45vw, 25vw"
                    src={pillar.image}
                  />
                </div>
                <div className="why-choose-card-copy">
                  <span aria-hidden="true" className="why-choose-icon">
                    <Icon size={17} strokeWidth={1.8} />
                  </span>
                  <h3 className="why-choose-card-title">{pillar.title}</h3>
                </div>
                <p className="why-choose-card-description">{pillar.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
