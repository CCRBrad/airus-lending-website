import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Ground-Up Commercial Construction Loans', description: 'Commercial construction financing for new development projects. Multifamily, retail, office, and industrial. Airus Lending.' };
const data = {
    badge: 'Construction', title: 'Ground-Up Construction Loans', subtitle: 'Finance new commercial construction — multifamily, retail, office, industrial, and mixed-use development.',
    overview: 'Ground-up commercial construction loans fund the development of new commercial properties from the ground up. These are complex loans requiring detailed project plans, budgets, and timelines. Interest-only payments during construction convert to permanent financing upon completion. Available for a range of property types.',
    idealBuyer: ['Developers building new apartment communities', 'Business owners constructing purpose-built facilities', 'Investors developing new retail, office, or industrial properties', 'Mixed-use developers'],
    programs: [
        { title: 'Construction-to-Perm', description: 'Single close for construction + permanent financing.', href: '/commercial-loans/ground-up-construction' },
        { title: 'SBA 504', description: 'Owner-occupied new construction with SBA terms.', href: '/sba-loans/sba-504-loans' },
    ],
    steps: [
        { number: 1, title: 'Plans & Budget', description: 'Finalize architectural plans, construction budget, and development timeline.' },
        { number: 2, title: 'Secure Financing', description: 'We source construction capital from banks, private lenders, or SBA.' },
        { number: 3, title: 'Build Phase', description: 'Interest-only during construction with draw-based funding.' },
        { number: 4, title: 'Stabilize & Convert', description: 'Complete construction, lease up, and convert to permanent financing.' },
    ],
    faqs: [
        { question: 'What is the typical LTC for commercial construction?', answer: 'Loan-to-cost (LTC) typically ranges from 65–80% for commercial construction. The borrower contributes 20–35% of total project cost as equity.' },
        { question: 'How are funds disbursed?', answer: 'Construction loans use a draw schedule — funds are released in stages as construction milestones are completed and inspected.' },
    ],
    relatedPages: [
        { title: 'Multifamily', href: '/commercial-loans/multifamily-financing', description: 'Apartment development' },
        { title: 'SBA 504', href: '/sba-loans/sba-504-loans', description: 'Owner-occupied construction' },
        { title: 'Commercial Bridge', href: '/commercial-loans/commercial-bridge-loans', description: 'Short-term capital' },
    ],
};
export default function GroundUpPage() { return <BuyPageTemplate data={data} />; }
