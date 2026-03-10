import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'VA Construction Loans', description: 'Build your home with VA benefits — zero down payment construction-to-permanent financing for eligible veterans. Airus Lending.' };
const data = {
    badge: 'Veterans', title: 'VA Construction Loans', subtitle: 'Build your dream home with zero down payment — exclusively for eligible veterans, active-duty service members, and surviving spouses.',
    overview: 'VA construction loans combine VA-guaranteed construction financing with a permanent VA mortgage. Eligible veterans and active-duty service members can build a new home with zero down payment, no mortgage insurance, and competitive VA rates. The one-time close structure means one application, one closing, and one set of fees.',
    whoIsItFor: ['Veterans building a new custom home', 'Active-duty service members', 'National Guard and Reserve members', 'Surviving spouses of veterans'],
    keyBenefits: [
        { title: 'Zero Down Payment', description: 'Build your home with 100% financing — no down payment required.' },
        { title: 'No Mortgage Insurance', description: 'VA loans do not require monthly mortgage insurance premiums.' },
        { title: 'Competitive VA Rates', description: 'Benefit from the lowest average mortgage rates available.' },
        { title: 'One-Time Close', description: 'Single closing for construction and permanent financing.' },
    ],
    qualificationOverview: ['Certificate of Eligibility (COE)', 'Licensed VA-approved builder', 'Approved plans, specs, and budget', 'Credit requirements per lender (typically 620+)', 'VA appraisal based on plans', 'VA funding fee applies (can be waived for disabled veterans)'],
    downPaymentInfo: '$0 — zero down', creditRequirements: '620+ (lender overlay)', occupancyTypes: ['Primary residence only'], propertyTypes: ['Single-family new construction'],
    pros: ['Zero down payment', 'No monthly mortgage insurance', 'Best available rates', 'One-time close option', 'Funding fee can be waived or financed'],
    tradeoffs: ['Fewer lenders offer VA construction', 'VA-approved builder required', 'Primary residence only', 'VA funding fee applies', 'Construction timeline requirements'],
    commonScenarios: [
        { title: 'Veteran Building in Rural Area', description: 'A retired Army veteran on 5 acres builds a custom 2,500 sq ft home with zero down, no PMI, and a competitive 30-year fixed rate.' },
    ],
    documentsNeeded: ['Certificate of Eligibility (COE)', 'DD-214 or military service records', 'Builder qualifications and VA approval', 'Construction plans and budget', 'Standard income/asset documentation'],
    faqs: [
        { question: 'Do I need a VA-approved builder?', answer: 'Yes. The builder must be registered with VA and meet their requirements. Your advisor can help verify builder eligibility.' },
        { question: 'Can I buy land and build with the VA?', answer: 'Yes. VA construction loans can cover lot purchase and construction in a single financing package.' },
    ],
    relatedProducts: [
        { title: 'VA Loans', href: '/home-loans/va-loans', description: 'Standard VA purchase financing' },
        { title: 'One-Time Close Construction', href: '/home-loans/one-time-close-construction', description: 'General construction programs' },
        { title: 'VA IRRRL Refinance', href: '/refinance/va-irrrl', description: 'Streamlined VA refinancing' },
    ],
};
export default function VAConstructionPage() { return <LoanPageTemplate data={data} />; }
