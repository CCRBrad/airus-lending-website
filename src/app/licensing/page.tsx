import type { Metadata } from 'next';
import styles from '../privacy-policy/legal.module.css';

export const metadata: Metadata = { title: 'Licensing & Disclosures', description: 'Airus Lending NMLS licensing information, state disclosures, and regulatory compliance details.' };

export default function LicensingPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1>Licensing & Disclosures</h1>
                <p className={styles.updated}>Last Updated: March 2025</p>

                <section>
                    <h2>Company Information</h2>
                    <p>Airus Lending is a mortgage broker/lender. NMLS# 0000000. Equal Housing Lender.</p>
                    <p>Corporate Office: [Address], [City], [State] [Zip]</p>
                    <p>Phone: (800) 555-0199 | Email: info@airuslending.com</p>
                </section>

                <section>
                    <h2>NMLS Consumer Access</h2>
                    <p>You can verify our licensing status and find additional information through the Nationwide Multistate Licensing System at <a href="https://www.nmlsconsumeraccess.org" target="_blank" rel="noopener noreferrer">www.nmlsconsumeraccess.org</a>.</p>
                </section>

                <section>
                    <h2>State Licensing</h2>
                    <p>Airus Lending is licensed to operate in the following states. Specific licensing details vary by state. Contact us for state-specific licensing information.</p>
                </section>

                <section>
                    <h2>Equal Credit Opportunity</h2>
                    <p>Airus Lending is committed to providing equal credit opportunities to all applicants regardless of race, color, religion, national origin, sex, marital status, age, disability, familial status, or any other protected class under federal, state, or local law.</p>
                </section>

                <section>
                    <h2>Fair Lending</h2>
                    <p>We comply with the Fair Housing Act, Equal Credit Opportunity Act (ECOA), and all applicable federal, state, and local fair lending laws and regulations.</p>
                </section>

                <section>
                    <h2>Rate & Fee Disclosures</h2>
                    <p>Interest rates, APRs, and fees vary based on credit profile, loan type, property type, and other factors. Rates shown on this website are for illustration purposes only and are not a guarantee of specific terms. A Loan Estimate with specific rates and fees will be provided within 3 business days of receiving your application.</p>
                </section>

                <section>
                    <h2>Complaints</h2>
                    <p>If you have a complaint about our services, please contact us at <a href="mailto:compliance@airuslending.com">compliance@airuslending.com</a> or by calling (800) 555-0199. You may also file a complaint with the Consumer Financial Protection Bureau (CFPB) at <a href="https://www.consumerfinance.gov/complaint/" target="_blank" rel="noopener noreferrer">consumerfinance.gov/complaint</a>.</p>
                </section>
            </div>
        </div>
    );
}
