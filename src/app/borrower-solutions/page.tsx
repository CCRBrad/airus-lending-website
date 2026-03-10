import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Borrower Solutions — Find the Right Approach for Your Situation',
    description: 'Mortgage solutions tailored to your borrower profile. First-time buyers, self-employed, veterans, investors, and more. Airus Lending.',
};

const borrowerCards = [
    { icon: '🏡', title: 'First-Time Homebuyers', description: 'Low down payment, flexible credit, and step-by-step guidance.', href: '/borrower-solutions/first-time-homebuyers' },
    { icon: '💼', title: 'Self-Employed', description: 'Bank statement programs — no tax returns required.', href: '/borrower-solutions/self-employed-borrowers' },
    { icon: '🏢', title: 'Business Owners', description: 'Programs that see past write-offs to your real income.', href: '/borrower-solutions/business-owners' },
    { icon: '📊', title: 'Real Estate Investors', description: 'DSCR, conventional, and portfolio options to scale.', href: '/borrower-solutions/real-estate-investors' },
    { icon: '🎖️', title: 'Veterans & Military', description: 'VA loans — zero down, no PMI, best rates.', href: '/borrower-solutions/veterans' },
    { icon: '📋', title: '1099 Contractors', description: 'Qualify using 1099s, bank statements, or P&L.', href: '/borrower-solutions/1099-borrowers' },
    { icon: '🔄', title: 'Credit Challenges', description: 'Programs available 1 day after bankruptcy or foreclosure.', href: '/borrower-solutions/credit-challenges' },
    { icon: '💎', title: 'High Net Worth', description: 'Asset depletion and jumbo programs for sophisticated borrowers.', href: '/borrower-solutions/high-net-worth' },
    { icon: '🌍', title: 'Foreign Nationals', description: 'U.S. property financing without SSN or credit history.', href: '/borrower-solutions/foreign-nationals' },
    { icon: '🔢', title: 'ITIN Borrowers', description: 'Homeownership without a Social Security Number.', href: '/borrower-solutions/itin-borrowers' },
    { icon: '🏙️', title: 'Condo Buyers', description: 'Warrantable and non-warrantable condo expertise.', href: '/borrower-solutions/condo-buyers' },
    { icon: '🏘️', title: 'Multi-Unit Buyers', description: 'House-hack with 2–4 unit properties.', href: '/borrower-solutions/multi-unit-buyers' },
];

export default function BorrowerSolutionsPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Find Your Solution"
                title="Mortgage Solutions by Borrower Type"
                subtitle="Every borrower is different. Find the programs, guidance, and strategies designed for your specific situation."
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
            />
            <FeatureCards
                title="Choose Your Situation"
                subtitle="Select the profile that best describes you — we'll show you the right programs."
                cards={borrowerCards}
                columns={4}
            />
            <CTABanner
                heading="Not Sure Where You Fit?"
                description="Talk to an advisor who can assess your situation and recommend the right programs."
                primaryLabel="Book a Consultation"
                primaryHref="/book-consultation"
                secondaryLabel="Get Pre-Approved"
                secondaryHref="/get-pre-approved"
                variant="blue"
            />
        </>
    );
}
