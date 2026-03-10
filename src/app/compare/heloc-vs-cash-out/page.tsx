import type { Metadata } from 'next';
import ComparisonTemplate from '@/templates/ComparisonTemplate';
export const metadata: Metadata = { title: 'HELOC vs Cash-Out Refinance', description: 'Compare HELOCs and cash-out refinances for accessing home equity. Pros, cons, and when to use each. Airus Lending.' };
const data = {
    badge: 'Comparison', title: 'HELOC vs Cash-Out Refinance', subtitle: 'Two ways to access your home equity — which one makes more sense for your situation?',
    optionAName: 'HELOC', optionBName: 'Cash-Out Refinance', optionALink: '/home-loans/heloc', optionBLink: '/refinance/cash-out-refinance',
    overview: 'Both HELOCs and cash-out refinances let you access your home equity, but they work very differently. A HELOC is a revolving credit line you can draw from as needed. A cash-out refinance replaces your entire mortgage with a larger one and gives you cash at closing.',
    comparisonRows: [
        { label: 'Structure', optionA: 'Revolving line of credit', optionB: 'Replaces your mortgage' },
        { label: 'Rate Type', optionA: 'Variable (usually)', optionB: 'Fixed or adjustable' },
        { label: 'Funds Access', optionA: 'Draw as needed over draw period', optionB: 'Lump sum at closing' },
        { label: 'Your First Mortgage', optionA: 'Stays unchanged', optionB: 'Replaced with new mortgage' },
        { label: 'Closing Costs', optionA: 'Low to none', optionB: 'Standard mortgage closing costs' },
        { label: 'Interest Payments', optionA: 'Only on amount drawn', optionB: 'On full new loan balance' },
        { label: 'Best For', optionA: 'Ongoing needs, flexibility', optionB: 'Large lump sum, rate improvement' },
    ],
    whenToChooseA: ['You want ongoing access to funds over time', 'You have a great rate on your first mortgage and don\'t want to lose it', 'You don\'t need a large lump sum immediately', 'You want low or no closing costs'],
    whenToChooseB: ['You need a large lump sum', 'You can improve your first mortgage rate too', 'You want a fixed rate on the full amount', 'You prefer one simple monthly payment'],
    bottomLine: 'If you have a great rate on your current mortgage and want flexible, ongoing access to equity, a HELOC is usually better. If you need a large lump sum and can also improve your first mortgage rate, a cash-out refinance consolidates everything into one new loan.',
    faqs: [
        { question: 'Can I have both a HELOC and a first mortgage?', answer: 'Yes. A HELOC sits as a second lien behind your first mortgage. This allows you to keep your first mortgage rate while accessing equity.' },
        { question: 'Which is faster to get?', answer: 'HELOCs typically close faster (2-4 weeks) since they involve less documentation. Cash-out refinances take 3-5 weeks similar to a standard refinance.' },
    ],
};
export default function HELOCvsCashoutPage() { return <ComparisonTemplate data={data} />; }
