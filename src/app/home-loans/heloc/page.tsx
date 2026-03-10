import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'HELOC — Home Equity Line of Credit', description: 'A HELOC gives you a revolving line of credit against your home equity. Flexible access to funds when you need them. Explore with Airus Lending.' };
const data = {
    badge: 'Revolving Credit', title: 'HELOC', subtitle: 'A revolving line of credit secured by your home equity — draw funds as you need them, repay, and draw again.',
    overview: 'A Home Equity Line of Credit (HELOC) is a revolving credit line that uses your home equity as collateral. Unlike a home equity loan that provides a one-time lump sum, a HELOC lets you borrow up to your approved limit, repay, and borrow again during the draw period (typically 10 years). After the draw period, you enter the repayment period. HELOCs are ideal for ongoing expenses, renovations, or keeping a financial safety net.',
    whoIsItFor: ['Homeowners who want flexible, revolving access to funds', 'Borrowers funding ongoing renovations or projects', 'Homeowners who want a financial safety net', 'Borrowers who prefer to pay interest only on what they use'],
    keyBenefits: [
        { title: 'Revolving Access', description: 'Borrow, repay, and borrow again during the draw period — like a credit card secured by your home.' },
        { title: 'Interest Only on Balance', description: 'You only pay interest on what you\'ve actually drawn, not the full credit limit.' },
        { title: 'Flexible Use', description: 'Use funds for renovations, education, emergencies, investments, or anything else.' },
        { title: 'Keep Your First Mortgage', description: 'Access equity without refinancing your primary mortgage.' },
    ],
    qualificationOverview: ['15–20% equity minimum', 'Credit score of 680+', 'DTI including all obligations up to 43%', 'Property appraisal typically required', 'Income verification required'],
    downPaymentInfo: 'N/A (equity-based)', creditRequirements: '680+', occupancyTypes: ['Primary residence'], propertyTypes: ['Single-family', 'Condos', 'Townhomes'],
    pros: ['Flexible revolving access', 'Pay interest only on what you borrow', 'Draw period up to 10 years', 'Lower rates than credit cards or personal loans', 'Potential tax benefits for home improvement use'],
    tradeoffs: ['Variable rate — payments can increase', 'Home is collateral', 'Draw period ends and repayment period begins', 'Some lenders charge annual fees or early closure fees', 'Can be frozen if home values decline'],
    commonScenarios: [
        { title: 'Rolling Home Renovation', description: 'A homeowner opens a $75K HELOC and draws $20K for a bathroom remodel, then another $30K for a deck the following year — paying interest only on the drawn amount.' },
        { title: 'Financial Safety Net', description: 'A well-qualified homeowner keeps a $50K HELOC open as an emergency fund, paying nothing until and unless they draw from it.' },
    ],
    documentsNeeded: ['Income documentation', 'Property appraisal', 'Current mortgage statement', 'Bank/asset statements', 'ID'],
    faqs: [
        { question: 'How is a HELOC different from a home equity loan?', answer: 'A HELOC is revolving (like a credit card) with variable rates. A home equity loan is a one-time lump sum with fixed payments. Choose based on whether you need ongoing access or a one-time sum.' },
        { question: 'What happens after the draw period?', answer: 'After the draw period (typically 10 years), you can no longer borrow and enter repayment (typically 15–20 years). Your payments may increase as you\'re now paying both principal and interest.' },
    ],
    relatedProducts: [
        { title: 'Home Equity Loans', href: '/home-loans/home-equity-loans', description: 'Fixed-rate lump sum' },
        { title: 'Cash-Out Refinance', href: '/refinance/cash-out-refinance', description: 'Access equity by refinancing' },
    ],
};
export default function HELOCPage() { return <LoanPageTemplate data={data} />; }
