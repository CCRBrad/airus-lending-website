import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata = { title: 'VA Loan Limits by County | Airus Lending', description: 'Understand VA loan limits, full entitlement vs partial entitlement, and county-level limits for 2024-2025.' };
export default function VALoanLimitsPage() {
    return <LoanPageTemplate data={{
        badge: 'Loan Limits', title: 'VA Loan Limits', subtitle: 'Understand how VA loan limits work, the difference between full and partial entitlement, and what you can borrow in your county.',
        overview: 'For veterans with full entitlement, there is no VA loan limit — you can borrow any amount with $0 down. However, veterans with partial entitlement (those with an existing VA loan or prior VA loan default) are subject to county-level conforming loan limits set by the FHFA. Understanding your entitlement status and applicable limits is crucial for planning your home purchase.',
        whoIsItFor: ['Veterans planning a home purchase', 'Borrowers with existing or prior VA loans', 'Veterans buying in high-cost areas', 'Anyone seeking to understand their borrowing capacity'],
        keyBenefits: [
            { title: 'No Limit — Full Entitlement', description: 'Veterans with full entitlement have no maximum loan amount. Buy a $500K, $1M, or $2M+ home with $0 down.' },
            { title: 'County Limits — Partial Entitlement', description: 'For partial entitlement, limits are based on FHFA conforming loan limits, which vary by county.' },
            { title: 'Jumbo VA Loans', description: 'Even with partial entitlement, you can exceed limits — you just need a down payment on the amount exceeding the guarantee.' },
            { title: 'Annual Updates', description: 'FHFA updates conforming loan limits annually. The 2024 baseline limit is $766,550, with higher limits in high-cost areas.' },
        ],
        qualificationOverview: ['Full entitlement: No active VA loans and no defaulted VA loans = no limit', 'Partial entitlement: Subject to county conforming loan limits', 'High-cost areas may have limits up to $1,149,825', 'Entitlement can be restored when a previous VA loan is paid off and property sold'],
        documentsNeeded: ['Certificate of Eligibility (shows your current entitlement)', 'Prior VA loan history (if applicable)', 'Property address for county-specific limit lookup'],
        faqs: [
            { question: 'How do I know if I have full entitlement?', answer: 'You have full entitlement if you have never used your VA benefit before, or if you have used it but have paid off the loan and sold the property (restoring your entitlement). Your COE will show your remaining entitlement.' },
            { question: 'Can I buy above the county limit?', answer: 'Yes. With full entitlement, there is no limit. With partial entitlement, you can still buy above the limit but will need a down payment on the portion of the loan that exceeds the VA guarantee.' },
        ],
        relatedProducts: [
            { title: 'VA Home Loans', href: '/va-loans/va-home-loans', description: 'Purchase your home with VA benefits.' },
            { title: 'VA Eligibility', href: '/va-loans/va-eligibility', description: 'Verify your eligibility and entitlement.' },
            { title: 'VA Funding Fee', href: '/va-loans/va-funding-fee', description: 'Understand the VA funding fee.' },
        ],
    }} />;
}
