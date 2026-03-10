import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Owner-Occupied Commercial Mortgage', description: 'SBA and conventional financing for purchasing the building your business occupies. 10% down with SBA 504. Airus Lending.' };
const data = {
    badge: 'Owner-Occupied', title: 'Owner-Occupied Commercial Mortgage', subtitle: 'Stop paying rent — purchase the building your business operates from with SBA or conventional commercial financing.',
    overview: 'If your business rents its space, purchasing the building you operate from can be one of the best business decisions you make. Owner-occupied commercial mortgages — especially SBA 504 loans — offer low down payments (10%), fixed rates, and long terms. Owning your building builds equity, locks in your occupancy costs, and provides potential tax benefits.',
    idealBuyer: ['Business owners renting who want to buy their building', 'Companies expanding into new, purchased facilities', 'Professionals (medical, legal, dental) purchasing practice space', 'Business owners wanting to build an asset while operating their company'],
    programs: [
        { title: 'SBA 504', description: '10% down, fixed-rate owner-occupied.', href: '/sba-loans/sba-504-loans' },
        { title: 'SBA 7(a)', description: 'Flexible owner-occupied financing.', href: '/sba-loans/sba-7a-loans' },
        { title: 'Conventional Commercial', description: 'Non-SBA options for strong borrowers.', href: '/commercial-loans' },
    ],
    steps: [
        { number: 1, title: 'Needs Assessment', description: 'What size, location, and type of building does your business need?' },
        { number: 2, title: 'Program Selection', description: 'SBA 504, SBA 7(a), or conventional — best fit for your situation.' },
        { number: 3, title: 'Purchase & Occupy', description: 'Close on the building and start building equity instead of paying rent.' },
    ],
    faqs: [
        { question: 'What is the 51% occupancy requirement?', answer: 'SBA programs require the business to occupy at least 51% of the building. The remaining space can be leased to tenants.' },
        { question: 'Should I choose SBA 504 or 7(a)?', answer: 'SBA 504 offers the lowest down payment (10%) and fixed rates for real estate. SBA 7(a) is more flexible if you need working capital or equipment in addition to real estate.' },
    ],
    relatedPages: [
        { title: 'SBA 504', href: '/sba-loans/sba-504-loans', description: 'Fixed-rate commercial RE' },
        { title: 'SBA 7(a)', href: '/sba-loans/sba-7a-loans', description: 'Flexible SBA' },
        { title: '7(a) vs 504', href: '/compare/sba-7a-vs-504', description: 'Compare programs' },
    ],
};
export default function OwnerOccPage() { return <BuyPageTemplate data={data} />; }
