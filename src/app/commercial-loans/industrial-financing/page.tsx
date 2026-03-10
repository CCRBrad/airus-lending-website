import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Industrial & Warehouse Financing', description: 'Commercial mortgage financing for industrial, warehouse, manufacturing, and flex space properties. Airus Lending.' };
const data = {
    badge: 'Industrial', title: 'Industrial & Warehouse Financing', subtitle: 'Finance warehouses, distribution centers, manufacturing facilities, and flex/industrial space.',
    overview: 'Industrial real estate has become one of the strongest performing commercial property types. Demand for warehouse, distribution, and logistics space continues to grow with e-commerce. Industrial financing is available for owner-occupants and investors through conventional commercial mortgages, SBA programs, and bridge/construction loans.',
    idealBuyer: ['Business owners purchasing warehouse or manufacturing space', 'Investors acquiring industrial-leased properties', 'Logistics companies expanding distribution capacity', 'Developers building spec industrial or build-to-suit projects'],
    programs: [
        { title: 'Commercial Mortgage', description: 'Permanent financing for stabilized industrial.', href: '/commercial-loans/industrial-financing' },
        { title: 'SBA 504', description: 'Owner-occupied industrial with 10% down.', href: '/sba-loans/sba-504-loans' },
        { title: 'Construction', description: 'Ground-up industrial development.', href: '/commercial-loans/ground-up-construction' },
    ],
    steps: [
        { number: 1, title: 'Property Evaluation', description: 'Assess property type, tenant, lease, and market fundamentals.' },
        { number: 2, title: 'Program Selection', description: 'Commercial mortgage, SBA, or construction — best fit for you.' },
        { number: 3, title: 'Fund & Close', description: 'Smooth execution through appraisal and closing.' },
    ],
    faqs: [
        { question: 'Is industrial easier to finance than other commercial types?', answer: 'Generally yes — industrial properties have strong fundamentals, lower vacancy, and simpler operations compared to retail or office, making them attractive to lenders.' },
        { question: 'Can I use SBA for a warehouse purchase?', answer: 'Yes — if you occupy 51%+ of the building, SBA 504 or 7(a) provide excellent terms for owner-occupied industrial properties.' },
    ],
    relatedPages: [
        { title: 'SBA 504', href: '/sba-loans/sba-504-loans', description: 'Owner-occupied industrial' },
        { title: 'Ground-Up Construction', href: '/commercial-loans/ground-up-construction', description: 'Build new industrial' },
        { title: 'Office Financing', href: '/commercial-loans/office-financing', description: 'Office/flex space' },
    ],
};
export default function IndustrialPage() { return <BuyPageTemplate data={data} />; }
