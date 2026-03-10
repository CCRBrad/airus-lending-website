import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for Condo Buyers', description: 'Warrantable and non-warrantable condo financing. FHA, VA, conventional, and non-QM options. Airus Lending.' };
const data = {
    badge: 'Condo Buyers', title: 'Condo Buyer Mortgage Solutions', subtitle: 'Warrantable and non-warrantable condo financing — we know the nuances other lenders miss.',
    overview: 'Buying a condo comes with unique lending requirements that most buyers don\'t expect. The condo project itself must meet specific lender standards — owner-occupancy ratios, HOA reserve funding, litigation status, and more. If the project doesn\'t meet these standards, it\'s classified as "non-warrantable" and traditional lenders can\'t finance it. Airus Lending works with programs that handle both warrantable and non-warrantable condos.',
    challenges: [
        { title: 'Project Approval', description: 'The condo complex must be reviewed and approved — not just the individual unit.' },
        { title: 'Non-Warrantable Issues', description: 'Low owner-occupancy, pending litigation, or single-entity ownership can make a condo non-warrantable.' },
        { title: 'HOA Financial Health', description: 'Underfunded reserves or high delinquency rates can affect financing eligibility.' },
    ],
    solutions: [
        { title: 'Conventional Condo', description: 'Standard financing for approved projects.', href: '/home-loans/conventional-loans' },
        { title: 'FHA Condo', description: 'FHA-approved condo financing.', href: '/home-loans/fha-loans' },
        { title: 'VA Condo', description: 'VA-approved projects for veterans.', href: '/home-loans/va-loans' },
        { title: 'Non-QM Condo', description: 'Non-warrantable condo programs.', href: '/home-loans/non-qm-loans' },
    ],
    qualificationTips: [
        'Ask your advisor to check condo project eligibility before you fall in love with a unit.',
        'Request the HOA budget and reserve study — lenders will need these documents.',
        'Check the owner-occupancy ratio — many insurers require at least 50-51% owner-occupied.',
        'If the project is non-warrantable, be prepared for 20-25% down and non-QM terms.',
    ],
    steps: [
        { number: 1, title: 'Project Review', description: 'We check whether the condo complex meets lender standards.' },
        { number: 2, title: 'Pre-Approval', description: 'You know your budget and whether the project qualifies before making an offer.' },
        { number: 3, title: 'Close', description: 'We manage the HOA documentation and condo-specific requirements through closing.' },
    ],
    faqs: [
        { question: 'What makes a condo non-warrantable?', answer: 'Common reasons include: single entity owns 10%+ of units, less than 50% owner-occupied, pending litigation, underfunded reserves, or hotel/condo project structure.' },
        { question: 'Can I still get a loan for a non-warrantable condo?', answer: 'Yes. Non-QM and portfolio lenders offer non-warrantable condo programs — typically with 20-25% down and slightly higher rates.' },
    ],
    ctaHeading: 'Buying a Condo? Check Eligibility First.', ctaDescription: 'We verify project approval and match you with the right program.',
};
export default function CondoBuyersPage() { return <BorrowerTemplate data={data} />; }
