import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = {
    title: 'Portfolio Loans',
    description: 'Portfolio loans for real estate investors. Consolidate multiple rental properties under one blanket loan with flexible terms and no conventional limits.',
};

const data = {
    badge: 'Investor Program',
    title: 'Portfolio Loans',
    subtitle: 'Consolidate multiple investment properties under one flexible blanket loan.',
    overview: 'Portfolio loans allow real estate investors to finance multiple properties under a single loan rather than managing separate mortgages for each property. These loans are held by the lender (not sold to Fannie Mae or Freddie Mac), which means more flexible qualification criteria, customizable terms, and the ability to finance properties that may not meet conventional guidelines. Portfolio loans are ideal for experienced investors with 5+ properties who want simplified management and potentially better terms on volume.',
    whoIsItFor: [
        'Investors with 5+ rental properties seeking consolidation',
        'Portfolio builders who want one payment instead of many',
        'Investors whose properties don\'t meet conventional standards',
        'Self-employed investors who need flexible documentation',
        'Investors who have maxed out conventional financing limits',
    ],
    keyBenefits: [
        { title: 'Simplified Management', description: 'One loan, one payment, one point of contact — instead of managing 5, 10, or 20+ separate mortgages.' },
        { title: 'Flexible Criteria', description: 'Not bound by Fannie/Freddie guidelines. More flexibility on credit, income documentation, and property types.' },
        { title: 'Volume Pricing', description: 'Financing multiple properties at once may qualify you for better rates or reduced fees.' },
        { title: 'Cross-Collateralization', description: 'Use equity in existing properties to reduce or eliminate the down payment on new acquisitions.' },
    ],
    qualificationOverview: [
        'Minimum portfolio of 2-5 properties (varies by lender)',
        'Combined DSCR of 1.0+ across the portfolio preferred',
        'Credit score 660+ for most programs',
        'Properties must be non-owner occupied',
        'Mixed property types often allowed within the portfolio',
        'Entity vesting (LLC/Corp) typically available',
    ],
    downPaymentInfo: '20–30% equity across portfolio',
    creditRequirements: '660+ (varies by lender)',
    occupancyTypes: ['Investment properties only'],
    propertyTypes: ['Single-family', '2–4 units', 'Small multifamily', 'Mixed residential'],
    pros: [
        'One loan covers multiple properties',
        'Simplified payment management',
        'More flexible than conventional financing',
        'Cross-collateralization options',
        'No conventional property count limits',
        'Potential for volume-based pricing',
    ],
    tradeoffs: [
        'Higher minimum equity or down payment requirements',
        'Interest rates may be higher than single-property loans',
        'Release clauses needed if selling individual properties',
        'Fewer lender options — not available at every institution',
        'Complex underwriting due to multiple property analysis',
    ],
    commonScenarios: [
        { title: 'Consolidating 8 Rental Mortgages', description: 'An investor manages 8 separate rental mortgages with different lenders and payment dates. A portfolio loan consolidates all properties into one loan with a single monthly payment, reducing administrative overhead.' },
        { title: 'Acquiring a Small Portfolio', description: 'A buyer is purchasing 4 rental properties from a retiring landlord. Instead of 4 separate closings, they finance all 4 under a single portfolio loan with one closing, one appraisal process, and one set of fees.' },
    ],
    documentsNeeded: [
        'Rent rolls for all portfolio properties',
        'Property appraisals',
        'Current mortgage statements (if refinancing)',
        'Entity formation documents (LLC/Corp)',
        'Bank statements (2-6 months)',
        'Property insurance policies',
    ],
    faqs: [
        { question: 'How many properties do I need for a portfolio loan?', answer: 'Most portfolio lenders require a minimum of 2-5 properties. Some programs are designed specifically for portfolios of 10+ properties with volume pricing.' },
        { question: 'Can I add or remove properties from the portfolio?', answer: 'Most portfolio loans include a release clause that allows you to sell or remove individual properties from the blanket lien, though there may be a release fee or minimum remaining balance requirement.' },
        { question: 'Are rates higher than single-property loans?', answer: 'Portfolio loan rates can be comparable or slightly higher than single-property investor loans. However, the consolidated management and volume pricing can offset the difference for investors with multiple properties.' },
        { question: 'Can I mix property types in one portfolio loan?', answer: 'Yes, many portfolio lenders allow mixed residential property types — single-family, townhomes, and 2-4 unit properties can typically be combined under one blanket loan.' },
    ],
    relatedProducts: [
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Single-property cash flow lending' },
        { title: 'Rental Property Loans', href: '/investor-loans/rental-property-loans', description: 'Individual rental financing' },
        { title: 'Bridge Loans', href: '/home-loans/bridge-loans', description: 'Short-term acquisition financing' },
        { title: 'Commercial Loans', href: '/commercial-loans', description: 'Larger-scale commercial financing' },
    ],
    ctaHeading: 'Ready to Consolidate Your Portfolio?',
    ctaDescription: 'Talk to an investor lending specialist about portfolio loan options.',
};

export default function PortfolioLoansPage() {
    return <LoanPageTemplate data={data} />;
}
