import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = {
    title: 'Bank Statement Loans',
    description: 'Bank statement loans let self-employed borrowers qualify using 12–24 months of bank deposits instead of tax returns. Explore options with Airus Lending.',
};

const data = {
    badge: 'Self-Employed',
    title: 'Bank Statement Loans',
    subtitle: 'Use your bank deposits — not tax returns — to qualify for a mortgage. Designed for self-employed borrowers and business owners.',
    overview: 'Bank statement loans are a type of non-QM mortgage that uses 12 to 24 months of personal or business bank statements to verify income instead of traditional tax returns or W-2s. This makes them ideal for self-employed borrowers, freelancers, gig workers, and business owners who write off significant expenses and show lower taxable income on their returns than their actual earnings. Bank statement programs give self-employed borrowers a path to competitive mortgage financing without being penalized for smart tax strategies.',
    whoIsItFor: [
        'Self-employed borrowers with 2+ years of business history',
        'Business owners whose tax returns understate actual income',
        'Freelancers and independent contractors (1099 earners)',
        'Gig economy workers and consultants',
        'Professionals who maximize write-offs and deductions',
    ],
    keyBenefits: [
        { title: 'No Tax Returns Required', description: 'Income is calculated from bank statement deposits — your tax return deductions won\'t count against you.' },
        { title: 'Personal or Business Statements', description: 'Use personal bank statements, business bank statements, or a combination depending on the program.' },
        { title: 'Flexible Income Calculation', description: 'Lenders apply an expense factor (typically 50% for business statements) to determine qualifying income from deposits.' },
        { title: 'All Property Types', description: 'Available for primary residence, second home, and investment property — unlike DSCR loans which are investment-only.' },
    ],
    qualificationOverview: [
        '12 or 24 months of consecutive bank statements',
        'Minimum credit score of 620–680 depending on lender',
        'Down payment of 10–20% depending on LTV and credit',
        'Self-employed for at least 2 years (verified by business license, CPA letter, or tax transcript)',
        'DTI generally up to 50%',
        'Reserves of 3–12 months PITIA may be required',
    ],
    downPaymentInfo: '10–20% minimum',
    creditRequirements: '620–680+ (varies by LTV)',
    occupancyTypes: ['Primary residence', 'Second home', 'Investment property'],
    propertyTypes: ['Single-family', 'Condos', 'Townhomes', '2–4 units', 'PUDs'],
    pros: [
        'No tax returns or W-2s required',
        'Income based on actual bank deposits',
        'Available for primary, second home, and investment',
        'Competitive rates for non-QM category',
        'Gift funds often permitted for down payment',
        'Cash-out refinance available',
        'Can close in personal name or entity (varies)',
    ],
    tradeoffs: [
        'Higher rates than conventional and government loans (typically 0.5–1.5% higher)',
        'Requires 2+ years of self-employment history',
        'Expense factor reduces qualifying income (especially on business statements)',
        'Larger down payment than FHA or VA (10–20%)',
        'Some lenders require CPA letter or P&L statement',
        'Not available through Fannie Mae / Freddie Mac',
    ],
    commonScenarios: [
        { title: 'Restaurant Owner with High Revenue', description: 'A restaurant owner grosses $500K/year but shows $60K on tax returns after deductions. Using 12 months of business bank statements with a 50% expense factor, qualifying income is calculated at $250K — enough to purchase a $750K home.' },
        { title: 'Freelance Consultant Buying First Home', description: 'A marketing consultant earning $12K/month through contract work uses 24 months of personal bank statements showing consistent deposits. No W-2 needed.' },
        { title: 'Business Owner Refinancing', description: 'A contractor wants to refinance their primary home to lower their rate. Tax returns show minimal income, but 12 months of business bank statements demonstrate strong cash flow. Bank statement program allows the refinance with no issue.' },
    ],
    documentsNeeded: [
        '12 or 24 months of consecutive bank statements (personal or business)',
        'Business license or proof of self-employment (2+ years)',
        'CPA letter or signed P&L statement (some lenders)',
        'Two months of asset statements (for reserves)',
        'Government-issued photo ID',
        'Insurance quote and property tax information',
    ],
    faqs: [
        { question: 'How is income calculated from bank statements?', answer: 'Lenders total your deposits over 12 or 24 months and divide by the number of months to get an average monthly income. For business bank statements, an expense factor (typically 50%) is applied. For personal bank statements, deposits are usually counted at a higher percentage.' },
        { question: 'Can I use both personal and business bank statements?', answer: 'Some lenders allow a blend of personal and business bank statements. Others require one or the other. Your advisor can match you with the best option.' },
        { question: 'Do large deposits get questioned?', answer: 'Yes. Any unusually large deposit that appears inconsistent with your typical business activity may need to be explained or sourced. Consistent, regular deposits are the strongest profile.' },
        { question: 'How do bank statement loans compare to DSCR loans?', answer: 'Bank statement loans verify the borrower\'s personal income via deposits and work for any property type. DSCR loans qualify based on the property\'s rental income and are only for investment properties. If you\'re buying a primary home, bank statement is the right choice.' },
    ],
    relatedProducts: [
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Qualify on property cash flow instead' },
        { title: 'Non-QM Loans', href: '/home-loans/non-qm-loans', description: 'Other flexible lending options' },
        { title: '12-Month Bank Statement', href: '/home-loans/12-month-bank-statement-loans', description: 'Shorter documentation option' },
        { title: 'Asset Depletion Loans', href: '/home-loans/asset-depletion-loans', description: 'Use assets instead of income' },
    ],
    ctaHeading: 'Self-Employed? Let\'s Find Your Loan.',
    ctaDescription: 'Get pre-approved using bank statements — no tax returns, no hassle.',
};

export default function BankStatementLoansPage() {
    return <LoanPageTemplate data={data} />;
}
