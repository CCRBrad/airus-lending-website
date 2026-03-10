import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for Foreign Nationals', description: 'Foreign national mortgage programs for non-U.S. citizens purchasing property in the United States. No SSN required. Airus Lending.' };
const data = {
    badge: 'International', title: 'Foreign National Mortgage Solutions', subtitle: 'Purchasing U.S. real estate without U.S. citizenship — specialized programs for international buyers and investors.',
    overview: 'Foreign nationals can purchase residential and investment property in the United States through specialized non-QM mortgage programs. No Social Security Number, ITIN, or U.S. credit history is required. Qualification is based on passport documentation, international credit references, and assets. Popular with Canadian, European, Latin American, and Asian buyers.',
    challenges: [
        { title: 'No U.S. Credit History', description: 'International credit references and bank letters are used instead.' },
        { title: 'Currency & Documentation', description: 'Foreign income and assets require proper documentation and sometimes translation.' },
        { title: 'Finding the Right Lender', description: 'Many U.S. lenders don\'t offer foreign national programs. Broker access helps.' },
    ],
    solutions: [
        { title: 'Foreign National Loans', description: 'No SSN/ITIN required, passport-based.', href: '/home-loans/foreign-national-loans' },
        { title: 'DSCR Loans', description: 'Qualify on U.S. rental property cash flow.', href: '/home-loans/dscr-loans' },
        { title: 'Non-QM Loans', description: 'Flexible international lending.', href: '/home-loans/non-qm-loans' },
    ],
    qualificationTips: [
        'Have your international bank provide a credit reference letter in English.',
        'Prepare 3–6 months of international bank statements showing adequate assets.',
        'Budget for a 25–40% down payment — foreign national programs require higher equity.',
        'Obtain U.S. property insurance and consider working with a U.S.-based real estate attorney.',
    ],
    steps: [
        { number: 1, title: 'Initial Review', description: 'We assess your international documentation and property goals.' },
        { number: 2, title: 'Program Selection', description: 'Foreign national, DSCR, or asset-based — matched to your profile.' },
        { number: 3, title: 'Close in the U.S.', description: 'We coordinate documentation, appraisal, and closing across borders.' },
    ],
    faqs: [
        { question: 'Do I need a visa to buy property in the U.S.?', answer: 'You do not need a visa to own property. However, your visa status may affect which programs are available and whether the property can be a primary residence.' },
        { question: 'What down payment do I need?', answer: 'Foreign national programs typically require 25–40% down depending on the property type and lender.' },
    ],
    ctaHeading: 'Purchasing U.S. Property?', ctaDescription: 'Talk to a specialist who understands international mortgage lending.',
};
export default function ForeignNationalsPage() { return <BorrowerTemplate data={data} />; }
