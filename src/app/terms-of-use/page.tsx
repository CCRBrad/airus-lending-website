import type { Metadata } from 'next';
import styles from '../privacy-policy/legal.module.css';

export const metadata: Metadata = { title: 'Terms of Use', description: 'Airus Lending terms of use — website usage terms and conditions.' };

export default function TermsPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1>Terms of Use</h1>
                <p className={styles.updated}>Last Updated: March 2025</p>

                <section>
                    <h2>Acceptance of Terms</h2>
                    <p>By accessing and using the Airus Lending website (airuslending.com), you agree to be bound by these Terms of Use. If you do not agree, please discontinue use of the website.</p>
                </section>

                <section>
                    <h2>Not a Lending Commitment</h2>
                    <p>Information on this website is provided for educational purposes only. Nothing on this website constitutes a loan offer, commitment to lend, or guarantee of specific rates or terms. All loans are subject to credit approval, underwriting, and verification of information.</p>
                </section>

                <section>
                    <h2>Calculator Disclaimers</h2>
                    <p>Mortgage calculators and tools on this website provide estimates only. Actual rates, payments, and terms may differ based on your credit profile, property type, and current market conditions. Calculators are not a substitute for professional mortgage advice.</p>
                </section>

                <section>
                    <h2>Intellectual Property</h2>
                    <p>All content on this website — including text, design, logos, and images — is owned by Airus Lending and protected by copyright law. You may not reproduce, distribute, or modify any content without our written permission.</p>
                </section>

                <section>
                    <h2>Third-Party Links</h2>
                    <p>This website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of external sites.</p>
                </section>

                <section>
                    <h2>Limitation of Liability</h2>
                    <p>Airus Lending shall not be liable for any damages arising from the use of this website or reliance on information provided. All information is provided &quot;as is&quot; without warranty of any kind.</p>
                </section>

                <section>
                    <h2>Contact</h2>
                    <p>For questions about these terms, contact us at <a href="mailto:legal@airuslending.com">legal@airuslending.com</a>.</p>
                </section>
            </div>
        </div>
    );
}
