import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for High-Net-Worth Borrowers', description: 'Asset depletion, jumbo, and portfolio mortgage options for high-net-worth individuals and retirees. Airus Lending.' };
const data = {
    badge: 'High Net Worth', title: 'High-Net-Worth Mortgage Solutions', subtitle: 'Your wealth speaks for itself. Asset depletion, jumbo, and portfolio programs designed for sophisticated borrowers.',
    overview: 'High-net-worth individuals often have complex financial profiles that don\'t fit traditional lending boxes. You may have significant assets but limited W-2 income, or your income comes from investments, trusts, or business distributions. Asset depletion loans, jumbo programs, and portfolio lending are designed specifically for borrowers whose financial strength is in their net worth, not their paycheck.',
    challenges: [
        { title: 'No Traditional Employment', description: 'Retirees, trust recipients, and investors often have no W-2 or employment income — but substantial assets.' },
        { title: 'Complex Income Sources', description: 'Capital gains, dividends, distributions, and royalties require specialized underwriting.' },
        { title: 'High-Value Properties', description: 'Jumbo financing has different requirements than standard conforming loans.' },
    ],
    solutions: [
        { title: 'Asset Depletion Loans', description: 'Qualify using liquid assets instead of income.', href: '/home-loans/asset-depletion-loans' },
        { title: 'Jumbo Loans', description: 'High-balance financing with competitive terms.', href: '/home-loans/jumbo-loans' },
        { title: 'Interest-Only', description: 'Lower payments with flexible pay structure.', href: '/home-loans/interest-only-mortgages' },
        { title: 'Non-QM Loans', description: 'Flexible lending for complex profiles.', href: '/home-loans/non-qm-loans' },
    ],
    qualificationTips: [
        'Asset depletion divides your liquid assets by 240–360 months to calculate a "monthly income" for qualification.',
        'Retirement accounts may be counted at 60–70% of value to account for taxes.',
        'Strong reserves beyond what\'s used for income calculation strengthen your application.',
        'Consider portfolio lending for unique property types or complex structures.',
    ],
    steps: [
        { number: 1, title: 'Wealth Review', description: 'We analyze your total financial picture — assets, income sources, and goals.' },
        { number: 2, title: 'Program Design', description: 'We structure the best financing using asset depletion, jumbo, or portfolio tools.' },
        { number: 3, title: 'Execute', description: 'Efficient, discreet processing for sophisticated borrowers.' },
    ],
    faqs: [
        { question: 'Can I qualify with assets only and no income?', answer: 'Yes. Asset depletion programs calculate a qualifying "income" from your liquid assets without requiring any employment or traditional income documentation.' },
        { question: 'What types of assets count?', answer: 'Bank accounts, brokerage accounts, mutual funds, and retirement accounts typically qualify. Real estate equity and restricted stock usually do not.' },
    ],
    ctaHeading: 'Let Your Assets Work For You.', ctaDescription: 'Explore asset depletion and jumbo options tailored to your financial profile.',
};
export default function HighNetWorthPage() { return <BorrowerTemplate data={data} />; }
