import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'SBA Partner Buyout Financing', description: 'Finance the buyout of a business partner using SBA 7(a). Airus Lending.' };
const data = {
    badge: 'Partner Buyout', title: 'Partner Buyout Financing', subtitle: 'Buy out your business partner and take full ownership — SBA 7(a) makes it possible with as little as 10% equity.',
    overview: 'When business partnerships end, one partner often wants to buy the other out. SBA 7(a) loans are the most common tool for this, providing financing to purchase a partner\'s ownership stake. The business is valued, the buyout price is determined, and the SBA finances the transaction similar to a business acquisition.',
    idealBuyer: ['Business owners buying out a departing partner', 'Partners taking full ownership of an established business', 'Family business succession and ownership transitions', 'Partnerships dissolving where one party wants to continue'],
    programs: [
        { title: 'SBA 7(a)', description: 'Primary tool for partner buyouts.', href: '/sba-loans/sba-7a-loans' },
    ],
    steps: [
        { number: 1, title: 'Business Valuation', description: 'An independent valuation determines fair market value and the buyout price.' },
        { number: 2, title: 'Negotiate Terms', description: 'Structure the buyout agreement including seller notes and transition terms.' },
        { number: 3, title: 'SBA Application', description: 'Submit the buyout package with financials, valuation, and business plan.' },
        { number: 4, title: 'Close & Transition', description: 'Complete the buyout and take full ownership.' },
    ],
    faqs: [
        { question: 'How is the buyout price determined?', answer: 'An independent business valuation assesses the fair market value of the business. The partner\'s ownership percentage determines their share of that value.' },
        { question: 'Can the departing partner carry a note?', answer: 'Yes — seller financing from the departing partner on full standby (no payments for 24 months) is very common and can count toward the equity injection requirement.' },
    ],
    relatedPages: [
        { title: 'Business Acquisition', href: '/sba-loans/business-acquisition', description: 'Buying a business' },
        { title: 'SBA 7(a)', href: '/sba-loans/sba-7a-loans', description: 'Core SBA program' },
        { title: 'SBA Calculator', href: '/calculators/sba-loan-calculator', description: 'Estimate payments' },
    ],
};
export default function PartnerBuyoutPage() { return <BuyPageTemplate data={data} />; }
