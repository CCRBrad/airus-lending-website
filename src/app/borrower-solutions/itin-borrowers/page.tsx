import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for ITIN Borrowers', description: 'ITIN mortgage programs for borrowers without a Social Security Number. Alternative credit accepted. Airus Lending.' };
const data = {
    badge: 'ITIN', title: 'ITIN Borrower Mortgage Solutions', subtitle: 'Homeownership is possible without a Social Security Number. ITIN programs with alternative credit acceptance and competitive terms.',
    overview: 'If you file U.S. taxes with an Individual Taxpayer Identification Number (ITIN), you can qualify for a mortgage. ITIN loan programs accept alternative credit history — 12 months of on-time rent, utility, and insurance payments — instead of a traditional credit report. These are legitimate, regulated mortgage products available through specialized non-QM lenders.',
    challenges: [
        { title: 'No Traditional Credit Score', description: 'Many ITIN borrowers lack a FICO score. Alternative credit documentation solves this.' },
        { title: 'Limited Lender Options', description: 'Not all lenders offer ITIN programs. Working with a broker who knows this space is essential.' },
        { title: 'Documentation Barriers', description: 'Language barriers and unfamiliarity with the U.S. mortgage process can slow things down.' },
    ],
    solutions: [
        { title: 'ITIN Loans', description: 'Mortgage programs specifically for ITIN borrowers.', href: '/home-loans/itin-loans' },
        { title: 'Non-QM Loans', description: 'Flexible lending with alternative documentation.', href: '/home-loans/non-qm-loans' },
        { title: 'Bank Statement Loans', description: 'Use deposits as income verification.', href: '/home-loans/bank-statement-loans' },
    ],
    qualificationTips: [
        'File U.S. taxes consistently — 2 years of tax returns filed with your ITIN strengthen your application.',
        'Document 12+ months of on-time rent payments as alternative credit.',
        'Keep utility and insurance payment records — these count as alternative trade lines.',
        'Save for 15–20% down payment — ITIN programs require higher equity than FHA.',
    ],
    steps: [
        { number: 1, title: 'Eligibility Check', description: 'We verify your ITIN, tax filing history, and alternative credit sources.' },
        { number: 2, title: 'Program Match', description: 'We find the best ITIN program based on your documentation and down payment.' },
        { number: 3, title: 'Pre-Approval & Close', description: 'Your advisor guides you through every step — in your language when possible.' },
    ],
    faqs: [
        { question: 'Do I need a Social Security Number?', answer: 'No. ITIN loan programs are specifically designed for borrowers who do not have a Social Security Number but do have a valid ITIN.' },
        { question: 'What alternative credit is accepted?', answer: '12+ months of on-time rent payments, utility bills, phone bills, insurance payments, and other recurring obligations.' },
    ],
    ctaHeading: 'ITIN Borrower? You Can Buy a Home.', ctaDescription: 'Talk to an advisor who understands ITIN lending and can guide you through the process.',
};
export default function ITINBorrowersPage() { return <BorrowerTemplate data={data} />; }
