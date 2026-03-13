import LocationPageTemplate from '@/templates/LocationPageTemplate';

export const metadata = {
    title: 'Arizona Mortgage Broker | Airus Lending',
    description: 'Licensed Arizona mortgage broker. VA, FHA, conventional, DSCR, bank statement loans in Phoenix, Scottsdale, Tucson, and throughout AZ. 50+ lender partners.',
};

export default function ArizonaPage() {
    return <LocationPageTemplate data={{
        state: 'Arizona',
        stateCode: 'AZ',
        cities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Gilbert', 'Tempe', 'Peoria', 'Surprise', 'Yuma', 'Avondale', 'Goodyear', 'Flagstaff', 'Buckeye', 'Lake Havasu City', 'Casa Grande', 'Maricopa', 'Sierra Vista', 'Queen Creek'],
        stats: [
            { value: '50+', label: 'Lender Partners' },
            { value: '24', label: 'Loan Programs' },
            { value: '4.9★', label: 'Client Rating' },
            { value: '21 Days', label: 'Avg. Close Time' },
        ],
        programs: [
            { title: 'VA Loans', href: '/va-loans', description: '$0 down for Arizona veterans — ideal near Luke AFB, Fort Huachuca, Davis-Monthan AFB, and MCAS Yuma.' },
            { title: 'FHA Loans', href: '/home-loans/fha-loans', description: '3.5% down with flexible credit guidelines for AZ buyers.' },
            { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Competitive rates for Phoenix metro, Tucson, and statewide.' },
            { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Investment property financing for Arizona\'s booming rental markets — qualify on cash flow.' },
            { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'Self-employed AZ borrowers — qualify using bank deposits instead of tax returns.' },
            { title: 'Jumbo Loans', href: '/home-loans/jumbo-loans', description: 'High-value home financing for Scottsdale, Paradise Valley, and luxury Arizona markets.' },
        ],
        faqs: [
            { question: 'Are you licensed to lend in Arizona?', answer: 'Yes. Airus Lending is licensed to originate mortgage loans in Arizona. We work with 50+ wholesale lenders to offer competitive programs statewide.' },
            { question: 'Do you serve the Phoenix metro area?', answer: 'Yes. We serve all of Arizona including Phoenix, Scottsdale, Tucson, Mesa, Chandler, Gilbert, Tempe, and every city statewide. Our process is fully digital.' },
            { question: 'Is Arizona good for real estate investing?', answer: 'Arizona has been one of the top real estate investment markets in the country. Strong population growth, job creation, and rental demand make Phoenix, Tucson, and surrounding areas attractive for DSCR and rental property investors.' },
            { question: 'Can I get a VA loan near Luke Air Force Base?', answer: 'Absolutely. We specialize in VA loans and serve the military communities near Luke AFB, Fort Huachuca, Davis-Monthan AFB, and Marine Corps Air Station Yuma.' },
        ],
        seoDescription: 'Licensed Arizona mortgage broker serving Phoenix, Scottsdale, Tucson, and all AZ cities.',
    }} />;
}
