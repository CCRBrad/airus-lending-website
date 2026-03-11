import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Mortgage Resources & Learning Center',
    description: 'Explore mortgage guides, articles, and educational resources from Airus Lending. Learn about home buying, refinancing, loan programs, investing, and more.',
};

const guides = [
    { title: '📥 The Mortgage Game Plan', description: 'Free downloadable guide — from pre-approval to closing day. Enter your email to get it instantly.', href: '/resources/mortgage-game-plan', icon: '🎯', tag: 'Free Guide' },
    { title: 'First-Time Homebuyer Guide', description: 'Everything first-time buyers need to know — loan programs, DPA, the buying process, and mistakes to avoid.', href: '/resources/first-time-homebuyer-guide', icon: '🏡', tag: 'Guide · 10 min read' },
    { title: 'How to Get Pre-Approved', description: 'Step-by-step guide to getting mortgage pre-approval — what you need, what to expect, and tips for success.', href: '/resources/how-to-get-pre-approved', icon: '📋', tag: 'Guide · 8 min read' },
    { title: 'VA Loan Eligibility Guide', description: 'Complete guide to VA loan eligibility — service requirements, COE, surviving spouse benefits, and qualifying questions.', href: '/resources/va-loan-eligibility-guide', icon: '🎖️', tag: 'Guide · 10 min read' },
    { title: 'Self-Employed Mortgage Guide', description: 'Bank statement loans, 1099 programs, P&L options, and tax strategies for self-employed borrowers.', href: '/resources/self-employed-mortgage-guide', icon: '💼', tag: 'Guide · 8 min read' },
    { title: 'Credit Scores & Mortgages', description: 'How credit scores affect your mortgage rate, minimum scores by loan type, and tips to improve.', href: '/resources/credit-score-guide', icon: '📊', tag: 'Guide · 7 min read' },
    { title: 'Understanding Closing Costs', description: 'Complete breakdown of closing costs — what they are, who pays, and how to reduce them.', href: '/resources/closing-costs-explained', icon: '💰', tag: 'Guide · 7 min read' },
    { title: 'When to Refinance', description: 'Break-even analysis, rate thresholds, types of refinance, and 5 signs it is time to refinance.', href: '/resources/when-to-refinance', icon: '🔄', tag: 'Guide · 7 min read' },
    { title: 'Understanding Mortgage Rates', description: 'Learn how mortgage rates work, what affects them, and strategies to get the best rate on your loan.', href: '/resources/understanding-mortgage-rates', icon: '📈', tag: 'Guide · 10 min read' },
    { title: 'Mortgage Glossary', description: 'Complete glossary of mortgage terms — 22+ definitions explained in plain language.', href: '/resources/mortgage-glossary', icon: '📖', tag: 'Reference' },
];

const topicLinks = [
    { title: 'First-Time Homebuyers', href: '/borrower-solutions/first-time-homebuyers', icon: '🏡' },
    { title: 'Self-Employed Borrowers', href: '/borrower-solutions/self-employed-borrowers', icon: '💼' },
    { title: 'Real Estate Investors', href: '/borrower-solutions/real-estate-investors', icon: '📈' },
    { title: 'Veterans & Military', href: '/borrower-solutions/veterans', icon: '🎖️' },
    { title: 'Compare Loan Programs', href: '/compare/fha-vs-conventional', icon: '⚖️' },
    { title: 'Mortgage Calculators', href: '/calculators', icon: '🧮' },
];

export default function ResourcesPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Learning Center"
                title="Mortgage Resources & Guides"
                subtitle="Clear, honest education to help you make better financing decisions. No fluff. No sales speak."
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
            />

            <section className="section">
                <div className="container">
                    <div className={styles.header}>
                        <div className="divider divider--center" />
                        <h2>Featured Guides</h2>
                        <p className={styles.subtitle}>In-depth articles written by mortgage professionals.</p>
                    </div>
                    <div className={styles.grid}>
                        {guides.map((guide, i) => (
                            <Link key={i} href={guide.href} className={styles.card}>
                                <span className={styles.icon}>{guide.icon}</span>
                                <h3 className={styles.cardTitle}>{guide.title}</h3>
                                <p className={styles.cardDesc}>{guide.description}</p>
                                <span className={styles.arrow}>{guide.tag} →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--light">
                <div className="container">
                    <div className={styles.header}>
                        <h2>Explore by Topic</h2>
                        <p className={styles.subtitle}>Jump to detailed pages for your specific situation.</p>
                    </div>
                    <div className={styles.grid}>
                        {topicLinks.map((topic, i) => (
                            <Link key={i} href={topic.href} className={styles.card}>
                                <span className={styles.icon}>{topic.icon}</span>
                                <h3 className={styles.cardTitle}>{topic.title}</h3>
                                <span className={styles.arrow}>Learn more →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                heading="Have Questions? We Have Answers."
                description="Talk to a mortgage advisor who can explain your options in plain English."
                primaryLabel="Book a Consultation"
                primaryHref="/book-consultation"
                secondaryLabel="View Loan Programs"
                secondaryHref="/home-loans"
                variant="dark"
            />
        </>
    );
}
