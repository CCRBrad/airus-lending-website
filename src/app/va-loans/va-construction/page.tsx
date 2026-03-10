import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata = { title: 'VA Construction Loans | Airus Lending', description: 'Build your dream home with a VA construction-to-permanent loan. $0 down, no PMI, one closing.' };
export default function VAConstructionPage() {
    return <LoanPageTemplate data={{
        badge: 'VA Construction', title: 'VA Construction Loans', subtitle: 'Build your dream home using your VA benefit — $0 down, no PMI, and a single close from construction to permanent financing.',
        overview: 'VA construction loans allow eligible veterans to finance the construction of a new home using their VA benefit. These one-time-close loans combine the construction financing and permanent mortgage into a single loan, eliminating the need for two separate closings. While VA construction loans are more complex than standard VA purchases, Airus Lending works with specialized construction lenders to make the process as smooth as possible.',
        whoIsItFor: ['Veterans who want to build a custom home', 'Military families building on land they already own', 'Veterans purchasing a new construction home from a builder', 'Service members relocating to an area with limited existing inventory'],
        keyBenefits: [
            { title: 'Single Close', description: 'One closing for both construction and permanent financing — less paperwork, lower costs.' },
            { title: '$0 Down Payment', description: 'Build your home with zero money down, just like a VA purchase loan.' },
            { title: 'No PMI', description: 'No mortgage insurance at any point during construction or after completion.' },
            { title: 'Interest-Only During Construction', description: 'Only pay interest on the amount drawn during the construction phase, keeping payments low.' },
        ],
        qualificationOverview: ['Valid Certificate of Eligibility', 'Approved builder/contractor with proper licensing and insurance', 'Detailed construction plans and specifications', 'Lot or land purchase included or already owned', 'Standard VA credit and income requirements'],
        documentsNeeded: ['DD-214 or Statement of Service', 'Certificate of Eligibility', 'Construction plans and specifications', 'Builder contract and credentials', 'Cost breakdown and timeline', 'Standard income and asset documentation'],
        faqs: [
            { question: 'Can I use a VA loan to buy land and build?', answer: 'VA loans cannot be used to purchase land alone, but a VA construction loan can include the purchase of land when combined with construction financing in a single transaction.' },
            { question: 'Do all lenders offer VA construction loans?', answer: 'No. VA construction loans are a specialty product offered by a limited number of lenders. Airus Lending works with wholesale lenders who specialize in VA construction financing.' },
        ],
        relatedProducts: [
            { title: 'VA Home Loans', href: '/va-loans/va-home-loans', description: 'Purchase an existing home with VA benefits.' },
            { title: 'VA Eligibility Guide', href: '/va-loans/va-eligibility', description: 'Check your VA eligibility first.' },
            { title: 'VA Loan Limits', href: '/va-loans/va-loan-limits', description: 'Understand VA loan limits for your area.' },
        ],
    }} />;
}
