import type { Metadata } from 'next';
import ComparisonTemplate from '@/templates/ComparisonTemplate';
export const metadata: Metadata = { title: 'DSCR vs Bank Statement Loans', description: 'Compare DSCR and bank statement loans for self-employed borrowers and investors. Airus Lending.' };
const data = {
    badge: 'Comparison', title: 'DSCR vs Bank Statement Loans', subtitle: 'Two of the most popular non-QM programs — each designed for different borrower profiles.',
    optionAName: 'DSCR Loans', optionBName: 'Bank Statement Loans', optionALink: '/home-loans/dscr-loans', optionBLink: '/home-loans/bank-statement-loans',
    overview: 'DSCR and bank statement loans are both non-QM programs that avoid traditional income verification, but they work very differently. DSCR qualifies based on property rental income and is only for investment properties. Bank statement loans use personal/business bank deposits to verify income and work for any property type.',
    comparisonRows: [
        { label: 'Income Verification', optionA: 'Property cash flow (rent vs PITIA)', optionB: '12-24 months of bank statement deposits' },
        { label: 'Property Types', optionA: 'Investment property only', optionB: 'Primary, second home, investment' },
        { label: 'Entity Vesting', optionA: 'LLC/entity vesting allowed', optionB: 'Personal name (usually)' },
        { label: 'Min Down Payment', optionA: '20-25%', optionB: '10-20%' },
        { label: 'Min Credit Score', optionA: '620-680', optionB: '620-680' },
        { label: 'Employment Verification', optionA: 'Not required', optionB: '2+ years self-employed' },
        { label: 'Best For', optionA: 'Investors scaling a rental portfolio', optionB: 'Self-employed buying any property' },
        { label: 'Interest-Only Available', optionA: 'Yes', optionB: 'Some programs' },
    ],
    whenToChooseA: ['You\'re buying an investment/rental property', 'You want to qualify without any personal income docs', 'You want to close in an LLC or entity', 'You\'re scaling a portfolio with no limit on properties'],
    whenToChooseB: ['You\'re buying a primary residence or second home', 'You\'re self-employed with strong bank deposits', 'Your tax returns understate your real income', 'You want a lower down payment option (10-15%)'],
    bottomLine: 'If you\'re buying an investment property and want no personal income verification, DSCR is the right choice. If you\'re self-employed and buying any property type, bank statement loans give you the most flexibility. Many investors use both programs across their portfolio.',
    faqs: [
        { question: 'Can I use DSCR for my primary residence?', answer: 'No. DSCR loans are strictly for non-owner-occupied investment properties. Use bank statement loans for primary residences.' },
        { question: 'Which has lower rates?', answer: 'Rates are comparable, though DSCR rates can be slightly higher due to the investment property risk. Both are higher than conventional rates.' },
    ],
};
export default function DSCRvsBSPage() { return <ComparisonTemplate data={data} />; }
