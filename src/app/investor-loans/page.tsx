import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Investor Loans',
    description: 'Real estate investor financing from Airus Lending. DSCR loans, rental property loans, fix-and-flip, bridge loans, and portfolio lending programs for scaling your investments.',
};

const investorCards = [
    { icon: '📊', title: 'DSCR Loans', description: 'Qualify based on property cash flow — no personal income verification, tax returns, or W-2s required.', href: '/home-loans/dscr-loans' },
    { icon: '🏘️', title: 'Rental Property Loans', description: 'Long-term financing for single-family, multi-unit, and small portfolio rental properties.', href: '/investor-loans/rental-property-loans' },
    { icon: '🔨', title: 'Fix & Flip Loans', description: 'Short-term rehab financing with fast closings and interest-only payments.', href: '/commercial-loans/fix-and-flip' },
    { icon: '🌉', title: 'Bridge Loans', description: 'Short-term acquisition financing while you transition, stabilize, or refinance.', href: '/home-loans/bridge-loans' },
    { icon: '📁', title: 'Portfolio Loans', description: 'Consolidate multiple properties under one flexible blanket loan.', href: '/investor-loans/portfolio-loans' },
    { icon: '🏦', title: 'Bank Statement Loans', description: 'Qualify using personal or business bank deposits — ideal for self-employed investors.', href: '/home-loans/bank-statement-loans' },
];

const whyInvestorCards = [
    { icon: '🔍', title: 'No Personal Income Verification', description: 'DSCR and asset-based programs qualify you on property performance — not your W-2 or tax return.' },
    { icon: '📈', title: 'Scale Without Limits', description: 'No conventional cap on financed properties. Finance 1, 10, or 50+ properties through our investor programs.' },
    { icon: '🏢', title: 'Entity Vesting', description: 'Close in the name of an LLC, corporation, or trust for asset protection and portfolio organization.' },
    { icon: '⚡', title: 'Fast, Streamlined Closings', description: 'Reduced documentation means fewer bottlenecks — our average investor loan closes in 21 days.' },
];

const dscrStates = [
    'Alabama', 'Arizona*', 'Arkansas', 'California*', 'Colorado*', 'Connecticut', 'Delaware',
    'Florida*', 'Georgia*', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Massachusetts', 'Michigan', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'New Hampshire', 'New Jersey', 'New Mexico', 'North Carolina', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'Tennessee',
    'Texas*', 'Utah', 'Virginia', 'Washington*', 'West Virginia', 'Wisconsin', 'Wyoming',
];

export default function InvestorLoansPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Investor Programs"
                title={'Real Estate Investor\nFinancing'}
                subtitle="DSCR, rental property, fix-and-flip, bridge, and portfolio lending programs designed for investors who want to scale."
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
            />

            <FeatureCards
                title="Investor Loan Programs"
                subtitle="Financing solutions built for real estate investors — from single property to entire portfolios."
                cards={investorCards}
                columns={3}
            />

            <section className="section section--light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                        <div className="divider divider--center" />
                        <h2>Why Investors Choose Airus</h2>
                        <p style={{ color: 'var(--color-gray-500)', fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
                            Programs designed for the way investors actually operate.
                        </p>
                    </div>
                    <div className="grid grid--4">
                        {whyInvestorCards.map((card, i) => (
                            <div key={i} className="card card--flat" style={{ textAlign: 'center', padding: 'var(--space-8) var(--space-6)' }}>
                                <div style={{ fontSize: '40px', marginBottom: 'var(--space-4)' }}>{card.icon}</div>
                                <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-3)' }}>{card.title}</h3>
                                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--font-size-sm)', lineHeight: 1.6 }}>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                        <div className="divider divider--center" />
                        <h2>DSCR & Investor Lending Footprint</h2>
                        <p style={{ color: 'var(--color-gray-500)', fontSize: 'var(--font-size-lg)', maxWidth: '640px', margin: '0 auto' }}>
                            DSCR and Non-QM investor loans are business-purpose loans available in 40+ states. States marked with * indicate Airus Lending is directly licensed.
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        {dscrStates.map((state, i) => (
                            <span key={i} style={{
                                padding: 'var(--space-2) var(--space-4)',
                                background: state.includes('*') ? 'var(--color-blue-pale)' : 'var(--color-gray-100)',
                                color: state.includes('*') ? 'var(--color-blue)' : 'var(--color-gray-700)',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: state.includes('*') ? 600 : 400,
                            }}>
                                {state}
                            </span>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', marginTop: 'var(--space-6)', color: 'var(--color-gray-500)', fontSize: 'var(--font-size-sm)' }}>
                        Availability depends on lender guidelines, property type, and loan structure. <Link href="/licensing" style={{ color: 'var(--color-blue)' }}>View full licensing details →</Link>
                    </p>
                </div>
            </section>

            <CTABanner
                heading="Ready to Scale Your Portfolio?"
                description="Get a personalized investor loan quote — no tax returns required for DSCR programs."
                primaryLabel="Get Pre-Approved"
                primaryHref="/get-pre-approved"
                secondaryLabel="Talk to an Advisor"
                secondaryHref="/book-consultation"
                variant="dark"
            />
        </>
    );
}
