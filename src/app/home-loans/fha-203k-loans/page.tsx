import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'FHA 203k Loans', description: 'FHA 203k loans let you finance a home purchase and renovation in one government-backed mortgage. Explore FHA 203k options with Airus Lending.' };
const data = {
    badge: 'Government-Backed', title: 'FHA 203k Loans', subtitle: 'Government-backed renovation financing — purchase and rehab a property with one FHA-insured mortgage.',
    overview: 'The FHA 203k loan is a government-backed mortgage that combines the purchase price of a home and the cost of renovations into a single FHA-insured loan. There are two versions: the Standard 203k for major renovations (structural work, room additions, etc.) and the Limited 203k (formerly "Streamline") for cosmetic and minor improvements up to $35,000. Both allow low down payments and flexible credit guidelines.',
    whoIsItFor: ['Buyers purchasing properties that need renovation', 'First-time homebuyers buying below-market fixer-uppers', 'Borrowers who want government-backed renovation financing', 'Homeowners refinancing and renovating simultaneously'],
    keyBenefits: [
        { title: 'Low Down Payment', description: 'Just 3.5% down on the total project cost (purchase price + renovation).' },
        { title: 'Flexible Credit', description: 'FHA guidelines — credit scores as low as 580 with 3.5% down.' },
        { title: 'Two Options', description: 'Standard 203k for major work, Limited 203k for up to $35K in improvements.' },
        { title: 'Based on Future Value', description: 'Your loan amount is based on the after-improved appraised value.' },
    ],
    qualificationOverview: ['Credit score 580+ for 3.5% down', 'DTI up to 43–50%', 'Must use FHA-approved appraiser', 'HUD consultant required for Standard 203k', 'Licensed contractor required', 'Property must be 1–4 units, primary residence'],
    downPaymentInfo: '3.5% of total project cost', creditRequirements: '580+', occupancyTypes: ['Primary residence only'], propertyTypes: ['Single-family', '2–4 units', 'Some condos'],
    pros: ['Low 3.5% down payment', 'Flexible credit requirements', 'Finance major and minor renovations', 'Turn a fixer-upper into your dream home', 'Available for refinance too'],
    tradeoffs: ['HUD consultant required for Standard 203k', 'MIP required for the life of the loan', 'Primary residence only', 'Contractor must be licensed and approved', 'Draw inspection process required', 'Timeline restrictions on completion'],
    commonScenarios: [
        { title: 'First-Timer Buying a Fixer', description: 'A first-time buyer with a 620 credit score purchases a $200K home needing $50K in renovations. FHA 203k finances the full $250K with 3.5% down ($8,750).' },
        { title: 'Limited 203k Cosmetic Update', description: 'A buyer purchases a structurally sound home that needs $30K in kitchen and bathroom updates. The Limited 203k wraps the cosmetic work into the mortgage — no second loan needed.' },
    ],
    documentsNeeded: ['Standard FHA documentation', 'Contractor bids and work plans', 'HUD consultant report (Standard only)', 'Appraisal with as-is and after-improved values', 'Contractor license and insurance verification'],
    faqs: [
        { question: 'What is the difference between Standard and Limited 203k?', answer: 'Standard 203k allows structural renovations with no dollar cap (subject to FHA limits). Limited 203k covers non-structural improvements up to $35,000. Standard requires a HUD consultant; Limited does not.' },
        { question: 'Can I be my own contractor?', answer: 'In very limited circumstances and only on specific programs. Most 203k work requires a licensed, insured contractor.' },
    ],
    relatedProducts: [
        { title: 'Renovation Loans', href: '/home-loans/renovation-loans', description: 'All renovation financing options' },
        { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Standard FHA purchase financing' },
        { title: 'One-Time Close Construction', href: '/home-loans/one-time-close-construction', description: 'New construction financing' },
    ],
};
export default function FHA203kPage() { return <LoanPageTemplate data={data} />; }
