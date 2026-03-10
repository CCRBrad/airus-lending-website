import type { Metadata } from 'next';
import ComparisonTemplate from '@/templates/ComparisonTemplate';
export const metadata: Metadata = { title: 'VA vs Conventional Loans', description: 'Compare VA and conventional loans. Zero down vs PMI, rates, eligibility, and more. Airus Lending.' };
const data = {
    badge: 'Comparison', title: 'VA vs Conventional Loans', subtitle: 'Zero-down VA benefits vs flexible conventional financing — which is right for you?',
    optionAName: 'VA Loans', optionBName: 'Conventional Loans', optionALink: '/home-loans/va-loans', optionBLink: '/home-loans/conventional-loans',
    overview: 'VA loans offer unmatched benefits for eligible veterans — zero down and no mortgage insurance. But conventional loans provide more flexibility for property types and don\'t require a funding fee. The right choice depends on your eligibility, down payment, and goals.',
    comparisonRows: [
        { label: 'Min Down Payment', optionA: '$0 (zero down)', optionB: '3-5% (primary), 10-25% (inv)' },
        { label: 'Mortgage Insurance', optionA: 'None', optionB: 'PMI if less than 20% down' },
        { label: 'Funding Fee', optionA: '1.25–3.3% (waivable)', optionB: 'None' },
        { label: 'Interest Rates', optionA: 'Lowest average rates', optionB: 'Competitive for 700+ credit' },
        { label: 'Credit Requirements', optionA: 'No VA minimum (lender: 580-620)', optionB: '620+ (680+ for best rates)' },
        { label: 'Property Types', optionA: 'Primary residence only', optionB: 'Primary, second home, investment' },
        { label: 'Eligibility', optionA: 'Veterans, active duty, reserves, spouses', optionB: 'Anyone who qualifies' },
        { label: 'Seller Concessions', optionA: 'Up to 4%', optionB: 'Up to 3-6%' },
    ],
    whenToChooseA: ['You have VA eligibility', 'You want zero down payment', 'You want to avoid monthly mortgage insurance', 'You want the lowest possible interest rate'],
    whenToChooseB: ['You\'re buying a second home or investment property', 'You want to avoid the VA funding fee', 'You don\'t have VA eligibility', 'You have 20%+ down and want to avoid all fees'],
    bottomLine: 'For eligible veterans, VA loans are almost always the better choice for primary residence purchases — zero down, no PMI, and the lowest rates. Conventional is the better option when buying non-primary properties or when the VA funding fee outweighs the PMI savings.',
    faqs: [
        { question: 'Can I use both VA and conventional at the same time?', answer: 'Yes. You can have a VA loan on your primary residence and use conventional financing for a second home or investment property.' },
        { question: 'Is the VA funding fee worth paying?', answer: 'In most cases, yes — the absence of monthly PMI saves more over time than the one-time funding fee costs. Plus, the fee can be financed into the loan.' },
    ],
};
export default function VAvsConvPage() { return <ComparisonTemplate data={data} />; }
