'use client';
import { useState, useMemo } from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function formatCurrency(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function AffordabilityCalculator() {
    const [income, setIncome] = useState(85000);
    const [monthlyDebts, setMonthlyDebts] = useState(400);
    const [downPayment, setDownPayment] = useState(30000);
    const [rate, setRate] = useState(6.75);
    const [term, setTerm] = useState(30);
    const [dtiLimit, setDtiLimit] = useState(43);
    const [taxRate, setTaxRate] = useState(1.2);
    const [insuranceAnnual, setInsuranceAnnual] = useState(1500);

    const result = useMemo(() => {
        const monthlyIncome = income / 12;
        const maxTotalPayment = monthlyIncome * (dtiLimit / 100) - monthlyDebts;
        const monthlyTaxes = 0; // We'll back-calculate
        const monthlyInsurance = insuranceAnnual / 12;

        // Back-solve: max P&I payment = maxTotalPayment - taxes - insurance
        // But taxes depend on home price, so we iterate
        const monthlyRate = rate / 100 / 12;
        const payments = term * 12;
        let maxHomePrice = 0;

        for (let price = 50000; price <= 2000000; price += 1000) {
            const loanAmt = price - downPayment;
            if (loanAmt <= 0) continue;
            const pi = loanAmt * (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1);
            const tax = (price * (taxRate / 100)) / 12;
            const ins = monthlyInsurance;
            const total = pi + tax + ins;
            if (total <= maxTotalPayment) maxHomePrice = price;
            else break;
        }

        const loanAmount = Math.max(0, maxHomePrice - downPayment);
        const pi = loanAmount > 0 ? loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1) : 0;
        const tax = (maxHomePrice * (taxRate / 100)) / 12;
        const monthlyPayment = pi + tax + monthlyInsurance;

        return { maxHomePrice, loanAmount, monthlyPayment, pi, tax, insurance: monthlyInsurance };
    }, [income, monthlyDebts, downPayment, rate, term, dtiLimit, taxRate, insuranceAnnual]);

    return (
        <>
            <Hero variant="dark" badge="Calculator" title="Home Affordability Calculator" subtitle="See how much home you can afford based on your income, debts, and down payment." />

            <section className="section">
                <div className="container">
                    <div className={styles.calcGrid}>
                        <div className={styles.inputPanel}>
                            <h3>Your Financial Details</h3>
                            <div className={styles.inputGroup}>
                                <label>Annual Household Income</label>
                                <input type="number" value={income} onChange={e => setIncome(Number(e.target.value))} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Monthly Debt Payments</label>
                                <input type="number" value={monthlyDebts} onChange={e => setMonthlyDebts(Number(e.target.value))} />
                                <span className={styles.hint}>Auto loans, student loans, credit cards, etc.</span>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Down Payment</label>
                                <input type="number" value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Interest Rate (%)</label>
                                <input type="number" step="0.125" value={rate} onChange={e => setRate(Number(e.target.value))} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Loan Term (years)</label>
                                <select value={term} onChange={e => setTerm(Number(e.target.value))}>
                                    <option value={30}>30 years</option>
                                    <option value={20}>20 years</option>
                                    <option value={15}>15 years</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Max DTI Ratio (%)</label>
                                <select value={dtiLimit} onChange={e => setDtiLimit(Number(e.target.value))}>
                                    <option value={36}>36% (Conservative)</option>
                                    <option value={43}>43% (Standard)</option>
                                    <option value={50}>50% (Aggressive / FHA)</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Property Tax Rate (%)</label>
                                <input type="number" step="0.1" value={taxRate} onChange={e => setTaxRate(Number(e.target.value))} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Annual Insurance</label>
                                <input type="number" value={insuranceAnnual} onChange={e => setInsuranceAnnual(Number(e.target.value))} />
                            </div>
                        </div>

                        <div className={styles.resultPanel}>
                            <div className={styles.resultMain}>
                                <span className={styles.resultLabel}>You Can Afford Up To</span>
                                <span className={styles.resultValue}>{formatCurrency(result.maxHomePrice)}</span>
                            </div>
                            <div className={styles.breakdown}>
                                <div className={styles.breakdownItem}><span>Loan Amount</span><strong>{formatCurrency(result.loanAmount)}</strong></div>
                                <div className={styles.breakdownItem}><span>Down Payment</span><strong>{formatCurrency(downPayment)}</strong></div>
                                <div className={styles.breakdownItem}><span>Est. Monthly Payment</span><strong>{formatCurrency(result.monthlyPayment)}</strong></div>
                                <div className={styles.breakdownItem}><span>Principal & Interest</span><strong>{formatCurrency(result.pi)}</strong></div>
                                <div className={styles.breakdownItem}><span>Property Tax</span><strong>{formatCurrency(result.tax)}</strong></div>
                                <div className={styles.breakdownItem}><span>Insurance</span><strong>{formatCurrency(result.insurance)}</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ title="Affordability FAQs" items={[
                { question: 'What is DTI?', answer: 'Debt-to-income ratio is the percentage of your gross monthly income that goes toward debt payments. Most lenders allow 43% for conventional loans and up to 50% for FHA.' },
                { question: 'Can I afford more than this calculator shows?', answer: 'Possibly. Some programs count rental income, have higher DTI limits, or consider compensating factors. Talk to an advisor for a precise number.' },
            ]} />

            <CTABanner heading="Know What You Can Afford?" description="Get pre-approved and start shopping with confidence." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
