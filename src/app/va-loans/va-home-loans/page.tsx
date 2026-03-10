import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata = {
    title: 'VA Home Loans | Airus Lending',
    description: 'Purchase your home with $0 down payment and no PMI. VA home loans offer the most powerful mortgage benefits available for veterans and military families.',
};

export default function VAHomeLoansPage() {
    return (
        <LoanPageTemplate data={{
            badge: 'VA Purchase',
            title: 'VA Home Loans',
            subtitle: 'The most powerful mortgage benefit in America — $0 down, no PMI, and competitive rates for veterans, active-duty military, and surviving spouses.',
            overview: 'VA home loans are guaranteed by the U.S. Department of Veterans Affairs, allowing private lenders to offer exceptional terms to eligible borrowers. With no down payment requirement, no private mortgage insurance, and rates that are typically lower than conventional loans, VA home loans make homeownership more accessible and affordable for those who have served our country. At Airus Lending, we specialize in VA lending and understand the unique requirements, timelines, and documentation involved.',
            whoIsItFor: [
                'Veterans with qualifying military service',
                'Active-duty service members',
                'National Guard and Reserve members with qualifying service',
                'Surviving spouses of veterans who died in service or from a service-connected disability',
                'First-time and repeat homebuyers',
                'Veterans looking to buy a primary residence',
            ],
            keyBenefits: [
                { title: '$0 Down Payment', description: '100% financing — purchase your home with nothing down. No other mortgage program offers this benefit at this scale.' },
                { title: 'No Private Mortgage Insurance', description: 'Conventional loans with less than 20% down require PMI — VA loans never do. This saves borrowers $100-300+ per month.' },
                { title: 'Below-Market Interest Rates', description: 'VA loan rates are typically 0.25-0.50% lower than conventional rates, saving thousands over the life of the loan.' },
                { title: 'Flexible Credit Requirements', description: 'No official minimum credit score from the VA. Most lenders work with scores as low as 580, and Airus Lending has options for lower scores.' },
                { title: 'No Loan Limit (Full Entitlement)', description: 'Veterans with full entitlement have no maximum loan amount — buy at any price point with $0 down.' },
                { title: 'Seller Concessions Up to 4%', description: 'Sellers can contribute up to 4% of the sale price toward your closing costs, further reducing out-of-pocket expenses.' },
            ],
            qualificationOverview: [
                'Certificate of Eligibility (COE) from the VA — Airus Lending can help you obtain this',
                'Qualifying military service (typically 90 days active wartime or 181 days peacetime)',
                'Satisfactory credit history (no official minimum, most lenders require 580-620+)',
                'Sufficient residual income after major expenses',
                'Property must be owner-occupied primary residence',
                'Property must meet VA Minimum Property Requirements (MPRs)',
            ],
            documentsNeeded: [
                'DD-214 (Certificate of Release or Discharge) for veterans',
                'Statement of Service for active-duty members',
                'Certificate of Eligibility (COE)',
                'Last 2 years W-2s or tax returns',
                'Recent pay stubs (30 days)',
                'Bank statements (2 months)',
                'Government-issued ID',
            ],
            faqs: [
                { question: 'Can I use my VA loan benefit more than once?', answer: 'Yes. VA loan benefits can be reused. If you have paid off a previous VA loan or sold the property, you can restore your entitlement and use it again. Some veterans can even have two VA loans active at the same time.' },
                { question: 'Is there a maximum loan amount for VA loans?', answer: 'For veterans with full entitlement (no active VA loans and no defaulted VA loans), there is no loan limit — you can borrow at any amount with $0 down. For veterans with partial entitlement, county limits may apply.' },
                { question: 'What is the VA funding fee?', answer: 'The VA funding fee is a one-time fee charged on most VA loans. It ranges from 1.25% to 3.3% depending on down payment, service type, and whether it is your first VA loan. Veterans with service-connected disabilities and surviving spouses are exempt.' },
                { question: 'Can I buy a condo with a VA loan?', answer: 'Yes, but the condo project must be on the VA-approved list. Airus Lending can help you verify approval status and navigate the process for unapproved projects.' },
            ],
            relatedProducts: [
                { title: 'VA IRRRL', href: '/va-loans/va-irrrl', description: 'Streamlined rate-reduction refinance with minimal documentation.' },
                { title: 'VA Cash-Out Refinance', href: '/va-loans/va-cash-out', description: 'Access your home equity for debt consolidation or renovations.' },
                { title: 'VA Construction Loans', href: '/va-loans/va-construction', description: 'Build your dream home with VA benefits.' },
            ],
            ctaHeading: 'Ready to Use Your VA Home Loan Benefit?',
            ctaDescription: 'Talk to a VA loan specialist at Airus Lending. We\'ll help you check eligibility, compare options, and close quickly.',
        }} />
    );
}
