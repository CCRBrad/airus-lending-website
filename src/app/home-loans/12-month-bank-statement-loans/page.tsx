import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: '12-Month Bank Statement Loans', description: 'Qualify with just 12 months of bank statements instead of 24. A faster documentation path for self-employed borrowers. Airus Lending.' };
const data = {
    badge: 'Self-Employed', title: '12-Month Bank Statement Loans', subtitle: 'A shorter documentation path — qualify using just 12 months of bank statements for faster processing.',
    overview: 'The 12-month bank statement loan is a variant of the standard bank statement program that requires only 12 months of consecutive personal or business bank statements instead of 24. It offers a faster documentation path for self-employed borrowers whose recent income is strong and well-documented. While 24-month programs may be more common, the 12-month option provides quicker processing for borrowers with consistent deposit patterns.',
    whoIsItFor: ['Self-employed borrowers with consistent recent income', 'Business owners with less than 24 months of banking records at one institution', 'Freelancers whose recent 12 months best represent their income', 'Borrowers who want faster processing with less documentation'],
    keyBenefits: [
        { title: 'Less Documentation', description: 'Only 12 months of bank statements vs. 24 — fewer pages, faster review.' },
        { title: 'Recent Income Focus', description: 'Your most recent year of income is what matters most.' },
        { title: 'Same Flexibility', description: 'Personal or business bank statements accepted, same as 24-month programs.' },
        { title: 'Multiple Property Types', description: 'Available for primary residence, second home, and investment.' },
    ],
    qualificationOverview: ['12 consecutive months of bank statements (personal or business)', '2+ years of self-employment', 'Credit score 660–700+ depending on lender', 'Down payment 15–20%', 'Expense factor applied to business statements', 'Reserves required'],
    downPaymentInfo: '15–20%', creditRequirements: '660–700+', occupancyTypes: ['Primary', 'Second home', 'Investment'], propertyTypes: ['Single-family', 'Condos', 'Townhomes', '2–4 units'],
    pros: ['Shorter documentation period', 'Faster processing', 'No tax returns needed', 'All property types eligible', 'Recent income emphasis'],
    tradeoffs: ['May show lower average income than 24-month program if income growing', 'Potentially higher rates than 24-month variant', 'Higher credit score minimum at some lenders', 'Still requires 2 years of self-employment'],
    commonScenarios: [
        { title: 'Growing Freelance Business', description: 'A freelancer whose last 12 months of deposits are $15K/month (up from $8K average over prior years) benefits from the 12-month window showing their strongest recent performance.' },
    ],
    documentsNeeded: ['12 consecutive months of bank statements', 'Business license or self-employment verification', 'CPA letter or P&L (some lenders)', 'Asset statements for reserves', 'Government ID'],
    faqs: [
        { question: 'How is this different from the 24-month program?', answer: 'The only difference is the documentation period — 12 months vs. 24. The 12-month option works well when your most recent income is strong and consistent. The 24-month option provides a longer track record.' },
    ],
    relatedProducts: [
        { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: '24-month program' },
        { title: 'Non-QM Loans', href: '/home-loans/non-qm-loans', description: 'All flexible programs' },
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Property-based qualification' },
    ],
};
export default function TwelveMonthBSPage() { return <LoanPageTemplate data={data} />; }
