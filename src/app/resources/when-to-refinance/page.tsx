import type { Metadata } from 'next';
import styles from '../../privacy-policy/legal.module.css';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = { title: 'When to Refinance Your Mortgage | Airus Lending', description: 'When does refinancing make sense? Break-even analysis, rate thresholds, cash-out vs rate-and-term, and signs it is time to refinance.' };

export default function WhenToRefinancePage() {
    return (
        <>
            <div className={styles.legalPage}>
                <div className="container">
                    <p style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--space-2)' }}>Guide</p>
                    <h1>When Should You Refinance Your Mortgage?</h1>
                    <p className={styles.updated}>Refinance timing guide · 7 min read</p>

                    <section>
                        <h2>The Break-Even Rule</h2>
                        <p>The most important refinance calculation is your break-even point — how many months it takes for your monthly savings to recoup the closing costs of refinancing.</p>
                        <p><strong>Formula:</strong> Closing Costs ÷ Monthly Savings = Break-Even Point (months)</p>
                        <p>If you plan to stay in the home longer than the break-even point, refinancing likely makes financial sense. If you plan to move before break-even, it may not be worth the upfront costs.</p>
                    </section>

                    <section>
                        <h2>Traditional Rate Threshold: 0.5%–1%</h2>
                        <p>A common rule of thumb is to refinance when you can reduce your rate by at least 0.5% to 1%. However, this depends on your loan balance — a 0.5% reduction on a $500,000 loan saves much more than on a $150,000 loan.</p>
                    </section>

                    <section>
                        <h2>Types of Refinance</h2>
                        <ul>
                            <li><strong>Rate-and-Term:</strong> Lower your interest rate and/or change your loan term (e.g., 30-year to 15-year). No cash out.</li>
                            <li><strong>Cash-Out:</strong> Refinance for more than you owe and receive the difference in cash. Common uses: debt consolidation, home improvements, investments.</li>
                            <li><strong>VA IRRRL:</strong> Streamlined refinance for existing VA loans — minimal documentation, often no appraisal.</li>
                            <li><strong>FHA Streamline:</strong> Simplified refinance for existing FHA loans with reduced documentation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5 Signs It&apos;s Time to Refinance</h2>
                        <ol>
                            <li><strong>Rates have dropped significantly</strong> since you got your loan</li>
                            <li><strong>Your credit score has improved</strong> — a higher score qualifies you for better rates</li>
                            <li><strong>You want to eliminate PMI</strong> — if your home has appreciated to 20%+ equity</li>
                            <li><strong>You want to shorten your term</strong> — switch from 30-year to 15-year to save interest</li>
                            <li><strong>You need cash</strong> for debt consolidation, renovations, or investments</li>
                        </ol>
                    </section>

                    <section>
                        <h2>When NOT to Refinance</h2>
                        <ul>
                            <li>If you plan to sell within 1-2 years (won&apos;t hit break-even)</li>
                            <li>If you&apos;re far into your loan term (most of your payment is already going to principal)</li>
                            <li>If your credit has dropped significantly since your original loan</li>
                            <li>If closing costs exceed your potential savings</li>
                        </ul>
                    </section>

                    <section>
                        <h2>No-Cost Refinance Options</h2>
                        <p>Some refinances can be structured with no out-of-pocket closing costs by incorporating the costs into a slightly higher rate. This eliminates the break-even calculation — you save from day one, just at a slightly lower rate reduction.</p>
                        <p>Airus Lending can model both scenarios for you and help you decide which approach saves more over your planned time in the home.</p>
                    </section>
                </div>
            </div>
            <CTABanner heading="Should You Refinance?" description="Use our refinance calculator or talk to an advisor for a personalized analysis." primaryLabel="Refinance Calculator" primaryHref="/calculators/refinance-calculator" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
