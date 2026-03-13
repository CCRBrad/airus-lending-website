import LocationPageTemplate from '@/templates/LocationPageTemplate';

export const metadata = {
    title: 'Washington Mortgage Broker | Airus Lending',
    description: 'Licensed Washington State mortgage broker. VA, FHA, conventional, DSCR, bank statement loans in Seattle, Tacoma, Spokane, and throughout WA. 50+ lender partners.',
};

export default function WashingtonPage() {
    return <LocationPageTemplate data={{
        state: 'Washington',
        stateCode: 'WA',
        cities: ['Seattle', 'Tacoma', 'Spokane', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Federal Way', 'Kirkland', 'Redmond', 'Olympia', 'Bellingham', 'Kennewick', 'Auburn', 'Puyallup', 'Sammamish', 'Bothell', 'Issaquah', 'Woodinville'],
        stats: [
            { value: '50+', label: 'Lender Partners' },
            { value: '24', label: 'Loan Programs' },
            { value: '4.9★', label: 'Client Rating' },
            { value: '21 Days', label: 'Avg. Close Time' },
        ],
        programs: [
            { title: 'VA Loans', href: '/va-loans', description: '$0 down for eligible Washington veterans — ideal near JBLM, Fairchild AFB, and Bangor.' },
            { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Competitive rates for well-qualified Washington buyers.' },
            { title: 'Jumbo Loans', href: '/home-loans/jumbo-loans', description: 'High-value home financing in Seattle, Bellevue, and Eastside markets.' },
            { title: 'FHA Loans', href: '/home-loans/fha-loans', description: '3.5% down with flexible credit guidelines for WA buyers.' },
            { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Investment property financing based on rental income — popular in Seattle, Tacoma, and Spokane.' },
            { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'Self-employed borrowers in WA — qualify using bank deposits instead of tax returns.' },
        ],
        faqs: [
            { question: 'Are you licensed to lend in Washington?', answer: 'Yes. Airus Lending is licensed to originate mortgage loans in Washington State. We work with 50+ wholesale lenders to offer the widest selection of programs to WA borrowers.' },
            { question: 'Do you serve the Seattle metro area?', answer: 'Yes. We serve all of Washington including Seattle, Bellevue, Tacoma, Kirkland, Redmond, Everett, and all Puget Sound communities. Our process is fully digital so location within WA does not matter.' },
            { question: 'Are jumbo loans available in Washington?', answer: 'Yes. With home prices in the Seattle-Bellevue metro frequently exceeding conforming limits, we offer jumbo loans and high-balance conforming loans with competitive rates.' },
            { question: 'Can I get a VA loan near Joint Base Lewis-McChord?', answer: 'Absolutely. We specialize in VA loans and serve the large military community near JBLM, Fairchild AFB, Naval Station Everett, and Naval Base Kitsap.' },
        ],
        seoDescription: 'Licensed Washington State mortgage broker serving Seattle, Tacoma, Spokane, and all WA cities.',
    }} />;
}
