import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Jumbo Refinance', description: 'Refinance your jumbo mortgage above conforming limits. Competitive rates for high-value properties. Airus Lending.' };
const data = {
    badge: 'High-Balance', title: 'Jumbo Refinance', subtitle: 'Refinance your jumbo mortgage — lower your rate, shorten your term, or access equity on high-value properties.',
    overview: 'If your current mortgage exceeds conforming limits, a jumbo refinance allows you to improve your terms on a high-balance loan. Jumbo refinance rates are often very competitive for well-qualified borrowers, and options include fixed-rate, ARM, and interest-only structures.',
    idealBuyer: ['Homeowners with mortgages above conforming limits', 'High-income professionals with strong credit', 'Borrowers wanting to switch jumbo ARM to fixed', 'Homeowners wanting to cash out equity on high-value properties'],
    programs: [
        { title: 'Jumbo Fixed', description: 'Lock a competitive fixed rate.', href: '/home-loans/jumbo-loans' },
        { title: 'Jumbo ARM', description: 'Lower initial rate with 5/1, 7/1, or 10/1 options.', href: '/home-loans/adjustable-rate-mortgages' },
        { title: 'Jumbo I/O', description: 'Interest-only option for cash flow.', href: '/home-loans/interest-only-mortgages' },
    ],
    steps: [
        { number: 1, title: 'Review Current Terms', description: 'We compare your current jumbo rate to today\'s options.' },
        { number: 2, title: 'Choose Your Structure', description: 'Fixed, ARM, or I/O — match the right structure to your goals.' },
        { number: 3, title: 'Close & Save', description: 'Even small rate improvements on jumbo loans save thousands.' },
    ],
    faqs: [
        { question: 'Are jumbo refinance rates competitive?', answer: 'Yes. For well-qualified borrowers (700+ credit, strong reserves), jumbo refinance rates are often comparable to — or even below — conforming rates.' },
        { question: 'What LTV can I cash out to?', answer: 'Most jumbo cash-out programs allow up to 70–80% LTV, depending on the loan amount and property type.' },
    ],
    relatedPages: [
        { title: 'Jumbo Loans', href: '/home-loans/jumbo-loans', description: 'Jumbo loan overview' },
        { title: 'Rate & Term Refinance', href: '/refinance/rate-and-term', description: 'General rate reduction' },
        { title: 'Cash-Out Refinance', href: '/refinance/cash-out-refinance', description: 'Equity access' },
    ],
};
export default function JumboRefiPage() { return <BuyPageTemplate data={data} />; }
