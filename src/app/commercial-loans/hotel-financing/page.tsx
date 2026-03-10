import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Hotel & Hospitality Financing', description: 'Commercial financing for hotels, motels, and hospitality properties. Acquisition, refinance, and renovation. Airus Lending.' };
const data = {
    badge: 'Hospitality', title: 'Hotel & Hospitality Financing', subtitle: 'Commercial mortgage financing for hotels, motels, extended stay, and hospitality properties.',
    overview: 'Hotel and hospitality financing is a specialized segment of commercial lending. Hotels are operating businesses as well as real estate, making underwriting more complex than typical commercial properties. Lenders evaluate RevPAR (revenue per available room), ADR (average daily rate), occupancy rates, franchise agreements, and management quality.',
    idealBuyer: ['Hotel investors acquiring flagged or independent properties', 'Owners refinancing existing hotel portfolios', 'Developers building new hospitality projects', 'Operators converting properties to hotel/hospitality use'],
    programs: [
        { title: 'SBA 7(a)', description: 'Flexible SBA financing for hotel acquisition.', href: '/sba-loans/sba-7a-loans' },
        { title: 'CMBS', description: 'Non-recourse financing for stabilized hotels.', href: '/commercial-loans/cmbs-loans' },
        { title: 'Bridge', description: 'Short-term for renovation or repositioning.', href: '/commercial-loans/commercial-bridge-loans' },
    ],
    steps: [
        { number: 1, title: 'Property & Operations Review', description: 'We analyze revenue, occupancy, franchise, and management structure.' },
        { number: 2, title: 'Program Selection', description: 'SBA, CMBS, bridge, or private capital — matched to the opportunity.' },
        { number: 3, title: 'Close', description: 'Coordinate appraisal, franchise approval, and closing.' },
    ],
    faqs: [
        { question: 'Can I use SBA for a hotel?', answer: 'Yes — SBA 7(a) is commonly used for hotel acquisitions, especially for owner-operated or flag franchise properties.' },
        { question: 'Are hotels harder to finance than other commercial?', answer: 'Hotels require specialized underwriting because they are operating businesses. Revenue can fluctuate with seasonality and market conditions. Experienced hotel lenders understand these dynamics.' },
    ],
    relatedPages: [
        { title: 'SBA 7(a)', href: '/sba-loans/sba-7a-loans', description: 'Hotel acquisition financing' },
        { title: 'CMBS', href: '/commercial-loans/cmbs-loans', description: 'Non-recourse hotel loans' },
        { title: 'Commercial Bridge', href: '/commercial-loans/commercial-bridge-loans', description: 'Renovation capital' },
    ],
};
export default function HotelPage() { return <BuyPageTemplate data={data} />; }
