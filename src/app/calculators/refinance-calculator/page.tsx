'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function RefinanceCalculator() {
    const [currentBalance, setCurrentBalance] = useState(320000);
    const [currentRate, setCurrentRate] = useState(7.25);
    const [currentTerm, setCurrentTerm] = useState(28);
    const [newRate, setNewRate] = useState(6.25);
    const [newTerm, setNewTerm] = useState(30);
    const [closingCosts, setClosingCosts] = useState(6000);

    const result = useMemo(() => {
        const calcPayment = (bal: number, r: number, t: number) => {
            const mr = r / 100 / 12; const p = t * 12;
            return bal * (mr * Math.pow(1 + mr, p)) / (Math.pow(1 + mr, p) - 1);
        };
        const currentPayment = calcPayment(currentBalance, currentRate, currentTerm);
        const newPayment = calcPayment(currentBalance, newRate, newTerm);
        const monthlySavings = currentPayment - newPayment;
        const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : 0;
        const totalCurrentCost = currentPayment * currentTerm * 12;
        const totalNewCost = newPayment * newTerm * 12 + closingCosts;
        const lifetimeSavings = totalCurrentCost - totalNewCost;
        return { currentPayment, newPayment, monthlySavings, breakEvenMonths, lifetimeSavings, totalCurrentCost, totalNewCost };
    }, [currentBalance, currentRate, currentTerm, newRate, newTerm, closingCosts]);

    return (
        <>
            <Hero variant="dark" badge="Calculator" title="Refinance Calculator" subtitle="See how much you could save by refinancing — monthly savings, break-even point, and lifetime impact." />
            <section className="section">
                <div className="container">
                    <div className={styles.calcGrid}>
                        <div className={styles.inputPanel}>
                            <h3>Current Loan</h3>
                            <div className={styles.inputGroup}><label>Current Loan Balance</label><input type="number" value={currentBalance} onChange={e => setCurrentBalance(Number(e.target.value))} /></div>
                            <div className={styles.inputGroup}><label>Current Interest Rate (%)</label><input type="number" step="0.125" value={currentRate} onChange={e => setCurrentRate(Number(e.target.value))} /></div>
                            <div className={styles.inputGroup}><label>Remaining Term (years)</label><input type="number" value={currentTerm} onChange={e => setCurrentTerm(Number(e.target.value))} /></div>
                            <h3 style={{ marginTop: 'var(--space-6)' }}>New Loan</h3>
                            <div className={styles.inputGroup}><label>New Interest Rate (%)</label><input type="number" step="0.125" value={newRate} onChange={e => setNewRate(Number(e.target.value))} /></div>
                            <div className={styles.inputGroup}><label>New Term (years)</label><select value={newTerm} onChange={e => setNewTerm(Number(e.target.value))}><option value={30}>30 years</option><option value={20}>20 years</option><option value={15}>15 years</option></select></div>
                            <div className={styles.inputGroup}><label>Estimated Closing Costs</label><input type="number" value={closingCosts} onChange={e => setClosingCosts(Number(e.target.value))} /></div>
                        </div>
                        <div className={styles.resultPanel}>
                            <div className={styles.resultMain}><span className={styles.resultLabel}>Monthly Savings</span><span className={styles.resultValue} style={{ color: result.monthlySavings > 0 ? 'var(--color-success)' : 'var(--color-error, #e53e3e)' }}>{fmt(Math.abs(result.monthlySavings))}{result.monthlySavings < 0 ? '/mo increase' : '/mo'}</span></div>
                            <div className={styles.breakdown}>
                                <div className={styles.breakdownItem}><span>Current Payment</span><strong>{fmt(result.currentPayment)}</strong></div>
                                <div className={styles.breakdownItem}><span>New Payment</span><strong>{fmt(result.newPayment)}</strong></div>
                                <div className={styles.breakdownItem}><span>Break-Even Point</span><strong>{result.breakEvenMonths > 0 ? `${result.breakEvenMonths} months` : 'N/A'}</strong></div>
                                <div className={styles.breakdownItem}><span>Lifetime Savings</span><strong style={{ color: result.lifetimeSavings > 0 ? 'var(--color-success)' : 'inherit' }}>{fmt(result.lifetimeSavings)}</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FAQ title="Refinance FAQs" items={[
                { question: 'What is the break-even point?', answer: 'The number of months it takes for your monthly savings to exceed the closing costs. If you plan to stay beyond the break-even point, refinancing saves you money.' },
                { question: 'When does refinancing make sense?', answer: 'Generally when you can reduce your rate by 0.5–1%+ and plan to stay past the break-even point. A shorter break-even period (< 24 months) is ideal.' },
            ]} />
            <CTABanner heading="Ready to Refinance?" description="Get a personalized rate quote and see your exact savings." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
