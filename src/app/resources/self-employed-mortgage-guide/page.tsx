import type { Metadata } from 'next';
import styles from '../../privacy-policy/legal.module.css';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = { title: 'Self-Employed Mortgage Guide | Airus Lending', description: 'How self-employed borrowers can qualify for a mortgage. Bank statement loans, 1099 income, tax strategies, and alternative documentation programs.' };

export default function SelfEmployedGuidePage() {
    return (
        <>
            <div className={styles.legalPage}>
                <div className="container">
                    <p style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--space-2)' }}>Guide</p>
                    <h1>Self-Employed? Here&apos;s How to Get a Mortgage</h1>
                    <p className={styles.updated}>Self-employed borrower guide · 8 min read</p>

                    <section>
                        <h2>The Self-Employed Mortgage Challenge</h2>
                        <p>Self-employed borrowers often face a frustrating paradox: they may earn more than W-2 employees but appear to earn less on paper due to legitimate tax write-offs. Traditional lenders rely heavily on tax returns, which can understate your true income after deductions for business expenses, depreciation, and retirement contributions.</p>
                        <p>The good news? As a mortgage broker, Airus Lending has access to loan programs specifically designed for self-employed borrowers — programs that most banks don&apos;t offer.</p>
                    </section>

                    <section>
                        <h2>Bank Statement Loans</h2>
                        <p>Bank statement programs use 12 or 24 months of personal or business bank statements to calculate your income instead of tax returns. This is the most popular option for self-employed borrowers because it reflects actual cash flow rather than taxable income.</p>
                        <ul>
                            <li>12 or 24 months of bank statements (personal or business)</li>
                            <li>No tax returns required</li>
                            <li>Self-employment for at least 2 years (usually)</li>
                            <li>Minimum credit score typically 660+</li>
                            <li>Down payment as low as 10%</li>
                        </ul>
                    </section>

                    <section>
                        <h2>1099 Income Programs</h2>
                        <p>If you receive 1099 income (independent contractor, freelancer, gig worker), some lenders offer programs that use your 1099s instead of tax returns to qualify. These programs average your 1099 income over 1-2 years and often require less documentation than traditional applications.</p>
                    </section>

                    <section>
                        <h2>Profit &amp; Loss Statement Loans</h2>
                        <p>Some non-QM lenders accept a CPA-prepared profit and loss statement as the primary income documentation. This can work well for business owners who have strong income but complex tax situations.</p>
                    </section>

                    <section>
                        <h2>Tax Return Strategies</h2>
                        <p>If you plan to use a traditional loan program (conventional, FHA, VA), consider these strategies:</p>
                        <ul>
                            <li><strong>Plan ahead:</strong> If you&apos;re buying in 2+ years, consider reducing deductions on upcoming returns to show higher income</li>
                            <li><strong>Two-year average:</strong> Lenders average your last 2 years of income — one strong year can help offset a weaker year</li>
                            <li><strong>Add-backs:</strong> Some deductions (depreciation, depletion, certain business expenses) can be &quot;added back&quot; to your qualifying income</li>
                            <li><strong>Business structure:</strong> How your business is structured (sole prop, LLC, S-Corp, C-Corp) affects how income is calculated</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Documents Self-Employed Borrowers Need</h2>
                        <ul>
                            <li>Business license or CPA letter confirming self-employment (2+ years)</li>
                            <li>Bank statements (12 or 24 months) — for bank statement programs</li>
                            <li>Last 2 years of personal and business tax returns — for traditional programs</li>
                            <li>Year-to-date profit and loss statement</li>
                            <li>Business asset documentation</li>
                        </ul>
                    </section>
                </div>
            </div>
            <CTABanner heading="Self-Employed? Let's Find Your Best Option" description="Airus Lending has 50+ lender partners with programs designed for self-employed borrowers." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
