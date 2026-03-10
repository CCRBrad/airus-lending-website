import type { Metadata } from 'next';
import LoanPageTemplate from '@/templates/LoanPageTemplate';

export const metadata: Metadata = { title: 'Jumbo Loans', description: 'Jumbo loans finance properties above conforming loan limits. Competitive rates for luxury homes and high-value properties. Apply with Airus Lending.' };

const data = {
    badge: 'High-Balance',
    title: 'Jumbo Loans',
    subtitle: 'Financing above conforming loan limits for luxury homes and high-value properties — with competitive rates and dedicated expertise.',
    overview: 'Jumbo loans are mortgage loans that exceed the conforming loan limits set by Fannie Mae and Freddie Mac. In most U.S. counties, the conforming limit is $766,550 (2024), though high-cost areas have higher limits. Because jumbo loans are not backed by the GSEs, they carry different qualification requirements — but also offer access to premium financing for properties that standard programs cannot cover.',
    whoIsItFor: [
        'Buyers purchasing properties above conforming loan limits',
        'High-income professionals with strong credit profiles',
        'Buyers in high-cost real estate markets',
        'High-net-worth individuals seeking premium financing',
        'Borrowers looking to refinance existing jumbo mortgages',
    ],
    keyBenefits: [
        { title: 'Higher Loan Amounts', description: 'Finance properties well above conforming limits — $1M, $2M, $3M+ depending on program.' },
        { title: 'Competitive Pricing', description: 'Jumbo rates are often comparable to — and sometimes lower than — conforming rates for well-qualified borrowers.' },
        { title: 'Flexible Terms', description: 'Available as fixed-rate, ARM, and interest-only with various term lengths.' },
        { title: 'Multiple Property Types', description: 'Primary, second home, and investment property eligible.' },
    ],
    qualificationOverview: [
        'Strong credit score — typically 700+ (some programs at 680)',
        'Down payment of 10–20% depending on loan amount and property type',
        'DTI generally up to 43%',
        'Cash reserves of 6–12 months PITIA',
        'Full income documentation (W-2s, tax returns, and/or bank statements)',
        'Property appraisal (sometimes two appraisals for very high values)',
    ],
    downPaymentInfo: '10–20%',
    creditRequirements: '700+ (680 with compensating factors)',
    occupancyTypes: ['Primary residence', 'Second home', 'Investment property'],
    propertyTypes: ['Single-family', 'Condos', 'Townhomes', '2–4 units', 'Luxury properties'],
    pros: ['Finance above conforming limits', 'Competitive rates for strong borrowers', 'Multiple term options including ARM and I/O', 'Available for primary, second home, and investment', 'No mortgage insurance requirement'],
    tradeoffs: ['Higher credit and reserve requirements', 'Larger down payment than conforming', 'More documentation typically required', 'Two appraisals may be needed for higher loan amounts', 'Not government-backed'],
    commonScenarios: [
        { title: 'Executive Buying in a High-Cost Market', description: 'A physician purchasing a $1.2M home in Southern California puts 20% down and finances $960K — well above conforming limits. Jumbo program provides a competitive 30-year fixed rate.' },
        { title: 'Second Home Purchase', description: 'A family buying a $900K vacation property in Colorado. Jumbo financing at 15% down with a 7/1 ARM for a lower initial rate.' },
    ],
    documentsNeeded: ['Two years of tax returns', 'Two years of W-2s', 'Recent pay stubs', 'Asset/bank statements (2–3 months)', 'Proof of reserves', 'Government-issued ID'],
    faqs: [
        { question: 'What is the current conforming loan limit?', answer: 'For 2024, the standard conforming limit is $766,550 in most areas. High-cost areas have limits up to $1,149,825. Amounts above these limits require jumbo financing.' },
        { question: 'Are jumbo rates higher?', answer: 'Not necessarily. For well-qualified borrowers (700+ credit, 20% down, strong reserves), jumbo rates are often very competitive with — or even below — conforming rates.' },
        { question: 'Can I get a jumbo loan with 10% down?', answer: 'Yes, depending on the loan amount and your credit profile. Many lenders offer 10% down up to certain loan amounts, with PMI or no PMI depending on program structure.' },
    ],
    relatedProducts: [
        { title: 'Conventional Loans', href: '/home-loans/conventional-loans', description: 'Conforming limit financing' },
        { title: 'Non-QM Loans', href: '/home-loans/non-qm-loans', description: 'Flexible qualification options' },
        { title: 'Jumbo Refinance', href: '/refinance/jumbo-refinance', description: 'Refinance your jumbo mortgage' },
    ],
};

export default function JumboLoansPage() { return <LoanPageTemplate data={data} />; }
