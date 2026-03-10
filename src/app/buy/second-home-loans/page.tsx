import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Second Home Loans', description: 'Finance a vacation home or second property. Conventional and jumbo options with competitive rates. Airus Lending.' };
const data = {
    badge: 'Second Home', title: 'Second Home Loans', subtitle: 'Finance your vacation home, weekend house, or seasonal property with programs designed for second-home buyers.',
    overview: 'Second home financing allows you to purchase a property you intend to occupy part-time — a vacation home, beach house, mountain retreat, or weekend property. Second homes have different lending requirements than primary residences or investment properties, with slightly higher down payments but still competitive rates.',
    idealBuyer: ['Buyers purchasing a vacation or seasonal property', 'Families wanting a weekend retreat', 'Professionals maintaining homes in two locations', 'Pre-retirees buying a future retirement home'],
    programs: [
        { title: 'Conventional', description: '10% down, competitive rates for second homes.', href: '/home-loans/conventional-loans' },
        { title: 'Jumbo', description: 'High-value second home financing.', href: '/home-loans/jumbo-loans' },
    ],
    steps: [
        { number: 1, title: 'Get Pre-Approved', description: 'Know your second-home budget and program options.' },
        { number: 2, title: 'Find Your Property', description: 'Search for the right vacation or seasonal home.' },
        { number: 3, title: 'Make an Offer & Close', description: 'Your advisor manages the financing through closing.' },
    ],
    faqs: [
        { question: 'What is the minimum down payment for a second home?', answer: 'Most conventional programs require 10% down for a second home. Jumbo programs may require 10–20%.' },
        { question: 'Can I rent out my second home?', answer: 'Limited rental is typically allowed (e.g., seasonal rental), but if the property is primarily rented out, it may be classified as an investment property with different requirements.' },
        { question: 'Are second home rates higher than primary?', answer: 'Usually slightly higher — typically 0.125–0.375% more than a primary residence rate for the same credit profile.' },
    ],
    relatedPages: [
        { title: 'Primary Residence', href: '/buy/primary-residence-loans', description: 'Main home financing' },
        { title: 'Investment Property', href: '/buy/investment-property-loans', description: 'Rental property loans' },
        { title: 'Jumbo Loans', href: '/home-loans/jumbo-loans', description: 'High-value financing' },
    ],
};
export default function SecondHomePage() { return <BuyPageTemplate data={data} />; }
