import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for First-Time Homebuyers', description: 'Low down payment programs, step-by-step guidance, and first-time buyer benefits. Get pre-approved with Airus Lending.' };
const data = {
    badge: 'First-Time Buyers', title: 'First-Time Homebuyer Solutions', subtitle: 'Low down payments, flexible credit guidelines, and expert guidance — everything you need to buy your first home with confidence.',
    overview: 'Buying your first home is one of the biggest financial decisions you\'ll make. The good news: you have access to some of the best loan programs available. First-time buyers qualify for lower down payments, down payment assistance, flexible credit guidelines, and dedicated government-backed programs that repeat buyers can\'t access. At Airus Lending, we specialize in helping first-time buyers navigate the process with clarity.',
    challenges: [
        { title: 'Limited Savings', description: 'Many first-time buyers don\'t have 20% saved. Programs exist with as little as 0–3.5% down.' },
        { title: 'Credit History Gaps', description: 'Thin or imperfect credit doesn\'t disqualify you. FHA and alternative credit programs can help.' },
        { title: 'Process Overwhelm', description: 'The mortgage process can feel complex. Our advisors guide you step by step.' },
        { title: 'Competing Offers', description: 'A strong pre-approval letter makes your offer competitive against other buyers.' },
        { title: 'Hidden Costs', description: 'Down payment assistance and seller concessions help cover closing costs.' },
        { title: 'Interest Rate Uncertainty', description: 'We lock your rate early so you know exactly what to expect.' },
    ],
    solutions: [
        { title: 'FHA Loans', description: '3.5% down, flexible credit, government-backed.', href: '/home-loans/fha-loans' },
        { title: 'Conventional 3% Down', description: 'Low down payment for strong credit profiles.', href: '/home-loans/conventional-loans' },
        { title: 'VA Loans', description: 'Zero down for eligible veterans.', href: '/home-loans/va-loans' },
        { title: 'USDA Loans', description: '100% financing in eligible rural areas.', href: '/home-loans/usda-loans' },
        { title: 'Down Payment Assistance', description: 'Grants and forgivable loans to help with costs.', href: '/home-loans/down-payment-assistance' },
    ],
    qualificationTips: [
        'Check your credit report for errors and start building credit 6–12 months before applying.',
        'Save consistently — even small amounts build reserves and demonstrate financial discipline.',
        'Get pre-approved before shopping. It sets your budget and strengthens your offers.',
        'Complete a homebuyer education course — many DPA programs require it, and it helps you understand the process.',
        'Don\'t make major financial changes (new debt, job change, large purchases) during the mortgage process.',
    ],
    steps: [
        { number: 1, title: 'Free Consultation', description: 'Talk to an advisor who answers your questions and reviews your options.' },
        { number: 2, title: 'Get Pre-Approved', description: 'Know your budget, your rate, and your program — before you start looking.' },
        { number: 3, title: 'Find & Offer', description: 'Work with a real estate agent and submit a strong offer backed by your pre-approval.' },
        { number: 4, title: 'Close & Move In', description: 'We handle underwriting, appraisal, and closing. You get the keys.' },
    ],
    faqs: [
        { question: 'What credit score do I need?', answer: 'FHA allows scores as low as 580 with 3.5% down. Conventional programs typically require 620+. VA and USDA have no set minimums.' },
        { question: 'How much do I need for a down payment?', answer: 'As little as 0% (VA/USDA), 3% (conventional), or 3.5% (FHA). DPA programs can cover this for you.' },
        { question: 'What counts as a first-time buyer?', answer: 'Anyone who hasn\'t owned a home in the last 3 years. This includes previous owners who sold or foreclosed more than 3 years ago.' },
        { question: 'How long does the process take?', answer: 'Pre-approval takes 1–2 days. Once under contract, most closings take 21–30 days.' },
    ],
    ctaHeading: 'Ready to Buy Your First Home?', ctaDescription: 'Get pre-approved in minutes. No hard credit pull, no obligation.',
};
export default function FirstTimePage() { return <BorrowerTemplate data={data} />; }
