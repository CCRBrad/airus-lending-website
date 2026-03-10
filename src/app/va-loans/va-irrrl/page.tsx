import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata = { title: 'VA IRRRL (Streamline Refinance) | Airus Lending', description: 'VA Interest Rate Reduction Refinance Loan. Streamlined refinancing with minimal paperwork — lower your rate in as little as 15 days.' };
export default function VAIRRRLPage() {
    return <LoanPageTemplate data={{
        badge: 'VA Streamline', title: 'VA IRRRL', subtitle: 'Interest Rate Reduction Refinance Loan — the fastest, simplest way to lower your VA mortgage rate with minimal documentation.',
        overview: 'The VA IRRRL (Interest Rate Reduction Refinance Loan), also known as a VA Streamline Refinance, is designed for veterans who already have a VA loan and want to reduce their interest rate or switch from an adjustable to a fixed rate. It requires minimal documentation, often no appraisal, and can close in as little as 15 days. At Airus Lending, we process VA IRRRLs efficiently and can typically close faster than most lenders.',
        whoIsItFor: ['Veterans with an existing VA loan', 'Borrowers looking to lower their current VA interest rate', 'Veterans switching from an adjustable-rate to fixed-rate VA loan', 'Homeowners who want a fast, low-documentation refinance'],
        keyBenefits: [
            { title: 'Minimal Documentation', description: 'No income verification, no asset verification, and often no appraisal required.' },
            { title: 'Fast Closing', description: 'Many IRRRLs close in 15-21 days due to streamlined underwriting.' },
            { title: 'Lower Funding Fee', description: 'The IRRRL funding fee is only 0.5% — significantly lower than purchase or cash-out fees.' },
            { title: 'No Out-of-Pocket Costs', description: 'All closing costs can be rolled into the loan so you pay nothing at closing.' },
        ],
        qualificationOverview: ['Must have an existing VA loan', 'Must demonstrate a "net tangible benefit" (lower rate or fixed rate)', 'At least 210 days since your last VA loan closed', 'At least 6 monthly payments made on current VA loan', 'Current on payments — no late payments in last 12 months'],
        documentsNeeded: ['Current VA loan statement', 'Certificate of Eligibility (most lenders can verify electronically)', 'Government-issued ID', 'No income or asset documentation typically required'],
        faqs: [
            { question: 'Do I need an appraisal for a VA IRRRL?', answer: 'In most cases, no. The VA IRRRL is designed to be streamlined, and most lenders waive the appraisal requirement. Airus Lending typically does not require an appraisal for IRRRLs.' },
            { question: 'Can I skip monthly payments with an IRRRL?', answer: 'You may have the option to skip one monthly payment during the refinance process, depending on timing. Your advisor will walk you through the specifics.' },
            { question: 'What is the minimum rate reduction for an IRRRL?', answer: 'The VA requires a "net tangible benefit," which typically means a reduction of at least 0.5% in your interest rate, or a switch from an adjustable to a fixed rate.' },
        ],
        relatedProducts: [
            { title: 'VA Cash-Out Refinance', href: '/va-loans/va-cash-out', description: 'Need to access equity? Cash-out may be better.' },
            { title: 'VA Home Loans', href: '/va-loans/va-home-loans', description: 'Buying a new home with VA benefits.' },
            { title: 'VA Refinance', href: '/va-loans/va-refinance', description: 'Compare all VA refinance options.' },
        ],
    }} />;
}
