import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'First-Time Homebuyer Programs', description: 'First-time homebuyer programs with low down payments, flexible credit, and step-by-step guidance. Explore FHA, conventional, and DPA options with Airus Lending.' };
const data = {
    badge: 'First-Time Buyer', title: 'First-Time Homebuyer Programs', subtitle: 'Low down payments, flexible credit, down payment assistance, and step-by-step guidance — everything you need for your first home.',
    overview: 'Buying your first home can feel overwhelming, but the right loan program and the right advisor make all the difference. First-time buyers have access to exclusive programs with lower down payments, flexible credit requirements, and government-backed benefits that repeat buyers may not qualify for. At Airus Lending, we specialize in guiding first-time buyers through the process with clarity and confidence.',
    idealBuyer: ['Renters ready to build equity through homeownership', 'Buyers who haven\'t owned a home in the last 3 years', 'Individuals with limited savings for a down payment', 'Borrowers with moderate credit looking for flexible options', 'Anyone buying their first property and unsure of the process'],
    programs: [
        { title: 'FHA Loans', description: '3.5% down, flexible credit, government-backed.', href: '/home-loans/fha-loans' },
        { title: 'Conventional 3% Down', description: 'Low down payment for strong credit profiles.', href: '/home-loans/conventional-loans' },
        { title: 'VA Loans', description: 'Zero down for eligible veterans and service members.', href: '/home-loans/va-loans' },
        { title: 'USDA Loans', description: '100% financing in eligible areas.', href: '/home-loans/usda-loans' },
        { title: 'Down Payment Assistance', description: 'Grants and forgivable loans to help.', href: '/home-loans/down-payment-assistance' },
    ],
    steps: [
        { number: 1, title: 'Get Pre-Approved', description: 'Know your budget and loan options before you start looking at homes.' },
        { number: 2, title: 'Find Your Home', description: 'Work with a real estate agent and use your pre-approval to strengthen your offer.' },
        { number: 3, title: 'Go Under Contract', description: 'Submit your offer, negotiate terms, and go under contract.' },
        { number: 4, title: 'Close & Move In', description: 'We handle underwriting and closing. You get the keys.' },
    ],
    faqs: [
        { question: 'What credit score do I need as a first-time buyer?', answer: 'FHA loans allow scores as low as 580 with 3.5% down. Conventional programs typically require 620+. VA and USDA have no set minimum (lender overlays apply).' },
        { question: 'How much do I need for a down payment?', answer: 'As little as 0% (VA/USDA), 3% (conventional), or 3.5% (FHA). Down payment assistance programs can also help cover these costs.' },
        { question: 'What is a pre-approval and why does it matter?', answer: 'A pre-approval letter shows sellers that you\'re a qualified, serious buyer. It tells you how much you can borrow and at what terms — giving you confidence before you start shopping.' },
        { question: 'How long does it take to close?', answer: 'Most purchase transactions close in 21–30 days from contract. Your advisor keeps the process on track.' },
    ],
    relatedPages: [
        { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Most popular for first-time buyers' },
        { title: 'Down Payment Assistance', href: '/home-loans/down-payment-assistance', description: 'Help with upfront costs' },
        { title: 'Mortgage Calculator', href: '/calculators/mortgage-calculator', description: 'Estimate your payment' },
    ],
    ctaHeading: 'Ready to Buy Your First Home?', ctaDescription: 'Get pre-approved in minutes — no hard credit pull, no obligation.',
};
export default function FirstTimeBuyerPage() { return <BuyPageTemplate data={data} />; }
