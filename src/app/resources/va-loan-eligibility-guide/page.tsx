import type { Metadata } from 'next';
import styles from '../../privacy-policy/legal.module.css';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = { title: 'VA Loan Eligibility: Complete Guide for Veterans | Airus Lending', description: 'Everything veterans need to know about VA loan eligibility — service requirements, COE, surviving spouse benefits, and common qualifying questions.' };

export default function VAEligibilityGuidePage() {
    return (
        <>
            <div className={styles.legalPage}>
                <div className="container">
                    <p style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--space-2)' }}>Guide</p>
                    <h1>VA Loan Eligibility: Everything You Need to Know</h1>
                    <p className={styles.updated}>Complete veterans guide · 10 min read</p>

                    <section>
                        <h2>Who Qualifies for a VA Loan?</h2>
                        <p>VA loans are available to veterans, active-duty service members, members of the National Guard and Reserves, and certain surviving spouses. The program was created in 1944 as part of the GI Bill to help service members transition to civilian life, and it remains the most powerful mortgage benefit available today.</p>
                        <p>To qualify, you must meet minimum service requirements that vary based on when and how you served. The VA does not make loans directly — instead, it guarantees a portion of the loan made by private lenders like those in Airus Lending&apos;s network of 50+ wholesale partners.</p>
                    </section>

                    <section>
                        <h2>Service Requirements by Era</h2>
                        <ul>
                            <li><strong>Gulf War / Post-9/11 (1990–Present):</strong> 24 continuous months of active duty, or 90 days if activated under orders, or the full period called/ordered to active duty</li>
                            <li><strong>Peacetime (1980–1989):</strong> 24 continuous months or the full period of enlistment (min. 181 days)</li>
                            <li><strong>Vietnam Era (1964–1975):</strong> 90 consecutive days of active duty, at least one day during the Vietnam era</li>
                            <li><strong>Korean War (1950–1955):</strong> 90 consecutive days of active duty, at least one day during the Korean War era</li>
                            <li><strong>WWII (1941–1946):</strong> 90 consecutive days of active service</li>
                        </ul>
                    </section>

                    <section>
                        <h2>National Guard &amp; Reserve Eligibility</h2>
                        <p>Guard and Reserve members qualify through two paths:</p>
                        <ul>
                            <li><strong>6-year service path:</strong> 6 years of creditable service in the Selected Reserve or National Guard, plus an honorable discharge, placement on the retired list, or continued service</li>
                            <li><strong>Activation path:</strong> If activated for federal service for 90+ days, you qualify under active-duty requirements</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Certificate of Eligibility (COE)</h2>
                        <p>Before you can use your VA benefit, you need a Certificate of Eligibility. This document confirms your military service and verifies your entitlement status. There are three ways to get your COE:</p>
                        <ol>
                            <li><strong>Through your lender (fastest):</strong> Airus Lending can access the VA&apos;s Web LGY system and pull your COE electronically — often within minutes</li>
                            <li><strong>Through eBenefits:</strong> Log in at va.gov and request your COE online</li>
                            <li><strong>By mail:</strong> Submit VA Form 26-1880 to your regional loan center (slowest — can take 4-6 weeks)</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Surviving Spouse Eligibility</h2>
                        <p>Un-remarried surviving spouses may be eligible for VA loan benefits if their spouse died:</p>
                        <ul>
                            <li>In service or as a result of a service-connected disability</li>
                            <li>While rated totally disabled from a service-connected disability (for at least 10 years before death)</li>
                        </ul>
                        <p>Surviving spouses who remarried after age 57 and after December 16, 2003, may also be eligible. Additionally, surviving spouses are exempt from the VA funding fee.</p>
                    </section>

                    <section>
                        <h2>Common Questions</h2>
                        <ul>
                            <li><strong>Do I need perfect credit?</strong> No. The VA has no official minimum credit score. Most lenders work with 580+, and Airus Lending has options even lower.</li>
                            <li><strong>Can I reuse my VA benefit?</strong> Yes. Your VA entitlement can be restored after you sell a home or pay off a VA loan.</li>
                            <li><strong>Can I have two VA loans at once?</strong> Yes, in many cases, if you have sufficient remaining entitlement.</li>
                            <li><strong>Does bad discharge disqualify me?</strong> Discharges under dishonorable conditions generally do. Other-than-honorable discharges may still qualify depending on VA determination.</li>
                        </ul>
                    </section>
                </div>
            </div>
            <CTABanner heading="Ready to Check Your VA Eligibility?" description="Airus Lending can pull your COE in minutes. Talk to a VA specialist today." primaryLabel="Check Eligibility" primaryHref="/get-pre-approved" secondaryLabel="Talk to a VA Specialist" secondaryHref="/book-consultation" variant="blue" />
        </>
    );
}
