import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = {
    title: 'VA Loan Process',
    description: 'Step-by-step guide to the VA loan process. From pre-approval to closing day — what to expect, timelines, and tips for a smooth VA loan experience.',
};

const data = {
    badge: 'VA Program',
    title: 'VA Loan Process',
    subtitle: 'A step-by-step guide from pre-approval to closing day.',
    overview: 'The VA loan process follows a structured path from initial pre-approval through closing. While it shares many similarities with conventional loans, there are important VA-specific steps — including the Certificate of Eligibility (COE), VA appraisal, and funding fee calculations — that borrowers should understand. With the right advisor, the VA process is extremely efficient. Our average VA loan closes in approximately 21 days from contract to keys.',
    whoIsItFor: [
        'Veterans preparing to buy their first home',
        'Active-duty members planning a purchase at a new duty station',
        'Military families who want to understand the timeline before house hunting',
        'VA borrowers refinancing with IRRRL or cash-out programs',
        'Real estate agents working with VA-eligible buyers',
    ],
    keyBenefits: [
        { title: 'Step 1: Pre-Approval', description: 'Submit basic financial info, pull COE, and receive a pre-approval letter showing how much home you can afford.' },
        { title: 'Step 2: House Hunting & Offer', description: 'Work with your agent to find a home and submit an offer. Your pre-approval letter strengthens your position.' },
        { title: 'Step 3: Processing & VA Appraisal', description: 'Loan file goes to processing. A VA-assigned appraiser inspects the property for value and minimum property requirements.' },
        { title: 'Step 4: Underwriting & Closing', description: 'Underwriter reviews the full file, issues conditions, and once cleared — you schedule closing and get your keys.' },
    ],
    qualificationOverview: [
        'Step 1: Pre-approval (Day 1) — Apply, provide documents, pull COE',
        'Step 2: Offer accepted (Days 1-14) — Negotiate and go under contract',
        'Step 3: VA appraisal ordered (Days 3-7) — Scheduled by VA-assigned appraiser',
        'Step 4: Appraisal received (Days 7-14) — Value and MPR determination',
        'Step 5: Underwriting review (Days 7-18) — File reviewed, conditions issued',
        'Step 6: Conditions cleared (Days 14-21) — Clear to close issued',
        'Step 7: Closing (Day 21+) — Sign documents, fund, get keys',
    ],
    downPaymentInfo: '$0 — no down payment required',
    creditRequirements: 'No VA minimum (most lenders: 580-620+)',
    occupancyTypes: ['Primary residence'],
    propertyTypes: ['Single-family', 'VA-approved condos', '2-4 units', 'Manufactured homes'],
    pros: [
        'Fast process — average 21-day close',
        'Pre-approval takes 24-48 hours typically',
        'COE can be pulled electronically and instantly in many cases',
        'VA appraisal protects the buyer from overpaying',
        'Streamlined IRRRL process even faster for refinances',
        'Digital application and document submission available',
    ],
    tradeoffs: [
        'VA appraisal may flag property condition issues conventional would not',
        'VA-assigned appraisers (cannot choose your own)',
        'Minimum Property Requirements (MPRs) must be met',
        'Tidewater and reconsideration process can add time if value comes in low',
    ],
    commonScenarios: [
        { title: '21-Day Purchase Close', description: 'A veteran gets pre-approved, finds a home, and goes under contract. The VA appraisal comes back in 5 business days at value, underwriting clears conditions by Day 16, and they close on Day 21 with keys in hand.' },
        { title: 'PCS Move with Tight Timeline', description: 'An active-duty member has 30 days before reporting to a new station. Pre-approval is done before the move, house hunting starts on arrival, and an aggressive 18-day close schedule is set with the lender and agent.' },
        { title: 'VA IRRRL in 10 Business Days', description: 'A veteran refinances their existing VA loan using the IRRRL program. No appraisal, no income verification — just a rate and term improvement. The entire process completes in 10 business days.' },
    ],
    documentsNeeded: [
        'Certificate of Eligibility (COE) — we can pull this for you',
        'DD-214 (separated) or Statement of Service (active duty)',
        'Last 30 days of pay stubs',
        'Last 2 years of W-2s and/or tax returns',
        'Last 2 months of bank statements',
        'Government-issued photo ID',
        'Purchase contract (once under contract)',
    ],
    faqs: [
        { question: 'How long does the VA loan process take?', answer: 'Our average VA purchase loan closes in approximately 21 days from executed contract. The timeline can vary based on appraisal scheduling, property condition, and borrower responsiveness with documents.' },
        { question: 'What is the VA appraisal?', answer: 'The VA appraisal is performed by a VA-assigned, VA-approved appraiser. It determines the property value and ensures it meets VA Minimum Property Requirements (MPRs) — basic health, safety, and structural standards.' },
        { question: 'What happens if the appraisal comes in low?', answer: 'If the appraisal comes in below the purchase price, options include: renegotiating the price, the buyer covering the difference, requesting a Tidewater or Reconsideration of Value, or in rare cases, walking away.' },
        { question: 'Can I close faster than 21 days?', answer: 'Yes, in some cases. If the VA appraisal comes back quickly and all documents are submitted promptly, closes in 14-18 days are possible. IRRRL refinances can close in as little as 10 business days.' },
    ],
    relatedProducts: [
        { title: 'VA Loan Benefits', href: '/va-loans/va-loan-benefits', description: 'Full benefit breakdown' },
        { title: 'VA Eligibility', href: '/va-loans/va-eligibility', description: 'Check your eligibility' },
        { title: 'VA IRRRL', href: '/va-loans/va-irrrl', description: 'Streamline refinance program' },
        { title: 'VA Funding Fee', href: '/va-loans/va-funding-fee', description: 'Fee calculator and exemptions' },
    ],
    ctaHeading: 'Ready to Start Your VA Loan?',
    ctaDescription: 'Get pre-approved in 24-48 hours — our VA specialists handle the rest.',
};

export default function VALoanProcessPage() {
    return <LoanPageTemplate data={data} />;
}
