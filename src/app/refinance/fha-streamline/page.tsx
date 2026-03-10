import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'FHA Streamline Refinance', description: 'FHA Streamline refinance for existing FHA borrowers. Minimal documentation, no appraisal, fast closing. Airus Lending.' };
const data = {
    badge: 'FHA', title: 'FHA Streamline Refinance', subtitle: 'The simplest way for existing FHA borrowers to lower their rate — minimal paperwork and no appraisal required.',
    overview: 'The FHA Streamline Refinance is a simplified program available to existing FHA borrowers. It allows a rate-and-term refinance with significantly reduced documentation — often no appraisal, no income verification, and no credit qualifying. The goal is to make it easy for FHA borrowers to take advantage of lower rates with minimal friction.',
    idealBuyer: ['Current FHA loan holders who want a lower rate', 'FHA borrowers who want to reduce their MIP', 'Borrowers seeking a simple, low-documentation refinance', 'Anyone with an existing FHA loan in good standing'],
    programs: [
        { title: 'FHA Streamline', description: 'Minimal docs, no appraisal, fast close.', href: '/home-loans/fha-loans' },
        { title: 'FHA Cash-Out', description: 'Access equity with FHA guidelines.', href: '/home-loans/fha-loans' },
    ],
    steps: [
        { number: 1, title: 'Confirm Eligibility', description: 'Must have at least 6 months of on-time payments on your current FHA loan.' },
        { number: 2, title: 'Lock a Lower Rate', description: 'No appraisal needed — we lock your new rate quickly.' },
        { number: 3, title: 'Close & Save', description: 'Streamlined closing with minimal paperwork.' },
    ],
    faqs: [
        { question: 'What is the net tangible benefit requirement?', answer: 'FHA requires that the streamline must provide a net tangible benefit — typically a combined rate + MIP reduction of at least 5% of the payment, or switching from ARM to fixed.' },
        { question: 'Do I need an appraisal?', answer: 'No. The FHA Streamline is designed to bypass the appraisal requirement in most cases.' },
        { question: 'Can I get cash out with a streamline?', answer: 'No. The FHA Streamline is strictly rate-and-term. For cash out, you would use the FHA cash-out refinance or conventional cash-out.' },
    ],
    relatedPages: [
        { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Full FHA overview' },
        { title: 'VA IRRRL', href: '/refinance/va-irrrl', description: 'VA streamline refinance' },
        { title: 'Rate & Term Refinance', href: '/refinance/rate-and-term', description: 'General rate reduction' },
    ],
};
export default function FHAStreamlinePage() { return <BuyPageTemplate data={data} />; }
