import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import ProcessSteps from '@/components/ProcessSteps';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from './BuyPageTemplate.module.css';

interface BuyPageData {
    badge: string;
    title: string;
    subtitle: string;
    overview: string;
    idealBuyer: string[];
    programs: { title: string; description: string; href: string }[];
    steps: { number: number; title: string; description: string }[];
    faqs: { question: string; answer: string }[];
    relatedPages: { title: string; href: string; description: string }[];
    ctaHeading?: string;
    ctaDescription?: string;
}

export default function BuyPageTemplate({ data }: { data: BuyPageData }) {
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
                <div className="container">
                    <div className={styles.grid}>
                        <div>
                            <div className="divider" />
                            <h2>Overview</h2>
                            <p className={styles.overview}>{data.overview}</p>

                            <h3>Who Is This For?</h3>
                            <ul className={styles.list}>
                                {data.idealBuyer.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4>Related Pages</h4>
                                <ul className={styles.relatedList}>
                                    {data.relatedPages.map((page, i) => (
                                        <li key={i}>
                                            <Link href={page.href}>
                                                <strong>{page.title}</strong>
                                                <span>{page.description}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Ready to Get Started?</h4>
                                <p>Get pre-approved and see your options.</p>
                                <Link href="/get-pre-approved" className="btn btn--primary btn--full">Get Pre-Approved</Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {data.programs.length > 0 && (
                <FeatureCards
                    title="Recommended Programs"
                    subtitle="Loan programs that fit this buying scenario."
                    cards={data.programs.map(p => ({ icon: '📋', title: p.title, description: p.description, href: p.href }))}
                    columns={data.programs.length >= 4 ? 4 : 3}
                />
            )}

            <ProcessSteps
                title="The Buying Process"
                subtitle="What to expect from pre-approval to closing."
                steps={data.steps}
            />

            <FAQ title="Frequently Asked Questions" items={data.faqs} />

            <CTABanner
                heading={data.ctaHeading || 'Ready to Buy?'}
                description={data.ctaDescription || 'Get pre-approved and start your home buying journey with confidence.'}
                primaryLabel="Get Pre-Approved"
                primaryHref="/get-pre-approved"
                secondaryLabel="Book a Consultation"
                secondaryHref="/book-consultation"
                variant="dark"
            />
        </>
    );
}
