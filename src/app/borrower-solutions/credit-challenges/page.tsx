import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for Credit Challenges', description: 'Recent bankruptcy, foreclosure, or low credit score? Non-QM programs can help. Explore options with Airus Lending.' };
const data = {
    badge: 'Credit Challenges', title: 'Credit Challenge Mortgage Solutions', subtitle: 'Past credit events don\'t define your future. Non-QM programs offer financing within days of a bankruptcy, foreclosure, or short sale.',
    overview: 'Life happens. Bankruptcy, foreclosure, short sale, and credit setbacks are more common than most people realize. Traditional lenders require long waiting periods (2–7 years) before you can qualify again. Non-QM lenders take a different approach — many programs are available within 1 day of discharge, with down payment and credit score being the primary qualification factors.',
    challenges: [
        { title: 'Waiting Periods', description: 'Conventional, FHA, and VA enforce 1–7 year waiting periods after credit events.' },
        { title: 'Low Credit Scores', description: 'Credit events can drop scores below conventional minimums.' },
        { title: 'Limited Options at Banks', description: 'Most banks and retail lenders can\'t offer non-QM programs.' },
    ],
    solutions: [
        { title: 'Non-QM Loans', description: 'Programs available 1 day out of bankruptcy/foreclosure.', href: '/home-loans/non-qm-loans' },
        { title: 'FHA Loans', description: 'Available 2+ years after bankruptcy with rebuilt credit.', href: '/home-loans/fha-loans' },
        { title: 'Bank Statement Loans', description: 'Qualify on deposits, not credit history alone.', href: '/home-loans/bank-statement-loans' },
    ],
    qualificationTips: [
        'Start rebuilding credit immediately — secured credit cards, small installment loans, and on-time payments help.',
        'Be prepared for higher down payments (20–30%) on non-QM programs after credit events.',
        'Build cash reserves — strong reserves are a compensating factor for credit challenges.',
        'Be honest and upfront about your credit history — your advisor needs the full picture to find the right program.',
        'Consider FHA if you\'re 2+ years post-bankruptcy — it offers the best rates for rebuilding borrowers.',
    ],
    steps: [
        { number: 1, title: 'Credit Review', description: 'We review your credit history, events, and current situation honestly.' },
        { number: 2, title: 'Program Match', description: 'We identify which programs fit your timeline and credit profile.' },
        { number: 3, title: 'Pre-Approval', description: 'Get qualified and start moving forward.' },
    ],
    faqs: [
        { question: 'How soon after bankruptcy can I get a mortgage?', answer: 'Non-QM: 1 day after discharge. FHA: 2 years. VA: 2 years. Conventional: 4 years (Chapter 7) or 2 years (Chapter 13).' },
        { question: 'What credit score do I need after a credit event?', answer: 'Non-QM programs go as low as 500 with 25–30% down. FHA requires 580 for 3.5% down. Your advisor can map the options by score.' },
    ],
    ctaHeading: 'Past Credit Issues? Let\'s Move Forward.', ctaDescription: 'Talk to an advisor who understands credit events — we find options, not excuses.',
};
export default function CreditChallengesPage() { return <BorrowerTemplate data={data} />; }
