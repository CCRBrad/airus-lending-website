import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';
export const metadata: Metadata = { title: 'Bridge Loans', description: 'Bridge loans provide short-term financing to help you buy a new home before selling your current one. Airus Lending.' };
const data = {
    badge: 'Short-Term', title: 'Bridge Loans', subtitle: 'Short-term financing that bridges the gap between buying your next home and selling your current one.',
    overview: 'A bridge loan is a short-term financing solution (typically 6–12 months) that allows homeowners to purchase a new property before selling their existing one. Instead of making the sale of your current home a contingency or waiting to sell before buying, a bridge loan provides the funds to act quickly in competitive markets.',
    whoIsItFor: ['Homeowners buying a new home before selling their current one', 'Buyers in competitive markets who can\'t wait for a contingent sale', 'Investors acquiring properties that need quick closing', 'Borrowers who need short-term capital for real estate transactions'],
    keyBenefits: [
        { title: 'Buy Before You Sell', description: 'No need to make your purchase contingent on selling your existing home.' },
        { title: 'Quick Funding', description: 'Bridge loans can close faster than traditional mortgages.' },
        { title: 'Competitive Offers', description: 'Removing sale contingencies makes your offer stronger in hot markets.' },
        { title: 'Flexible Terms', description: 'Typically 6–12 month terms with interest-only payments.' },
    ],
    qualificationOverview: ['Sufficient equity in current property', 'Plan to sell existing home within the bridge loan term', 'Credit score of 680+', 'Proof of ability to carry both properties temporarily'],
    downPaymentInfo: 'Varies — based on equity', creditRequirements: '680+', occupancyTypes: ['Primary residence', 'Investment'], propertyTypes: ['Single-family', 'Condos', 'Townhomes', 'Multi-unit'],
    pros: ['Eliminates sale contingencies', 'Fast closings', 'Compete effectively in hot markets', 'Interest-only payment options', 'Short-term commitment'],
    tradeoffs: ['Higher interest rates than traditional mortgages', 'Must sell existing home within the term', 'Carrying costs of two properties', 'Risk if existing home takes longer to sell', 'Fees and closing costs'],
    commonScenarios: [
        { title: 'Family Upgrading in a Seller\'s Market', description: 'A family finds their dream home but hasn\'t sold their current house. A bridge loan lets them make a strong, non-contingent offer while their home is listed.' },
    ],
    documentsNeeded: ['Current property documentation', 'Listing agreement (if listed)', 'Income and asset verification', 'Purchase contract for new property', 'Appraisals for both properties'],
    faqs: [
        { question: 'How long do bridge loans last?', answer: 'Most bridge loans have terms of 6–12 months. They are designed to be repaid when the borrower sells their existing property or secures long-term financing.' },
        { question: 'What happens if my home doesn\'t sell in time?', answer: 'If your home doesn\'t sell within the bridge loan term, you may be able to extend the loan. It\'s important to have a realistic sale timeline and pricing strategy before committing to a bridge loan.' },
    ],
    relatedProducts: [
        { title: 'Home Equity Loans', href: '/home-loans/home-equity-loans', description: 'Access equity from current home' },
        { title: 'HELOC', href: '/home-loans/heloc', description: 'Revolving equity access' },
        { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Long-term financing after bridge' },
    ],
};
export default function BridgeLoansPage() { return <LoanPageTemplate data={data} />; }
