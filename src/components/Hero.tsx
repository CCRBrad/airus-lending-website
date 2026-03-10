import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
    badge?: string;
    title: string;
    subtitle: string;
    primaryCTA?: { label: string; href: string };
    secondaryCTA?: { label: string; href: string };
    variant?: 'home' | 'dark' | 'light';
    align?: 'center' | 'left';
}

export default function Hero({
    badge,
    title,
    subtitle,
    primaryCTA = { label: 'Get Pre-Approved', href: '/get-pre-approved' },
    secondaryCTA = { label: 'Talk to an Advisor', href: '/book-consultation' },
    variant = 'dark',
    align = 'center',
}: HeroProps) {
    return (
        <section className={`${styles.hero} ${styles[variant]} ${styles[`align-${align}`]}`}>
            <div className={styles.bg} />
            <div className="container">
                <div className={styles.content}>
                    {badge && <span className={styles.badge}>{badge}</span>}
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <div className={styles.actions}>
                        {primaryCTA && (
                            <Link href={primaryCTA.href} className="btn btn--primary btn--lg">
                                {primaryCTA.label}
                            </Link>
                        )}
                        {secondaryCTA && (
                            <Link
                                href={secondaryCTA.href}
                                className={`btn ${variant === 'light' ? 'btn--secondary' : 'btn--ghost'} btn--lg`}
                            >
                                {secondaryCTA.label}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
