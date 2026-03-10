import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'Commercial Bridge Loans', description: 'Short-term commercial bridge financing for acquisitions, repositioning, and value-add projects. Airus Lending.' };
const data = {
    badge: 'Bridge', title: 'Commercial Bridge Loans', subtitle: 'Short-term capital for commercial acquisitions, renovations, and repositioning — close fast, stabilize, then refinance.',
    overview: 'Commercial bridge loans provide short-term (12–36 month) financing for properties that don\'t yet qualify for permanent financing. Common for value-add multifamily, distressed properties, lease-up, and quick acquisitions where speed is essential. Bridge lenders focus on the business plan and exit strategy rather than current cash flow.',
    idealBuyer: ['Investors acquiring distressed or under-performing properties', 'Value-add operators renovating commercial real estate', 'Developers needing capital during construction or lease-up', 'Borrowers who need to close quickly on an opportunity'],
    programs: [
        { title: 'Multifamily Bridge', description: 'Bridge for 5+ unit apartment repositioning.', href: '/commercial-loans/multifamily-financing' },
        { title: 'Mixed-Use Bridge', description: 'Short-term for mixed commercial/residential.', href: '/commercial-loans/mixed-use-financing' },
        { title: 'Office/Retail Bridge', description: 'Bridge for commercial property types.', href: '/commercial-loans/commercial-bridge-loans' },
    ],
    steps: [
        { number: 1, title: 'Business Plan Review', description: 'We assess your acquisition, renovation plan, and exit strategy.' },
        { number: 2, title: 'Bridge Term Sheet', description: 'Secure competitive bridge pricing based on your plan and property.' },
        { number: 3, title: 'Close & Execute', description: 'Fast closing (10–21 days possible) so you can start your business plan.' },
    ],
    faqs: [
        { question: 'How fast can a bridge loan close?', answer: 'As fast as 10–21 days depending on property type and documentation. Speed is one of the key advantages of bridge lending.' },
        { question: 'What is the typical LTV?', answer: 'Bridge loans typically go up to 70–80% of current value or 65–70% of after-renovation value (ARV).' },
        { question: 'What is the exit strategy?', answer: 'Most bridge loans are exited via refinance into permanent financing (agency, CMBS, or conventional) once the property is stabilized.' },
    ],
    relatedPages: [
        { title: 'Multifamily', href: '/commercial-loans/multifamily-financing', description: 'Permanent multifamily' },
        { title: 'Fix & Flip', href: '/commercial-loans/fix-and-flip', description: 'Residential rehab' },
        { title: 'Bridge Loans (Residential)', href: '/home-loans/bridge-loans', description: 'Residential bridge' },
    ],
};
export default function CommBridgePage() { return <BuyPageTemplate data={data} />; }
