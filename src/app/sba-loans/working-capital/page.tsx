import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'SBA Working Capital Loans', description: 'SBA working capital financing for inventory, payroll, marketing, and day-to-day business operations. Airus Lending.' };
const data = {
    badge: 'Working Capital', title: 'Working Capital Financing', subtitle: 'Fund inventory, payroll, marketing, and daily operations with SBA-backed working capital — keep your business growing.',
    overview: 'Working capital loans provide the cash businesses need for day-to-day operations — inventory, payroll, marketing, seasonal expenses, and growth initiatives. SBA 7(a) and SBA Express are the primary programs for working capital, offering lower rates and longer terms than most alternative business lenders.',
    idealBuyer: ['Growing businesses needing cash for expansion', 'Seasonal businesses managing cash flow gaps', 'Companies building inventory for large orders', 'Businesses funding marketing and growth initiatives'],
    programs: [
        { title: 'SBA 7(a)', description: 'Up to $5M with 7-10 year terms.', href: '/sba-loans/sba-7a-loans' },
        { title: 'SBA Express', description: 'Fast approval up to $500K.', href: '/sba-loans/sba-express-loans' },
        { title: 'SBA Line of Credit', description: 'Revolving credit for ongoing needs.', href: '/sba-loans/working-capital' },
    ],
    steps: [
        { number: 1, title: 'Assess Needs', description: 'How much working capital do you need and for what purpose?' },
        { number: 2, title: 'Program Match', description: 'Term loan, line of credit, or Express — matched to your cash flow.' },
        { number: 3, title: 'Fund & Deploy', description: 'Receive capital and deploy it toward growth.' },
    ],
    faqs: [
        { question: 'What can working capital be used for?', answer: 'Virtually any legitimate business purpose — inventory, payroll, marketing, rent, insurance, hiring, equipment maintenance, and other operating expenses.' },
        { question: 'How long are working capital terms?', answer: 'SBA working capital loans typically have 7–10 year terms. Lines of credit may be shorter (5 years) with annual renewal.' },
    ],
    relatedPages: [
        { title: 'SBA Express', href: '/sba-loans/sba-express-loans', description: 'Fast capital under $500K' },
        { title: 'SBA 7(a)', href: '/sba-loans/sba-7a-loans', description: 'Full SBA program' },
        { title: 'Equipment', href: '/sba-loans/equipment-financing', description: 'Equipment purchases' },
    ],
};
export default function WorkingCapitalPage() { return <BuyPageTemplate data={data} />; }
