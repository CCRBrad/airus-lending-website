import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import styles from '../../page.module.css';

export const metadata = {
    title: 'Mortgage Broker vs Bank | Airus Lending',
    description: 'Compare the advantages of working with a mortgage broker vs a traditional bank. More lender options, competitive rates, and specialized programs.',
};

const rows = [
    { feature: 'Lender Options', broker: '50+ wholesale lenders compete for your loan', bank: 'Only their own in-house products' },
    { feature: 'Loan Product Range', broker: 'VA, FHA, conventional, DSCR, bank statement, ITIN, SBA, non-QM, jumbo, and more', bank: 'Limited to standard conforming products' },
    { feature: 'Niche Borrowers', broker: 'Self-employed, investors, foreign nationals, ITIN, asset depletion', bank: 'Strict guidelines — limited flexibility for non-traditional borrowers' },
    { feature: 'Rate Competition', broker: 'Multiple lenders submit pricing — you get the best market rate', bank: 'Take-it-or-leave-it internal pricing' },
    { feature: 'Personal Guidance', broker: 'One dedicated advisor from first call to closing', bank: 'Different rep at every stage of the process' },
    { feature: 'Processing Speed', broker: 'Average 21-day close with dedicated support', bank: 'Often 45-60+ days due to internal bottlenecks' },
    { feature: 'Closing Costs', broker: 'Transparent — often lower due to wholesale pricing', bank: 'May include origination fees, points, or hidden costs' },
    { feature: 'Investor Loans', broker: 'DSCR, fix-and-flip, bridge, portfolio — built for investors', bank: 'Minimal investor products, strict DTI requirements' },
    { feature: 'Self-Employed Solutions', broker: 'Bank statement, P&L, 1099, asset depletion programs', bank: 'Standard W-2 documentation only' },
    { feature: 'VA Loan Expertise', broker: 'Specialized VA advisors, IRRRL, construction, and jumbo VA', bank: 'Basic VA products only' },
];

export default function BrokerVsBankPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Broker vs. Bank"
                title="Why a Mortgage Broker Gives You an Unfair Advantage"
                subtitle="Banks offer their products. Brokers shop the market. See why working with Airus Lending puts you in a stronger position."
            />

            <section className="section">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className="divider divider--center" />
                        <h2>The Full Comparison</h2>
                        <p className={styles.sectionSubtitle}>
                            When you work with a mortgage broker, you get access to more lenders, more products, and more competitive pricing — with one dedicated advisor managing the entire process.
                        </p>
                    </div>

                    <div className={styles.compareTable} style={{ border: '1px solid var(--color-gray-200)' }}>
                        <div className={styles.compareHeader} style={{ background: 'var(--color-navy)', color: 'var(--color-white)' }}>
                            <div className={styles.compareFeature}></div>
                            <div className={styles.compareBroker} style={{ color: 'var(--color-white)' }}>Airus Lending (Broker)</div>
                            <div className={styles.compareBank} style={{ color: 'var(--color-gray-300)' }}>Big Bank</div>
                        </div>
                        {rows.map((row, i) => (
                            <div key={i} className={styles.compareRow} style={{ borderTopColor: 'var(--color-gray-200)' }}>
                                <div className={styles.compareFeature} style={{ color: 'var(--color-navy)' }}>{row.feature}</div>
                                <div className={styles.compareBroker} style={{ color: 'var(--color-gray-700)' }}>
                                    <span className={styles.checkIcon}>✓</span> {row.broker}
                                </div>
                                <div className={styles.compareBank} style={{ color: 'var(--color-gray-500)' }}>
                                    <span className={styles.xIcon}>✗</span> {row.bank}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                heading="Ready to Experience the Broker Advantage?"
                description="Talk to a mortgage advisor and discover the programs, rates, and guidance you won't find at a bank."
                primaryLabel="Get Pre-Approved"
                primaryHref="/get-pre-approved"
                secondaryLabel="Book a Consultation"
                secondaryHref="/book-consultation"
                variant="blue"
            />
        </>
    );
}
