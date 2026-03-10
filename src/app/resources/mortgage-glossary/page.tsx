import type { Metadata } from 'next';
import styles from '../../privacy-policy/legal.module.css';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = { title: 'Mortgage Glossary — Key Terms Explained', description: 'Comprehensive mortgage glossary. Learn the key terms and definitions for homebuyers and investors. Airus Lending.' };

const terms = [
    { term: 'Amortization', def: 'The process of paying off a loan over time through regular payments that cover both principal and interest.' },
    { term: 'APR (Annual Percentage Rate)', def: 'The total annual cost of borrowing, including interest rate plus fees, expressed as a percentage.' },
    { term: 'Appraisal', def: 'A professional assessment of a property\'s market value, required by lenders before approving a mortgage.' },
    { term: 'ARM (Adjustable-Rate Mortgage)', def: 'A mortgage with an interest rate that changes periodically after an initial fixed-rate period.' },
    { term: 'Closing Costs', def: 'Fees paid at the completion of a real estate transaction, including origination, title, appraisal, and escrow fees.' },
    { term: 'Conventional Loan', def: 'A mortgage not backed by a government agency. Typically requires higher credit scores and larger down payments than government loans.' },
    { term: 'Debt-to-Income Ratio (DTI)', def: 'The percentage of your gross monthly income that goes toward debt payments. Lenders use this to assess your ability to repay.' },
    { term: 'DSCR (Debt Service Coverage Ratio)', def: 'The ratio of a property\'s net operating income to its mortgage payment. Used to qualify investment properties.' },
    { term: 'Down Payment', def: 'The upfront cash payment you make when purchasing a home, expressed as a percentage of the purchase price.' },
    { term: 'Equity', def: 'The difference between your home\'s market value and your remaining mortgage balance.' },
    { term: 'Escrow', def: 'A third-party account that holds funds for property taxes and insurance, paid as part of your monthly mortgage payment.' },
    { term: 'FHA Loan', def: 'A government-backed loan insured by the Federal Housing Administration, allowing lower credit scores and smaller down payments.' },
    { term: 'HELOC', def: 'Home Equity Line of Credit — a revolving credit line secured by your home\'s equity.' },
    { term: 'Jumbo Loan', def: 'A mortgage that exceeds Fannie Mae/Freddie Mac conforming loan limits.' },
    { term: 'LTV (Loan-to-Value Ratio)', def: 'The ratio of the loan amount to the property\'s appraised value, expressed as a percentage.' },
    { term: 'Non-QM (Non-Qualified Mortgage)', def: 'Loans that don\'t meet Qualified Mortgage standards — designed for borrowers with non-traditional income or credit profiles.' },
    { term: 'PMI (Private Mortgage Insurance)', def: 'Insurance required when your down payment is less than 20%, protecting the lender if you default.' },
    { term: 'Pre-Approval', def: 'A conditional commitment from a lender to finance a specific amount, based on verified credit, income, and assets.' },
    { term: 'Rate Lock', def: 'An agreement with a lender to hold a specific interest rate for a set period while your loan is processed.' },
    { term: 'Title Insurance', def: 'Insurance that protects the lender and/or buyer against defects in the property\'s title.' },
    { term: 'Underwriting', def: 'The process by which a lender evaluates the risk of a loan and determines whether to approve it.' },
    { term: 'VA Loan', def: 'A government-backed loan for eligible veterans, active-duty service members, and surviving spouses, offering zero down payment.' },
];

export default function GlossaryPage() {
    return (
        <>
            <div className={styles.legalPage}>
                <div className="container">
                    <p style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 'var(--space-2)' }}>Resource</p>
                    <h1>Mortgage Glossary</h1>
                    <p className={styles.updated}>{terms.length} terms defined · Your complete reference</p>

                    {terms.map((t, i) => (
                        <section key={i}>
                            <h2>{t.term}</h2>
                            <p>{t.def}</p>
                        </section>
                    ))}
                </div>
            </div>
            <CTABanner heading="Have Questions?" description="Our advisors explain everything in plain language — no jargon, no pressure." primaryLabel="Talk to an Advisor" primaryHref="/book-consultation" secondaryLabel="Get Pre-Approved" secondaryHref="/get-pre-approved" variant="blue" />
        </>
    );
}
