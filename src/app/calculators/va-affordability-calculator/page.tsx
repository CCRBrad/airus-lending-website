'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function formatCurrency(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function VAAffordabilityCalculator() {
    const [income, setIncome] = useState(85000);
    const [monthlyDebts, setMonthlyDebts] = useState(400);
    const [rate, setRate] = useState(6.25);
    const [term, setTerm] = useState(30);
    const [taxRate, setTaxRate] = useState(1.2);
    const [insuranceAnnual, setInsuranceAnnual] = useState(1500);

    const result = useMemo(() => {
        const monthlyIncome = income / 12;
        // VA uses residual income, but DTI of 41% is common guideline
        const maxTotalPayment = monthlyIncome * 0.41 - monthlyDebts;
        const monthlyRate = rate / 100 / 12;
        const payments = term * 12;
        const monthlyInsurance = insuranceAnnual / 12;
        let maxHomePrice = 0;

        for (let price = 50000; price <= 2000000; price += 1000) {
            const loanAmt = price; // VA = $0 down
            const pi = loanAmt * (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1);
            const tax = (price * (taxRate / 100)) / 12;
            const total = pi + tax + monthlyInsurance;
            if (total <= maxTotalPayment) maxHomePrice = price;
            else break;
        }

        const loanAmount = maxHomePrice;
        const fundingFee = loanAmount * 0.0215; // First-use, $0 down
        const totalLoan = loanAmount + fundingFee;
        const pi = totalLoan > 0 ? totalLoan * (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1) : 0;
        const tax = (maxHomePrice * (taxRate / 100)) / 12;
        const monthlyPayment = pi + tax + monthlyInsurance;

        return { maxHomePrice, loanAmount, totalLoan, fundingFee, monthlyPayment, pi, tax, insurance: monthlyInsurance };
    }, [income, monthlyDebts, rate, term, taxRate, insuranceAnnual]);

    return (
        <>
            <Hero variant="dark" badge="VA Calculator" title="VA Affordability Calculator" subtitle="See how much home you can afford with $0 down and no PMI — powered by your VA benefit." />

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
                                <label>Interest Rate (%)</label>
                                <input type="number" step="0.125" value={rate} onChange={e => setRate(Number(e.target.value))} />
                                <span className={styles.hint}>VA rates are typically 0.25-0.50% below conventional.</span>
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
                                <span className={styles.resultLabel}>VA — You Can Afford Up To</span>
                                <span className={styles.resultValue}>{formatCurrency(result.maxHomePrice)}</span>
                            </div>
                            <div className={styles.breakdown}>
                                <div className={styles.breakdownItem}><span>Down Payment</span><strong>$0 (VA Benefit)</strong></div>
                                <div className={styles.breakdownItem}><span>Loan Amount</span><strong>{formatCurrency(result.loanAmount)}</strong></div>
                                <div className={styles.breakdownItem}><span>VA Funding Fee (2.15%)</span><strong>{formatCurrency(result.fundingFee)}</strong></div>
                                <div className={styles.breakdownItem}><span>Total Loan (w/ Fee)</span><strong>{formatCurrency(result.totalLoan)}</strong></div>
                                <div className={styles.breakdownItem}><span>Est. Monthly Payment</span><strong>{formatCurrency(result.monthlyPayment)}</strong></div>
                                <div className={styles.breakdownItem}><span>PMI</span><strong>$0 (VA Benefit)</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ title="VA Affordability FAQs" items={[
                { question: 'Why can I afford more with a VA loan?', answer: 'VA loans require $0 down payment and no PMI, which means more of your income goes toward principal and interest rather than insurance premiums and down payment savings. This significantly increases your purchasing power.' },
                { question: 'Does the VA funding fee affect how much I can afford?', answer: 'The funding fee is financed into the loan, slightly increasing your loan amount and monthly payment. If you are exempt from the funding fee (10%+ disability), your affordability increases further.' },
                { question: 'What is residual income?', answer: 'Unlike conventional loans that focus heavily on DTI, VA loans also require sufficient residual income — money left over after all major expenses. This is a VA-specific qualification factor.' },
            ]} />

            <CTABanner heading="Know Your VA Budget?" description="Get pre-approved with a VA specialist and start house hunting with confidence." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to a VA Specialist" secondaryHref="/book-consultation" variant="blue" />
        </>
    );
}
