import Link from 'next/link';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import styles from './ComparisonTemplate.module.css';

interface ComparisonRow {
    label: string;
    optionA: string;
    optionB: string;
}

interface ComparisonData {
    badge: string;
    title: string;
    subtitle: string;
    optionAName: string;
    optionBName: string;
    optionALink: string;
    optionBLink: string;
    overview: string;
    comparisonRows: ComparisonRow[];
    whenToChooseA: string[];
    whenToChooseB: string[];
    bottomLine: string;
    faqs: { question: string; answer: string }[];
}

export default function ComparisonTemplate({ data }: { data: ComparisonData }) {
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
                <div className="container" style={{ maxWidth: '960px' }}>
                    <div className="divider divider--center" />
                    <h2 style={{ textAlign: 'center' }}>Overview</h2>
                    <p className={styles.overview}>{data.overview}</p>
                </div>
            </section>

            <section className="section section--light">
                <div className="container" style={{ maxWidth: '960px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Side-by-Side Comparison</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th><Link href={data.optionALink}>{data.optionAName}</Link></th>
                                    <th><Link href={data.optionBLink}>{data.optionBName}</Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.comparisonRows.map((row, i) => (
                                    <tr key={i}>
                                        <td className={styles.labelCell}>{row.label}</td>
                                        <td>{row.optionA}</td>
                                        <td>{row.optionB}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '960px' }}>
                    <div className={styles.whenGrid}>
                        <div className={styles.whenCard}>
                            <h3>Choose {data.optionAName} If…</h3>
                            <ul>
                                {data.whenToChooseA.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                            <Link href={data.optionALink} className="btn btn--secondary btn--full">
                                Learn About {data.optionAName}
                            </Link>
                        </div>
                        <div className={styles.whenCard}>
                            <h3>Choose {data.optionBName} If…</h3>
                            <ul>
                                {data.whenToChooseB.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                            <Link href={data.optionBLink} className="btn btn--secondary btn--full">
                                Learn About {data.optionBName}
                            </Link>
                        </div>
                    </div>

                    <div className={styles.bottomLine}>
                        <h3>The Bottom Line</h3>
                        <p>{data.bottomLine}</p>
                    </div>
                </div>
            </section>

            <FAQ title="Common Questions" items={data.faqs} />

            <CTABanner
                heading="Not Sure Which Is Right for You?"
                description="Talk to an advisor who can compare both options based on your specific situation."
                primaryLabel="Talk to an Advisor"
                primaryHref="/book-consultation"
                secondaryLabel="Get Pre-Approved"
                secondaryHref="/get-pre-approved"
                variant="dark"
            />
        </>
    );
}
