import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
    title: 'Book a Consultation',
    description: 'Schedule a free consultation with a licensed mortgage advisor at Airus Lending. Discuss your goals, explore loan options, and get expert guidance — no obligation.',
};

export default function BookConsultationPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Free Consultation"
                title="Talk to a Mortgage Advisor"
                subtitle="Schedule a free, no-obligation call with a licensed advisor. We'll review your goals, explain your options, and help you plan your next move."
                primaryCTA={{ label: '', href: '' }}
                secondaryCTA={undefined}
            />

            <section className="section">
                <div className="container" style={{ maxWidth: '720px' }}>
                    <div className="divider divider--center" />
                    <h2 style={{ textAlign: 'center' }}>Schedule Your Call</h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-gray-600)', marginBottom: 'var(--space-8)' }}>
                        Fill out the form below and we&apos;ll reach out to confirm your appointment.
                    </p>

                    <form>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="bc-firstName">First Name *</label>
                                <input className="form-input" type="text" id="bc-firstName" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="bc-lastName">Last Name *</label>
                                <input className="form-input" type="text" id="bc-lastName" required />
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="bc-email">Email *</label>
                                <input className="form-input" type="email" id="bc-email" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="bc-phone">Phone *</label>
                                <input className="form-input" type="tel" id="bc-phone" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="bc-topic">What would you like to discuss?</label>
                            <select className="form-select" id="bc-topic">
                                <option value="">Select a topic</option>
                                <option value="purchase">Home Purchase</option>
                                <option value="refinance">Refinance</option>
                                <option value="investment">Investment Property Financing</option>
                                <option value="self-employed">Self-Employed Mortgage Options</option>
                                <option value="commercial">Commercial Financing</option>
                                <option value="sba">SBA Loan</option>
                                <option value="general">General Questions</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="bc-notes">How can we help?</label>
                            <textarea className="form-textarea" id="bc-notes" placeholder="Tell us about your situation and what you'd like to discuss..." />
                        </div>
                        <button type="submit" className="btn btn--primary btn--lg btn--full">Book My Consultation</button>
                        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-400)', textAlign: 'center', marginTop: 'var(--space-4)' }}>
                            Free. No commitment. No hard credit pull. A licensed advisor will reach out to confirm your consultation time.
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
}
