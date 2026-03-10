import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Investment Property Refinance', description: 'Refinance your rental or investment property. Conventional, DSCR, and non-QM options for investors. Airus Lending.' };
const data = {
    badge: 'Investor', title: 'Investment Property Refinance', subtitle: 'Refinance your rental or investment property — lower your rate, cash out equity, or improve your terms.',
    overview: 'Investment property refinancing allows real estate investors to lower their rate, reduce their term, or access equity from rental properties. Options include conventional refinance (for borrowers under the 10-property limit), DSCR refinance (no income verification, based on property cash flow), and non-QM options for unique situations.',
    idealBuyer: ['Investors wanting to lower their rate on rental properties', 'Investors pulling equity from one property to acquire another', 'Borrowers with DSCR-eligible rentals', 'Investors who\'ve improved their credit and want better terms'],
    programs: [
        { title: 'Conventional', description: 'Rate-term or cash-out for investment.', href: '/home-loans/conventional-loans' },
        { title: 'DSCR', description: 'Cash-flow based — no income docs.', href: '/home-loans/dscr-loans' },
        { title: 'Non-QM', description: 'Other flexible investor programs.', href: '/home-loans/non-qm-loans' },
    ],
    steps: [
        { number: 1, title: 'Review Current Loan', description: 'We compare your current terms to what\'s available today.' },
        { number: 2, title: 'Choose Your Strategy', description: 'Rate-term, cash-out, or DSCR — pick the best path.' },
        { number: 3, title: 'Close & Optimize', description: 'New terms, better cash flow, or fresh capital for your next deal.' },
    ],
    faqs: [
        { question: 'Can I refinance an investment property with no income docs?', answer: 'Yes — DSCR refinance qualifies based on the property\'s rental income, not your personal income.' },
        { question: 'How much equity can I cash out?', answer: 'Typically up to 70–75% LTV on investment property cash-out refinances. DSCR may allow up to 75% with seasoning requirements.' },
    ],
    relatedPages: [
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Cash-flow based lending' },
        { title: 'Investment Property Purchase', href: '/buy/investment-property-loans', description: 'Purchase financing' },
        { title: 'Cash-Out Refinance', href: '/refinance/cash-out-refinance', description: 'General cash-out options' },
    ],
};
export default function InvRefiPage() { return <BuyPageTemplate data={data} />; }
