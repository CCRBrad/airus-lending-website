'use client';
import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from '../mortgage-calculator/page.module.css';

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }

export default function RentVsBuyCalculator() {
    const [monthlyRent, setMonthlyRent] = useState(2200);
    const [rentIncrease, setRentIncrease] = useState(3);
    const [homePrice, setHomePrice] = useState(380000);
    const [downPaymentPct, setDownPaymentPct] = useState(10);
    const [rate, setRate] = useState(6.75);
    const [appreciation, setAppreciation] = useState(3);
    const [years, setYears] = useState(7);
    const [propertyTax, setPropertyTax] = useState(1.2);
    const [maintenance, setMaintenance] = useState(300);

    const result = useMemo(() => {
        const dp = homePrice * (downPaymentPct / 100);
        const loan = homePrice - dp;
        const mr = rate / 100 / 12;
        const pi = loan * (mr * Math.pow(1 + mr, 360)) / (Math.pow(1 + mr, 360) - 1);
        const tax = (homePrice * propertyTax / 100) / 12;
        const insurance = 150;
        const pmi = downPaymentPct < 20 ? loan * 0.005 / 12 : 0;
        const monthlyOwn = pi + tax + insurance + pmi + maintenance;

        let totalRentPaid = 0;
        let currentRent = monthlyRent;
        for (let y = 0; y < years; y++) {
            totalRentPaid += currentRent * 12;
            currentRent *= (1 + rentIncrease / 100);
        }

        const totalOwnPaid = monthlyOwn * 12 * years;
        const futureValue = homePrice * Math.pow(1 + appreciation / 100, years);
        const equityBuilt = futureValue - loan * Math.pow(1 + mr, years * 12) + loan * ((Math.pow(1 + mr, years * 12) - 1) / mr) * pi / (pi + loan * mr);

        // Simplified equity calc
        let balance = loan;
        for (let m = 0; m < years * 12; m++) {
            const intPmt = balance * mr;
            const prinPmt = pi - intPmt;
            balance -= prinPmt;
        }
        const actualEquity = futureValue - balance;
        const netCostOwning = totalOwnPaid - actualEquity + dp;
        const buyBetter = totalRentPaid > netCostOwning;

        return { monthlyOwn, totalRentPaid, totalOwnPaid, futureValue, actualEquity, balance, dp, buyBetter, finalRent: currentRent };
    }, [monthlyRent, rentIncrease, homePrice, downPaymentPct, rate, appreciation, years, propertyTax, maintenance]);

    return (
        <>
            <Hero variant="dark" badge="Calculator" title="Rent vs Buy Calculator" subtitle="Compare the true cost of renting vs buying over your expected time horizon." />
            <section className="section"><div className="container"><div className={styles.calcGrid}>
                <div className={styles.inputPanel}>
                    <h3>Renting</h3>
                    <div className={styles.inputGroup}><label>Current Monthly Rent</label><input type="number" value={monthlyRent} onChange={e => setMonthlyRent(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Annual Rent Increase (%)</label><input type="number" step="0.5" value={rentIncrease} onChange={e => setRentIncrease(Number(e.target.value))} /></div>
                    <h3 style={{ marginTop: 'var(--space-6)' }}>Buying</h3>
                    <div className={styles.inputGroup}><label>Home Price</label><input type="number" value={homePrice} onChange={e => setHomePrice(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Down Payment (%)</label><input type="number" value={downPaymentPct} onChange={e => setDownPaymentPct(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Interest Rate (%)</label><input type="number" step="0.125" value={rate} onChange={e => setRate(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Home Appreciation (%/yr)</label><input type="number" step="0.5" value={appreciation} onChange={e => setAppreciation(Number(e.target.value))} /></div>
                    <div className={styles.inputGroup}><label>Time Horizon (years)</label><input type="number" value={years} onChange={e => setYears(Number(e.target.value))} /></div>
                </div>
                <div className={styles.resultPanel}>
                    <div className={styles.resultMain}><span className={styles.resultLabel}>After {years} Years</span><span className={styles.resultValue} style={{ fontSize: 'var(--font-size-2xl)', color: result.buyBetter ? 'var(--color-success)' : 'var(--color-gold)' }}>{result.buyBetter ? 'Buying Wins' : 'Renting May Win'}</span></div>
                    <div className={styles.breakdown}>
                        <div className={styles.breakdownItem}><span>Total Rent Paid</span><strong>{fmt(result.totalRentPaid)}</strong></div>
                        <div className={styles.breakdownItem}><span>Total Ownership Cost</span><strong>{fmt(result.totalOwnPaid)}</strong></div>
                        <div className={styles.breakdownItem}><span>Home Value in {years}yr</span><strong>{fmt(result.futureValue)}</strong></div>
                        <div className={styles.breakdownItem}><span>Equity Built</span><strong style={{ color: 'var(--color-success)' }}>{fmt(result.actualEquity)}</strong></div>
                        <div className={styles.breakdownItem}><span>Remaining Mortgage</span><strong>{fmt(result.balance)}</strong></div>
                        <div className={styles.breakdownItem}><span>Monthly Rent in Year {years}</span><strong>{fmt(result.finalRent)}</strong></div>
                    </div>
                </div>
            </div></div></section>
            <CTABanner heading="Ready to Stop Renting?" description="Get pre-approved and start building equity instead of paying your landlord." primaryLabel="Get Pre-Approved" primaryHref="/get-pre-approved" secondaryLabel="Talk to an Advisor" secondaryHref="/book-consultation" variant="dark" />
        </>
    );
}
