import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Fix & Flip Loans', description: 'Short-term financing for residential fix-and-flip projects. Fast closings, rehab draws, and competitive terms. Airus Lending.' };
const data = {
    badge: 'Fix & Flip', title: 'Fix & Flip Loans', subtitle: 'Short-term acquisition and rehab financing for residential investors — buy, renovate, and sell for profit.',
    overview: 'Fix and flip loans are short-term (6–18 month) loans designed for investors who purchase distressed residential properties, renovate them, and sell for a profit. Financing covers both acquisition and renovation costs, with rehab funds disbursed in draws as work is completed. These programs focus on the deal — the property, the renovation plan, and the ARV (after-repair value).',
    idealBuyer: ['House flippers purchasing and renovating distressed residential properties', 'Investors doing 1–5+ flips per year', 'New investors with a solid renovation plan and exit strategy', 'Experienced operators scaling their flipping business'],
    programs: [
        { title: 'Fix & Flip', description: 'Acquisition + rehab in a single loan.', href: '/commercial-loans/fix-and-flip' },
        { title: 'DSCR (Exit)', description: 'Refinance completed flips into rentals.', href: '/home-loans/dscr-loans' },
    ],
    steps: [
        { number: 1, title: 'Submit the Deal', description: 'Property address, purchase price, rehab budget, and ARV estimate.' },
        { number: 2, title: 'Get Approved', description: 'Fast approval based on the deal, your experience, and credit.' },
        { number: 3, title: 'Close & Draw', description: 'Close quickly, then draw rehab funds as work is completed.' },
        { number: 4, title: 'Sell or Refinance', description: 'Sell the property or refinance into a long-term DSCR rental loan.' },
    ],
    faqs: [
        { question: 'How much experience do I need?', answer: 'Some lenders work with first-time flippers (with higher requirements), while others require 2–3+ completed projects. Your advisor matches you to the right lender.' },
        { question: 'What is the maximum rehab budget?', answer: 'Most programs finance up to 100% of the rehab budget (as part of the total loan), with draws released as work is completed and inspected.' },
        { question: 'What are typical rates?', answer: 'Fix & flip rates range from 9–13% depending on experience, credit, and leverage. Points range from 1–3 origination.' },
    ],
    relatedPages: [
        { title: 'Bridge Loans', href: '/commercial-loans/commercial-bridge-loans', description: 'Short-term commercial' },
        { title: 'Renovation Loans', href: '/home-loans/renovation-loans', description: 'Owner-occupied renovation' },
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Keep as a rental' },
    ],
};
export default function FixFlipPage() { return <BuyPageTemplate data={data} />; }
