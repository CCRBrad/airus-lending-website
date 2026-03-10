import Link from 'next/link';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';

export const metadata = {
    title: 'VA Loans | Airus Lending',
    description: 'VA home loan experts. $0 down payment, no PMI, competitive rates, and flexible credit guidelines for veterans, active-duty military, and surviving spouses.',
};

const vaProducts = [
    { title: 'VA Home Loans', description: 'Purchase your home with $0 down and no PMI. The most powerful mortgage benefit for those who served.', href: '/va-loans/va-home-loans', icon: '🏠' },
    { title: 'VA Refinance', description: 'Lower your rate or change your term with a VA rate-and-term refinance.', href: '/va-loans/va-refinance', icon: '🔄' },
    { title: 'VA IRRRL', description: 'Interest Rate Reduction Refinance Loan — streamlined refinancing with minimal documentation.', href: '/va-loans/va-irrrl', icon: '⚡' },
    { title: 'VA Cash-Out Refinance', description: 'Tap into your home equity to consolidate debt, renovate, or invest.', href: '/va-loans/va-cash-out', icon: '💰' },
    { title: 'VA Construction Loans', description: 'Build your dream home with a VA construction-to-permanent loan.', href: '/va-loans/va-construction', icon: '🏗️' },
    { title: 'VA Eligibility Guide', description: 'Learn who qualifies for VA loans and how to obtain your Certificate of Eligibility.', href: '/va-loans/va-eligibility', icon: '📋' },
    { title: 'VA Loan Limits', description: 'Understand VA loan limits by county and how full entitlement works.', href: '/va-loans/va-loan-limits', icon: '📊' },
    { title: 'VA Funding Fee', description: 'Learn about the VA funding fee, exemptions, and how it affects your loan.', href: '/va-loans/va-funding-fee', icon: '💲' },
    { title: 'VA Appraisal Process', description: 'What to expect during the VA appraisal — requirements, timeline, and MPRs.', href: '/va-loans/va-appraisal', icon: '🔍' },
];

const benefits = [
    { title: '$0 Down Payment', description: '100% financing — no down payment required on purchase or refinance.' },
    { title: 'No PMI', description: 'Save hundreds per month. VA loans never require private mortgage insurance.' },
    { title: 'Competitive Rates', description: 'VA loan rates are typically lower than conventional or FHA programs.' },
    { title: 'Flexible Credit', description: 'More lenient qualification guidelines — no official minimum credit score.' },
    { title: 'No Loan Limits (Full Entitlement)', description: 'Veterans with full entitlement have no VA loan limit — buy at any price point.' },
    { title: 'Assumable Loans', description: 'VA loans can be assumed by a qualified buyer — a major advantage in high-rate markets.' },
];

export default function VALoansHub() {
    return (
        <>
            <Hero
                variant="home"
                badge="🎖️ VA Loan Specialists"
                title="The VA Loan Experts"
                subtitle="If you served, your mortgage should work as hard as you did. $0 down, no PMI, competitive rates — and a team that specializes in VA lending."
                primaryCTA={{ label: 'Check Your Eligibility', href: '/va-loans/va-eligibility' }}
                secondaryCTA={{ label: 'Talk to a VA Specialist', href: '/book-consultation' }}
                trustBadges={['Purchase', 'Refinance', 'IRRRL', 'Cash-Out', 'Construction', 'Jumbo VA']}
            />

            {/* Benefits */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                        <div className="divider divider--center" />
                        <h2>Why VA Loans Are the Best Mortgage in America</h2>
                        <p style={{ color: 'var(--color-gray-500)', fontSize: 'var(--font-size-lg)', maxWidth: 600, margin: '0 auto' }}>
                            Created by the federal government to reward military service with the most borrower-friendly mortgage program available.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ padding: 'var(--space-6)', background: 'var(--color-white)', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-lg)' }}>
                                <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 'var(--space-2)' }}>{b.title}</h3>
                                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', lineHeight: 1.6 }}>{b.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VA Products Grid */}
            <section className="section section--light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                        <div className="divider divider--center" />
                        <h2>Explore VA Loan Programs</h2>
                        <p style={{ color: 'var(--color-gray-500)', fontSize: 'var(--font-size-lg)', maxWidth: 600, margin: '0 auto' }}>
                            From first-time purchases to streamlined refinances and custom builds.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
                        {vaProducts.map((product) => (
                            <Link
                                key={product.href}
                                href={product.href}
                                style={{
                                    display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)',
                                    padding: 'var(--space-6)', background: 'var(--color-white)',
                                    border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-lg)',
                                    textDecoration: 'none', color: 'inherit', transition: 'all 0.2s',
                                }}
                            >
                                <span style={{ fontSize: 32, flexShrink: 0 }}>{product.icon}</span>
                                <div>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 'var(--space-1)' }}>{product.title}</h3>
                                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', lineHeight: 1.5 }}>{product.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* VA Calculators */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                        <div className="divider divider--center" />
                        <h2>VA Loan Calculators</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4)', maxWidth: 700, margin: '0 auto' }}>
                        <Link href="/calculators/va-affordability-calculator" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'var(--space-8)', background: 'var(--color-white)', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-xl)', textDecoration: 'none', color: 'inherit' }}>
                            <span style={{ fontSize: 40, marginBottom: 'var(--space-4)' }}>🏠</span>
                            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 'var(--space-2)' }}>VA Affordability Calculator</h3>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)' }}>See how much home you can afford with $0 down.</p>
                        </Link>
                        <Link href="/calculators/va-funding-fee-calculator" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'var(--space-8)', background: 'var(--color-white)', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-xl)', textDecoration: 'none', color: 'inherit' }}>
                            <span style={{ fontSize: 40, marginBottom: 'var(--space-4)' }}>💲</span>
                            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 'var(--space-2)' }}>VA Funding Fee Calculator</h3>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)' }}>Calculate your VA funding fee and see if you qualify for an exemption.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <CTABanner
                heading="Ready to Use Your VA Benefit?"
                description="Talk to a VA loan specialist today — we'll guide you through eligibility, options, and the fastest path to closing."
                primaryLabel="Check VA Eligibility"
                primaryHref="/va-loans/va-eligibility"
                secondaryLabel="Book a Consultation"
                secondaryHref="/book-consultation"
                variant="blue"
            />
        </>
    );
}
