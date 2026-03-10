import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'SBA 504 Loans', description: 'SBA 504 loans for owner-occupied commercial real estate and major equipment. Fixed rates, 10% down. Airus Lending.' };
const data = {
    badge: 'SBA 504', title: 'SBA 504 Loans', subtitle: 'Fixed-rate, long-term financing for owner-occupied commercial real estate and major fixed assets — as low as 10% down.',
    overview: 'The SBA 504 loan program is specifically designed for major fixed-asset purchases — primarily owner-occupied commercial real estate and large equipment. The unique three-party structure (bank 50%, CDC 40%, borrower 10%) provides below-market fixed rates on the CDC portion with up to 25-year terms. It is the best SBA program for purchasing or expanding the building your business operates from.',
    idealBuyer: ['Business owners purchasing their own building', 'Companies expanding into larger facilities', 'Manufacturers purchasing major equipment ($100K+)', 'Businesses refinancing existing owner-occupied commercial mortgages'],
    programs: [],
    steps: [
        { number: 1, title: 'Eligibility Check', description: 'Confirm the project qualifies (owner-occupied, for-profit, within SBA size standards).' },
        { number: 2, title: 'Application', description: 'Submit financials, business plan, and project details to CDC and bank.' },
        { number: 3, title: 'SBA Approval', description: 'CDC and SBA review — typically 60–90 days.' },
        { number: 4, title: 'Close', description: 'Two closings (bank and CDC) coordinated together.' },
    ],
    faqs: [
        { question: 'What is a CDC?', answer: 'A Certified Development Company is a non-profit that partners with the SBA to provide the 40% second-lien portion of a 504 loan. There are CDCs across the country that serve different regions.' },
        { question: 'Can I use 504 for renovation?', answer: 'Yes — SBA 504 can finance building renovations and improvements as long as the property is owner-occupied.' },
        { question: 'What is the advantage over 7(a)?', answer: '504 offers a fixed rate on the CDC portion (40% of the project), which is typically below market. The 10% down payment is also lower than most 7(a) real estate loans.' },
    ],
    relatedPages: [
        { title: 'SBA 7(a)', href: '/sba-loans/sba-7a-loans', description: 'More flexible SBA' },
        { title: '7(a) vs 504', href: '/compare/sba-7a-vs-504', description: 'Compare programs' },
        { title: 'Owner-Occupied', href: '/sba-loans/owner-occupied-commercial', description: 'All OO options' },
    ],
};
export default function SBA504Page() { return <BuyPageTemplate data={data} />; }
