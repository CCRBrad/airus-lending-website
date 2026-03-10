import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Mortgage Calculators',
    description: 'Use free mortgage calculators from Airus Lending. Estimate payments, affordability, refinance savings, DSCR, amortization, and more.',
};

const calculators = [
    { icon: '🏠', title: 'Mortgage Calculator', description: 'Estimate your monthly mortgage payment based on home price, down payment, rate, and term.', href: '/calculators/mortgage-calculator' },
    { icon: '💰', title: 'Home Affordability', description: 'Find out how much home you can afford based on your income, debts, and down payment.', href: '/calculators/home-affordability-calculator' },
    { icon: '📉', title: 'Refinance Calculator', description: 'See how much you could save by refinancing your current mortgage.', href: '/calculators/refinance-calculator' },
    { icon: '💵', title: 'Cash-Out Refinance', description: 'Calculate how much equity you could access through a cash-out refinance.', href: '/calculators/cash-out-refinance-calculator' },
    { icon: '📊', title: 'Amortization Schedule', description: 'View a complete breakdown of principal and interest over the life of your loan.', href: '/calculators/amortization-calculator' },
    { icon: '🏘️', title: 'DSCR Calculator', description: 'Calculate the debt service coverage ratio for an investment property.', href: '/calculators/dscr-calculator' },
    { icon: '🔑', title: 'Down Payment', description: 'See how different down payment amounts affect your monthly costs.', href: '/calculators/down-payment-calculator' },
    { icon: '🏡', title: 'Rent vs Buy', description: 'Compare the long-term costs of renting vs. buying a home.', href: '/calculators/rent-vs-buy-calculator' },
    { icon: '🏢', title: 'SBA Loan Calculator', description: 'Estimate monthly payments for SBA 7(a) and SBA 504 loans.', href: '/calculators/sba-loan-calculator' },
    { icon: '📝', title: 'Closing Costs', description: 'Estimate your closing costs for a purchase or refinance with line-item detail.', href: '/calculators/closing-costs-calculator' },
    { icon: '🎖️', title: 'VA Affordability', description: 'See how much home you can afford with $0 down and no PMI using your VA benefit.', href: '/calculators/va-affordability-calculator' },
    { icon: '💲', title: 'VA Funding Fee', description: 'Calculate your VA funding fee based on loan type, service history, and disability exemptions.', href: '/calculators/va-funding-fee-calculator' },
];

export default function CalculatorsPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Tools"
                title="Mortgage Calculators"
                subtitle="Explore your numbers, plan your budget, and make informed decisions — all for free."
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
            />

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {calculators.map((calc, i) => (
                            <Link key={i} href={calc.href} className={styles.card}>
                                <span className={styles.icon}>{calc.icon}</span>
                                <div>
                                    <h3 className={styles.title}>{calc.title}</h3>
                                    <p className={styles.desc}>{calc.description}</p>
                                </div>
                                <span className={styles.arrow}>→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                heading="Want an Advisor to Review Your Numbers?"
                description="Our team can review your calculator results and give you real-world guidance on next steps."
                primaryLabel="Get My Scenario Reviewed"
                primaryHref="/book-consultation"
                variant="blue"
            />
        </>
    );
}
