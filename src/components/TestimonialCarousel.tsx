'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './TestimonialCarousel.module.css';

const testimonials = [
  {
    quote: 'Airus Lending found us a VA loan with a rate lower than any bank we talked to. The whole process was seamless.',
    name: 'Marcus J.',
    detail: 'VA Purchase — Georgia',
    rating: 5,
  },
  {
    quote: 'As a self-employed borrower, I was turned down twice before finding Airus. They closed my bank statement loan in 19 days.',
    name: 'Priya S.',
    detail: 'Bank Statement Loan — California',
    rating: 5,
  },
  {
    quote: 'They compared rates from over a dozen lenders and saved us nearly $200/month on our refinance. Incredible service.',
    name: 'David & Lauren T.',
    detail: 'Conventional Refinance — Texas',
    rating: 5,
  },
  {
    quote: 'The DSCR loan process was straightforward. No tax returns needed, and my advisor was available every step of the way.',
    name: 'Angela K.',
    detail: 'DSCR Investment Loan — Florida',
    rating: 5,
  },
  {
    quote: 'First-time buyer and completely overwhelmed until I found Airus. They walked us through every single step.',
    name: 'Jason & Maria R.',
    detail: 'FHA Purchase — North Carolina',
    rating: 5,
  },
];

const summaryStats = [
  { value: '200+', label: 'Five-Star Reviews' },
  { value: '500+', label: 'Loans Closed' },
  { value: '15', label: 'States Licensed' },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[active];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="divider divider--center" />
          <h2>What Our Borrowers Say</h2>
        </div>

        <div className={styles.carousel}>
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => setActive((active - 1 + total) % total)}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.slide}>
            <div className={styles.stars}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <blockquote className={styles.quote}>
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className={styles.author}>
              <strong>{current.name}</strong>
              <span>{current.detail}</span>
            </div>
          </div>

          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => setActive((active + 1) % total)}
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <div className={styles.statsRow}>
          {summaryStats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
