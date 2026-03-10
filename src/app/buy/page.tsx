import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import ProcessSteps from '@/components/ProcessSteps';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
    title: 'Buy a Home',
    description: 'Explore home purchase mortgage options with Airus Lending. First-time buyers, investment properties, condos, new construction, and more. Get pre-approved today.',
};

const buyCards = [
    { icon: '🏡', title: 'First-Time Homebuyer', description: 'Low-down-payment programs, down payment assistance, and step-by-step guidance for your first purchase.', href: '/buy/first-time-homebuyer' },
    { icon: '🏠', title: 'Primary Residence', description: 'Competitive rates and flexible programs for buying your primary home — conventional, FHA, VA, and more.', href: '/buy/primary-residence-loans' },
    { icon: '🏖️', title: 'Second Home', description: 'Financing for vacation homes and second residences with attractive terms.', href: '/buy/second-home-loans' },
    { icon: '📈', title: 'Investment Property', description: 'Purchase your next rental property with conventional, DSCR, or portfolio lending.', href: '/buy/investment-property-loans' },
    { icon: '🏢', title: 'Condo Loans', description: 'Warrantable and non-warrantable condo financing with flexible guidelines.', href: '/buy/condo-loans' },
    { icon: '🏗️', title: 'New Construction', description: 'One-time-close and two-close construction loans for building your dream home.', href: '/buy/new-construction-loans' },
    { icon: '🏘️', title: 'Manufactured Homes', description: 'FHA, VA, and conventional programs for manufactured and modular homes.', href: '/buy/manufactured-home-loans' },
    { icon: '🏬', title: 'Multi-Unit Property', description: 'Finance duplexes, triplexes, and fourplexes — live in one unit, rent the others.', href: '/buy/multi-unit-property-loans' },
];

export default function BuyPage() {
    return (
        <>
            <Hero
                variant="dark"
                badge="Home Purchase"
                title="Find the Right Loan to Buy Your Home"
                subtitle="Whether it's your first home, an investment property, or a custom build — we have the programs and expertise to make it happen."
                primaryCTA={{ label: 'Get Pre-Approved', href: '/get-pre-approved' }}
                secondaryCTA={{ label: 'Talk to an Advisor', href: '/book-consultation' }}
            />

            <FeatureCards
                title="Home Purchase Options"
                subtitle="Every situation is different. Explore the option that fits your goals."
                cards={buyCards}
                columns={4}
            />

            <ProcessSteps
                title="The Home Buying Process"
                subtitle="From pre-approval to closing day — here's what to expect."
                steps={[
                    { number: 1, title: 'Get Pre-Approved', description: 'Know exactly what you can afford and what loan programs you qualify for before you start shopping.' },
                    { number: 2, title: 'Find Your Home & Make an Offer', description: 'Work with your agent to find the right property. Your pre-approval letter strengthens your offer.' },
                    { number: 3, title: 'Underwriting & Appraisal', description: 'We manage the underwriting process, coordinate the appraisal, and keep everything on track.' },
                    { number: 4, title: 'Close & Get the Keys', description: 'Final review, signing, and funding. Welcome to your new home.' },
                ]}
            />

            <FAQ
                title="Home Buying FAQs"
                items={[
                    { question: 'How much do I need for a down payment?', answer: 'Down payments range from 0% (VA and USDA) to 3% (conventional) to 3.5% (FHA) to 20%+ for investment properties. The right amount depends on your loan program, credit, and goals.' },
                    { question: 'What credit score do I need to buy a home?', answer: 'Most programs require a minimum of 580–620, though some conventional loans require 680+. We also offer non-QM programs for borrowers with lower credit scores.' },
                    { question: 'How long does it take to close?', answer: 'Most purchase transactions close in 21–30 days. Some programs and situations may take longer. We work to close as fast as possible while keeping your file clean.' },
                    { question: 'Can I buy a home if I\'m self-employed?', answer: 'Absolutely. We offer bank statement loans, 1099 programs, and asset depletion options for self-employed borrowers who may not have traditional income documentation.' },
                ]}
            />

            <CTABanner
                heading="Ready to Start Your Home Search?"
                description="Get pre-approved and know exactly what you can afford — before you start shopping."
                primaryLabel="Get Pre-Approved"
                primaryHref="/get-pre-approved"
                secondaryLabel="Explore Loan Programs"
                secondaryHref="/home-loans"
                variant="blue"
            />
        </>
    );
}
