import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata = { title: 'VA Refinance | Airus Lending', description: 'Refinance your existing VA or non-VA loan with a VA refinance. Lower rates, reduced payments, and no PMI.' };
export default function VARefinancePage() {
    return <LoanPageTemplate data={{
        badge: 'VA Refinance', title: 'VA Refinance', subtitle: 'Lower your rate, shorten your term, or switch from a conventional loan to a VA loan — all with $0 down and no PMI.',
        overview: 'VA refinancing allows eligible veterans and service members to take advantage of their VA benefit to improve their current mortgage terms. Whether you currently have a VA loan or a conventional/FHA loan, you may be able to refinance into a VA loan with better rates and no mortgage insurance. Airus Lending specializes in VA refinances and can help you determine the best option for your situation.',
        whoIsItFor: ['Veterans currently paying a higher interest rate', 'Borrowers with a conventional or FHA loan who are VA-eligible', 'Homeowners looking to shorten their loan term', 'Veterans who want to eliminate PMI by switching to VA'],
        keyBenefits: [
            { title: 'Lower Interest Rate', description: 'VA rates are typically lower than conventional rates, potentially saving thousands annually.' },
            { title: 'No PMI', description: 'Refinancing to a VA loan eliminates PMI if you currently have it on a conventional or FHA loan.' },
            { title: 'Flexible Options', description: 'Rate-and-term refinance, IRRRL, or cash-out — choose the refinance type that fits your goals.' },
            { title: 'No Down Payment on Rate/Term', description: 'Refinance up to 100% of your home value with no additional cash needed.' },
        ],
        qualificationOverview: ['Valid Certificate of Eligibility', 'Current on existing mortgage payments', 'Property serves as primary residence', 'Sufficient credit and income documentation'],
        documentsNeeded: ['DD-214 or Statement of Service', 'Certificate of Eligibility', 'Current mortgage statement', 'Recent pay stubs and W-2s', 'Bank statements'],
        faqs: [
            { question: 'Can I refinance a conventional loan into a VA loan?', answer: 'Yes. If you are VA-eligible, you can refinance a conventional, FHA, or USDA loan into a VA loan through a VA rate-and-term refinance. This eliminates PMI and often provides a lower rate.' },
            { question: 'What is the difference between VA IRRRL and VA rate-and-term refinance?', answer: 'The IRRRL (Interest Rate Reduction Refinance Loan) is only for existing VA-to-VA refinances and has minimal documentation. A rate-and-term refinance can convert a non-VA loan to VA and requires standard documentation including appraisal.' },
        ],
        relatedProducts: [
            { title: 'VA IRRRL', href: '/va-loans/va-irrrl', description: 'Streamlined refinance for existing VA loans.' },
            { title: 'VA Cash-Out Refinance', href: '/va-loans/va-cash-out', description: 'Access equity from your home.' },
            { title: 'VA Home Loans', href: '/va-loans/va-home-loans', description: 'Purchase a home with your VA benefit.' },
        ],
    }} />;
}
