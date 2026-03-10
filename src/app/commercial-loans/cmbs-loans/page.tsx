import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'CMBS Loans — Commercial Mortgage-Backed Securities', description: 'Non-recourse CMBS financing for commercial real estate. Fixed rates, flexible structures. Airus Lending.' };
const data = {
    badge: 'CMBS', title: 'CMBS Loans', subtitle: 'Non-recourse, fixed-rate commercial financing through the conduit/CMBS market — ideal for stabilized commercial assets.',
    overview: 'CMBS (Commercial Mortgage-Backed Securities) loans are originated by lenders, then pooled and securitized in the bond market. This structure allows for non-recourse lending, competitive fixed rates, and higher leverage than traditional portfolio loans. CMBS financing works best for stabilized, income-producing commercial properties with strong cash flow.',
    idealBuyer: ['Investors seeking non-recourse commercial financing', 'Owners of stabilized office, retail, multifamily, or industrial', 'Borrowers who want higher leverage (up to 75% LTV)', 'Foreign nationals or entity borrowers who need non-recourse terms'],
    programs: [],
    steps: [
        { number: 1, title: 'Property Qualification', description: 'Stabilized NOI, occupancy, and property condition are key factors.' },
        { number: 2, title: 'Term Sheet', description: 'We source competitive CMBS term sheets from conduit lenders.' },
        { number: 3, title: 'Underwriting', description: 'Detailed underwriting including appraisal, environmental, and DSCR analysis.' },
        { number: 4, title: 'Close', description: 'Typically 60–90 day process from application to closing.' },
    ],
    faqs: [
        { question: 'What does non-recourse mean?', answer: 'Non-recourse means the lender cannot pursue the borrower\'s personal assets if the loan defaults — only the property secures the loan. Exceptions exist for fraud and environmental issues (carve-out guaranty).' },
        { question: 'What is the minimum loan amount?', answer: 'Most CMBS programs have minimums of $2–5 million, though some go lower.' },
        { question: 'What are the typical terms?', answer: 'CMBS loans typically offer 5, 7, or 10-year fixed terms with 25–30 year amortization. Rates are competitive and locked at closing.' },
    ],
    relatedPages: [
        { title: 'Multifamily', href: '/commercial-loans/multifamily-financing', description: 'Apartment financing' },
        { title: 'Commercial Bridge', href: '/commercial-loans/commercial-bridge-loans', description: 'Pre-stabilization' },
        { title: 'Office Financing', href: '/commercial-loans/office-financing', description: 'Office property loans' },
    ],
};
export default function CMBSPage() { return <BuyPageTemplate data={data} />; }
