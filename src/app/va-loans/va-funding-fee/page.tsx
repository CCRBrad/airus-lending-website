import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata = { title: 'VA Funding Fee Guide | Airus Lending', description: 'Complete guide to the VA funding fee — rates, exemptions, first-use vs subsequent, and how to finance it into your loan.' };
export default function VAFundingFeePage() {
    return <LoanPageTemplate data={{
        badge: 'Funding Fee', title: 'VA Funding Fee', subtitle: 'Everything you need to know about the VA funding fee — rates, exemptions, and how it affects your loan.',
        overview: 'The VA funding fee is a one-time fee paid to the Department of Veterans Affairs on most VA loans. It helps offset the cost of the VA home loan program to taxpayers. The fee varies based on your type of service, down payment amount, and whether it\'s your first VA loan. Many veterans are exempt from the funding fee entirely. The fee can be paid upfront at closing or financed into the loan.',
        whoIsItFor: ['All VA loan borrowers (unless exempt)', 'Veterans researching VA loan costs', 'Borrowers comparing VA vs conventional loan costs', 'Veterans with service-connected disabilities (may be exempt)'],
        keyBenefits: [
            { title: 'First-Use Purchase Rates', description: '0% down: 2.15% | 5%+ down: 1.5% | 10%+ down: 1.25% — rates decrease with larger down payments.' },
            { title: 'Subsequent Use Rates', description: '0% down: 3.3% | 5%+ down: 1.5% | 10%+ down: 1.25% — subsequent use has higher rates at 0% down.' },
            { title: 'IRRRL Rate', description: 'Only 0.5% — the streamline refinance has the lowest funding fee of any VA loan type.' },
            { title: 'Cash-Out Rates', description: '2.15% first use, 3.3% subsequent use — regardless of down payment amount.' },
        ],
        qualificationOverview: [
            'Exempt: Veterans with 10%+ service-connected disability rating',
            'Exempt: Surviving spouses eligible for VA loan benefits',
            'Exempt: Veterans receiving VA compensation for service-connected disability',
            'Exempt: Active-duty Purple Heart recipients',
            'Fee can be financed into the loan amount',
            'Fee is not applicable to IRRRLs from exempt veterans',
        ],
        documentsNeeded: ['Certificate of Eligibility (shows disability status)', 'VA disability rating letter (if applicable)', 'DD-214 showing Purple Heart (if applicable)'],
        faqs: [
            { question: 'Can I finance the funding fee into my loan?', answer: 'Yes. Most VA borrowers finance the funding fee into their loan amount so they pay nothing additional at closing. For example, on a $300,000 loan with a 2.15% fee, the fee ($6,450) would be added to your loan balance.' },
            { question: 'How do I know if I am exempt from the funding fee?', answer: 'You are exempt if you have a VA disability rating of 10% or higher, are a surviving spouse receiving dependency benefits, or are an active-duty Purple Heart recipient. Your COE and VA disability letter will confirm your status.' },
            { question: 'Is the VA funding fee tax deductible?', answer: 'In many cases, yes. The VA funding fee is generally considered a form of mortgage insurance premium and may be deductible. Consult your tax advisor for guidance specific to your situation.' },
        ],
        relatedProducts: [
            { title: 'VA Home Loans', href: '/va-loans/va-home-loans', description: 'Purchase your home with VA benefits.' },
            { title: 'VA IRRRL', href: '/va-loans/va-irrrl', description: 'Lowest funding fee at only 0.5%.' },
            { title: 'VA Eligibility', href: '/va-loans/va-eligibility', description: 'Check your eligibility and exemption status.' },
        ],
    }} />;
}
