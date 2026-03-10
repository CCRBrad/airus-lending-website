import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Primary Residence Loans', description: 'Financing for your primary home. Conventional, FHA, VA, USDA and more. Competitive rates and flexible terms from Airus Lending.' };
const data = {
    badge: 'Primary Home', title: 'Primary Residence Loans', subtitle: 'The widest selection of loan programs is available for your primary home — find the best rates and terms for where you\'ll live.',
    overview: 'Purchasing a primary residence gives you access to the broadest range of mortgage programs, the lowest rates, and the most favorable terms. From government-backed options like FHA and VA to conventional and jumbo programs, financing your primary home is where you\'ll find the most borrower-friendly options in the market.',
    idealBuyer: ['Anyone purchasing a home they plan to live in as their primary residence', 'Buyers upgrading to a larger home', 'Homeowners relocating for work or lifestyle', 'Repeat buyers looking for the best available rate and terms'],
    programs: [
        { title: 'Conventional', description: 'As low as 3% down with competitive rates.', href: '/home-loans/conventional-loans' },
        { title: 'FHA', description: '3.5% down with flexible credit guidelines.', href: '/home-loans/fha-loans' },
        { title: 'VA', description: 'Zero down for veterans and active military.', href: '/home-loans/va-loans' },
        { title: 'Jumbo', description: 'Above conforming limits for high-value homes.', href: '/home-loans/jumbo-loans' },
    ],
    steps: [
        { number: 1, title: 'Get Pre-Approved', description: 'Understand your budget and loan options.' },
        { number: 2, title: 'Find Your Home', description: 'Search with confidence knowing exactly what you qualify for.' },
        { number: 3, title: 'Make an Offer', description: 'Use your pre-approval to make a strong, competitive offer.' },
        { number: 4, title: 'Close & Move In', description: 'We handle the rest — underwriting, appraisal, and closing.' },
    ],
    faqs: [
        { question: 'What counts as a primary residence?', answer: 'A primary residence is the home where you live most of the year. Most lenders require you to occupy it within 60 days of closing.' },
        { question: 'Do I get better rates on a primary residence?', answer: 'Yes. Primary residences consistently receive the lowest available rates compared to second homes and investment properties.' },
    ],
    relatedPages: [
        { title: 'Second Home Loans', href: '/buy/second-home-loans', description: 'Vacation property financing' },
        { title: 'Investment Property', href: '/buy/investment-property-loans', description: 'Rental property financing' },
        { title: 'Loan Programs', href: '/home-loans', description: 'All available programs' },
    ],
};
export default function PrimaryResPage() { return <BuyPageTemplate data={data} />; }
