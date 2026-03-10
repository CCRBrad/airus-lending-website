import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Commercial & SBA Loans',
    description: 'Commercial real estate, multifamily, fix-and-flip, SBA 7(a), SBA 504, and business acquisition financing from Airus Lending. Speak with a financing specialist today.',
};

const commercialCards = [
    { icon: '🏢', title: 'Commercial Real Estate', description: 'Acquisition, refinance, and cash-out for commercial properties.', href: '/commercial-loans/commercial-real-estate' },
    { icon: '🏘️', title: 'Multifamily Financing', description: '5+ unit apartment buildings with competitive long-term financing.', href: '/commercial-loans/multifamily-financing' },
    { icon: '🔨', title: 'Fix & Flip Loans', description: 'Short-term rehab financing for residential investors.', href: '/commercial-loans/fix-and-flip' },
    { icon: '🌆', title: 'Mixed-Use Properties', description: 'Combined residential-commercial properties with flexible terms.', href: '/commercial-loans/mixed-use-property' },
    { icon: '🏗️', title: 'Construction Financing', description: 'Ground-up construction for commercial projects.', href: '/commercial-loans/construction-financing' },
    { icon: '🔗', title: 'Bridge Loans', description: 'Short-term financing to bridge acquisitions and stabilization.', href: '/commercial-loans/bridge-loans' },
];

const sbaCards = [
    { icon: '🏛️', title: 'SBA 7(a) Loans', description: 'The most flexible SBA program — up to $5M for working capital, acquisition, and real estate.', href: '/sba-loans/sba-7a-loans' },
    { icon: '🏗️', title: 'SBA 504 Loans', description: 'Fixed-rate, long-term financing for major asset purchases and owner-occupied real estate.', href: '/sba-loans/sba-504-loans' },
    { icon: '⚡', title: 'SBA Express Loans', description: 'Faster approval for smaller loan amounts up to $500K.', href: '/sba-loans/sba-express-loans' },
    { icon: '💼', title: 'Business Acquisition', description: 'Finance the purchase of an existing business with SBA backing.', href: '/sba-loans/business-acquisition' },
];

export default function CommercialPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Commercial & SBA"
                title="Financing for Business Growth and Commercial Real Estate"
                subtitle="From multifamily acquisitions to SBA business loans — specialized financing with the guidance to match."
                primaryCTA={{ label: 'Speak With a Specialist', href: '/book-consultation' }}
                secondaryCTA={{ label: 'Explore SBA Programs', href: '/sba-loans' }}
            />

            <FeatureCards
                title="Commercial Loan Programs"
                subtitle="Financing for income-producing and commercial properties."
                cards={commercialCards}
                columns={3}
            />

            <FeatureCards
                title="SBA Loan Programs"
                subtitle="Government-backed financing to grow your business."
                cards={sbaCards}
                columns={4}
                variant="dark"
            />

            <FAQ
                title="Commercial & SBA FAQs"
                items={[
                    { question: 'What is the difference between SBA 7(a) and SBA 504?', answer: 'SBA 7(a) is more flexible and can be used for working capital, inventory, debt refinancing, and real estate. SBA 504 is specifically for major fixed assets like owner-occupied commercial real estate and equipment, with lower down payments and fixed rates.' },
                    { question: 'Can I finance a commercial property as an investor?', answer: 'Yes. We offer commercial real estate financing for both owner-occupied and investor-owned properties including multifamily, mixed-use, retail, office, and industrial properties.' },
                    { question: 'How does a fix-and-flip loan work?', answer: 'Fix-and-flip loans provide short-term financing (typically 6–18 months) for purchasing and renovating residential properties for resale. They are based primarily on the after-repair value (ARV) of the property.' },
                    { question: 'What qualifications are needed for an SBA loan?', answer: 'SBA loans generally require a strong business plan, demonstrated ability to repay, 2 years of business history, minimum credit score of around 680, and sufficient collateral. Requirements vary by program and lender.' },
                ]}
            />

            <CTABanner
                heading="Let's Discuss Your Financing Needs"
                description="Our commercial and SBA team can structure the right solution for your business."
                primaryLabel="Speak With a Specialist"
                primaryHref="/book-consultation"
                secondaryLabel="Request a Quote"
                secondaryHref="/contact"
                variant="dark"
            />
        </>
    );
}
