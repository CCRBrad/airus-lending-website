import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Investment Property Loans', description: 'Finance rental properties, multi-units, and investment real estate. DSCR, conventional, and portfolio options. Airus Lending.' };
const data = {
    badge: 'Investor', title: 'Investment Property Loans', subtitle: 'Finance your next rental, flip, or portfolio property with programs designed for real estate investors.',
    overview: 'Investment property financing is different from primary residence lending — higher down payments, different rate structures, and specialized programs. Whether you\'re buying your first rental or your 50th, Airus Lending offers conventional, DSCR, non-QM, and portfolio options to match your strategy.',
    idealBuyer: ['First-time real estate investors purchasing a rental', 'Experienced investors scaling their portfolio', 'Fix-and-flip investors needing short-term financing', 'LLC-based investors seeking entity-vested loans', 'Investors maxed out on conventional financing'],
    programs: [
        { title: 'Conventional', description: '15–25% down for investment properties.', href: '/home-loans/conventional-loans' },
        { title: 'DSCR Loans', description: 'Qualify on property cash flow, no income docs.', href: '/home-loans/dscr-loans' },
        { title: 'Fix & Flip', description: 'Short-term rehab financing.', href: '/commercial-loans/fix-and-flip' },
        { title: 'Bridge Loans', description: 'Short-term acquisition financing.', href: '/home-loans/bridge-loans' },
        { title: 'Interest-Only', description: 'Maximize cash flow with I/O payments.', href: '/home-loans/interest-only-mortgages' },
    ],
    steps: [
        { number: 1, title: 'Define Your Strategy', description: 'Buy-and-hold, fix-and-flip, or value-add — your strategy determines the best loan.' },
        { number: 2, title: 'Get Pre-Approved', description: 'Conventional or DSCR pre-approval so you can act fast when deals appear.' },
        { number: 3, title: 'Acquire the Property', description: 'Use your financing to close quickly and competitively.' },
        { number: 4, title: 'Scale Your Portfolio', description: 'With DSCR and non-QM, there\'s no limit on financed properties.' },
    ],
    faqs: [
        { question: 'What is the minimum down payment for an investment property?', answer: '15% for single-family conventional, 25% for 2–4 units. DSCR programs typically require 20–25%.' },
        { question: 'Can I qualify based on rental income?', answer: 'Yes — DSCR loans qualify based on the property\'s cash flow. No W-2s, tax returns, or employment verification needed.' },
        { question: 'Can I close in an LLC?', answer: 'Yes, on DSCR and non-QM programs. Conventional loans must be in personal name.' },
    ],
    relatedPages: [
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Cash-flow based lending' },
        { title: 'Multi-Unit Property', href: '/buy/multi-unit-property-loans', description: '2–4 unit financing' },
        { title: 'Fix & Flip', href: '/commercial-loans/fix-and-flip', description: 'Short-term rehab capital' },
    ],
};
export default function InvestmentPropertyPage() { return <BuyPageTemplate data={data} />; }
