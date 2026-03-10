import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Business Acquisition Financing', description: 'Finance the purchase of an existing business using SBA 7(a) and conventional commercial loans. Airus Lending.' };
const data = {
    badge: 'Acquisition', title: 'Business Acquisition Financing', subtitle: 'Buy an existing business — the SBA 7(a) program is the most common financing tool for business acquisitions.',
    overview: 'Buying an existing business is one of the most reliable paths to business ownership. SBA 7(a) loans are the most common financing vehicle, covering the purchase price including inventory, equipment, real estate, and goodwill. The SBA allows buyers to purchase businesses with as little as 10–20% equity injection, with 10-year terms for business acquisitions.',
    idealBuyer: ['Entrepreneurs acquiring their first business', 'Business owners acquiring competitors or complementary businesses', 'Management teams executing buyouts', 'Investors purchasing established, cash-flowing businesses'],
    programs: [
        { title: 'SBA 7(a)', description: 'Up to $5M for business acquisition.', href: '/sba-loans/sba-7a-loans' },
        { title: 'Seller Financing', description: 'Often combined with SBA for a complete package.', href: '/sba-loans/business-acquisition' },
    ],
    steps: [
        { number: 1, title: 'Business Due Diligence', description: 'Review financials, tax returns, and business valuation.' },
        { number: 2, title: 'Structure the Deal', description: 'SBA financing + seller note + equity — we help structure the optimal package.' },
        { number: 3, title: 'SBA Application', description: 'Submit your business plan, projections, and acquisition package.' },
        { number: 4, title: 'Close & Transition', description: 'SBA approval, closing, and ownership transition.' },
    ],
    faqs: [
        { question: 'How much equity do I need?', answer: 'SBA typically requires 10–20% equity injection for business acquisitions. Seller notes on standby (no payments for 24 months) can sometimes count toward this requirement.' },
        { question: 'What does the SBA count as purchase price?', answer: 'The total project cost includes the business purchase price, inventory, equipment, real estate (if included), working capital, and closing costs.' },
        { question: 'Can seller financing be part of the deal?', answer: 'Yes — and it is very common. Many SBA acquisition deals include seller financing on full standby (no payments for 24 months) as part of the equity injection structure.' },
    ],
    relatedPages: [
        { title: 'SBA 7(a)', href: '/sba-loans/sba-7a-loans', description: 'Core acquisition program' },
        { title: 'Partner Buyout', href: '/sba-loans/partner-buyout', description: 'Buy out a partner' },
        { title: 'SBA Calculator', href: '/calculators/sba-loan-calculator', description: 'Estimate payments' },
    ],
};
export default function BizAcquisitionPage() { return <BuyPageTemplate data={data} />; }
