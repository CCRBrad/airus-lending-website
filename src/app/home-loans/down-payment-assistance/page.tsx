import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'Down Payment Assistance Programs', description: 'Down payment assistance programs help first-time buyers cover down payment and closing costs. Explore DPA options with Airus Lending.' };
const data = {
    badge: 'First-Time Buyers', title: 'Down Payment Assistance', subtitle: 'Grants, forgivable loans, and assistance programs to help you cover your down payment and closing costs.',
    overview: 'Down payment assistance (DPA) programs are designed to help eligible homebuyers — particularly first-time buyers — cover the upfront costs of purchasing a home. DPA can come in the form of grants (free money), forgivable second mortgages, deferred payment loans, or matched savings programs. These programs are offered by state housing finance agencies, local governments, and some lenders.',
    whoIsItFor: ['First-time homebuyers who need help with upfront costs', 'Borrowers at or below area median income limits', 'Buyers in target geographic areas with DPA programs', 'Homebuyers who qualify for FHA, VA, USDA, or conventional financing'],
    keyBenefits: [
        { title: 'Reduce Upfront Costs', description: 'Cover some or all of your down payment and closing costs through assistance programs.' },
        { title: 'Multiple Formats', description: 'Grants, forgivable loans, deferred-payment loans, and matched savings — options to fit different situations.' },
        { title: 'Stackable', description: 'Many DPA programs can be combined with FHA, conventional, and VA loans.' },
        { title: 'Widely Available', description: 'DPA programs exist in most states — your advisor can check what\'s available in your area.' },
    ],
    qualificationOverview: ['Typically require first-time homebuyer status (3-year ownership gap)', 'Income limits based on area median income', 'Must complete homebuyer education course', 'Property must be in an eligible area', 'Must be used with an approved loan program'],
    downPaymentInfo: 'Assistance varies by program', creditRequirements: '620+ for most DPA programs', occupancyTypes: ['Primary residence only'], propertyTypes: ['Single-family', 'Condos', 'Townhomes'],
    pros: ['Reduces or eliminates out-of-pocket costs', 'Some programs offer grants (no repayment)', 'Can be combined with FHA, conventional, and VA', 'Widely available across the U.S.', 'Opens homeownership for moderate-income families'],
    tradeoffs: ['Income and purchase price limits apply', 'May require holding the property for a minimum period', 'Homebuyer education course usually required', 'Limited to primary residence', 'Some DPA loans must be repaid if you sell early'],
    commonScenarios: [
        { title: 'First-Time Buyer with Limited Savings', description: 'A teacher earning $50K qualifies for a $10,000 DPA grant from her state housing agency, covering the 3.5% FHA down payment on a $280K home.' },
    ],
    documentsNeeded: ['Income verification', 'First-time buyer eligibility documentation', 'Homebuyer education certificate', 'Purchase contract', 'Standard mortgage application documents'],
    faqs: [
        { question: 'Do I have to be a first-time buyer?', answer: 'Most DPA programs define "first-time buyer" as someone who hasn\'t owned a home in the last 3 years. Some programs also assist veterans and buyers in target areas regardless of ownership history.' },
        { question: 'Do I have to pay back DPA?', answer: 'It depends on the program. Grants do not require repayment. Forgivable loans are forgiven after staying in the home for a set number of years. Deferred loans must eventually be repaid but have no payments until you sell or refinance.' },
    ],
    relatedProducts: [
        { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Low down payment government loan' },
        { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: '3% down programs available' },
        { title: 'First-Time Homebuyer', href: '/buy/first-time-homebuyer', description: 'Complete guide for first-time buyers' },
    ],
};
export default function DPAPage() { return <LoanPageTemplate data={data} />; }
