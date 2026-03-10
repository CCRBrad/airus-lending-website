import type { Metadata } from 'next';
import styles from '../../privacy-policy/legal.module.css';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = { title: 'Understanding Mortgage Rates — A Complete Guide', description: 'Learn how mortgage rates work, what affects them, and strategies to get the best rate. Airus Lending guide.' };

export default function MortgageRatesGuidePage() {
    return (
        <>
            <div className={styles.legalPage}>
                <div className="container">
                    <p style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--space-2)' }}>Guide</p>
                    <h1>Understanding Mortgage Rates</h1>
                    <p className={styles.updated}>Complete guide · 10 min read</p>

                    <section>
                        <h2>How Mortgage Rates Work</h2>
                        <p>Mortgage rates represent the cost of borrowing money to purchase a home. They are expressed as an annual percentage and directly affect your monthly payment and total cost of ownership. Even small differences in rate translate to thousands of dollars over the life of a loan.</p>
                    </section>

                    <section>
                        <h2>What Determines Your Rate?</h2>
                        <ul>
                            <li><strong>Credit Score:</strong> Higher scores generally qualify for lower rates. 740+ typically gets the best pricing.</li>
                            <li><strong>Down Payment / LTV:</strong> Larger down payments reduce lender risk, resulting in better rates.</li>
                            <li><strong>Loan Type:</strong> VA and conventional loans often have lower rates than FHA. Non-QM rates are higher than conventional.</li>
                            <li><strong>Property Type:</strong> Primary residences get the best rates. Investment properties and condos carry pricing adjustments.</li>
                            <li><strong>Loan Amount:</strong> Conforming loans (within Fannie/Freddie limits) get better rates than jumbo.</li>
                            <li><strong>Market Conditions:</strong> The Federal Reserve, inflation, bond yields, and global events all influence mortgage rates.</li>
                            <li><strong>Lock Period:</strong> Shorter lock periods may offer slightly better pricing.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Fixed vs. Adjustable Rates</h2>
                        <p><strong>Fixed-rate mortgages</strong> keep the same rate for the entire loan term (15, 20, or 30 years). They offer payment stability and are ideal for borrowers planning to stay long-term.</p>
                        <p><strong>Adjustable-rate mortgages (ARMs)</strong> start with a lower fixed rate for a set period (typically 5, 7, or 10 years), then adjust periodically. They can save money for borrowers who plan to sell or refinance before the adjustment period.</p>
                    </section>

                    <section>
                        <h2>Rate vs. APR</h2>
                        <p>The <strong>interest rate</strong> is the cost of borrowing the principal loan amount. The <strong>APR (Annual Percentage Rate)</strong> includes the interest rate plus other loan costs (origination fees, discount points, mortgage insurance) spread over the life of the loan. APR gives a more complete picture of total borrowing cost.</p>
                    </section>

                    <section>
                        <h2>Strategies to Get the Best Rate</h2>
                        <ol>
                            <li><strong>Improve your credit score</strong> — Pay down debt, correct errors, and avoid new credit applications.</li>
                            <li><strong>Make a larger down payment</strong> — 20%+ avoids PMI and typically gets better pricing.</li>
                            <li><strong>Compare lenders</strong> — A mortgage broker compares rates across 50+ lenders for you.</li>
                            <li><strong>Buy discount points</strong> — Paying upfront points can reduce your rate by 0.25% per point.</li>
                            <li><strong>Lock at the right time</strong> — Your advisor helps you time your rate lock strategically.</li>
                            <li><strong>Choose the right loan type</strong> — VA, conventional, and jumbo have different rate structures.</li>
                        </ol>
                    </section>
                </div>
            </div>
            <CTABanner heading="Want to See Your Rate?" description="Get a personalized rate quote — it takes just a few minutes." primaryLabel="Get a Rate Quote" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
