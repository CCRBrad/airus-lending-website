'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function formatCurrency(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function VAFundingFeeCalculator() {
    const [loanAmount, setLoanAmount] = useState(350000);
    const [loanType, setLoanType] = useState('purchase');
    const [firstUse, setFirstUse] = useState(true);
    const [downPaymentPercent, setDownPaymentPercent] = useState(0);
    const [isExempt, setIsExempt] = useState(false);
    const [serviceType, setServiceType] = useState('regular');

    const result = useMemo(() => {
        if (isExempt) {
            return { fundingFeePercent: 0, fundingFeeAmount: 0, totalLoan: loanAmount };
        }

        let feePercent = 0;

        if (loanType === 'irrrl') {
            feePercent = 0.5;
        } else if (loanType === 'cashout') {
            feePercent = firstUse ? 2.15 : 3.3;
        } else {
            // Purchase or rate-and-term refi
            if (serviceType === 'reserves') {
                if (downPaymentPercent >= 10) feePercent = 1.25;
                else if (downPaymentPercent >= 5) feePercent = 1.5;
                else feePercent = firstUse ? 2.15 : 3.3;
            } else {
                if (downPaymentPercent >= 10) feePercent = 1.25;
                else if (downPaymentPercent >= 5) feePercent = 1.5;
                else feePercent = firstUse ? 2.15 : 3.3;
            }
        }

        const fundingFeeAmount = loanAmount * (feePercent / 100);
        return { fundingFeePercent: feePercent, fundingFeeAmount, totalLoan: loanAmount + fundingFeeAmount };
    }, [loanAmount, loanType, firstUse, downPaymentPercent, isExempt, serviceType]);

    return (
        <>
            <Hero variant="dark" badge="VA Calculator" title="VA Funding Fee Calculator" subtitle="Calculate your VA funding fee based on loan type, service history, down payment, and disability exemption status." />

            <section className="section">
                <div className="container">
                    <div className={styles.calcGrid}>
                        <div className={styles.inputPanel}>
                            <h3>Loan Details</h3>
                            <div className={styles.inputGroup}>
                                <label>Base Loan Amount</label>
                                <input type="number" value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Loan Type</label>
                                <select value={loanType} onChange={e => setLoanType(e.target.value)}>
                                    <option value="purchase">Purchase</option>
                                    <option value="refi">Rate & Term Refinance</option>
                                    <option value="cashout">Cash-Out Refinance</option>
                                    <option value="irrrl">VA IRRRL (Streamline)</option>
                                </select>
                            </div>
                            {loanType !== 'irrrl' && (
                                <div className={styles.inputGroup}>
                                    <label>Down Payment (%)</label>
                                    <select value={downPaymentPercent} onChange={e => setDownPaymentPercent(Number(e.target.value))}>
                                        <option value={0}>0% ($0 Down)</option>
                                        <option value={5}>5%</option>
                                        <option value={10}>10%+</option>
                                    </select>
                                </div>
                            )}
                            <div className={styles.inputGroup}>
                                <label>First VA Loan Use?</label>
                                <select value={firstUse ? 'yes' : 'no'} onChange={e => setFirstUse(e.target.value === 'yes')}>
                                    <option value="yes">Yes — First Time</option>
                                    <option value="no">No — Subsequent Use</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Service Type</label>
                                <select value={serviceType} onChange={e => setServiceType(e.target.value)}>
                                    <option value="regular">Regular Military</option>
                                    <option value="reserves">Guard / Reserves</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Exempt from Funding Fee?</label>
                                <select value={isExempt ? 'yes' : 'no'} onChange={e => setIsExempt(e.target.value === 'yes')}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes — 10%+ Disability / Surviving Spouse / Purple Heart</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.resultPanel}>
                            <div className={styles.resultMain}>
                                <span className={styles.resultLabel}>
                                    {isExempt ? 'EXEMPT — No Funding Fee' : 'VA Funding Fee'}
                                </span>
                                <span className={styles.resultValue}>
                                    {isExempt ? '$0' : formatCurrency(result.fundingFeeAmount)}
                                </span>
                            </div>
                            <div className={styles.breakdown}>
                                <div className={styles.breakdownItem}><span>Funding Fee Rate</span><strong>{result.fundingFeePercent}%</strong></div>
                                <div className={styles.breakdownItem}><span>Base Loan Amount</span><strong>{formatCurrency(loanAmount)}</strong></div>
                                <div className={styles.breakdownItem}><span>Funding Fee</span><strong>{formatCurrency(result.fundingFeeAmount)}</strong></div>
                                <div className={styles.breakdownItem}><span>Total Loan (if Financed)</span><strong>{formatCurrency(result.totalLoan)}</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ title="VA Funding Fee FAQs" items={[
                { question: 'Can I finance the funding fee?', answer: 'Yes. Most VA borrowers choose to finance the funding fee into their loan, so there is no additional out-of-pocket cost at closing.' },
                { question: 'Who is exempt from the funding fee?', answer: 'Veterans with a VA disability rating of 10% or higher, surviving spouses receiving dependency benefits, and active-duty recipients of the Purple Heart are exempt.' },
                { question: 'Why is the fee higher for subsequent use?', answer: 'The VA charges a higher fee for subsequent use at 0% down (3.3% vs 2.15%) to account for the additional risk. Making a 5%+ down payment reduces the fee to 1.5% regardless of use.' },
            ]} />

            <CTABanner heading="Have Questions About Your VA Funding Fee?" description="Your advisor will calculate the exact fee and explain exemptions during your consultation." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to a VA Specialist" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
