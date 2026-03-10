import Link from 'next/link';
import styles from './CTABanner.module.css';

interface CTABannerProps {
    heading?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    variant?: 'dark' | 'blue' | 'light';
}

export default function CTABanner({
    heading = 'Ready to Get Started?',
    description = 'Connect with a mortgage advisor to explore the best options for your situation.',
    primaryLabel = 'Get Pre-Approved',
    primaryHref = '/get-pre-approved',
    secondaryLabel = 'Talk to an Advisor',
    secondaryHref = '/book-consultation',
    variant = 'blue',
}: CTABannerProps) {
    return (
        <section className={`${styles.banner} ${styles[variant]}`}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>{heading}</h2>
                        <p className={styles.description}>{description}</p>
                    </div>
                    <div className={styles.actions}>
                        <Link href={primaryHref} className={`btn ${variant === 'light' ? 'btn--primary' : 'btn--white'} btn--lg`}>
                            {primaryLabel}
                        </Link>
                        {secondaryLabel && (
                            <Link href={secondaryHref} className={`btn ${variant === 'light' ? 'btn--secondary' : 'btn--ghost'} btn--lg`}>
                                {secondaryLabel}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
