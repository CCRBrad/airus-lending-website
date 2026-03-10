import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Condo Loans', description: 'Warrantable and non-warrantable condo financing. FHA, VA, conventional, and non-QM options. Airus Lending.' };
const data = {
    badge: 'Condos', title: 'Condo Loans', subtitle: 'Warrantable and non-warrantable condo financing with flexible guidelines — we know the nuances of condo lending.',
    overview: 'Buying a condominium comes with unique lending requirements that don\'t apply to single-family homes. The condo complex itself must meet specific standards — occupancy ratios, reserve funding, litigation status, and HOA financial health. Airus Lending works with lenders who understand condo lending, including programs for non-warrantable condos that most banks won\'t finance.',
    idealBuyer: ['Buyers purchasing a warrantable or non-warrantable condo', 'First-time buyers looking for an affordable entry point', 'Investors purchasing a condo as a rental property', 'Buyers whose desired condo has been turned down by other lenders'],
    programs: [
        { title: 'Conventional', description: 'Standard condo financing for Fannie/Freddie-approved projects.', href: '/home-loans/conventional-loans' },
        { title: 'FHA', description: 'FHA-approved condos with low down payment.', href: '/home-loans/fha-loans' },
        { title: 'VA', description: 'VA-approved condos for eligible veterans.', href: '/home-loans/va-loans' },
        { title: 'Non-QM', description: 'Non-warrantable condo programs.', href: '/home-loans/non-qm-loans' },
    ],
    steps: [
        { number: 1, title: 'Verify Condo Eligibility', description: 'We check whether the project is warrantable and approved.' },
        { number: 2, title: 'Get Pre-Approved', description: 'Know your budget and program options.' },
        { number: 3, title: 'Make an Offer & Close', description: 'Your advisor manages financing through closing.' },
    ],
    faqs: [
        { question: 'What is a warrantable condo?', answer: 'A warrantable condo meets Fannie Mae/Freddie Mac guidelines for occupancy ratios, reserve funding, HOA financial health, and litigation status. Non-warrantable condos fail one or more of these tests.' },
        { question: 'Can I finance a non-warrantable condo?', answer: 'Yes. Non-QM and portfolio lenders offer non-warrantable condo programs. These have higher down payments (typically 20–25%) but provide financing that conventional lenders cannot.' },
    ],
    relatedPages: [
        { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Standard condo financing' },
        { title: 'Non-QM Loans', href: '/home-loans/non-qm-loans', description: 'Non-warrantable options' },
        { title: 'First-Time Homebuyer', href: '/buy/first-time-homebuyer', description: 'First-time buyer programs' },
    ],
};
export default function CondoLoansPage() { return <BuyPageTemplate data={data} />; }
