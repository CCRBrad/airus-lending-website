import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ProcessSteps from '@/components/ProcessSteps';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'About Airus Lending',
    description: 'Airus Lending is a mortgage brokerage offering residential, commercial, and SBA financing. Learn about our mission, values, and commitment to client-first lending.',
};

const stats = [
    { value: '50+', label: 'Lender Partners' },
    { value: '24+', label: 'Loan Programs' },
    { value: '4.9★', label: 'Client Rating' },
    { value: '21 Days', label: 'Avg. Close' },
];

const values = [
    { icon: '🎯', title: 'Options Over Limitations', description: 'We work with 50+ wholesale lenders so we can match you with the right program — not the only one we have.' },
    { icon: '🤝', title: 'Advisory, Not Sales', description: 'Our advisors explain your options, walk you through tradeoffs, and let you decide with confidence.' },
    { icon: '🔬', title: 'Niche Expertise', description: 'Non-QM, DSCR, bank statement, ITIN, SBA — we specialize in the loans most banks won\'t touch.' },
    { icon: '⚡', title: 'Speed & Communication', description: 'Fast pre-approvals, responsive advisors, and a technology stack that keeps your file moving efficiently.' },
];

export default function AboutPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="About Us"
                title="A Better Way to Get a Mortgage"
                subtitle="Airus Lending is a mortgage brokerage built around one idea: borrowers deserve more options, clearer information, and an advisor who works for them — not a bank quota."
                primaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
                secondaryCTA={{ label: 'View Loan Programs', href: '/home-loans' }}
            />

            <StatsBar stats={stats} variant="light" />

            <section className="section">
                <div className="container">
                    <div className={styles.storySection}>
                        <div>
                            <div className="divider" />
                            <h2>Who We Are</h2>
                            <p>
                                Airus Lending is a licensed mortgage brokerage that connects borrowers with the right financing from across a wide network of wholesale lenders. Unlike banks and direct lenders, we are not limited to a single institution&apos;s products.
                            </p>
                            <p>
                                That means more choices. It means we can serve first-time homebuyers with FHA programs, self-employed borrowers with bank statement loans, real estate investors with DSCR financing, and businesses with SBA and commercial lending — all under one advisory roof.
                            </p>
                            <p>
                                We believe the mortgage process should be transparent, efficient, and built around the borrower&apos;s goals — not the other way around.
                            </p>
                        </div>
                        <div>
                            <div className="divider" />
                            <h2>What Makes Us Different</h2>
                            <p>
                                Most borrowers only see the products their bank offers. We show you what the entire market has. Our advisors are trained to analyze your income, credit, goals, and timeline — then match you with the program that actually fits.
                            </p>
                            <p>
                                Whether you need a standard conventional loan or a complex non-QM solution, our team has the expertise to structure it and the lender relationships to price it competitively.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--light">
                <div className="container">
                    <div className={styles.valuesHeader}>
                        <div className="divider divider--center" />
                        <h2>Our Values</h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((v, i) => (
                            <div key={i} className={styles.valueCard}>
                                <span className={styles.valueIcon}>{v.icon}</span>
                                <h3>{v.title}</h3>
                                <p>{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessSteps
                title="How Working With Us Works"
                subtitle="From first contact to closing, here's what to expect."
                steps={[
                    { number: 1, title: 'Share Your Goals', description: 'Tell us about your property, timeline, and financial situation. We listen first.' },
                    { number: 2, title: 'Receive Your Options', description: 'We analyze available programs from our lender network and present your best-fit options with transparent terms.' },
                    { number: 3, title: 'Apply & Close', description: 'Your dedicated advisor manages the process — from application and underwriting to clear-to-close and funding.' },
                ]}
            />

            <CTABanner
                heading="Ready to Work With Airus Lending?"
                description="Start with a conversation. No commitment, no hard credit pull."
                primaryLabel="Get Pre-Approved"
                primaryHref="/get-pre-approved"
                secondaryLabel="Book a Consultation"
                secondaryHref="/book-consultation"
                variant="dark"
            />
        </>
    );
}
