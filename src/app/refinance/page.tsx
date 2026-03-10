import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Refinance Your Mortgage',
    description: 'Lower your rate, reduce your term, or cash out equity. Explore conventional, FHA streamline, VA IRRRL, and jumbo refinance options with Airus Lending.',
};

const refiCards = [
    { icon: '📉', title: 'Rate & Term Refinance', description: 'Lower your interest rate or change your loan term without cashing out equity.', href: '/refinance/rate-and-term' },
    { icon: '💰', title: 'Cash-Out Refinance', description: 'Access your home equity for renovations, debt consolidation, or investments.', href: '/refinance/cash-out-refinance' },
    { icon: '🏦', title: 'Debt Consolidation', description: 'Roll high-interest debt into your mortgage with a lower rate.', href: '/refinance/debt-consolidation' },
    { icon: '🔨', title: 'Home Improvement', description: 'Finance renovations and upgrades through your refinance.', href: '/refinance/home-improvement' },
    { icon: '📈', title: 'Investment Property', description: 'Refinance your rental or investment property at competitive terms.', href: '/refinance/investment-property' },
    { icon: '🎖️', title: 'VA IRRRL', description: 'Streamlined refinancing for veterans with minimal documentation.', href: '/refinance/va-irrrl' },
    { icon: '🏛️', title: 'FHA Streamline', description: 'Simplified refinancing for existing FHA borrowers — limited paperwork.', href: '/refinance/fha-streamline' },
    { icon: '🏰', title: 'Jumbo Refinance', description: 'Refinance high-balance loans above conforming limits.', href: '/refinance/jumbo-refinance' },
];

export default function RefinancePage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Refinance"
                title="Refinance Smarter, Save More"
                subtitle="Lower your rate, shorten your term, or tap into your equity. We compare options from 50+ lenders to find the best refinance for your situation."
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
            />

            <FeatureCards
                title="Refinance Options"
                subtitle="Choose the refinance strategy that matches your goals."
                cards={refiCards}
                columns={4}
            />

            <FAQ
                title="Refinance FAQs"
                items={[
                    { question: 'When does it make sense to refinance?', answer: 'Refinancing typically makes sense when you can lower your rate by at least 0.5–1%, shorten your term, or need to access equity. Your break-even point depends on closing costs vs. monthly savings.' },
                    { question: 'Can I refinance with bad credit?', answer: 'Yes. FHA Streamline and some non-QM options allow refinancing with lower credit scores. We\'ll review your full situation to find the best available option.' },
                    { question: 'How much equity do I need for a cash-out refinance?', answer: 'Most lenders require at least 20% equity remaining after the cash-out. Some programs allow more flexible terms. We\'ll help you understand your options.' },
                    { question: 'How long does a refinance take?', answer: 'Most refinances close in 21–30 days. Streamline programs (VA IRRRL, FHA Streamline) can sometimes close faster due to reduced documentation.' },
                ]}
            />

            <CTABanner
                heading="See What You Could Save"
                description="Get a personalized refinance analysis — no obligation, no hard credit pull."
                primaryLabel="Get Pre-Approved"
                primaryHref="/get-pre-approved"
                secondaryLabel="Use Our Calculator"
                secondaryHref="/calculators/refinance-calculator"
                variant="dark"
            />
        </>
    );
}
