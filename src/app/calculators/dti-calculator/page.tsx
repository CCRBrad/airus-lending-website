'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }
function pct(n: number) { return n.toFixed(1) + '%'; }

export default function DTICalculator() {
    // Income
    const [salary, setSalary] = useState(6000);
    const [otherIncome, setOtherIncome] = useState(0);

    // Debts
    const [proposedHousing, setProposedHousing] = useState(1800);
    const [carPayments, setCarPayments] = useState(400);
    const [studentLoans, setStudentLoans] = useState(300);
    const [creditCards, setCreditCards] = useState(150);
    const [otherDebts, setOtherDebts] = useState(0);

    const results = useMemo(() => {
        const grossMonthly = salary + otherIncome;
        const totalDebt = proposedHousing + carPayments + studentLoans + creditCards + otherDebts;
        const frontEnd = grossMonthly > 0 ? (proposedHousing / grossMonthly) * 100 : 0;
        const backEnd = grossMonthly > 0 ? (totalDebt / grossMonthly) * 100 : 0;

        let rating: string;
        let color: string;
        if (backEnd <= 36) { rating = 'Excellent'; color = 'var(--color-success)'; }
        else if (backEnd <= 43) { rating = 'Good — Qualifies for most programs'; color = 'var(--color-blue)'; }
        else if (backEnd <= 50) { rating = 'Elevated — FHA/VA may still approve'; color = 'var(--color-gold)'; }
        else if (backEnd <= 57) { rating = 'High — VA may approve with compensating factors'; color = '#e67e22'; }
        else { rating = 'Above typical limits'; color = 'var(--color-danger, #dc3545)'; }

        return { grossMonthly, totalDebt, frontEnd, backEnd, rating, color };
    }, [salary, otherIncome, proposedHousing, carPayments, studentLoans, creditCards, otherDebts]);

    const guidelines = [
        { program: 'Conventional', frontMax: '28%', backMax: '45%', note: 'With strong credit and reserves' },
        { program: 'FHA', frontMax: '31%', backMax: '50%', note: 'With compensating factors' },
        { program: 'VA', frontMax: 'None', backMax: '60%', note: 'With residual income test' },
        { program: 'USDA', frontMax: '29%', backMax: '41%', note: 'Standard guidelines' },
        { program: 'DSCR', frontMax: 'N/A', backMax: 'N/A', note: 'Qualifies on property cash flow' },
    ];

    return (
        <>
            <Hero variant="dark" badge="Calculator" title="Debt-to-Income Calculator" subtitle="Calculate your front-end and back-end DTI ratios to understand what loan programs you may qualify for." />
            <section className="section"><div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', maxWidth: '800px', margin: '0 auto var(--space-8)' }}>
                    <div className={styles.inputPanel}>
                        <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-lg)' }}>Monthly Income</h3>
                        <div className={styles.inputGroup}><label>Gross Monthly Salary</label><input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} /></div>
                        <div className={styles.inputGroup}><label>Other Monthly Income</label><input type="number" value={otherIncome} onChange={e => setOtherIncome(Number(e.target.value))} /></div>
                        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)', marginTop: 'var(--space-2)' }}>Include bonuses, alimony, rental income, etc.</p>
                    </div>
                    <div className={styles.inputPanel}>
                        <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-lg)' }}>Monthly Debts</h3>
                        <div className={styles.inputGroup}><label>Proposed Housing Payment</label><input type="number" value={proposedHousing} onChange={e => setProposedHousing(Number(e.target.value))} /></div>
                        <div className={styles.inputGroup}><label>Car Payments</label><input type="number" value={carPayments} onChange={e => setCarPayments(Number(e.target.value))} /></div>
                        <div className={styles.inputGroup}><label>Student Loans</label><input type="number" value={studentLoans} onChange={e => setStudentLoans(Number(e.target.value))} /></div>
                        <div className={styles.inputGroup}><label>Credit Card Minimums</label><input type="number" value={creditCards} onChange={e => setCreditCards(Number(e.target.value))} /></div>
                        <div className={styles.inputGroup}><label>Other Monthly Debts</label><input type="number" value={otherDebts} onChange={e => setOtherDebts(Number(e.target.value))} /></div>
                    </div>
                </div>

                {/* Results */}
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-6)' }}>
                    <div className={styles.inputPanel} style={{ textAlign: 'center', padding: 'var(--space-6)' }}>
                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)', marginBottom: 'var(--space-2)' }}>Front-End DTI</p>
                        <p style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, color: 'var(--color-navy)' }}>{pct(results.frontEnd)}</p>
                        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-400)' }}>Housing / Income</p>
                    </div>
                    <div className={styles.inputPanel} style={{ textAlign: 'center', padding: 'var(--space-6)' }}>
                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)', marginBottom: 'var(--space-2)' }}>Back-End DTI</p>
                        <p style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, color: results.color }}>{pct(results.backEnd)}</p>
                        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-400)' }}>Total Debts / Income</p>
                    </div>
                    <div className={styles.inputPanel} style={{ textAlign: 'center', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)', marginBottom: 'var(--space-2)' }}>Assessment</p>
                        <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: results.color }}>{results.rating}</p>
                    </div>
                </div>

                {/* Summary */}
                <div style={{ maxWidth: '800px', margin: 'var(--space-6) auto 0', display: 'flex', justifyContent: 'space-between', padding: 'var(--space-4) var(--space-6)', background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)', fontSize: 'var(--font-size-sm)' }}>
                    <span>Gross Monthly Income: <strong>{fmt(results.grossMonthly)}</strong></span>
                    <span>Total Monthly Debts: <strong>{fmt(results.totalDebt)}</strong></span>
                    <span>Remaining: <strong>{fmt(results.grossMonthly - results.totalDebt)}</strong></span>
                </div>

                {/* Program Guidelines Table */}
                <div style={{ maxWidth: '800px', margin: 'var(--space-10) auto 0' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>DTI Limits by Loan Program</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--font-size-sm)' }}>
                        <thead><tr style={{ background: 'var(--color-navy)', color: 'var(--color-white)' }}>
                            <th style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'left' }}>Program</th>
                            <th style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'center' }}>Front-End Max</th>
                            <th style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'center' }}>Back-End Max</th>
                            <th style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'left' }}>Notes</th>
                        </tr></thead>
                        <tbody>{guidelines.map((g, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--color-gray-200)', background: i % 2 === 0 ? 'var(--color-gray-50)' : 'white' }}>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', fontWeight: 600 }}>{g.program}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'center' }}>{g.frontMax}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'center' }}>{g.backMax}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-gray-500)' }}>{g.note}</td>
                            </tr>
                        ))}</tbody>
                    </table>
                </div>
            </div></section>
            <CTABanner heading="See What You Qualify For" description="Your DTI is just one factor. Get a full pre-approval to know exactly what programs and rates you qualify for." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
