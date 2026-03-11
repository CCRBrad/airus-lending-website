import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Locations We Serve | Airus Lending',
    description: 'Airus Lending is licensed in 15+ states. Find your state and explore mortgage options available in your area.',
};

const states = [
    { name: 'Georgia', code: 'GA', href: '/locations/georgia', highlight: 'Headquarters' },
    { name: 'California', code: 'CA', href: '/locations/california', highlight: 'High-cost markets' },
    { name: 'Texas', code: 'TX', href: '/locations/texas', highlight: 'No state income tax' },
    { name: 'Florida', code: 'FL', href: '/locations/florida', highlight: 'No state income tax' },
    { name: 'Virginia', code: 'VA', href: '/locations/georgia', highlight: '' },
    { name: 'North Carolina', code: 'NC', href: '/locations/georgia', highlight: '' },
    { name: 'South Carolina', code: 'SC', href: '/locations/georgia', highlight: '' },
    { name: 'Tennessee', code: 'TN', href: '/locations/georgia', highlight: '' },
    { name: 'Alabama', code: 'AL', href: '/locations/georgia', highlight: '' },
    { name: 'Colorado', code: 'CO', href: '/locations/georgia', highlight: '' },
    { name: 'Arizona', code: 'AZ', href: '/locations/georgia', highlight: '' },
    { name: 'Maryland', code: 'MD', href: '/locations/georgia', highlight: '' },
    { name: 'Ohio', code: 'OH', href: '/locations/georgia', highlight: '' },
    { name: 'Michigan', code: 'MI', href: '/locations/georgia', highlight: '' },
    { name: 'Illinois', code: 'IL', href: '/locations/georgia', highlight: '' },
];

export default function LocationsPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Nationwide Lending"
                title="States We Serve"
                subtitle="Airus Lending is licensed in 15+ states. Click your state to explore local mortgage options, programs, and expert guidance."
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Book a Consultation', href: '/book-consultation' }}
            />

            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                        <div className="divider divider--center" />
                        <h2>Licensed States</h2>
                        <p style={{ color: 'var(--color-gray-500)', fontSize: 'var(--font-size-lg)', maxWidth: 600, margin: '0 auto' }}>
                            Click any state to see local programs, cities served, and state-specific FAQs.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                        {states.map((state) => (
                            <Link
                                key={state.code}
                                href={state.href}
                                style={{
                                    display: 'flex', flexDirection: 'column', padding: 'var(--space-5)',
                                    background: 'var(--color-white)', border: '1px solid var(--color-gray-200)',
                                    borderRadius: 'var(--radius-lg)', textDecoration: 'none', color: 'inherit',
                                    transition: 'all 0.2s',
                                }}
                            >
                                <span style={{ fontWeight: 700, fontSize: 'var(--font-size-lg)', color: 'var(--color-navy)' }}>{state.name}</span>
                                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)' }}>{state.code}</span>
                                {state.highlight && (
                                    <span style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-blue)' }}>{state.highlight}</span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                heading="Don't See Your State?"
                description="Airus Lending is expanding. Contact us to check if we can serve your area."
                primaryLabel="Contact Us"
                primaryHref="/contact"
                secondaryLabel="Get Pre-Approved"
                secondaryHref="/get-pre-approved"
                variant="dark"
            />
        </>
    );
}
