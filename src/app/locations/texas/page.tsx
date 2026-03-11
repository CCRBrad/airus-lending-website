import LocationPageTemplate from '@/templates/LocationPageTemplate';

export const metadata = {
    title: 'Texas Mortgage Broker | Airus Lending',
    description: 'Licensed Texas mortgage broker. VA, FHA, conventional, DSCR, bank statement loans in Houston, Dallas, Austin, San Antonio, and throughout TX. 50+ lender partners.',
};

export default function TexasPage() {
    return <LocationPageTemplate data={{
        state: 'Texas',
        stateCode: 'TX',
        cities: ['Houston', 'Dallas', 'San Antonio', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Plano', 'Corpus Christi', 'Lubbock', 'Laredo', 'Irving', 'Frisco', 'McKinney', 'Round Rock', 'Denton', 'Midland', 'The Woodlands', 'Sugar Land', 'Katy'],
        stats: [
            { value: '50+', label: 'Lender Partners' },
            { value: '24', label: 'Loan Programs' },
            { value: '4.9★', label: 'Client Rating' },
            { value: '21 Days', label: 'Avg. Close Time' },
        ],
        programs: [
            { title: 'VA Loans', href: '/va-loans', description: '$0 down, no PMI for Texas veterans. Major bases: Fort Cavazos, Fort Bliss, NAS JRB Fort Worth.' },
            { title: 'FHA Loans', href: '/home-loans/fha-loans', description: '3.5% down — popular in TX metro areas for first-time buyers.' },
            { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Competitive rates for Texas borrowers across all markets.' },
            { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Investment property financing for Dallas, Houston, Austin, and San Antonio investors.' },
            { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'Texas has the 2nd most self-employed workers — qualify using bank deposits.' },
            { title: 'Texas Cash-Out', href: '/refinance/cash-out-refinance', description: 'Texas Section 50(a)(6) cash-out refinances — we understand TX-specific rules.' },
        ],
        faqs: [
            { question: 'Are you licensed in Texas?', answer: 'Yes. Airus Lending is licensed to originate mortgage loans in Texas. We comply with all Texas-specific lending requirements including Section 50(a)(6) for cash-out refinances.' },
            { question: 'What is special about Texas cash-out refinances?', answer: 'Texas has unique constitutional requirements for cash-out refinances (Section 50(a)(6)). These include a maximum 80% LTV, a 12-day waiting period, and once-per-year limitations. Airus Lending understands these rules and ensures compliance.' },
            { question: 'Does Texas have a state income tax?', answer: 'No. Texas has no state income tax, which means more of your income goes further for mortgage qualification. However, Texas property taxes tend to be higher — averaging 1.6% to 2.1% of assessed value.' },
            { question: 'Are there DPA programs in Texas?', answer: 'Yes. The Texas State Affordable Housing Corporation (TSAHC) and Texas Department of Housing and Community Affairs (TDHCA) offer several down payment assistance programs for eligible homebuyers.' },
        ],
        seoDescription: 'Licensed Texas mortgage broker serving Houston, Dallas, Austin, San Antonio, and all TX cities.',
    }} />;
}
