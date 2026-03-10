import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for Business Owners', description: 'Mortgage programs for business owners who write off expenses and show lower taxable income. Bank statement and non-QM options. Airus Lending.' };
const data = {
    badge: 'Business Owners', title: 'Business Owner Mortgage Solutions', subtitle: 'Your business is thriving — your tax returns just don\'t show it. Programs designed for business owners who maximize deductions.',
    overview: 'As a business owner, your financial picture is unique. You invest in growth, maximize deductions, and show lower taxable income than your actual earnings. Traditional mortgage lenders see this as a problem. We see it as a normal part of running a successful business. Bank statement loans, P&L-based programs, and asset depletion mortgages allow business owners to qualify based on real cash flow.',
    challenges: [
        { title: 'High Revenue, Low Taxable Income', description: 'Business deductions and write-offs reduce your AGI well below real earnings.' },
        { title: 'Complex Business Structures', description: 'S-corps, LLCs, partnerships, and multi-entity structures complicate income calculation.' },
        { title: 'Seasonal Revenue', description: 'Cyclical or seasonal businesses create income variability.' },
    ],
    solutions: [
        { title: 'Bank Statement Loans', description: 'Use business or personal bank statement deposits.', href: '/home-loans/bank-statement-loans' },
        { title: 'DSCR Loans', description: 'For investment properties — no personal income needed.', href: '/home-loans/dscr-loans' },
        { title: 'Asset Depletion', description: 'Qualify on liquid assets instead of income.', href: '/home-loans/asset-depletion-loans' },
        { title: 'Non-QM Loans', description: 'Flexible lending for complex scenarios.', href: '/home-loans/non-qm-loans' },
    ],
    qualificationTips: [
        'Separate business and personal bank accounts for the clearest income picture.',
        'Have your CPA prepare a current-year P&L statement that matches your bank deposits.',
        'Maintain strong business and personal credit scores.',
        'Keep adequate reserves after down payment — lenders want to see financial stability.',
    ],
    steps: [
        { number: 1, title: 'Business Review', description: 'We analyze your business cash flow, structure, and goals.' },
        { number: 2, title: 'Program Match', description: 'We identify the best program based on your documentation type.' },
        { number: 3, title: 'Pre-Approval & Close', description: 'Move forward with confidence — we handle the complexity.' },
    ],
    faqs: [
        { question: 'I own multiple businesses — how does that work?', answer: 'We can use deposits from one or multiple business accounts depending on the program. Your advisor will determine the best approach based on your structure.' },
        { question: 'Can I buy investment property as a business owner?', answer: 'Yes. DSCR loans let you qualify on the property\'s rental income with no personal income documentation at all.' },
    ],
    ctaHeading: 'Business Owner? We Understand Your Finances.', ctaDescription: 'Get pre-approved using your real business cash flow — not your tax return.',
};
export default function BusinessOwnersPage() { return <BorrowerTemplate data={data} />; }
