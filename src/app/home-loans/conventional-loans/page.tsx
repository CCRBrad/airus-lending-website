import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = {
    title: 'Conventional Loans',
    description: 'Conventional loans offer competitive rates and flexible terms. As low as 3% down for qualified borrowers. Explore conventional mortgage options with Airus Lending.',
};

const conventionalData = {
    badge: 'Popular Program',
    title: 'Conventional Loans',
    subtitle: 'The most widely used mortgage program in the U.S. Competitive rates, flexible terms, and options from 3% down for qualified borrowers.',
    overview: 'Conventional loans are mortgage programs that are not insured or guaranteed by a government agency. They follow guidelines set by Fannie Mae and Freddie Mac and are available through private lenders. Conventional loans offer some of the most competitive rates and terms available, especially for borrowers with good credit and at least 5–20% down. They can be used for primary residences, second homes, and investment properties.',
    whoIsItFor: [
        'Homebuyers with credit scores of 620 or higher',
        'Borrowers who can put at least 3–5% down',
        'Buyers looking to avoid government-backed loan requirements (like FHA MIP)',
        'Borrowers purchasing primary residences, second homes, or investment properties',
        'Homeowners looking to refinance with competitive terms',
    ],
    keyBenefits: [
        { title: 'Competitive Rates', description: 'Among the lowest available rates for borrowers with strong credit profiles.' },
        { title: 'PMI Removal', description: 'Private mortgage insurance can be removed once you reach 20% equity — unlike FHA which requires MIP for the life of the loan.' },
        { title: 'Versatile Use', description: 'Available for primary residence, second home, and investment property. Government loans are restricted to primary residence only.' },
        { title: 'Flexible Terms', description: '10, 15, 20, 25, and 30-year terms with fixed or adjustable rates.' },
    ],
    qualificationOverview: [
        'Minimum credit score of 620 (higher scores get better rates)',
        'Debt-to-income ratio up to 45% (some exceptions to 50%)',
        'Down payment as low as 3% for first-time buyers, 5% for most, 15–25% for investment',
        'PMI required if less than 20% down',
        'Property appraisal required',
        'Stable employment and income verification (W-2, pay stubs, tax returns)',
    ],
    downPaymentInfo: 'As low as 3%',
    creditRequirements: '620+ (680+ for best rates)',
    occupancyTypes: ['Primary residence', 'Second home', 'Investment property'],
    propertyTypes: ['Single-family', 'Condos', 'Townhomes', '2–4 units', 'PUDs'],
    pros: [
        'PMI can be removed at 20% equity',
        'Competitive rates for qualified borrowers',
        'Available for primary, second home, and investment',
        'No upfront mortgage insurance premium (unlike FHA)',
        'Higher loan limits than FHA in many areas',
        'More property types eligible',
        'No funding fee (unlike VA)',
    ],
    tradeoffs: [
        'Higher credit score requirements than FHA (620 vs 580)',
        'PMI required until 20% equity if less than 20% down',
        'Stricter DTI requirements for lower credit scores',
        'Down payment cannot always be 100% gifted (varies by LTV)',
        'Investment property requires 15–25% down',
    ],
    commonScenarios: [
        { title: 'Buyer with Strong Credit and 10% Down', description: 'A borrower with 740 credit putting 10% down on a $400K home. Conventional rate is lower than FHA, and PMI will drop off after reaching 20% equity — saving thousands over the life of the loan.' },
        { title: 'Second Home Purchase', description: 'A buyer purchasing a vacation home at the beach. FHA and VA are primary residence only — conventional is the go-to option for second homes with as little as 10% down.' },
        { title: 'First-Time Buyer with 3% Down', description: 'A well-qualified first-time buyer taking advantage of Fannie Mae\'s 3% down program. Lower total cost than FHA when factoring in MIP savings.' },
    ],
    documentsNeeded: [
        'Two most recent pay stubs',
        'Last two years of W-2s',
        'Last two years of tax returns',
        'Two most recent bank statements',
        'Government-issued photo ID',
        'Proof of down payment funds',
        'Homeowners insurance quote',
    ],
    faqs: [
        { question: 'What is the minimum down payment for a conventional loan?', answer: '3% for first-time homebuyers through specific programs (like Fannie Mae HomeReady or Freddie Mac Home Possible), 5% standard, and 15–25% for investment properties.' },
        { question: 'When does PMI go away?', answer: 'You can request PMI removal when you reach 20% equity. It automatically terminates at 22% equity based on the original purchase price or appraised value.' },
        { question: 'How do conventional rates compare to FHA?', answer: 'For borrowers with 700+ credit, conventional rates are often lower than FHA rates — and without the lifetime MIP cost. For borrowers under 680, FHA may offer better overall terms.' },
        { question: 'Can I use a conventional loan for an investment property?', answer: 'Yes. Conventional loans are one of the only traditional programs available for investment properties. Expect 15% minimum down for single-family and 25% for multi-unit.' },
    ],
    relatedProducts: [
        { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Government-backed alternative' },
        { title: 'Jumbo Loans', href: '/home-loans/jumbo-loans', description: 'Above conforming limit financing' },
        { title: 'Fixed-Rate Mortgages', href: '/home-loans/fixed-rate-mortgages', description: 'Predictable payment structure' },
        { title: 'Adjustable-Rate Mortgages', href: '/home-loans/adjustable-rate-mortgages', description: 'Lower initial rate option' },
    ],
    ctaHeading: 'Explore Conventional Loan Options',
    ctaDescription: 'Get pre-approved and see what rates you qualify for — it takes just a few minutes.',
};

export default function ConventionalLoansPage() {
    return <LoanPageTemplate data={conventionalData} />;
}
