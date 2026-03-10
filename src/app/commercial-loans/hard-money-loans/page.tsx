import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Hard Money Commercial Loans', description: 'Asset-based hard money lending for commercial real estate. Fast closings, flexible terms. Airus Lending.' };
const data = {
    badge: 'Hard Money', title: 'Hard Money Commercial Loans', subtitle: 'Asset-based lending with fast closings — when speed and flexibility matter more than rate.',
    overview: 'Hard money loans are short-term, asset-based commercial loans secured primarily by the property value rather than the borrower\'s financial profile. They close fast (often 7–14 days), have minimal documentation requirements, and work when traditional financing can\'t. Higher rates reflect the speed and flexibility.',
    idealBuyer: ['Investors who need to close quickly on an opportunity', 'Borrowers who don\'t qualify for traditional financing', 'Properties that need work before qualifying for permanent financing', 'Time-sensitive acquisitions where speed is essential'],
    programs: [],
    steps: [
        { number: 1, title: 'Submit the Property', description: 'Property address, value, and loan request — that\'s all we need to start.' },
        { number: 2, title: 'Quick Approval', description: 'Approval based on property value and equity, not borrower income.' },
        { number: 3, title: 'Fast Close', description: 'Close in as few as 7–14 business days.' },
    ],
    faqs: [
        { question: 'What are typical hard money rates?', answer: 'Rates range from 10–15% with 2–4 points origination. Higher than traditional lending, but the speed and flexibility justify the cost for time-sensitive deals.' },
        { question: 'What LTV is available?', answer: 'Hard money typically goes up to 60–70% of property value (as-is). Some lenders offer higher LTV based on ARV (after-repair value).' },
    ],
    relatedPages: [
        { title: 'Commercial Bridge', href: '/commercial-loans/commercial-bridge-loans', description: 'Institutional bridge' },
        { title: 'Fix & Flip', href: '/commercial-loans/fix-and-flip', description: 'Residential rehab' },
        { title: 'Bridge Loans', href: '/home-loans/bridge-loans', description: 'Residential bridge' },
    ],
};
export default function HardMoneyPage() { return <BuyPageTemplate data={data} />; }
