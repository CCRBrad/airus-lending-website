import type { Metadata } from 'next';
import ComparisonTemplate from '@/templates/ComparisonTemplate';
export const metadata: Metadata = { title: 'Fixed Rate vs Adjustable Rate Mortgages', description: 'Compare fixed-rate and adjustable-rate mortgages. Stability vs savings — which is better for you? Airus Lending.' };
const data = {
    badge: 'Comparison', title: 'Fixed Rate vs ARM', subtitle: 'Stability vs lower initial rate — compare the two most common mortgage structures.',
    optionAName: 'Fixed-Rate', optionBName: 'ARM', optionALink: '/home-loans/fixed-rate-mortgages', optionBLink: '/home-loans/adjustable-rate-mortgages',
    overview: 'A fixed-rate mortgage keeps the same rate for the entire loan term. An adjustable-rate mortgage (ARM) offers a lower initial rate for a fixed period (5, 7, or 10 years) before adjusting. The choice depends on how long you plan to keep the home and your risk tolerance.',
    comparisonRows: [
        { label: 'Rate Structure', optionA: 'Same rate for full term', optionB: 'Lower initial rate, adjusts after fixed period' },
        { label: 'Initial Rate', optionA: 'Higher than ARM', optionB: '0.25–1% lower than fixed' },
        { label: 'Payment Predictability', optionA: 'Completely predictable', optionB: 'Predictable during fixed period' },
        { label: 'Risk', optionA: 'No rate risk', optionB: 'Rate can increase after fixed period' },
        { label: 'Best Hold Period', optionA: '7+ years', optionB: '< 7 years' },
        { label: 'Rate Caps', optionA: 'N/A', optionB: 'Per-adjustment and lifetime caps' },
        { label: 'Best For', optionA: 'Long-term stability', optionB: 'Short-term savings' },
    ],
    whenToChooseA: ['You plan to stay in the home for 7+ years', 'You value payment stability and predictability', 'You\'re risk-averse with your finances', 'Rates are historically low and worth locking'],
    whenToChooseB: ['You plan to move or refinance within 5–7 years', 'You want the lowest possible initial payment', 'You\'re buying a jumbo property (ARM pricing is very competitive)', 'You expect your income to increase over time'],
    bottomLine: 'For most homeowners planning to stay put, a fixed rate provides peace of mind. For shorter-term stays, relocating professionals, and jumbo borrowers, an ARM can save significant money during the initial period with limited risk if you sell or refinance before adjustments begin.',
    faqs: [
        { question: 'What happens if I keep the ARM past the fixed period?', answer: 'Your rate adjusts based on a market index plus a margin. Rate caps limit increases per adjustment (typically 2%) and over the lifetime (typically 5-6%). Your payment could increase.' },
        { question: 'Can I refinance an ARM into a fixed rate?', answer: 'Yes. Many ARM borrowers refinance into a fixed rate before the adjustment period, especially if rates remain favorable.' },
    ],
};
export default function FixedVsARMPage() { return <ComparisonTemplate data={data} />; }
