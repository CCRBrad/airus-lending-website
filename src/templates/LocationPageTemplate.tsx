import Link from 'next/link';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from './LocationPage.module.css';

export interface LocationData {
    state: string;
    stateCode: string;
    cities: string[];
    programs: { title: string; href: string; description: string }[];
    stats: { value: string; label: string }[];
    faqs: { question: string; answer: string }[];
    seoDescription: string;
}

export default function LocationPageTemplate({ data }: { data: LocationData }) {
    return (
        <>
            <Hero
                variant="home"
                badge={`Licensed in ${data.state}`}
                title={`Mortgage Broker in ${data.state}`}
                subtitle={`Compare loan options from 50+ lenders with a licensed ${data.state} mortgage advisor. VA, FHA, conventional, DSCR, bank statement, and more.`}
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Book a Consultation', href: '/book-consultation' }}
            />

            <StatsBar stats={data.stats} variant="dark" />

            {/* Cities Served */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                        <div className="divider divider--center" />
                        <h2>Areas We Serve in {data.state}</h2>
                        <p style={{ color: 'var(--color-gray-500)', fontSize: 'var(--font-size-lg)', maxWidth: 600, margin: '0 auto' }}>
                            Airus Lending is licensed and ready to serve borrowers throughout {data.state}.
                        </p>
                    </div>
                    <div className={styles.cityGrid}>
                        {data.cities.map((city, i) => (
                            <div key={i} className={styles.cityTag}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                {city}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Programs */}
            <section className="section section--light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                        <div className="divider divider--center" />
                        <h2>Loan Programs Available in {data.stateCode}</h2>
                    </div>
                    <div className={styles.programGrid}>
                        {data.programs.map((prog, i) => (
                            <Link key={i} href={prog.href} className={styles.programCard}>
                                <h3>{prog.title}</h3>
                                <p>{prog.description}</p>
                                <span className={styles.programArrow}>Learn more →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose a Broker */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                        <div className="divider divider--center" />
                        <h2>Why Choose a Mortgage Broker in {data.state}?</h2>
                    </div>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>50+ Lender Partners</h3>
                            <p>Unlike banks that only offer their own products, we shop across 50+ wholesale lenders to find the best rate and program for your needs.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Local Expertise</h3>
                            <p>We understand {data.state}&apos;s real estate market, property tax landscape, and state-specific programs available to {data.stateCode} borrowers.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>All Borrower Types</h3>
                            <p>First-time buyers, veterans, self-employed borrowers, investors — we have specialized programs for every situation.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Fast, Personal Service</h3>
                            <p>Average 21-day close time. Your dedicated advisor handles your file from application to closing — no hand-offs to call centers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ title={`${data.state} Mortgage FAQs`} items={data.faqs} />

            <CTABanner
                heading={`Ready to Get Started in ${data.state}?`}
                description={`Connect with a licensed ${data.state} mortgage advisor today — pre-approval in as little as 24 hours.`}
                primaryLabel="Get Pre-Approved"
                primaryHref="/get-pre-approved"
                secondaryLabel="Book a Consultation"
                secondaryHref="/book-consultation"
                variant="blue"
            />
        </>
    );
}
