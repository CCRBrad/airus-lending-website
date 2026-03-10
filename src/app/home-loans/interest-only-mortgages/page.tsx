import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'Interest-Only Mortgages', description: 'Interest-only mortgages offer lower initial payments with the option to pay principal later. Explore I/O mortgage options with Airus Lending.' };
const data = {
    badge: 'Payment Strategy', title: 'Interest-Only Mortgages', subtitle: 'Lower initial payments by paying only interest for a set period — ideal for cash-flow optimization and strategic borrowing.',
    overview: 'An interest-only mortgage allows you to pay only the interest on your loan for an initial period (typically 5–10 years), after which the loan converts to fully amortizing payments including both principal and interest. During the interest-only period, your monthly payment is significantly lower. This structure is popular with investors, high-income professionals with variable incomes, and borrowers who want maximum cash flow flexibility.',
    whoIsItFor: ['Real estate investors maximizing cash flow', 'High-income earners with variable compensation', 'Borrowers who plan to sell or refinance before the I/O period ends', 'Financially sophisticated borrowers managing cash flow strategically'],
    keyBenefits: [
        { title: 'Lower Initial Payments', description: 'Pay only interest — monthly payments can be 20–40% lower than fully amortizing.' },
        { title: 'Cash Flow Flexibility', description: 'Freed-up cash can be invested, saved, or used for other purposes.' },
        { title: 'Optional Principal Payments', description: 'You can still make principal payments voluntarily during the I/O period.' },
        { title: 'Available Across Programs', description: 'Available in conventional, jumbo, DSCR, and non-QM programs.' },
    ],
    qualificationOverview: ['Credit score 700+ for most I/O programs', 'Down payment 20–30%', 'Qualification often based on fully amortized payment, not I/O payment', 'Reserves required', 'Available for various property types'],
    downPaymentInfo: '20–30%', creditRequirements: '700+', occupancyTypes: ['Primary', 'Second home', 'Investment'], propertyTypes: ['Single-family', 'Condos', 'Townhomes', 'Multi-unit'],
    pros: ['Significantly lower initial payments', 'Cash flow flexibility', 'Voluntary principal payments accepted', 'Popular for investor financing', 'Multiple program options'],
    tradeoffs: ['No equity built during I/O period (unless making voluntary payments)', 'Payment increases after I/O period ends', 'Higher rates than non-I/O versions', 'Not building equity as fast', 'More complex to understand'],
    commonScenarios: [
        { title: 'Investor Maximizing Cash Flow', description: 'An investor purchases a rental property with a DSCR interest-only loan. The lower payment improves monthly cash flow by $400/month compared to a fully amortizing option.' },
        { title: 'Executive with Bonus-Heavy Compensation', description: 'A sales executive uses interest-only payments during the year and applies annual bonuses as lump-sum principal payments — maintaining low monthly costs while still paying down the loan.' },
    ],
    documentsNeeded: ['Standard documentation for the chosen program', 'Adequate reserve documentation', 'Property appraisal'],
    faqs: [
        { question: 'What happens after the I/O period?', answer: 'Your loan converts to fully amortizing payments over the remaining term. Because you now have to pay both principal and interest over fewer years, the payment will be higher than if you had been amortizing from day one.' },
        { question: 'Am I building equity during the I/O period?', answer: 'Only if you make voluntary principal payments. Otherwise, your loan balance stays the same and equity only grows through property appreciation.' },
    ],
    relatedProducts: [
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Investor cash-flow lending' },
        { title: 'Jumbo Loans', href: '/home-loans/jumbo-loans', description: 'High-balance financing' },
        { title: 'Adjustable-Rate Mortgages', href: '/home-loans/adjustable-rate-mortgages', description: 'Lower initial rate options' },
    ],
};
export default function InterestOnlyPage() { return <LoanPageTemplate data={data} />; }
