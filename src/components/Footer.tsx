import Link from 'next/link';
import styles from './Footer.module.css';

const footerSections = [
    {
        title: 'Buy a Home',
        links: [
            { label: 'First-Time Homebuyer', href: '/buy/first-time-homebuyer' },
            { label: 'Primary Residence', href: '/buy/primary-residence-loans' },
            { label: 'Investment Property', href: '/buy/investment-property-loans' },
            { label: 'Condo Loans', href: '/buy/condo-loans' },
            { label: 'New Construction', href: '/buy/new-construction-loans' },
        ],
    },
    {
        title: 'Refinance',
        links: [
            { label: 'Refinance Overview', href: '/refinance' },
            { label: 'Cash-Out Refinance', href: '/refinance/cash-out-refinance' },
            { label: 'Rate & Term', href: '/refinance/rate-and-term' },
            { label: 'VA IRRRL', href: '/refinance/va-irrrl' },
            { label: 'FHA Streamline', href: '/refinance/fha-streamline' },
        ],
    },
    {
        title: 'Loan Programs',
        links: [
            { label: 'Conventional', href: '/home-loans/conventional-loans' },
            { label: 'FHA Loans', href: '/home-loans/fha-loans' },
            { label: 'VA Loans', href: '/home-loans/va-loans' },
            { label: 'DSCR Loans', href: '/home-loans/dscr-loans' },
            { label: 'Bank Statement', href: '/home-loans/bank-statement-loans' },
            { label: 'Non-QM Loans', href: '/home-loans/non-qm-loans' },
            { label: 'All Programs →', href: '/home-loans' },
        ],
    },
    {
        title: 'Commercial & SBA',
        links: [
            { label: 'Commercial Loans', href: '/commercial-loans' },
            { label: 'Multifamily', href: '/commercial-loans/multifamily-financing' },
            { label: 'SBA 7(a)', href: '/sba-loans/sba-7a-loans' },
            { label: 'SBA 504', href: '/sba-loans/sba-504-loans' },
            { label: 'Fix & Flip', href: '/commercial-loans/fix-and-flip' },
        ],
    },
    {
        title: 'Tools & Resources',
        links: [
            { label: 'Mortgage Calculator', href: '/calculators/mortgage-calculator' },
            { label: 'Affordability Calculator', href: '/calculators/home-affordability-calculator' },
            { label: 'All Calculators', href: '/calculators' },
            { label: 'Learning Center', href: '/resources' },
            { label: 'Mortgage Glossary', href: '/resources/mortgage-glossary' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Careers', href: '/careers' },
            { label: 'Partners & Realtors', href: '/partners' },
        ],
    },
];

const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
    { label: 'Licensing & Disclosures', href: '/licensing' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'CCPA Notice', href: '/ccpa-notice' },
    { label: 'Fair Lending', href: '/fair-lending' },
    { label: 'Do Not Call', href: '/do-not-call' },
    { label: 'NMLS Consumer Access', href: 'https://www.nmlsconsumeraccess.org/', external: true },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* CTA Band */}
            <div className={styles.ctaBand}>
                <div className="container">
                    <div className={styles.ctaInner}>
                        <div className={styles.ctaText}>
                            <h3>Ready to Get Started?</h3>
                            <p>Speak with a mortgage advisor today and explore your options.</p>
                        </div>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-pre-approved" className="btn btn--primary btn--lg">
                                Get Pre-Approved
                            </Link>
                            <Link href="/book-consultation" className="btn btn--ghost btn--lg">
                                Talk to an Advisor
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className={styles.main}>
                <div className="container">
                    <div className={styles.grid}>
                        {footerSections.map((section) => (
                            <div key={section.title} className={styles.column}>
                                <h4 className={styles.columnTitle}>{section.title}</h4>
                                <ul className={styles.linkList}>
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className={styles.link}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottom}>
                <div className="container">
                    <div className={styles.bottomInner}>
                        <div className={styles.bottomLeft}>
                            <div className={styles.bottomLogo}>
                                <span className={styles.logoIcon}>A</span>
                                <span className={styles.logoText}>Airus Lending</span>
                            </div>
                            <p className={styles.nmls}>NMLS #XXXXXX</p>
                        </div>

                        <div className={styles.legalLinks}>
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={styles.legalLink}
                                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className={styles.disclaimer}>
                        <p>
                            Airus Lending is a mortgage broker and does not make loans. All loan applications are subject to credit approval.
                            Rates, terms, and conditions are subject to change without notice. This is not a commitment to lend.
                            Equal Housing Opportunity.
                        </p>
                        <p>
                            © {new Date().getFullYear()} Airus Lending. All rights reserved.
                        </p>
                    </div>

                    {/* Equal Housing + Social */}
                    <div className={styles.bottomFooter}>
                        <div className={styles.equalHousing}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-label="Equal Housing Opportunity">
                                <rect width="28" height="28" rx="4" fill="currentColor" fillOpacity="0.2" />
                                <path d="M14 5L4 13H7V23H21V13H24L14 5Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                <rect x="10" y="10" width="8" height="2" fill="currentColor" />
                                <rect x="10" y="14" width="8" height="2" fill="currentColor" />
                            </svg>
                            <span>Equal Housing Opportunity</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
