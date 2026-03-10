import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import ProcessSteps from '@/components/ProcessSteps';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'SBA Loans',
    description: 'SBA 7(a), SBA 504, SBA Express, and business acquisition loans. Government-backed small business financing from Airus Lending.',
};

const sbaCards = [
    { icon: '🏛️', title: 'SBA 7(a) Loans', description: 'The most flexible SBA program — up to $5M for working capital, real estate, equipment, and business acquisition.', href: '/sba-loans/sba-7a-loans' },
    { icon: '🏗️', title: 'SBA 504 Loans', description: 'Fixed-rate, long-term financing for owner-occupied commercial real estate and major equipment purchases.', href: '/sba-loans/sba-504-loans' },
    { icon: '⚡', title: 'SBA Express Loans', description: 'Faster approval for smaller loan amounts up to $500K with streamlined processing.', href: '/sba-loans/sba-express-loans' },
    { icon: '💼', title: 'Business Acquisition', description: 'Finance the purchase of an existing business — inventory, equipment, goodwill, and real estate included.', href: '/sba-loans/business-acquisition' },
    { icon: '🤝', title: 'Partner Buyout', description: 'Finance the buyout of a business partner using SBA-backed funding.', href: '/sba-loans/partner-buyout' },
    { icon: '🏢', title: 'Owner-Occupied Commercial', description: 'Purchase or refinance the building your business operates from.', href: '/sba-loans/owner-occupied-commercial' },
    { icon: '⚙️', title: 'Equipment Financing', description: 'Finance major equipment purchases with long-term SBA terms.', href: '/sba-loans/equipment-financing' },
    { icon: '💵', title: 'Working Capital', description: 'Access cash for inventory, hiring, marketing, and day-to-day operations.', href: '/sba-loans/working-capital' },
];

export default function SBAPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Small Business"
                title="SBA Loans — Government-Backed Business Financing"
                subtitle="Low down payments, long terms, and competitive rates for qualified small businesses. SBA 7(a), 504, Express, and more."
                primaryCTA={{ label: 'Talk to a Specialist', href: '/book-consultation' }}
                secondaryCTA={{ label: 'SBA Calculator', href: '/calculators/sba-loan-calculator' }}
            />

            <FeatureCards
                title="SBA Loan Programs"
                subtitle="Government-backed financing to start, grow, or acquire a business."
                cards={sbaCards}
                columns={4}
            />

            <ProcessSteps
                title="How SBA Lending Works"
                subtitle="From application to funding — here's what to expect."
                steps={[
                    { number: 1, title: 'Initial Consultation', description: 'We review your business plan, financials, and goals to determine the right SBA program.' },
                    { number: 2, title: 'Package & Submit', description: 'We prepare your complete application package and submit to SBA-preferred lenders.' },
                    { number: 3, title: 'Underwriting & Approval', description: 'SBA review and lender underwriting. We manage communication and documentation.' },
                    { number: 4, title: 'Closing & Funding', description: 'Final approval, closing, and disbursement of funds.' },
                ]}
            />

            <FAQ
                title="SBA Loan FAQs"
                items={[
                    { question: 'What is the difference between SBA 7(a) and SBA 504?', answer: 'SBA 7(a) is more flexible and can be used for working capital, equipment, real estate, and acquisitions. SBA 504 is specifically for major fixed assets like owner-occupied commercial real estate and heavy equipment, with lower down payments and fixed rates.' },
                    { question: 'How long does SBA approval take?', answer: 'SBA Express can be approved in days. Standard 7(a) typically takes 30–60 days. 504 loans may take 60–90 days due to the CDC involvement. Your advisor keeps the process moving.' },
                    { question: 'What credit score do I need for an SBA loan?', answer: 'Most SBA programs require a minimum credit score of 680. Some lenders may consider 650+ with strong compensating factors. The SBA also looks at business financials, cash flow, and collateral.' },
                    { question: 'Can I use an SBA loan to buy a business?', answer: 'Yes. SBA 7(a) loans are one of the most common tools for business acquisition, covering the purchase price including inventory, equipment, and goodwill.' },
                    { question: 'What is the maximum SBA loan amount?', answer: 'SBA 7(a) loans go up to $5 million. SBA 504 loans can exceed $5 million for certain types of projects. SBA Express is capped at $500,000.' },
                ]}
            />

            <CTABanner
                heading="Ready to Grow Your Business?"
                description="Talk to an SBA specialist who can guide you through the right program for your goals."
                primaryLabel="Talk to a Specialist"
                primaryHref="/book-consultation"
                secondaryLabel="SBA Calculator"
                secondaryHref="/calculators/sba-loan-calculator"
                variant="dark"
            />
        </>
    );
}
