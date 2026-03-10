import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Retail Property Financing', description: 'Commercial mortgage financing for retail centers, strip malls, and NNN properties. Airus Lending.' };
const data = {
    badge: 'Retail', title: 'Retail Property Financing', subtitle: 'Finance shopping centers, strip malls, freestanding retail, and NNN-leased properties.',
    overview: 'Retail property financing covers everything from single-tenant net-leased (NNN) properties to multi-tenant strip centers and anchored shopping centers. Lenders focus on tenant quality, lease structures, foot traffic, and location. NNN properties with credit tenants often secure the best terms due to stable, predictable cash flows.',
    idealBuyer: ['Investors acquiring NNN-leased retail properties', 'Owners purchasing strip centers and shopping plazas', 'Business owners buying their retail location', 'Developers building retail or mixed-use retail projects'],
    programs: [
        { title: 'Commercial Mortgage', description: 'Permanent financing for stabilized retail.', href: '/commercial-loans/retail-financing' },
        { title: 'SBA 504 / 7(a)', description: 'Owner-occupied retail space.', href: '/sba-loans' },
        { title: 'Bridge', description: 'Short-term capital for repositioning.', href: '/commercial-loans/commercial-bridge-loans' },
    ],
    steps: [
        { number: 1, title: 'Property Analysis', description: 'Review tenant mix, lease terms, occupancy, and NOI.' },
        { number: 2, title: 'Secure Financing', description: 'Match permanent, SBA, or bridge based on property and borrower.' },
        { number: 3, title: 'Close', description: 'Appraisal, environmental, and closing coordination.' },
    ],
    faqs: [
        { question: 'What are NNN leases?', answer: 'Triple-net (NNN) leases require the tenant to pay property taxes, insurance, and maintenance in addition to rent. This shifts operating costs to the tenant, creating very predictable net income for the owner.' },
        { question: 'Are retail properties harder to finance?', answer: 'Credit-tenant NNN properties are among the easiest commercial properties to finance. Multi-tenant centers require stronger occupancy and diversified tenant mix.' },
    ],
    relatedPages: [
        { title: 'Office Financing', href: '/commercial-loans/office-financing', description: 'Office property options' },
        { title: 'Mixed-Use', href: '/commercial-loans/mixed-use-financing', description: 'Retail + residential' },
        { title: 'SBA Loans', href: '/sba-loans', description: 'Owner-occupied options' },
    ],
};
export default function RetailPage() { return <BuyPageTemplate data={data} />; }
