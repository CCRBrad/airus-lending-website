import LocationPageTemplate from '@/templates/LocationPageTemplate';

export const metadata = {
    title: 'Florida Mortgage Broker | Airus Lending',
    description: 'Licensed Florida mortgage broker. VA, FHA, conventional, DSCR, bank statement, and condo loans in Miami, Tampa, Orlando, Jacksonville, and throughout FL.',
};

export default function FloridaPage() {
    return <LocationPageTemplate data={{
        state: 'Florida',
        stateCode: 'FL',
        cities: ['Miami', 'Tampa', 'Orlando', 'Jacksonville', 'Fort Lauderdale', 'St. Petersburg', 'Hialeah', 'Cape Coral', 'Port St. Lucie', 'Tallahassee', 'Palm Bay', 'Pembroke Pines', 'Coral Springs', 'Gainesville', 'Naples', 'Sarasota', 'Clearwater', 'Boca Raton', 'Kissimmee', 'Lakeland'],
        stats: [
            { value: '50+', label: 'Lender Partners' },
            { value: '24', label: 'Loan Programs' },
            { value: '4.9★', label: 'Client Rating' },
            { value: '21 Days', label: 'Avg. Close Time' },
        ],
        programs: [
            { title: 'VA Loans', href: '/va-loans', description: '$0 down, no PMI for Florida veterans. Major bases: MacDill AFB, NAS Jacksonville, Patrick SFB.' },
            { title: 'FHA Loans', href: '/home-loans/fha-loans', description: '3.5% down — accessible option for Florida first-time buyers.' },
            { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Competitive rates for FL borrowers with strong credit.' },
            { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Investment property financing for Florida\'s active rental markets — STR and LTR.' },
            { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'Popular in Florida\'s large self-employed and seasonal worker population.' },
            { title: 'Condo Loans', href: '/home-loans/conventional-loans', description: 'We navigate Florida\'s post-Surfside condo lending requirements with ease.' },
        ],
        faqs: [
            { question: 'Are you licensed in Florida?', answer: 'Yes. Airus Lending is licensed to originate mortgage loans in Florida. We serve borrowers in all 67 counties across the state.' },
            { question: 'Is it harder to get a condo loan in Florida now?', answer: 'After the Surfside building collapse in 2021, Florida enacted new condo safety legislation requiring structural inspections and reserve funding for buildings 30+ years old. Some lenders have tightened condo lending — Airus Lending works with multiple lenders who continue to finance Florida condos with competitive terms.' },
            { question: 'Does Florida have a state income tax?', answer: 'No. Florida has no state income tax, which is a significant advantage for mortgage qualification — your gross income has more purchasing power compared to high-tax states.' },
            { question: 'Are flood insurance rates a concern in Florida?', answer: 'Yes. Many Florida properties require flood insurance, especially in FEMA-designated flood zones. Rates vary significantly by location. Your Airus Lending advisor can help you factor flood insurance into your affordability calculations.' },
        ],
        seoDescription: 'Licensed Florida mortgage broker serving Miami, Tampa, Orlando, Jacksonville, and all FL cities.',
    }} />;
}
