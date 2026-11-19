"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const INITIAL_VIDEO_COUNT = 4;

const videoReviews = [
  { id: "review-1", name: "Priya S.", location: "Kolkata", poster: "/products/home-care-trio.jpg" },
  { id: "review-2", name: "Anik D.", location: "Howrah", poster: "/products/floor-cleaner.jpg" },
  { id: "review-3", name: "Moumita R.", location: "Salt Lake", poster: "/products/glass-toilet-pair.jpg" },
  { id: "review-4", name: "Subhajit M.", location: "Tarakeswar", poster: "/products/dishwash-gel.jpg" },
  { id: "review-5", name: "Rina B.", location: "Durgapur", poster: "/products/toilet-brush-set.jpg" },
  { id: "review-6", name: "Debashree P.", location: "Hooghly", poster: "/products/scented-balls.jpg" },
  { id: "review-7", name: "Sourav K.", location: "Asansol", poster: "/products/glass-cleaner.jpg" },
  { id: "review-8", name: "Ishita G.", location: "Siliguri", poster: "/products/home-care-trio.jpg" },
];

type VideoReview = (typeof videoReviews)[number];

function VideoReviewCard({ review }: { review: VideoReview }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const label = `Play video review by ${review.name}, ${review.location}`;

  return (
    <figure className="video-review-card">
      {isPlaying ? (
        <video
          aria-label={`Video review by ${review.name}, ${review.location}`}
          autoPlay
          className="video-review-thumb"
          controls
          playsInline
          poster={review.poster}
        >
          <source src={`/videos/${review.id}.mp4`} type="video/mp4" />
        </video>
      ) : (
        <button aria-label={label} className="video-review-thumb" onClick={() => setIsPlaying(true)} type="button">
          <Image alt="" className="object-cover" fill sizes="(max-width: 680px) 45vw, 25vw" src={review.poster} />
          <span aria-hidden="true" className="video-review-play">
            <Play fill="currentColor" size={22} />
          </span>
        </button>
      )}
      <figcaption className="video-review-caption">
        <p className="video-review-name">{review.name}</p>
        <p className="video-review-location">{review.location}</p>
      </figcaption>
    </figure>
  );
}

export function VideoReviews() {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreVideos = videoReviews.length > INITIAL_VIDEO_COUNT;
  const visibleVideos = isExpanded ? videoReviews : videoReviews.slice(0, INITIAL_VIDEO_COUNT);

  return (
    <section aria-labelledby="video-reviews-title" className="video-reviews" id="video-reviews">
      <div className="home-section-inner">
        <header className="section-heading">
          <p className="section-eyebrow">Watch and see</p>
          <h2 className="section-title" id="video-reviews-title">Video reviews from our customers</h2>
          <p className="section-description">Real households, real results. Hear what they think after a few weeks at home.</p>
        </header>

        <ul aria-label="Customer video reviews" className="video-review-grid">
          {visibleVideos.map((review) => (
            <li key={review.id}>
              <VideoReviewCard review={review} />
            </li>
          ))}
        </ul>

        {hasMoreVideos ? (
          <div className="video-review-more">
            <button
              aria-controls="video-reviews"
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded((expanded) => !expanded)}
              type="button"
            >
              {isExpanded ? "Show fewer videos" : "View more videos"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
