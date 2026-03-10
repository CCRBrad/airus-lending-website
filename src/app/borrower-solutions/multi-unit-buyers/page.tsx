import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for Multi-Unit Buyers', description: 'Finance duplexes, triplexes, and fourplexes. House-hack with FHA, VA, or conventional. Airus Lending.' };
const data = {
    badge: 'Multi-Unit', title: 'Multi-Unit Buyer Solutions', subtitle: 'House-hack your way to wealth — live in one unit, rent the others, and build equity through rental income.',
    overview: 'Multi-unit properties (2–4 units) are one of the smartest first investments you can make. FHA and VA allow owner-occupied purchase with low or no down payment, and the rental income from other units helps you qualify and covers your mortgage. For investors, conventional and DSCR programs finance 2–4 units as pure investment properties. Properties with 5+ units require commercial financing.',
    challenges: [
        { title: 'Higher Purchase Prices', description: 'Multi-unit properties cost more than single-family — but rental income offsets this significantly.' },
        { title: 'Property Management', description: 'Managing tenants requires time and systems, though many buyers find it manageable for 2–4 units.' },
        { title: 'Different Loan Limits', description: 'FHA and conventional limits are higher for multi-unit properties, but vary by county.' },
    ],
    solutions: [
        { title: 'FHA Multi-Unit', description: '3.5% down on 2–4 units (owner-occupied).', href: '/home-loans/fha-loans' },
        { title: 'VA Multi-Unit', description: 'Zero down on 2–4 units for veterans.', href: '/home-loans/va-loans' },
        { title: 'Conventional Multi-Unit', description: '15–25% down for investors.', href: '/home-loans/conventional-loans' },
        { title: 'DSCR Multi-Unit', description: 'Cash-flow qualification for investors.', href: '/home-loans/dscr-loans' },
    ],
    qualificationTips: [
        'Owner-occupied multi-units qualify for the best terms — live in one unit for at least 12 months.',
        '75% of projected rental income from other units can be used to help you qualify.',
        'Multi-unit FHA limits are significantly higher than single-family limits (up to $1.3M+ in high-cost areas).',
        'For pure investment, DSCR programs allow qualification based on total property cash flow.',
    ],
    steps: [
        { number: 1, title: 'Strategy', description: 'Owner-occupied house-hack or pure investment? Your strategy sets the program.' },
        { number: 2, title: 'Pre-Approval', description: 'Include projected rental income in your qualification — it helps significantly.' },
        { number: 3, title: 'Acquire & Manage', description: 'Close, move in (if owner-occupied), and start building passive income.' },
    ],
    faqs: [
        { question: 'Can I really put only 3.5% down on a fourplex?', answer: 'Yes — with FHA, you can purchase a 2–4 unit property with just 3.5% down as long as you live in one of the units. VA allows zero down on 2–4 units for eligible veterans.' },
        { question: 'What is house-hacking?', answer: 'Buying a multi-unit property, living in one unit, and renting the others. It lets you use owner-occupied loan terms while generating rental income that helps cover your mortgage.' },
    ],
    ctaHeading: 'Ready to House-Hack?', ctaDescription: 'Get pre-approved for a multi-unit purchase with rental income qualification.',
};
export default function MultiUnitBuyersPage() { return <BorrowerTemplate data={data} />; }
