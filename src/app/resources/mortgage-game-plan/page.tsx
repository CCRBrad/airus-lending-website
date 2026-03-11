'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import styles from './page.module.css';

export default function MortgageGamePlanPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would submit to a CRM / email service
        setSubmitted(true);
    };

    return (
        <>
            <Hero
                variant="dark"
                badge="Free Guide"
                title="The Mortgage Game Plan"
                subtitle="A step-by-step guide to navigating the mortgage process with confidence — from pre-approval to closing day."
                primaryCTA={undefined}
                secondaryCTA={undefined}
            />

            <section className="section">
                <div className="container">
                    <div className={styles.layout}>
                        <div className={styles.content}>
                            <h2>What You&apos;ll Learn</h2>
                            <div className={styles.benefitsList}>
                                <div className={styles.benefitItem}>
                                    <span className={styles.benefitIcon}>📋</span>
                                    <div>
                                        <strong>Pre-Approval Roadmap</strong>
                                        <p>Exactly what lenders look at and how to position yourself for the best rate.</p>
                                    </div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.benefitIcon}>💡</span>
                                    <div>
                                        <strong>Loan Program Cheat Sheet</strong>
                                        <p>FHA vs VA vs Conventional vs DSCR — which program fits your situation and why.</p>
                                    </div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.benefitIcon}>🏆</span>
                                    <div>
                                        <strong>Broker vs Bank</strong>
                                        <p>Why working with a mortgage broker can save you thousands over the life of your loan.</p>
                                    </div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.benefitIcon}>📊</span>
                                    <div>
                                        <strong>Rate Lock Strategy</strong>
                                        <p>When to lock, when to float, and how to protect your rate during the process.</p>
                                    </div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.benefitIcon}>✅</span>
                                    <div>
                                        <strong>Closing Day Checklist</strong>
                                        <p>Everything you need to know before, during, and after closing — no surprises.</p>
                                    </div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <span className={styles.benefitIcon}>🛡️</span>
                                    <div>
                                        <strong>Common Mistakes to Avoid</strong>
                                        <p>The 7 most costly mistakes homebuyers and refinancers make — and how to avoid them.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formPanel}>
                            {submitted ? (
                                <div className={styles.success}>
                                    <span className={styles.successIcon}>✅</span>
                                    <h3>You&apos;re In!</h3>
                                    <p>Check your inbox — your Mortgage Game Plan is on its way.</p>
                                    <p className={styles.successSub}>While you wait, explore our <a href="/calculators">mortgage calculators</a> to start crunching numbers.</p>
                                </div>
                            ) : (
                                <>
                                    <h3>Download Your Free Guide</h3>
                                    <p className={styles.formSubtitle}>Enter your details below and we&apos;ll send it straight to your inbox.</p>
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="name">First Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                                placeholder="Your first name"
                                                required
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                placeholder="you@email.com"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn--primary btn--lg btn--full">
                                            Send Me the Guide
                                        </button>
                                        <p className={styles.privacy}>
                                            We respect your privacy. No spam, ever. Unsubscribe anytime.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
