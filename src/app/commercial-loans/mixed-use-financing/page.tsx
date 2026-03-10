import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Mixed-Use Property Financing', description: 'Commercial mortgage financing for mixed-use properties with retail, office, and residential components. Airus Lending.' };
const data = {
    badge: 'Mixed-Use', title: 'Mixed-Use Property Financing', subtitle: 'Finance properties that combine commercial and residential — retail on the ground floor, apartments above.',
    overview: 'Mixed-use properties combine commercial space (retail, office, restaurant) with residential units in the same building. Financing depends on the commercial-to-residential ratio. If the property is majority residential with a small commercial component, residential programs may apply. If it is majority commercial, commercial mortgage programs are required.',
    idealBuyer: ['Investors purchasing mixed-use buildings', 'Business owners buying a building with their business on the ground floor', 'Developers building new mixed-use projects', 'Owners refinancing existing mixed-use properties'],
    programs: [
        { title: 'Commercial Mortgage', description: 'Full commercial financing for mixed-use.', href: '/commercial-loans/mixed-use-financing' },
        { title: 'SBA 504', description: 'Owner-occupied mixed-use with SBA benefits.', href: '/sba-loans/sba-504-loans' },
        { title: 'Bridge', description: 'Short-term for acquisitions and value-add.', href: '/commercial-loans/commercial-bridge-loans' },
    ],
    steps: [
        { number: 1, title: 'Property Analysis', description: 'We assess the commercial/residential ratio and determine the right program.' },
        { number: 2, title: 'Financing Strategy', description: 'Commercial mortgage, SBA, or residential — matched to the property.' },
        { number: 3, title: 'Close', description: 'Coordinate appraisal and underwriting for a smooth closing.' },
    ],
    faqs: [
        { question: 'When is a mixed-use property considered residential?', answer: 'If the residential portion is 51%+ of the building by area or revenue, some residential programs (FHA, conventional) may apply. Otherwise, commercial financing is required.' },
        { question: 'Can I use SBA for mixed-use?', answer: 'Yes — if you occupy 51%+ of the building for your own business, SBA 504 or 7(a) may apply, even with tenant spaces.' },
    ],
    relatedPages: [
        { title: 'Multifamily', href: '/commercial-loans/multifamily-financing', description: 'Pure residential 5+ units' },
        { title: 'SBA 504', href: '/sba-loans/sba-504-loans', description: 'Owner-occupied commercial' },
        { title: 'Commercial Bridge', href: '/commercial-loans/commercial-bridge-loans', description: 'Short-term capital' },
    ],
};
export default function MixedUsePage() { return <BuyPageTemplate data={data} />; }
