import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://airuslending.com';

    const routes = [
        // Core
        '/', '/about', '/contact', '/get-pre-approved', '/book-consultation',
        // Home Loans
        '/home-loans',
        '/home-loans/fha-loans', '/home-loans/va-loans', '/home-loans/conventional-loans',
        '/home-loans/dscr-loans', '/home-loans/bank-statement-loans', '/home-loans/itin-loans',
        '/home-loans/jumbo-loans', '/home-loans/non-qm-loans', '/home-loans/usda-loans',
        '/home-loans/fixed-rate-mortgages', '/home-loans/adjustable-rate-mortgages',
        '/home-loans/home-equity-loans', '/home-loans/heloc', '/home-loans/bridge-loans',
        '/home-loans/down-payment-assistance', '/home-loans/renovation-loans',
        '/home-loans/fha-203k-loans', '/home-loans/one-time-close-construction',
        '/home-loans/va-construction-loans', '/home-loans/conventional-construction-loans',
        '/home-loans/foreign-national-loans', '/home-loans/asset-depletion-loans',
        '/home-loans/interest-only-mortgages', '/home-loans/12-month-bank-statement-loans',
        // Buy
        '/buy',
        '/buy/first-time-homebuyer', '/buy/primary-residence-loans', '/buy/second-home-loans',
        '/buy/investment-property-loans', '/buy/condo-loans', '/buy/new-construction-loans',
        '/buy/manufactured-home-loans', '/buy/multi-unit-property-loans',
        // Refinance
        '/refinance',
        '/refinance/rate-and-term', '/refinance/cash-out-refinance', '/refinance/debt-consolidation',
        '/refinance/home-improvement', '/refinance/investment-property', '/refinance/va-irrrl',
        '/refinance/fha-streamline', '/refinance/jumbo-refinance',
        // Borrower Solutions
        '/borrower-solutions',
        '/borrower-solutions/first-time-homebuyers', '/borrower-solutions/self-employed-borrowers',
        '/borrower-solutions/business-owners', '/borrower-solutions/real-estate-investors',
        '/borrower-solutions/veterans', '/borrower-solutions/1099-borrowers',
        '/borrower-solutions/credit-challenges', '/borrower-solutions/high-net-worth',
        '/borrower-solutions/foreign-nationals', '/borrower-solutions/itin-borrowers',
        '/borrower-solutions/condo-buyers', '/borrower-solutions/multi-unit-buyers',
        // Compare
        '/compare/fha-vs-conventional', '/compare/va-vs-conventional',
        '/compare/dscr-vs-bank-statement', '/compare/heloc-vs-cash-out',
        '/compare/fixed-vs-arm', '/compare/sba-7a-vs-504',
        // Calculators
        '/calculators',
        '/calculators/mortgage-calculator', '/calculators/home-affordability-calculator',
        '/calculators/refinance-calculator', '/calculators/cash-out-refinance-calculator',
        '/calculators/down-payment-calculator', '/calculators/amortization-calculator',
        '/calculators/dscr-calculator', '/calculators/rent-vs-buy-calculator',
        '/calculators/sba-loan-calculator', '/calculators/closing-costs-calculator',
        // Commercial
        '/commercial-loans',
        '/commercial-loans/multifamily-financing', '/commercial-loans/commercial-bridge-loans',
        '/commercial-loans/fix-and-flip', '/commercial-loans/mixed-use-financing',
        '/commercial-loans/office-financing', '/commercial-loans/retail-financing',
        '/commercial-loans/industrial-financing', '/commercial-loans/ground-up-construction',
        '/commercial-loans/cmbs-loans', '/commercial-loans/hard-money-loans',
        '/commercial-loans/hotel-financing',
        // SBA
        '/sba-loans',
        '/sba-loans/sba-7a-loans', '/sba-loans/sba-504-loans', '/sba-loans/sba-express-loans',
        '/sba-loans/business-acquisition', '/sba-loans/partner-buyout',
        '/sba-loans/owner-occupied-commercial', '/sba-loans/equipment-financing',
        '/sba-loans/working-capital',
        // Resources
        '/resources',
        '/resources/how-to-get-pre-approved', '/resources/understanding-mortgage-rates',
        '/resources/mortgage-glossary',
        // Legal
        '/privacy-policy', '/terms-of-use', '/licensing', '/accessibility',
        '/ccpa-notice', '/do-not-call', '/fair-lending',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '/' ? 'daily' : route.includes('/resources/') ? 'weekly' : 'monthly',
        priority: route === '/' ? 1.0
            : ['/home-loans', '/buy', '/refinance', '/get-pre-approved'].includes(route) ? 0.9
                : route.startsWith('/home-loans/') || route.startsWith('/calculators/') ? 0.8
                    : route.startsWith('/compare/') || route.startsWith('/borrower-solutions/') ? 0.7
                        : 0.6,
    }));
}
