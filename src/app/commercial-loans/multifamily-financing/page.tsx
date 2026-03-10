import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Multifamily Financing — 5+ Units', description: 'Commercial multifamily financing for apartment buildings and 5+ unit properties. Bridge, agency, and DSCR options. Airus Lending.' };
const data = {
    badge: 'Multifamily', title: 'Multifamily Financing — 5+ Units', subtitle: 'Commercial mortgage financing for apartment buildings, complexes, and portfolios of 5+ units.',
    overview: 'Properties with 5 or more residential units are classified as commercial real estate. Multifamily financing provides long-term, fixed or floating-rate mortgages for apartment buildings, complexes, and portfolios. Agency programs (Fannie Mae, Freddie Mac), CMBS, and private capital options are available depending on the property size, occupancy, and borrower profile.',
    idealBuyer: ['Investors acquiring 5–50+ unit apartment properties', 'Operators stabilizing value-add multifamily deals', 'Developers building new apartment communities', 'Portfolio owners refinancing existing multifamily holdings'],
    programs: [
        { title: 'Agency Multifamily', description: 'Fannie Mae / Freddie Mac multifamily — best rates and terms.', href: '/commercial-loans/multifamily-financing' },
        { title: 'Bridge Loans', description: 'Short-term capital for value-add and stabilization.', href: '/commercial-loans/commercial-bridge-loans' },
        { title: 'CMBS', description: 'Non-recourse commercial mortgage-backed securities.', href: '/commercial-loans/multifamily-financing' },
    ],
    steps: [
        { number: 1, title: 'Property Analysis', description: 'We review rent rolls, occupancy, condition, and NOI to determine the best program.' },
        { number: 2, title: 'Term Sheet', description: 'We secure competitive term sheets from agency, bridge, or private capital sources.' },
        { number: 3, title: 'Underwriting & Close', description: 'Coordinate appraisal, environmental, and closing for a smooth transaction.' },
    ],
    faqs: [
        { question: 'What is the minimum property size?', answer: '5 units is the threshold for commercial multifamily. Properties with 2–4 units are classified as residential and financed with conventional or DSCR programs.' },
        { question: 'Do I need a track record?', answer: 'For agency financing, yes — borrowers typically need multifamily experience. Bridge and private capital lenders may be more flexible for newer operators.' },
        { question: 'What rates are available?', answer: 'Agency multifamily rates are among the most competitive in commercial lending. Bridge rates are higher but offer more flexibility for value-add plays.' },
    ],
    relatedPages: [
        { title: 'Commercial Bridge', href: '/commercial-loans/commercial-bridge-loans', description: 'Short-term multifamily capital' },
        { title: 'Multi-Unit (2-4)', href: '/buy/multi-unit-property-loans', description: 'Residential multi-unit' },
        { title: 'DSCR Loans', href: '/home-loans/dscr-loans', description: 'Cash-flow residential' },
    ],
};
export default function MultifamilyPage() { return <BuyPageTemplate data={data} />; }
