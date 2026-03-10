import type { Metadata } from 'next';
import styles from '../privacy-policy/legal.module.css';

export const metadata: Metadata = { title: 'Fair Lending Notice', description: 'Airus Lending fair lending commitment — equal credit opportunity for all applicants.' };

export default function FairLendingPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1>Fair Lending Notice</h1>
                <p className={styles.updated}>Last Updated: March 2025</p>

                <section>
                    <h2>Equal Credit Opportunity</h2>
                    <p>Airus Lending is committed to providing equal credit opportunities to all applicants. We comply with the Equal Credit Opportunity Act (ECOA), Fair Housing Act, and all applicable federal, state, and local fair lending laws.</p>
                    <p>We do not discriminate on the basis of:</p>
                    <ul>
                        <li>Race, color, or national origin</li>
                        <li>Religion</li>
                        <li>Sex (including gender identity and sexual orientation)</li>
                        <li>Marital status</li>
                        <li>Age (provided the applicant has the capacity to contract)</li>
                        <li>Disability</li>
                        <li>Familial status</li>
                        <li>Receipt of public assistance</li>
                        <li>Exercise of rights under the Consumer Credit Protection Act</li>
                    </ul>
                </section>

                <section>
                    <h2>Report Concerns</h2>
                    <p>If you believe you have been discriminated against, you may file a complaint with:</p>
                    <ul>
                        <li>Consumer Financial Protection Bureau (CFPB): <a href="https://www.consumerfinance.gov/complaint/" target="_blank" rel="noopener noreferrer">consumerfinance.gov/complaint</a></li>
                        <li>U.S. Department of Housing and Urban Development (HUD): 1-800-669-9777</li>
                        <li>Your state&apos;s Attorney General or banking regulator</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
