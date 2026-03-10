import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for 1099 Contractors', description: '1099 independent contractors can qualify for mortgages using bank statements or 1099 income docs. Airus Lending.' };
const data = {
    badge: '1099 Income', title: '1099 Contractor Mortgage Solutions', subtitle: 'Independent contractors and 1099 earners have real options — qualify using bank statements, 1099s, or P&L statements.',
    overview: '1099 contractors, freelancers, and gig workers earn good income but don\'t have traditional W-2 employment. Traditional lenders struggle with this. Non-QM lenders understand it. Bank statement programs, 1099-income programs, and P&L-based qualification give independent contractors a clear path to homeownership.',
    challenges: [
        { title: 'No W-2 Employment', description: 'Traditional lenders want pay stubs and W-2s that 1099 workers don\'t have.' },
        { title: 'Variable Income', description: 'Contract-based income can fluctuate month to month.' },
        { title: 'Heavy Write-Offs', description: 'Business expenses reduce taxable income below actual earnings.' },
    ],
    solutions: [
        { title: 'Bank Statement Loans', description: 'Qualify using 12–24 months of deposits.', href: '/home-loans/bank-statement-loans' },
        { title: '12-Month Bank Statement', description: 'Shorter documentation period.', href: '/home-loans/12-month-bank-statement-loans' },
        { title: 'Non-QM Loans', description: 'Flexible programs for non-traditional income.', href: '/home-loans/non-qm-loans' },
    ],
    qualificationTips: [
        'Keep personal and business accounts separate for cleaner documentation.',
        'Maintain consistent deposit patterns — irregular large deposits require explanation.',
        'Have 2+ years of 1099 income history documented.',
        'Credit scores of 660+ open the best program options.',
    ],
    steps: [
        { number: 1, title: 'Consultation', description: 'We review your income sources and match you to the right documentation type.' },
        { number: 2, title: 'Pre-Approval', description: 'Get qualified using bank statements or 1099 income — no W-2 needed.' },
        { number: 3, title: 'Close', description: 'Streamlined process designed for non-traditional income.' },
    ],
    faqs: [
        { question: 'Can I use my 1099 forms directly?', answer: 'Some lenders offer "1099 income" programs that use your 1099 forms as the primary income source, applying an expense factor. Bank statement programs are also available as an alternative.' },
        { question: 'What if my income varies a lot month to month?', answer: 'The lender averages your deposits over the documentation period (12 or 24 months), smoothing out monthly fluctuations.' },
    ],
    ctaHeading: '1099 Earner? You Have Options.', ctaDescription: 'Get pre-approved without W-2s — your deposits tell the real story.',
};
export default function ContractorsPage() { return <BorrowerTemplate data={data} />; }
