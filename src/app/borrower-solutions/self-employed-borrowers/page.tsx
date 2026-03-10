import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for Self-Employed Borrowers', description: 'Bank statement loans, DSCR, and non-QM options for self-employed professionals. No tax returns needed. Airus Lending.' };
const data = {
    badge: 'Self-Employed', title: 'Self-Employed Mortgage Solutions', subtitle: 'Your tax returns don\'t tell the full story. Bank statement loans, DSCR, and asset-based programs let your real income shine.',
    overview: 'Self-employed professionals and freelancers face a unique challenge: the tax strategies that help you minimize taxes also reduce the income traditional lenders see. Bank statement loans, DSCR programs, and asset depletion mortgages solve this by using your real financial picture — deposits, property cash flow, or liquid assets — instead of tax return AGI. Airus Lending specializes in self-employed lending and understands how to structure your application for the best result.',
    challenges: [
        { title: 'Tax Return Income Gap', description: 'Write-offs reduce taxable income, making it look like you earn less than you do.' },
        { title: 'Business Expense Fluctuations', description: 'Variable expenses create uneven income that traditional underwriting struggles with.' },
        { title: 'Multiple Income Streams', description: 'Managing income from contracts, projects, and businesses complicates documentation.' },
        { title: '2-Year History Required', description: 'Most programs need 2 years of self-employment — newer businesses may require alternative approaches.' },
        { title: 'CPA Dependency', description: 'You may need CPA letters or P&L statements that align with your bank deposits.' },
    ],
    solutions: [
        { title: 'Bank Statement Loans', description: 'Use 12–24 months of bank deposits as income.', href: '/home-loans/bank-statement-loans' },
        { title: '12-Month Bank Statement', description: 'Shorter documentation with recent deposits.', href: '/home-loans/12-month-bank-statement-loans' },
        { title: 'DSCR Loans', description: 'Investment property? Qualify on rental cash flow.', href: '/home-loans/dscr-loans' },
        { title: 'Asset Depletion', description: 'Use liquid assets instead of income docs.', href: '/home-loans/asset-depletion-loans' },
        { title: 'Non-QM Loans', description: 'Flexible lending for unique situations.', href: '/home-loans/non-qm-loans' },
    ],
    qualificationTips: [
        'Keep business and personal bank accounts separate for cleaner documentation.',
        'Avoid large, unexplained deposits during the loan process — consistency is key.',
        'Work with your CPA to prepare a profit & loss statement that aligns with your deposits.',
        'Maintain strong credit scores — 680+ opens the best self-employed loan programs.',
        'Document your self-employment history with business licenses, letters, or tax transcripts.',
    ],
    steps: [
        { number: 1, title: 'Consultation', description: 'We review your bank statements, assets, and goals to identify the best program.' },
        { number: 2, title: 'Pre-Approval', description: 'Get qualified using bank deposits or assets — no tax return surprises.' },
        { number: 3, title: 'Application & Close', description: 'Streamlined docs and experienced processing through to closing.' },
    ],
    faqs: [
        { question: 'Can I use personal or business bank statements?', answer: 'Both are accepted. Business statements typically have a 50% expense factor applied; personal statements are counted at a higher percentage.' },
        { question: 'Do I need 2 years of self-employment?', answer: 'Most programs require 2 years. If you have less, asset depletion or DSCR may be alternatives depending on your situation.' },
        { question: 'What if my income is growing?', answer: 'A 12-month bank statement program captures your most recent performance. If your last year is your best year, this works in your favor.' },
    ],
    ctaHeading: 'Self-Employed? Let\'s Find Your Loan.', ctaDescription: 'No tax returns, no hassle. Get pre-approved using your real financial picture.',
};
export default function SelfEmployedPage() { return <BorrowerTemplate data={data} />; }
