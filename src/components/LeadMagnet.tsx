'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './LeadMagnet.module.css';

const checklistItems = [
  'Loan program comparisons — FHA, VA, conventional & more',
  'Step-by-step mortgage timeline from application to keys',
  'Pre-approval qualification checklist',
  'Down payment & closing cost breakdown',
];

export default function LeadMagnet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a CRM / email service.
    // For now, redirect to the game plan resource page.
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          {/* Left — Content */}
          <div className={styles.content}>
            <span className={styles.badge}>📘 Free Guide</span>
            <h2 className={styles.title}>The Homebuyer Game Plan</h2>
            <p className={styles.subtitle}>
              Your free guide to navigating the mortgage process with confidence — from pre-approval to closing day.
            </p>
            <ul className={styles.checklist}>
              {checklistItems.map((item, i) => (
                <li key={i} className={styles.checkItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>You&apos;re all set!</h3>
                <p>Access your free Homebuyer Game Plan now:</p>
                <Link href="/resources/mortgage-game-plan" className="btn btn--primary btn--lg">
                  View the Game Plan
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Get Your Free Copy</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="lm-name" className="form-label">First Name</label>
                  <input
                    id="lm-name"
                    type="text"
                    className="form-input"
                    placeholder="Your first name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lm-email" className="form-label">Email</label>
                  <input
                    id="lm-email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn--primary btn--full btn--lg">
                  Download the Game Plan
                </button>
                <p className={styles.formDisclaimer}>
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
