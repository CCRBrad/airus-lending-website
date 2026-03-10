import type { Metadata } from 'next';
import styles from '../privacy-policy/legal.module.css';

export const metadata: Metadata = { title: 'Do Not Call Policy', description: 'Airus Lending policy for managing telephone marketing communications and opt-out requests.' };

export default function DoNotCallPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1>Do Not Call Policy</h1>
                <p className={styles.updated}>Last Updated: March 2025</p>

                <section>
                    <h2>Our Policy</h2>
                    <p>Airus Lending respects your communication preferences. We maintain an internal Do Not Call list and comply with the National Do Not Call Registry, the Telephone Consumer Protection Act (TCPA), and all applicable federal, state, and local telemarketing laws.</p>
                </section>

                <section>
                    <h2>Opt-Out</h2>
                    <p>If you do not wish to receive telephone marketing communications from Airus Lending, you may opt out by:</p>
                    <ul>
                        <li>Requesting removal during any phone call with us</li>
                        <li>Emailing <a href="mailto:donotcall@airuslending.com">donotcall@airuslending.com</a> with your phone number</li>
                        <li>Calling (800) 555-0199 and requesting to be added to our Do Not Call list</li>
                    </ul>
                    <p>Your request will be processed within 30 days and will remain in effect unless you subsequently give us consent to contact you.</p>
                </section>

                <section>
                    <h2>National Do Not Call Registry</h2>
                    <p>You may also register your phone number with the National Do Not Call Registry at <a href="https://www.donotcall.gov" target="_blank" rel="noopener noreferrer">donotcall.gov</a> or by calling 1-888-382-1222.</p>
                </section>
            </div>
        </div>
    );
}
