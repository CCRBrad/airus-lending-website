import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import ProcessSteps from '@/components/ProcessSteps';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from './BorrowerTemplate.module.css';

interface BorrowerData {
    badge: string;
    title: string;
    subtitle: string;
    overview: string;
    challenges: { title: string; description: string }[];
    solutions: { title: string; description: string; href: string }[];
    qualificationTips: string[];
    steps: { number: number; title: string; description: string }[];
    faqs: { question: string; answer: string }[];
    ctaHeading?: string;
    ctaDescription?: string;
}

export default function BorrowerTemplate({ data }: { data: BorrowerData }) {
    return (
        <>
            <Hero
                variant="dark"
                badge={data.badge}
                title={data.title}
                subtitle={data.subtitle}
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
            />

            <section className="section">
                <div className="container" style={{ maxWidth: '860px' }}>
                    <div className="divider divider--center" />
                    <h2 style={{ textAlign: 'center' }}>Overview</h2>
                    <p className={styles.overview}>{data.overview}</p>
                </div>
            </section>

            {data.challenges.length > 0 && (
                <section className="section section--light">
                    <div className="container">
                        <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-2)' }}>Common Challenges</h2>
                        <p style={{ textAlign: 'center', color: 'var(--color-gray-500)', marginBottom: 'var(--space-8)', maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
                            Here&apos;s what often makes financing harder — and how we solve it.
                        </p>
                        <div className={styles.challengeGrid}>
                            {data.challenges.map((c, i) => (
                                <div key={i} className={styles.challengeCard}>
                                    <h4>{c.title}</h4>
                                    <p>{c.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <FeatureCards
                title="Recommended Programs"
                subtitle="Loan programs designed for your situation."
                cards={data.solutions.map(s => ({ icon: '📋', title: s.title, description: s.description, href: s.href }))}
                columns={data.solutions.length >= 4 ? 4 : 3}
            />

            <section className="section section--light">
                <div className="container" style={{ maxWidth: '760px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>Qualification Tips</h2>
                    <div className={styles.tipsList}>
                        {data.qualificationTips.map((tip, i) => (
                            <div key={i} className={styles.tip}>
                                <span className={styles.tipNum}>{i + 1}</span>
                                <p>{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessSteps
                title="How to Get Started"
                subtitle="Your path to homeownership — simplified."
                steps={data.steps}
            />

            <FAQ title="Frequently Asked Questions" items={data.faqs} />

            <CTABanner
                heading={data.ctaHeading || 'Ready to Explore Your Options?'}
                description={data.ctaDescription || 'Talk to an advisor who understands your situation and can match you with the right program.'}
                primaryLabel="Get Pre-Approved"
                primaryHref="/get-pre-approved"
                secondaryLabel="Book a Consultation"
                secondaryHref="/book-consultation"
                variant="dark"
            />
        </>
    );
}
