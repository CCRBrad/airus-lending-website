import type { Metadata } from 'next';
import styles from '../../privacy-policy/legal.module.css';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = { title: 'How to Get Pre-Approved for a Mortgage — Step-by-Step Guide', description: 'Complete guide to mortgage pre-approval: what you need, what to expect, and how to get approved. Airus Lending.' };

export default function PreApprovalGuidePage() {
    return (
        <>
            <div className={styles.legalPage}>
                <div className="container">
                    <p style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--space-2)' }}>Guide</p>
                    <h1>How to Get Pre-Approved for a Mortgage</h1>
                    <p className={styles.updated}>Complete step-by-step guide · 8 min read</p>

                    <section>
                        <h2>What Is Mortgage Pre-Approval?</h2>
                        <p>Pre-approval is a lender&apos;s conditional commitment to lend you a specific amount based on a preliminary review of your credit, income, and assets. It tells you exactly how much home you can afford and shows sellers you&apos;re a serious, qualified buyer.</p>
                        <p>Pre-approval is different from pre-qualification, which is an informal estimate. Pre-approval involves actual credit verification and documentation review.</p>
                    </section>

                    <section>
                        <h2>What You Need to Get Pre-Approved</h2>
                        <ul>
                            <li><strong>Identification:</strong> Government-issued photo ID (driver&apos;s license, passport)</li>
                            <li><strong>Income Documentation:</strong> Last 2 years of W-2s (or tax returns if self-employed), last 30 days of pay stubs</li>
                            <li><strong>Asset Documentation:</strong> Last 2 months of bank statements, investment account statements</li>
                            <li><strong>Employment Verification:</strong> Employer name, address, and phone number</li>
                            <li><strong>Credit Authorization:</strong> Permission to pull your credit report</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Step-by-Step Process</h2>
                        <ol>
                            <li><strong>Choose a Lender or Broker:</strong> Working with a mortgage broker gives you access to multiple lenders and programs — not just one bank&apos;s products.</li>
                            <li><strong>Submit Your Application:</strong> Provide your financial information online, by phone, or in person.</li>
                            <li><strong>Credit Check:</strong> The lender pulls your credit report and scores from all three bureaus.</li>
                            <li><strong>Documentation Review:</strong> Your income, assets, and employment are verified.</li>
                            <li><strong>Pre-Approval Letter:</strong> You receive a letter stating your approved loan amount, rate estimate, and conditions.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>How Long Does Pre-Approval Take?</h2>
                        <p>With a mortgage broker like Airus Lending, pre-approval typically takes 1–2 business days. In some cases, same-day pre-approval is possible if all documentation is submitted upfront.</p>
                    </section>

                    <section>
                        <h2>How Long Does Pre-Approval Last?</h2>
                        <p>Most pre-approval letters are valid for 60–90 days. After that, the lender may need to re-verify your credit and financial information. If your situation hasn&apos;t changed significantly, renewal is straightforward.</p>
                    </section>

                    <section>
                        <h2>Tips for a Strong Pre-Approval</h2>
                        <ul>
                            <li>Check your credit report for errors before applying</li>
                            <li>Avoid opening new credit accounts or making large purchases</li>
                            <li>Keep your employment stable — don&apos;t change jobs during the process</li>
                            <li>Save more than you need — extra reserves strengthen your application</li>
                            <li>Be honest and complete — undisclosed debts or income issues create delays</li>
                        </ul>
                    </section>
                </div>
            </div>
            <CTABanner heading="Ready to Get Pre-Approved?" description="Start your application online — most approvals come back within 1–2 business days." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
