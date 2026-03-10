import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata = { title: 'VA Loan Eligibility Guide | Airus Lending', description: 'Complete guide to VA loan eligibility. Who qualifies, service requirements, Certificate of Eligibility, and surviving spouse eligibility.' };
export default function VAEligibilityPage() {
    return <LoanPageTemplate data={{
        badge: 'Eligibility', title: 'VA Loan Eligibility Guide', subtitle: 'Find out if you qualify for a VA loan. We cover service requirements, COE, surviving spouse eligibility, and more.',
        overview: 'VA loan eligibility is based on military service history, duty status, and length of service. The VA home loan program is available to veterans, active-duty service members, members of the National Guard and Reserves with qualifying service, and certain surviving spouses. To use your VA benefit, you\'ll need a Certificate of Eligibility (COE), which Airus Lending can help you obtain — often in minutes.',
        whoIsItFor: ['Veterans with honorable discharge', 'Active-duty service members', 'National Guard and Reserve members with qualifying service', 'Surviving spouses of veterans who died in service or from service-connected disability', 'Anyone unsure about their VA eligibility status'],
        keyBenefits: [
            { title: 'Service Requirements', description: 'Generally 90 consecutive days during wartime, 181 days during peacetime, or 6 years in the Guard/Reserves.' },
            { title: 'Certificate of Eligibility (COE)', description: 'Required for all VA loans. Airus Lending can pull your COE electronically — often approved same-day.' },
            { title: 'Surviving Spouse Eligibility', description: 'Un-remarried surviving spouses of veterans who died in service or from a service-connected disability may be eligible.' },
            { title: 'Entitlement Restoration', description: 'If you\'ve used your VA benefit before, entitlement can often be restored when the previous loan is paid off.' },
        ],
        qualificationOverview: [
            'Wartime service: 90 consecutive days of active duty',
            'Peacetime service: 181 consecutive days of active duty',
            'Gulf War era (1990-present): 24 continuous months or full period of call-up',
            'National Guard/Reserves: 6 years of service or 90 days activated under federal orders',
            'Surviving spouses: Unremarried spouse of veteran who died in service or from service-connected disability',
            'Discharge must be under conditions other than dishonorable',
        ],
        documentsNeeded: ['DD-214 (Member 4 copy preferred)', 'NGB-22 for Guard/Reserve members', 'Statement of Service (active duty)', 'Death certificate and marriage certificate (surviving spouses)', 'VA Form 26-1880 (Request for COE)'],
        faqs: [
            { question: 'How do I get a Certificate of Eligibility?', answer: 'The fastest way is to have Airus Lending pull it electronically through the VA\'s Web LGY system. We can often verify your eligibility in minutes. You can also apply through eBenefits or by mail using VA Form 26-1880.' },
            { question: 'Can I use a VA loan if I received an other-than-honorable discharge?', answer: 'It depends. Some veterans with other-than-honorable discharges may still qualify if the VA determines service was under conditions other than dishonorable. A VA determination of eligibility may be needed.' },
            { question: 'Do Guard and Reserve members qualify?', answer: 'Yes, with 6 years of creditable service in the Guard or Reserves. Members who were activated for federal service for 90+ days may qualify sooner based on active-duty service requirements.' },
        ],
        relatedProducts: [
            { title: 'VA Home Loans', href: '/va-loans/va-home-loans', description: 'Ready to buy? Explore VA purchase loans.' },
            { title: 'VA Funding Fee', href: '/va-loans/va-funding-fee', description: 'Learn about the funding fee and exemptions.' },
            { title: 'VA Loan Limits', href: '/va-loans/va-loan-limits', description: 'Understand VA loan limits by county.' },
        ],
    }} />;
}
