import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'Asset Depletion Loans', description: 'Qualify for a mortgage using liquid assets instead of traditional employment income. Ideal for retirees and high-net-worth borrowers. Airus Lending.' };
const data = {
    badge: 'High Net Worth', title: 'Asset Depletion Loans', subtitle: 'Qualify using your liquid assets instead of traditional employment income — ideal for retirees, trust fund recipients, and high-net-worth individuals.',
    overview: 'Asset depletion loans allow borrowers to qualify for a mortgage by using their liquid assets — bank accounts, investment portfolios, retirement accounts — as a measure of income, rather than traditional W-2s, tax returns, or employment history. The lender calculates a monthly "income" figure by dividing the eligible assets by a set number of months (typically 240–360). This approach is perfect for wealthy retirees, individuals living off investments, and others whose financial strength is reflected in their assets rather than their paycheck.',
    whoIsItFor: ['Retirees with substantial savings but limited fixed income', 'High-net-worth individuals with investment portfolios', 'Trust fund recipients', 'Recently retired professionals', 'Borrowers with significant liquid assets and no traditional employment'],
    keyBenefits: [
        { title: 'No Employment Required', description: 'No W-2s, pay stubs, or employment verification needed.' },
        { title: 'Asset-Based Qualification', description: 'Your wealth speaks for itself — qualify based on investable assets.' },
        { title: 'Multiple Asset Types', description: 'Bank accounts, stocks, bonds, mutual funds, and retirement accounts may all count.' },
        { title: 'All Property Types', description: 'Available for primary residence, second home, and investment property.' },
    ],
    qualificationOverview: ['Liquid assets sufficient to calculate qualifying income', 'Asset calculation: total eligible assets ÷ 240–360 months = monthly income', 'Credit score 680+ for most programs', 'Down payment 20–30%', 'Reserves beyond what is used for income calculation'],
    downPaymentInfo: '20–30%', creditRequirements: '680+', occupancyTypes: ['Primary', 'Second home', 'Investment'], propertyTypes: ['Single-family', 'Condos', 'Townhomes', '2–4 units'],
    pros: ['No employment or income documentation', 'Asset-based qualification', 'Available for all property types', 'Strong option for retirees', 'Competitive non-QM rates'],
    tradeoffs: ['Requires substantial liquid assets', 'Retirement accounts may be discounted (60–70% of value)', 'Higher down payment than conventional', 'Higher rates than agency loans', 'Not all asset types qualify'],
    commonScenarios: [
        { title: 'Retiree Purchasing New Home', description: 'A recently retired executive with $2M in liquid assets but only $3,000/month in Social Security purchases a $600K home. Asset depletion calculates $8,333/month income ($2M ÷ 240 months), easily qualifying.' },
        { title: 'Trust Fund Recipient', description: 'An individual receiving distributions from a family trust with $1.5M in accessible assets but no W-2 employment uses asset depletion to purchase a primary residence.' },
    ],
    documentsNeeded: ['Asset statements (2–3 months for all accounts)', 'Account ownership verification', 'No employment docs needed', 'Property appraisal', 'Government-issued ID'],
    faqs: [
        { question: 'How is income calculated?', answer: 'Total eligible assets are divided by a term (usually 240 or 360 months) to determine a monthly qualifying income. For example, $1.8M ÷ 360 = $5,000/month qualifying income.' },
        { question: 'Do retirement accounts count?', answer: 'Usually, yes — but at a discounted rate. Most lenders count retirement accounts at 60–70% of value to account for taxes and penalties.' },
    ],
    relatedProducts: [
        { title: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans', description: 'Income via deposits' },
        { title: 'Non-QM Loans', href: '/home-loans/non-qm-loans', description: 'All flexible programs' },
        { title: 'Jumbo Loans', href: '/home-loans/jumbo-loans', description: 'High-balance financing' },
    ],
};
export default function AssetDepletionPage() { return <LoanPageTemplate data={data} />; }
