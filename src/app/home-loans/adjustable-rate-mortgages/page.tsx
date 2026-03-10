import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'Adjustable-Rate Mortgages (ARM)', description: 'Adjustable-rate mortgages offer lower initial rates that adjust after a fixed period. Explore 5/1, 7/1, and 10/1 ARM options with Airus Lending.' };
const data = {
    badge: 'Rate Strategy', title: 'Adjustable-Rate Mortgages', subtitle: 'Lower initial rates with a fixed period — ideal for borrowers who plan to move, refinance, or pay down their loan within 5–10 years.',
    overview: 'An adjustable-rate mortgage (ARM) offers a fixed interest rate for an initial period — typically 5, 7, or 10 years — after which the rate adjusts periodically based on a market index plus a margin. ARMs often start with lower rates than comparable fixed-rate mortgages, which can mean significant savings during the fixed period. They are available through conventional, jumbo, and non-QM programs.',
    whoIsItFor: ['Borrowers planning to move or sell within 5–10 years', 'Buyers who expect income growth and plan to refinance', 'Borrowers who want the lowest possible initial payment', 'Jumbo borrowers (ARMs are especially competitive in jumbo)'],
    keyBenefits: [
        { title: 'Lower Initial Rate', description: 'ARM rates are typically 0.25–1% lower than comparable fixed rates during the initial period.' },
        { title: 'Fixed-Period Protection', description: '5, 7, or 10 years of rate stability before any adjustment occurs.' },
        { title: 'Rate Caps', description: 'Limits on how much the rate can increase per adjustment and over the life of the loan.' },
        { title: 'Potential Savings', description: 'If you sell, refinance, or pay off before the fixed period ends, you benefit from the lower rate without ever facing an adjustment.' },
    ],
    qualificationOverview: ['Same as fixed-rate for the chosen program', 'Qualified at the note rate or fully-indexed rate, depending on the program', 'Available for conventional, jumbo, and non-QM'],
    downPaymentInfo: 'Varies by program', creditRequirements: 'Varies by program', occupancyTypes: ['Primary', 'Second home', 'Investment'], propertyTypes: ['All eligible property types'],
    pros: ['Lower initial rate and payment', 'Fixed-period stability', 'Rate caps protect against extreme increases', 'Ideal for shorter hold periods', 'Strong jumbo ARM pricing'],
    tradeoffs: ['Rate will adjust after the fixed period', 'Payment could increase significantly after initial period', 'Less predictable long-term than fixed-rate', 'More complex structure to understand', 'Risk if you end up staying longer than planned'],
    commonScenarios: [
        { title: 'Relocating Professional', description: 'A professional who moves every 5–7 years for work selects a 7/1 ARM, saving $300/month compared to a 30-year fixed — and plans to sell before any adjustment.' },
        { title: 'Jumbo Buyer Optimizing Rate', description: 'A buyer financing $1.5M chooses a 10/1 ARM with a rate 0.75% below the fixed option. Over 10 years, this saves over $100,000 in interest.' },
    ],
    documentsNeeded: ['Standard documentation for the chosen program'],
    faqs: [
        { question: 'What do the numbers mean (5/1, 7/1, 10/1)?', answer: 'The first number is the fixed period in years. The second is how often the rate adjusts after that. A 7/1 ARM is fixed for 7 years, then adjusts annually.' },
        { question: 'How much can my rate increase?', answer: 'ARMs have rate caps — typically 2% per adjustment and 5–6% lifetime cap. Your advisor can show you worst-case scenarios to help you decide.' },
        { question: 'Can I refinance out of an ARM?', answer: 'Yes. Many ARM borrowers refinance into a fixed-rate mortgage before the adjustment period begins, especially if rates are favorable.' },
    ],
    relatedProducts: [
        { title: 'Fixed-Rate Mortgages', href: '/home-loans/fixed-rate-mortgages', description: 'Stable rate for the full term' },
        { title: 'Jumbo Loans', href: '/home-loans/jumbo-loans', description: 'High-balance financing' },
        { title: 'Interest-Only Mortgages', href: '/home-loans/interest-only-mortgages', description: 'Lower initial payments' },
    ],
};
export default function ARMPage() { return <LoanPageTemplate data={data} />; }
