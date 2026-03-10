import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = { title: 'Non-QM Loans', description: 'Non-QM loans provide flexible mortgage options beyond traditional guidelines. DSCR, bank statement, asset depletion, ITIN, and more. Apply with Airus Lending.' };

const data = {
    badge: 'Flexible Lending',
    title: 'Non-QM Loans',
    subtitle: 'When traditional lending guidelines don\'t fit your situation, non-QM programs provide flexible alternatives — without sacrificing professionalism or competitive pricing.',
    overview: 'Non-QM (Non-Qualified Mortgage) loans are mortgage products that fall outside the Consumer Financial Protection Bureau\'s (CFPB) Qualified Mortgage guidelines. This does not mean they are risky or subprime — it means they use alternative documentation, income verification, or qualification methods that don\'t fit the standard government-backed or conforming box. Non-QM loans are ideal for borrowers with unique financial situations: self-employed individuals, real estate investors, foreign nationals, and high-net-worth borrowers who have strong financial positions but don\'t fit neatly into conventional lending criteria.',
    whoIsItFor: [
        'Self-employed borrowers who maximize tax deductions',
        'Real estate investors qualifying on property cash flow',
        'ITIN borrowers without a Social Security Number',
        'Foreign nationals purchasing U.S. property',
        'High-net-worth individuals with assets rather than traditional income',
        'Borrowers with recent credit events (bankruptcy, foreclosure, short sale)',
        'Individuals with complex or non-traditional income sources',
    ],
    keyBenefits: [
        { title: 'Multiple Qualification Methods', description: 'Bank statements, DSCR, asset depletion, 1099, profit & loss — choose the documentation that best represents your financial strength.' },
        { title: 'Flexible Credit Requirements', description: 'Programs available down to 500 credit score depending on down payment and documentation type.' },
        { title: 'Non-Traditional Income Accepted', description: 'Rental income, cryptocurrency, foreign income, investment returns, and other non-standard sources may be considered.' },
        { title: 'Recent Credit Events Allowed', description: 'Some programs are available within 1 day of a bankruptcy, foreclosure, or short sale discharge — no waiting period.' },
    ],
    qualificationOverview: [
        'Varies by program type (DSCR, bank statement, asset depletion, ITIN, etc.)',
        'Credit scores from 500+ depending on documentation and LTV',
        'Down payment from 10–30% depending on risk profile',
        'DTI evaluated differently based on documentation method',
        'Reserves required (typically 3–12 months)',
        'Full appraisal required',
    ],
    downPaymentInfo: '10–30% (program dependent)',
    creditRequirements: '500–700+ (varies by program)',
    occupancyTypes: ['Primary residence', 'Second home', 'Investment property'],
    propertyTypes: ['Single-family', 'Condos', 'Townhomes', '2–4 units', 'Non-warrantable condos', '5–8 units (select)'],
    pros: ['Multiple documentation and qualification methods', 'Available for all property and occupancy types', 'Credit events do not permanently disqualify', 'Entity and LLC vesting available', 'Interest-only options on many programs', 'Competitive within non-QM market'],
    tradeoffs: ['Higher rates than conventional and government programs', 'Larger down payments required', 'Higher reserve requirements', 'Prepayment penalties on some programs', 'Not backed by Fannie Mae, Freddie Mac, or government agencies', 'Fewer lenders — specialized broker access helps'],
    commonScenarios: [
        { title: 'Investor with 15 Properties', description: 'An experienced investor has exceeded conventional financing limits. DSCR and non-QM programs allow continued portfolio expansion with no cap on financed properties.' },
        { title: 'Buyer 1 Day Out of Bankruptcy', description: 'A borrower discharged from Chapter 7 bankruptcy needs housing immediately. Non-QM programs with no-seasoning requirements allow a purchase with 25–30% down.' },
        { title: 'Foreign National Purchasing U.S. Real Estate', description: 'A Canadian citizen wants to buy a vacation home in Florida. Foreign national non-QM programs allow the purchase with passport documentation and international credit references.' },
    ],
    documentsNeeded: ['Varies by program — may include bank statements, asset statements, lease agreements, CPA letters, business licenses, ITIN documentation, or foreign identity documents', 'Property appraisal', 'Government-issued ID', 'Proof of down payment and reserves'],
    faqs: [
        { question: 'Are non-QM loans safe?', answer: 'Yes. Non-QM simply means the loan doesn\'t meet the CFPB\'s specific Qualified Mortgage criteria. These are legitimate, regulated loan products offered by licensed lenders with proper underwriting.' },
        { question: 'What types of non-QM programs exist?', answer: 'The main categories include DSCR (investor), bank statement (self-employed), asset depletion (high net worth), ITIN, foreign national, recent credit event, and interest-only programs.' },
        { question: 'Why would I choose non-QM over conventional?', answer: 'If your income documentation, credit history, or financial profile doesn\'t fit conventional or government guidelines, non-QM provides a viable path to financing that conventional programs cannot.' },
    ],
    relatedProducts: [
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Investment property cash flow lending' },
        { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'Self-employed income verification' },
        { title: 'ITIN Loans', href: '/home-loans/itin-loans', description: 'For borrowers without SSN' },
        { title: 'Asset Depletion Loans', href: '/home-loans/asset-depletion-loans', description: 'Qualify using liquid assets' },
    ],
};

export default function NonQMLoansPage() { return <LoanPageTemplate data={data} />; }
