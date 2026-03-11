import type { Metadata } from 'next';
import styles from '../../privacy-policy/legal.module.css';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = { title: 'First-Time Homebuyer Guide | Airus Lending', description: 'Complete guide for first-time homebuyers — down payment assistance, loan programs, the buying process, and common mistakes to avoid.' };

export default function FirstTimeBuyerGuidePage() {
    return (
        <>
            <div className={styles.legalPage}>
                <div className="container">
                    <p style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--space-2)' }}>Guide</p>
                    <h1>First-Time Homebuyer Guide</h1>
                    <p className={styles.updated}>First-time buyer guide · 10 min read</p>

                    <section>
                        <h2>Am I Ready to Buy?</h2>
                        <p>Buying your first home is one of the biggest financial decisions you&apos;ll make. Here&apos;s a quick readiness checklist:</p>
                        <ul>
                            <li>Stable income and employment (ideally 2+ years)</li>
                            <li>Emergency fund with 3–6 months of expenses (separate from your down payment)</li>
                            <li>Credit score of 580+ (620+ recommended for conventional)</li>
                            <li>Monthly debts under 43% of gross income</li>
                            <li>Down payment saved (or eligibility for a low/no-down program)</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Best Loan Programs for First-Time Buyers</h2>
                        <ul>
                            <li><strong>Conventional 97:</strong> Only 3% down for first-time buyers with 620+ credit. PMI required until 20% equity.</li>
                            <li><strong>FHA Loans:</strong> 3.5% down with 580+ credit. More flexible qualifying — great for lower credit scores.</li>
                            <li><strong>VA Loans:</strong> $0 down, no PMI for eligible veterans and service members. The best program available if you qualify.</li>
                            <li><strong>USDA Loans:</strong> $0 down for homes in eligible rural areas with income limits.</li>
                            <li><strong>State DPA Programs:</strong> Many states offer down payment assistance grants or second mortgages for first-time buyers.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Down Payment Assistance (DPA)</h2>
                        <p>Down payment assistance programs can cover some or all of your down payment and closing costs. Types include:</p>
                        <ul>
                            <li><strong>Grants:</strong> Free money that doesn&apos;t need to be repaid</li>
                            <li><strong>Forgivable loans:</strong> Second mortgages that are forgiven after 5–10 years of occupancy</li>
                            <li><strong>Deferred payment loans:</strong> Second mortgages with no monthly payment — due when you sell or refinance</li>
                            <li><strong>Matched savings programs:</strong> Government matches your savings for your down payment</li>
                        </ul>
                        <p>Airus Lending works with DPA programs across multiple states. Ask your advisor about programs available in your area.</p>
                    </section>

                    <section>
                        <h2>The Homebuying Process: Step by Step</h2>
                        <ol>
                            <li><strong>Get pre-approved</strong> — Know your budget and show sellers you&apos;re serious</li>
                            <li><strong>Find a real estate agent</strong> — Work with a buyer&apos;s agent who knows your market</li>
                            <li><strong>House hunt</strong> — Tour homes within your pre-approved range</li>
                            <li><strong>Make an offer</strong> — Submit a written offer with your pre-approval letter</li>
                            <li><strong>Home inspection</strong> — Hire an inspector to evaluate the property condition</li>
                            <li><strong>Appraisal</strong> — The lender orders an appraisal to verify the home&apos;s value</li>
                            <li><strong>Underwriting</strong> — The lender reviews your complete file for final approval</li>
                            <li><strong>Clear to close</strong> — All conditions met — you&apos;re approved!</li>
                            <li><strong>Closing day</strong> — Sign documents, receive keys, you&apos;re a homeowner!</li>
                        </ol>
                    </section>

                    <section>
                        <h2>5 Common Mistakes to Avoid</h2>
                        <ol>
                            <li><strong>Buying at the top of your budget</strong> — Leave room for maintenance, property taxes, and life surprises</li>
                            <li><strong>Skipping pre-approval</strong> — You risk falling in love with a home you can&apos;t afford</li>
                            <li><strong>Not comparing lenders</strong> — A broker like Airus Lending does this for you across 50+ lenders</li>
                            <li><strong>Making large purchases during the process</strong> — New car, furniture, or credit cards can tank your approval</li>
                            <li><strong>Waiving the home inspection</strong> — This can cost tens of thousands in unexpected repairs</li>
                        </ol>
                    </section>
                </div>
            </div>
            <CTABanner heading="Ready to Buy Your First Home?" description="Start with a free pre-approval — we'll guide you through every step." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="blue" />
        </>
    );
}
