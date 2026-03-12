import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import StatsBar from '@/components/StatsBar';
import ReviewsBar from '@/components/ReviewsBar';
import RateInsights from '@/components/RateInsights';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import LeadMagnet from '@/components/LeadMagnet';
import ProcessSteps from '@/components/ProcessSteps';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

const stats = [
  { value: '50+', label: 'Lending Partners' },
  { value: '24', label: 'Loan Programs' },
  { value: '4.9★', label: 'Client Rating' },
  { value: '21 Days', label: 'Avg. Close Time' },
];

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

const calculatorCards = [
  { icon: '🏠', title: 'Mortgage Calculator', description: 'Estimate your monthly payment.', href: '/calculators/mortgage-calculator' },
  { icon: '💰', title: 'How Much Can I Afford?', description: 'Find your price range based on income.', href: '/calculators/home-affordability-calculator' },
  { icon: '📉', title: 'Refinance Savings', description: 'See how much you could save.', href: '/calculators/refinance-calculator' },
];

const borrowerCards = [
  { icon: '🏡', title: 'First-Time Homebuyers', description: 'Down payment assistance, FHA, and conventional options with low-down-payment programs.', href: '/borrower-solutions/first-time-homebuyers' },
  { icon: '💼', title: 'Self-Employed', description: 'Bank statement, 1099, and asset-based programs designed for business owners.', href: '/borrower-solutions/self-employed-borrowers' },
  { icon: '🏘️', title: 'Real Estate Investors', description: 'DSCR, fix-and-flip, bridge, and portfolio lending for scaling your investments.', href: '/borrower-solutions/real-estate-investors' },
  { icon: '🎖️', title: 'Veterans & Military', description: 'VA purchase, VA refinance, VA construction — maximize your earned benefit.', href: '/borrower-solutions/veterans' },
];

const processSteps = [
  { number: 1, title: 'Tell Us About Your Goals', description: 'Share your homebuying or refinancing goals and we\'ll match you with the right loan options.' },
  { number: 2, title: 'Get Your Options', description: 'Receive a personalized comparison of programs, rates, and terms from across our lender network.' },
  { number: 3, title: 'Lock & Close', description: 'Your dedicated advisor handles the process from application to clear-to-close.' },
];

const faqItems = [
  { question: 'What is a mortgage broker and how is it different from a bank?', answer: 'A mortgage broker works with multiple lenders to find the best loan for your situation, rather than offering only products from a single institution. This means more options, competitive rates, and personalized guidance throughout the process.' },
  { question: 'How do I know which loan program is right for me?', answer: 'The right program depends on factors like your credit score, down payment, income type, and property goals. Our advisors analyze your full financial picture and recommend programs you actually qualify for — not just the ones with the lowest advertised rate.' },
  { question: 'Can I get a mortgage if I\'m self-employed?', answer: 'Yes. We specialize in self-employed lending through bank statement loans, asset depletion programs, and 1099 income documentation. Many of our borrowers are self-employed and close with competitive terms.' },
  { question: 'What is a DSCR loan?', answer: 'A DSCR (Debt Service Coverage Ratio) loan qualifies you based on the property\'s rental income rather than your personal income. It\'s ideal for real estate investors who want to scale without traditional income verification.' },
  { question: 'Am I eligible for a VA loan?', answer: 'VA loans are available to veterans, active-duty service members, National Guard and Reserve members with qualifying service, and surviving spouses. You can verify your eligibility by obtaining a Certificate of Eligibility (COE), which Airus Lending can help you request.' },
  { question: 'What credit score do I need to get a mortgage?', answer: 'It depends on the program. FHA allows scores as low as 580 (or 500 with 10% down). VA has no official minimum but most lenders use 580-620. Conventional typically requires 620+. DSCR and bank statement loans may accept 660+. Our advisors work with all credit ranges.' },
  { question: 'How fast can I close?', answer: 'Timeline depends on the loan program and complexity, but our average close time is about 21 days for straightforward transactions. Some programs like VA IRRRLs and FHA Streamlines may close even faster.' },
  { question: 'What down payment assistance programs are available?', answer: 'Many state and local programs offer grants, forgivable loans, and matched savings for down payments. FHA allows 3.5% down, VA and USDA offer 0% down. Our team will identify every program you qualify for based on your location and income.' },
  { question: 'What are the minimum down payment requirements by loan type?', answer: 'Down payment minimums vary by program: VA and USDA loans require 0% down. FHA requires 3.5% (or 10% with lower credit scores). Conventional can go as low as 3% for first-time buyers. DSCR and investment property loans typically require 15–25%. Your advisor will walk through the options that fit your budget.' },
  { question: 'How does the closing timeline work?', answer: 'After you go under contract, the typical closing process takes 21–30 days. Key milestones include the appraisal (days 3–7), underwriting review (days 7–14), conditional approval and clearing conditions (days 14–21), and final clear-to-close and funding. Your advisor manages every step and keeps you updated in real time.' },
  { question: 'How do self-employed borrowers qualify for a mortgage?', answer: 'Self-employed borrowers can qualify through bank statement programs (using 12–24 months of personal or business statements), 1099-only documentation, asset depletion, or profit-and-loss statements. These programs focus on cash flow rather than tax returns, which often understate income for business owners.' },
  { question: 'What are the specific requirements for a DSCR loan?', answer: 'DSCR loans typically require a minimum credit score of 660+, a 20–25% down payment, and a DSCR ratio of 1.0 or higher (meaning the property\'s rental income covers the mortgage payment). No personal income verification, tax returns, or employment history is needed — qualification is based entirely on the investment property\'s cash flow.' },
];

const brokerBankRows = [
  { feature: 'Lender Options', broker: '50+ wholesale lenders', bank: 'Only their own products' },
  { feature: 'Loan Types', broker: 'VA, FHA, conventional, DSCR, bank statement, SBA, non-QM', bank: 'Limited to standard products' },
  { feature: 'Niche Borrowers', broker: 'Self-employed, investors, ITIN, foreign nationals', bank: 'Strict guidelines, limited flexibility' },
  { feature: 'Rate Competition', broker: 'Multiple lenders compete for your loan', bank: 'Take it or leave it pricing' },
  { feature: 'Personal Guidance', broker: 'Dedicated advisor from start to close', bank: 'Different rep at each stage' },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Trust Badges */}
      <Hero
        variant="home"
        badge="Licensed Mortgage Broker • 50+ Lender Partners"
        title="Find the Right Mortgage —Not Just Any Mortgage"
        subtitle="Compare loan options from 50+ lenders with a dedicated mortgage advisor guiding you from application to closing."
        primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
        secondaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
        trustBadges={['VA Loans', 'FHA', 'Conventional', 'DSCR', 'Bank Statement', 'SBA', 'Non-QM']}
      />

      {/* 2. Stats */}
      <StatsBar stats={stats} variant="dark" />

      {/* 2b. Reviews Trust Bar */}
      <ReviewsBar />

      {/* 3. Calculator Quick-Access */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Crunch Your Numbers</h2>
            <p className={styles.sectionSubtitle}>
              Free mortgage calculators — know your budget before you buy.
            </p>
          </div>
          <div className={styles.calcGrid}>
            {calculatorCards.map((card, i) => (
              <Link key={i} href={card.href} className={styles.calcCard}>
                <span className={styles.calcIcon}>{card.icon}</span>
                <h3 className={styles.calcTitle}>{card.title}</h3>
                <p className={styles.calcDesc}>{card.description}</p>
                <span className={styles.calcArrow}>Try it →</span>
              </Link>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/calculators" className="btn btn--secondary">
              All 10 Calculators
            </Link>
          </div>
        </div>
      </section>

      {/* 4. What Are You Looking For */}
      <FeatureCards
        title="What Are You Looking For?"
        subtitle="Whether you're buying your first home or financing a commercial project, we have the expertise and programs to help."
        cards={journeyCards}
        columns={4}
      />

      {/* 5. Loan Programs */}
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

      {/* 6a. Rate Insights */}
      <RateInsights />

      {/* 6b. VA Loan Spotlight */}
      <section className={styles.vaSection}>
        <div className="container">
          <div className={styles.vaInner}>
            <div className={styles.vaContent}>
              <span className={styles.vaBadge}>🎖️ For Those Who Served</span>
              <h2>The VA Loan Experts</h2>
              <p className={styles.vaSubtitle}>
                If you served, your home financing should reflect it. VA loans offer unmatched benefits — and Airus Lending specializes in maximizing every one of them.
              </p>
              <div className={styles.vaBenefits}>
                <div className={styles.vaBenefit}>
                  <span className={styles.vaBenefitIcon}>✓</span>
                  <div>
                    <strong>$0 Down Payment</strong>
                    <p>100% financing on purchase and refinance.</p>
                  </div>
                </div>
                <div className={styles.vaBenefit}>
                  <span className={styles.vaBenefitIcon}>✓</span>
                  <div>
                    <strong>No PMI — Ever</strong>
                    <p>Save hundreds per month with no mortgage insurance.</p>
                  </div>
                </div>
                <div className={styles.vaBenefit}>
                  <span className={styles.vaBenefitIcon}>✓</span>
                  <div>
                    <strong>Competitive Rates</strong>
                    <p>VA rates are typically lower than conventional or FHA.</p>
                  </div>
                </div>
                <div className={styles.vaBenefit}>
                  <span className={styles.vaBenefitIcon}>✓</span>
                  <div>
                    <strong>Flexible Credit</strong>
                    <p>More lenient guidelines than most loan programs.</p>
                  </div>
                </div>
              </div>
              <div className={styles.vaActions}>
                <Link href="/home-loans/va-loans" className="btn btn--primary btn--lg">
                  Explore VA Loans
                </Link>
                <Link href="/borrower-solutions/veterans" className="btn btn--ghost btn--lg">
                  Check Your Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Borrower Solutions */}
      <FeatureCards
        title="Solutions by Borrower Type"
        subtitle="Specialized guidance and tailored programs for your specific situation."
        cards={borrowerCards}
        columns={4}
      />

      {/* 8. Broker vs Bank */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2 style={{ color: 'var(--color-white)' }}>Mortgage Broker vs. Bank</h2>
            <p className={styles.sectionSubtitle} style={{ color: 'var(--color-gray-400)' }}>
              Why working with a broker gives you an unfair advantage.
            </p>
          </div>
          <div className={styles.compareTable}>
            <div className={styles.compareHeader}>
              <div className={styles.compareFeature}></div>
              <div className={styles.compareBroker}>Airus Lending (Broker)</div>
              <div className={styles.compareBank}>Big Bank</div>
            </div>
            {brokerBankRows.map((row, i) => (
              <div key={i} className={styles.compareRow}>
                <div className={styles.compareFeature}>{row.feature}</div>
                <div className={styles.compareBroker}>
                  <span className={styles.checkIcon}>✓</span> {row.broker}
                </div>
                <div className={styles.compareBank}>
                  <span className={styles.xIcon}>✗</span> {row.bank}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/compare/broker-vs-bank" className="btn btn--primary" style={{ marginTop: 'var(--space-6)' }}>
              See Full Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Testimonial Carousel */}
      <TestimonialCarousel />

      {/* 10. Lead Magnet */}
      <LeadMagnet />

      {/* 11. Why Airus */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Why Work With Airus Lending?</h2>
            <p className={styles.sectionSubtitle}>
              The difference between a broker you trust and a lender you settle for.
            </p>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🔍</div>
              <h3>More Options, Better Fit</h3>
              <p>We aren&apos;t limited to one company&apos;s products. We compare across 50+ wholesale lenders to find programs you may not know exist.</p>
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
              <p>Self-employed? Foreign national? Investor? We specialize in the loans most banks can&apos;t or won&apos;t do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Process */}
      <ProcessSteps
        title="Getting Your Loan is Simple"
        subtitle="Three steps. One dedicated advisor. From first call to closing day."
        steps={processSteps}
      />

      {/* 11. FAQ */}
      <FAQ items={faqItems} />

      {/* 12. Bottom CTA */}
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
