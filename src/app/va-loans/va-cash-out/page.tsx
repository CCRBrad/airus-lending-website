import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata = { title: 'VA Cash-Out Refinance | Airus Lending', description: 'Access your home equity with a VA cash-out refinance. Consolidate debt, fund renovations, or invest — with no PMI.' };
export default function VACashOutPage() {
    return <LoanPageTemplate data={{
        badge: 'VA Cash-Out', title: 'VA Cash-Out Refinance', subtitle: 'Tap into your home equity for debt consolidation, home improvements, investments, or any purpose — all with VA benefits.',
        overview: 'A VA cash-out refinance allows eligible veterans to refinance their existing mortgage (VA or non-VA) and take cash out from their home equity. You can borrow up to 100% of your home\'s appraised value in most cases, making this one of the most flexible cash-out options available. Whether you want to consolidate high-interest debt, fund home renovations, or invest, the VA cash-out refinance gives you powerful options with no PMI.',
        whoIsItFor: ['Veterans who want to access home equity', 'Homeowners looking to consolidate high-interest debt', 'Veterans refinancing from a conventional or FHA loan to VA', 'Homeowners funding renovations, education, or investments'],
        keyBenefits: [
            { title: 'Up to 100% LTV', description: 'Borrow up to 100% of your home\'s appraised value — more than any conventional cash-out option.' },
            { title: 'No PMI', description: 'Even at 100% LTV, VA cash-out refinances never require mortgage insurance.' },
            { title: 'Use Funds for Anything', description: 'No restrictions on how you use the cash — debt consolidation, renovations, investments, emergencies.' },
            { title: 'Convert Non-VA to VA', description: 'Refinance from a conventional or FHA loan into a VA loan and take cash out simultaneously.' },
        ],
        qualificationOverview: ['Valid Certificate of Eligibility', 'Sufficient home equity based on current appraisal', 'Credit score typically 620+ (varies by lender)', 'Standard income and employment verification', 'Property must be primary residence'],
        documentsNeeded: ['DD-214 or Statement of Service', 'Certificate of Eligibility', 'Current mortgage statement', 'Last 2 years W-2s and tax returns', 'Recent pay stubs', 'Bank statements (2 months)', 'Property appraisal (ordered during process)'],
        faqs: [
            { question: 'How much cash can I take out?', answer: 'You can typically borrow up to 100% of your home\'s appraised value minus your existing mortgage balance. For example, if your home is worth $400,000 and you owe $250,000, you could access up to $150,000 in cash.' },
            { question: 'Is the VA cash-out funding fee higher?', answer: 'Yes, the funding fee for cash-out refinances is slightly higher — 2.15% for first-time use and 3.3% for subsequent use. Disabled veterans and surviving spouses are exempt from the funding fee.' },
        ],
        relatedProducts: [
            { title: 'VA IRRRL', href: '/va-loans/va-irrrl', description: 'Just want a lower rate? IRRRL is faster and simpler.' },
            { title: 'VA Home Loans', href: '/va-loans/va-home-loans', description: 'Purchase a new home with VA benefits.' },
            { title: 'VA Funding Fee Guide', href: '/va-loans/va-funding-fee', description: 'Understand the funding fee structure.' },
        ],
    }} />;
}
