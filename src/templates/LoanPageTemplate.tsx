import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from './LoanPageTemplate.module.css';

interface RelatedProduct {
    title: string;
    href: string;
    description: string;
}

interface LoanPageData {
    badge?: string;
    title: string;
    subtitle: string;
    overview: string;
    whoIsItFor: string[];
    keyBenefits: { title: string; description: string }[];
    qualificationOverview: string[];
    downPaymentInfo: string;
    creditRequirements: string;
    occupancyTypes: string[];
    propertyTypes: string[];
    pros: string[];
    tradeoffs: string[];
    commonScenarios: { title: string; description: string }[];
    documentsNeeded: string[];
    faqs: { question: string; answer: string }[];
    relatedProducts: RelatedProduct[];
    ctaHeading?: string;
    ctaDescription?: string;
}

export default function LoanPageTemplate({ data }: { data: LoanPageData }) {
    return (
        <>
            <Hero
                variant="dark"
                badge={data.badge}
                title={data.title}
                subtitle={data.subtitle}
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Discuss This Loan', href: '/book-consultation' }}
            />

            {/* Overview */}
            <section className="section">
                <div className="container">
                    <div className={styles.twoCol}>
                        <div className={styles.mainContent}>
                            <div className="divider" />
                            <h2>Program Overview</h2>
                            <p className={styles.overview}>{data.overview}</p>

                            {/* Who It's For */}
                            <h2>Who Is This Loan For?</h2>
                            <ul className={styles.checkList}>
                                {data.whoIsItFor.map((item, i) => (
                                    <li key={i}><span className={styles.check}>✓</span> {item}</li>
                                ))}
                            </ul>

                            {/* Key Benefits */}
                            <h2>Key Benefits</h2>
                            <div className={styles.benefitsGrid}>
                                {data.keyBenefits.map((benefit, i) => (
                                    <div key={i} className={styles.benefitCard}>
                                        <h4>{benefit.title}</h4>
                                        <p>{benefit.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Qualification */}
                            <h2>Qualification at a Glance</h2>
                            <div className={styles.qualGrid}>
                                <div className={styles.qualItem}>
                                    <span className={styles.qualLabel}>Credit</span>
                                    <span className={styles.qualValue}>{data.creditRequirements}</span>
                                </div>
                                <div className={styles.qualItem}>
                                    <span className={styles.qualLabel}>Down Payment</span>
                                    <span className={styles.qualValue}>{data.downPaymentInfo}</span>
                                </div>
                                <div className={styles.qualItem}>
                                    <span className={styles.qualLabel}>Occupancy</span>
                                    <span className={styles.qualValue}>{data.occupancyTypes.join(', ')}</span>
                                </div>
                                <div className={styles.qualItem}>
                                    <span className={styles.qualLabel}>Property Types</span>
                                    <span className={styles.qualValue}>{data.propertyTypes.join(', ')}</span>
                                </div>
                            </div>
                            <h3>General Requirements</h3>
                            <ul className={styles.list}>
                                {data.qualificationOverview.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            {/* Pros and Tradeoffs */}
                            <div className={styles.prosConsGrid}>
                                <div className={styles.prosCard}>
                                    <h3>Advantages</h3>
                                    <ul>
                                        {data.pros.map((pro, i) => (
                                            <li key={i}><span className={styles.proIcon}>✓</span> {pro}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.consCard}>
                                    <h3>Tradeoffs to Consider</h3>
                                    <ul>
                                        {data.tradeoffs.map((con, i) => (
                                            <li key={i}><span className={styles.conIcon}>↔</span> {con}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Common Scenarios */}
                            <h2>Common Scenarios</h2>
                            <div className={styles.scenarioList}>
                                {data.commonScenarios.map((scenario, i) => (
                                    <div key={i} className={styles.scenarioItem}>
                                        <h4>{scenario.title}</h4>
                                        <p>{scenario.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Documents Needed */}
                            <h2>Documents Typically Needed</h2>
                            <ul className={styles.docList}>
                                {data.documentsNeeded.map((doc, i) => (
                                    <li key={i}><span className={styles.docIcon}>📄</span> {doc}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4>Ready to Explore This Loan?</h4>
                                <p>Get a personalized quote with no obligation and no hard credit pull.</p>
                                <Link href="/get-pre-approved" className="btn btn--primary btn--full">
                                    Get Pre-Approved
                                </Link>
                                <Link href="/book-consultation" className="btn btn--secondary btn--full" style={{ marginTop: 'var(--space-3)' }}>
                                    Talk to an Advisor
                                </Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Related Programs</h4>
                                <div className={styles.relatedLinks}>
                                    {data.relatedProducts.map((rp, i) => (
                                        <Link key={i} href={rp.href} className={styles.relatedLink}>
                                            <span className={styles.relatedTitle}>{rp.title}</span>
                                            <span className={styles.relatedDesc}>{rp.description}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Useful Tools</h4>
                                <div className={styles.relatedLinks}>
                                    <Link href="/calculators/mortgage-calculator" className={styles.relatedLink}>
                                        <span className={styles.relatedTitle}>Mortgage Calculator</span>
                                        <span className={styles.relatedDesc}>Estimate your monthly payment</span>
                                    </Link>
                                    <Link href="/calculators/home-affordability-calculator" className={styles.relatedLink}>
                                        <span className={styles.relatedTitle}>Affordability Calculator</span>
                                        <span className={styles.relatedDesc}>See how much home you can afford</span>
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ items={data.faqs} />

            {/* CTA */}
            <CTABanner
                heading={data.ctaHeading || 'Ready to Get Started?'}
                description={data.ctaDescription || 'Connect with an advisor to discuss this program and get pre-approved.'}
                primaryLabel="Get Pre-Approved"
                primaryHref="/get-pre-approved"
                secondaryLabel="Talk to an Advisor"
                secondaryHref="/book-consultation"
                variant="dark"
            />
        </>
    );
}
