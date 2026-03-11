import LocationPageTemplate from '@/templates/LocationPageTemplate';

export const metadata = {
    title: 'California Mortgage Broker | Airus Lending',
    description: 'Licensed California mortgage broker. VA, FHA, conventional, jumbo, DSCR, bank statement loans across LA, San Francisco, San Diego, and all CA. 50+ lender partners.',
};

export default function CaliforniaPage() {
    return <LocationPageTemplate data={{
        state: 'California',
        stateCode: 'CA',
        cities: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento', 'Fresno', 'Long Beach', 'Oakland', 'Riverside', 'Anaheim', 'Irvine', 'Santa Ana', 'Bakersfield', 'Stockton', 'Pasadena', 'Torrance', 'Carlsbad', 'Oceanside', 'Temecula', 'Santa Clarita'],
        stats: [
            { value: '50+', label: 'Lender Partners' },
            { value: '24', label: 'Loan Programs' },
            { value: '4.9★', label: 'Client Rating' },
            { value: '21 Days', label: 'Avg. Close Time' },
        ],
        programs: [
            { title: 'VA Loans', href: '/va-loans', description: '$0 down, no PMI for California veterans. Major bases: Camp Pendleton, Travis AFB, Edwards AFB.' },
            { title: 'Jumbo Loans', href: '/home-loans/jumbo-loans', description: 'High-balance loans for California\'s high-cost markets — up to $4M+.' },
            { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'High-balance conforming loans for CA markets where limits exceed $766,550.' },
            { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Investment property financing for California real estate investors.' },
            { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'CA has the highest self-employment rate — qualify using bank deposits.' },
            { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Government-backed loans with 3.5% down — high-balance FHA available in CA.' },
        ],
        faqs: [
            { question: 'Are you licensed in California?', answer: 'Yes. Airus Lending is licensed to originate mortgage loans in California under the DRE and DFPI. We serve borrowers in all 58 counties.' },
            { question: 'What are California conforming loan limits?', answer: 'California 2024 conforming limits range from $766,550 (baseline counties) to $1,149,825 (high-cost counties like LA, SF, San Diego). Loans above these limits are jumbo loans.' },
            { question: 'Do you offer jumbo loans in CA?', answer: 'Yes. We work with multiple wholesale lenders offering jumbo loan programs up to $4M+ for California\'s high-cost real estate markets. Both full-doc and bank statement jumbo options available.' },
            { question: 'What are typical California property taxes?', answer: 'California property taxes average about 0.75% of assessed value (Proposition 13), but Mello-Roos taxes and local assessments can increase the effective rate significantly in newer developments.' },
        ],
        seoDescription: 'Licensed California mortgage broker serving Los Angeles, San Francisco, San Diego, and all CA cities.',
    }} />;
}
