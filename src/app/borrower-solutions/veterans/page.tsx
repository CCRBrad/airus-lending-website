import type { Metadata } from 'next';
import BorrowerTemplate from '@/templates/BorrowerTemplate';
export const metadata: Metadata = { title: 'Mortgage Solutions for Veterans & Service Members', description: 'VA loans with zero down payment and no PMI for veterans, active duty, and surviving spouses. Airus Lending.' };
const data = {
    badge: 'Veterans', title: 'Veteran & Military Mortgage Solutions', subtitle: 'You served our country — now let your VA benefits work for you. Zero down, no PMI, and the best rates available.',
    overview: 'VA loans are the most powerful mortgage benefit available to U.S. veterans, active-duty service members, Guard/Reserve members, and eligible surviving spouses. With zero down payment, no monthly mortgage insurance, and consistently the lowest rates in the market, VA loans make homeownership more affordable than any other program. Airus Lending is proud to serve those who have served.',
    challenges: [
        { title: 'Understanding VA Eligibility', description: 'Not all veterans know they qualify, or they think their benefit has been "used up."' },
        { title: 'Finding VA-Experienced Lenders', description: 'Not all lenders understand VA guidelines — working with a specialist matters.' },
        { title: 'PCS & Deployment Timing', description: 'Military moves and deployments create unique timing and location challenges.' },
    ],
    solutions: [
        { title: 'VA Purchase Loans', description: 'Zero down, no PMI, lowest rates.', href: '/home-loans/va-loans' },
        { title: 'VA IRRRL Refinance', description: 'Streamlined rate reduction.', href: '/refinance/va-irrrl' },
        { title: 'VA Construction', description: 'Build your home with VA benefits.', href: '/home-loans/va-construction-loans' },
        { title: 'VA Cash-Out', description: 'Access equity up to 100% LTV.', href: '/home-loans/va-loans' },
    ],
    qualificationTips: [
        'Obtain your Certificate of Eligibility (COE) — we can pull this for you in minutes.',
        'VA entitlement can be restored and reused. You are not limited to one VA loan in your lifetime.',
        'The VA funding fee can be waived if you have a service-connected disability.',
        'VA loans allow for higher DTI ratios than conventional, making qualification easier.',
    ],
    steps: [
        { number: 1, title: 'Verify Eligibility', description: 'We pull your COE and confirm your VA entitlement status.' },
        { number: 2, title: 'Get Pre-Approved', description: 'VA pre-approval with zero-down financing and competitive rates.' },
        { number: 3, title: 'Find & Close', description: 'Use your VA benefit to buy, build, or refinance — we handle the rest.' },
    ],
    faqs: [
        { question: 'Can I use my VA benefit more than once?', answer: 'Yes. VA entitlement can be restored when you sell a home or pay off the VA loan. You can also have two VA loans simultaneously with remaining entitlement.' },
        { question: 'Is there really no down payment?', answer: 'Correct. VA loans offer 100% financing with zero down payment required.' },
        { question: 'What is the VA funding fee?', answer: 'A one-time fee (1.25–3.3% depending on use and down payment) that can be financed into the loan. It is waived for veterans with service-connected disabilities.' },
    ],
    ctaHeading: 'Ready to Use Your VA Benefit?', ctaDescription: 'Get pre-approved with zero down and the best rates available — you earned it.',
};
export default function VeteransPage() { return <BorrowerTemplate data={data} />; }
