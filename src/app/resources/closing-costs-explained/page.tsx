import type { Metadata } from 'next';
import styles from '../../privacy-policy/legal.module.css';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = { title: 'Closing Costs Explained | Airus Lending', description: 'Complete breakdown of mortgage closing costs — what they are, who pays, how much to expect, and how to reduce them.' };

export default function ClosingCostsGuidePage() {
    return (
        <>
            <div className={styles.legalPage}>
                <div className="container">
                    <p style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--space-2)' }}>Guide</p>
                    <h1>Understanding Closing Costs</h1>
                    <p className={styles.updated}>Closing costs explained · 7 min read</p>

                    <section>
                        <h2>What Are Closing Costs?</h2>
                        <p>Closing costs are the fees and expenses you pay when you finalize a mortgage loan — whether it&apos;s a purchase or refinance. They typically range from 2% to 5% of the loan amount and cover a variety of services including appraisals, title insurance, lender fees, and government recording fees.</p>
                    </section>

                    <section>
                        <h2>Common Closing Cost Items</h2>
                        <ul>
                            <li><strong>Loan Origination Fee:</strong> 0.5%–1% of the loan amount — the lender&apos;s fee for processing and underwriting</li>
                            <li><strong>Appraisal Fee:</strong> $400–$700 — required to determine the property&apos;s market value</li>
                            <li><strong>Title Insurance:</strong> $500–$2,000 — protects against ownership disputes</li>
                            <li><strong>Title Search &amp; Settlement:</strong> $300–$600 — verifies clear title ownership</li>
                            <li><strong>Credit Report Fee:</strong> $50–$100</li>
                            <li><strong>Recording Fees:</strong> $50–$250 — government fees for recording the deed and mortgage</li>
                            <li><strong>Escrow / Prepaid Items:</strong> 2–14 months of property taxes and insurance collected upfront</li>
                            <li><strong>Prepaid Interest:</strong> Per-diem interest from closing to the end of the month</li>
                            <li><strong>HOA Transfer Fee:</strong> Varies — if applicable</li>
                            <li><strong>Survey Fee:</strong> $150–$400 — if required by the lender or state</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Who Pays Closing Costs?</h2>
                        <p>Both buyers and sellers have closing costs, but they pay different items:</p>
                        <ul>
                            <li><strong>Buyer typically pays:</strong> Loan origination, appraisal, credit report, escrow/prepaids, title insurance (lender&apos;s policy)</li>
                            <li><strong>Seller typically pays:</strong> Real estate commissions, owner&apos;s title insurance, transfer taxes</li>
                            <li><strong>Negotiable:</strong> Many costs are negotiable between buyer and seller — seller concessions can cover a portion of buyer closing costs</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Seller Concession Limits</h2>
                        <ul>
                            <li><strong>Conventional (owner-occupied):</strong> Up to 3% (less than 10% down), 6% (10-25% down), or 9% (25%+ down)</li>
                            <li><strong>FHA:</strong> Up to 6%</li>
                            <li><strong>VA:</strong> Up to 4%</li>
                            <li><strong>Investment Property:</strong> Up to 2%</li>
                        </ul>
                    </section>

                    <section>
                        <h2>How to Reduce Closing Costs</h2>
                        <ol>
                            <li><strong>Negotiate seller concessions</strong> — Ask the seller to credit you toward closing costs</li>
                            <li><strong>Shop lender fees</strong> — As a broker, Airus Lending comparison-shops across 50+ lenders for you</li>
                            <li><strong>Choose a no-closing-cost option</strong> — Roll costs into a slightly higher rate</li>
                            <li><strong>Ask about lender credits</strong> — Some rate options include credits toward closing costs</li>
                            <li><strong>Check for first-time buyer programs</strong> — Many offer closing cost assistance</li>
                        </ol>
                    </section>
                </div>
            </div>
            <CTABanner heading="Want an Exact Closing Cost Estimate?" description="Use our closing cost calculator or talk to an advisor for a personalized breakdown." primaryLabel="Closing Cost Calculator" primaryHref="/calculators/closing-costs-calculator" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
