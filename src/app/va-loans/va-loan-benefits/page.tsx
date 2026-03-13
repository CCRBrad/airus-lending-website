import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = {
    title: 'VA Loan Benefits',
    description: 'Comprehensive guide to VA loan benefits for veterans, active-duty, and military families. Zero down payment, no PMI, competitive rates, and more.',
};

const data = {
    badge: 'VA Program',
    title: 'VA Loan Benefits',
    subtitle: 'The most powerful home financing benefit available to those who served.',
    overview: 'VA loans are backed by the U.S. Department of Veterans Affairs and are widely considered the best mortgage program in the country. Eligible veterans, active-duty service members, National Guard and Reserve members, and surviving spouses can access zero-down financing, no private mortgage insurance, competitive interest rates, and flexible qualification standards. These benefits translate to significant savings — often tens of thousands of dollars over the life of the loan compared to conventional or FHA alternatives.',
    whoIsItFor: [
        'Veterans with qualifying military service',
        'Active-duty service members',
        'National Guard and Reserve members with qualifying service',
        'Surviving spouses of veterans who died in service or from service-connected disability',
        'Current VA loan holders looking to understand refinance benefits (IRRRL)',
    ],
    keyBenefits: [
        { title: 'Zero Down Payment', description: 'Purchase a home with $0 down. No other major loan program offers this for non-rural properties.' },
        { title: 'No Private Mortgage Insurance', description: 'Unlike FHA and conventional loans with less than 20% down, VA loans never require monthly PMI.' },
        { title: 'Below-Market Interest Rates', description: 'VA loan rates are consistently 0.25-0.50% lower than conventional rates due to the VA guaranty.' },
        { title: 'Flexible Credit Standards', description: 'No official VA minimum credit score. Most lenders work with 580-620+ scores — far lower than conventional requirements.' },
    ],
    qualificationOverview: [
        'Certificate of Eligibility (COE) required — Airus Lending can pull this for you',
        '90+ days of active-duty service during wartime, or 181+ days during peacetime',
        'National Guard/Reserve: 6+ years of service or 90+ days of active-duty orders',
        'No minimum down payment required',
        'VA funding fee applies (waived for service-connected disability)',
        'Surviving spouse eligibility through DIC or surviving spouse COE',
    ],
    downPaymentInfo: '$0 — 100% financing',
    creditRequirements: 'No official minimum (most lenders: 580-620+)',
    occupancyTypes: ['Primary residence only'],
    propertyTypes: ['Single-family', 'Condos (VA-approved)', '2–4 units (owner-occupied)', 'Manufactured homes'],
    pros: [
        '100% financing — no down payment',
        'No monthly PMI ever',
        'Consistently lower interest rates',
        'Flexible credit and DTI guidelines',
        'VA funding fee can be rolled into loan',
        'Reusable benefit — use it multiple times',
        'VA appraisal protects the buyer',
        'No prepayment penalty',
        'Closing cost limits protect borrowers',
    ],
    tradeoffs: [
        'VA funding fee (1.25-3.3%) unless exempt — can be financed',
        'Primary residence only — cannot be used for pure investment properties',
        'VA appraisal can be stricter on property condition',
        'Not all condos are VA-approved',
        'Processing may take slightly longer if appraisal issues arise',
    ],
    commonScenarios: [
        { title: 'First-Time Veteran Homebuyer', description: 'A recently separated Army veteran uses their VA benefit to purchase a $350,000 home with $0 down. They save $70,000 in down payment versus a conventional loan, plus avoid $200+/month in PMI.' },
        { title: 'Active-Duty PCS Move', description: 'An active-duty member receives PCS orders and purchases a home at their new duty station. They rent out their previous VA-financed home and use their restored entitlement for the new purchase.' },
        { title: 'Disability-Exempt Veteran', description: 'A veteran with a service-connected disability rating purchases a home with $0 down and the VA funding fee is completely waived — saving an additional $8,000+ in upfront costs.' },
    ],
    documentsNeeded: [
        'Certificate of Eligibility (COE)',
        'DD-214 (if separated) or active-duty Leave & Earnings Statement',
        'Two years of tax returns and W-2s (or 12-24 months bank statements)',
        'Recent pay stubs (30 days)',
        'Two months of bank statements',
        'Government-issued ID',
    ],
    faqs: [
        { question: 'How many times can I use my VA loan benefit?', answer: 'There is no limit on how many times you can use a VA loan. After selling a home or paying off a VA loan, your entitlement can be restored for future use.' },
        { question: 'What is the VA funding fee?', answer: 'The VA funding fee ranges from 1.25% to 3.3% depending on down payment, loan type, and whether it\'s first use or subsequent use. It is waived entirely for veterans with 10%+ service-connected disability.' },
        { question: 'Can I use a VA loan for a second home?', answer: 'VA loans require owner-occupancy — the home must be your primary residence. However, if you PCS or move for work, you may be able to keep the previous home as a rental and use VA for a new primary residence.' },
        { question: 'Do VA loans take longer to close?', answer: 'Not necessarily. Our average VA loan close time is about 21 days. The VA appraisal process runs parallel to underwriting and rarely adds significant time.' },
        { question: 'What credit score do I need for a VA loan?', answer: 'The VA itself has no minimum credit score requirement. Most lenders set their own overlays, typically requiring 580-620+. Airus Lending works with multiple VA lenders to find options for a wide range of credit profiles.' },
    ],
    relatedProducts: [
        { title: 'VA IRRRL Refinance', href: '/va-loans/va-irrrl', description: 'Streamline rate reduction' },
        { title: 'VA Cash-Out Refinance', href: '/va-loans/va-cash-out', description: 'Access home equity' },
        { title: 'VA Construction Loans', href: '/va-loans/va-construction', description: 'Build a new home with VA' },
        { title: 'VA Loan Eligibility', href: '/va-loans/va-eligibility', description: 'Check your eligibility' },
    ],
    ctaHeading: 'Ready to Use Your VA Benefit?',
    ctaDescription: 'Connect with a VA loan specialist who handles VA loans daily.',
};

export default function VALoanBenefitsPage() {
    return <LoanPageTemplate data={data} />;
}
