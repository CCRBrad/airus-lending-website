import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'New Construction Loans', description: 'Build your dream home with one-time close and two-close construction loans. FHA, VA, and conventional options. Airus Lending.' };
const data = {
    badge: 'New Build', title: 'New Construction Loans', subtitle: 'Build your dream home from the ground up — single-close and two-close construction-to-permanent financing options.',
    overview: 'Building a new home requires specialized construction financing that covers the building phase and transitions to a permanent mortgage. Airus Lending offers one-time close (OTC) programs that combine both into a single loan, as well as traditional two-close structures. Available through conventional, FHA, and VA programs.',
    idealBuyer: ['Buyers building a custom home on their own land', 'Buyers purchasing from a builder/developer', 'Veterans who want to build with zero-down VA construction', 'Anyone wanting to design and build their ideal home'],
    programs: [
        { title: 'One-Time Close', description: 'Single closing for construction + permanent.', href: '/home-loans/one-time-close-construction' },
        { title: 'VA Construction', description: 'Zero down for eligible veterans.', href: '/home-loans/va-construction-loans' },
        { title: 'Conventional Construction', description: 'Competitive terms for strong borrowers.', href: '/home-loans/conventional-construction-loans' },
        { title: 'FHA 203k', description: 'Renovation/rehab financing.', href: '/home-loans/fha-203k-loans' },
    ],
    steps: [
        { number: 1, title: 'Plans & Budget', description: 'Finalize your plans, specs, and construction budget with a licensed builder.' },
        { number: 2, title: 'Pre-Approval', description: 'Get pre-approved based on the project plan and your financial profile.' },
        { number: 3, title: 'Build Phase', description: 'Interest-only payments during construction with draw-based funding.' },
        { number: 4, title: 'Conversion', description: 'Loan converts to permanent mortgage — start full payments.' },
    ],
    faqs: [
        { question: 'Do I need a builder?', answer: 'Yes — most construction loan programs require a licensed, insured general contractor. Some programs allow owner-builders under certain conditions.' },
        { question: 'Can I buy land and build with one loan?', answer: 'Yes — many OTC programs include land acquisition in the financing package.' },
    ],
    relatedPages: [
        { title: 'One-Time Close', href: '/home-loans/one-time-close-construction', description: 'Single-close construction' },
        { title: 'VA Construction', href: '/home-loans/va-construction-loans', description: 'VA zero-down construction' },
        { title: 'Renovation Loans', href: '/home-loans/renovation-loans', description: 'Finance purchase + improvements' },
    ],
};
export default function NewConstructionPage() { return <BuyPageTemplate data={data} />; }
