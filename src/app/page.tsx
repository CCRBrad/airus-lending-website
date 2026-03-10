import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import StatsBar from '@/components/StatsBar';
import ProcessSteps from '@/components/ProcessSteps';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

const journeyCards = [
  { icon: '🏠', title: 'Buy a Home', description: 'First-time buyer, move-up, or investment property — find the right loan for your purchase.', href: '/buy' },
  { icon: '🔄', title: 'Refinance', description: 'Lower your rate, shorten your term, or tap into your equity with a smarter refinance.', href: '/refinance' },
  { icon: '📈', title: 'Invest in Property', description: 'DSCR, fix-and-flip, multifamily — financing built for real estate investors.', href: '/borrower-solutions/real-estate-investors' },
  { icon: '🏢', title: 'Commercial & SBA', description: 'Commercial real estate, business acquisition, and SBA programs for growth.', href: '/commercial-loans' },
];

const programCards = [
  { icon: '🏛️', title: 'Conventional Loans', description: 'Competitive rates with as little as 3% down for qualified borrowers.', href: '/home-loans/conventional-loans' },
  { icon: '🇺🇸', title: 'FHA Loans', description: 'Government-backed with flexible credit guidelines and low down payments.', href: '/home-loans/fha-loans' },
  { icon: '🎖️', title: 'VA Loans', description: 'Zero-down financing for eligible veterans, active military, and spouses.', href: '/home-loans/va-loans' },
  { icon: '📊', title: 'DSCR Loans', description: 'Qualify based on property cash flow — no personal income verification required.', href: '/home-loans/dscr-loans' },
  { icon: '🏦', title: 'Bank Statement Loans', description: 'Designed for self-employed borrowers using 12–24 months of bank statements.', href: '/home-loans/bank-statement-loans' },
  { icon: '🌐', title: 'Non-QM Loans', description: 'Flexible lending solutions beyond traditional guidelines — ITIN, asset depletion, and more.', href: '/home-loans/non-qm-loans' },
];

const processSteps = [
  { number: 1, title: 'Tell Us About Your Goals', description: 'Share your homebuying or refinancing goals and we\'ll match you with the right loan options.' },
  { number: 2, title: 'Get Your Options', description: 'Receive a personalized comparison of programs, rates, and terms from across our lender network.' },
  { number: 3, title: 'Lock & Close', description: 'Your dedicated advisor handles the process from application to clear-to-close.' },
];

const stats = [
  { value: '50+', label: 'Lending Partners' },
  { value: '24', label: 'Loan Programs' },
  { value: '4.9★', label: 'Client Rating' },
  { value: '21 Days', label: 'Avg. Close Time' },
];

const faqItems = [
  { question: 'What is a mortgage broker and how is it different from a bank?', answer: 'A mortgage broker works with multiple lenders to find the best loan for your situation, rather than offering only products from a single institution. This means more options, competitive rates, and personalized guidance throughout the process.' },
  { question: 'How do I know which loan program is right for me?', answer: 'The right program depends on factors like your credit score, down payment, income type, and property goals. Our advisors analyze your full financial picture and recommend programs you actually qualify for — not just the ones with the lowest advertised rate.' },
  { question: 'Can I get a mortgage if I\'m self-employed?', answer: 'Yes. We specialize in self-employed lending through bank statement loans, asset depletion programs, and 1099 income documentation. Many of our borrowers are self-employed and close with competitive terms.' },
  { question: 'What is a DSCR loan?', answer: 'A DSCR (Debt Service Coverage Ratio) loan qualifies you based on the property\'s rental income rather than your personal income. It\'s ideal for real estate investors who want to scale without traditional income verification.' },
  { question: 'How fast can I close?', answer: 'Timeline depends on the loan program and complexity, but our average close time is about 21 days for straightforward transactions. Some programs like VA IRRRLs and FHA Streamlines may close even faster.' },
];

const borrowerCards = [
  { icon: '🏡', title: 'First-Time Homebuyers', description: 'Down payment assistance, FHA, and conventional options with low-down-payment programs.', href: '/borrower-solutions/first-time-homebuyers' },
  { icon: '💼', title: 'Self-Employed', description: 'Bank statement, 1099, and asset-based programs designed for business owners.', href: '/borrower-solutions/self-employed-borrowers' },
  { icon: '🏘️', title: 'Real Estate Investors', description: 'DSCR, fix-and-flip, bridge, and portfolio lending for scaling your investments.', href: '/borrower-solutions/real-estate-investors' },
  { icon: '🎖️', title: 'Veterans & Military', description: 'VA purchase, VA refinance, VA construction — maximize your earned benefit.', href: '/borrower-solutions/veterans' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        variant="home"
        badge="Mortgage Broker • 50+ Lender Partners"
        title="Find the Right Mortgage —Not Just Any Mortgage"
        subtitle="Airus Lending shops across 50+ lenders to match you with the best rates, terms, and programs for your unique situation. Residential, commercial, and SBA financing — all under one roof."
        primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
        secondaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
      />

      {/* Stats */}
      <StatsBar stats={stats} variant="dark" />

      {/* User Journeys */}
      <FeatureCards
        title="What Are You Looking For?"
        subtitle="Whether you're buying your first home or financing a commercial project, we have the expertise and programs to help."
        cards={journeyCards}
        columns={4}
      />

      {/* Loan Programs */}
      <section className="section section--light">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Popular Loan Programs</h2>
            <p className={styles.sectionSubtitle}>
              From conventional and government-backed loans to specialized non-QM and investor programs.
            </p>
          </div>
          <div className={styles.programGrid}>
            {programCards.map((card, i) => (
              <Link key={i} href={card.href} className={styles.programCard}>
                <span className={styles.programIcon}>{card.icon}</span>
                <div>
                  <h3 className={styles.programTitle}>{card.title}</h3>
                  <p className={styles.programDesc}>{card.description}</p>
                </div>
                <span className={styles.programArrow}>→</span>
              </Link>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/home-loans" className="btn btn--secondary">
              View All Loan Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Why Airus */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Why Work With Airus Lending?</h2>
            <p className={styles.sectionSubtitle} style={{ color: 'var(--color-gray-400)' }}>
              The difference between a broker you trust and a lender you settle for.
            </p>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🔍</div>
              <h3>More Options, Better Fit</h3>
              <p>We aren't limited to one company's products. We compare across 50+ wholesale lenders to find programs you may not know exist.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🧑‍💼</div>
              <h3>Dedicated Advisor</h3>
              <p>You work with a real person who understands your file, answers your calls, and guides you from application to closing.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⚡</div>
              <h3>Speed & Execution</h3>
              <p>Technology-driven processing with personal oversight. Average close time of 21 days — and we protect your lock.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🛡️</div>
              <h3>Niche Expertise</h3>
              <p>Self-employed? Foreign national? Investor? We specialize in the loans most banks can't or won't do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Borrower Solutions */}
      <FeatureCards
        title="Solutions by Borrower Type"
        subtitle="Specialized guidance and tailored programs for your specific situation."
        cards={borrowerCards}
        columns={4}
      />

      {/* Process */}
      <ProcessSteps
        title="Getting Your Loan is Simple"
        subtitle="Three steps. One dedicated advisor. From first call to closing day."
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Bottom CTA */}
      <CTABanner
        heading="Let's Find Your Perfect Loan"
        description="Start with a quick conversation — no commitment, no pressure, no hard credit pull."
        primaryLabel="Get Pre-Approved"
        primaryHref="/get-pre-approved"
        secondaryLabel="Book a Consultation"
        secondaryHref="/book-consultation"
        variant="blue"
      />
    </>
  );
}
