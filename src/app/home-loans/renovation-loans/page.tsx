import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'Renovation Loans', description: 'Finance your purchase and renovation in one loan. Explore renovation mortgage options with Airus Lending.' };
const data = {
    badge: 'Renovation', title: 'Renovation Loans', subtitle: 'Finance the purchase and renovation of a property with a single loan — turn a fixer-upper into your ideal home.',
    overview: 'Renovation loans allow you to finance both the purchase (or refinance) of a home and the cost of renovations in a single mortgage. Instead of buying a home and then taking out a separate construction loan or personal loan for improvements, renovation financing wraps everything into one loan with one closing. Programs include FHA 203k, Fannie Mae HomeStyle, and Freddie Mac CHOICERenovation.',
    whoIsItFor: ['Buyers purchasing fixer-upper properties', 'Homeowners refinancing and renovating simultaneously', 'Buyers who want more options in competitive markets (willing to renovate)', 'Investors looking to add value through improvements'],
    keyBenefits: [
        { title: 'One Loan, One Closing', description: 'Purchase price + renovation costs wrapped into a single mortgage.' },
        { title: 'Based on After-Improved Value', description: 'The loan amount is based on what the property will be worth after renovations — not the current as-is value.' },
        { title: 'Expand Your Options', description: 'Properties that need work become viable options, opening up more inventory in your search.' },
        { title: 'Multiple Programs', description: 'FHA 203k, HomeStyle, and CHOICERenovation each have different guidelines to fit various borrowers.' },
    ],
    qualificationOverview: ['Credit score of 620+ for conventional, 580+ for FHA 203k', 'Down payment based on combined purchase + renovation amount', 'Licensed contractor required for most programs', 'Project plans and cost estimates required before closing', 'Property appraisal based on after-improved value'],
    downPaymentInfo: '3.5% (FHA 203k) / 3% (conv)', creditRequirements: '580+ (FHA) / 620+ (conv)', occupancyTypes: ['Primary residence', 'Second home (conv only)'], propertyTypes: ['Single-family', 'Condos (limited)', '2–4 units (FHA)'],
    pros: ['Single loan for purchase + renovation', 'Loan based on future value', 'FHA and conventional options', 'Low down payment possible', 'Wider home search options'],
    tradeoffs: ['Licensed contractor typically required', 'More paperwork and inspection requirements', 'Draws and inspections during renovation', 'Project must be completed within specified timeline', 'Not all renovation types are eligible'],
    commonScenarios: [
        { title: 'Buyer Renovating Dated Home', description: 'A buyer purchases a dated 1970s home for $250K with $75K in planned renovations. An FHA 203k loan finances the full $325K based on the after-improved appraised value.' },
    ],
    documentsNeeded: ['Standard mortgage documentation', 'Contractor bids and project plans', 'Licensed contractor information', 'Property appraisal (as-is and after-improved)', 'HUD consultant report (FHA 203k Standard)'],
    faqs: [
        { question: 'Can I do the work myself?', answer: 'Limited DIY work is allowed on some programs, but most renovation loan programs require a licensed, insured contractor for significant work. Ask your advisor about specific program rules.' },
        { question: 'What types of renovations are covered?', answer: 'Most structural, mechanical, cosmetic, and accessibility improvements are eligible. Luxury additions (swimming pools on FHA) may not be covered. Your advisor can review eligible improvements.' },
    ],
    relatedProducts: [
        { title: 'FHA 203k Loans', href: '/home-loans/fha-203k-loans', description: 'Government-backed renovation' },
        { title: 'Home Improvement Refi', href: '/refinance/home-improvement', description: 'Refinance-based renovation funding' },
        { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Standard financing for move-in ready homes' },
    ],
};
export default function RenovationPage() { return <LoanPageTemplate data={data} />; }
