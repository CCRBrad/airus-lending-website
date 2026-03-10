import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Manufactured Home Loans', description: 'FHA, VA, and conventional financing for manufactured and modular homes on permanent foundations. Airus Lending.' };
const data = {
    badge: 'Manufactured', title: 'Manufactured Home Loans', subtitle: 'FHA, VA, and conventional financing for manufactured and modular homes — real lending for real homes.',
    overview: 'Manufactured and modular homes offer affordable homeownership, and with the right lender, financing is available through FHA, VA, conventional, and non-QM programs. The key requirement is that the home must be on a permanent foundation and titled as real property (not personal property). Airus Lending works with lenders experienced in manufactured home lending.',
    idealBuyer: ['Buyers purchasing a manufactured home on a permanent foundation', 'Veterans using VA benefits for a manufactured home', 'Buyers in rural or suburban areas seeking affordable options', 'Borrowers purchasing a modular home (factory-built, site-assembled)'],
    programs: [
        { title: 'FHA', description: 'Manufactured home financing with low down payment.', href: '/home-loans/fha-loans' },
        { title: 'VA', description: 'VA-eligible manufactured home programs.', href: '/home-loans/va-loans' },
        { title: 'Conventional', description: 'Standard financing for qualifying manufactured homes.', href: '/home-loans/conventional-loans' },
        { title: 'USDA', description: '100% financing in eligible areas.', href: '/home-loans/usda-loans' },
    ],
    steps: [
        { number: 1, title: 'Verify Eligibility', description: 'Confirm the home is on a permanent foundation and titled as real property.' },
        { number: 2, title: 'Get Pre-Approved', description: 'Explore your program options and get qualified.' },
        { number: 3, title: 'Purchase & Close', description: 'Your advisor guides you through to closing.' },
    ],
    faqs: [
        { question: 'What makes a manufactured home eligible for a mortgage?', answer: 'The home must be built after June 15, 1976 (HUD code), on a permanent foundation, titled as real property, and at least 400 sq ft. Mobile homes not on permanent foundations are generally not eligible.' },
        { question: 'Can I get an FHA loan for a manufactured home?', answer: 'Yes. FHA offers manufactured home financing with 3.5% down, provided the home meets all FHA and HUD requirements.' },
    ],
    relatedPages: [
        { title: 'FHA Loans', href: '/home-loans/fha-loans', description: 'Government-backed financing' },
        { title: 'USDA Loans', href: '/home-loans/usda-loans', description: 'Rural area financing' },
        { title: 'First-Time Homebuyer', href: '/buy/first-time-homebuyer', description: 'First-time buyer programs' },
    ],
};
export default function ManufacturedHomePage() { return <BuyPageTemplate data={data} />; }
