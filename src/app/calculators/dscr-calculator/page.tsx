'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function DSCRCalculator() {
    const [propertyValue, setPropertyValue] = useState(400000);
    const [downPaymentPct, setDownPaymentPct] = useState(25);
    const [rate, setRate] = useState(7.5);
    const [monthlyRent, setMonthlyRent] = useState(3200);
    const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
    const [insurance, setInsurance] = useState(150);
    const [hoa, setHoa] = useState(0);

    const result = useMemo(() => {
        const loanAmount = propertyValue * (1 - downPaymentPct / 100);
        const downPayment = propertyValue * (downPaymentPct / 100);
        const mr = rate / 100 / 12;
        const pi = loanAmount * (mr * Math.pow(1 + mr, 360)) / (Math.pow(1 + mr, 360) - 1);
        const tax = (propertyValue * (propertyTaxRate / 100)) / 12;
        const pitia = pi + tax + insurance + hoa;
        const dscr = pitia > 0 ? monthlyRent / pitia : 0;
        const cashFlow = monthlyRent - pitia;

        let dscrStatus = 'Below Minimum';
        let dscrColor = 'var(--color-error, #e53e3e)';
        if (dscr >= 1.25) { dscrStatus = 'Strong'; dscrColor = 'var(--color-success)'; }
        else if (dscr >= 1.0) { dscrStatus = 'Qualifying'; dscrColor = 'var(--color-gold)'; }
        else if (dscr >= 0.75) { dscrStatus = 'Low — May Qualify with Reserves'; dscrColor = 'var(--color-gold)'; }

        return { loanAmount, downPayment, pi, tax, pitia, dscr, cashFlow, dscrStatus, dscrColor };
    }, [propertyValue, downPaymentPct, rate, monthlyRent, propertyTaxRate, insurance, hoa]);

    return (
        <>
            <Hero variant="dark" badge="Calculator" title="DSCR Calculator" subtitle="Calculate the Debt Service Coverage Ratio for your investment property — see if it qualifies." />
            <section className="section"><div className="container"><div className={styles.calcGrid}>
                <div className={styles.inputPanel}>
                    <h3>Property Details</h3>
                    <div className={styles.inputGroup}><label>Property Value</label><input type="number" value={propertyValue} onChange={e => setPropertyValue(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Down Payment (%)</label><input type="number" value={downPaymentPct} onChange={e => setDownPaymentPct(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Interest Rate (%)</label><input type="number" step="0.125" value={rate} onChange={e => setRate(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Monthly Rent</label><input type="number" value={monthlyRent} onChange={e => setMonthlyRent(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Property Tax Rate (%)</label><input type="number" step="0.1" value={propertyTaxRate} onChange={e => setPropertyTaxRate(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Monthly Insurance</label><input type="number" value={insurance} onChange={e => setInsurance(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Monthly HOA</label><input type="number" value={hoa} onChange={e => setHoa(Number(e.target.value))} /></div>
                </div>
                <div className={styles.resultPanel}>
                    <div className={styles.resultMain}><span className={styles.resultLabel}>DSCR</span><span className={styles.resultValue} style={{ color: result.dscrColor }}>{result.dscr.toFixed(2)}</span></div>
                    <p style={{ textAlign: 'center', fontSize: 'var(--font-size-sm)', color: result.dscrColor, fontWeight: 700, marginBottom: 'var(--space-4)' }}>{result.dscrStatus}</p>
                    <div className={styles.breakdown}>
                        <div className={styles.breakdownItem}><span>Monthly Rent</span><strong>{fmt(monthlyRent)}</strong></div>
                        <div className={styles.breakdownItem}><span>Total PITIA</span><strong>{fmt(result.pitia)}</strong></div>
                        <div className={styles.breakdownItem}><span>Monthly Cash Flow</span><strong style={{ color: result.cashFlow >= 0 ? 'var(--color-success)' : 'var(--color-error, #e53e3e)' }}>{fmt(result.cashFlow)}</strong></div>
                        <div className={styles.breakdownItem}><span>Loan Amount</span><strong>{fmt(result.loanAmount)}</strong></div>
                        <div className={styles.breakdownItem}><span>Down Payment</span><strong>{fmt(result.downPayment)}</strong></div>
                        <div className={styles.breakdownItem}><span>P&I</span><strong>{fmt(result.pi)}</strong></div>
                        <div className={styles.breakdownItem}><span>Property Tax</span><strong>{fmt(result.tax)}</strong></div>
                        <div className={styles.breakdownItem}><span>Insurance + HOA</span><strong>{fmt(insurance + hoa)}</strong></div>
                    </div>
                </div>
            </div></div></section>
            <FAQ title="DSCR FAQs" items={[
                { question: 'What DSCR do I need to qualify?', answer: 'Most lenders require 1.0 or higher (property income covers 100% of payment). Some allow 0.75 with strong credit and reserves.' },
                { question: 'How is DSCR calculated?', answer: 'DSCR = Monthly Rent / Total PITIA (Principal + Interest + Taxes + Insurance + HOA). A ratio of 1.25 means the property generates 25% more income than its mortgage cost.' },
            ]} />
            <CTABanner heading="Property Qualifies?" description="Get a DSCR loan quote — no personal income verification required." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
