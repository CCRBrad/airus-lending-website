'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function DownPaymentCalculator() {
    const [homePrice, setHomePrice] = useState(400000);
    const [scenario, setScenario] = useState<number[]>([0, 3, 3.5, 5, 10, 15, 20, 25]);
    const [rate, setRate] = useState(6.75);

    const results = useMemo(() => {
        return scenario.map(pct => {
            const dp = homePrice * (pct / 100);
            const loan = homePrice - dp;
            const mr = rate / 100 / 12;
            const pi = loan > 0 ? loan * (mr * Math.pow(1 + mr, 360)) / (Math.pow(1 + mr, 360) - 1) : 0;
            const pmi = pct < 20 ? loan * 0.005 / 12 : 0;
            return { pct, dp, loan, pi, pmi, total: pi + pmi };
        });
    }, [homePrice, rate, scenario]);

    return (
        <>
            <Hero variant="dark" badge="Calculator" title="Down Payment Calculator" subtitle="Compare down payment scenarios and see how they affect your monthly payment and PMI." />
            <section className="section"><div className="container">
                <div className={styles.inputPanel} style={{ maxWidth: '500px', margin: '0 auto var(--space-8)' }}>
                    <div className={styles.inputGroup}><label>Home Price</label><input type="number" value={homePrice} onChange={e => setHomePrice(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Interest Rate (%)</label><input type="number" step="0.125" value={rate} onChange={e => setRate(Number(e.target.value))} /></div>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--font-size-sm)' }}>
                        <thead><tr style={{ background: 'var(--color-navy)', color: 'var(--color-white)' }}>
                            <th style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'left' }}>Down %</th>
                            <th style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'right' }}>Down Payment</th>
                            <th style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'right' }}>Loan Amount</th>
                            <th style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'right' }}>P&I</th>
                            <th style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'right' }}>Est. PMI</th>
                            <th style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'right' }}>Total P&I+PMI</th>
                        </tr></thead>
                        <tbody>{results.map((r, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--color-gray-200)', background: r.pct === 20 ? 'var(--color-blue-ghost)' : i % 2 === 0 ? 'var(--color-gray-50)' : 'white' }}>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', fontWeight: r.pct === 20 ? 700 : 400 }}>{r.pct}%{r.pct === 0 ? ' (VA/USDA)' : r.pct === 3.5 ? ' (FHA)' : r.pct === 20 ? ' ★ No PMI' : ''}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'right' }}>{fmt(r.dp)}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'right' }}>{fmt(r.loan)}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'right' }}>{fmt(r.pi)}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'right', color: r.pmi > 0 ? 'var(--color-gold)' : 'var(--color-success)' }}>{r.pmi > 0 ? fmt(r.pmi) : '—'}</td>
                                <td style={{ padding: 'var(--space-3) var(--space-4)', textAlign: 'right', fontWeight: 700 }}>{fmt(r.total)}</td>
                            </tr>
                        ))}</tbody>
                    </table>
                </div>
            </div></section>
            <CTABanner heading="Know Your Down Payment?" description="Get pre-approved with the down payment that works for your budget." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
