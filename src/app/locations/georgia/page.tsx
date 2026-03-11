import LocationPageTemplate from '@/templates/LocationPageTemplate';

export const metadata = {
    title: 'Georgia Mortgage Broker | Airus Lending',
    description: 'Licensed Georgia mortgage broker. VA, FHA, conventional, DSCR, bank statement loans in Atlanta, Savannah, Augusta, and throughout GA. 50+ lender partners.',
};

export default function GeorgiaPage() {
    return <LocationPageTemplate data={{
        state: 'Georgia',
        stateCode: 'GA',
        cities: ['Atlanta', 'Savannah', 'Augusta', 'Columbus', 'Macon', 'Athens', 'Roswell', 'Sandy Springs', 'Johns Creek', 'Alpharetta', 'Marietta', 'Kennesaw', 'Lawrenceville', 'Duluth', 'Peachtree City', 'Brookhaven', 'Woodstock', 'Canton', 'Newnan', 'Valdosta'],
        stats: [
            { value: '50+', label: 'Lender Partners' },
            { value: '24', label: 'Loan Programs' },
            { value: '4.9★', label: 'Client Rating' },
            { value: '21 Days', label: 'Avg. Close Time' },
        ],
        programs: [
            { title: 'VA Loans', href: '/va-loans', description: '$0 down, no PMI for eligible Georgia veterans and military families.' },
            { title: 'FHA Loans', href: '/home-loans/fha-loans', description: '3.5% down with flexible credit guidelines for GA buyers.' },
            { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Competitive rates for well-qualified Georgia borrowers.' },
            { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Investment property financing based on rental income — popular for Atlanta investors.' },
            { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'Self-employed borrowers in GA — qualify using bank deposits instead of tax returns.' },
            { title: 'Georgia DPA Programs', href: '/resources/first-time-homebuyer-guide', description: 'Georgia Dream and other state DPA programs for first-time buyers.' },
        ],
        faqs: [
            { question: 'Are you licensed to lend in Georgia?', answer: 'Yes. Airus Lending is licensed to originate mortgage loans in Georgia. We work with 50+ wholesale lenders to offer the widest selection of loan programs available to GA borrowers.' },
            { question: 'What is the Georgia Dream program?', answer: 'Georgia Dream is a state homebuyer assistance program offering below-market interest rates and down payment assistance to eligible first-time homebuyers. Ask your Airus Lending advisor if you qualify.' },
            { question: 'Can I get a VA loan in Georgia?', answer: 'Absolutely. Georgia has multiple military installations including Fort Moore, Robins AFB, and Hunter Army Airfield. We specialize in VA loans and serve veterans statewide.' },
            { question: 'What are typical closing costs in Georgia?', answer: 'Georgia closing costs typically range from 2% to 4% of the loan amount. Georgia uses attorneys for closings rather than title companies in most counties.' },
        ],
        seoDescription: 'Licensed Georgia mortgage broker serving Atlanta, Savannah, Augusta, and all GA cities.',
    }} />;
}
