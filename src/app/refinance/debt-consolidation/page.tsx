import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Debt Consolidation Refinance', description: 'Consolidate high-interest debt into your mortgage with a cash-out refinance. Lower your monthly payments. Airus Lending.' };
const data = {
    badge: 'Debt Strategy', title: 'Debt Consolidation Refinance', subtitle: 'Roll high-interest credit card, auto, and personal loan debt into your mortgage — one lower payment.',
    overview: 'A debt consolidation refinance is a cash-out refinance where the proceeds are used specifically to pay off high-interest debt. By rolling credit cards, auto loans, personal loans, and other debts into your mortgage, you can dramatically reduce your monthly obligations and total interest paid. Mortgage rates are typically much lower than credit card or personal loan rates, making this a powerful financial strategy for homeowners with equity.',
    idealBuyer: ['Homeowners carrying high-interest credit card balances', 'Borrowers with multiple monthly debt payments', 'Homeowners who want one simplified monthly payment', 'Those looking to reduce total monthly debt obligations significantly'],
    programs: [
        { title: 'Conventional Cash-Out', description: 'Up to 80% LTV for debt consolidation.', href: '/home-loans/conventional-loans' },
        { title: 'FHA Cash-Out', description: 'Flexible credit, up to 80% LTV.', href: '/home-loans/fha-loans' },
        { title: 'VA Cash-Out', description: 'Up to 100% LTV for veterans.', href: '/home-loans/va-loans' },
    ],
    steps: [
        { number: 1, title: 'Inventory Your Debts', description: 'List all debts with balances, rates, and monthly payments.' },
        { number: 2, title: 'Calculate Equity & Savings', description: 'We determine how much debt you can consolidate and your net monthly savings.' },
        { number: 3, title: 'Refinance & Pay Off Debt', description: 'Close the refinance and pay off your debts in one step.' },
    ],
    faqs: [
        { question: 'How much can I save?', answer: 'If you\'re paying 20%+ on credit cards and consolidate into a 7% mortgage, you could save hundreds or thousands per month depending on balances. Your advisor can model exact savings.' },
        { question: 'Will my mortgage payment go up?', answer: 'Your mortgage payment may increase since you\'re borrowing more, but your total monthly debt payments should decrease significantly. The net result is typically a large cash flow improvement.' },
    ],
    relatedPages: [
        { title: 'Cash-Out Refinance', href: '/refinance/cash-out-refinance', description: 'General cash-out options' },
        { title: 'HELOC', href: '/home-loans/heloc', description: 'Revolving credit alternative' },
        { title: 'Refinance Calculator', href: '/calculators/refinance-calculator', description: 'Estimate savings' },
    ],
};
export default function DebtConsolidationPage() { return <BuyPageTemplate data={data} />; }
