import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Rate & Term Refinance', description: 'Lower your interest rate or change your loan term. Rate & term refinance options from Airus Lending.' };
const data = {
    badge: 'Refinance', title: 'Rate & Term Refinance', subtitle: 'Lower your rate, shorten your term, or switch from adjustable to fixed — without cashing out equity.',
    overview: 'A rate and term refinance replaces your current mortgage with a new one at a lower interest rate, a shorter term, or both — without accessing cash from your equity. This is the most common type of refinance and is used to reduce monthly payments, reduce total interest paid, or switch to a more predictable rate structure.',
    idealBuyer: ['Homeowners with a rate higher than current market rates', 'Borrowers wanting to switch from ARM to fixed-rate', 'Homeowners with improved credit who may qualify for better terms', 'Borrowers who want to pay off their mortgage faster with a shorter term'],
    programs: [
        { title: 'Conventional', description: 'Competitive rate-term refi options.', href: '/home-loans/conventional-loans' },
        { title: 'FHA Streamline', description: 'Simplified refi for FHA borrowers.', href: '/refinance/fha-streamline' },
        { title: 'VA IRRRL', description: 'Streamlined VA refinance.', href: '/refinance/va-irrrl' },
    ],
    steps: [
        { number: 1, title: 'Review Your Current Loan', description: 'We compare your current rate and terms to today\'s options.' },
        { number: 2, title: 'Get Pre-Approved', description: 'See exactly what rates you qualify for.' },
        { number: 3, title: 'Close & Start Saving', description: 'Simple closing process — new rate, new payment, same home.' },
    ],
    faqs: [
        { question: 'When does a rate-term refinance make sense?', answer: 'Generally when you can lower your rate by at least 0.5–1%, or when switching from an ARM to a fixed rate before adjustment. Calculate your break-even point (closing costs ÷ monthly savings) to determine if it\'s worth it.' },
        { question: 'Will I need an appraisal?', answer: 'Most conventional refinances require an appraisal. FHA Streamline and VA IRRRL may not, depending on the circumstances.' },
    ],
    relatedPages: [
        { title: 'Cash-Out Refinance', href: '/refinance/cash-out-refinance', description: 'Access your equity' },
        { title: 'Refinance Calculator', href: '/calculators/refinance-calculator', description: 'Estimate your savings' },
        { title: 'FHA Streamline', href: '/refinance/fha-streamline', description: 'Simplified FHA refi' },
    ],
};
export default function RateTermPage() { return <BuyPageTemplate data={data} />; }
