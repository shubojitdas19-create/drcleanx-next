"use client";

import { useState, type FormEvent } from "react";
import { Star } from "lucide-react";

type Review = {
  id: string;
  rating: number;
  title: string;
  text: string;
  author: string;
  submittedAt: string;
};

type ProductReviewsProps = {
  productId: string;
};

export function ProductReviews({ productId }: ProductReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const averageRating = reviews.length
    ? (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1)
    : "—";

  function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    const cleanText = text.trim();
    const cleanAuthor = author.trim();
    if (!cleanTitle || !cleanText || !cleanAuthor) return;

    setReviews((current) => [
      {
        id: `${productId}-${Date.now()}`,
        rating,
        title: cleanTitle,
        text: cleanText,
        author: cleanAuthor,
        submittedAt: "Just now",
      },
      ...current,
    ]);
    setTitle("");
    setText("");
    setAuthor("");
    setRating(5);
    setMessage("Your review is visible in this preview. It is not saved for other visitors.");
  }

  return (
    <div className="reviews-content">
      <div className="reviews-overview">
        <div className="reviews-score">
          <span className="reviews-average">{averageRating}</span>
          <span className="reviews-count">{reviews.length} {reviews.length === 1 ? "review" : "reviews"}</span>
        </div>
        <p className="reviews-summary-copy">
          {reviews.length ? "Customer feedback for this product." : "No customer reviews yet. Be the first to share your experience."}
        </p>
        <form className="review-form" onSubmit={submitReview}>
          <h3>Write a review</h3>
          <p className="review-preview-note">Preview only: reviews entered here are not stored or shared with other visitors.</p>

          <fieldset className="review-rating-field">
            <legend>Your rating</legend>
            <div className="review-star-picker">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  aria-label={`${value} ${value === 1 ? "star" : "stars"}`}
                  aria-pressed={rating === value}
                  className={value <= rating ? "is-selected" : ""}
                  key={value}
                  onClick={() => setRating(value)}
                  type="button"
                ><Star aria-hidden="true" fill={value <= rating ? "currentColor" : "none"} size={22} /></button>
              ))}
            </div>
          </fieldset>

          <div className="review-form-field">
            <label htmlFor={`review-title-${productId}`}>Review title</label>
            <input
              autoComplete="off"
              id={`review-title-${productId}`}
              maxLength={80}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Summarize your experience"
              required
              value={title}
            />
          </div>
          <div className="review-form-field">
            <label htmlFor={`review-text-${productId}`}>Your review</label>
            <textarea
              id={`review-text-${productId}`}
              maxLength={1000}
              onChange={(event) => setText(event.target.value)}
              placeholder="What should other shoppers know?"
              required
              rows={4}
              value={text}
            />
          </div>
          <div className="review-form-field">
            <label htmlFor={`review-author-${productId}`}>Name</label>
            <input
              autoComplete="name"
              id={`review-author-${productId}`}
              maxLength={80}
              onChange={(event) => setAuthor(event.target.value)}
              placeholder="Your name"
              required
              value={author}
            />
          </div>
          <button className="review-submit-button" type="submit">Post review</button>
          <p aria-live="polite" className="review-form-status" role="status">{message}</p>
        </form>
      </div>

      <div className="customer-reviews-list">
        <h3>Customer reviews ({reviews.length})</h3>
        {reviews.length ? (
          reviews.map((review) => (
            <article className="customer-review" key={review.id}>
              <div className="customer-review-topline">
                <div aria-label={`${review.rating} out of 5 stars`} className="customer-review-stars">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Star aria-hidden="true" className={value <= review.rating ? "is-filled" : ""} fill={value <= review.rating ? "currentColor" : "none"} key={value} size={15} />
                  ))}
                </div>
                <span>{review.submittedAt}</span>
              </div>
              <h4>{review.title}</h4>
              <p>{review.text}</p>
              <span className="customer-review-author">{review.author} · Preview submission</span>
            </article>
          ))
        ) : (
          <p className="reviews-empty-state">There are no reviews to show yet.</p>
        )}
      </div>
    </div>
  );
}
