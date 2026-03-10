import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'Conventional Construction Loans', description: 'Build a new home with conventional construction financing — competitive rates, flexible terms, and one-time close options. Airus Lending.' };
const data = {
    badge: 'Construction', title: 'Conventional Construction Loans', subtitle: 'Standard construction-to-permanent financing for building a new home — competitive rates and flexible terms.',
    overview: 'Conventional construction loans finance the building of a new home through traditional (non-government) lending channels. Available as one-time close or two-time close structures, conventional construction programs offer competitive rates for well-qualified borrowers. After the construction phase, the loan converts to a standard conventional mortgage.',
    whoIsItFor: ['Buyers building a new home who do not need VA or FHA', 'Well-qualified borrowers with strong credit and down payment', 'Second-home builders (not eligible for VA/FHA construction)', 'Buyers who want the most competitive construction rates'],
    keyBenefits: [
        { title: 'Competitive Rates', description: 'Best rates for borrowers with 700+ credit and 20% down.' },
        { title: 'One-Time or Two-Time Close', description: 'Flexibility to choose the structure that works best.' },
        { title: 'Second Home Eligible', description: 'Unlike VA/FHA, conventional allows second-home construction.' },
        { title: 'PMI Removable', description: 'Once at 20% equity, no ongoing mortgage insurance.' },
    ],
    qualificationOverview: ['Credit score 680+ (700+ for best rates)', 'Down payment 10–20%', 'Licensed builder required', 'Full income and asset documentation', 'Appraisal based on plans and specifications'],
    downPaymentInfo: '10–20%', creditRequirements: '680+ (700+ for best terms)', occupancyTypes: ['Primary residence', 'Second home'], propertyTypes: ['Single-family new construction'],
    pros: ['Competitive conventional rates', 'One-time close saves money', 'Second home eligible', 'PMI drops at 20% equity', 'Multiple term options'],
    tradeoffs: ['Higher credit and down payment than FHA', 'Licensed builder required', 'More documentation than standard purchase', 'Construction timeline restrictions'],
    commonScenarios: [
        { title: 'Custom Home Build – Strong Borrower', description: 'A borrower with 760 credit puts 20% down on a $500K custom home build. Conventional OTC locks a competitive rate at closing with no PMI.' },
    ],
    documentsNeeded: ['Builder qualifications and license', 'Construction plans, specs, and budget', 'Standard income/asset documentation', 'Appraisal based on plans'],
    faqs: [
        { question: 'How much down payment do I need?', answer: 'Most conventional construction programs require 10–20% down. Higher down payments get better rates and avoid PMI.' },
    ],
    relatedProducts: [
        { title: 'One-Time Close Construction', href: '/home-loans/one-time-close-construction', description: 'Single-close construction' },
        { title: 'VA Construction Loans', href: '/home-loans/va-construction-loans', description: 'Zero-down VA construction' },
        { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Standard purchase financing' },
    ],
};
export default function ConvConstructionPage() { return <LoanPageTemplate data={data} />; }
