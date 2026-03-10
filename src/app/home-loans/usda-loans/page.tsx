import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = { title: 'USDA Loans', description: 'USDA loans offer 100% financing with no down payment for eligible rural and suburban homebuyers. Explore USDA loan eligibility with Airus Lending.' };

const data = {
    badge: 'Government-Backed',
    title: 'USDA Loans',
    subtitle: '100% financing — zero down payment — for eligible buyers in qualifying rural and suburban areas.',
    overview: 'USDA loans are mortgage loans guaranteed by the United States Department of Agriculture through the Rural Development Guaranteed Housing Loan Program. They are designed to help moderate-income borrowers in eligible rural and suburban areas achieve homeownership with no down payment. Despite the name, many suburban areas near major metro regions qualify. USDA loans offer some of the most affordable financing available.',
    whoIsItFor: [
        'Homebuyers purchasing in USDA-eligible areas',
        'Moderate-income borrowers at or below area income limits',
        'First-time and repeat buyers who want zero down payment',
        'Borrowers looking for a government-backed alternative to FHA and VA',
    ],
    keyBenefits: [
        { title: 'Zero Down Payment', description: '100% financing — no down payment required for eligible borrowers and properties.' },
        { title: 'Below-Market Rates', description: 'USDA loans often offer rates lower than conventional and comparable to FHA.' },
        { title: 'Lower Mortgage Insurance', description: 'USDA guarantee fees are lower than FHA MIP, reducing overall monthly cost.' },
        { title: 'Wide Eligibility', description: 'More suburban and semi-rural areas qualify than most borrowers expect.' },
    ],
    qualificationOverview: [
        'Property must be in USDA-eligible area',
        'Household income must not exceed 115% of area median income',
        'Credit score of 640+ (some lenders at 620 with manual underwrite)',
        'DTI up to 41% (higher with compensating factors)',
        'Primary residence only',
        'Upfront guarantee fee (1%) and annual fee (0.35%) apply',
    ],
    downPaymentInfo: '$0 — 100% financing',
    creditRequirements: '640+ (620 with manual underwrite)',
    occupancyTypes: ['Primary residence only'],
    propertyTypes: ['Single-family', 'Townhomes', 'Condos (approved)', 'Manufactured homes (permanent foundation)'],
    pros: ['No down payment required', 'Below-market interest rates', 'Lower mortgage insurance than FHA', 'Flexible credit with manual underwrite', 'Seller can contribute up to 6% toward closing costs', 'No loan limits — based on borrower qualification'],
    tradeoffs: ['Geographic restrictions — property must be in eligible area', 'Income limits based on household size and county', 'Primary residence only', 'Guarantee fee required (upfront and annual)', 'Longer processing time than some conventional programs'],
    commonScenarios: [
        { title: 'Suburban First-Time Buyer', description: 'A first-time buyer purchasing in a suburban town just outside a metro area. The property is USDA-eligible, allowing zero down payment with lower monthly costs than FHA.' },
        { title: 'Teacher in a Rural Community', description: 'A teacher earning $55K/year buys a $220K home in a qualifying rural area. USDA allows zero down and lower insurance costs, keeping the payment affordable.' },
    ],
    documentsNeeded: ['Two years of tax returns', 'Two years of W-2s', 'Recent pay stubs', 'Bank statements', 'Government ID', 'USDA property and income eligibility verification'],
    faqs: [
        { question: 'How do I know if a property is USDA-eligible?', answer: 'USDA has an online eligibility map at rd.usda.gov. Your advisor can also check addresses for you. Many suburban areas outside major metros are eligible.' },
        { question: 'What are the income limits?', answer: 'Household income cannot exceed 115% of the area median income (AMI). Limits vary by county and household size. A family of 4 in many areas can earn up to $103K+ and still qualify.' },
        { question: 'Can I buy a fixer-upper with USDA?', answer: 'The property must meet USDA minimum standards at the time of purchase. Significant repairs would disqualify it, though minor issues may be acceptable. Renovation loans are a better option for fixer-uppers.' },
    ],
    relatedProducts: [
        { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Low down payment alternative' },
        { title: 'VA Loans', href: '/home-loans/va-loans', description: 'Zero-down for veterans' },
        { title: 'Down Payment Assistance', href: '/home-loans/down-payment-assistance', description: 'Help with upfront costs' },
        { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Compare with standard financing' },
    ],
};

export default function USDALoansPage() { return <LoanPageTemplate data={data} />; }
