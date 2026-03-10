import type { Metadata } from 'next';
import ComparisonTemplate from '@/templates/ComparisonTemplate';
export const metadata: Metadata = { title: 'FHA vs Conventional Loans', description: 'Compare FHA and conventional loans side by side. Down payment, credit requirements, mortgage insurance, and more. Airus Lending.' };
const data = {
    badge: 'Comparison', title: 'FHA vs Conventional Loans', subtitle: 'Two of the most popular programs — compared side by side to help you pick the right one.',
    optionAName: 'FHA Loans', optionBName: 'Conventional Loans', optionALink: '/home-loans/fha-loans', optionBLink: '/home-loans/conventional-loans',
    overview: 'FHA and conventional loans are the two most common mortgage programs. FHA is government-backed with lower credit and down payment requirements but requires mortgage insurance for the life of the loan. Conventional loans offer more flexibility, no lifetime MI, and options for second homes and investments.',
    comparisonRows: [
        { label: 'Min Down Payment', optionA: '3.5%', optionB: '3% (first-time), 5% (standard)' },
        { label: 'Min Credit Score', optionA: '580 (3.5% down), 500 (10% down)', optionB: '620 (680+ for best rates)' },
        { label: 'Mortgage Insurance', optionA: 'MIP for life of loan (if <10% down)', optionB: 'PMI removable at 20% equity' },
        { label: 'Upfront Insurance Fee', optionA: '1.75% upfront MIP', optionB: 'None' },
        { label: 'Property Types', optionA: 'Primary residence only', optionB: 'Primary, second home, investment' },
        { label: 'Loan Limits', optionA: 'FHA county limits', optionB: 'Conforming limits (higher)' },
        { label: 'Gift Funds', optionA: '100% of down payment can be gifted', optionB: 'Limited based on LTV' },
        { label: 'DTI Limit', optionA: 'Up to 50% with compensating factors', optionB: 'Up to 45-50%' },
        { label: 'Best For', optionA: 'Lower credit, limited savings', optionB: 'Strong credit, flexibility' },
    ],
    whenToChooseA: ['Credit score is below 680', 'You have less than 5% for a down payment', 'Your down payment is coming from a gift', 'You have a recent credit event and need flexible guidelines'],
    whenToChooseB: ['Credit score is 680 or higher', 'You want PMI to go away at 20% equity', 'You\'re buying a second home or investment property', 'You want to avoid the upfront MIP fee'],
    bottomLine: 'For borrowers with strong credit (680+) and at least 5% down, conventional is typically the better long-term value. For borrowers with lower credit, limited savings, or gift-funded down payments, FHA provides a more accessible path to homeownership. Your advisor can model both scenarios specific to your situation.',
    faqs: [
        { question: 'Can I switch from FHA to conventional later?', answer: 'Yes. Many FHA borrowers refinance into a conventional loan once they reach 20% equity to eliminate mortgage insurance.' },
        { question: 'Which has lower interest rates?', answer: 'It depends on your credit score. Below 700, FHA rates are often lower. Above 700, conventional rates are typically more competitive.' },
    ],
};
export default function FHAvsConvPage() { return <ComparisonTemplate data={data} />; }
