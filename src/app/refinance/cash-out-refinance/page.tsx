import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Cash-Out Refinance', description: 'Access your home equity through a cash-out refinance. Use funds for renovations, investments, or debt payoff. Airus Lending.' };
const data = {
    badge: 'Equity Access', title: 'Cash-Out Refinance', subtitle: 'Replace your mortgage with a larger one and receive the difference as cash — use it for anything you need.',
    overview: 'A cash-out refinance replaces your existing mortgage with a new, larger loan and gives you the difference in cash at closing. It\'s one of the most popular ways to access home equity for renovations, debt consolidation, education, investments, or emergency funds. You get a potentially lower rate on your mortgage AND access to a lump sum.',
    idealBuyer: ['Homeowners with significant equity who need cash', 'Borrowers consolidating high-interest debt', 'Homeowners funding major renovations or home improvements', 'Real estate investors pulling equity for new acquisitions'],
    programs: [
        { title: 'Conventional', description: 'Up to 80% LTV cash-out.', href: '/home-loans/conventional-loans' },
        { title: 'FHA', description: 'Cash-out up to 80% LTV.', href: '/home-loans/fha-loans' },
        { title: 'VA', description: 'Up to 100% LTV cash-out for veterans.', href: '/home-loans/va-loans' },
        { title: 'DSCR', description: 'Cash-out on investment properties.', href: '/home-loans/dscr-loans' },
    ],
    steps: [
        { number: 1, title: 'Determine Your Equity', description: 'We estimate your home value and calculate available equity.' },
        { number: 2, title: 'Choose Your Amount', description: 'Decide how much cash you need — typically up to 80% LTV.' },
        { number: 3, title: 'Close & Receive Funds', description: 'New mortgage replaces the old one. Cash delivered at closing.' },
    ],
    faqs: [
        { question: 'How much cash can I access?', answer: 'Most conventional programs allow cash-out up to 80% of your home\'s value minus your current loan balance. VA allows up to 100% in some cases.' },
        { question: 'Will my rate increase?', answer: 'Cash-out rates are typically 0.125–0.25% higher than rate-term refinance rates. However, if your current rate is significantly higher than market, you may still lower your rate while cashing out.' },
        { question: 'Can I use the cash for anything?', answer: 'Yes. There are no restrictions on how you use cash-out refinance proceeds — renovations, debt payoff, investments, education, emergencies, or anything else.' },
    ],
    relatedPages: [
        { title: 'Home Equity Loans', href: '/home-loans/home-equity-loans', description: 'Keep your first mortgage' },
        { title: 'HELOC', href: '/home-loans/heloc', description: 'Revolving equity line' },
        { title: 'Cash-Out Calculator', href: '/calculators/cash-out-refinance-calculator', description: 'Estimate your equity' },
    ],
};
export default function CashOutPage() { return <BuyPageTemplate data={data} />; }
