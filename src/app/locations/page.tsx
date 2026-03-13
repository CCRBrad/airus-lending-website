import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Locations We Serve | Airus Lending',
    description: 'Airus Lending is licensed in 7 states: CA, FL, TX, WA, CO, AZ, GA. Find your state and explore mortgage options available in your area.',
};

const states = [
    { name: 'California', code: 'CA', href: '/locations/california', highlight: 'High-cost markets' },
    { name: 'Florida', code: 'FL', href: '/locations/florida', highlight: 'No state income tax' },
    { name: 'Texas', code: 'TX', href: '/locations/texas', highlight: 'No state income tax' },
    { name: 'Washington', code: 'WA', href: '/locations/washington', highlight: 'Seattle & Puget Sound' },
    { name: 'Colorado', code: 'CO', href: '/locations/colorado', highlight: 'Denver & Front Range' },
    { name: 'Arizona', code: 'AZ', href: '/locations/arizona', highlight: 'Phoenix & Scottsdale' },
    { name: 'Georgia', code: 'GA', href: '/locations/georgia', highlight: 'Headquarters' },
];

export default function LocationsPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Nationwide Lending"
                title="States We Serve"
                subtitle="Airus Lending is licensed in 7 states for residential mortgage lending. DSCR and commercial loans available in 40+ states."
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
