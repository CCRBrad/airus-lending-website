import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = {
    title: 'FHA Loans',
    description: 'FHA loans offer low down payments and flexible credit requirements. Learn about FHA loan qualifications, benefits, and how to apply with Airus Lending.',
};

const fhaData = {
    badge: 'Government-Backed',
    title: 'FHA Loans',
    subtitle: 'Low down payments, flexible credit guidelines, and government-backed security — designed to make homeownership accessible.',
    overview: 'FHA loans are mortgage loans insured by the Federal Housing Administration (FHA), a division of the U.S. Department of Housing and Urban Development (HUD). Because the government backs these loans, lenders can offer more flexible qualification guidelines, lower down payments, and competitive interest rates. FHA loans are one of the most popular loan programs in the United States, particularly among first-time homebuyers and borrowers with moderate credit.',
    whoIsItFor: [
        'First-time homebuyers who need a low-down-payment option',
        'Borrowers with credit scores as low as 580 (or 500 with 10% down)',
        'Buyers with limited savings who can take advantage of gift funds for down payment',
        'Borrowers who may not qualify for conventional financing',
        'Homeowners looking to refinance via FHA Streamline',
    ],
    keyBenefits: [
        { title: 'Low Down Payment', description: 'As little as 3.5% down with a 580+ credit score — one of the lowest down payment requirements available.' },
        { title: 'Flexible Credit', description: 'More forgiving underwriting guidelines compared to conventional loans. Available to borrowers with past credit events.' },
        { title: 'Competitive Rates', description: 'Government backing allows lenders to offer rates that are often lower than conventional alternatives for similar borrowers.' },
        { title: 'Gift Funds Allowed', description: '100% of the down payment can come from a gift — ideal for buyers receiving family assistance.' },
    ],
    qualificationOverview: [
        'Minimum credit score of 580 for 3.5% down; 500–579 with 10% down',
        'Debt-to-income ratio generally up to 43%, with compensating factors up to 50%',
        'Steady employment history (typically 2 years)',
        'Property must meet FHA appraisal standards',
        'Mortgage insurance premium (MIP) required — upfront and annual',
        'Maximum loan amounts set by county (conforming limits)',
    ],
    downPaymentInfo: 'As low as 3.5%',
    creditRequirements: '580+ (500 with 10% down)',
    occupancyTypes: ['Primary residence only'],
    propertyTypes: ['Single-family', 'Condos (FHA-approved)', 'Townhomes', '2–4 unit properties'],
    pros: [
        'As little as 3.5% down payment',
        'Flexible credit score requirements',
        'Competitive interest rates',
        '100% of down payment can be a gift',
        'Available after credit events (bankruptcy, foreclosure) with waiting periods',
        'Streamline refinance option for existing FHA borrowers',
    ],
    tradeoffs: [
        'Mortgage insurance premium (MIP) required for the life of the loan (if less than 10% down)',
        'Property must meet FHA minimum property standards',
        'FHA appraisal can be more strict than conventional appraisal',
        'Loan limits may be lower than conventional in some areas',
        'Primary occupancy only — cannot be used for investment properties',
    ],
    commonScenarios: [
        { title: 'First-Time Buyer with 5% Saved', description: 'A buyer with $15,000 in savings for a $300,000 home. FHA requires only $10,500 down (3.5%), leaving room for closing costs and reserves.' },
        { title: 'Buyer with 620 Credit Score', description: 'A borrower who had a medical collection but has since rebuilt. FHA allows approval at 620 with no additional overlays at most lenders.' },
        { title: 'Gift-Funded Down Payment', description: 'A buyer whose parents are providing the full down payment. FHA allows 100% gift funds — conventional may require the buyer to contribute some of their own money.' },
    ],
    documentsNeeded: [
        'Two most recent pay stubs',
        'Last two years of W-2s',
        'Last two years of tax returns (if self-employed)',
        'Two most recent bank statements',
        'Government-issued photo ID',
        'Social Security number for credit authorization',
        'Gift letter (if using gift funds)',
        'Proof of any additional income sources',
    ],
    faqs: [
        { question: 'How long does the FHA mortgage insurance last?', answer: 'If you put less than 10% down, MIP lasts for the life of the loan. If you put 10% or more down, MIP drops off after 11 years. Many borrowers eventually refinance into a conventional loan once they reach 20% equity to eliminate mortgage insurance.' },
        { question: 'Can I use an FHA loan for a condo?', answer: 'Yes, but the condo complex must be on the FHA-approved condo list, or qualify under the single-unit approval process. Not all condos are eligible.' },
        { question: 'Are FHA loans only for first-time buyers?', answer: 'No. FHA loans are available to anyone who qualifies and plans to occupy the property as their primary residence. There is no first-time buyer requirement.' },
        { question: 'What is the FHA Streamline refinance?', answer: 'If you already have an FHA loan, you may be eligible for a Streamline refinance — simplified underwriting, no appraisal required, and reduced documentation. It\'s designed to lower your rate with minimal hassle.' },
        { question: 'How do FHA loans compare to conventional?', answer: 'FHA loans are generally easier to qualify for but come with mortgage insurance that lasts longer. Conventional loans may offer better terms for borrowers with strong credit and 10%+ down. Compare the two here.' },
    ],
    relatedProducts: [
        { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Compare with standard financing options' },
        { title: 'VA Loans', href: '/home-loans/va-loans', description: 'Zero-down option for veterans' },
        { title: 'FHA 203k Loans', href: '/home-loans/fha-203k-loans', description: 'FHA renovation financing' },
        { title: 'Down Payment Assistance', href: '/home-loans/down-payment-assistance', description: 'Programs to help with your down payment' },
    ],
    ctaHeading: 'See If You Qualify for an FHA Loan',
    ctaDescription: 'Get a personalized pre-approval with no hard credit pull and no obligation.',
};

export default function FHALoansPage() {
    return <LoanPageTemplate data={fhaData} />;
}
