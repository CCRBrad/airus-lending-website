import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  metadataBase: new URL('https://airuslending.com'),
  title: {
    default: "Airus Lending — Mortgage Broker & Home Loan Experts",
    template: "%s | Airus Lending",
  },
  description:
    "Airus Lending offers residential, commercial, and SBA financing with expert guidance. Conventional, FHA, VA, DSCR, bank statement, and non-QM loan programs. Get pre-approved today.",
  keywords: [
    "mortgage broker",
    "home loans",
    "FHA loans",
    "VA loans",
    "DSCR loans",
    "bank statement loans",
    "commercial loans",
    "SBA loans",
    "refinance",
    "pre-approval",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Airus Lending",
    title: "Airus Lending — Mortgage Broker & Home Loan Experts",
    description: "50+ residential, commercial, and SBA loan programs. Expert guidance, competitive rates. Get pre-approved today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airus Lending — Mortgage Broker & Home Loan Experts",
    description: "50+ residential, commercial, and SBA loan programs. Expert guidance, competitive rates.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://airuslending.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <OrganizationSchema />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main
          id="main-content"
          style={{ paddingTop: 'var(--header-height)', minHeight: '100vh' }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
