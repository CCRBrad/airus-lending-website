import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'Home Equity Loans', description: 'Access your home equity with a fixed-rate home equity loan. Lump-sum funding for renovations, debt consolidation, and more. Airus Lending.' };
const data = {
    badge: 'Equity Access', title: 'Home Equity Loans', subtitle: 'Tap into your home\'s equity with a fixed-rate lump sum — use it for renovations, debt payoff, education, or anything you need.',
    overview: 'A home equity loan is a second mortgage that allows you to borrow against the equity you\'ve built in your home. You receive a lump sum at closing with a fixed interest rate and fixed monthly payments. Home equity loans are ideal when you need a specific amount for a defined purpose, like a home renovation, medical expenses, or debt consolidation.',
    whoIsItFor: ['Homeowners with at least 15–20% equity', 'Borrowers who need a lump sum for a specific purpose', 'Homeowners who want fixed payments (not a revolving line)', 'Borrowers consolidating high-interest debt'],
    keyBenefits: [
        { title: 'Fixed Rate & Payment', description: 'Predictable payments with a rate that never changes — unlike a HELOC.' },
        { title: 'Lump-Sum Access', description: 'Receive the full loan amount at closing for immediate use.' },
        { title: 'Potential Tax Benefits', description: 'Interest may be tax-deductible if used for home improvements (consult your tax advisor).' },
        { title: 'Keep Your First Mortgage', description: 'No need to refinance your existing mortgage — add the equity loan as a second lien.' },
    ],
    qualificationOverview: ['15–20% equity minimum after the new loan', 'Credit score of 620–680+', 'DTI including both mortgages up to 43–50%', 'Stable income verification required', 'Property appraisal required'],
    downPaymentInfo: 'N/A (equity-based)', creditRequirements: '620–680+', occupancyTypes: ['Primary residence', 'Second home (select lenders)'], propertyTypes: ['Single-family', 'Condos', 'Townhomes'],
    pros: ['Fixed rate and payment', 'Lump-sum funding', 'Keep your existing first mortgage rate', 'Potential tax deductibility', 'Lower rates than personal loans or credit cards'],
    tradeoffs: ['Your home is collateral', 'Adds a second monthly payment', 'Closing costs apply', 'Less flexible than a HELOC (no revolving access)', 'Maximum LTV limits how much you can borrow'],
    commonScenarios: [
        { title: '$50K Kitchen Renovation', description: 'A homeowner borrows $50K against their equity at a fixed rate to fund a kitchen remodel, avoiding higher personal loan rates.' },
        { title: 'Debt Consolidation', description: 'A borrower with $40K in credit card debt at 22% APR takes a home equity loan at 8.5% fixed to consolidate and save thousands annually.' },
    ],
    documentsNeeded: ['Income verification (pay stubs, W-2s, tax returns)', 'Property appraisal', 'Existing mortgage statement', 'Bank statements', 'Government ID'],
    faqs: [
        { question: 'How much can I borrow?', answer: 'Most lenders allow a combined LTV (first mortgage + equity loan) of up to 80–90% of your home\'s appraised value. If your home is worth $500K and you owe $300K, you may be able to borrow up to $100K–150K.' },
        { question: 'How is this different from a HELOC?', answer: 'A home equity loan gives you a lump sum with fixed payments. A HELOC is a revolving line of credit with variable rates. Choose a home equity loan for a one-time need and a HELOC for ongoing access.' },
    ],
    relatedProducts: [
        { title: 'HELOC', href: '/home-loans/heloc', description: 'Revolving line of credit' },
        { title: 'Cash-Out Refinance', href: '/refinance/cash-out-refinance', description: 'Replace your mortgage and access equity' },
        { title: 'Home Improvement Refi', href: '/refinance/home-improvement', description: 'Refinance for renovation costs' },
    ],
};
export default function HomeEquityPage() { return <LoanPageTemplate data={data} />; }
