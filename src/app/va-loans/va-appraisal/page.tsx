import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata = { title: 'VA Appraisal Process Guide | Airus Lending', description: 'What to expect during the VA appraisal — Minimum Property Requirements, timeline, tidewater initiative, and how to prepare.' };
export default function VAAppraisalPage() {
    return <LoanPageTemplate data={{
        badge: 'VA Appraisal', title: 'VA Appraisal Process', subtitle: 'Understand the VA appraisal — what it covers, how long it takes, Minimum Property Requirements, and how to avoid common issues.',
        overview: 'The VA appraisal is a required step in the VA loan process. Unlike conventional appraisals, the VA appraisal serves two purposes: it determines the fair market value of the property AND verifies that it meets VA Minimum Property Requirements (MPRs). These requirements ensure that the home is safe, structurally sound, and sanitary. Understanding the VA appraisal process helps set expectations and avoid common delays.',
        whoIsItFor: ['VA homebuyers preparing for the appraisal', 'Sellers of homes being purchased with VA loans', 'Real estate agents working with VA buyers', 'Veterans with a VA loan under contract'],
        keyBenefits: [
            { title: 'Minimum Property Requirements (MPRs)', description: 'The VA appraiser checks for adequate roofing, safe electrical and plumbing, functioning HVAC, no lead paint hazards, and proper drainage.' },
            { title: 'Timeline', description: 'VA appraisals typically take 7-10 business days but vary by region. Airus Lending works to expedite the process.' },
            { title: 'Tidewater Initiative', description: 'If the appraiser believes the value may come in below the purchase price, they must invoke "Tidewater" — giving the parties time to provide comparable sales data.' },
            { title: 'Reconsideration of Value (ROV)', description: 'If the appraisal comes in low, borrowers can request a Reconsideration of Value with additional comparable sales.' },
        ],
        qualificationOverview: [
            'Property must have adequate heating and cooling',
            'Roof must be in good condition with minimum 2 years remaining life',
            'No lead-based paint hazards (properties built before 1978)',
            'Safe and functional electrical, plumbing, and mechanical systems',
            'No termite damage or active infestations',
            'Adequate potable water supply and sewage disposal',
            'Property must be accessible from a public or private road',
        ],
        documentsNeeded: ['Signed purchase contract', 'Property address and access information', 'Any renovation plans or disclosures', 'Comparable sales data (if needed for ROV)'],
        faqs: [
            { question: 'What happens if the appraisal comes in low?', answer: 'If the appraisal is less than the purchase price, you have options: renegotiate the price with the seller, pay the difference in cash, request a Reconsideration of Value with additional comparable sales, or in some cases, walk away with your earnest money protected by the VA escape clause.' },
            { question: 'Can the seller make repairs for a VA appraisal?', answer: 'Yes. If the appraiser notes MPR deficiencies, the seller can make the required repairs. Airus Lending will coordinate the re-inspection process after repairs are complete.' },
            { question: 'How is a VA appraisal different from a home inspection?', answer: 'The VA appraisal determines market value and checks for MPR compliance but is NOT a comprehensive home inspection. We always recommend getting a separate home inspection in addition to the VA appraisal.' },
        ],
        relatedProducts: [
            { title: 'VA Home Loans', href: '/va-loans/va-home-loans', description: 'Purchase your home with VA benefits.' },
            { title: 'VA Eligibility', href: '/va-loans/va-eligibility', description: 'Check your eligibility before starting.' },
            { title: 'VA Funding Fee', href: '/va-loans/va-funding-fee', description: 'Understand the VA funding fee.' },
        ],
    }} />;
}
