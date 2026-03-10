import type { Metadata } from 'next';
import ComparisonTemplate from '@/templates/ComparisonTemplate';
export const metadata: Metadata = { title: 'SBA 7(a) vs SBA 504 Loans', description: 'Compare SBA 7(a) and SBA 504 loans. Flexibility vs fixed-rate real estate financing. Airus Lending.' };
const data = {
    badge: 'Comparison', title: 'SBA 7(a) vs SBA 504 Loans', subtitle: 'The two main SBA programs — compared to help you choose the right one for your business.',
    optionAName: 'SBA 7(a)', optionBName: 'SBA 504', optionALink: '/sba-loans/sba-7a-loans', optionBLink: '/sba-loans/sba-504-loans',
    overview: 'SBA 7(a) is the most versatile SBA program — it can be used for almost any business purpose. SBA 504 is specifically designed for major fixed-asset purchases, particularly owner-occupied commercial real estate, with below-market fixed rates. The right choice depends on what you need the financing for.',
    comparisonRows: [
        { label: 'Max Loan Amount', optionA: '$5 million', optionB: '$5.5 million+' },
        { label: 'Uses', optionA: 'Working capital, equipment, real estate, acquisition, refinance', optionB: 'Owner-occupied commercial real estate, major equipment' },
        { label: 'Rate Type', optionA: 'Variable or fixed', optionB: 'Fixed rate (on CDC portion)' },
        { label: 'Down Payment', optionA: '10-20%', optionB: '10%' },
        { label: 'Term', optionA: '7-25 years', optionB: '10-25 years' },
        { label: 'Structure', optionA: 'Single lender', optionB: 'Two-part: bank (50%) + CDC (40%)' },
        { label: 'Speed', optionA: 'Faster (30-60 days)', optionB: 'Slower (60-90 days)' },
        { label: 'Best For', optionA: 'Flexible business financing', optionB: 'Owner-occupied commercial real estate' },
    ],
    whenToChooseA: ['You need working capital or inventory financing', 'You\'re acquiring a business', 'You want flexible use of funds', 'You need faster processing'],
    whenToChooseB: ['You\'re buying owner-occupied commercial real estate', 'You want the lowest possible fixed rate', 'You\'re making a major equipment purchase', 'You want the lowest down payment (10%)'],
    bottomLine: 'For business acquisitions, working capital, and general-purpose financing, SBA 7(a) is the more flexible option. For purchasing the building your business operates from, SBA 504 typically offers better rates and terms. Many businesses use both programs over time.',
    faqs: [
        { question: 'Can I use SBA 7(a) for real estate?', answer: 'Yes. SBA 7(a) can finance owner-occupied commercial real estate, though SBA 504 may offer better terms for that purpose.' },
        { question: 'What is a CDC?', answer: 'A Certified Development Company (CDC) is a nonprofit organization that works with the SBA to provide 504 lending. The CDC provides 40% of the project cost, a bank provides 50%, and the borrower puts down 10%.' },
    ],
};
export default function SBA7avs504Page() { return <ComparisonTemplate data={data} />; }
