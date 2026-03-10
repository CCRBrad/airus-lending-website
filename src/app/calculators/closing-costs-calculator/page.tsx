'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function ClosingCostsCalculator() {
    const [homePrice, setHomePrice] = useState(400000);
    const [downPaymentPct, setDownPaymentPct] = useState(10);
    const [isRefinance, setIsRefinance] = useState(false);
    const [state, setState] = useState('average');

    const result = useMemo(() => {
        const loanAmount = homePrice * (1 - downPaymentPct / 100);
        const titleInsurance = homePrice * 0.005;
        const appraisal = 550;
        const creditReport = 50;
        const floodCert = 25;
        const recording = 150;
        const origination = loanAmount * 0.01;
        const underwriting = 900;
        const taxService = 75;
        const survey = isRefinance ? 0 : 400;
        const attorneyFee = 750;
        const transferTax = isRefinance ? 0 : homePrice * 0.002;
        const prepaids = (homePrice * 0.012 / 12) * 4 + 150 * 3; // 4 months tax + 3 months insurance
        const escrow = prepaids;

        const closingCosts = titleInsurance + appraisal + creditReport + floodCert + recording + origination + underwriting + taxService + survey + attorneyFee;
        const govtTaxes = transferTax;
        const total = closingCosts + govtTaxes + prepaids;
        const pctOfLoan = (total / loanAmount) * 100;

        const items = [
            { label: 'Loan Origination (1%)', amount: origination },
            { label: 'Title Insurance', amount: titleInsurance },
            { label: 'Underwriting Fee', amount: underwriting },
            { label: 'Attorney Fee', amount: attorneyFee },
            { label: 'Appraisal', amount: appraisal },
            { label: 'Survey', amount: survey },
            { label: 'Credit Report', amount: creditReport },
            { label: 'Flood Cert', amount: floodCert },
            { label: 'Recording', amount: recording },
            { label: 'Tax Service', amount: taxService },
            { label: 'Transfer Tax', amount: transferTax },
            { label: 'Prepaids (Tax + Insurance)', amount: prepaids },
        ].filter(i => i.amount > 0);

        return { closingCosts, govtTaxes, prepaids, total, pctOfLoan, items, loanAmount };
    }, [homePrice, downPaymentPct, isRefinance]);

    return (
        <>
            <Hero variant="dark" badge="Calculator" title="Closing Costs Estimator" subtitle="Estimate your closing costs for a purchase or refinance — see every line item." />
            <section className="section"><div className="container"><div className={styles.calcGrid}>
                <div className={styles.inputPanel}>
                    <h3>Transaction Details</h3>
                    <div className={styles.inputGroup}><label>Transaction Type</label><select value={isRefinance ? 'refi' : 'purchase'} onChange={e => setIsRefinance(e.target.value === 'refi')}><option value="purchase">Purchase</option><option value="refi">Refinance</option></select></div>
                    <div className={styles.inputGroup}><label>{isRefinance ? 'Current Home Value' : 'Home Price'}</label><input type="number" value={homePrice} onChange={e => setHomePrice(Number(e.target.value))} /></div>
                    {!isRefinance && <div className={styles.inputGroup}><label>Down Payment (%)</label><input type="number" value={downPaymentPct} onChange={e => setDownPaymentPct(Number(e.target.value))} /></div>}
                </div>
                <div className={styles.resultPanel}>
                    <div className={styles.resultMain}><span className={styles.resultLabel}>Estimated Closing Costs</span><span className={styles.resultValue}>{fmt(result.total)}</span></div>
                    <p style={{ textAlign: 'center', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)', marginBottom: 'var(--space-4)' }}>{result.pctOfLoan.toFixed(1)}% of loan amount</p>
                    <div className={styles.breakdown}>
                        {result.items.map((item, i) => (
                            <div key={i} className={styles.breakdownItem}><span>{item.label}</span><strong>{fmt(item.amount)}</strong></div>
                        ))}
                    </div>
                </div>
            </div></div></section>
            <CTABanner heading="Get Exact Closing Cost Numbers" description="Your advisor provides a detailed Loan Estimate with exact costs — no surprises at closing." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
