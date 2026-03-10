'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function SBACalculator() {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [rate, setRate] = useState(10.5);
    const [term, setTerm] = useState(25);
    const [program, setProgram] = useState('7a');
    const [guaranteeFee, setGuaranteeFee] = useState(3);

    const result = useMemo(() => {
        const mr = rate / 100 / 12; const p = term * 12;
        const payment = loanAmount * (mr * Math.pow(1 + mr, p)) / (Math.pow(1 + mr, p) - 1);
        const totalPaid = payment * p;
        const totalInterest = totalPaid - loanAmount;
        const fee = loanAmount * (guaranteeFee / 100);
        return { payment, totalPaid, totalInterest, fee };
    }, [loanAmount, rate, term, guaranteeFee]);

    return (
        <>
            <Hero variant="dark" badge="Calculator" title="SBA Loan Calculator" subtitle="Estimate monthly payments for SBA 7(a), 504, and Express loans." />
            <section className="section"><div className="container"><div className={styles.calcGrid}>
                <div className={styles.inputPanel}>
                    <h3>SBA Loan Details</h3>
                    <div className={styles.inputGroup}><label>SBA Program</label>
                        <select value={program} onChange={e => { setProgram(e.target.value); if (e.target.value === '504') { setTerm(20); setRate(6.5); setGuaranteeFee(1.5); } else if (e.target.value === 'express') { setTerm(10); setGuaranteeFee(2); } else { setTerm(25); setGuaranteeFee(3); } }}>
                            <option value="7a">SBA 7(a)</option><option value="504">SBA 504</option><option value="express">SBA Express</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}><label>Loan Amount</label><input type="number" value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Interest Rate (%)</label><input type="number" step="0.25" value={rate} onChange={e => setRate(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Loan Term (years)</label><input type="number" value={term} onChange={e => setTerm(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>SBA Guarantee Fee (%)</label><input type="number" step="0.5" value={guaranteeFee} onChange={e => setGuaranteeFee(Number(e.target.value))} /></div>
                </div>
                <div className={styles.resultPanel}>
                    <div className={styles.resultMain}><span className={styles.resultLabel}>Monthly Payment</span><span className={styles.resultValue}>{fmt(result.payment)}</span></div>
                    <div className={styles.breakdown}>
                        <div className={styles.breakdownItem}><span>Loan Amount</span><strong>{fmt(loanAmount)}</strong></div>
                        <div className={styles.breakdownItem}><span>SBA Guarantee Fee</span><strong>{fmt(result.fee)}</strong></div>
                        <div className={styles.breakdownItem}><span>Total Interest Paid</span><strong>{fmt(result.totalInterest)}</strong></div>
                        <div className={styles.breakdownItem}><span>Total Amount Paid</span><strong>{fmt(result.totalPaid)}</strong></div>
                        <div className={styles.breakdownItem}><span>Program</span><strong>{program === '7a' ? 'SBA 7(a)' : program === '504' ? 'SBA 504' : 'SBA Express'}</strong></div>
                    </div>
                </div>
            </div></div></section>
            <CTABanner heading="Ready for SBA Financing?" description="Talk to an SBA specialist who can guide you through the right program." primaryLabel="Talk to a Specialist" primaryHref="/book-consultation" secondaryLabel="Learn About SBA" secondaryHref="/sba-loans" variant="dark" />
        </>
    );
}
