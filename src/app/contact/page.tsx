import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Contact Airus Lending',
    description: 'Get in touch with Airus Lending. Whether you have questions about a loan program, need help with your application, or want to speak with an advisor, we\'re here to help.',
};

export default function ContactPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Contact Us"
                title="We're Here to Help"
                subtitle="Have questions about a loan program? Need guidance on your next steps? Our team is ready to help."
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Book a Consultation', href: '/book-consultation' }}
            />

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {/* Contact Form */}
                        <div className={styles.formSection}>
                            <div className="divider" />
                            <h2>Send Us a Message</h2>
                            <p className={styles.formIntro}>Fill out the form below and a member of our team will get back to you within one business day.</p>
                            <form className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="firstName">First Name *</label>
                                        <input className="form-input" type="text" id="firstName" name="firstName" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="lastName">Last Name *</label>
                                        <input className="form-input" type="text" id="lastName" name="lastName" required />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Email *</label>
                                        <input className="form-input" type="email" id="email" name="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phone">Phone</label>
                                        <input className="form-input" type="tel" id="phone" name="phone" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="subject">What can we help with?</label>
                                    <select className="form-select" id="subject" name="subject">
                                        <option value="">Select a topic</option>
                                        <option value="purchase">Home Purchase</option>
                                        <option value="refinance">Refinance</option>
                                        <option value="investment">Investment Property</option>
                                        <option value="commercial">Commercial Financing</option>
                                        <option value="sba">SBA Loan</option>
                                        <option value="general">General Inquiry</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea className="form-textarea" id="message" name="message" placeholder="Tell us about your situation..." />
                                </div>
                                <button type="submit" className="btn btn--primary btn--lg btn--full">Send Message</button>
                                <p className={styles.disclaimer}>
                                    By submitting this form, you consent to being contacted by Airus Lending. We will not share your information with third parties.
                                </p>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoSection}>
                            <div className={styles.infoCard}>
                                <h3>Quick Contact</h3>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>📞</span>
                                    <div>
                                        <p className={styles.infoLabel}>Phone</p>
                                        <p className={styles.infoValue}>(800) 000-0000</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>✉️</span>
                                    <div>
                                        <p className={styles.infoLabel}>Email</p>
                                        <p className={styles.infoValue}>info@airuslending.com</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>🕐</span>
                                    <div>
                                        <p className={styles.infoLabel}>Hours</p>
                                        <p className={styles.infoValue}>Mon–Fri: 8am–7pm<br />Sat: 9am–3pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <h3>Prefer a Scheduled Call?</h3>
                                <p>Book a consultation at a time that works for you.</p>
                                <Link href="/book-consultation" className="btn btn--primary btn--full">
                                    Book a Consultation
                                </Link>
                            </div>

                            <div className={styles.infoCard}>
                                <h3>Ready to Apply?</h3>
                                <p>Start your pre-approval and get a personalized rate quote.</p>
                                <Link href="/get-pre-approved" className="btn btn--secondary btn--full">
                                    Get Pre-Approved
                                </Link>
                            </div>

                            <div className={styles.nmlsBadge}>
                                <p>NMLS #XXXXXX</p>
                                <Link href="/licensing">View Licensing & Disclosures</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ
                title="Common Questions"
                items={[
                    { question: 'How quickly will someone get back to me?', answer: 'We typically respond within a few hours during business hours. For urgent inquiries, please call us directly.' },
                    { question: 'Do I need to have my documents ready to reach out?', answer: 'No. You can contact us at any stage — whether you\'re just exploring options or ready to apply. We\'ll guide you on what to prepare.' },
                    { question: 'Is there a cost to talk with an advisor?', answer: 'No. Initial consultations are always free with no obligation. We want to make sure you have the information you need to make the best decision.' },
                ]}
            />
        </>
    );
}
