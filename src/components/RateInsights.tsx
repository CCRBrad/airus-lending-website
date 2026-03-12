import Link from 'next/link';
import styles from './RateInsights.module.css';

const rateCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'VA Loans',
    description: 'Typically the lowest rates available — no PMI required.',
    href: '/home-loans/va-loans',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: 'FHA Loans',
    description: 'Government-backed with competitive rates and low down payments.',
    href: '/home-loans/fha-loans',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    label: 'Conventional',
    description: 'Flexible terms with rate options from dozens of wholesale lenders.',
    href: '/home-loans/conventional-loans',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    label: 'Refinancing',
    description: 'Lock in a lower rate, shorten your term, or access equity.',
    href: '/refinance',
  },
];

export default function RateInsights() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="divider divider--center" />
          <h2>Mortgage Rate Insights</h2>
          <p className={styles.subtitle}>
            Understand how today&apos;s rate environment affects your loan options.
          </p>
        </div>
        <div className={styles.grid}>
          {rateCards.map((card, i) => (
            <Link key={i} href={card.href} className={styles.card}>
              <div className={styles.iconWrap}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.label}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
              <span className={styles.cardArrow}>Learn more →</span>
            </Link>
          ))}
        </div>
        <div className={styles.cta}>
          <Link href="/resources/understanding-mortgage-rates" className="btn btn--secondary">
            See Today&apos;s Rate Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
