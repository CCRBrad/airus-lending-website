import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'Fixed-Rate Mortgages', description: 'Fixed-rate mortgages offer stable, predictable payments for the life of your loan. Compare 15, 20, and 30-year fixed-rate options with Airus Lending.' };
const data = {
    badge: 'Most Popular', title: 'Fixed-Rate Mortgages', subtitle: 'The most popular mortgage structure in America — one rate, one payment, and zero surprises for the life of your loan.',
    overview: 'A fixed-rate mortgage locks your interest rate and monthly principal-and-interest payment for the entire loan term. Whether rates go up or down in the market, your rate stays the same. Fixed-rate mortgages are available in 10, 15, 20, 25, and 30-year terms, with 30-year being the most common. They are available through conventional, FHA, VA, USDA, and jumbo programs.',
    whoIsItFor: ['Borrowers who value payment stability and predictability', 'Buyers planning to stay in the home for 7+ years', 'Risk-averse borrowers who want to lock in today\'s rate', 'Borrowers in any loan program who prefer a fixed structure'],
    keyBenefits: [
        { title: 'Payment Stability', description: 'Your principal and interest payment never changes — budget with complete confidence.' },
        { title: 'Protection from Rate Increases', description: 'Even if market rates rise, your rate remains locked for the full term.' },
        { title: 'Multiple Term Options', description: 'Choose 10, 15, 20, 25, or 30-year terms to match your financial goals.' },
        { title: 'Available Across Programs', description: 'Fixed-rate options in conventional, FHA, VA, USDA, jumbo, and non-QM.' },
    ],
    qualificationOverview: ['Qualification based on chosen loan program (conventional, FHA, VA, etc.)', 'Credit, down payment, and DTI requirements vary by program', 'Available for all property and occupancy types'],
    downPaymentInfo: 'Varies by program (0–20%)', creditRequirements: 'Varies by program', occupancyTypes: ['Primary', 'Second home', 'Investment'], propertyTypes: ['All eligible property types'],
    pros: ['Predictable payments', 'No rate increase risk', 'Easy to budget', 'Available in all major programs', 'Longer terms mean lower monthly payments'],
    tradeoffs: ['Higher initial rate than adjustable-rate options', 'Less savings if rates decline (unless you refinance)', '30-year terms pay more total interest than shorter terms'],
    commonScenarios: [
        { title: 'Family Buying Forever Home', description: 'A family planning to stay in their home for 20+ years locks a 30-year fixed rate for maximum payment stability.' },
        { title: 'Aggressive Equity Builder', description: 'A high-income borrower chooses a 15-year fixed rate, paying off the home faster and saving tens of thousands in interest.' },
    ],
    documentsNeeded: ['Standard documentation for the chosen loan program'],
    faqs: [
        { question: 'Should I choose 15-year or 30-year fixed?', answer: 'A 15-year term saves interest but has higher monthly payments. A 30-year term is more affordable monthly but costs more over the life of the loan. Your advisor can model both scenarios.' },
        { question: 'Can I refinance a fixed-rate mortgage?', answer: 'Yes. If rates drop, you can refinance into a new fixed-rate mortgage at a lower rate. There are no restrictions on refinancing.' },
    ],
    relatedProducts: [
        { title: 'Adjustable-Rate Mortgages', href: '/home-loans/adjustable-rate-mortgages', description: 'Lower initial rate with periodic adjustments' },
        { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Standard conforming financing' },
        { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Government-backed with lower credit requirements' },
    ],
};
export default function FixedRatePage() { return <LoanPageTemplate data={data} />; }
