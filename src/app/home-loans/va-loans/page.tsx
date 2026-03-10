import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = {
    title: 'VA Loans',
    description: 'VA loans offer zero-down financing for eligible veterans, active-duty service members, and surviving spouses. Learn about VA loan benefits and qualifications with Airus Lending.',
};

const vaData = {
    badge: 'Government-Backed',
    title: 'VA Loans',
    subtitle: 'Zero-down financing, no mortgage insurance, and competitive rates — exclusively for those who have served.',
    overview: 'VA loans are home loans guaranteed by the U.S. Department of Veterans Affairs. Available to eligible veterans, active-duty service members, National Guard and Reserve members, and certain surviving spouses, VA loans are among the most powerful mortgage programs in the market. They offer zero down payment, no private mortgage insurance, and often the lowest available interest rates.',
    whoIsItFor: [
        'Veterans of the U.S. Armed Forces',
        'Active-duty service members',
        'National Guard and Reserve members (after qualifying service)',
        'Surviving spouses of veterans who died in service or from service-connected disability',
        'Current VA loan holders looking to refinance (VA IRRRL)',
    ],
    keyBenefits: [
        { title: 'No Down Payment', description: '100% financing — no down payment required in most cases, up to the full entitlement amount.' },
        { title: 'No Mortgage Insurance', description: 'Unlike FHA and conventional loans under 20% down, VA loans have no monthly mortgage insurance premium.' },
        { title: 'Competitive Rates', description: 'VA loans typically carry lower interest rates than conventional and FHA loans for equivalent credit profiles.' },
        { title: 'Limited Closing Costs', description: 'VA limits certain closing costs and allows sellers to contribute up to 4% toward buyer costs.' },
    ],
    qualificationOverview: [
        'Valid Certificate of Eligibility (COE) based on military service',
        'Minimum credit score varies by lender (typically 580–620, no VA minimum)',
        'Residual income test in addition to standard DTI',
        'DTI generally up to 41%, with compensating factors higher',
        'Property must be owner-occupied primary residence',
        'VA appraisal required confirming minimum property requirements (MPRs)',
        'VA funding fee applies (may be waived for disabled veterans)',
    ],
    downPaymentInfo: '$0 — 100% financing',
    creditRequirements: 'No VA minimum (lenders typically 580–620)',
    occupancyTypes: ['Primary residence only'],
    propertyTypes: ['Single-family', 'Condos (VA-approved)', 'Townhomes', '2–4 unit properties'],
    pros: [
        'No down payment required',
        'No monthly mortgage insurance',
        'Lowest average interest rates',
        'Seller can pay up to 4% of closing costs',
        'VA IRRRL streamline refinance for existing VA borrowers',
        'No prepayment penalty',
        'Assumable by qualified buyers',
        'Funding fee can be financed or waived',
    ],
    tradeoffs: [
        'VA funding fee applies (1.25%–3.3% depending on service and down payment)',
        'Primary residence requirement — cannot be used for investment property',
        'VA appraisal may flag issues conventional appraisals would not',
        'Condo must be VA-approved or qualify for single-unit approval',
        'Must have eligible military service',
    ],
    commonScenarios: [
        { title: 'Active-Duty First-Time Buyer', description: 'An active-duty service member purchasing their first home with zero down. VA loan eliminates the down payment requirement and PMI, significantly lowering the monthly cost.' },
        { title: 'Veteran Scaling Down', description: 'A retired veteran selling their current home and purchasing a smaller property. Full VA entitlement restored after payoff, allowing another zero-down purchase.' },
        { title: 'VA IRRRL Refinance', description: 'An existing VA borrower refinances from a 6.5% rate to 5.75% via the Interest Rate Reduction Refinance Loan — no appraisal, minimal paperwork, faster close.' },
    ],
    documentsNeeded: [
        'Certificate of Eligibility (COE)',
        'DD-214 (for veterans)',
        'Current military orders (for active duty)',
        'Two most recent pay stubs or LES',
        'Last two years of W-2s',
        'Last two years of tax returns (if applicable)',
        'Two most recent bank statements',
        'Government-issued photo ID',
    ],
    faqs: [
        { question: 'Can I use a VA loan more than once?', answer: 'Yes. There is no limit on how many times you can use a VA loan. Once your previous entitlement is restored (usually by paying off the prior VA loan), you can use the benefit again.' },
        { question: 'What is the VA funding fee?', answer: 'The VA funding fee is a one-time charge that helps sustain the VA loan program. It ranges from 1.25% to 3.3% depending on your type of service, down payment, and whether it\'s your first or subsequent use. Disabled veterans and certain surviving spouses are exempt.' },
        { question: 'Can I buy a condo with a VA loan?', answer: 'Yes, but the condo complex must be VA-approved or qualify for single-unit approval. Your advisor can help verify eligibility.' },
        { question: 'How does VA compare to FHA?', answer: 'VA loans generally offer better terms — zero down, no mortgage insurance, and lower rates. FHA is a strong alternative for borrowers who don\'t have VA eligibility. Compare the programs in detail.' },
    ],
    relatedProducts: [
        { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Compare with standard financing' },
        { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Another government-backed option' },
        { title: 'VA Construction Loans', href: '/home-loans/va-construction-loans', description: 'Build a new home with VA benefits' },
        { title: 'VA IRRRL Refinance', href: '/refinance/va-irrrl', description: 'Streamlined VA refinancing' },
    ],
    ctaHeading: 'You Served. Now Let Us Serve You.',
    ctaDescription: 'See what you qualify for with a VA loan — zero down, no mortgage insurance, and expert support.',
};

export default function VALoansPage() {
    return <LoanPageTemplate data={vaData} />;
}
