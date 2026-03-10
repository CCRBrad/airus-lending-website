import type { Metadata } from 'next';
import BuyPageTemplate from '@/templates/BuyPageTemplate';
export const metadata: Metadata = { title: 'SBA Express Loans', description: 'Fast SBA financing up to $500K with streamlined processing. Approved in days, not months. Airus Lending.' };
const data = {
    badge: 'SBA Express', title: 'SBA Express Loans', subtitle: 'Faster SBA approval for smaller loan amounts — up to $500K with streamlined processing and quick turnarounds.',
    overview: 'The SBA Express program is a streamlined version of the 7(a) program that offers faster approval times (often within 36 hours) for loans up to $500,000. The trade-off is a lower SBA guarantee (50% vs 75%), but the speed and simplicity make it ideal for established businesses that need capital quickly without the heavier documentation of a standard 7(a).',
    idealBuyer: ['Established businesses needing quick access to capital', 'Companies needing working capital or equipment under $500K', 'Businesses that want SBA terms with faster processing', 'Lines of credit for ongoing business needs'],
    programs: [],
    steps: [
        { number: 1, title: 'Apply', description: 'Streamlined application — less documentation than standard 7(a).' },
        { number: 2, title: 'Quick Approval', description: 'SBA Express decisions often come within 36 hours.' },
        { number: 3, title: 'Fund', description: 'Fast disbursement once approved and closed.' },
    ],
    faqs: [
        { question: 'How fast is SBA Express?', answer: 'SBA Express can be approved in as little as 36 hours, compared to 30–60 days for standard 7(a). Total time from application to funding is typically 2–4 weeks.' },
        { question: 'Can I use it for real estate?', answer: 'Yes, but the $500K cap makes it more suitable for smaller purchases, equipment, or working capital.' },
        { question: 'What is the difference from standard 7(a)?', answer: 'Lower maximum ($500K vs $5M), lower guarantee (50% vs 75%), but much faster processing and less documentation.' },
    ],
    relatedPages: [
        { title: 'SBA 7(a)', href: '/sba-loans/sba-7a-loans', description: 'Higher amounts, full program' },
        { title: 'Working Capital', href: '/sba-loans/working-capital', description: 'Operating capital' },
        { title: 'Equipment Financing', href: '/sba-loans/equipment-financing', description: 'Equipment purchases' },
    ],
};
export default function SBAExpressPage() { return <BuyPageTemplate data={data} />; }
