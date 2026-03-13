import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = {
    title: 'Rental Property Loans',
    description: 'Long-term financing for rental properties. DSCR, bank statement, and conventional options for single-family, multi-unit, and small portfolio investments.',
};

const data = {
    badge: 'Investor Program',
    title: 'Rental Property Loans',
    subtitle: 'Long-term financing for buy-and-hold rental property investors — single-family through small multifamily.',
    overview: 'Rental property loans are designed for investors acquiring or refinancing income-producing residential properties. Whether you own one rental or are building a portfolio of dozens, Airus Lending offers multiple qualification paths including DSCR (qualify on rental income), bank statement programs, and conventional investor loans. Each path removes different barriers so more investors can access competitive financing.',
    whoIsItFor: [
        'Buy-and-hold investors acquiring single-family or multi-unit rentals',
        'Portfolio builders who already own multiple financed properties',
        'Self-employed investors whose tax returns understate true income',
        'Out-of-state investors purchasing in high-demand rental markets',
        'Investors looking to refinance existing rental properties for better terms or cash out',
    ],
    keyBenefits: [
        { title: 'Multiple Qualification Paths', description: 'Qualify with DSCR (rental income), bank statements, W-2 income, or asset depletion — whichever fits your situation.' },
        { title: 'No Property Limit', description: 'Unlike conventional programs that cap at 10 financed properties, our investor programs have no limit.' },
        { title: 'Entity Vesting Available', description: 'Close in LLC, corporation, or trust name for asset protection — standard on DSCR programs.' },
        { title: 'Cash-Out Refinance', description: 'Access equity from existing rental properties to fund your next acquisition.' },
    ],
    qualificationOverview: [
        'DSCR path: 1.0+ DSCR ratio, 660+ credit, 20-25% down',
        'Conventional path: 620+ credit, 15-25% down, W-2 income verification',
        'Bank statement path: 12-24 months of deposits, 660+ credit',
        'Property must be non-owner-occupied (investment use)',
        'Appraisal with market rent analysis required',
        'Cash reserves typically 3-6 months PITIA',
    ],
    downPaymentInfo: '15–25% depending on program',
    creditRequirements: '620–680+ (varies by qualification path)',
    occupancyTypes: ['Investment property only'],
    propertyTypes: ['Single-family', '2–4 units', 'Condos', 'Townhomes'],
    pros: [
        'Multiple ways to qualify (income, cash flow, deposits, assets)',
        'No limit on financed properties (DSCR path)',
        'LLC/entity vesting available',
        'Interest-only options on some programs',
        'Cash-out refinance available',
        'Competitive rates from 50+ wholesale lenders',
    ],
    tradeoffs: [
        'Higher down payment than primary residence loans (15-25%)',
        'Higher interest rates than owner-occupied financing',
        'Reserve requirements more substantial',
        'Investment property insurance costs more',
        'Prepayment penalties on some DSCR programs',
    ],
    commonScenarios: [
        { title: 'First Rental Property Purchase', description: 'A W-2 employee buys their first rental property using a conventional investor loan with 20% down. Their income easily qualifies them, and the rental income helps offset the new payment in DTI calculations.' },
        { title: 'Scaling Beyond 10 Properties', description: 'An experienced investor has maxed out conventional financing limits. They switch to DSCR loans, qualifying each new property on rental cash flow alone — no personal income documentation needed.' },
        { title: 'Cash-Out to Fund Next Deal', description: 'An investor owns a rental free-and-clear worth $400K. They do a DSCR cash-out refinance at 75% LTV, pulling $300K to fund three new acquisitions.' },
    ],
    documentsNeeded: [
        'Lease agreement or market rent analysis',
        'Property appraisal',
        'Bank statements (2-24 months depending on program)',
        'Entity documents if closing in LLC',
        'Insurance quote for investment property',
        'Government-issued ID',
    ],
    faqs: [
        { question: 'What is the minimum down payment for a rental property?', answer: 'It depends on the program. Conventional investor loans typically require 15-25% down. DSCR loans require 20-25%. Some bank statement programs allow as low as 15-20% on investment properties.' },
        { question: 'Can I qualify without showing my personal income?', answer: 'Yes. DSCR loans qualify you based on the property\'s rental income, not your personal income. No tax returns, W-2s, or employment verification needed.' },
        { question: 'How many rental properties can I finance?', answer: 'With DSCR programs, there is no limit. Conventional financing allows up to 10 financed properties. Our advisors help you determine the best path for your portfolio size.' },
        { question: 'Can I close in my LLC?', answer: 'Yes. DSCR and many Non-QM investor loan programs allow entity vesting — closing in the name of an LLC, corporation, or trust.' },
        { question: 'What interest rates should I expect?', answer: 'Investor loan rates are typically 0.5-2% higher than primary residence rates, depending on the program, credit score, and down payment. DSCR rates are generally higher than conventional investor rates but offer far more flexibility.' },
    ],
    relatedProducts: [
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Cash-flow-based qualification' },
        { title: 'Fix & Flip Loans', href: '/commercial-loans/fix-and-flip', description: 'Short-term rehab financing' },
        { title: 'Bridge Loans', href: '/home-loans/bridge-loans', description: 'Transitional financing' },
        { title: 'Portfolio Loans', href: '/investor-loans/portfolio-loans', description: 'Blanket multi-property financing' },
    ],
    ctaHeading: 'Ready to Finance Your Next Rental?',
    ctaDescription: 'Get a personalized investor loan quote from across our 50+ lender network.',
};

export default function RentalPropertyLoansPage() {
    return <LoanPageTemplate data={data} />;
}
