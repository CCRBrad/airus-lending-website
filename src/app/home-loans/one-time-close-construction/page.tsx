import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'One-Time Close Construction Loans', description: 'Build your home with a single loan that converts to a permanent mortgage. One closing, one set of fees. Airus Lending.' };
const data = {
    badge: 'Construction', title: 'One-Time Close Construction', subtitle: 'Build your dream home with a single loan that converts to a permanent mortgage — one closing, one set of fees.',
    overview: 'A one-time close (OTC) construction loan combines your construction financing and permanent mortgage into a single loan with a single closing. During the construction phase, you make interest-only payments on funds drawn. Once the home is complete, the loan automatically converts to a standard mortgage with principal and interest payments — no second closing, no requalification, no additional fees.',
    whoIsItFor: ['Homebuyers building a custom home from the ground up', 'Buyers purchasing a lot and constructing a new home', 'Borrowers who want to lock their permanent rate before construction begins', 'Owner-builders (select programs)'],
    keyBenefits: [
        { title: 'Single Closing', description: 'One appraisal, one closing, one set of fees — saving thousands compared to two-close programs.' },
        { title: 'Rate Lock at Close', description: 'Lock your permanent mortgage rate at the start — before construction begins.' },
        { title: 'Interest-Only During Construction', description: 'Pay only interest on funds drawn during the build phase, keeping costs low.' },
        { title: 'Automatic Conversion', description: 'When construction is complete, the loan converts to your permanent mortgage with no additional steps.' },
    ],
    qualificationOverview: ['Credit score of 680+ for most programs', 'Down payment of 5–20% depending on program', 'Licensed builder/general contractor required', 'Approved plans, specs, and construction budget', 'Appraisal based on plans and specs (future value)', 'Construction timeline typically 12 months max'],
    downPaymentInfo: '5–20%', creditRequirements: '680+', occupancyTypes: ['Primary residence', 'Second home (select)'], propertyTypes: ['Single-family new construction'],
    pros: ['One closing saves time and money', 'Lock permanent rate before building', 'Interest-only during construction', 'No requalification at conversion', 'FHA, VA, and conventional options'],
    tradeoffs: ['Builder must be licensed and approved', 'Construction timeline limits', 'More upfront documentation', 'Draws and inspections during build', 'Higher complexity than standard purchase'],
    commonScenarios: [
        { title: 'Custom Home Build', description: 'A couple purchases a lot for $80K and builds a $320K home. The OTC loan finances both the lot and construction ($400K total), with interest-only payments during the 10-month build, then converts to a 30-year fixed mortgage.' },
    ],
    documentsNeeded: ['Builder qualifications and license', 'Construction plans, specs, and budget', 'Land purchase agreement or proof of ownership', 'Standard income and asset documentation', 'Appraisal based on plans (future value)'],
    faqs: [
        { question: 'What\'s the difference between one-time close and two-time close?', answer: 'One-time close has a single closing for both construction and permanent financing. Two-time close requires a separate construction loan closing and then a permanent mortgage closing — costing more in fees and requiring requalification.' },
        { question: 'Can I use VA or FHA for construction?', answer: 'Yes. Both VA and FHA offer one-time close construction programs. VA allows zero down; FHA requires 3.5% down. Conventional programs are also available.' },
    ],
    relatedProducts: [
        { title: 'VA Construction Loans', href: '/home-loans/va-construction-loans', description: 'VA OTC construction financing' },
        { title: 'Conventional Construction', href: '/home-loans/conventional-construction-loans', description: 'Standard construction programs' },
        { title: 'Renovation Loans', href: '/home-loans/renovation-loans', description: 'Finance purchase + improvements' },
    ],
};
export default function OTCConstructionPage() { return <LoanPageTemplate data={data} />; }
