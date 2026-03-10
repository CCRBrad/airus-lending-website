import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = {
    title: 'DSCR Loans',
    description: 'DSCR loans let real estate investors qualify based on property cash flow instead of personal income. Learn about DSCR loan requirements, rates, and how to apply.',
};

const data = {
    badge: 'Investor Program',
    title: 'DSCR Loans',
    subtitle: 'Qualify based on your property\'s rental income — not your personal tax returns or W-2s.',
    overview: 'A DSCR (Debt Service Coverage Ratio) loan is a type of non-QM mortgage designed for real estate investors. Instead of verifying personal income through tax returns, pay stubs, or W-2s, the lender evaluates whether the property\'s rental income covers the mortgage payment. If the property cash flows, you can qualify — even if you show minimal personal income on paper. DSCR loans have become one of the most popular tools for scaling a rental portfolio because they remove the traditional income verification barrier.',
    whoIsItFor: [
        'Real estate investors building or scaling a rental portfolio',
        'Self-employed borrowers whose tax returns understate real earnings',
        'Investors who already own multiple financed properties',
        'Borrowers who want to qualify without personal income documentation',
        'LLC and entity-based investors (vesting in entity often allowed)',
    ],
    keyBenefits: [
        { title: 'No Personal Income Verification', description: 'No tax returns, W-2s, or pay stubs required. Qualification is based on property cash flow.' },
        { title: 'Scalable', description: 'No conventional limit on number of financed properties. Ideal for portfolio growth.' },
        { title: 'Entity Vesting', description: 'Close in the name of an LLC, corporation, or trust — unlike conventional loans.' },
        { title: 'Fast Closings', description: 'Streamlined documentation means fewer bottlenecks and faster processing.' },
    ],
    qualificationOverview: [
        'DSCR of 1.0 or higher preferred (some lenders allow 0.75 with reserves)',
        'Minimum credit score of 620–680 depending on lender',
        'Minimum 20–25% down payment',
        'Property must be non-owner-occupied (investment only)',
        'Appraisal with rent schedule or comparable rent analysis required',
        'Cash reserves typically required (3–12 months PITIA)',
    ],
    downPaymentInfo: '20–25% minimum',
    creditRequirements: '620–680+ (varies by lender)',
    occupancyTypes: ['Investment property only'],
    propertyTypes: ['Single-family', '2–4 units', 'Condos (warrantable)', 'Townhomes', '5–8 units (select lenders)'],
    pros: [
        'No personal income verification required',
        'No limit on number of financed properties',
        'Close in LLC or entity name',
        'Faster process than conventional investor loans',
        'Interest-only options available',
        'Cash-out refinance available',
        'No employment verification',
    ],
    tradeoffs: [
        'Higher interest rates than conventional investor loans (typically 1–2% higher)',
        'Requires 20–25% down payment',
        'Investment property only — cannot be used for primary residence',
        'Higher reserve requirements',
        'Prepayment penalties common (3–5 year terms)',
        'Not available through Fannie Mae / Freddie Mac',
    ],
    commonScenarios: [
        { title: 'Investor with 10 Financed Properties', description: 'A real estate investor has maxed out conventional financing (limited to 10 properties). DSCR loans allow continued portfolio growth with no cap on financed properties.' },
        { title: 'Self-Employed Investor with Low Taxable Income', description: 'A business owner writes off significant expenses, showing $40K taxable income. Their rental property generates $3,000/month against a $2,200 PITIA — DSCR of 1.36. They qualify easily on cash flow alone.' },
        { title: 'LLC Purchase for Asset Protection', description: 'An experienced investor wants to hold properties in an LLC for liability protection. DSCR loans allow entity vesting, which conventional loans typically do not.' },
    ],
    documentsNeeded: [
        'Rental lease agreement or market rent analysis',
        'Property appraisal with rent schedule',
        'Two months of bank statements (for reserves verification)',
        'Entity documents (if closing in LLC)',
        'Insurance quote',
        'Government-issued ID',
    ],
    faqs: [
        { question: 'What DSCR ratio do I need?', answer: 'Most lenders prefer a DSCR of 1.0 or higher, meaning the property\'s rental income covers 100% of the mortgage payment (PITIA). Some lenders offer programs for ratios as low as 0.75 with compensating factors like strong credit and large reserves.' },
        { question: 'Can I use projected rent instead of actual rent?', answer: 'Yes. If the property is vacant or being purchased, lenders typically use a market rent analysis from the appraisal (such as Fannie Mae Form 1007) to establish projected income.' },
        { question: 'Is there a prepayment penalty?', answer: 'Most DSCR loans include a prepayment penalty, commonly structured as 3-year or 5-year step-down penalties. Some lenders offer a no-prepay option at a slightly higher rate.' },
        { question: 'Can I do a cash-out refinance with a DSCR loan?', answer: 'Yes. Cash-out refinances are available on DSCR loans, typically requiring a maximum 70–75% LTV and 6–12 months of seasoning since acquisition.' },
        { question: 'How does DSCR compare to bank statement loans?', answer: 'DSCR loans are specifically for investment properties and qualify based on property income. Bank statement loans are for borrowers who want to use personal bank deposits as income — and can be used for primary, second home, or investment properties.' },
    ],
    relatedProducts: [
        { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'Alternative for self-employed borrowers' },
        { title: 'Fix & Flip Loans', href: '/commercial-loans/fix-and-flip', description: 'Short-term rehab financing' },
        { title: 'Bridge Loans', href: '/home-loans/bridge-loans', description: 'Short-term acquisition financing' },
        { title: 'Non-QM Loans', href: '/home-loans/non-qm-loans', description: 'Flexible lending solutions' },
    ],
    ctaHeading: 'Ready to Scale Your Portfolio?',
    ctaDescription: 'Get a DSCR loan quote — no personal income verification, no tax returns.',
};

export default function DSCRLoansPage() {
    return <LoanPageTemplate data={data} />;
}
