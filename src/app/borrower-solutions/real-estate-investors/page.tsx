import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for Real Estate Investors', description: 'DSCR, conventional, and portfolio financing for real estate investors. Scale your rental portfolio with Airus Lending.' };
const data = {
    badge: 'Investors', title: 'Real Estate Investor Solutions', subtitle: 'From your first rental to your 50th — DSCR, conventional, and portfolio programs to scale your investment strategy.',
    overview: 'Real estate investing requires financing that scales. Once you pass 10 financed properties, conventional lending stops working. DSCR loans, portfolio lending, and non-QM programs remove the limits so you can keep acquiring. Airus Lending works with investors at every level — first-time landlords to seasoned portfolio holders — with programs that qualify on property cash flow, not personal income.',
    challenges: [
        { title: 'Conventional Property Limits', description: 'Most lenders cap conventional investor loans at 10 properties.' },
        { title: 'DTI Ratio Pressure', description: 'Multiple mortgages inflate your DTI, even if properties cash flow.' },
        { title: 'Tax Return Underwriting', description: 'Depreciation and write-offs reduce your taxable income below true cash flow.' },
        { title: 'Entity Vesting', description: 'Conventional loans can\'t close in LLC name — DSCR can.' },
    ],
    solutions: [
        { title: 'DSCR Loans', description: 'Cash-flow based — no income docs, no property limits.', href: '/home-loans/dscr-loans' },
        { title: 'Conventional Investment', description: 'Best rates for first 10 properties.', href: '/home-loans/conventional-loans' },
        { title: 'Fix & Flip', description: 'Short-term rehab and resale financing.', href: '/commercial-loans/fix-and-flip' },
        { title: 'Bridge Loans', description: 'Quick acquisition capital.', href: '/home-loans/bridge-loans' },
        { title: 'Interest-Only', description: 'Maximize monthly cash flow.', href: '/home-loans/interest-only-mortgages' },
        { title: 'Multi-Unit Financing', description: '2–4 unit investment properties.', href: '/buy/multi-unit-property-loans' },
    ],
    qualificationTips: [
        'Keep property-level P&L records to demonstrate each property\'s DSCR.',
        'Build cash reserves — investor loans typically require 3–12 months PITIA per property.',
        'Consider DSCR early in your portfolio growth to preserve conventional financing capacity.',
        'Maintain a minimum 1.0 DSCR on new acquisitions (some lenders accept 0.75 with reserves).',
        'Entity structure (LLC, trust) matters — plan this before closing, not after.',
    ],
    steps: [
        { number: 1, title: 'Strategy Session', description: 'We discuss your portfolio, acquisition strategy, and financing needs.' },
        { number: 2, title: 'Program Selection', description: 'DSCR, conventional, bridge, or portfolio — matched to your deal.' },
        { number: 3, title: 'Pre-Approval', description: 'Get qualified so you can move fast when opportunities arise.' },
        { number: 4, title: 'Close & Scale', description: 'Efficient closings that let you keep acquiring.' },
    ],
    faqs: [
        { question: 'How many properties can I finance with DSCR?', answer: 'There is no limit. DSCR programs are designed for portfolio scaling without conventional property count restrictions.' },
        { question: 'Can I use rental income to qualify for more properties?', answer: 'With DSCR, yes — each property qualifies independently based on its own rental cash flow. Your personal income is not part of the equation.' },
        { question: 'DSCR vs conventional — which is better for investors?', answer: 'For your first 5–10 properties, conventional typically offers better rates. Beyond that, DSCR becomes essential because conventional programs have property limits.' },
    ],
    ctaHeading: 'Ready to Scale Your Portfolio?', ctaDescription: 'Get a DSCR pre-approval and start acquiring with no limits.',
};
export default function InvestorsPage() { return <BorrowerTemplate data={data} />; }
