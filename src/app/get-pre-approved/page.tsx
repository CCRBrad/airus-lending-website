import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Get Pre-Approved for a Mortgage',
    description: 'Start your mortgage pre-approval with Airus Lending. Get pre-approved for a home purchase or refinance with no hard credit pull. Fast, free, and no obligation.',
};

export default function PreApprovalPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Start Here"
                title="Get Pre-Approved in Minutes"
                subtitle="No hard credit pull. No obligation. See what you qualify for across 50+ lenders."
                primaryCTA={{ label: '', href: '' }}
                secondaryCTA={undefined}
            />

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.formSection}>
                            <div className="divider" />
                            <h2>Tell Us About Yourself</h2>
                            <p className={styles.intro}>Complete this short form and a licensed advisor will review your scenario and reach out with your pre-approval options.</p>

                            <form className={styles.form}>
                                {/* Step 1 – Purpose */}
                                <div className={styles.stepLabel}>Step 1: What are you looking to do?</div>
                                <div className="form-group">
                                    <select className="form-select" id="purpose" name="purpose" required>
                                        <option value="">Select your goal</option>
                                        <option value="purchase">Buy a Home</option>
                                        <option value="refinance">Refinance</option>
                                        <option value="investment">Finance an Investment Property</option>
                                        <option value="cashout">Cash-Out Refinance</option>
                                    </select>
                                </div>

                                {/* Step 2 – Personal */}
                                <div className={styles.stepLabel}>Step 2: Your Information</div>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="pa-firstName">First Name *</label>
                                        <input className="form-input" type="text" id="pa-firstName" name="firstName" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="pa-lastName">Last Name *</label>
                                        <input className="form-input" type="text" id="pa-lastName" name="lastName" required />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="pa-email">Email *</label>
                                        <input className="form-input" type="email" id="pa-email" name="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="pa-phone">Phone *</label>
                                        <input className="form-input" type="tel" id="pa-phone" name="phone" required />
                                    </div>
                                </div>

                                {/* Step 3 – Financial */}
                                <div className={styles.stepLabel}>Step 3: Financial Snapshot</div>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="pa-income">Annual Household Income</label>
                                        <input className="form-input" type="text" id="pa-income" name="income" placeholder="$" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="pa-credit">Estimated Credit Score</label>
                                        <select className="form-select" id="pa-credit" name="creditScore">
                                            <option value="">Select range</option>
                                            <option value="740+">740+</option>
                                            <option value="700-739">700–739</option>
                                            <option value="660-699">660–699</option>
                                            <option value="620-659">620–659</option>
                                            <option value="580-619">580–619</option>
                                            <option value="below-580">Below 580</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="pa-homePrice">Target Home Price / Loan Amount</label>
                                        <input className="form-input" type="text" id="pa-homePrice" name="homePrice" placeholder="$" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="pa-downPayment">Down Payment (if purchasing)</label>
                                        <input className="form-input" type="text" id="pa-downPayment" name="downPayment" placeholder="$" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="pa-employment">Employment Type</label>
                                    <select className="form-select" id="pa-employment" name="employmentType">
                                        <option value="">Select</option>
                                        <option value="w2">W-2 Employee</option>
                                        <option value="1099">1099 Contractor</option>
                                        <option value="self-employed">Self-Employed</option>
                                        <option value="retired">Retired</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="pa-state">Property State</label>
                                    <input className="form-input" type="text" id="pa-state" name="propertyState" placeholder="e.g. California" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="pa-notes">Additional Notes</label>
                                    <textarea className="form-textarea" id="pa-notes" name="notes" placeholder="Anything else we should know about your situation?" />
                                </div>

                                <button type="submit" className="btn btn--primary btn--lg btn--full">Submit for Pre-Approval</button>

                                <p className={styles.disclaimer}>
                                    This is not a formal loan application. Submitting this form does not trigger a hard credit pull.
                                    A licensed mortgage advisor will review your information and contact you to discuss your options.
                                    By submitting, you consent to being contacted by Airus Lending. NMLS #XXXXXX.
                                </p>
                            </form>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4>What to Expect</h4>
                                <ul className={styles.expectList}>
                                    <li><span>✓</span> No hard credit pull</li>
                                    <li><span>✓</span> No obligation</li>
                                    <li><span>✓</span> Response within hours</li>
                                    <li><span>✓</span> Personalized options from 50+ lenders</li>
                                </ul>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Why Pre-Approval Matters</h4>
                                <p>A pre-approval shows sellers you&apos;re serious and financially qualified. It also helps you understand exactly what loan programs, rates, and terms you can access.</p>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Prefer to Talk First?</h4>
                                <p>No problem. Book a free consultation instead.</p>
                                <a href="/book-consultation" className="btn btn--secondary btn--full">Book a Consultation</a>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <ProcessSteps
                title="What Happens Next?"
                steps={[
                    { number: 1, title: 'We Review Your Scenario', description: 'A licensed advisor reviews your submission and matches you with the best available programs.' },
                    { number: 2, title: 'You Get Your Options', description: 'We present your pre-approval with transparent rates, terms, and program details.' },
                    { number: 3, title: 'You Decide', description: 'No pressure. Choose to move forward when you\'re ready.' },
                ]}
            />
        </>
    );
}
