import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'VA Loan FAQ',
    description: 'Answers to the most frequently asked questions about VA loans. Eligibility, funding fee, credit requirements, loan limits, appraisals, and more.',
};

const vaFaqs = [
    { question: 'Who is eligible for a VA loan?', answer: 'VA loans are available to veterans with qualifying service (90+ days wartime, 181+ days peacetime), active-duty service members, National Guard/Reserve members with 6+ years of service or 90+ days of active duty orders, and surviving spouses of veterans who died in service or from service-connected disability.' },
    { question: 'How many times can I use my VA loan benefit?', answer: 'There is no limit. You can use your VA benefit as many times as you want. After selling a VA-financed home or paying off the loan, your entitlement can be restored for the next purchase.' },
    { question: 'Is there really no down payment required?', answer: 'Correct. VA loans offer 100% financing — no down payment required, regardless of home price (up to your entitlement). This is unique among major loan programs.' },
    { question: 'What credit score do I need for a VA loan?', answer: 'The VA itself has no minimum credit score requirement. Individual lenders set their own overlays, typically 580-620+. Airus Lending works with multiple VA lenders offering some of the most flexible credit guidelines available.' },
    { question: 'What is the VA funding fee?', answer: 'The VA funding fee is a one-time fee (1.25% to 3.3% of the loan amount) that helps fund the VA loan program. It varies based on service type, down payment, and whether it\'s first or subsequent use. It can be rolled into the loan amount.' },
    { question: 'Who is exempt from the VA funding fee?', answer: 'Veterans receiving VA disability compensation (10%+ rating), Purple Heart recipients on active duty, and surviving spouses receiving DIC benefits are exempt from the funding fee.' },
    { question: 'Are there VA loan limits?', answer: 'For veterans with full entitlement, there are no VA loan limits — you can finance any amount the lender approves with $0 down. Veterans with partial entitlement (e.g., an existing VA loan) may have limits based on the county conforming loan limit.' },
    { question: 'Can I use a VA loan for an investment property?', answer: 'VA loans require the home to be your primary residence. However, multi-unit properties (2-4 units) are eligible if you live in one unit — allowing you to house-hack and collect rental income.' },
    { question: 'What is the VA appraisal?', answer: 'A VA appraisal is performed by a VA-assigned appraiser to determine the property\'s fair market value and ensure it meets VA Minimum Property Requirements (MPRs) for health, safety, and structural soundness.' },
    { question: 'What happens if the VA appraisal comes in low?', answer: 'If the appraisal comes in below the purchase price, you can: negotiate a lower price, pay the difference in cash, request a Reconsideration of Value (ROV), or walk away with your earnest money (if the VA amendment is in the contract).' },
    { question: 'What is a VA IRRRL?', answer: 'The Interest Rate Reduction Refinance Loan (IRRRL) is a streamlined VA refinance that allows you to lower your interest rate with minimal documentation — no appraisal, no income verification, and reduced closing costs.' },
    { question: 'Can I get a VA loan for a condo?', answer: 'Yes, but the condo or condo project must be VA-approved. You can check the VA-approved condo list at va.gov. If the project isn\'t approved, your lender may be able to submit the project for individual approval.' },
    { question: 'Can I get a VA loan to build a new home?', answer: 'Yes. VA construction loans allow you to finance the construction of a new home on land you own or are purchasing. These are typically one-time-close loans that convert to a permanent VA mortgage after construction.' },
    { question: 'How long does a VA loan take to close?', answer: 'Our average VA loan closes in about 21 days from executed contract. The VA appraisal typically takes 5-10 business days. IRRRL refinances can close in as little as 10 business days.' },
    { question: 'Can I use my VA benefit after a bankruptcy or foreclosure?', answer: 'Yes. VA guidelines typically allow eligibility 2 years after a Chapter 7 bankruptcy or foreclosure. Chapter 13 borrowers may be eligible after 12 months of on-time plan payments with court approval.' },
    { question: 'Does Airus Lending specialize in VA loans?', answer: 'Yes. VA loans are one of our core specialties. Our advisors handle VA loans daily, understand the nuances of COE, entitlement, funding fee exemptions, and VA appraisals, and work with multiple wholesale lenders offering the most competitive VA rates available.' },
];

export default function VALoanFAQPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="VA Program"
                title="VA Loan FAQ"
                subtitle="Answers to the most common questions about VA loans — from eligibility to closing."
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Talk to a VA Specialist', href: '/book-consultation' }}
            />

            <FAQ items={vaFaqs} />

            <CTABanner
                heading="Have More VA Questions?"
                description="Talk to a VA loan specialist who handles veteran lending every day."
                primaryLabel="Get Pre-Approved"
                primaryHref="/get-pre-approved"
                secondaryLabel="Talk to an Advisor"
                secondaryHref="/book-consultation"
                variant="dark"
            />
        </>
    );
}
