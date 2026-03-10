import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'SBA Equipment Financing', description: 'Finance major business equipment purchases with SBA 7(a) or 504 loans. Long terms, low rates. Airus Lending.' };
const data = {
    badge: 'Equipment', title: 'Equipment Financing', subtitle: 'Finance major equipment purchases with SBA-backed long-term loans — preserve cash while upgrading your capabilities.',
    overview: 'Major equipment purchases are essential for many businesses but can drain cash reserves. SBA equipment financing provides long-term loans (10–25 years depending on the program and equipment life) at competitive rates. SBA 7(a) handles most equipment financing, while SBA 504 is available for equipment purchases of $100K+ as part of larger projects.',
    idealBuyer: ['Manufacturing companies purchasing production equipment', 'Construction firms acquiring heavy equipment', 'Medical practices buying diagnostic equipment', 'Any business making a major equipment investment'],
    programs: [
        { title: 'SBA 7(a)', description: 'Up to $5M for equipment purchases.', href: '/sba-loans/sba-7a-loans' },
        { title: 'SBA 504', description: 'Fixed rates for major equipment ($100K+).', href: '/sba-loans/sba-504-loans' },
        { title: 'SBA Express', description: 'Fast approval for equipment under $500K.', href: '/sba-loans/sba-express-loans' },
    ],
    steps: [
        { number: 1, title: 'Identify Equipment', description: 'Specify the equipment, vendor, cost, and purpose.' },
        { number: 2, title: 'Program Match', description: '7(a), 504, or Express — based on amount and timeline.' },
        { number: 3, title: 'Finance & Acquire', description: 'Close the loan and purchase your equipment.' },
    ],
    faqs: [
        { question: 'What is the maximum term for equipment?', answer: 'SBA equipment loans are typically limited to the useful life of the equipment, up to 10 years for most equipment or 25 years through SBA 504 for major assets.' },
        { question: 'Can I finance used equipment?', answer: 'Yes — SBA loans can finance both new and used equipment, subject to appraisal and useful life requirements.' },
    ],
    relatedPages: [
        { title: 'SBA 7(a)', href: '/sba-loans/sba-7a-loans', description: 'Core equipment program' },
        { title: 'Working Capital', href: '/sba-loans/working-capital', description: 'Operating capital' },
        { title: 'SBA Calculator', href: '/calculators/sba-loan-calculator', description: 'Estimate payments' },
    ],
};
export default function EquipmentPage() { return <BuyPageTemplate data={data} />; }
