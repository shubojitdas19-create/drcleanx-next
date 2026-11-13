import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I tried the kitchen degreaser on my hob and backsplash. The grease came off without much scrubbing, and the citrus scent is fresh but not too strong.",
    name: "Priya S.",
    location: "Kolkata",
    image: "/review-priya-sample.png",
    imageAlt: "Illustrative portrait for sample review by Priya S.",
  },
  {
    quote:
      "The floor cleaner leaves our tiles looking bright, and the fragrance does not linger. Ordering was easy, and delivery to Howrah was quick.",
    name: "Anik D.",
    location: "Howrah",
    image: "/review-anik-sample.png",
    imageAlt: "Illustrative portrait for sample review by Anik D.",
  },
  {
    quote:
      "The glass cleaner has been great for mirrors and windows—no streaks after wiping. I also like that the bottle is easy to handle and store.",
    name: "Moumita R.",
    location: "Salt Lake",
    image: "/review-moumita-sample.png",
    imageAlt: "Illustrative portrait for sample review by Moumita R.",
  },
];

export function CustomerReviews() {
  return (
    <section aria-labelledby="customer-reviews-title" className="customer-reviews" id="customer-reviews">
      <div className="customer-reviews-inner">
        <header className="customer-reviews-heading">
          <p className="customer-reviews-eyebrow">
            <span aria-hidden="true" />
            Notes from the neighborhood
          </p>
          <h2 className="customer-reviews-title" id="customer-reviews-title">
            A little love for a <span>cleaner home.</span>
          </h2>
          <p className="customer-reviews-description">
            Everyday products, thoughtful details, and the difference they make at home.
          </p>
        </header>

        <ul aria-label="Sample customer reviews" className="customer-reviews-grid">
          {reviews.map((review) => (
            <li className="customer-reviews-item" key={review.name}>
              <article className="customer-review-card">
                <div aria-label="5 out of 5 stars" className="customer-review-rating" role="img">
                  <span className="customer-review-stars">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star aria-hidden="true" fill="currentColor" key={index} size={15} strokeWidth={1.5} />
                    ))}
                  </span>
                  <span className="customer-review-score">5.0</span>
                </div>
                <p className="customer-review-quote">&ldquo;{review.quote}&rdquo;</p>
                <footer className="customer-review-author">
                  <div className="customer-review-avatar">
                    <Image alt={review.imageAlt} fill sizes="56px" src={review.image} />
                  </div>
                  <div>
                    <p className="customer-review-name">{review.name}</p>
                    <p className="customer-review-location">{review.location}</p>
                  </div>
                </footer>
              </article>
            </li>
          ))}
        </ul>

        <p className="customer-reviews-disclaimer">
          Sample review text and illustrative portraits for preview only. Replace with genuine customer feedback before publishing.
        </p>
      </div>
    </section>
  );
}
