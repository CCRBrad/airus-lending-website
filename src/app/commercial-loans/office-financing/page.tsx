import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Office Building Financing', description: 'Commercial mortgage financing for office buildings, professional buildings, and medical offices. Airus Lending.' };
const data = {
    badge: 'Office', title: 'Office Building Financing', subtitle: 'Purchase, refinance, or construct office properties — from single-tenant professional buildings to multi-story office complexes.',
    overview: 'Office property financing covers a wide range of commercial real estate — small professional buildings, medical office, suburban office parks, and urban high-rises. Lenders evaluate tenant quality, lease terms, occupancy rates, and location when underwriting office loans. Owner-occupied office buildings may qualify for SBA programs with better terms.',
    idealBuyer: ['Business owners purchasing their own office space', 'Investors acquiring leased office properties', 'Medical professionals buying practice space', 'Developers building new office projects'],
    programs: [
        { title: 'Commercial Mortgage', description: 'Permanent financing for stabilized office.', href: '/commercial-loans/office-financing' },
        { title: 'SBA 504', description: 'Owner-occupied office with 10% down.', href: '/sba-loans/sba-504-loans' },
        { title: 'Bridge', description: 'Short-term for value-add and lease-up.', href: '/commercial-loans/commercial-bridge-loans' },
    ],
    steps: [
        { number: 1, title: 'Property & Tenant Review', description: 'We assess the property, tenancy, lease terms, and market conditions.' },
        { number: 2, title: 'Financing Strategy', description: 'Commercial mortgage, SBA, or bridge — matched to your situation.' },
        { number: 3, title: 'Close', description: 'Coordinate appraisal, environmental, and closing.' },
    ],
    faqs: [
        { question: 'Can I finance a single-tenant office building?', answer: 'Yes, but lenders may require longer lease terms, stronger tenant credit, or additional collateral for single-tenant properties.' },
        { question: 'Is SBA available for office purchases?', answer: 'Yes — if you occupy 51%+ of the building, SBA 504 or 7(a) loans offer lower down payments and favorable terms.' },
    ],
    relatedPages: [
        { title: 'SBA 504', href: '/sba-loans/sba-504-loans', description: 'Owner-occupied commercial' },
        { title: 'Commercial Bridge', href: '/commercial-loans/commercial-bridge-loans', description: 'Acquisition capital' },
        { title: 'Mixed-Use', href: '/commercial-loans/mixed-use-financing', description: 'Office + residential' },
    ],
};
export default function OfficePage() { return <BuyPageTemplate data={data} />; }
