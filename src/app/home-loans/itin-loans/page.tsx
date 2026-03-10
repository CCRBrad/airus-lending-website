import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = {
    title: 'ITIN Loans',
    description: 'ITIN mortgage loans allow borrowers with an Individual Taxpayer Identification Number to purchase a home without a Social Security Number. Explore options with Airus Lending.',
};

const data = {
    badge: 'Niche Program',
    title: 'ITIN Loans',
    subtitle: 'Homeownership is possible without a Social Security Number. ITIN loans open the door for qualifying borrowers using their Individual Taxpayer Identification Number.',
    overview: 'An ITIN loan is a mortgage program designed for borrowers who have an Individual Taxpayer Identification Number (ITIN) instead of a Social Security Number. These programs enable non-citizens, including undocumented residents, DACA recipients, and others who file taxes using an ITIN to purchase a home. While not available through traditional government-backed programs (FHA, VA, USDA), ITIN loans are offered through private and non-QM lenders with competitive terms.',
    whoIsItFor: [
        'Individuals who file U.S. taxes with an ITIN',
        'Non-citizen residents who do not have a Social Security Number',
        'DACA recipients',
        'Foreign nationals working and paying taxes in the U.S.',
        'Borrowers with a strong payment history but no traditional credit score',
    ],
    keyBenefits: [
        { title: 'No SSN Required', description: 'Qualify using your ITIN and U.S. tax filing history instead of a Social Security Number.' },
        { title: 'Alternative Credit Accepted', description: 'Utility bills, rent payment history, phone bills, and other non-traditional trade lines accepted in lieu of a traditional credit report.' },
        { title: 'Reasonable Down Payments', description: 'Programs available starting at 15–20% down, depending on the lender and borrower profile.' },
        { title: 'Path to Homeownership', description: 'Allows borrowers who have been excluded from traditional programs to build equity through homeownership.' },
    ],
    qualificationOverview: [
        'Valid ITIN number with U.S. tax filing history (typically 2 years)',
        'Down payment of 15–20% or more',
        'Alternative credit history or traditional credit with minimum score',
        'Proof of income (tax returns, bank statements, or pay stubs)',
        'Reserves of 3–6 months PITIA',
        'Property appraisal required',
    ],
    downPaymentInfo: '15–20% minimum',
    creditRequirements: 'Alternative credit accepted; 620+ if traditional',
    occupancyTypes: ['Primary residence', 'Investment property (select lenders)'],
    propertyTypes: ['Single-family', 'Condos', 'Townhomes', '2–4 units'],
    pros: [
        'No Social Security Number required',
        'Alternative credit history accepted',
        'Available for primary residence purchase',
        'Builds equity and credit over time',
        'Competitive terms within non-QM space',
        'Multiple income documentation options',
    ],
    tradeoffs: [
        'Higher down payment than FHA (15–20% vs 3.5%)',
        'Interest rates higher than conventional or government loans',
        'Not available through Fannie Mae, Freddie Mac, FHA, VA, or USDA',
        'Fewer lenders offer ITIN programs',
        'May require reserves',
        'Limited to certain property types and occupancy',
    ],
    commonScenarios: [
        { title: 'Family Purchasing First Home', description: 'A family filing taxes with an ITIN for 3 years wants to buy their first home. Using 2 years of tax returns and alternative credit (rent and utility history), they qualify for a $300K purchase with 20% down.' },
        { title: 'Self-Employed ITIN Borrower', description: 'A small business owner with an ITIN uses bank statements to verify income. Combined with a strong rental payment history and 20% down, they secure homeownership.' },
    ],
    documentsNeeded: [
        'Valid ITIN documentation',
        'Last 2 years of U.S. tax returns (filed with ITIN)',
        'Proof of alternative credit (12 months of rent, utilities, insurance payments)',
        'Two months of bank statements',
        'Proof of down payment funds',
        'Government-issued ID (passport or consular ID)',
        'Current residence history',
    ],
    faqs: [
        { question: 'What is an ITIN?', answer: 'An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the IRS for individuals who need to file U.S. tax returns but are not eligible for a Social Security Number. It is not an immigration document and does not authorize work in the U.S.' },
        { question: 'Do I need a traditional credit score?', answer: 'Not necessarily. Many ITIN lenders accept alternative credit — documented history of on-time rent, utility, phone, and insurance payments over the last 12–24 months.' },
        { question: 'Can I buy an investment property with an ITIN loan?', answer: 'Some lenders offer ITIN programs for investment properties, though most programs are focused on primary residences. Ask your advisor about available options.' },
        { question: 'What interest rates should I expect?', answer: 'ITIN loan rates are typically 1–3% higher than conventional rates, depending on down payment, credit profile, and lender. They are competitive within the non-QM space.' },
    ],
    relatedProducts: [
        { title: 'Non-QM Loans', href: '/home-loans/non-qm-loans', description: 'Other flexible lending programs' },
        { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'Income verification via deposits' },
        { title: 'Foreign National Loans', href: '/home-loans/foreign-national-loans', description: 'For non-U.S. citizens purchasing property' },
        { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Government-backed option (requires SSN)' },
    ],
    ctaHeading: 'Explore ITIN Loan Options',
    ctaDescription: 'Talk to an advisor who understands ITIN lending and can guide you through the process.',
};

export default function ITINLoansPage() {
    return <LoanPageTemplate data={data} />;
}
