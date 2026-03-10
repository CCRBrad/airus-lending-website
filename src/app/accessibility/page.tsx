import type { Metadata } from 'next';
import styles from '../privacy-policy/legal.module.css';

export const metadata: Metadata = { title: 'Accessibility Statement', description: 'Airus Lending commitment to digital accessibility for all users.' };

export default function AccessibilityPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1>Accessibility Statement</h1>
                <p className={styles.updated}>Last Updated: March 2025</p>

                <section>
                    <h2>Our Commitment</h2>
                    <p>Airus Lending is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards to make our website usable by all people.</p>
                </section>

                <section>
                    <h2>Standards</h2>
                    <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities.</p>
                </section>

                <section>
                    <h2>Measures Taken</h2>
                    <ul>
                        <li>Semantic HTML structure for screen reader compatibility</li>
                        <li>Keyboard navigable interface</li>
                        <li>Sufficient color contrast ratios</li>
                        <li>Alt text for images and meaningful link text</li>
                        <li>Responsive design for all device types</li>
                        <li>Clear form labels and error messages</li>
                    </ul>
                </section>

                <section>
                    <h2>Feedback</h2>
                    <p>If you encounter any accessibility issues on our website, please contact us at <a href="mailto:accessibility@airuslending.com">accessibility@airuslending.com</a> or call (800) 555-0199. We take all feedback seriously and work to resolve issues promptly.</p>
                </section>
            </div>
        </div>
    );
}
