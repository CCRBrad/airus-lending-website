import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'VA IRRRL — Interest Rate Reduction Refinance Loan', description: 'VA Streamline refinance (IRRRL) for veterans. Lower your rate with minimal paperwork and no appraisal required. Airus Lending.' };
const data = {
    badge: 'Veterans', title: 'VA IRRRL (Streamline Refinance)', subtitle: 'The fastest, simplest way for existing VA borrowers to lower their rate — minimal paperwork, no appraisal, and no income verification required.',
    overview: 'The VA Interest Rate Reduction Refinance Loan (IRRRL), also known as a VA Streamline, is designed to help existing VA loan holders quickly and easily refinance to a lower interest rate. The program minimizes documentation requirements — in many cases, no appraisal, no income verification, and no credit underwriting are needed. It is one of the most borrower-friendly refinance programs available.',
    idealBuyer: ['Current VA loan holders who want a lower rate', 'VA borrowers who want to switch from ARM to fixed', 'Veterans looking for the simplest possible refinance process', 'VA borrowers who want to reduce their monthly payment'],
    programs: [
        { title: 'VA IRRRL', description: 'Streamlined rate reduction — the fastest VA refi.', href: '/home-loans/va-loans' },
        { title: 'VA Cash-Out', description: 'Access equity up to 100% LTV.', href: '/home-loans/va-loans' },
    ],
    steps: [
        { number: 1, title: 'Confirm Eligibility', description: 'Must have an existing VA loan in good standing.' },
        { number: 2, title: 'Lock Your New Rate', description: 'We find the best available rate — often no appraisal needed.' },
        { number: 3, title: 'Close & Save', description: 'Minimal paperwork, fast closing, immediate savings.' },
    ],
    faqs: [
        { question: 'Do I need an appraisal?', answer: 'In most cases, no. The VA IRRRL is specifically designed to avoid the appraisal requirement.' },
        { question: 'Do I need to verify income?', answer: 'No. Income verification is not required for a VA IRRRL. The focus is on payment history and the rate reduction.' },
        { question: 'Can I roll closing costs into the loan?', answer: 'Yes. The VA IRRRL allows closing costs and the VA funding fee to be included in the new loan amount.' },
        { question: 'Is there a net tangible benefit requirement?', answer: 'Yes. The VA requires a "net tangible benefit" — your new rate and payment must be lower, or you must be switching from an ARM to a fixed rate.' },
    ],
    relatedPages: [
        { title: 'VA Loans', href: '/home-loans/va-loans', description: 'Full VA loan overview' },
        { title: 'Rate & Term Refinance', href: '/refinance/rate-and-term', description: 'General rate reduction' },
        { title: 'Refinance Calculator', href: '/calculators/refinance-calculator', description: 'Estimate savings' },
    ],
};
export default function VAIRRRLPage() { return <BuyPageTemplate data={data} />; }
