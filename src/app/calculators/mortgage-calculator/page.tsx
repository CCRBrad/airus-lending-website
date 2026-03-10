'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

function formatCurrency(n: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

function parseCurrency(s: string): number {
    return parseFloat(s.replace(/[^0-9.]/g, '')) || 0;
}

function calculatePayment(principal: number, annualRate: number, years: number) {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    if (r === 0) return principal / n;
    return principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export default function MortgageCalculatorPage() {
    const [homePrice, setHomePrice] = useState('350000');
    const [downPayment, setDownPayment] = useState('70000');
    const [downPct, setDownPct] = useState('20');
    const [rate, setRate] = useState('6.75');
    const [term, setTerm] = useState('30');
    const [propertyTax, setPropertyTax] = useState('3500');
    const [insurance, setInsurance] = useState('1200');
    const [hoa, setHoa] = useState('0');
    const [pmi, setPmi] = useState('0');

    const price = parseCurrency(homePrice);
    const down = parseCurrency(downPayment);
    const loan = price - down;

    const results = useMemo(() => {
        const monthlyPI = calculatePayment(loan, parseFloat(rate) || 0, parseInt(term) || 30);
        const monthlyTax = (parseCurrency(propertyTax)) / 12;
        const monthlyIns = (parseCurrency(insurance)) / 12;
        const monthlyHoa = (parseCurrency(hoa)) / 12;
        const monthlyPmi = (parseCurrency(pmi)) / 12;
        const totalMonthly = monthlyPI + monthlyTax + monthlyIns + monthlyHoa + monthlyPmi;
        const totalInterest = (monthlyPI * parseInt(term) * 12) - loan;
        const totalCost = monthlyPI * parseInt(term) * 12;

        return { monthlyPI, monthlyTax, monthlyIns, monthlyHoa, monthlyPmi, totalMonthly, totalInterest, totalCost };
    }, [loan, rate, term, propertyTax, insurance, hoa, pmi]);

    function handlePriceChange(val: string) {
        setHomePrice(val);
        const p = parseCurrency(val);
        const pct = parseFloat(downPct) || 0;
        setDownPayment(Math.round(p * pct / 100).toString());
    }

    function handleDownPaymentChange(val: string) {
        setDownPayment(val);
        const d = parseCurrency(val);
        if (price > 0) setDownPct((d / price * 100).toFixed(1));
    }

    function handleDownPctChange(val: string) {
        setDownPct(val);
        const pct = parseFloat(val) || 0;
        setDownPayment(Math.round(price * pct / 100).toString());
    }

    // Chart data
    const piPct = results.totalMonthly > 0 ? (results.monthlyPI / results.totalMonthly * 100) : 0;
    const taxPct = results.totalMonthly > 0 ? (results.monthlyTax / results.totalMonthly * 100) : 0;
    const insPct = results.totalMonthly > 0 ? (results.monthlyIns / results.totalMonthly * 100) : 0;
    const hoaPct = results.totalMonthly > 0 ? (results.monthlyHoa / results.totalMonthly * 100) : 0;
    const pmiPct = results.totalMonthly > 0 ? (results.monthlyPmi / results.totalMonthly * 100) : 0;

    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <span className={styles.badge}>Calculator</span>
                    <h1>Mortgage Calculator</h1>
                    <p className={styles.subtitle}>Estimate your monthly mortgage payment and see how different scenarios affect your costs.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {/* Inputs */}
                        <div className={styles.inputs}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="calc-price">Home Price</label>
                                <input className="form-input" type="text" id="calc-price" value={homePrice} onChange={e => handlePriceChange(e.target.value)} />
                            </div>
                            <div className={styles.inputRow}>
                                <div className="form-group" style={{ flex: 2 }}>
                                    <label className="form-label" htmlFor="calc-down">Down Payment ($)</label>
                                    <input className="form-input" type="text" id="calc-down" value={downPayment} onChange={e => handleDownPaymentChange(e.target.value)} />
                                </div>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label className="form-label" htmlFor="calc-down-pct">(%)</label>
                                    <input className="form-input" type="text" id="calc-down-pct" value={downPct} onChange={e => handleDownPctChange(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.inputRow}>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label className="form-label" htmlFor="calc-rate">Interest Rate (%)</label>
                                    <input className="form-input" type="text" id="calc-rate" value={rate} onChange={e => setRate(e.target.value)} />
                                </div>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label className="form-label" htmlFor="calc-term">Term (years)</label>
                                    <select className="form-select" id="calc-term" value={term} onChange={e => setTerm(e.target.value)}>
                                        <option value="30">30 years</option>
                                        <option value="25">25 years</option>
                                        <option value="20">20 years</option>
                                        <option value="15">15 years</option>
                                        <option value="10">10 years</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.inputRow}>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label className="form-label" htmlFor="calc-tax">Property Tax (annual)</label>
                                    <input className="form-input" type="text" id="calc-tax" value={propertyTax} onChange={e => setPropertyTax(e.target.value)} />
                                </div>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label className="form-label" htmlFor="calc-ins">Homeowners Insurance (annual)</label>
                                    <input className="form-input" type="text" id="calc-ins" value={insurance} onChange={e => setInsurance(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.inputRow}>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label className="form-label" htmlFor="calc-hoa">HOA (annual)</label>
                                    <input className="form-input" type="text" id="calc-hoa" value={hoa} onChange={e => setHoa(e.target.value)} />
                                </div>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label className="form-label" htmlFor="calc-pmi">PMI / MIP (annual)</label>
                                    <input className="form-input" type="text" id="calc-pmi" value={pmi} onChange={e => setPmi(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        {/* Results */}
                        <div className={styles.results}>
                            <div className={styles.resultCard}>
                                <div className={styles.totalLabel}>Estimated Monthly Payment</div>
                                <div className={styles.totalValue}>{formatCurrency(results.totalMonthly)}</div>

                                {/* Simple bar chart */}
                                <div className={styles.chart}>
                                    <div className={styles.chartBar}>
                                        <div className={styles.barPI} style={{ width: `${piPct}%` }} />
                                        <div className={styles.barTax} style={{ width: `${taxPct}%` }} />
                                        <div className={styles.barIns} style={{ width: `${insPct}%` }} />
                                        {hoaPct > 0 && <div className={styles.barHoa} style={{ width: `${hoaPct}%` }} />}
                                        {pmiPct > 0 && <div className={styles.barPmi} style={{ width: `${pmiPct}%` }} />}
                                    </div>
                                </div>

                                <div className={styles.breakdown}>
                                    <div className={styles.breakdownItem}>
                                        <span className={styles.dot} style={{ background: 'var(--color-blue)' }} />
                                        <span className={styles.breakdownLabel}>Principal & Interest</span>
                                        <span className={styles.breakdownValue}>{formatCurrency(results.monthlyPI)}</span>
                                    </div>
                                    <div className={styles.breakdownItem}>
                                        <span className={styles.dot} style={{ background: '#f59e0b' }} />
                                        <span className={styles.breakdownLabel}>Property Tax</span>
                                        <span className={styles.breakdownValue}>{formatCurrency(results.monthlyTax)}</span>
                                    </div>
                                    <div className={styles.breakdownItem}>
                                        <span className={styles.dot} style={{ background: '#10b981' }} />
                                        <span className={styles.breakdownLabel}>Insurance</span>
                                        <span className={styles.breakdownValue}>{formatCurrency(results.monthlyIns)}</span>
                                    </div>
                                    {results.monthlyHoa > 0 && (
                                        <div className={styles.breakdownItem}>
                                            <span className={styles.dot} style={{ background: '#8b5cf6' }} />
                                            <span className={styles.breakdownLabel}>HOA</span>
                                            <span className={styles.breakdownValue}>{formatCurrency(results.monthlyHoa)}</span>
                                        </div>
                                    )}
                                    {results.monthlyPmi > 0 && (
                                        <div className={styles.breakdownItem}>
                                            <span className={styles.dot} style={{ background: '#ef4444' }} />
                                            <span className={styles.breakdownLabel}>PMI / MIP</span>
                                            <span className={styles.breakdownValue}>{formatCurrency(results.monthlyPmi)}</span>
                                        </div>
                                    )}
                                </div>

                                <div className={styles.summaryRow}>
                                    <div>
                                        <div className={styles.summaryLabel}>Loan Amount</div>
                                        <div className={styles.summaryValue}>{formatCurrency(loan)}</div>
                                    </div>
                                    <div>
                                        <div className={styles.summaryLabel}>Total Interest</div>
                                        <div className={styles.summaryValue}>{formatCurrency(results.totalInterest)}</div>
                                    </div>
                                    <div>
                                        <div className={styles.summaryLabel}>Total Cost</div>
                                        <div className={styles.summaryValue}>{formatCurrency(results.totalCost)}</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.ctaCard}>
                                <h4>Get Your Scenario Reviewed</h4>
                                <p>These numbers are estimates. Talk to an advisor for a personalized analysis based on today&apos;s rates.</p>
                                <Link href="/get-pre-approved" className="btn btn--primary btn--full">
                                    Get Pre-Approved
                                </Link>
                                <Link href="/book-consultation" className="btn btn--secondary btn--full" style={{ marginTop: 'var(--space-3)' }}>
                                    Talk to an Advisor
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Content */}
            <section className="section section--light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="divider divider--center" />
                    <h2 style={{ textAlign: 'center' }}>How to Use This Calculator</h2>
                    <div className={styles.content}>
                        <h3>Understanding the Inputs</h3>
                        <p><strong>Home Price:</strong> The purchase price of the property you&apos;re considering.</p>
                        <p><strong>Down Payment:</strong> The amount you plan to pay upfront. A higher down payment means a smaller loan and lower monthly payments. Putting less than 20% down usually means you&apos;ll need mortgage insurance.</p>
                        <p><strong>Interest Rate:</strong> The annual interest rate on your mortgage. Rates depend on your credit score, loan type, down payment, and market conditions.</p>
                        <p><strong>Loan Term:</strong> How long you&apos;ll take to repay. 30-year terms have lower monthly payments but more total interest. 15-year terms save significantly on interest.</p>

                        <h3>What the Results Mean</h3>
                        <p>The <strong>monthly payment</strong> shown includes principal, interest, property taxes, insurance, HOA, and mortgage insurance (if applicable). This gives you a more realistic picture of your total housing cost than principal-and-interest alone.</p>

                        <h3>Important Caveats</h3>
                        <p>This calculator provides estimates only. Actual rates, payments, and costs will depend on your specific financial situation, the loan program, lender pricing, and property details. This is not a commitment to lend or a guarantee of any specific rate or terms.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
