'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function AmortizationCalculator() {
    const [loanAmount, setLoanAmount] = useState(350000);
    const [rate, setRate] = useState(6.75);
    const [term, setTerm] = useState(30);

    const result = useMemo(() => {
        const mr = rate / 100 / 12; const p = term * 12;
        const payment = loanAmount * (mr * Math.pow(1 + mr, p)) / (Math.pow(1 + mr, p) - 1);
        const totalPaid = payment * p;
        const totalInterest = totalPaid - loanAmount;

        // Build schedule by year
        const schedule: { year: number; principalPaid: number; interestPaid: number; balance: number }[] = [];
        let bal = loanAmount;
        for (let y = 1; y <= term; y++) {
            let yearPrincipal = 0, yearInterest = 0;
            for (let m = 0; m < 12; m++) {
                const intPayment = bal * mr;
                const prinPayment = payment - intPayment;
                yearInterest += intPayment;
                yearPrincipal += prinPayment;
                bal -= prinPayment;
            }
            schedule.push({ year: y, principalPaid: yearPrincipal, interestPaid: yearInterest, balance: Math.max(0, bal) });
        }
        return { payment, totalPaid, totalInterest, schedule };
    }, [loanAmount, rate, term]);

    return (
        <>
            <Hero variant="dark" badge="Calculator" title="Amortization Calculator" subtitle="See exactly how your loan pays down over time — year by year principal vs. interest breakdown." />
            <section className="section"><div className="container"><div className={styles.calcGrid}>
                <div className={styles.inputPanel}>
                    <h3>Loan Details</h3>
                    <div className={styles.inputGroup}><label>Loan Amount</label><input type="number" value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Interest Rate (%)</label><input type="number" step="0.125" value={rate} onChange={e => setRate(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Loan Term</label><select value={term} onChange={e => setTerm(Number(e.target.value))}><option value={30}>30 years</option><option value={20}>20 years</option><option value={15}>15 years</option><option value={10}>10 years</option></select></div>
                </div>
                <div className={styles.resultPanel}>
                    <div className={styles.resultMain}><span className={styles.resultLabel}>Monthly Payment (P&I)</span><span className={styles.resultValue}>{fmt(result.payment)}</span></div>
                    <div className={styles.breakdown}>
                        <div className={styles.breakdownItem}><span>Total Paid Over Life</span><strong>{fmt(result.totalPaid)}</strong></div>
                        <div className={styles.breakdownItem}><span>Total Interest Paid</span><strong>{fmt(result.totalInterest)}</strong></div>
                        <div className={styles.breakdownItem}><span>Principal (Loan Amount)</span><strong>{fmt(loanAmount)}</strong></div>
                    </div>
                </div>
            </div></div></section>

            <section className="section section--light"><div className="container" style={{ maxWidth: '900px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>Amortization Schedule</h2>
                <div style={{ overflowX: 'auto', maxHeight: '500px', overflowY: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--font-size-sm)' }}>
                        <thead style={{ position: 'sticky', top: 0 }}><tr style={{ background: 'var(--color-navy)', color: 'white' }}>
                            <th style={{ padding: 'var(--space-2) var(--space-4)', textAlign: 'center' }}>Year</th>
                            <th style={{ padding: 'var(--space-2) var(--space-4)', textAlign: 'right' }}>Principal</th>
                            <th style={{ padding: 'var(--space-2) var(--space-4)', textAlign: 'right' }}>Interest</th>
                            <th style={{ padding: 'var(--space-2) var(--space-4)', textAlign: 'right' }}>Remaining Balance</th>
                        </tr></thead>
                        <tbody>{result.schedule.map(row => (
                            <tr key={row.year} style={{ borderBottom: '1px solid var(--color-gray-200)', background: row.year % 2 === 0 ? 'var(--color-gray-50)' : 'white' }}>
                                <td style={{ padding: 'var(--space-2) var(--space-4)', textAlign: 'center', fontWeight: 600 }}>{row.year}</td>
                                <td style={{ padding: 'var(--space-2) var(--space-4)', textAlign: 'right' }}>{fmt(row.principalPaid)}</td>
                                <td style={{ padding: 'var(--space-2) var(--space-4)', textAlign: 'right' }}>{fmt(row.interestPaid)}</td>
                                <td style={{ padding: 'var(--space-2) var(--space-4)', textAlign: 'right', fontWeight: 600 }}>{fmt(row.balance)}</td>
                            </tr>
                        ))}</tbody>
                    </table>
                </div>
            </div></section>

            <CTABanner heading="Want a Better Amortization?" description="A lower rate or shorter term dramatically changes your payoff. Get a quote today." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
