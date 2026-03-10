import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'SBA 7(a) Loans', description: 'SBA 7(a) loans up to $5M for business acquisition, working capital, equipment, and real estate. Flexible and versatile. Airus Lending.' };
const data = {
    badge: 'SBA 7(a)', title: 'SBA 7(a) Loans', subtitle: 'The most versatile SBA program — up to $5M for working capital, equipment, real estate, and business acquisition.',
    overview: 'The SBA 7(a) loan is the flagship program of the Small Business Administration. It provides up to $5 million in flexible financing for nearly any legitimate business purpose — from working capital and equipment to commercial real estate purchase and business acquisition. The SBA guarantees a portion of the loan, which allows lenders to offer lower down payments (10–20%), longer terms (7–25 years), and more flexible credit requirements than conventional commercial loans.',
    idealBuyer: ['Businesses acquiring commercial real estate', 'Entrepreneurs buying existing businesses', 'Companies needing working capital or equipment', 'Business owners refinancing existing debt'],
    programs: [],
    steps: [
        { number: 1, title: 'Initial Review', description: 'We assess your business plan, financials, and loan purpose.' },
        { number: 2, title: 'Application', description: 'Prepare and submit your complete SBA application package.' },
        { number: 3, title: 'Underwriting', description: 'SBA and lender review — typically 30–60 days.' },
        { number: 4, title: 'Closing & Funding', description: 'Final approval, closing documentation, and disbursement.' },
    ],
    faqs: [
        { question: 'What can I use a 7(a) loan for?', answer: 'Almost any legitimate business purpose: real estate, equipment, working capital, inventory, business acquisition, partner buyout, debt refinancing, and more.' },
        { question: 'What are the rates?', answer: 'SBA 7(a) rates are based on the prime rate plus a margin (1.5–2.75%). Rates can be fixed or variable depending on the lender and loan amount.' },
        { question: 'What is the guarantee fee?', answer: 'The SBA charges a guarantee fee of 0–3.75% depending on loan amount. This is a one-time fee that can be financed into the loan.' },
        { question: 'What collateral is required?', answer: 'Loans under $500K may not require specific collateral. Above that, the SBA requires the lender to collateralize the loan with available business and personal assets, though lack of collateral alone is not grounds for denial.' },
    ],
    relatedPages: [
        { title: 'SBA 504', href: '/sba-loans/sba-504-loans', description: 'Fixed-rate real estate' },
        { title: 'SBA Express', href: '/sba-loans/sba-express-loans', description: 'Faster, simpler' },
        { title: 'SBA 7(a) vs 504', href: '/compare/sba-7a-vs-504', description: 'Compare programs' },
    ],
};
export default function SBA7aPage() { return <BuyPageTemplate data={data} />; }
