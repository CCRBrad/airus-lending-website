'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function CashOutCalculator() {
    const [homeValue, setHomeValue] = useState(500000);
    const [currentBalance, setCurrentBalance] = useState(280000);
    const [maxLTV, setMaxLTV] = useState(80);
    const [newRate, setNewRate] = useState(6.75);
    const [term, setTerm] = useState(30);

    const result = useMemo(() => {
        const maxLoanAmount = homeValue * (maxLTV / 100);
        const cashAvailable = Math.max(0, maxLoanAmount - currentBalance);
        const mr = newRate / 100 / 12; const p = term * 12;
        const newPayment = maxLoanAmount * (mr * Math.pow(1 + mr, p)) / (Math.pow(1 + mr, p) - 1);
        const equity = homeValue - currentBalance;
        const equityPercent = (equity / homeValue) * 100;
        return { maxLoanAmount, cashAvailable, newPayment, equity, equityPercent };
    }, [homeValue, currentBalance, maxLTV, newRate, term]);

    return (
        <>
            <Hero variant="dark" badge="Calculator" title="Cash-Out Refinance Calculator" subtitle="See how much equity you can access through a cash-out refinance." />
            <section className="section"><div className="container"><div className={styles.calcGrid}>
                <div className={styles.inputPanel}>
                    <h3>Property & Loan Details</h3>
                    <div className={styles.inputGroup}><label>Estimated Home Value</label><input type="number" value={homeValue} onChange={e => setHomeValue(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Current Mortgage Balance</label><input type="number" value={currentBalance} onChange={e => setCurrentBalance(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Max LTV (%)</label><select value={maxLTV} onChange={e => setMaxLTV(Number(e.target.value))}><option value={75}>75%</option><option value={80}>80%</option><option value={85}>85%</option><option value={90}>90%</option><option value={100}>100% (VA)</option></select></div>
                    <div className={styles.inputGroup}><label>New Interest Rate (%)</label><input type="number" step="0.125" value={newRate} onChange={e => setNewRate(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>New Loan Term</label><select value={term} onChange={e => setTerm(Number(e.target.value))}><option value={30}>30 years</option><option value={20}>20 years</option><option value={15}>15 years</option></select></div>
                </div>
                <div className={styles.resultPanel}>
                    <div className={styles.resultMain}><span className={styles.resultLabel}>Cash Available</span><span className={styles.resultValue} style={{ color: 'var(--color-success)' }}>{fmt(result.cashAvailable)}</span></div>
                    <div className={styles.breakdown}>
                        <div className={styles.breakdownItem}><span>Home Value</span><strong>{fmt(homeValue)}</strong></div>
                        <div className={styles.breakdownItem}><span>Current Equity</span><strong>{fmt(result.equity)} ({result.equityPercent.toFixed(0)}%)</strong></div>
                        <div className={styles.breakdownItem}><span>Max New Loan</span><strong>{fmt(result.maxLoanAmount)}</strong></div>
                        <div className={styles.breakdownItem}><span>New Monthly Payment</span><strong>{fmt(result.newPayment)}</strong></div>
                    </div>
                </div>
            </div></div></section>
            <CTABanner heading="Ready to Access Your Equity?" description="Get a cash-out refinance quote — see your exact numbers." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
