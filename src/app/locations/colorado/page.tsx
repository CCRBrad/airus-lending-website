import LocationPageTemplate from '@/templates/LocationPageTemplate';

export const metadata = {
    title: 'Colorado Mortgage Broker | Airus Lending',
    description: 'Licensed Colorado mortgage broker. VA, FHA, conventional, DSCR, bank statement loans in Denver, Colorado Springs, Aurora, and throughout CO. 50+ lender partners.',
};

export default function ColoradoPage() {
    return <LocationPageTemplate data={{
        state: 'Colorado',
        stateCode: 'CO',
        cities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton', 'Arvada', 'Westminster', 'Centennial', 'Boulder', 'Pueblo', 'Greeley', 'Longmont', 'Loveland', 'Castle Rock', 'Broomfield', 'Parker', 'Commerce City', 'Brighton', 'Littleton'],
        stats: [
            { value: '50+', label: 'Lender Partners' },
            { value: '24', label: 'Loan Programs' },
            { value: '4.9★', label: 'Client Rating' },
            { value: '21 Days', label: 'Avg. Close Time' },
        ],
        programs: [
            { title: 'VA Loans', href: '/va-loans', description: '$0 down for eligible Colorado veterans — ideal near Fort Carson, Buckley SFB, Peterson SFB, and Schriever SFB.' },
            { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Competitive rates for Denver metro and Front Range buyers.' },
            { title: 'Jumbo Loans', href: '/home-loans/jumbo-loans', description: 'High-value home financing for Denver, Boulder, and mountain communities.' },
            { title: 'FHA Loans', href: '/home-loans/fha-loans', description: '3.5% down with flexible credit for first-time buyers statewide.' },
            { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Investment property financing for Colorado\'s strong rental markets.' },
            { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'Self-employed borrowers — qualify using bank deposits instead of tax returns.' },
        ],
        faqs: [
            { question: 'Are you licensed to lend in Colorado?', answer: 'Yes. Airus Lending is licensed to originate mortgage loans in Colorado. We work with 50+ wholesale lenders to offer competitive programs statewide.' },
            { question: 'Do you serve the Denver metro area?', answer: 'Yes. We serve all of Colorado including Denver, Colorado Springs, Aurora, Fort Collins, Boulder, and all Front Range communities. Our process is fully digital.' },
            { question: 'Are jumbo loans available in Colorado?', answer: 'Yes. With home prices in parts of the Denver metro and mountain towns exceeding conforming limits, we offer jumbo loans with competitive terms.' },
            { question: 'What military installations are near Colorado?', answer: 'Colorado has a significant military presence including Fort Carson (Army), Peterson SFB, Schriever SFB, Buckley SFB (Space Force/Air Force), and the Air Force Academy. We specialize in VA loans for all Colorado military communities.' },
        ],
        seoDescription: 'Licensed Colorado mortgage broker serving Denver, Colorado Springs, Aurora, and all CO cities.',
    }} />;
}
