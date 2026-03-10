import type { Metadata } from 'next';
import styles from '../privacy-policy/legal.module.css';

export const metadata: Metadata = { title: 'CCPA Privacy Notice', description: 'California Consumer Privacy Act notice for Airus Lending — your rights as a California resident.' };

export default function CCPAPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1>CCPA Privacy Notice</h1>
                <p className={styles.updated}>Last Updated: March 2025</p>

                <section>
                    <h2>California Consumer Privacy Rights</h2>
                    <p>If you are a California resident, the California Consumer Privacy Act (CCPA) grants you specific rights regarding your personal information:</p>
                    <ul>
                        <li><strong>Right to Know:</strong> You may request disclosure of the personal information we have collected about you in the preceding 12 months.</li>
                        <li><strong>Right to Delete:</strong> You may request deletion of your personal information, subject to certain legal exceptions.</li>
                        <li><strong>Right to Opt-Out:</strong> You have the right to opt out of the &quot;sale&quot; of your personal information. Airus Lending does not sell personal information.</li>
                        <li><strong>Right to Non-Discrimination:</strong> We will not deny services or charge different prices for exercising your CCPA rights.</li>
                    </ul>
                </section>

                <section>
                    <h2>How to Exercise Your Rights</h2>
                    <p>To submit a verifiable consumer request, contact us at:</p>
                    <ul>
                        <li>Email: <a href="mailto:privacy@airuslending.com">privacy@airuslending.com</a></li>
                        <li>Phone: (800) 555-0199</li>
                    </ul>
                    <p>We will verify your identity before processing any request. You may also designate an authorized agent to make requests on your behalf.</p>
                </section>

                <section>
                    <h2>Categories of Information Collected</h2>
                    <p>Please refer to our <a href="/privacy-policy">Privacy Policy</a> for a detailed description of the categories of personal information we collect and how it is used.</p>
                </section>
            </div>
        </div>
    );
}
