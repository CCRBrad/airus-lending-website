import type { Metadata } from 'next';
import styles from './legal.module.css';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'Airus Lending privacy policy — how we collect, use, and protect your personal information.' };

export default function PrivacyPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1>Privacy Policy</h1>
                <p className={styles.updated}>Last Updated: March 2025</p>

                <section>
                    <h2>Information We Collect</h2>
                    <p>Airus Lending (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects personal information when you interact with our website, request a consultation, apply for pre-approval, or use our calculators and tools. This may include:</p>
                    <ul>
                        <li>Name, email address, phone number, and mailing address</li>
                        <li>Financial information provided in loan applications</li>
                        <li>Employment and income information</li>
                        <li>Social Security Number (for credit-related requests only)</li>
                        <li>Website usage data through cookies and analytics</li>
                    </ul>
                </section>

                <section>
                    <h2>How We Use Your Information</h2>
                    <ul>
                        <li>To process loan applications and pre-approval requests</li>
                        <li>To communicate with you about your inquiry or application</li>
                        <li>To improve our website and services</li>
                        <li>To comply with legal and regulatory requirements</li>
                        <li>To prevent fraud and ensure security</li>
                    </ul>
                </section>

                <section>
                    <h2>Information Sharing</h2>
                    <p>We do not sell your personal information. We may share information with:</p>
                    <ul>
                        <li>Lending partners and lenders as part of the loan origination process</li>
                        <li>Service providers who assist in our operations (with appropriate safeguards)</li>
                        <li>Government agencies and regulators as required by law</li>
                        <li>Credit bureaus for credit-related transactions (with your authorization)</li>
                    </ul>
                </section>

                <section>
                    <h2>Data Security</h2>
                    <p>We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
                </section>

                <section>
                    <h2>Your Rights</h2>
                    <p>You may request access to, correction of, or deletion of your personal information by contacting us. California residents have additional rights under the CCPA.</p>
                </section>

                <section>
                    <h2>Cookies</h2>
                    <p>We use cookies and similar tracking technologies to analyze website traffic and improve user experience. You can control cookie settings through your browser.</p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>For privacy-related inquiries, contact us at <a href="mailto:privacy@airuslending.com">privacy@airuslending.com</a> or call (800) 555-0199.</p>
                </section>
            </div>
        </div>
    );
}
