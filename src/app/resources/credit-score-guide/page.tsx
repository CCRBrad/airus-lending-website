import type { Metadata } from 'next';
import styles from '../../privacy-policy/legal.module.css';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = { title: 'Credit Score Guide for Homebuyers | Airus Lending', description: 'How credit scores affect your mortgage. Minimum scores by loan type, how to improve your score, and programs for lower credit.' };

export default function CreditScoreGuidePage() {
    return (
        <>
            <div className={styles.legalPage}>
                <div className="container">
                    <p style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--space-2)' }}>Guide</p>
                    <h1>Credit Scores &amp; Mortgages: What You Need to Know</h1>
                    <p className={styles.updated}>Credit score guide · 7 min read</p>

                    <section>
                        <h2>Why Credit Scores Matter</h2>
                        <p>Your credit score is one of the most important factors in determining your mortgage rate, loan eligibility, and overall borrowing cost. A higher score typically means a lower interest rate, which can save you tens of thousands of dollars over the life of your loan.</p>
                        <p>Lenders use the middle of your three credit bureau scores (Equifax, Experian, TransUnion) to qualify you. For joint applications, the lower middle score is used.</p>
                    </section>

                    <section>
                        <h2>Minimum Credit Scores by Loan Type</h2>
                        <ul>
                            <li><strong>Conventional Loans:</strong> 620 minimum (680+ for best rates)</li>
                            <li><strong>FHA Loans:</strong> 580 with 3.5% down, or 500 with 10% down</li>
                            <li><strong>VA Loans:</strong> No official VA minimum — most lenders require 580-620</li>
                            <li><strong>USDA Loans:</strong> 640 typical minimum</li>
                            <li><strong>DSCR / Investor Loans:</strong> 660-680 typical minimum</li>
                            <li><strong>Non-QM Loans:</strong> Programs available down to 500, depending on compensating factors</li>
                            <li><strong>Bank Statement Loans:</strong> 660+ typical</li>
                        </ul>
                    </section>

                    <section>
                        <h2>How Credit Scores Affect Your Rate</h2>
                        <p>As a general guideline, here&apos;s how credit scores impact conventional mortgage rates:</p>
                        <ul>
                            <li><strong>760+:</strong> Best available rates — maximum savings</li>
                            <li><strong>740-759:</strong> Slightly higher than the best tier — minimal difference</li>
                            <li><strong>720-739:</strong> Good rates, small premium</li>
                            <li><strong>700-719:</strong> Moderate increase</li>
                            <li><strong>680-699:</strong> Noticeable premium — consider improving before applying</li>
                            <li><strong>660-679:</strong> Significant premium — additional PMI cost impact</li>
                            <li><strong>Below 660:</strong> Limited conventional options — FHA/VA may be better</li>
                        </ul>
                        <p>Even a 20-point improvement can save $50-150+ per month on a typical loan. Working with a mortgage broker like Airus Lending lets you shop across 50+ lenders to find the best rate for your specific score.</p>
                    </section>

                    <section>
                        <h2>How to Improve Your Credit Score</h2>
                        <ol>
                            <li><strong>Pay down credit card balances</strong> — Get utilization below 30% (below 10% is ideal)</li>
                            <li><strong>Don&apos;t close old accounts</strong> — Length of credit history helps your score</li>
                            <li><strong>Dispute errors</strong> — Check all three bureaus and dispute any inaccuracies</li>
                            <li><strong>Become an authorized user</strong> — Have a family member with good credit add you to their account</li>
                            <li><strong>Add alternative credit data</strong> — Some lenders accept rent, utilities, and subscription payments</li>
                            <li><strong>Avoid new credit inquiries</strong> — Multiple hard pulls within 14-45 days count as one inquiry for mortgage shopping</li>
                        </ol>
                    </section>

                    <section>
                        <h2>What NOT to Do Before Applying</h2>
                        <ul>
                            <li>Don&apos;t open new credit cards or loans</li>
                            <li>Don&apos;t make large purchases on credit</li>
                            <li>Don&apos;t co-sign for someone else</li>
                            <li>Don&apos;t close existing credit accounts</li>
                            <li>Don&apos;t change jobs or reduce income</li>
                        </ul>
                    </section>
                </div>
            </div>
            <CTABanner heading="Not Sure Where You Stand?" description="Talk to an advisor at Airus Lending for a free credit assessment and personalized loan options." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
