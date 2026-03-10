import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Home Loan Programs',
    description: 'Explore 24+ mortgage programs from Airus Lending: conventional, FHA, VA, USDA, jumbo, DSCR, bank statement, ITIN, and more. Find the program that fits your needs.',
};

const programs = [
    {
        category: 'Government-Backed', items: [
            { title: 'FHA Loans', description: 'Low down payment, flexible credit — ideal for first-time buyers.', href: '/home-loans/fha-loans' },
            { title: 'VA Loans', description: 'Zero-down financing for eligible veterans, active military, and spouses.', href: '/home-loans/va-loans' },
            { title: 'USDA Loans', description: '100% financing for eligible rural and suburban properties.', href: '/home-loans/usda-loans' },
        ]
    },
    {
        category: 'Conventional & Jumbo', items: [
            { title: 'Conventional Loans', description: 'Competitive rates with as little as 3% down for qualified borrowers.', href: '/home-loans/conventional-loans' },
            { title: 'Jumbo Loans', description: 'Financing above conforming limits for luxury and high-value properties.', href: '/home-loans/jumbo-loans' },
            { title: 'Fixed-Rate Mortgages', description: 'Predictable monthly payments with a rate that never changes.', href: '/home-loans/fixed-rate-mortgages' },
            { title: 'Adjustable-Rate Mortgages', description: 'Lower initial rates with periodic adjustments after the fixed period.', href: '/home-loans/adjustable-rate-mortgages' },
        ]
    },
    {
        category: 'Non-QM & Specialty', items: [
            { title: 'Non-QM Loans', description: 'Flexible lending beyond traditional guidelines. Multiple documentation types.', href: '/home-loans/non-qm-loans' },
            { title: 'DSCR Loans', description: 'Qualify based on property cash flow — no personal income verification.', href: '/home-loans/dscr-loans' },
            { title: 'Bank Statement Loans', description: '12–24 months of bank statements instead of tax returns.', href: '/home-loans/bank-statement-loans' },
            { title: '12-Month Bank Statement', description: 'Shorter-term bank statement option for qualifying self-employed borrowers.', href: '/home-loans/12-month-bank-statement-loans' },
            { title: 'ITIN Loans', description: 'Mortgage programs for borrowers with an Individual Taxpayer Identification Number.', href: '/home-loans/itin-loans' },
            { title: 'Asset Depletion Loans', description: 'Qualify using liquid assets instead of traditional employment income.', href: '/home-loans/asset-depletion-loans' },
            { title: 'Interest-Only Mortgages', description: 'Lower initial payments with interest-only periods.', href: '/home-loans/interest-only-mortgages' },
            { title: 'Foreign National Loans', description: 'Financing for non-US citizens purchasing property in the United States.', href: '/home-loans/foreign-national-loans' },
        ]
    },
    {
        category: 'Equity & Bridge', items: [
            { title: 'Home Equity Loans', description: 'Fixed-rate lump sum based on your home\'s equity.', href: '/home-loans/home-equity-loans' },
            { title: 'HELOC', description: 'Revolving line of credit against your home equity.', href: '/home-loans/heloc' },
            { title: 'Bridge Loans', description: 'Short-term financing to bridge the gap between buying and selling.', href: '/home-loans/bridge-loans' },
            { title: 'Down Payment Assistance', description: 'Programs that help with your down payment and closing costs.', href: '/home-loans/down-payment-assistance' },
        ]
    },
    {
        category: 'Construction & Renovation', items: [
            { title: 'Renovation Loans', description: 'Finance the purchase and renovation of a fixer-upper.', href: '/home-loans/renovation-loans' },
            { title: 'FHA 203k Loans', description: 'Government-backed renovation financing for purchase or refinance.', href: '/home-loans/fha-203k-loans' },
            { title: 'One-Time Close Construction', description: 'Build your home with a single loan that converts to a permanent mortgage.', href: '/home-loans/one-time-close-construction' },
            { title: 'VA Construction Loans', description: 'Construction financing for eligible veterans with VA benefits.', href: '/home-loans/va-construction-loans' },
            { title: 'Conventional Construction', description: 'Standard construction lending for new builds.', href: '/home-loans/conventional-construction-loans' },
        ]
    },
];

export default function LoanProgramsPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Loan Programs"
                title="24+ Mortgage Programs — One Advisor"
                subtitle="From conventional and FHA to DSCR, bank statement, and construction loans — we offer more programs than most banks can access."
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
            />

            <section className="section">
                <div className="container">
                    {programs.map((group, gi) => (
                        <div key={gi} className={styles.programGroup}>
                            <div className={styles.groupHeader}>
                                <div className="divider" />
                                <h2>{group.category}</h2>
                            </div>
                            <div className={styles.programGrid}>
                                {group.items.map((item, i) => (
                                    <Link key={i} href={item.href} className={styles.programCard}>
                                        <h3 className={styles.programTitle}>{item.title}</h3>
                                        <p className={styles.programDesc}>{item.description}</p>
                                        <span className={styles.programLink}>Learn more →</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTABanner
                heading="Not Sure Which Program Fits?"
                description="Talk to an advisor who can analyze your situation and match you with the right loan."
                primaryLabel="Talk to an Advisor"
                primaryHref="/book-consultation"
                secondaryLabel="Get Pre-Approved"
                secondaryHref="/get-pre-approved"
                variant="blue"
            />
        </>
    );
}
