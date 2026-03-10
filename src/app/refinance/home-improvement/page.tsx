import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Home Improvement Refinance', description: 'Refinance to fund home renovations and improvements. Cash-out and renovation loan options. Airus Lending.' };
const data = {
    badge: 'Renovation', title: 'Home Improvement Refinance', subtitle: 'Fund renovations through your refinance — upgrade your home while potentially lowering your rate.',
    overview: 'A home improvement refinance lets you access your equity to fund renovations and upgrades. Whether it\'s a kitchen remodel, bathroom update, new roof, or whole-home renovation, refinancing can provide the capital while potentially improving your rate or terms at the same time.',
    idealBuyer: ['Homeowners planning significant renovations or upgrades', 'Borrowers who want to improve their home\'s value', 'Homeowners who can also lower their rate through refinancing', 'Those who prefer one mortgage payment over a separate home improvement loan'],
    programs: [
        { title: 'Cash-Out Refinance', description: 'Access equity for any type of improvement.', href: '/refinance/cash-out-refinance' },
        { title: 'FHA 203k', description: 'Renovation financing wrapped into your mortgage.', href: '/home-loans/fha-203k-loans' },
        { title: 'Renovation Loans', description: 'Finance based on after-improved value.', href: '/home-loans/renovation-loans' },
    ],
    steps: [
        { number: 1, title: 'Plan Your Project', description: 'Get contractor estimates and define your renovation scope.' },
        { number: 2, title: 'Choose Your Strategy', description: 'Cash-out refi or renovation loan — we help pick the right path.' },
        { number: 3, title: 'Finance & Renovate', description: 'Close the refinance and begin your home improvement project.' },
    ],
    faqs: [
        { question: 'Should I choose cash-out or a renovation loan?', answer: 'Cash-out gives you a lump sum to use as you wish — simpler process, no draw inspections. Renovation loans (FHA 203k, HomeStyle) are based on the after-improved value, which can mean a larger loan amount for major projects. Your advisor can help compare.' },
        { question: 'Are there tax benefits?', answer: 'Interest on a cash-out refinance may be tax-deductible if the funds are used for home improvements. Consult your tax advisor for specifics.' },
    ],
    relatedPages: [
        { title: 'Cash-Out Refinance', href: '/refinance/cash-out-refinance', description: 'General cash-out options' },
        { title: 'Renovation Loans', href: '/home-loans/renovation-loans', description: 'All renovation programs' },
        { title: 'FHA 203k', href: '/home-loans/fha-203k-loans', description: 'Government-backed renovation' },
    ],
};
export default function HomeImprovementPage() { return <BuyPageTemplate data={data} />; }
