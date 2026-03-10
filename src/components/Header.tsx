'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navItems = [
  {
    label: 'Buy',
    href: '/buy',
    children: [
      { label: 'First-Time Homebuyer', href: '/buy/first-time-homebuyer' },
      { label: 'Primary Residence', href: '/buy/primary-residence-loans' },
      { label: 'Second Home', href: '/buy/second-home-loans' },
      { label: 'Investment Property', href: '/buy/investment-property-loans' },
      { label: 'Condo Loans', href: '/buy/condo-loans' },
      { label: 'New Construction', href: '/buy/new-construction-loans' },
      { label: 'Manufactured Homes', href: '/buy/manufactured-home-loans' },
      { label: 'Multi-Unit Properties', href: '/buy/multi-unit-property-loans' },
    ],
  },
  {
    label: 'Refinance',
    href: '/refinance',
    children: [
      { label: 'Refinance Overview', href: '/refinance' },
      { label: 'Rate & Term Refinance', href: '/refinance/rate-and-term' },
      { label: 'Cash-Out Refinance', href: '/refinance/cash-out-refinance' },
      { label: 'Debt Consolidation', href: '/refinance/debt-consolidation' },
      { label: 'Home Improvement', href: '/refinance/home-improvement' },
      { label: 'Investment Property', href: '/refinance/investment-property' },
      { label: 'VA IRRRL', href: '/refinance/va-irrrl' },
      { label: 'FHA Streamline', href: '/refinance/fha-streamline' },
      { label: 'Jumbo Refinance', href: '/refinance/jumbo-refinance' },
    ],
  },
  {
    label: 'Loan Programs',
    href: '/home-loans',
    children: [
      { label: 'Conventional Loans', href: '/home-loans/conventional-loans' },
      { label: 'FHA Loans', href: '/home-loans/fha-loans' },
      { label: 'VA Loans', href: '/home-loans/va-loans' },
      { label: 'USDA Loans', href: '/home-loans/usda-loans' },
      { label: 'Jumbo Loans', href: '/home-loans/jumbo-loans' },
      { label: 'Non-QM Loans', href: '/home-loans/non-qm-loans' },
      { label: 'DSCR Loans', href: '/home-loans/dscr-loans' },
      { label: 'Bank Statement Loans', href: '/home-loans/bank-statement-loans' },
      { label: 'ITIN Loans', href: '/home-loans/itin-loans' },
      { label: 'View All Programs →', href: '/home-loans' },
    ],
  },
  {
    label: 'Commercial & SBA',
    href: '/commercial-loans',
    children: [
      { label: 'Commercial Overview', href: '/commercial-loans' },
      { label: 'Commercial Real Estate', href: '/commercial-loans/commercial-real-estate' },
      { label: 'Multifamily Financing', href: '/commercial-loans/multifamily-financing' },
      { label: 'Fix & Flip Loans', href: '/commercial-loans/fix-and-flip' },
      { label: 'SBA Loans Overview', href: '/sba-loans' },
      { label: 'SBA 7(a) Loans', href: '/sba-loans/sba-7a-loans' },
      { label: 'SBA 504 Loans', href: '/sba-loans/sba-504-loans' },
    ],
  },
  {
    label: 'Calculators',
    href: '/calculators',
    children: [
      { label: 'Mortgage Calculator', href: '/calculators/mortgage-calculator' },
      { label: 'Affordability Calculator', href: '/calculators/home-affordability-calculator' },
      { label: 'Refinance Calculator', href: '/calculators/refinance-calculator' },
      { label: 'DSCR Calculator', href: '/calculators/dscr-calculator' },
      { label: 'Amortization Schedule', href: '/calculators/amortization-calculator' },
      { label: 'All Calculators →', href: '/calculators' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'About',
    href: '/about',
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <span className={styles.logoIcon}>A</span>
          <span className={styles.logoText}>
            Airus <span className={styles.logoTextBold}>Lending</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <div
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={item.href} className={styles.navLink}>
                {item.label}
                {item.children && (
                  <svg className={styles.chevron} width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>
              {item.children && activeDropdown === item.label && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownInner}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.dropdownLink}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className={styles.desktopCtas}>
          <Link href="/book-consultation" className={`btn btn--secondary btn--sm`}>
            Talk to an Advisor
          </Link>
          <Link href="/get-pre-approved" className={`btn btn--primary btn--sm`}>
            Get Pre-Approved
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.mobileNavItem}>
                <div className={styles.mobileNavTop}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className={`${styles.mobileChevron} ${mobileExpanded === item.label ? styles.mobileChevronOpen : ''}`}
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      aria-label={`Expand ${item.label}`}
                    >
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className={styles.mobileSubnav}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.mobileSubLink}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className={styles.mobileCtas}>
            <Link href="/get-pre-approved" className="btn btn--primary btn--full" onClick={() => setMobileOpen(false)}>
              Get Pre-Approved
            </Link>
            <Link href="/book-consultation" className="btn btn--secondary btn--full" onClick={() => setMobileOpen(false)}>
              Talk to an Advisor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
