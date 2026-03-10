import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'Foreign National Loans', description: 'Mortgage loans for non-U.S. citizens purchasing property in the United States. No SSN or ITIN required. Airus Lending.' };
const data = {
    badge: 'International', title: 'Foreign National Loans', subtitle: 'Financing for non-U.S. citizens purchasing property in the United States — no Social Security Number or ITIN required.',
    overview: 'Foreign national loans are non-QM mortgage products designed for non-U.S. citizens who wish to purchase residential or investment property in the United States. These programs do not require a U.S. Social Security Number, ITIN, or U.S. credit history. Qualification is based on the borrower\'s international credit profile, assets, passport documentation, and down payment. Popular with Canadian, European, and Latin American buyers.',
    whoIsItFor: ['Non-U.S. citizens purchasing U.S. property', 'International investors targeting U.S. real estate', 'Canadian and European buyers purchasing vacation homes', 'Foreign nationals without U.S. credit history, SSN, or ITIN'],
    keyBenefits: [
        { title: 'No U.S. Credit Required', description: 'Qualify with international credit references, bank statements, or letter from home-country bank.' },
        { title: 'No SSN or ITIN Needed', description: 'Passport and visa documentation accepted instead of U.S. identification.' },
        { title: 'Investment & Primary', description: 'Available for investment properties, second homes, and in some cases primary residences.' },
        { title: 'Multiple Documentation Types', description: 'Bank statements, asset verification, employment letters, and international credit accepted.' },
    ],
    qualificationOverview: ['Valid passport and visa documentation', 'Down payment of 25–40%', 'International credit references or bank letters', 'Proof of assets and/or income', 'U.S. property appraisal required'],
    downPaymentInfo: '25–40%', creditRequirements: 'International credit accepted', occupancyTypes: ['Investment property', 'Second home', 'Primary (select)'], propertyTypes: ['Single-family', 'Condos', 'Townhomes', '2–4 units'],
    pros: ['No U.S. credit or SSN required', 'International documentation accepted', 'Investment and second home eligible', 'Entity vesting available', 'Competitive rates within non-QM'],
    tradeoffs: ['Higher down payment (25–40%)', 'Higher rates than conventional', 'Fewer lenders offer foreign national programs', 'Currency exchange and documentation complexity', 'Reserve requirements typically higher'],
    commonScenarios: [
        { title: 'Canadian Buying Florida Vacation Home', description: 'A Canadian citizen purchases a $400K condo in Miami as a vacation property, putting 30% down with documentation from their Canadian bank.' },
        { title: 'European Investor', description: 'A UK-based investor acquires a $600K rental property in Texas using foreign national financing with asset-based qualification.' },
    ],
    documentsNeeded: ['Valid passport', 'Visa documentation (if applicable)', 'International bank statements (3–6 months)', 'International credit references or bank letter', 'Proof of income or assets', 'U.S. property insurance quote'],
    faqs: [
        { question: 'Can I buy a home in the U.S. as a foreigner?', answer: 'Yes. Foreign nationals can purchase residential and investment property in the United States. Specific mortgage programs exist for non-citizens without U.S. credit.' },
        { question: 'What down payment do I need?', answer: 'Most foreign national programs require 25–40% down, depending on the property type and lender.' },
    ],
    relatedProducts: [
        { title: 'ITIN Loans', href: '/home-loans/itin-loans', description: 'For borrowers with ITIN' },
        { title: 'Non-QM Loans', href: '/home-loans/non-qm-loans', description: 'Flexible lending solutions' },
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Cash-flow based investor loans' },
    ],
};
export default function ForeignNationalPage() { return <LoanPageTemplate data={data} />; }
