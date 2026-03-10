import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Multi-Unit Property Loans', description: 'Finance duplexes, triplexes, and fourplexes. Live in one unit, rent the others. Conventional, FHA, and DSCR options. Airus Lending.' };
const data = {
    badge: 'Multi-Unit', title: 'Multi-Unit Property Loans', subtitle: 'Finance duplexes, triplexes, and fourplexes — live in one unit, rent the others, and build wealth through real estate.',
    overview: 'Multi-unit properties (2–4 units) offer a unique opportunity: you can live in one unit and rent the others, using rental income to help qualify for the loan and offset your mortgage payment. FHA, VA, and conventional loans all allow owner-occupied multi-unit purchases, while DSCR programs serve investors buying non-owner-occupied multi-units.',
    idealBuyer: ['House-hackers who want to live in one unit and rent the others', 'First-time investors looking for income-producing primary residences', 'Experienced investors scaling a multi-unit portfolio', 'Veterans using VA benefits for a multi-unit purchase'],
    programs: [
        { title: 'FHA', description: '3.5% down on 2–4 units (owner-occupied).', href: '/home-loans/fha-loans' },
        { title: 'VA', description: 'Zero down on 2–4 units (owner-occupied).', href: '/home-loans/va-loans' },
        { title: 'Conventional', description: '15–25% down for multi-unit investment.', href: '/home-loans/conventional-loans' },
        { title: 'DSCR', description: 'Cash-flow based qualification for investors.', href: '/home-loans/dscr-loans' },
    ],
    steps: [
        { number: 1, title: 'Choose Your Strategy', description: 'Owner-occupied house-hack or pure investment — your strategy determines the program.' },
        { number: 2, title: 'Get Pre-Approved', description: 'Include projected rental income in your qualification analysis.' },
        { number: 3, title: 'Acquire & Manage', description: 'Close on the property and start building passive income.' },
    ],
    faqs: [
        { question: 'Can I use rental income to help qualify?', answer: 'Yes. For owner-occupied multi-units, most programs count 75% of projected rental income from the other units toward your qualifying income.' },
        { question: 'What is house-hacking?', answer: 'House-hacking is buying a multi-unit property, living in one unit, and renting the others. It lets you use owner-occupied financing (lower down payment, better rates) while generating rental income.' },
        { question: 'What about 5+ units?', answer: 'Properties with 5+ units are classified as commercial and require commercial mortgage financing. See our commercial lending page.' },
    ],
    relatedPages: [
        { title: 'Investment Property', href: '/buy/investment-property-loans', description: 'All investor options' },
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Cash-flow based lending' },
        { title: 'Multifamily Financing', href: '/commercial-loans/multifamily-financing', description: '5+ unit commercial' },
    ],
};
export default function MultiUnitPage() { return <BuyPageTemplate data={data} />; }
